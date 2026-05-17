import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const srcRoot = join(root, "src");
const violations = [];

const sideEffectImports = ["fs", "node:fs", "node:fs/promises", "child_process", "node:child_process"];
const domainEntrypoints = ["../domain/index.js", "../domain/types.js"];

function toPosix(path) {
  return path.split(sep).join("/");
}

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(fullPath)));
    if (entry.isFile() && entry.name.endsWith(".ts")) files.push(fullPath);
  }

  return files;
}

function layerOf(file) {
  if (file.startsWith("src/domain/")) return "domain";
  if (file.startsWith("src/engine/")) return "engine";
  if (file.startsWith("src/diagnostics/")) return "diagnostics";
  if (file.startsWith("src/orchestration/")) return "orchestration";
  if (file === "src/agents.ts" || file.startsWith("src/agents/")) return "agents";
  return "legacy";
}

function importsFrom(source) {
  const imports = [];
  const patterns = [
    /import\s+(?:type\s+)?(?:[^"']+?\s+from\s+)?["']([^"']+)["']/g,
    /export\s+(?:type\s+)?[^"']+?\s+from\s+["']([^"']+)["']/g
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(source)) !== null) imports.push(match[1]);
  }

  return imports;
}

function fail(file, importPath, rule) {
  violations.push({ file, importPath, rule });
}

function check(file, layer, importPath) {
  if (["domain", "engine", "diagnostics", "orchestration"].includes(layer) && sideEffectImports.includes(importPath)) {
    fail(file, importPath, `${layer} must not import side-effect modules`);
  }

  if (layer === "domain") {
    if (importPath.includes("../engine") || importPath.includes("../diagnostics") || importPath.includes("../orchestration") || importPath.includes("../integrations")) {
      fail(file, importPath, "domain must not import outer layers");
    }
  }

  if (layer === "engine") {
    if (importPath.includes("../source-registry") || importPath.includes("../project-state") || importPath.includes("../diagnostics") || importPath.includes("../orchestration") || importPath.includes("../agents")) {
      fail(file, importPath, "engine must stay independent from registry, state, diagnostics, orchestration and agents");
    }
    if (importPath.startsWith("../domain/") && !domainEntrypoints.includes(importPath)) {
      fail(file, importPath, "engine must import domain through a public domain entrypoint");
    }
  }

  if (layer === "diagnostics") {
    if (importPath.includes("../source-registry") || importPath.includes("../project-state") || importPath.includes("../integrations")) {
      fail(file, importPath, "diagnostics must not import registry, state or integrations");
    }
    if (importPath.startsWith("../domain/") && !domainEntrypoints.includes(importPath)) {
      fail(file, importPath, "diagnostics must import domain through a public domain entrypoint");
    }
    if (importPath.startsWith("../engine/") && importPath !== "../engine/index.js") {
      fail(file, importPath, "diagnostics must import engine through ../engine/index.js");
    }
  }

  if (layer === "orchestration") {
    if (importPath.startsWith("../domain/") && !domainEntrypoints.includes(importPath)) {
      fail(file, importPath, "orchestration must import domain through a public domain entrypoint");
    }
    if (importPath.startsWith("../engine/") && importPath !== "../engine/index.js") {
      fail(file, importPath, "orchestration must import engine through ../engine/index.js");
    }
    if (importPath.startsWith("../diagnostics/") && importPath !== "../diagnostics/index.js") {
      fail(file, importPath, "orchestration must import diagnostics through ../diagnostics/index.js");
    }
  }

  if (layer === "agents") {
    if (importPath.startsWith("./diagnostics/") && importPath !== "./diagnostics/index.js") {
      fail(file, importPath, "agents must import diagnostics through ./diagnostics/index.js");
    }
    if (importPath.startsWith("./engine/") && importPath !== "./engine/index.js") {
      fail(file, importPath, "agents must import engine through ./engine/index.js");
    }
    if (importPath.startsWith("./orchestration/") && importPath !== "./orchestration/index.js") {
      fail(file, importPath, "agents must import orchestration through ./orchestration/index.js");
    }
    if (importPath.startsWith("./domain/") && importPath !== "./domain/index.js") {
      fail(file, importPath, "agents must import domain through ./domain/index.js");
    }
  }
}

const files = await listFiles(srcRoot);

for (const fullPath of files) {
  const file = toPosix(relative(root, fullPath));
  const layer = layerOf(file);
  const source = await readFile(fullPath, "utf8");

  for (const importPath of importsFrom(source)) check(file, layer, importPath);
}

if (violations.length > 0) {
  console.error("Import boundary violations detected:\n");
  for (const violation of violations) {
    console.error(`- ${violation.file}: ${violation.importPath}`);
    console.error(`  ${violation.rule}`);
  }
  process.exit(1);
}

console.log("Import boundaries OK.");

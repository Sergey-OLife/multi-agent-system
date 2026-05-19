import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();
const sourceCardsDir = "knowledge/04_processed/source_cards";

const readProjectFile = (path: string): string => readFileSync(join(root, path), "utf8");

const readRegistry = (): {
  version: string;
  sources: Array<Record<string, string>>;
} => JSON.parse(readProjectFile("knowledge/00_manifest/sources.registry.json"));

const sourceCardFiles = (): string[] =>
  readdirSync(join(root, sourceCardsDir))
    .filter((file: string) => file.endsWith(".md") && file !== "source-card.template.md")
    .sort();

test("sources registry parses as valid JSON", () => {
  const registry = readProjectFile("knowledge/00_manifest/sources.registry.json");

  assert.doesNotThrow(() => JSON.parse(registry));
});

test("sources registry contains at least 57 sources", () => {
  const registry = readRegistry();

  assert.ok(/^\d+\.\d+$/.test(registry.version), "registry version should use major.minor format");
  assert.ok(registry.sources.length >= 57, "registry should contain at least 57 sources");
});

test("every registry entry has required source card fields", () => {
  const registry = readRegistry();
  const requiredFields = [
    "source_id",
    "title",
    "source_type",
    "path",
    "priority_level",
    "processed_status"
  ];

  for (const source of registry.sources) {
    for (const requiredField of requiredFields) {
      assert.equal(typeof source[requiredField], "string", `${requiredField} should be a string`);
      assert.ok(source[requiredField].length > 0, `${requiredField} should be present`);
    }
    assert.ok(existsSync(join(root, source.path)), `${source.path} should exist`);
  }
});

test("key source cards exist", () => {
  const keySourceCards = [
    "01_plotnikov_reasonable_network_marketing.md",
    "38_svod_project_card.md",
    "39_mvp_project_card.md",
    "40_context_sources_map_card.md",
    "42_sync_packages_card.md",
    "48_spiritual_sphere_business_boundary_card.md",
    "50_materials_far_headlight_instruction_card.md",
    "54_frequency_language_card.md",
    "57_client_followup_medical_caution_card.md"
  ];

  for (const keySourceCard of keySourceCards) {
    assert.ok(existsSync(join(root, sourceCardsDir, keySourceCard)), `${keySourceCard} should exist`);
  }
});



test("registry contains every created source card", () => {
  const registry = readRegistry();
  const registryPaths = new Set(registry.sources.map((source) => source.path));

  for (const sourceCardFile of sourceCardFiles()) {
    const expectedPath = `${sourceCardsDir}/${sourceCardFile}`;

    assert.ok(registryPaths.has(expectedPath), `${expectedPath} should be registered`);
  }
});

test("registry does not point to raw book paths", () => {
  const registry = readRegistry();
  const rawPathFragments = [
    "knowledge/01_raw_private/",
    "knowledge/03_source_books/"
  ];

  for (const source of registry.sources) {
    assert.ok(
      !rawPathFragments.some((fragment) => source.path.includes(fragment)),
      `${source.path} should not point to raw book paths`
    );
  }
});

test("no raw book formats are committed", () => {
  const committedFiles = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
  const rawBookExtensions = [".pdf", ".epub", ".djvu", ".mobi"];

  for (const committedFile of committedFiles) {
    assert.ok(
      !rawBookExtensions.some((extension) => committedFile.toLowerCase().endsWith(extension)),
      `${committedFile} should not be committed`
    );
  }
});

test("every source card contains copyright_status", () => {
  for (const sourceCardFile of sourceCardFiles()) {
    const sourceCard = readProjectFile(join(sourceCardsDir, sourceCardFile));

    assert.ok(sourceCard.includes("copyright_status:"), `${sourceCardFile} should contain copyright_status`);
  }
});

test("no source card filename contains direct internal confessional wording", () => {
  const forbiddenFilenameFragments = [
    "church",
    "congregation",
    "confession",
    "denomination",
    "religion",
    "religious",
    "церковь",
    "церков",
    "конфесс",
    "религи",
    "прихож"
  ];

  for (const sourceCardFile of sourceCardFiles()) {
    const normalizedFilename = sourceCardFile.toLowerCase();

    assert.ok(
      !forbiddenFilenameFragments.some((fragment) => normalizedFilename.includes(fragment)),
      `${sourceCardFile} should not contain direct internal confessional wording`
    );
  }
});

test("source cards do not use the forbidden Kalench voice phrase", () => {
  for (const sourceCardFile of sourceCardFiles()) {
    const sourceCard = readProjectFile(join(sourceCardsDir, sourceCardFile));

    assert.ok(!sourceCard.includes("Каленчевский голос"), `${sourceCardFile} should not use forbidden phrase`);
  }
});

test("cards may mention Kalench as a source, but the project voice is Tikhiy Master", () => {
  for (const sourceCardFile of sourceCardFiles()) {
    const sourceCard = readProjectFile(join(sourceCardsDir, sourceCardFile));

    if (sourceCard.includes("Каленч")) {
      assert.ok(sourceCard.includes("Тихий Мастер"), `${sourceCardFile} should name Тихий Мастер`);
    }
  }
});

test("source-card template includes copyright and synthesis guardrails", () => {
  const template = readProjectFile("knowledge/04_processed/source_cards/source-card.template.md");

  for (const requiredField of [
    "copyright_status",
    "what_to_preserve",
    "what_not_to_copy",
    "related_agents"
  ]) {
    assert.ok(template.includes(requiredField), `${requiredField} should be present`);
  }
});

test("gitignore blocks raw book formats", () => {
  const gitignore = readProjectFile(".gitignore");

  for (const ignoredPattern of ["*.pdf", "*.epub", "*.mobi", "*.djvu"]) {
    assert.ok(gitignore.includes(ignoredPattern), `${ignoredPattern} should be ignored`);
  }
});

test("key knowledge directories are represented by gitkeep files", () => {
  const gitkeepFiles = [
    "knowledge/02_project_rules/svod/.gitkeep",
    "knowledge/02_project_rules/mvp/.gitkeep",
    "knowledge/02_project_rules/update_packages/.gitkeep",
    "knowledge/02_project_rules/sync_packages/.gitkeep",
    "knowledge/03_source_books/plotnikov/.gitkeep",
    "knowledge/03_source_books/mlm_library/.gitkeep",
    "knowledge/03_source_books/psychology_library/.gitkeep",
    "knowledge/03_source_books/business_library/.gitkeep",
    "knowledge/03_source_books/dramaturgy_library/.gitkeep",
    "knowledge/04_processed/plotnikov_map/.gitkeep",
    "knowledge/04_processed/book_summaries/.gitkeep",
    "knowledge/04_processed/extracted_formulas/.gitkeep",
    "knowledge/04_processed/context_packs/.gitkeep",
    "knowledge/05_agent_memory/context_delta/.gitkeep",
    "knowledge/05_agent_memory/svod_delta/.gitkeep",
    "knowledge/05_agent_memory/mvp_delta/.gitkeep",
    "knowledge/05_agent_memory/sync_delta/.gitkeep",
    "knowledge/05_agent_memory/style_delta/.gitkeep",
    "knowledge/05_agent_memory/mastery_delta/.gitkeep",
    "knowledge/06_work_inbox/incoming_materials/.gitkeep",
    "knowledge/06_work_inbox/to_classify/.gitkeep",
    "knowledge/06_work_inbox/to_process/.gitkeep"
  ];

  for (const gitkeepFile of gitkeepFiles) {
    assert.ok(existsSync(join(root, gitkeepFile)), `${gitkeepFile} should exist`);
  }
});

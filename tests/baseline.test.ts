import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import type { ProjectResumeDiagnostics } from "../src/index.js";
import { loadProjectState, projectStatePath, routeRequest, routes } from "../src/index.js";

test("FinalResult has the required baseline shape", () => {
  const result = routeRequest("Вычисти главу книги, добавь драматургии");

  assert.equal(result.status, "ready");
  assert.equal(result.taskType, "chapter_editing");
  assert.equal(result.riskLevel, "low");
  assert.deepEqual(result.blockedBy, []);
  assert.ok(Array.isArray(result.usedAgents));
  assert.ok(Array.isArray(result.agentResults));
  assert.equal(typeof result.finalText, "string");
  assert.equal(typeof result.diagnostics, "object");
});

test("chapter_editing route matches the requested baseline", () => {
  assert.deepEqual(routes.chapter_editing, [
    "task_classifier",
    "contextologist",
    "svod_guard",
    "synchronization_mapper",
    "chapter_designer",
    "plotnikov_motor",
    "anti_cliche_editor",
    "ethics_guard",
    "response_composer"
  ]);
});

test("fact_risk_checker blocks unsupported diabetes treatment claims", () => {
  const result = routeRequest("Напиши пост, что продукт лечит диабет");

  assert.equal(result.status, "blocked");
  assert.equal(result.taskType, "social_post");
  assert.deepEqual(result.blockedBy, ["fact_risk_checker"]);
});

test("ethics_guard blocks manipulative scarcity", () => {
  const result = routeRequest(
    "Напиши так, чтобы человек понял: если не купит сейчас, он упустит последний шанс"
  );

  assert.equal(result.status, "blocked");
  assert.deepEqual(result.blockedBy, ["ethics_guard"]);
});

test("requested product and mastery prompts use their routes", () => {
  const mvp = routeRequest("Собери MVP приложения для маршрута новичка");
  const mastery = routeRequest("Построй маршрут мастерства по навыку сон");

  assert.equal(mvp.taskType, "mvp_product");
  assert.ok(mvp.usedAgents.includes("mvp_method_architect"));
  assert.equal(mastery.taskType, "skill_development");
  assert.ok(mastery.usedAgents.includes("mastery_tracker_agent"));
});

test("MVP prompts that say построй stay on the MVP route", () => {
  const result = routeRequest("Построй MVP приложения для маршрута новичка");

  assert.equal(result.taskType, "mvp_product");
  assert.ok(result.usedAgents.includes("mvp_method_architect"));
  assert.notDeepStrictEqual(result.usedAgents, routes.social_post);
});

test("построй, построить and построение are not social-post signals", () => {
  assert.equal(routeRequest("Построй систему маршрутов").taskType, "general");
  assert.equal(routeRequest("Построить архитектуру проекта").taskType, "general");
  assert.equal(routeRequest("Построение маршрута работы").taskType, "general");
});

test("explicit social-post signals route to social_post", () => {
  assert.equal(routeRequest("Напиши пост для Telegram").taskType, "social_post");
  assert.equal(routeRequest("Сделай Reels для соцсетей").taskType, "social_post");
  assert.equal(routeRequest("Подготовь карусель").taskType, "social_post");
  assert.equal(routeRequest("Сделай публикацию").taskType, "social_post");
});

test("foundation agents add structured diagnostics on chapter editing route", () => {
  const result = routeRequest("Вычисти главу книги, добавь драматургии");

  assert.ok(result.usedAgents.includes("contextologist"));
  assert.ok(result.usedAgents.includes("svod_guard"));
  assert.ok(result.usedAgents.includes("synchronization_mapper"));
  assert.equal(typeof result.diagnostics.contextPack, "object");
  assert.equal(typeof result.diagnostics.svodCheck, "object");
  assert.equal(typeof result.diagnostics.synchronizationMap, "object");
});

test("contextologist adds chapter editing context pack", () => {
  const result = routeRequest("Вычисти главу книги, добавь драматургии");
  const contextPack = result.diagnostics.contextPack as {
    taskType: string;
    relevantKnowledgeFolders: string[];
    requiredAgents: string[];
    forbiddenLeaks: string[];
  };

  assert.equal(contextPack.taskType, "chapter_editing");
  assert.deepEqual(contextPack.relevantKnowledgeFolders, [
    "knowledge/02_project_rules/svod",
    "knowledge/02_project_rules/sync_packages",
    "knowledge/04_processed/plotnikov_map",
    "knowledge/05_agent_memory/context_delta"
  ]);
  assert.ok(contextPack.requiredAgents.includes("svod_guard"));
  assert.ok(contextPack.requiredAgents.includes("synchronization_mapper"));
  assert.ok(contextPack.forbiddenLeaks.includes("не делать пересказ Плотникова"));
});

test("svod_guard adds svod check and warns on Plotnikov retelling request", () => {
  const result = routeRequest("перескажи Плотникова как нашу главу");
  const svodCheck = result.diagnostics.svodCheck as {
    status: string;
    violatedRules: string[];
    riskyFragments: string[];
    requiredRewrites: string[];
  };

  assert.notStrictEqual(result.status, "ready");
  assert.equal(result.status, "needs_revision");
  assert.equal(svodCheck.status, "needs_revision");
  assert.ok(svodCheck.violatedRules.includes("книга не должна быть пересказом Плотникова"));
  assert.ok(svodCheck.riskyFragments.includes("перескажи Плотникова как нашу главу"));
  assert.ok(svodCheck.requiredRewrites.length > 0);
});

test("svod_guard handles Plotnikov retelling variants", () => {
  const variants = [
    "перескажи Плотникова как главу",
    "перескажи Плотникова для нашей главы",
    "пересказать Плотникова в нашу главу",
    "сделай пересказ Плотникова как главу"
  ];

  for (const prompt of variants) {
    const result = routeRequest(prompt);
    const svodCheck = result.diagnostics.svodCheck as {
      status: string;
      violatedRules: string[];
      requiredRewrites: string[];
    };

    assert.equal(result.status, "needs_revision");
    assert.equal(svodCheck.status, "needs_revision");
    assert.ok(svodCheck.violatedRules.includes("книга не должна быть пересказом Плотникова"));
    assert.ok(svodCheck.requiredRewrites.length > 0);
  }
});

test("svod_guard allows Plotnikov synchronization references without retelling request", () => {
  const result = routeRequest("используй карту Плотникова как источник синхронизации");
  const svodCheck = result.diagnostics.svodCheck as {
    status: string;
    violatedRules: string[];
  };

  assert.notEqual(result.status, "blocked");
  assert.notEqual(result.status, "needs_revision");
  assert.equal(svodCheck.status, "passed");
  assert.deepEqual(svodCheck.violatedRules, []);
});

test("synchronization_mapper adds synchronization map for chapter-related request", () => {
  const result = routeRequest("Вычисти главу книги, добавь драматургии");
  const synchronizationMap = result.diagnostics.synchronizationMap as {
    sourceBook: string;
    integrationStatus: string;
    synthesisLayers: string[];
    nextWorkingPoint: string;
  };

  assert.equal(synchronizationMap.sourceBook, "Алексей Плотников — Разумный сетевой маркетинг");
  assert.equal(synchronizationMap.integrationStatus, "mock_sync_required");
  assert.deepEqual(synchronizationMap.synthesisLayers, [
    "Каленч",
    "Гербер",
    "Бек",
    "McGonigal",
    "Сократовский подход",
    "защищённое пространство",
    "Усилитель идеи",
    "Хмелевская"
  ]);
  assert.equal(
    synchronizationMap.nextWorkingPoint,
    "Требуется актуальная карта синхронизации из knowledge/02_project_rules/sync_packages или knowledge/04_processed/plotnikov_map."
  );
});

test("MVP route receives mvp-related context pack folders", () => {
  const result = routeRequest("Собери MVP приложения для маршрута новичка");
  const contextPack = result.diagnostics.contextPack as {
    taskType: string;
    relevantKnowledgeFolders: string[];
    requiredAgents: string[];
  };

  assert.equal(result.taskType, "mvp_product");
  assert.equal(contextPack.taskType, "mvp_product");
  assert.deepEqual(contextPack.relevantKnowledgeFolders, [
    "knowledge/02_project_rules/mvp",
    "knowledge/05_agent_memory/mvp_delta",
    "knowledge/04_processed/context_packs"
  ]);
  assert.ok(contextPack.requiredAgents.includes("mvp_method_architect"));
});

test("project_resume route exists and uses project_resume_agent", () => {
  assert.deepEqual(routes.project_resume, ["task_classifier", "project_resume_agent", "response_composer"]);

  const result = routeRequest("resume project");

  assert.equal(result.taskType, "project_resume");
  assert.ok(result.usedAgents.includes("project_resume_agent"));
});

test("project_resume diagnostics are derived from project-state source", () => {
  const result = routeRequest("восстанови проект");
  const projectState = loadProjectState();
  const projectResume = result.diagnostics.projectResume as ProjectResumeDiagnostics;

  assert.deepEqual(projectResume, projectState);
  assert.equal(projectResume.currentVersion, projectState.currentVersion);
  assert.equal(projectResume.nextAction, projectState.nextAction);
  assert.equal(projectResume.rawTextCommitted, false);
  assert.equal(projectResume.manualChapterUpload, true);
});


test("agents.ts does not keep a duplicate hard-coded project resume payload", () => {
  const agentsSource = readFileSync("src/agents.ts", "utf8");
  const projectState = loadProjectState();

  assert.equal(agentsSource.includes("function buildProjectResumeDiagnostics"), false);
  assert.equal(agentsSource.includes(projectState.lastMergedPr), false);
  assert.equal(agentsSource.includes(projectState.nextAction), false);
  assert.equal(agentsSource.includes("rawTextCommitted: false"), false);
  assert.equal(agentsSource.includes("manualChapterUpload: true"), false);
});

test("project resume handoff files exist and project-state records resume pointers", () => {
  assert.equal(existsSync("knowledge/05_agent_memory/handoff/restart-prompt.template.md"), true);
  assert.equal(existsSync("knowledge/05_agent_memory/handoff/latest-handoff.md"), true);
  assert.equal(existsSync(projectStatePath), true);
  assert.equal(existsSync("knowledge/00_manifest/project-state.md"), true);

  const projectState = readFileSync("knowledge/00_manifest/project-state.md", "utf8");

  assert.ok(projectState.includes("project-state.json"));
  assert.ok(/currentVersion: v1\.7/.test(projectState));
  assert.ok(/lastCompletedVersion: v1\.7/.test(projectState));
  assert.ok(/lastMergedPr: PR #18 — v1\.6 Train editor on preface review case/.test(projectState));
  assert.ok(/currentMilestone: v1\.7 Add anti-cliche review map for chapter_00_preface/.test(projectState));
  assert.ok(/v1\.6 Train anti_cliche_editor on preface review case/.test(projectState));
  assert.ok(/v1\.7 Add anti-cliche review map for chapter_00_preface/.test(projectState));
});

interface CliProjectResumeResult {
  taskType: string;
  diagnostics: {
    projectResume: {
      currentVersion: string;
      lastCompletedVersion: string;
      currentMilestone: string;
      nextAction: string;
      rawTextCommitted: boolean;
      manualChapterUpload: boolean;
    };
  };
}

function getRepoRoot(): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), "../..");
}

function parseNpmRunJson(stdout: string): CliProjectResumeResult {
  const jsonStart = stdout.indexOf("{");

  assert.notEqual(jsonStart, -1);
  return JSON.parse(stdout.slice(jsonStart)) as CliProjectResumeResult;
}

test("CLI smoke routes project resume prompts", () => {
  const english = parseNpmRunJson(execFileSync("npm", ["run", "dev", "--", "--json", "resume project"], { encoding: "utf8" }));
  const russian = parseNpmRunJson(execFileSync("npm", ["run", "dev", "--", "--json", "восстанови проект"], { encoding: "utf8" }));

  assert.equal(english.taskType, "project_resume");
  assert.equal(russian.taskType, "project_resume");
  const projectState = loadProjectState();

  assert.equal(english.diagnostics.projectResume.currentVersion, projectState.currentVersion);
  assert.equal(english.diagnostics.projectResume.lastCompletedVersion, projectState.lastCompletedVersion);
  assert.equal(russian.diagnostics.projectResume.currentMilestone, projectState.currentMilestone);
  assert.equal(russian.diagnostics.projectResume.nextAction, projectState.nextAction);
  assert.equal(russian.diagnostics.projectResume.rawTextCommitted, false);
  assert.equal(russian.diagnostics.projectResume.manualChapterUpload, true);
});

test("built CLI loads project-state from package location when launched outside the repo", () => {
  const repoRoot = getRepoRoot();
  const cliPath = join(repoRoot, "dist/src/cli.js");
  const externalCwd = mkdtempSync(join(tmpdir(), "multi-agent-system-cli-"));
  const stdout = execFileSync(process.execPath, [cliPath, "--json", "resume project"], {
    cwd: externalCwd,
    encoding: "utf8"
  });
  const result = parseNpmRunJson(stdout);
  const projectState = loadProjectState();

  assert.equal(result.taskType, "project_resume");
  assert.equal(result.diagnostics.projectResume.currentVersion, projectState.currentVersion);
  assert.equal(result.diagnostics.projectResume.nextAction, projectState.nextAction);
});

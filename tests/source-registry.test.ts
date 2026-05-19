import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildContextPack,
  getAllRouteMappedSourceIds,
  getSourceCardsByIds,
  getSourceIdsForTask,
  getSourceRegistryVersion,
  routeRequest,
  sourceIdsByTaskType
} from "../src/index.js";
import type { ContextPack, TaskType } from "../src/index.js";

function getContextPackForPrompt(prompt: string): ContextPack {
  const result = routeRequest(prompt);
  const contextPack = result.diagnostics.contextPack as ContextPack | undefined;

  assert.ok(contextPack, `contextPack should be present for: ${prompt}`);
  return contextPack as ContextPack;
}

function assertIncludesAll(actual: string[], expected: string[]): void {
  for (const sourceId of expected) {
    assert.ok(actual.includes(sourceId), `${sourceId} should be included`);
  }
}

test("source registry version has semantic major.minor shape", () => {
  assert.match(getSourceRegistryVersion(), /^\d+\.\d+$/);
});

test("every route-mapped source_id exists in registry", () => {
  assert.doesNotThrow(() => getSourceCardsByIds(getAllRouteMappedSourceIds()));
});

test("contextologist adds relevantSourceIds and sourceCards for chapter_editing", () => {
  const contextPack = getContextPackForPrompt("Вычисти главу книги, добавь драматургии");

  assert.equal(contextPack.taskType, "chapter_editing");
  assert.equal(contextPack.registryVersion, getSourceRegistryVersion());
  assert.deepEqual(contextPack.relevantSourceIds, getSourceIdsForTask("chapter_editing"));
  assert.equal(contextPack.sourceCards.length, contextPack.relevantSourceIds.length);
  assert.deepEqual(
    contextPack.sourceCards.map((sourceCard) => sourceCard.source_id),
    contextPack.relevantSourceIds
  );
});

test("chapter_editing contextPack includes required source ids", () => {
  const contextPack = buildContextPack("chapter_editing");

  assertIncludesAll(contextPack.relevantSourceIds, [
    "plotnikov_reasonable_network_marketing",
    "svod_project_card",
    "context_sources_map_card",
    "materials_far_headlight_instruction_card",
    "quiet_master_framework",
    "spiritual_sphere_business_boundary_card"
  ]);
});

test("mvp_product contextPack includes required source ids", () => {
  const contextPack = getContextPackForPrompt("Собери MVP приложения для маршрута новичка");

  assertIncludesAll(contextPack.relevantSourceIds, [
    "mvp_project_card",
    "brochure_newcomer_route_card",
    "client_followup_medical_caution_card",
    "thought_check_framework",
    "descartes_square_framework",
    "eisenhower_matrix_framework"
  ]);
});

test("social_post contextPack includes required source ids", () => {
  const contextPack = getContextPackForPrompt("Напиши пост для Telegram о продукте без медицинских обещаний");

  assertIncludesAll(contextPack.relevantSourceIds, [
    "frequency_language_card",
    "idea_amplifier_framework",
    "practical_mlm_ecology_framework",
    "client_followup_medical_caution_card"
  ]);
});

test("no contextPack sourceCards include raw book extensions", () => {
  const rawBookExtensions = [".pdf", ".epub", ".djvu", ".mobi"];
  const taskTypes = Object.keys(sourceIdsByTaskType) as TaskType[];

  for (const taskType of taskTypes) {
    const contextPack = buildContextPack(taskType);

    for (const sourceCard of contextPack.sourceCards) {
      const lowerPath = sourceCard.path.toLocaleLowerCase("ru-RU");
      for (const extension of rawBookExtensions) {
        assert.ok(!lowerPath.endsWith(extension), `${sourceCard.source_id} should not point to ${extension}`);
      }
    }
  }
});

test("no sourceCards path points to knowledge/01_raw_private", () => {
  const taskTypes = Object.keys(sourceIdsByTaskType) as TaskType[];

  for (const taskType of taskTypes) {
    const contextPack = buildContextPack(taskType);

    for (const sourceCard of contextPack.sourceCards) {
      assert.ok(
        !sourceCard.path.startsWith("knowledge/01_raw_private"),
        `${sourceCard.source_id} should not point to private raw knowledge`
      );
    }
  }
});

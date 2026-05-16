import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

const readProjectFile = (path: string): string => readFileSync(join(root, path), "utf8");

test("sources registry parses as valid JSON", () => {
  const registry = readProjectFile("knowledge/00_manifest/sources.registry.json");

  assert.doesNotThrow(() => JSON.parse(registry));
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

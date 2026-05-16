import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

const templateFiles = [
  "knowledge/04_processed/plotnikov_map/plotnikov-map.template.md",
  "knowledge/02_project_rules/sync_packages/sync-package.template.md",
  "book/01_drafts/chapter-draft.template.md",
  "book/02_reviewed/reviewed-chapter.template.md",
  "book/03_approved/approved-chapter.template.md",
  "knowledge/02_project_rules/update_packages/update-package.template.md"
];

const readProjectFile = (path: string): string => readFileSync(join(root, path), "utf8");

const templateContents = (): Array<{ path: string; content: string }> =>
  templateFiles.map((path) => ({ path, content: readProjectFile(path) }));

test("all chapter artifact template files exist", () => {
  for (const templateFile of templateFiles) {
    assert.ok(existsSync(join(root, templateFile)), `${templateFile} should exist`);
  }
});

test("Plotnikov map template records manual chapter upload guardrails", () => {
  const template = readProjectFile("knowledge/04_processed/plotnikov_map/plotnikov-map.template.md");

  assert.ok(template.includes("raw_text_committed: false"));
  assert.ok(template.includes("upload_unit: one_chapter_at_a_time"));
  assert.ok(template.includes("retelling_risks"));
});

test("sync package template contains source and Svod linking fields", () => {
  const template = readProjectFile("knowledge/02_project_rules/sync_packages/sync-package.template.md");

  assert.ok(template.includes("relevant_source_ids"));
  assert.ok(template.includes("active_svod_rules"));
});

test("chapter draft template contains voice and cliché review passes", () => {
  const template = readProjectFile("book/01_drafts/chapter-draft.template.md");

  assert.ok(template.includes("quiet_master_layer"));
  assert.ok(template.includes("anti_cliche_pass"));
});

test("approved chapter template has approved status", () => {
  const template = readProjectFile("book/03_approved/approved-chapter.template.md");

  assert.ok(template.includes("status: approved"));
});

test("update package template contains memory and next-step fields", () => {
  const template = readProjectFile("knowledge/02_project_rules/update_packages/update-package.template.md");

  assert.ok(template.includes("agent_memory_delta"));
  assert.ok(template.includes("next_working_point"));
});

test("chapter artifact templates do not reference raw book extensions", () => {
  const rawBookExtensions = [".pdf", ".epub", ".djvu", ".mobi"];

  for (const { path, content } of templateContents()) {
    const normalizedContent = content.toLowerCase();

    assert.ok(
      !rawBookExtensions.some((extension) => normalizedContent.includes(extension)),
      `${path} should not reference raw book extensions`
    );
  }
});

test("chapter artifact templates do not encourage forbidden raw-copy patterns", () => {
  const forbiddenPatterns = ["full_text_commit", "long_quotes", "close_retelling"];

  for (const { path, content } of templateContents()) {
    const normalizedContent = content.toLowerCase();

    assert.ok(
      !forbiddenPatterns.some((pattern) => normalizedContent.includes(pattern)),
      `${path} should not encourage forbidden raw-copy patterns`
    );
  }
});

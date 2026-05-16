import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

const files = {
  humanReviewGuide: "knowledge/00_manifest/human-review-guide.md",
  reviewIndex: "knowledge/05_agent_memory/review_queue/review-index.md",
  plotnikovMap: "knowledge/04_processed/plotnikov_map/plotnikov_chapter_00_preface_map.md",
  syncPackage: "knowledge/02_project_rules/sync_packages/sync_chapter_00_preface.md"
};

const templateFiles = [
  "knowledge/04_processed/plotnikov_map/plotnikov-map.template.md",
  "knowledge/02_project_rules/sync_packages/sync-package.template.md",
  "book/01_drafts/chapter-draft.template.md",
  "book/02_reviewed/reviewed-chapter.template.md",
  "book/03_approved/approved-chapter.template.md",
  "knowledge/02_project_rules/update_packages/update-package.template.md"
];

const rawBookExtensionPattern = /\.(pdf|epub|djvu|mobi)$/i;

const githubBaseUrl = "https://github.com/Sergey-OLife/multi-agent-system/blob/main";

const readProjectFile = (path: string): string => readFileSync(join(root, path), "utf8");

const containsCyrillic = (content: string): boolean => /[А-Яа-яЁё]/.test(content);

test("human review guide exists", () => {
  assert.ok(existsSync(join(root, files.humanReviewGuide)), `${files.humanReviewGuide} should exist`);
});

test("review index exists and queues chapter_00_preface for user review", () => {
  assert.ok(existsSync(join(root, files.reviewIndex)), `${files.reviewIndex} should exist`);

  const reviewIndex = readProjectFile(files.reviewIndex);

  assert.ok(reviewIndex.includes("chapter_00_preface"));
  assert.ok(reviewIndex.includes("needs_user_review"));
});


test("review index uses clickable GitHub links for queued chapter_00_preface files", () => {
  const reviewIndex = readProjectFile(files.reviewIndex);
  const expectedLinks = [
    `[Plotnikov Map — chapter_00_preface](${githubBaseUrl}/${files.plotnikovMap})`,
    `[Sync Package — chapter_00_preface](${githubBaseUrl}/${files.syncPackage})`,
    `[Human Review Guide](${githubBaseUrl}/${files.humanReviewGuide})`
  ];

  for (const expectedLink of expectedLinks) {
    assert.ok(reviewIndex.includes(expectedLink), `${files.reviewIndex} should include ${expectedLink}`);
  }

  assert.ok(reviewIndex.includes("https://github.com/Sergey-OLife/multi-agent-system/blob/main/"));
});

test("human review guide requires clickable Markdown links for review queue entries", () => {
  const humanReviewGuide = readProjectFile(files.humanReviewGuide);

  assert.ok(humanReviewGuide.includes("кликабельные Markdown-ссылки"));
  assert.ok(humanReviewGuide.includes("кликабельная Markdown-ссылка обязательна"));
  assert.ok(humanReviewGuide.includes("review-index.md"));
});

test("chapter_00_preface map and sync package exist", () => {
  assert.ok(existsSync(join(root, files.plotnikovMap)), `${files.plotnikovMap} should exist`);
  assert.ok(existsSync(join(root, files.syncPackage)), `${files.syncPackage} should exist`);
});

test("chapter_00_preface map and sync package contain Russian Cyrillic text", () => {
  assert.ok(containsCyrillic(readProjectFile(files.plotnikovMap)), `${files.plotnikovMap} should contain Cyrillic`);
  assert.ok(containsCyrillic(readProjectFile(files.syncPackage)), `${files.syncPackage} should contain Cyrillic`);
});

test("artifact templates require Russian human-readable content", () => {
  for (const templateFile of templateFiles) {
    const template = readProjectFile(templateFile);

    assert.ok(
      template.includes("Human-readable content language: Russian."),
      `${templateFile} should require Russian human-readable content`
    );
  }
});

test("no raw book extensions are committed", () => {
  const trackedFiles = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);

  const rawBookFiles = trackedFiles.filter((file) => rawBookExtensionPattern.test(file));

  assert.deepEqual(rawBookFiles, []);
});

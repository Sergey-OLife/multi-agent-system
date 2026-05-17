import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

const readProjectFile = (path: string): string => readFileSync(join(root, path), "utf8");

const committedFiles = (): string[] =>
  execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);

test("book workflow folders exist", () => {
  const workflowFolders = [
    "book",
    "book/00_manifest",
    "book/01_drafts",
    "book/02_reviewed",
    "book/03_approved",
    "book/04_print_exports"
  ];

  for (const workflowFolder of workflowFolders) {
    assert.ok(existsSync(join(root, workflowFolder)), `${workflowFolder} should exist`);
  }
});

test("chapter-status.schema.json parses as JSON", () => {
  assert.doesNotThrow(() => JSON.parse(readProjectFile("book/00_manifest/chapter-status.schema.json")));
});

test("chapter-status.example.json parses as JSON", () => {
  assert.doesNotThrow(() => JSON.parse(readProjectFile("book/00_manifest/chapter-status.example.json")));
});

test("source-location.md records Plotnikov private Drive navigation and manual upload mode", () => {
  const sourceLocation = readProjectFile("knowledge/03_source_books/plotnikov/source-location.md");

  assert.ok(sourceLocation.includes("raw_text_committed: false"));
  assert.ok(sourceLocation.includes("processing_mode: full_context_navigation_plus_manual_chapter_upload"));
  assert.ok(sourceLocation.includes("upload_unit: one_chapter_at_a_time"));
  assert.ok(sourceLocation.includes("usage_rule: full_context_navigation_and_dosage_only"));
  assert.ok(sourceLocation.includes("use_full_book_as_navigation_map"));
});

test("no raw book extensions are committed", () => {
  const rawBookExtensions = [".pdf", ".epub", ".djvu", ".mobi"];

  for (const committedFile of committedFiles()) {
    assert.ok(
      !rawBookExtensions.some((extension) => committedFile.toLowerCase().endsWith(extension)),
      `${committedFile} should not be committed`
    );
  }
});

test("approved folder exists", () => {
  assert.ok(existsSync(join(root, "book/03_approved")), "book/03_approved should exist");
});

test("print exports folder exists", () => {
  assert.ok(existsSync(join(root, "book/04_print_exports")), "book/04_print_exports should exist");
});

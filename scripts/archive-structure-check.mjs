#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const archiveRoot = path.join(root, 'knowledge/08_conversation_archive');
const entriesDir = path.join(archiveRoot, 'chat_archives');
const indexPath = path.join(archiveRoot, 'index.md');

const diagnostics = [];

function add(level, code, message, details = {}) {
  diagnostics.push({ level, code, message, ...details });
}

function relative(filePath) {
  return path.relative(root, filePath).split(path.sep).join('/');
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) result.push(...listMarkdownFiles(fullPath));
    if (item.isFile() && item.name.endsWith('.md')) result.push(fullPath);
  }
  return result.sort();
}

function isInside(childPath, parentPath) {
  const rel = path.relative(parentPath, childPath);
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
}

function extractArchiveReferences(indexText) {
  const refs = new Set();
  const pattern = /knowledge\/08_conversation_archive\/chat_archives\/[^`\s)|]+/g;
  for (const match of indexText.matchAll(pattern)) refs.add(match[0]);
  return [...refs].sort();
}

const datePrefixedArchiveName = /^[0-9]{4}-[0-9]{2}-[0-9]{2}_.+\.md$/;

if (!fs.existsSync(archiveRoot)) {
  add('warning', 'archive_root_missing', 'knowledge/08_conversation_archive is missing.');
} else {
  const allArchiveMarkdown = listMarkdownFiles(archiveRoot);
  const entryFiles = listMarkdownFiles(entriesDir);
  const entryRelSet = new Set(entryFiles.map(relative));
  const indexExists = fs.existsSync(indexPath);
  const indexText = indexExists ? readText(indexPath) : '';
  const indexReferences = extractArchiveReferences(indexText);
  const indexReferenceSet = new Set(indexReferences);

  if (!fs.existsSync(entriesDir)) {
    add('warning', 'entries_dir_missing', 'knowledge/08_conversation_archive/chat_archives is missing.');
  }

  if (!indexExists) {
    add('warning', 'archive_index_missing', 'knowledge/08_conversation_archive/index.md is missing.');
  }

  for (const filePath of allArchiveMarkdown) {
    const basename = path.basename(filePath);
    const rel = relative(filePath);

    if (!datePrefixedArchiveName.test(basename)) continue;

    if (!isInside(filePath, entriesDir)) {
      const checkId = path.dirname(filePath) === archiveRoot ? 'no_root_archive_entry' : 'archive_entry_location';
      add(
        'warning',
        checkId,
        `${rel} looks like an archive entry outside knowledge/08_conversation_archive/chat_archives/.`,
        {
          file: rel,
          expectedDirectory: 'knowledge/08_conversation_archive/chat_archives/',
          suggestedFix: 'Move the archive entry into chat_archives and update knowledge/08_conversation_archive/index.md.',
        },
      );
    }
  }

  if (indexExists) {
    for (const entry of entryFiles) {
      const rel = relative(entry);
      if (!indexReferenceSet.has(rel)) {
        add(
          'warning',
          'archive_index_reference_missing',
          `${rel} is not referenced exactly in knowledge/08_conversation_archive/index.md.`,
          {
            file: rel,
            index: 'knowledge/08_conversation_archive/index.md',
            suggestedFix: 'Add one exact matching path reference for this archive entry in the archive index.',
          },
        );
      }
    }

    for (const ref of indexReferences) {
      if (!ref.endsWith('.md')) {
        add(
          'warning',
          'archive_index_reference_extension_invalid',
          `knowledge/08_conversation_archive/index.md references a non-.md archive path: ${ref}.`,
          {
            file: ref,
            index: 'knowledge/08_conversation_archive/index.md',
            suggestedFix: 'Correct the archive index reference so it points to an existing .md archive entry.',
          },
        );
        continue;
      }

      if (!entryRelSet.has(ref)) {
        add(
          'warning',
          'archive_index_reference_broken',
          `knowledge/08_conversation_archive/index.md references a missing archive entry: ${ref}.`,
          {
            file: ref,
            index: 'knowledge/08_conversation_archive/index.md',
            suggestedFix: 'Create the referenced archive entry, correct the path, or remove the stale index reference.',
          },
        );
      }
    }
  }
}

const warningCount = diagnostics.filter((item) => item.level === 'warning').length;
const result = {
  status: warningCount > 0 ? 'warning' : 'pass',
  mode: 'advisory_warning_only',
  warningCount,
  diagnostics,
  boundary: 'This script reports archive structure consistency warnings only. It is not CI, a required check, a validator gate, a hard guardrail, project-state sync, or an automatic archive fixer.',
};

console.log(JSON.stringify(result, null, 2));

process.exit(0);

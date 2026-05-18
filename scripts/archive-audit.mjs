#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const archiveRoot = path.join(root, 'knowledge/08_conversation_archive');
const entriesDir = path.join(archiveRoot, 'chat_archives');
const indexPath = path.join(archiveRoot, 'index.md');

const maxEntryLines = Number(process.env.ARCHIVE_MAX_ENTRY_LINES || 220);
const maxEntryBytes = Number(process.env.ARCHIVE_MAX_ENTRY_BYTES || 24000);
const reviewWindowDays = Number(process.env.ARCHIVE_REVIEW_WINDOW_DAYS || 14);

const longLivedStatuses = [
  'long_lived_observation',
  'needs_decision',
  'implemented_elsewhere',
  'superseded',
  'stale',
];

const today = new Date();
const diagnostics = [];

function add(level, code, message) {
  diagnostics.push({ level, code, message });
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

function firstField(content, label) {
  const prefix = `${label}:`;
  const line = content.split('\n').find((value) => value.trim().startsWith(prefix));
  return line ? line.slice(line.indexOf(':') + 1).trim() : '';
}

function findDate(text) {
  const match = String(text || '').match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);
  if (!match) return null;
  const parsed = new Date(`${match[0]}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function daysBetween(left, right) {
  return Math.floor((left.getTime() - right.getTime()) / 86400000);
}

if (!fs.existsSync(archiveRoot)) {
  add('error', 'archive_root_missing', 'knowledge/08_conversation_archive is missing.');
} else {
  if (!fs.existsSync(indexPath)) {
    add('error', 'index_missing', 'knowledge/08_conversation_archive/index.md is missing.');
  }

  const indexText = fs.existsSync(indexPath) ? readText(indexPath) : '';
  const entries = listMarkdownFiles(entriesDir);

  if (entries.length === 0) {
    add('warn', 'no_entries', 'No conversation archive entries found.');
  }

  for (const entry of entries) {
    const rel = relative(entry);
    const content = readText(entry);
    const lineCount = content.split('\n').length;
    const byteCount = Buffer.byteLength(content, 'utf8');

    if (lineCount > maxEntryLines) {
      add('warn', 'entry_too_long', `${rel} has ${lineCount} lines; max is ${maxEntryLines}.`);
    }

    if (byteCount > maxEntryBytes) {
      add('warn', 'entry_too_large', `${rel} has ${byteCount} bytes; max is ${maxEntryBytes}.`);
    }

    const status = firstField(content, 'Статус');
    const reviewValue = firstField(content, 'Срок пересмотра');
    const implementedValue = firstField(content, 'Implemented elsewhere');
    const entryDate = findDate(firstField(content, 'Дата')) || findDate(path.basename(entry));
    const reviewDate = findDate(reviewValue);

    if (!status) add('warn', 'status_missing', `${rel} has no status field.`);
    if (!reviewDate) add('warn', 'review_date_missing', `${rel} has no parseable review date.`);
    if (!implementedValue) add('warn', 'implemented_field_missing', `${rel} has no Implemented elsewhere field.`);

    if (entryDate && reviewDate && daysBetween(reviewDate, entryDate) < reviewWindowDays) {
      add('warn', 'review_window_too_short', `${rel} review window is shorter than ${reviewWindowDays} days.`);
    }

    if (reviewDate && daysBetween(today, reviewDate) > 0 && !longLivedStatuses.includes(status)) {
      add('warn', 'review_overdue', `${rel} review date passed: ${reviewValue}.`);
    }

    if (indexText && !indexText.includes(rel)) {
      add('warn', 'missing_from_index', `${rel} is not listed in index.md.`);
    }
  }
}

const errorCount = diagnostics.filter((item) => item.level === 'error').length;
const warnCount = diagnostics.filter((item) => item.level === 'warn').length;

const result = {
  status: errorCount > 0 ? 'blocked' : warnCount > 0 ? 'needs_review' : 'clear',
  errorCount,
  warnCount,
  diagnostics,
};

console.log(JSON.stringify(result, null, 2));

if (errorCount > 0) process.exit(1);

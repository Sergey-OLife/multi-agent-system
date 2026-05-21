#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const STATE_FILES = new Set([
  'knowledge/00_manifest/project-state.json',
  'knowledge/00_manifest/project-state.md'
]);

const RESUME_FILES = new Set([
  'assistant_codex_worklog/current-state.md',
  'assistant_codex_worklog/roadmap.md',
  'assistant_codex_worklog/restart-prompt.md'
]);

const STATE_SENSITIVE_EXACT = new Set([
  'README.md',
  'knowledge/00_manifest/project-state.json',
  'knowledge/00_manifest/project-state.md',
  'assistant_codex_worklog/current-state.md',
  'assistant_codex_worklog/roadmap.md',
  'assistant_codex_worklog/restart-prompt.md',
  'assistant_codex_worklog/working-protocol.md'
]);

const STATE_SENSITIVE_PREFIXES = [
  'assistant_codex_worklog/protocol_addenda/',
  'knowledge/07_operations/',
  'knowledge/05_agent_memory/agent_shipyard/',
  'knowledge/05_agent_memory/agent_proposals/',
  '.github/workflows/'
];

function printUsage() {
  console.error(`Usage:
  node scripts/state-sync-drift-audit.mjs --files README.md,knowledge/07_operations/foo.md
  git diff --name-only main...HEAD | node scripts/state-sync-drift-audit.mjs --stdin
  node scripts/state-sync-drift-audit.mjs --base main --head HEAD

This is a warning-only local diagnostic tool. Warnings exit 0.`);
}

function parseArgs(argv) {
  const args = { files: null, stdin: false, base: null, head: 'HEAD', help: false };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else if (arg === '--stdin') {
      args.stdin = true;
    } else if (arg === '--files') {
      args.files = argv[index + 1] ?? '';
      index += 1;
    } else if (arg.startsWith('--files=')) {
      args.files = arg.slice('--files='.length);
    } else if (arg === '--base') {
      args.base = argv[index + 1] ?? '';
      index += 1;
    } else if (arg.startsWith('--base=')) {
      args.base = arg.slice('--base='.length);
    } else if (arg === '--head') {
      args.head = argv[index + 1] ?? '';
      index += 1;
    } else if (arg.startsWith('--head=')) {
      args.head = arg.slice('--head='.length);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return args;
}

function normalizePath(filePath) {
  return filePath.trim().replaceAll('\\\\', '/').replace(/^\.\//, '');
}

function splitFileList(input) {
  return input
    .split(/[\n,]/)
    .map(normalizePath)
    .filter(Boolean);
}

function readStdin() {
  return readFileSync(0, 'utf8');
}

function getGitDiffFiles(base, head) {
  const range = `${base}...${head}`;
  return execFileSync('git', ['diff', '--name-only', range], { encoding: 'utf8' });
}

function isStateSensitive(filePath) {
  return STATE_SENSITIVE_EXACT.has(filePath)
    || STATE_SENSITIVE_PREFIXES.some((prefix) => filePath.startsWith(prefix));
}

function uniqueSorted(items) {
  return [...new Set(items)].sort();
}

function buildReport(files) {
  const changedFiles = uniqueSorted(files.map(normalizePath).filter(Boolean));
  const changedStateSensitivePaths = changedFiles.filter(isStateSensitive);
  const changedStateFiles = changedFiles.filter((filePath) => STATE_FILES.has(filePath));
  const changedResumeFiles = changedFiles.filter((filePath) => RESUME_FILES.has(filePath));

  const projectStateJsonChanged = changedFiles.includes('knowledge/00_manifest/project-state.json');
  const projectStateMdChanged = changedFiles.includes('knowledge/00_manifest/project-state.md');
  const restartPromptChanged = changedFiles.includes('assistant_codex_worklog/restart-prompt.md');
  const currentStateChanged = changedFiles.includes('assistant_codex_worklog/current-state.md');
  const roadmapChanged = changedFiles.includes('assistant_codex_worklog/roadmap.md');

  const possibleMissingSync = [];

  if (changedStateSensitivePaths.length > 0 && changedStateFiles.length === 0 && changedResumeFiles.length === 0) {
    possibleMissingSync.push('state-sensitive files changed without project-state/resume files');
  }

  if (projectStateJsonChanged && !projectStateMdChanged) {
    possibleMissingSync.push('project-state.json changed without project-state.md');
  }

  if (projectStateMdChanged && !projectStateJsonChanged) {
    possibleMissingSync.push('project-state.md changed without project-state.json');
  }

  if (restartPromptChanged && !currentStateChanged && !roadmapChanged) {
    possibleMissingSync.push('restart-prompt changed without current-state or roadmap');
  }

  if ((currentStateChanged || roadmapChanged) && changedStateFiles.length === 0) {
    possibleMissingSync.push('current-state or roadmap changed without project-state files');
  }

  const status = changedStateSensitivePaths.length === 0
    ? 'not_applicable'
    : possibleMissingSync.length > 0
      ? 'warn'
      : 'pass';

  const recommendedNextStep = status === 'warn'
    ? 'review whether a state sync PR is needed; do not treat this warning as blocking'
    : status === 'pass'
      ? 'no structural state-sync drift pattern detected'
      : 'no state-sensitive files detected';

  return {
    status,
    blocking: false,
    changed_state_sensitive_paths: changedStateSensitivePaths,
    possible_missing_sync: possibleMissingSync,
    recommended_next_step: recommendedNextStep
  };
}

function printReport(report) {
  console.log('State sync drift detector — local warning-only report');
  console.log('Blocking: false');
  console.log(`Status: ${report.status}`);

  if (report.changed_state_sensitive_paths.length > 0) {
    console.log('\nChanged state-sensitive paths:');
    for (const filePath of report.changed_state_sensitive_paths) {
      console.log(`- ${filePath}`);
    }
  } else {
    console.log('\nChanged state-sensitive paths: none');
  }

  if (report.possible_missing_sync.length > 0) {
    console.log('\nPossible missing sync:');
    for (const warning of report.possible_missing_sync) {
      console.log(`- ${warning}`);
    }
  } else {
    console.log('\nPossible missing sync: none');
  }

  console.log(`\nRecommended next step: ${report.recommended_next_step}`);
  console.log('\nJSON:');
  console.log(JSON.stringify({ state_sync_drift_detector: report }, null, 2));
}

function main() {
  let args;

  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    printUsage();
    process.exit(2);
  }

  if (args.help) {
    printUsage();
    process.exit(0);
  }

  let files;

  try {
    if (args.files !== null) {
      files = splitFileList(args.files);
    } else if (args.stdin) {
      files = splitFileList(readStdin());
    } else if (args.base) {
      files = splitFileList(getGitDiffFiles(args.base, args.head || 'HEAD'));
    } else {
      console.error('No input provided. Use --files, --stdin, or --base/--head.');
      printUsage();
      process.exit(2);
    }
  } catch (error) {
    console.error(`Input error: ${error.message}`);
    process.exit(2);
  }

  const report = buildReport(files);
  printReport(report);
  process.exit(0);
}

main();

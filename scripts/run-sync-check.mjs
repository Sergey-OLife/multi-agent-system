#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const schemaVersion = 'core-api.v1';
const command = 'sync-check';
const repoRoot = process.cwd();
const defaultBinaryPath = resolve(repoRoot, 'go-core/multi-agent-core');
const binaryPath = process.env.MULTI_AGENT_CORE_BIN
  ? resolve(repoRoot, process.env.MULTI_AGENT_CORE_BIN)
  : defaultBinaryPath;

const requiredFiles = [
  ['knowledge/00_manifest/project-state.json', 'project_state_json'],
  ['knowledge/00_manifest/project-state.md', 'project_state_md'],
  ['assistant_codex_worklog/current-state.md', 'current_state'],
  ['assistant_codex_worklog/roadmap.md', 'roadmap'],
  ['assistant_codex_worklog/restart-prompt.md', 'restart_prompt'],
];

const files = [];
const wrapperWarnings = [];

for (const [path, kind] of requiredFiles) {
  const absolutePath = resolve(repoRoot, path);

  if (!existsSync(absolutePath)) {
    wrapperWarnings.push({
      severity: 'medium',
      code: `wrapper_missing_${kind}`,
      file: path,
      message: `${path} was not found while building the sync-check envelope.`,
      suggestedFix: `Restore ${path} or run the wrapper from repository root.`,
    });
    continue;
  }

  const content = readFileSync(absolutePath, 'utf8');

  files.push({
    path,
    kind,
    sha: createHash('sha256').update(content).digest('hex'),
    content,
  });
}

const projectState = parseProjectState(
  files.find((file) => file.kind === 'project_state_json')?.content,
);

const inputEnvelope = {
  schemaVersion,
  command,
  context: {
    currentMode: projectState?.currentMode ?? '',
    currentTask: projectState?.nextAction ?? '',
    lastMergedPr: projectState?.lastMergedPr ?? '',
    lastMergeCommit: projectState?.lastMergeCommit ?? '',
    approvalState: {
      plusReceived: false,
      doublePlusReceived: false,
      approvedGate: null,
    },
  },
  files,
  options: {
    strict: true,
    includeWarnings: true,
  },
};

if (!existsSync(binaryPath)) {
  output({
    schemaVersion,
    command,
    status: 'unavailable',
    summary: 'Optional Go-core binary is unavailable.',
    diagnostics: [
      ...wrapperWarnings,
      {
        severity: 'medium',
        code: 'wrapper_go_binary_missing',
        file: binaryPath,
        message: `Go-core binary was not found at ${binaryPath}.`,
        suggestedFix: 'Build Go-core binary or configure MULTI_AGENT_CORE_BIN.',
      },
    ],
    requiredUpdates: [],
    blockedActions: [],
    safeNextStep: 'Build Go-core binary and rerun sync-check.',
    transport: {
      ok: false,
      exitCode: null,
      stderr: '',
    },
  });

  process.exit(1);
}

const child = spawnSync(binaryPath, [command], {
  input: JSON.stringify(inputEnvelope),
  encoding: 'utf8',
  maxBuffer: 1024 * 1024 * 10,
});

if (child.error) {
  output({
    schemaVersion,
    command,
    status: 'unavailable',
    summary: 'Go-core process could not be started.',
    diagnostics: [
      ...wrapperWarnings,
      {
        severity: 'high',
        code: 'wrapper_go_spawn_failed',
        file: binaryPath,
        message: child.error.message,
        suggestedFix: 'Check binary permissions and executable path.',
      },
    ],
    requiredUpdates: [],
    blockedActions: [],
    safeNextStep: 'Fix Go-core invocation and rerun sync-check.',
    transport: {
      ok: false,
      exitCode: child.status,
      stderr: child.stderr ?? '',
    },
  });

  process.exit(1);
}

let parsed;

try {
  parsed = JSON.parse(child.stdout);
} catch (error) {
  output({
    schemaVersion,
    command,
    status: 'error',
    summary: 'Go-core returned invalid JSON stdout.',
    diagnostics: [
      ...wrapperWarnings,
      {
        severity: 'high',
        code: 'wrapper_invalid_stdout',
        file: null,
        message: error instanceof Error ? error.message : String(error),
        suggestedFix: 'Keep machine-readable JSON on stdout.',
      },
    ],
    requiredUpdates: [],
    blockedActions: [],
    safeNextStep: 'Fix Go-core stdout contract.',
    transport: {
      ok: false,
      exitCode: child.status,
      stderr: child.stderr ?? '',
      stdout: child.stdout ?? '',
    },
  });

  process.exit(1);
}

output({
  ...parsed,
  diagnostics: [...wrapperWarnings, ...(Array.isArray(parsed.diagnostics) ? parsed.diagnostics : [])],
  transport: {
    ok: child.status === 0,
    exitCode: child.status,
    stderr: child.stderr ?? '',
  },
});

process.exit(child.status === 0 ? 0 : 1);

function parseProjectState(content) {
  if (!content) {
    return null;
  }

  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function output(value) {
  console.log(JSON.stringify(normalize(value), null, 2));
}

function normalize(value) {
  const allowed = new Set([
    'ready',
    'needs_revision',
    'blocked',
    'error',
    'unavailable',
  ]);

  if (allowed.has(value.status)) {
    return value;
  }

  return {
    ...value,
    status: 'error',
    summary: `Unsupported status ${JSON.stringify(value.status)} was normalized to error.`,
  };
}

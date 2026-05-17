#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const schemaVersion = 'core-api.v1';
const wrapperCommand = process.argv[2] ?? 'sync-check';
const repoRoot = process.cwd();
const defaultBinaryPath = resolve(repoRoot, 'go-core/multi-agent-core');
const binaryPath = process.env.MULTI_AGENT_CORE_BIN
  ? resolve(repoRoot, process.env.MULTI_AGENT_CORE_BIN)
  : defaultBinaryPath;

const syncCheckFiles = [
  ['knowledge/00_manifest/project-state.json', 'project_state_json'],
  ['knowledge/00_manifest/project-state.md', 'project_state_md'],
  ['assistant_codex_worklog/current-state.md', 'current_state'],
  ['assistant_codex_worklog/roadmap.md', 'roadmap'],
  ['assistant_codex_worklog/restart-prompt.md', 'restart_prompt'],
];

const registryCheckFiles = [
  ['knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md', 'agent_container_registry'],
];

const commands = {
  'sync-check': {
    binaryCommand: 'sync-check',
    fileSpecs: syncCheckFiles,
  },
  'registry-check': {
    binaryCommand: 'registry-check',
    fileSpecs: registryCheckFiles,
  },
};

const commandConfig = commands[wrapperCommand];

if (!commandConfig) {
  output(unavailableResult({
    command: wrapperCommand,
    code: 'wrapper_unknown_command',
    message: `Wrapper command ${wrapperCommand} is not registered.`,
    suggestedFix: 'Register the command in the minimal transport command map.',
  }));
  process.exit(1);
}

const { files, warnings } = collectFiles(commandConfig.fileSpecs);
const projectState = parseProjectState(
  files.find((file) => file.kind === 'project_state_json')?.content,
);
const envelope = buildEnvelope({
  command: commandConfig.binaryCommand,
  files,
  projectState,
});
const result = runCoreCommand({
  binaryPath,
  command: commandConfig.binaryCommand,
  envelope,
  warnings,
});

output(result.body);
process.exit(result.exitCode);

function collectFiles(fileSpecs) {
  const collectedFiles = [];
  const collectedWarnings = [];

  for (const [path, kind] of fileSpecs) {
    const absolutePath = resolve(repoRoot, path);

    if (!existsSync(absolutePath)) {
      collectedWarnings.push({
        severity: 'medium',
        code: `wrapper_missing_${kind}`,
        file: path,
        message: `${path} was not found while building the core envelope.`,
        suggestedFix: `Restore ${path} or run the wrapper from repository root.`,
      });
      continue;
    }

    const content = readFileSync(absolutePath, 'utf8');

    collectedFiles.push({
      path,
      kind,
      sha: createHash('sha256').update(content).digest('hex'),
      content,
    });
  }

  return {
    files: collectedFiles,
    warnings: collectedWarnings,
  };
}

function buildEnvelope({ command, files, projectState }) {
  return {
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
}

function runCoreCommand({ binaryPath, command, envelope, warnings }) {
  if (!existsSync(binaryPath)) {
    return {
      body: unavailableResult({
        command,
        diagnostics: warnings,
        code: 'wrapper_go_binary_missing',
        file: binaryPath,
        message: `Go-core binary was not found at ${binaryPath}.`,
        suggestedFix: 'Build Go-core binary or configure MULTI_AGENT_CORE_BIN.',
      }),
      exitCode: 1,
    };
  }

  const child = spawnSync(binaryPath, [command], {
    input: JSON.stringify(envelope),
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 10,
  });

  if (child.error) {
    return {
      body: unavailableResult({
        command,
        diagnostics: warnings,
        code: 'wrapper_go_spawn_failed',
        file: binaryPath,
        severity: 'high',
        message: child.error.message,
        suggestedFix: 'Check binary permissions and executable path.',
        transport: {
          ok: false,
          exitCode: child.status,
          stderr: child.stderr ?? '',
        },
      }),
      exitCode: 1,
    };
  }

  const parsed = parseCoreStdout({
    command,
    stdout: child.stdout,
    stderr: child.stderr,
    childStatus: child.status,
    warnings,
  });

  if (!parsed.ok) {
    return {
      body: parsed.body,
      exitCode: 1,
    };
  }

  return {
    body: normalize({
      ...parsed.body,
      diagnostics: [
        ...warnings,
        ...(Array.isArray(parsed.body.diagnostics) ? parsed.body.diagnostics : []),
      ],
      transport: {
        ok: child.status === 0,
        exitCode: child.status,
        stderr: child.stderr ?? '',
      },
    }),
    exitCode: child.status === 0 ? 0 : 1,
  };
}

function parseCoreStdout({ command, stdout, stderr, childStatus, warnings }) {
  try {
    return {
      ok: true,
      body: JSON.parse(stdout),
    };
  } catch (error) {
    return {
      ok: false,
      body: normalize({
        schemaVersion,
        command,
        status: 'error',
        summary: 'Go-core returned invalid JSON stdout.',
        diagnostics: [
          ...warnings,
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
          exitCode: childStatus,
          stderr: stderr ?? '',
          stdout: stdout ?? '',
        },
      }),
    };
  }
}

function unavailableResult({
  command,
  diagnostics = [],
  severity = 'medium',
  code,
  file = null,
  message,
  suggestedFix,
  transport = { ok: false, exitCode: null, stderr: '' },
}) {
  return normalize({
    schemaVersion,
    command,
    status: 'unavailable',
    summary: 'Optional Go-core validation is unavailable.',
    diagnostics: [
      ...diagnostics,
      {
        severity,
        code,
        file,
        message,
        suggestedFix,
      },
    ],
    requiredUpdates: [],
    blockedActions: [],
    safeNextStep: suggestedFix,
    transport,
  });
}

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

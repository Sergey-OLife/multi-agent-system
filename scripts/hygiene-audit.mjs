#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const generatedOrLocalPatterns = [
  'node_modules',
  'dist',
  'coverage',
  '.cache',
  '.turbo',
  '.next',
  '.DS_Store',
  'npm-debug.log',
  'yarn-error.log',
  'pnpm-debug.log',
  'tsconfig.tsbuildinfo',
  '.tsbuildinfo'
];

const rawSourceExtensions = new Set(['.pdf', '.epub', '.mobi', '.djvu']);

const allowTracked = new Set([
  'knowledge/01_raw_private/README_DO_NOT_COMMIT.md',
  'knowledge/06_work_inbox/incoming_materials/.gitkeep'
]);

function runGit(args) {
  try {
    return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function listTrackedFiles() {
  const out = runGit(['ls-files']);
  return out ? out.split('\n').filter(Boolean) : [];
}

function listBranches() {
  const out = runGit(['branch', '--format=%(refname:short)']);
  return out ? out.split('\n').filter(Boolean) : [];
}

function listMergedBranches() {
  const out = runGit(['branch', '--merged', 'main', '--format=%(refname:short)']);
  return out ? out.split('\n').filter(Boolean) : [];
}

function walkLocalJunk(dir, found = []) {
  if (!existsSync(dir)) return found;
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    const relative = path.relative(ROOT, fullPath).replaceAll(path.sep, '/');

    if (generatedOrLocalPatterns.some((pattern) => entry.name === pattern || relative.endsWith(`/${pattern}`))) {
      found.push(relative);
      continue;
    }

    if (entry.isDirectory()) {
      walkLocalJunk(fullPath, found);
    }
  }

  return found;
}

function isTrackedJunk(file) {
  if (allowTracked.has(file)) return false;

  const base = path.basename(file);
  if (generatedOrLocalPatterns.includes(base)) return true;
  if (file.includes('/node_modules/')) return true;
  if (file.startsWith('dist/')) return true;
  if (file.startsWith('coverage/')) return true;
  if (file.endsWith('.log')) return true;
  if (file.endsWith('.tsbuildinfo')) return true;
  if (rawSourceExtensions.has(path.extname(file).toLowerCase())) return true;

  return false;
}

function classifyBranch(branch, mergedBranches) {
  if (branch === 'main') return { status: 'keep', reason: 'default branch' };
  if (branch === 'repo-hygiene-audit-ledger-v2') return { status: 'active', reason: 'current hygiene PR branch' };
  if (mergedBranches.includes(branch)) return { status: 'stale_candidate', reason: 'merged into main' };

  const likelyTemporaryPrefixes = [
    'agent-proposal',
    'agents/',
    'assistant/',
    'audit/',
    'checkpoint/',
    'chore/',
    'ci-',
    'codex/',
    'contract-',
    'go-',
    'protocol/',
    'schema-',
    'shipyard-modernization/',
    'sources/',
    'state-sync-',
    'transport-'
  ];

  if (likelyTemporaryPrefixes.some((prefix) => branch.startsWith(prefix))) {
    return { status: 'needs_classification', reason: 'temporary workflow prefix; verify PR/merge status before delete' };
  }

  return { status: 'unknown', reason: 'not classified by hygiene rules' };
}

const trackedFiles = listTrackedFiles();
const trackedJunk = trackedFiles.filter(isTrackedJunk);
const localJunk = walkLocalJunk(ROOT).sort();
const branches = listBranches();
const mergedBranches = listMergedBranches();
const branchReport = branches.map((branch) => ({ branch, ...classifyBranch(branch, mergedBranches) }));
const staleCandidates = branchReport.filter((entry) => entry.status === 'stale_candidate');
const needsClassification = branchReport.filter((entry) => entry.status === 'needs_classification');

const report = {
  status: trackedJunk.length === 0 ? 'clear_or_actionable' : 'needs_revision',
  trackedJunk,
  localJunk,
  branchSummary: {
    total: branches.length,
    keep: branchReport.filter((entry) => entry.status === 'keep').length,
    staleCandidates: staleCandidates.length,
    needsClassification: needsClassification.length,
    unknown: branchReport.filter((entry) => entry.status === 'unknown').length
  },
  staleBranchCandidates: staleCandidates.map((entry) => entry.branch),
  branchesNeedingClassification: needsClassification.map((entry) => entry.branch),
  rules: [
    'Delete tracked junk through a normal PR using explicit file deletion.',
    'Delete stale branches only through an explicit safe delete-branch operation or GitHub UI.',
    'Do not simulate branch deletion via force-ref updates.',
    'Record unresolved cleanup in GitHub issue #99 Repository hygiene ledger.'
  ]
};

console.log(JSON.stringify(report, null, 2));

if (trackedJunk.length > 0) {
  process.exitCode = 1;
}

# State-sync additive patch discipline

Status: mandatory manual protocol addendum
Scope: state/resume sync work, especially files consumed by resume diagnostics
Origin: PR #280 failure pattern and recovery

## Purpose

State-sync files are not rewrite targets.

They preserve durable project memory and may also be consumed by code. A state-sync PR must update stale facts and append new facts without compacting, replacing or deleting durable state unless Sergey explicitly approves that specific removal.

This addendum keeps Codex useful while preventing broad state rewrites.

## Core rule

```text
State-sync is additive by default.
Codex may prepare patches, but ChatGPT must define the patch map and verify GitHub facts.
```

## Preflight before any state-sync PR

Before asking Codex or editing directly, ChatGPT must check:

1. Which touched files are consumed by code.
2. Which schema keys or sections are required by parsers, tests or resume commands.
3. Whether the requested change is an additive/update sync or a rewrite.

For `knowledge/00_manifest/project-state.json`, treat the file as schema-sensitive. Read or account for `src/project-state.ts` before approving changes that alter keys or shape.

## Required preservation for project-state.json

A state-sync PR must not remove these without a separate explicit Sergey decision and corresponding parser/consumer update:

- `completedVersions`;
- `recentPrs`;
- `openPrs`;
- `closedUnmergedPrs`;
- `activeDecisions`;
- `pausedTasks`;
- `nextAction`;
- `manualChapterUpload`;
- `rawTextCommitted`;
- `importantPaths`;
- `agentState`.

New arc-specific fields may be added, but they must be additive. They must not replace required schema fields or long-lived context.

## Codex task shape

Codex must not receive a broad instruction such as:

```text
Update state.
```

Use a patch-map instruction instead:

```text
Work only in this PR branch.
This is additive state/resume sync.
Do not rewrite files.
Do not compact durable context.
Do not remove existing keys, arrays, sections, protocol summaries or historical entries.

Allowed edits:
- update stale top-level version / last PR / merge commit values;
- append new completedVersion;
- append recent PRs;
- append closed-unmerged PRs;
- append arc summary;
- append boundaries.

Forbidden edits:
- delete required schema keys;
- delete historical arrays;
- delete manual disciplines;
- delete protocol footer rules;
- delete mode-switch boundaries;
- delete importantPaths;
- delete agentState;
- change runtime, CI, branch protection, validators, registry or archive protocol.
```

## Codex output is not a fact

Codex reports are not repository truth.

These are not sufficient:

- local commit SHA;
- `done`;
- `PR helper invoked`;
- local test report;
- local branch name.

Only GitHub facts count:

- visible PR number;
- visible GitHub head SHA;
- changed-file list from GitHub;
- diff from GitHub;
- comments/reviews/threads from GitHub;
- CI and Sync Check on the latest GitHub head.

If Codex reports a local commit but GitHub cannot see it, the work is not published.

## Push failure handling

If Codex cannot push because of network/auth restrictions, do not loop on retries.

Choose one narrow path:

1. ask Codex for a full unified diff or exact final file contents, then apply it manually; or
2. stop using Codex for that PR and apply the narrow patch directly through GitHub tools; or
3. close the PR if the diff is unsafe and restart with a clean branch.

## Reviewer comments

Any bot/reviewer comment about schema compatibility, parser breakage, resume diagnostics, required checks, raw/private data, false status, or destructive state rewrite is `must_fix` until proven otherwise.

A PR is not ready while such comments are unresolved or still apply to the latest head.

## Final readiness check

Before saying a state-sync PR is ready, ChatGPT must verify on the latest GitHub head:

- changed files are within the approved list;
- schema-sensitive files preserve required keys;
- no durable arrays/sections were destructively replaced;
- bot/reviewer comments were checked and classified;
- blocking comments are fixed or outdated/resolved;
- CI is green;
- Sync Check is green;
- the PR does not change runtime, CI, branch protection, validators, registry or archive protocol unless that was the approved scope.

## Boundary

This is a manual protocol discipline.

It is not a runtime validator, CI check, hard gate, branch-protection rule, parser change, registry mutation, route automation or approval bypass.

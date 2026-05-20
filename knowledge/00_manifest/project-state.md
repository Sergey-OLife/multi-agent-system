# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.37
- lastCompletedVersion: v2.37
- lastMergedPr: PR #177 — Activate critic manual preflight
- lastMergeCommit: f0ab82814b54fd64268764cdfccf3c171493b849
- currentMilestone: v2.37 Critic manual preflight discipline synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #172 — Add critic activation plan
- PR #173 — Sync state after PR 172
- PR #174 — Restore state detail after PR 173
- PR #175 — Define critic activation mechanics
- PR #176 — Sync state after PR #175
- PR #177 — Activate critic manual preflight

## What changed in v2.37

PR #177 added:

- `assistant_codex_worklog/protocol_addenda/critic_margin_manual_preflight.md`

Status: active manual discipline only. This is not routes, registry status change, validator, hard guardrail, branch protection, runtime, or book change.

## Second-eyes preflight layer

`critic_margin_agent` may now be used as a short manual preflight voice before high-risk GitHub margin operations.

Call points include registry sync, agent activation, route change, archive PR, state sync, workflow change, checkpoint, branch protection check, and failed PR retry.

`margin_orchestra` remains design-only after PR #167.

## Current agent queue status

Proposal only, not routed and not automated:

- `conversation_archive_librarian`
- `critic_margin_agent`

Active manual discipline:

- `critic_margin_agent` manual preflight.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- Required PR verification layer currently includes Sync Check and CI, not CI alone.
- PR #177 activated manual preflight discipline only.
- `critic_margin_agent` is not routed, not a hard guardrail, and not an automated validator.
- Proposal agents remain proposal only unless explicitly activated as manual protocol discipline.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose controlled activation for `conversation_archive_librarian`, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

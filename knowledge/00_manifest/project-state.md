# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.38
- lastCompletedVersion: v2.38
- lastMergedPr: PR #179 — Add archive librarian activation mechanics
- lastMergeCommit: d3021b0f11109ca9b3ff47adb4777ce3a1247085
- currentMilestone: v2.38 Archive librarian activation mechanics synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #174 — Restore state detail after PR #173
- PR #175 — Define critic activation mechanics
- PR #176 — Sync state after PR #175
- PR #177 — Activate critic manual preflight
- PR #178 — Sync state after PR #177
- PR #179 — Add archive librarian activation mechanics

## What changed in v2.38

PR #179 added:

- `knowledge/05_agent_memory/agent_shipyard/conversation_archive_librarian_activation_mechanics.md`

Status: mechanics only. This does not activate `conversation_archive_librarian`.

Activation mechanics means manual discipline for archive commands and archive PR decisions. It does not mean routes, validator, hard guardrail, registry status change, branch protection, runtime, project-state sync, or ChatGPT memory use.

## Second-eyes preflight layer

`critic_margin_agent` remains active as manual preflight discipline only.

`conversation_archive_librarian` has proposal and activation mechanics, but is not activated.

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
- PR #179 added archive librarian activation mechanics only.
- `conversation_archive_librarian` is not activated, routed, a validator, a hard guardrail, or ChatGPT memory use.
- `critic_margin_agent` remains active only as manual protocol discipline.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not treat archive librarian mechanics as routes, validator, hard guardrail, registry status change, branch protection, runtime, project-state sync, or ChatGPT memory use.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose controlled activation for `conversation_archive_librarian` manual discipline, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

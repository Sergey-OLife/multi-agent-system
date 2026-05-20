# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.36
- lastCompletedVersion: v2.36
- lastMergedPr: PR #175 — Define critic activation mechanics
- lastMergeCommit: 2798abab2ec739b15b5816ce7dbb0b01acc6377e
- currentMilestone: v2.36 Critic margin activation mechanics synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #170 — Sync registry for critic margin agent
- PR #171 — Sync state after PR #170
- PR #172 — Add critic activation plan
- PR #173 — Sync state after PR 172
- PR #174 — Restore state detail after PR 173
- PR #175 — Define critic activation mechanics

## What changed in v2.36

PR #175 added:

- `knowledge/05_agent_memory/agent_shipyard/critic_margin_activation_mechanics.md`

Status: mechanics only. This still does not activate `critic_margin_agent`.

Activation mechanics means manual preflight use before high-risk boundaries. It does not mean route insertion, validator, hard guardrail, registry status change, branch protection, or runtime change.

## Second-eyes preflight layer

`critic_margin_agent` has proposal, registry entry, activation plan, and activation mechanics.

`margin_orchestra` remains design-only after PR #167.

Use the second-eyes design as reference before registry sync, activation, route changes, archive PR creation, state sync, workflow changes, checkpoint full and branch protection changes.

## Current agent queue status

Proposal only, not activated:

- `conversation_archive_librarian`
- `critic_margin_agent`

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- Required PR verification layer currently includes Sync Check and CI, not CI alone.
- PR #175 defined critic activation mechanics as manual preflight use only.
- `critic_margin_agent` is still not activated, routed, a hard guardrail, or an automated validator.
- Proposal agents remain proposal only, not activated.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not treat manual preflight mechanics as agent activation.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose controlled activation for `critic_margin_agent`, controlled activation for `conversation_archive_librarian`, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

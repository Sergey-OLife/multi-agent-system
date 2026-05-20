# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.35
- lastCompletedVersion: v2.35
- lastMergedPr: PR #172 — Add critic activation plan
- lastMergeCommit: ef0d0117fa20f59f8016963443752a1077ed5cc8
- currentMilestone: v2.35 Critic margin activation plan synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #167 — Add second-eyes preflight design
- PR #168 — Sync state after PR #167
- PR #169 — closed unmerged; superseded by PR #170
- PR #170 — Sync registry for critic margin agent
- PR #171 — Sync state after PR #170
- PR #172 — Add critic activation plan

## Closed unmerged PRs that must not be treated as implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.
- PR #169 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check; superseded by PR #170.

## What changed in v2.35

PR #172 added:

- `knowledge/05_agent_memory/agent_shipyard/critic_margin_activation_plan.md`

Status: plan only. `critic_margin_agent` is still not activated, not routed, not a hard guardrail, and not an automated validator.

## Second-eyes preflight layer

`critic_margin_agent` has proposal, registry entry, and activation plan.

`margin_orchestra` remains design-only after PR #167.

Use the second-eyes design as reference before registry sync, activation, route changes, archive PR creation, state sync, workflow changes, checkpoint full and branch protection changes.

## Registry sync request flow

PR #160 implemented `.github/workflows/registry-sync-request.yml`.

PR #163 extended deterministic Go registry sync. The Go command can mutate existing agent blocks and insert missing proposal/container blocks only with explicit `--insert-if-missing` and required registry fields.

PR #165 recorded `conversation_archive_librarian` in registry as proposal-only. PR #170 recorded `critic_margin_agent` in registry as proposal-only.

Known caveat: bot-generated registry commits may not trigger final-head CI automatically.

## Baseline CI and Sync Check

When both workflows apply, PR verification means both Sync Check and CI, not CI alone.

Branch protection remains not configured until explicitly verified.

## Current agent queue status

Proposal only, not activated:

- `conversation_archive_librarian`
- `critic_margin_agent`

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- Required PR verification layer currently includes Sync Check and CI, not CI alone.
- PR #169 was closed unmerged and must not be treated as implemented.
- PR #170 recorded `critic_margin_agent` in registry as proposal-only, not activation.
- PR #172 added activation plan only, not activation.
- Proposal agents remain proposal only, not activated.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not activate `critic_margin_agent` without controlled activation and separate approval.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose controlled activation for `critic_margin_agent`, controlled activation for `conversation_archive_librarian`, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

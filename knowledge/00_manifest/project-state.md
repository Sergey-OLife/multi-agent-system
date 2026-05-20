# Project State

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

## What changed in v2.35

PR #172 added:

- `knowledge/05_agent_memory/agent_shipyard/critic_margin_activation_plan.md`

Status: plan only. `critic_margin_agent` is still not activated, not routed, not a hard guardrail, and not an automated validator.

## Current decisions

- GitHub `main` is the source of truth.
- Current mode is Agent Shipyard / Agent Queue.
- Book work remains paused.
- `critic_margin_agent` has proposal, registry entry, and activation plan, but no activation.
- `margin_orchestra` remains design-only.
- Branch protection remains not configured until explicitly verified.

## Next action

Choose controlled activation for `critic_margin_agent`, controlled activation for `conversation_archive_librarian`, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

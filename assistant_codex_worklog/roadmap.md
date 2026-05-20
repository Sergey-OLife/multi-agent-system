# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

## Current milestone

- currentVersion: v2.36
- currentMilestone: Critic margin activation mechanics synced
- lastMergedPr: PR #175 — Define critic activation mechanics
- lastMergeCommit: `2798abab2ec739b15b5816ce7dbb0b01acc6377e`

## Recent PR summary

- PR #172 — Add critic activation plan.
- PR #173 — Sync state after PR 172.
- PR #174 — Restore state detail after PR 173.
- PR #175 — Define critic activation mechanics.

## Status

`critic_margin_agent` has proposal, registry entry, activation plan, and activation mechanics.

It is not activated, not routed, not a hard guardrail, and not an automated validator.

## Recommended next work item

Choose one:

1. controlled activation for `critic_margin_agent`;
2. controlled activation for `conversation_archive_librarian`;
3. harden `margin_orchestra` into protocol / tooling;
4. README / architecture map;
5. branch protection verification.

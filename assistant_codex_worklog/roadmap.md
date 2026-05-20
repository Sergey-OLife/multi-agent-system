# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.44
- currentMilestone: Restart command protocol synced
- lastMergedPr: PR #192 — Add command protocol
- lastMergeCommit: `3a1e99ba38ec1268195cdffe2a718772bdb65659`

## Recent PR summary

- PR #189 — Sync state after PR #188.
- PR #190 — Archive restart command and ship metaphor.
- PR #191 — Update state.
- PR #192 — Add command protocol.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

Status: command protocol only. It does not write to GitHub, create PRs, merge PRs, update memory, start Book Fast Track, treat open PRs as implemented, or skip approval gates.

## Approved next sequence

1. update project instructions for the `рестарт` command separately;
2. hardening `margin_orchestra`;
3. branch protection verification.

## Recommended next work item

Update project instructions for the `рестарт` command separately.

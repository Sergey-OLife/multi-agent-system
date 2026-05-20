# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.43
- lastCompletedVersion: v2.43
- lastMergedPr: PR #190 — Archive restart command and ship metaphor
- lastMergeCommit: ca0cbf1921d0953722c8867b8414f22eb709ca93
- currentMilestone: v2.43 Checkpoint full after restart archive
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.43

PR #190 archived the restart-command plan, PR creation tool blocker, parked branches, and ship metaphor correction.

This checkpoint updates state/worklog/restart after that archive.

## Current recovery path

1. Add restart command protocol by a narrow PR.
2. Update project instructions separately after the repo protocol is merged.
3. Harden `margin_orchestra` into protocol / tooling.
4. Verify branch protection.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused and is ignored for immediate next work until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active only as manual protocol discipline.
- The project ship carries cargo and passengers: reusable architecture and livable book worlds.
- The restart command is planned but not implemented until a protocol PR is merged.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat `conversation_archive_librarian` manual discipline as route, validator, hard guardrail, branch protection, runtime, registry status change, project-state sync, ChatGPT memory use, or book work.
- Do not treat restart command plan as implemented until a protocol PR is merged.
- Do not treat project instruction update as done until Sergey separately applies it.
- Do not treat parked branches `record-restart-command-plan` or `record-pr-tool-blocker` as implemented.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Add restart command protocol by a narrow PR; then update project instructions separately; then harden `margin_orchestra`; then verify branch protection.

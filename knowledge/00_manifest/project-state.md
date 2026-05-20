# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.44
- lastCompletedVersion: v2.44
- lastMergedPr: PR #192 — Add command protocol
- lastMergeCommit: 3a1e99ba38ec1268195cdffe2a718772bdb65659
- currentMilestone: v2.44 Restart command protocol synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.44

PR #192 added `assistant_codex_worklog/protocol_addenda/restart_command.md` and referenced it from `assistant_codex_worklog/working-protocol.md`.

The `рестарт` command is now implemented as a GitHub-source-of-truth continuation command.

It does not write to GitHub, create PRs, merge PRs, update memory, start Book Fast Track, treat open PRs as implemented, or skip approval gates.

## Current recovery path

1. Update project instructions for the `рестарт` command separately.
2. Harden `margin_orchestra` into protocol / tooling.
3. Verify branch protection.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused and is ignored for immediate next work until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active only as manual protocol discipline.
- The project ship carries cargo and passengers: reusable architecture and livable book worlds.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat `conversation_archive_librarian` manual discipline as route, validator, hard guardrail, branch protection, runtime, registry status change, project-state sync, ChatGPT memory use, or book work.
- Do not treat project instruction update as done until Sergey separately applies it.
- Do not treat parked branches `record-restart-command-plan` or `record-pr-tool-blocker` as implemented.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Update project instructions for the `рестарт` command separately; then harden `margin_orchestra`; then verify branch protection.

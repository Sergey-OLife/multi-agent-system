# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.41
- lastCompletedVersion: v2.41
- lastMergedPr: PR #186 — Record post-185 focus
- lastMergeCommit: 6db86f3b331334b555f32294487db780a7ee806e
- currentMilestone: v2.41 Post-185 focus synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.41

PR #186 recorded post-185 focus and the next approved three-stage sequence:

1. controlled activation for `conversation_archive_librarian` manual discipline;
2. hardening `margin_orchestra`;
3. branch protection verification.

Book Fast Track remains paused and is not offered as immediate next work until separate Sergey decision.

## Current diagnostic pressure

The next maturity risk is not missing more infrastructure. The risk is documentation, protocols, state and checks drifting apart while the project keeps serving its own machinery.

A maturity mechanism must prevent a real failure, not only decorate the system.

## Current agent queue status

Proposal only, not routed and not automated:

- `conversation_archive_librarian`
- `critic_margin_agent`

Active manual discipline:

- `critic_margin_agent` manual preflight.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused and is ignored for immediate next work until separate Sergey decision.
- PR #185 recorded manual knowledge/protocol consistency check.
- PR #186 recorded post-185 focus and next approved three-stage sequence.
- `conversation_archive_librarian` is not activated, routed, a validator, a hard guardrail, or ChatGPT memory use.
- `critic_margin_agent` remains active only as manual protocol discipline.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not treat maturity checklist as runtime, validators, observability, security tooling or branch protection.
- Do not treat architecture map or future runtime hypotheses as runtime implementation.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Start controlled activation for `conversation_archive_librarian` manual discipline; then harden `margin_orchestra`; then verify branch protection.

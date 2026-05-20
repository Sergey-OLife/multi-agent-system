# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.42
- lastCompletedVersion: v2.42
- lastMergedPr: PR #188 — Activate archive librarian manual discipline
- lastMergeCommit: 9882209dfdc1697b182ea288c633969f12c9ae12
- currentMilestone: v2.42 Archive librarian manual discipline active
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.42

PR #188 activated `conversation_archive_librarian` as manual archive discipline only.

It applies to archive commands and archive PR decisions.

It did not add routes, validators, hard guardrails, branch protection, runtime, registry status change, project-state sync, ChatGPT memory use, or book work.

## Current agent queue status

Proposal only, not routed and not automated:

- `conversation_archive_librarian`
- `critic_margin_agent`

Active manual disciplines:

- `critic_margin_agent` manual preflight.
- `conversation_archive_librarian` manual archive discipline.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused and is ignored for immediate next work until separate Sergey decision.
- PR #188 activated `conversation_archive_librarian` as manual archive discipline only.
- `conversation_archive_librarian` is not routed, not a validator, not a hard guardrail, not runtime, and not ChatGPT memory use.
- `critic_margin_agent` remains active only as manual protocol discipline.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat `conversation_archive_librarian` manual discipline as route, validator, hard guardrail, branch protection, runtime, registry status change, project-state sync, ChatGPT memory use, or book work.
- Do not treat maturity checklist as runtime, validators, observability, security tooling or branch protection.
- Do not treat architecture map or future runtime hypotheses as runtime implementation.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Harden `margin_orchestra` into protocol / tooling, then verify branch protection.

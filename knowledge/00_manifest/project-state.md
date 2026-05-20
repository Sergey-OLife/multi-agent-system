# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.39
- lastCompletedVersion: v2.39
- lastMergedPr: PR #181 — Add architecture map
- lastMergeCommit: 2c657ae6b46e06db06bd4ab02f7ae9ac50855495
- currentMilestone: v2.39 Architecture map and documentation topology synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.39

PR #181 added:

- `README.md`
- `knowledge/07_operations/documentation_topology.md`
- `knowledge/07_operations/vision_intake_map.md`
- `knowledge/07_operations/future_runtime_hypotheses.md`

Status: map only. This does not implement runtime, routes, validators, hard guardrails, branch protection, or book work.

## Architecture and documentation map

- README is the entrance map, not a dumping ground.
- Current architecture is GitHub-centered, not runtime-centered.
- Future runtime target is coordinator-centered orchestration with task-local full-mesh module bus, only if separately approved.
- Second-eyes work mirrors coordinator-plus-instruments pattern as manual discipline only.
- Documentation may expand through focused linked documents and later be optimized without deleting meaning.

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
- PR #181 added architecture/documentation maps only.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.
- `conversation_archive_librarian` is not activated, routed, a validator, a hard guardrail, or ChatGPT memory use.
- `critic_margin_agent` remains active only as manual protocol discipline.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not treat architecture map or future runtime hypotheses as runtime implementation.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose controlled activation for `conversation_archive_librarian` manual discipline, hardening `margin_orchestra`, branch protection verification, knowledge/protocol consistency check, or return to Book Fast Track by separate decision.

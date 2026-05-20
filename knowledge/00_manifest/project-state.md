# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.40
- lastCompletedVersion: v2.40
- lastMergedPr: PR #183 — Add maturity checklist
- lastMergeCommit: 3169839e6365d52609b7c5a8d36db304a6a753b1
- currentMilestone: v2.40 Maturity checklist synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.40

PR #183 added / updated:

- `knowledge/07_operations/maturity_checklist.md`
- `README.md`
- `knowledge/07_operations/vision_intake_map.md`
- `assistant_codex_worklog/roadmap.md`

Status: diagnostic map only. This does not implement runtime, validators, observability, security tooling, branch protection, or book work.

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
- Book Fast Track remains paused until separate Sergey decision.
- PR #183 added maturity checklist as diagnostic map only.
- `conversation_archive_librarian` is not activated, routed, a validator, a hard guardrail, or ChatGPT memory use.
- `critic_margin_agent` remains active only as manual protocol discipline.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not treat maturity checklist as runtime, validators, observability, security tooling or branch protection.
- Do not treat architecture map or future runtime hypotheses as runtime implementation.
- Do not treat critic manual preflight as routes, validator, hard guardrail, registry status change, branch protection, or runtime.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose knowledge/protocol consistency check, controlled activation for `conversation_archive_librarian` manual discipline, hardening `margin_orchestra`, branch protection verification, or return to Book Fast Track by separate decision.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.51
- lastCompletedVersion: v2.51
- lastMergedPr: PR #208 — Implement local state sync drift audit
- lastMergeCommit: 93d2d2c3587cf586e72f36ba182a6a53ac6122b0
- currentMilestone: v2.51 Local state-sync drift audit script implemented
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.51

PR #208 added `scripts/state-sync-drift-audit.mjs` and `npm run state-sync:drift-audit`.

The script is a warning-only local diagnostic tool for structural state-sync drift patterns.

It supports explicit file lists, stdin input and local git diff input.

Warnings exit `0`; input errors exit `2`.

This is implementation, but not enforcement. It is not a GitHub Action, required check, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, release, or production security tooling.

## Current recovery path

1. Complete state sync after local drift audit script implementation.
2. Test the local script on real changed-file sets.
3. Keep it out of CI unless Sergey separately approves CI-visible warning later.
4. Return to `Карта будущего корабля` review when the planned implementation/state-sync segment is stable.
5. Consider a future runtime readiness checklist only by separate decision.
6. Consider a scripts/core boundary audit only if needed.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- State-sync drift detector proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_proposal.md`.
- Local state-sync drift detector script implementation proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_implementation_proposal.md`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, or project-state sync.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete state sync after local drift audit script implementation.

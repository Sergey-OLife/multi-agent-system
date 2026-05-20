# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.49
- lastCompletedVersion: v2.49
- lastMergedPr: PR #203 — Propose state sync drift detector
- lastMergeCommit: 59a9c0715eee6429ebcce50c03bb801f2c256498
- currentMilestone: v2.49 State-sync drift detector proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.49

PR #203 added `knowledge/07_operations/state_sync_drift_detector_proposal.md`.

The document proposes a warning-level state-sync drift detector for state-sensitive PRs.

It defines the drift problem, candidate trigger paths, warning cases, safe output shape, maturity ladder and decisions needed before implementation.

This is proposal only. It is not a script, GitHub Action, validator, hard guardrail, runtime, route, branch protection change, or blocking rule.

## Current recovery path

1. Complete state sync after state-sync drift detector proposal.
2. Decide separately whether to implement a warning-only local script or CI-visible warning.
3. Consider a future runtime readiness checklist only by separate decision.
4. Consider a scripts/core boundary audit only if needed.

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
- State-sync drift detector is proposal only in `knowledge/07_operations/state_sync_drift_detector_proposal.md`.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, or project-state sync.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the state-sync drift detector proposal as implementation.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete state sync after state-sync drift detector proposal.

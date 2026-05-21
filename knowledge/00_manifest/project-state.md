# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.53
- lastCompletedVersion: v2.53
- lastMergedPr: PR #216 — Clean up archive index open loops
- lastMergeCommit: 7e4d8c50efca90c8d805c0a7b1623f6c22660bd8
- currentMilestone: v2.53 Conservative archive index cleanup synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.53

PR #216 updated `knowledge/08_conversation_archive/index.md` only.

The archive index cleanup is conservative.

Age alone is not a deletion signal. Older archive tails can be deferred value, not noise.

`implemented_elsewhere` should be used only when there is a concrete implementation location.

Older unresolved archive value may remain as `needs_decision` or `long_lived_observation` until focused review decides what is implemented, stale, or still useful.

## Recent protocol and diagnostic state

PR #214 added `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md` and registered it in `assistant_codex_worklog/working-protocol.md`.

PR #212 added `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.

The local drift audit script remains a manual warning-only diagnostic instrument and is not enforcement.

## Current recovery path

1. Complete state sync after PR #216.
2. Perform `#архив_старт` as Sergey requested.
3. Return to selected next work without repeating already archived service information.
4. Return to `Карта будущего корабля` review when Sergey chooses it.
5. Consider a future runtime readiness checklist only by separate decision.
6. Consider a scripts/core boundary audit only if needed.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- `archive_status_indicator` is active as manual archive-pressure discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- State-sync drift detector proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_proposal.md`.
- Local state-sync drift detector script implementation proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_implementation_proposal.md`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Representative local drift audit test results are recorded in `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.
- Archive status indicator protocol is recorded in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`.
- Conservative archive index cleanup is recorded in `knowledge/08_conversation_archive/index.md`.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Active archive-level open loops

- `Карта будущего корабля` review.
- Repository architecture contract value from older archives.
- Corrective margin/knowledge-consistency value from older archives.
- Future runtime readiness checklist only by separate Sergey decision.
- Scripts/core boundary audit only if needed after selected next work.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat old archive tails as stale only because they are old.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete state sync after PR #216, then perform `#архив_старт`.

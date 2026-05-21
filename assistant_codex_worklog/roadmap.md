# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.52
- currentMilestone: Archive status indicator protocol synced
- lastMergedPr: PR #214 — Add archive status indicator protocol
- lastMergeCommit: `abf04c8c03e15ca619ccc4aa6d17e0e8ebb99c45`

## Recent PR summary

- PR #208 — Implement local state sync drift audit.
- PR #209 — Sync state after local drift audit script.
- PR #212 — Record local drift audit test results.
- PR #214 — Add archive status indicator protocol.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

External assessment conclusions are recorded in `knowledge/07_operations/external_assessment_notes_2026-05-20.md`.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Minimal repository-level branch protection is active through GitHub Ruleset `Protect main` for `main` / default branch.

Required check contexts are documented in `knowledge/07_operations/checks_overview.md`:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

State-sync drift detector proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_proposal.md`.

Local drift detector implementation proposal is recorded in `knowledge/07_operations/state_sync_drift_detector_implementation_proposal.md`.

Local state-sync drift audit script is implemented as `scripts/state-sync-drift-audit.mjs` with package command `npm run state-sync:drift-audit`.

It is a warning-only local diagnostic tool, not a GitHub Action, required check, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, release, or production security tooling.

Representative test results for the local drift audit script are recorded in `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.

Archive status indicator protocol is recorded in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`.

It is active manual discipline only, not automation, routing, validation, branch protection, project-state sync, checkpoint logic, runtime behavior, CI, validator, hard guardrail, restart command semantic change, or book workflow change.

## Approved next sequence

1. complete state sync after archive status indicator protocol;
2. return to selected next work without repeating already archived service information;
3. use the archive status indicator and delta-only archive discipline during further project operations;
4. return to `Карта будущего корабля` review when this protocol/state-sync segment is stable;
5. if Sergey separately approves, prepare a future runtime readiness checklist;
6. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after archive status indicator protocol.

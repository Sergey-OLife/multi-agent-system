# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.51
- currentMilestone: Local state-sync drift audit script implemented
- lastMergedPr: PR #208 — Implement local state sync drift audit
- lastMergeCommit: `93d2d2c3587cf586e72f36ba182a6a53ac6122b0`

## Recent PR summary

- PR #205 — Propose local drift detector implementation.
- PR #206 — Sync state after local drift detector proposal.
- PR #207 — Archive current shipyard ruleset and drift detector work.
- PR #208 — Implement local state sync drift audit.

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

## Approved next sequence

1. complete state sync after local drift audit script implementation;
2. test the local script on real changed-file sets;
3. keep it out of CI unless Sergey separately approves CI-visible warning later;
4. return to `Карта будущего корабля` review when the planned implementation/state-sync segment is stable;
5. if Sergey separately approves, prepare a future runtime readiness checklist;
6. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after local drift audit script implementation.

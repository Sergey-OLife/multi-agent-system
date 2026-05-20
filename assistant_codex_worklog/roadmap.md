# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.50
- currentMilestone: Local drift detector implementation proposal synced
- lastMergedPr: PR #205 — Propose local drift detector implementation
- lastMergeCommit: `645c12a125728d1696eb971fb36a1444ce3c4a02`

## Recent PR summary

- PR #202 — Sync state after checks overview.
- PR #203 — Propose state sync drift detector.
- PR #204 — Sync state after drift detector proposal.
- PR #205 — Propose local drift detector implementation.

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

It is implementation proposal only, not a script, package command, GitHub Action, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, releases, or production security tooling.

## Approved next sequence

1. complete state sync after local drift detector implementation proposal;
2. decide separately whether to implement the warning-only local script;
3. if Sergey separately approves, prepare a future runtime readiness checklist;
4. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after local drift detector implementation proposal.

# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.49
- currentMilestone: State-sync drift detector proposal synced
- lastMergedPr: PR #203 — Propose state sync drift detector
- lastMergeCommit: `59a9c0715eee6429ebcce50c03bb801f2c256498`

## Recent PR summary

- PR #200 — Sync state after branch protection ruleset activation.
- PR #201 — Document required checks and merge gates.
- PR #202 — Sync state after checks overview.
- PR #203 — Propose state sync drift detector.

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

It is proposal only, not a script, GitHub Action, validator, hard guardrail, runtime, route, branch protection change, or blocking rule.

## Approved next sequence

1. complete state sync after state-sync drift detector proposal;
2. decide separately whether to implement a warning-only local script or CI-visible warning;
3. if Sergey separately approves, prepare a future runtime readiness checklist;
4. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after state-sync drift detector proposal.

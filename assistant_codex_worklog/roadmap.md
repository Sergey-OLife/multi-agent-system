# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.48
- currentMilestone: Required checks and merge gates documented
- lastMergedPr: PR #201 — Document required checks and merge gates
- lastMergeCommit: `5fb507895d137843be5885f9bc490dc89f397088`

## Recent PR summary

- PR #198 — Record branch protection verification result.
- PR #199 — Record branch protection ruleset activation.
- PR #200 — Sync state after branch protection ruleset activation.
- PR #201 — Document required checks and merge gates.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

External assessment conclusions are recorded in `knowledge/07_operations/external_assessment_notes_2026-05-20.md`.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Minimal repository-level branch protection is active through GitHub Ruleset `Protect main` for `main` / default branch.

Required check contexts are documented in `knowledge/07_operations/checks_overview.md`:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

## Approved next sequence

1. complete short state sync after checks overview;
2. consider a state-sync drift detector proposal as a separate design step;
3. if Sergey separately approves, prepare a future runtime readiness checklist;
4. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after checks overview, then consider a state-sync drift detector proposal.

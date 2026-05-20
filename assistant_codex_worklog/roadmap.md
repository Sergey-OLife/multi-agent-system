# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.47
- currentMilestone: Minimal branch protection Ruleset active
- lastMergedPr: PR #199 — Record branch protection ruleset activation
- lastMergeCommit: `00f9bd45bb26803be65544b70d34076dc0c6dacf`

## Recent PR summary

- PR #196 — Clarify external boundary and maturity status.
- PR #197 — Sync state after external boundary clarification.
- PR #198 — Record branch protection verification result.
- PR #199 — Record branch protection ruleset activation.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

External assessment conclusions are recorded in `knowledge/07_operations/external_assessment_notes_2026-05-20.md`.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Minimal repository-level branch protection is active through GitHub Ruleset `Protect main` for `main` / default branch.

Required check contexts:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

## Approved next sequence

1. sync state after branch protection Ruleset activation;
2. if useful later, a small checks overview for external readability;
3. if Sergey separately approves, prepare a future runtime readiness checklist;
4. if needed, perform a scripts/core boundary audit;
5. if Sergey separately approves, prepare warning-level detector proposal for state-sync drift.

## Recommended next work item

Complete state sync after branch protection Ruleset activation.

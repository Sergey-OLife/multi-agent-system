# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.54
- currentMilestone: Lifecycle contracts proposal synced
- lastMergedPr: PR #219 — Propose lifecycle contracts
- lastMergeCommit: `2f8083dd7ad877073ed115c1e2201d98d5dfe304`

## Recent PR summary

- PR #214 — Add archive status indicator protocol.
- PR #216 — Clean up archive index open loops.
- PR #217 — Sync state after archive index cleanup.
- PR #219 — Propose lifecycle contracts.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

External assessment conclusions are recorded in `knowledge/07_operations/external_assessment_notes_2026-05-20.md`.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Minimal repository-level branch protection is active through GitHub Ruleset `Protect main` for `main` / default branch.

Required check contexts are documented in `knowledge/07_operations/checks_overview.md`:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

Local state-sync drift audit script is implemented as `scripts/state-sync-drift-audit.mjs` with package command `npm run state-sync:drift-audit`.

It is a warning-only local diagnostic tool, not a GitHub Action, required check, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, release, or production security tooling.

Representative test results for the local drift audit script are recorded in `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.

Archive status indicator protocol is recorded in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`.

Archive index cleanup is conservative: age alone is not a deletion signal. Older unresolved archive value may remain as `needs_decision` or `long_lived_observation`. Use `implemented_elsewhere` only when there is a concrete implementation location.

Lifecycle contracts proposal is recorded in `knowledge/07_operations/lifecycle_contracts_proposal.md`.

It is proposal only: no code, package implementation, tests, runtime behavior, route automation, validator, hard guardrail, CI enforcement, branch protection change, approval bypass, or book workflow change. Implementation requires separate approval and a separate PR.

## Active archive-level open loops

- `Карта будущего корабля` review: classify external assessment points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.
- Repository architecture contract value from older archives: preserve until focused review.
- Corrective margin/knowledge-consistency value from older archives: preserve until focused review.
- Future runtime readiness checklist: only by separate Sergey decision.
- Scripts/core boundary audit: only if needed after selected next work.

## Approved next sequence

1. complete state sync after PR #219;
2. discuss/refine the lifecycle contracts proposal or choose the next work explicitly;
3. do not implement lifecycle code without separate approval and separate PR;
4. return to `Карта будущего корабля` review when Sergey chooses it;
5. if Sergey separately approves, prepare a future runtime readiness checklist;
6. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after PR #219.

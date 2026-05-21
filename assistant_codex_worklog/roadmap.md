# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.55
- currentMilestone: Lifecycle contracts v1 implemented
- lastMergedPr: PR #223 — Implement lifecycle contracts v1
- lastMergeCommit: `c2bb5d5d04aef05c871b18f219c56a688c69cdfa`

## Recent PR summary

- PR #219 — Propose lifecycle contracts.
- PR #220 — Sync state after lifecycle contracts proposal.
- PR #224 — Archive lifecycle v1 implementation blocked merge.
- PR #223 — Implement lifecycle contracts v1.

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

Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests.

It covers only selected high-risk entities: `agent`, `archive`, `state`, `script`, and `source_card`.

It is implemented but not enforcement: no CLI, GitHub Action, CI enforcement beyond existing tests, route automation, project-gate validator, hard guardrail, approval logic, state-sync automation, runtime behavior, branch protection change, or book workflow change.

## Active archive-level open loops

- `Карта будущего корабля` review: classify external assessment points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.
- Repository architecture contract value from older archives: preserve until focused review.
- Corrective margin/knowledge-consistency value from older archives: preserve until focused review.
- Lifecycle policy layer: future-only and requires separate decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Scripts/core boundary audit: only if needed after selected next work.

## Approved next sequence

1. complete state sync after PR #223;
2. do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval;
3. return to `Карта будущего корабля` review when Sergey chooses it;
4. if Sergey separately approves, prepare a future runtime readiness checklist;
5. if needed, perform a scripts/core boundary audit.

## Recommended next work item

Complete state sync after PR #223.

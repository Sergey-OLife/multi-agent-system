# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.58
- currentMilestone: README and operations review sequence synced
- lastMergedPr: PR #237 — Clarify README documentation boundary
- lastMergeCommit: `775c9d0c49d366ce0de18dd6e4c431b55c2a63ea`

## Recent PR summary

- PR #235 — Add scripts core boundary audit result.
- PR #236 — Add future ship map review.
- PR #237 — Clarify README documentation boundary.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

`bot_reviewer_comments` is active mandatory manual PR review discipline only.

Before a PR is presented as ready for `++` or merged, PR comments, submitted reviews, inline review threads, unresolved review threads and `chatgpt-codex-connector` comments must be checked and classified.

Classification options: `must_fix`, `not_applicable`, `future_followup`.

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

Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests.

It covers only selected high-risk entities: `agent`, `archive`, `state`, `script`, and `source_card`.

It is implemented but not enforcement: no CLI, GitHub Action, CI enforcement beyond existing tests, route automation, project-gate validator, hard guardrail, approval logic, state-sync automation, runtime behavior, branch protection change, or book workflow change.

Scripts/core boundary audit result is recorded in `knowledge/07_operations/scripts_core_boundary_audit_result_2026-05-21.md`.

Future ship map review is recorded in `knowledge/07_operations/future_ship_map_review_2026-05-21.md`.

README/documentation-topology boundary review is recorded in `knowledge/07_operations/readme_documentation_boundary_review_2026-05-21.md`.

README is the entrance map, not the live roadmap. Use project-state/current-state/roadmap for next action.

## Active archive-level open loops

- Lifecycle policy layer: future-only and requires separate Sergey decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- README/documentation-topology boundary has been reviewed; further cleanup only if separately selected.
- Book work remains paused until separate Sergey decision.

## Approved next sequence

1. choose the next work explicitly;
2. do not treat README as the live roadmap;
3. do not treat operations review notes as implementation mandates;
4. do not expand lifecycle contracts, operations review notes, README cleanup, runtime readiness, validators, CI enforcement, hard guardrails, or branch protection without separate approval;
5. if Sergey separately resumes book work, switch modes explicitly and update state.

## Recommended next work item

After this state sync is merged, choose the next work explicitly; no implementation follows automatically from the README/documentation-topology review.

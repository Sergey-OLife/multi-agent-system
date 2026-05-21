# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.57
- currentMilestone: Checkpoint full after bot reviewer protocol state sync
- lastMergedPr: PR #233 — Sync state after bot reviewer protocol registration
- lastMergeCommit: `6c9f97075fcccff1918948fdd8aec2f8dcef03b0`

## Recent PR summary

- PR #229 — Add bot reviewer comments protocol.
- PR #230 — Archive bot reviewer protocol and scripts scope.
- PR #231 — Register bot reviewer comments addendum.
- PR #233 — Sync state after bot reviewer protocol registration.

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

Scripts/core boundary audit scope is recorded in `knowledge/07_operations/scripts_core_boundary_audit_scope.md` as a discussion note only.

## Active archive-level open loops

- `Карта будущего корабля` review: classify external assessment points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.
- Repository architecture contract value from older archives: preserve until focused review.
- Corrective margin/knowledge-consistency value from older archives: preserve until focused review.
- Lifecycle policy layer: future-only and requires separate decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Scripts/core boundary audit: only if selected after the new scope note.

## Approved next sequence

1. choose the next work explicitly;
2. return to `Карта будущего корабля` review when Sergey chooses it;
3. if Sergey selects it, run the read-only scripts/core boundary audit using `knowledge/07_operations/scripts_core_boundary_audit_scope.md`;
4. do not expand lifecycle contracts, bot reviewer comments protocol, or scripts/core audit scope toward policy layer, route automation, validators, CI enforcement, hard guardrails, runtime, or branch protection without separate approval;
5. if Sergey separately approves, prepare a future runtime readiness checklist.

## Recommended next work item

Choose the next work explicitly: return to `Карта будущего корабля` review, or run the read-only scripts/core boundary audit if Sergey selects it.

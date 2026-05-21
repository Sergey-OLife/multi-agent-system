# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.60
- currentMilestone: Critic margin advisor activation scope synced
- lastMergedPr: PR #245 — Define critic margin advisor activation scope
- lastMergeCommit: `b20f812fecb4da9bf0247a37df1badd8778ca553`

## Recent PR summary

- PR #240 — Archive README boundary and operations review closure.
- PR #241 — Review old architecture tails and close resolved archive loops.
- PR #242 — Clarify second-eyes status boundaries.
- PR #243 — Record baseline audit takeaways without runtime escalation.
- PR #244 — Add second-eyes preflight card examples.
- PR #245 — Define critic margin advisor activation scope.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`critic_margin_agent` is not active as runtime/route validator, CI gate, approval authority, hard guardrail or policy engine.

`workflow_conductor_agent` remains a separate proposal and is not activated by critic/margin work.

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

Old architecture tails focused review is recorded in `knowledge/07_operations/old_architecture_tails_focused_review_2026-05-21.md`.

Second-eyes status clarification is recorded in `knowledge/07_operations/second_eyes_status_clarification_2026-05-21.md`.

Baseline audit takeaways are recorded in `knowledge/07_operations/baseline_audit_takeaways_2026-05-21.md`.

Second-eyes preflight card examples are recorded in `knowledge/07_operations/second_eyes_preflight_card_examples_2026-05-21.md`.

Critic margin agent activation scope is recorded in `knowledge/07_operations/critic_margin_agent_activation_scope_2026-05-21.md`.

README is the entrance map, not the live roadmap. Use project-state/current-state/roadmap for next action.

## Active archive-level open loops

- Lifecycle policy layer: future-only and requires separate Sergey decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Workflow conductor activation: only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight: only by separate Sergey decision.
- Book work remains paused until separate Sergey decision.

## Approved next sequence

1. merge this state sync after checks and approval;
2. choose the next Agent Queue step explicitly;
3. do not treat critic_margin_agent advisory/manual activation as runtime activation;
4. do not activate workflow_conductor_agent through critic/margin work;
5. do not expand second-eyes examples into mandatory forms, validators, CI enforcement, hard guardrails or policy layer without separate approval;
6. if Sergey separately resumes book work, switch modes explicitly and update state.

## Recommended next work item

After this state sync is merged, choose the next Agent Queue step explicitly; no runtime, route, validator, workflow_conductor activation, or mandatory second-eyes tooling follows automatically.

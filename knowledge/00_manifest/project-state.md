# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.58
- lastCompletedVersion: v2.58
- lastMergedPr: PR #237 — Clarify README documentation boundary
- lastMergeCommit: 775c9d0c49d366ce0de18dd6e4c431b55c2a63ea
- currentMilestone: v2.58 README and operations review sequence synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.58

This state sync records the documentation review sequence after:

- PR #235 — Add scripts core boundary audit result;
- PR #236 — Add future ship map review;
- PR #237 — Clarify README documentation boundary.

PR #235 recorded that current scripts remain edge automation / CI helpers, with an explicit boundary for `scripts/run-registry-sync.mjs`.

PR #236 recorded a full 34-point classification of the external future-ship assessment using only the declared buckets: `already_fixed`, `useful_now`, `true_but_future`, `not_appropriate_current`, and `reframe`.

PR #237 recorded the README/documentation-topology boundary review and adjusted README so it points to project-state/current-state/roadmap for live next work instead of carrying a stale static next-work list.

## Boundary

These PRs are documentation and state/resume sync only.

They do not:

- implement code;
- change scripts;
- change Go packages;
- change workflows;
- add GitHub labels;
- add required checks;
- add validators;
- add hard guardrails;
- add policy layer;
- change branch protection settings;
- change runtime behavior;
- change book workflow;
- rename `go-core`;
- restructure README or archive index.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Do not treat README as the live roadmap.
4. Choose the next work explicitly.
5. Do not treat any review note as an implementation mandate.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- `archive_status_indicator` is active as manual archive-pressure discipline only.
- `bot_reviewer_comments` is active as manual PR review discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Representative local drift audit test results are recorded in `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.
- Archive status indicator protocol is recorded in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`.
- Conservative archive index cleanup is recorded in `knowledge/08_conversation_archive/index.md`.
- Scripts/core boundary audit scope is recorded in `knowledge/07_operations/scripts_core_boundary_audit_scope.md`.
- Scripts/core boundary audit result is recorded in `knowledge/07_operations/scripts_core_boundary_audit_result_2026-05-21.md`.
- Future ship map review is recorded in `knowledge/07_operations/future_ship_map_review_2026-05-21.md`.
- README/documentation-topology boundary review is recorded in `knowledge/07_operations/readme_documentation_boundary_review_2026-05-21.md`.
- Lifecycle contracts proposal is recorded in `knowledge/07_operations/lifecycle_contracts_proposal.md`.
- Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as pure contract vocabulary with unit tests, not enforcement.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Active archive-level open loops

- Future runtime readiness checklist only by separate Sergey decision.
- Lifecycle policy layer only by separate Sergey decision.
- README/documentation-topology boundary has been reviewed; further cleanup only if separately selected.
- Book work remains paused until separate Sergey decision.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat bot reviewer comments protocol as automated review enforcement, GitHub Action, required check, validator, hard guardrail, route automation, policy engine, branch protection change, runtime behavior, or approval bypass.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.
- Do not treat scripts/core boundary audit result as implementation, script rewrite, workflow change, validator, hard guardrail, state-sync automation, lifecycle policy layer, or repository restructure.
- Do not treat future ship map review as an implementation mandate.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not treat old archive tails as stale only because they are old.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

After this state sync is merged, choose the next work explicitly; no implementation follows automatically from the README/documentation-topology review.

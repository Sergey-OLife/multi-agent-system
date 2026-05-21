# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.56
- lastCompletedVersion: v2.56
- lastMergedPr: PR #231 — Register bot reviewer comments addendum
- lastMergeCommit: 25875d48d10cb94e940f9409e6afb49d69bdf3ed
- currentMilestone: v2.56 Bot reviewer comments protocol registered
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.56

PR #229 added `assistant_codex_worklog/protocol_addenda/bot_reviewer_comments.md` as a mandatory manual PR review discipline.

PR #231 registered that addendum in the visible addenda list inside `assistant_codex_worklog/working-protocol.md`.

The protocol requires PR comments, submitted reviews, inline review threads, unresolved review threads and `chatgpt-codex-connector` comments to be checked and classified before a PR is presented as ready for `++` or merged.

Classification options:

- `must_fix`;
- `not_applicable`;
- `future_followup`.

## Boundary

Bot reviewer comments protocol is manual PR review discipline only.

It is not:

- automated review enforcement;
- GitHub Action;
- required check;
- validator;
- hard guardrail;
- route automation;
- policy engine;
- branch protection change;
- runtime behavior;
- approval bypass.

## Recent protocol and diagnostic state

PR #228 added `knowledge/07_operations/scripts_core_boundary_audit_scope.md` as a discussion note only.

PR #229 added the bot reviewer comments addendum.

PR #230 archived the bot reviewer protocol and scripts/core scope delta.

PR #231 registered the bot reviewer comments addendum in `working-protocol.md`.

Lifecycle contracts v1 remains implemented in `go-core/lifecycle/` as pure contract vocabulary with unit tests, not enforcement.

The local drift audit script remains a manual warning-only diagnostic instrument and is not enforcement.

## Current recovery path

1. Choose the next work explicitly.
2. Return to `Карта будущего корабля` review when Sergey chooses it.
3. Run the read-only scripts/core boundary audit only if Sergey selects it.
4. Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.
5. Consider a future runtime readiness checklist only by separate decision.

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
- Lifecycle contracts proposal is recorded in `knowledge/07_operations/lifecycle_contracts_proposal.md`.
- Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as pure contract vocabulary with unit tests, not enforcement.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Active archive-level open loops

- `Карта будущего корабля` review.
- Repository architecture contract value from older archives.
- Corrective margin/knowledge-consistency value from older archives.
- Lifecycle policy layer only by separate Sergey decision.
- Future runtime readiness checklist only by separate Sergey decision.
- Scripts/core boundary audit only if selected after the new scope note.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat bot reviewer comments protocol as automated review enforcement, GitHub Action, required check, validator, hard guardrail, route automation, policy engine, branch protection change, runtime behavior, or approval bypass.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not treat scripts/core boundary audit scope as audit result, implementation, script rewrite, workflow change, validator, hard guardrail, state-sync automation, lifecycle policy layer, or repository restructure.
- Do not treat old archive tails as stale only because they are old.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Choose the next work explicitly: return to `Карта будущего корабля` review, or run the read-only scripts/core boundary audit if Sergey selects it.

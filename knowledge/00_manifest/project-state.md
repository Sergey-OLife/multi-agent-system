# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.55
- lastCompletedVersion: v2.55
- lastMergedPr: PR #223 — Implement lifecycle contracts v1
- lastMergeCommit: c2bb5d5d04aef05c871b18f219c56a688c69cdfa
- currentMilestone: v2.55 Lifecycle contracts v1 implemented
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.55

PR #223 added `go-core/lifecycle/lifecycle.go` and `go-core/lifecycle/lifecycle_test.go`.

Lifecycle contracts v1 is now implemented as a small pure Go contract vocabulary with unit tests.

It covers only selected high-risk entity types:

- `agent`;
- `archive`;
- `state`;
- `script`;
- `source_card`.

It checks the highest-risk status confusions and false labels, including:

- proposal as validator or hard guardrail;
- manual discipline as routed, validator or hard guardrail;
- archive as project-state or checkpoint;
- state as proposal, hard guardrail or runtime enforcement;
- script as validator or CI enforcement;
- source card as full source or source-read proof.

It also uses the repository lifecycle token `routed` and rejects unknown stages/concepts instead of silently treating typos as merely not allowed.

## Boundary

Lifecycle contracts v1 is implemented but not enforcement.

It is not:

- CLI;
- GitHub Action;
- CI enforcement beyond existing tests;
- route automation;
- project-gate validator;
- hard guardrail;
- approval logic;
- state-sync automation;
- runtime behavior;
- branch protection change;
- book workflow change.

Any future lifecycle policy layer requires separate decision.

## Recent protocol and diagnostic state

PR #224 archived the blocked merge-tool path for PR #223. That archive is historical after PR #223 manual merge.

PR #214 added `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md` and registered it in `assistant_codex_worklog/working-protocol.md`.

PR #212 added `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.

PR #216 cleaned archive index open-loop navigation conservatively.

The local drift audit script remains a manual warning-only diagnostic instrument and is not enforcement.

## Current recovery path

1. Complete state sync after PR #223.
2. Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.
3. Return to `Карта будущего корабля` review when Sergey chooses it.
4. Consider a future runtime readiness checklist only by separate decision.
5. Consider a scripts/core boundary audit only if needed.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- `archive_status_indicator` is active as manual archive-pressure discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Representative local drift audit test results are recorded in `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.
- Archive status indicator protocol is recorded in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`.
- Conservative archive index cleanup is recorded in `knowledge/08_conversation_archive/index.md`.
- Lifecycle contracts proposal is recorded in `knowledge/07_operations/lifecycle_contracts_proposal.md`.
- Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as pure contract vocabulary with unit tests, not enforcement.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Active archive-level open loops

- `Карта будущего корабля` review.
- Repository architecture contract value from older archives.
- Corrective margin/knowledge-consistency value from older archives.
- Lifecycle policy layer only by separate Sergey decision.
- Future runtime readiness checklist only by separate Sergey decision.
- Scripts/core boundary audit only if needed after selected next work.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not treat old archive tails as stale only because they are old.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete state sync after PR #223.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.64
- lastCompletedVersion: v2.64
- lastMergedPr: PR #257 — Define workflow conductor advisory activation scope
- lastMergeCommit: 7ab13a3a21730ba7ca0aba76c3d22e2442050608
- currentMilestone: v2.64 Workflow conductor advisory activation scope synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.64

This state sync records PR #257 — Define workflow conductor advisory activation scope.

The key result:

```text
workflow_conductor_agent is active as advisory/manual orchestration planner only.
workflow_conductor_agent is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail or policy layer.
```

The conductor may classify task mode, identify primary/supporting agents, propose sequence, detect conflicts, identify approval-gates and recommend the next safe step.

The conductor does not switch the project into book/product mode by itself.

## Boundary

This state sync is state/resume sync only.

It does not:

- implement code;
- change scripts;
- change Go packages;
- change workflows;
- add GitHub Actions;
- add required checks;
- add validators;
- add hard guardrails;
- add policy layer;
- change branch protection settings;
- change runtime behavior;
- change registry status;
- activate route/runtime agents;
- change book workflow;
- resume book/product mode.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Do not treat README as the live roadmap.
4. Use status trust matrix and registry status overlay before treating manual/advisory use as lifecycle mutation.
5. Treat `workflow_conductor_agent` as advisory/manual orchestration planner only.
6. Treat `critic_margin_agent` as advisory/manual second-eyes discipline only.
7. Treat `agent_registry_librarian` as advisory/manual registry hygiene discipline only.
8. Decide explicitly whether to switch to book/product mode.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `workflow_conductor_agent` is active as advisory/manual orchestration planner only.
- `workflow_conductor_agent` is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- `workflow_conductor_agent` may classify task mode, identify primary/supporting agents, propose sequence, detect conflict zones, identify approval-gates and recommend next safe step.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` is active as advisory/manual second-eyes discipline only.
- `critic_margin_agent` is not runtime, route validator, CI gate, approval authority, hard guardrail or policy engine.
- `agent_registry_librarian` is active as advisory/manual registry hygiene discipline only.
- `agent_registry_librarian` is not agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.
- `status_trust_matrix_2026-05-21.md` is a documentation-only classification aid.
- `registry_status_overlay_2026-05-21.md` is a documentation-only explanation layer for registry lifecycle status vs operational trust status.
- `margin_orchestra` is active as manual second-eyes preflight pattern only.
- `archive_status_indicator` is active as manual archive-pressure discipline only.
- `bot_reviewer_comments` is active as manual PR review discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as pure contract vocabulary with unit tests, not enforcement.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Active archive-level open loops

- Book/product mode switch only by separate Sergey decision.
- First book/product mission plan through conductor only after mode switch decision.
- Future runtime readiness checklist only by separate Sergey decision.
- Lifecycle policy layer only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat `workflow_conductor_agent` advisory/manual activation as runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat `critic_margin_agent` advisory/manual activation as runtime activation, route automation, validator, CI gate, approval authority, hard guardrail or policy engine.
- Do not treat `agent_registry_librarian` advisory/manual activation as agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.
- Do not treat registry status overlay as registry mutation, activation, validator, CI check, hard guardrail, policy layer, route/runtime behavior or approval authority.
- Do not treat status trust matrix as automation, validator, CI check, policy layer, runtime behavior, registry mutation or approval authority.
- Do not treat second-eyes preflight card examples as mandatory forms, validators, GitHub Actions, hard guardrails or approval replacements.
- Do not treat baseline audit takeaways as approval for v0.5 release, runtime readiness, blocking drift audit, maturity automation, validators, hard guardrails, policy layer or moving/deleting `book/`.
- Do not treat bot reviewer comments protocol as automated review enforcement, GitHub Action, required check, validator, hard guardrail, route automation, policy engine, branch protection change, runtime behavior, or approval bypass.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Decide explicitly whether to switch to book/product mode.

If Sergey chooses book/product mode, use `workflow_conductor_agent` to create the first advisory mission plan before writing or product design.

Do not let conductor switch modes by itself.

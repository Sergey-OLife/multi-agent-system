# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.66
- lastCompletedVersion: v2.66
- lastMergedPr: PR #261 — Checkpoint full after mode switch commands
- lastMergeCommit: a29f4dec0bb7348d6d0abd1004fee21eaeb620ae
- currentMilestone: v2.66 Checkpoint full after mode switch commands
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.66

This checkpoint records the state after PR #260 synced mode switch commands and PR #261 merged the checkpoint.

The key result:

```text
#книга, #агент and #агенты are active durable protocol context.
```

`#книга` switches conversation/workflow intent to Book/Product Mission Mode.

`#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.

These commands are intent/mode commands only. They do not change repository state by themselves.

## Boundary

This correction aligns state records with the already-merged checkpoint.

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
- resume book/product mode automatically.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Do not treat README as the live roadmap.
4. Use status trust matrix and registry status overlay before treating manual/advisory use as lifecycle mutation.
5. Treat `workflow_conductor_agent` as advisory/manual orchestration planner only.
6. Treat `critic_margin_agent` as advisory/manual second-eyes discipline only.
7. Treat `agent_registry_librarian` as advisory/manual registry hygiene discipline only.
8. Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current durable project mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode and state is synced if needed.
- Book Fast Track remains paused until separate Sergey decision.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.
- Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- After `#книга`, first response should be an advisory book/product mission plan through `workflow_conductor_agent`.
- After `#агент` / `#агенты`, first response should be an advisory agent-work plan through `workflow_conductor_agent` or `agent_registry_librarian`.
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

- Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
- Durable book/product state switch only by separate Sergey decision and state sync if needed.
- First book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision.
- Future runtime readiness checklist only by separate Sergey decision.
- Lifecycle policy layer only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.

## Paused tasks

- Do not continue the book automatically while current durable mode is Agent Shipyard / Agent Queue unless Sergey uses `#книга` or otherwise explicitly switches mode.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat `#книга` as approval to write chapters, change book files, bypass source checks, bypass PR workflow or change GitHub state automatically.
- Do not treat `#агент` or `#агенты` as approval to activate agents, mutate registry, add routes, add validators, add hard guardrails, add runtime, add CI checks or bypass approval-gates.
- Do not treat mode switch commands as project-state mutation; durable state changes still require PR/state sync when needed.
- Do not treat `workflow_conductor_agent` advisory/manual activation as runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat `critic_margin_agent` advisory/manual activation as runtime activation, route automation, validator, CI gate, approval authority, hard guardrail or policy engine.
- Do not treat `agent_registry_librarian` advisory/manual activation as agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.
- Do not treat registry status overlay as registry mutation, activation, validator, CI check, hard guardrail, policy layer, route/runtime behavior or approval authority.
- Do not treat status trust matrix as automation, validator, CI check, policy layer, runtime behavior, registry mutation or approval authority.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

After `#книга`, `workflow_conductor_agent` should create the first advisory book/product mission plan.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` should create the first advisory agent-work plan.

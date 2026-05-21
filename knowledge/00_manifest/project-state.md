# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.60
- lastCompletedVersion: v2.60
- lastMergedPr: PR #245 — Define critic margin advisor activation scope
- lastMergeCommit: b20f812fecb4da9bf0247a37df1badd8778ca553
- currentMilestone: v2.60 Critic margin advisor activation scope synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.60

This state sync records the Agent Queue / second-eyes sequence after v2.59:

- PR #240 — Archive README boundary and operations review closure;
- PR #241 — Review old architecture tails and close resolved archive loops;
- PR #242 — Clarify second-eyes status boundaries;
- PR #243 — Record baseline audit takeaways without runtime escalation;
- PR #244 — Add second-eyes preflight card examples;
- PR #245 — Define critic margin advisor activation scope.

The key result:

```text
critic_margin_agent is active as advisory/manual second-eyes discipline.
critic_margin_agent is not active as runtime/route validator.
workflow_conductor_agent remains a separate proposal.
```

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
- activate `workflow_conductor_agent`;
- route `critic_margin_agent` as runtime agent;
- change book workflow.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Do not treat README as the live roadmap.
4. Treat operations review notes as references, not implementation mandates.
5. Treat `critic_margin_agent` as advisory/manual second-eyes discipline only.
6. Choose the next Agent Queue step explicitly.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` is active as advisory/manual second-eyes discipline only.
- `critic_margin_agent` is not runtime, route validator, CI gate, approval authority, hard guardrail or policy engine.
- `critic_margin_agent` route/runtime form remains non-active unless separately approved.
- `margin_orchestra` is active as manual second-eyes preflight pattern only.
- `workflow_conductor_agent` remains a separate proposal and is not activated by critic/margin work.
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

- Future runtime readiness checklist only by separate Sergey decision.
- Lifecycle policy layer only by separate Sergey decision.
- Workflow conductor activation only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.
- Book work remains paused until separate Sergey decision.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat `critic_margin_agent` advisory/manual activation as runtime activation, route automation, validator, CI gate, approval authority, hard guardrail or policy engine.
- Do not activate `workflow_conductor_agent` through `critic_margin_agent` or `margin_orchestra` work.
- Do not treat second-eyes preflight card examples as mandatory forms, validators, GitHub Actions, hard guardrails or approval replacements.
- Do not treat baseline audit takeaways as approval for v0.5 release, runtime readiness, blocking drift audit, maturity automation, validators, hard guardrails, policy layer or moving/deleting `book/`.
- Do not treat bot reviewer comments protocol as automated review enforcement, GitHub Action, required check, validator, hard guardrail, route automation, policy engine, branch protection change, runtime behavior, or approval bypass.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not treat the local state-sync drift audit script as GitHub Action, required check, validator, hard guardrail, route, runtime, or blocking rule.
- Do not treat the archive status indicator as automation, CI, validator, route, hard guardrail, project-state sync, checkpoint, or approval bypass.
- Do not treat lifecycle contracts v1 as enforcement, validator, hard guardrail, route automation, CI enforcement, runtime, branch protection, approval bypass, policy layer or book workflow change.
- Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.
- Do not treat future ship map review as an implementation mandate.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

After this state sync is merged, choose the next Agent Queue step explicitly; critic_margin_agent advisory/manual activation is synced, but no runtime, route, validator or workflow_conductor activation follows automatically.

# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.64
- currentMilestone: Workflow conductor advisory activation scope synced
- lastMergedPr: PR #257 — Define workflow conductor advisory activation scope
- lastMergeCommit: `7ab13a3a21730ba7ca0aba76c3d22e2442050608`

## Recent PR summary

- PR #257 — Define workflow conductor advisory activation scope.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`workflow_conductor_agent` is active as advisory/manual orchestration planner only.

`workflow_conductor_agent` may classify task mode, identify primary/supporting agents, propose sequence, detect conflict zones, identify approval-gates, recommend next safe step and state what must not be automated.

`workflow_conductor_agent` is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.

`margin_orchestra` is active manual preflight discipline only.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`critic_margin_agent` is not active as runtime/route validator, CI gate, approval authority, hard guardrail or policy engine.

`agent_registry_librarian` is active as advisory/manual registry hygiene discipline.

`agent_registry_librarian` is not active as agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.

`status_trust_matrix_2026-05-21.md` is documentation-only classification aid. It is not automation, validator, CI check, policy layer, runtime behavior, registry mutation or approval authority.

`registry_status_overlay_2026-05-21.md` is documentation-only explanation layer. It clarifies that registry lifecycle status tells what the agent is in the registry, while operational trust status tells how the project may use it now.

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

Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests.

It is implemented but not enforcement: no CLI, GitHub Action, CI enforcement beyond existing tests, route automation, project-gate validator, hard guardrail, approval logic, state-sync automation, runtime behavior, branch protection change, or book workflow change.

Status trust matrix is recorded in `knowledge/07_operations/status_trust_matrix_2026-05-21.md`.

Manual agent registry hygiene pass is recorded in `knowledge/07_operations/agent_registry_hygiene_pass_2026-05-21.md`.

Registry status overlay is recorded in `knowledge/07_operations/registry_status_overlay_2026-05-21.md`.

Workflow conductor advisory activation scope is recorded in `knowledge/07_operations/workflow_conductor_advisory_activation_scope_2026-05-21.md`.

README is the entrance map, not the live roadmap. Use project-state/current-state/roadmap for next action.

## Active archive-level open loops

- Book/product mode switch: only by separate Sergey decision.
- First book/product mission plan through conductor: only after mode switch decision.
- Lifecycle policy layer: future-only and requires separate Sergey decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight: only by separate Sergey decision.

## Approved next sequence

1. merge this state sync after checks and approval;
2. decide explicitly whether to switch to book/product mode;
3. if book/product mode is selected, use `workflow_conductor_agent` to create the first advisory mission plan before writing or product design;
4. do not let conductor switch modes by itself;
5. do not treat conductor output as approval or enforcement.

## Recommended next work item

Decide explicitly whether to switch to book/product mode. If Sergey chooses book/product mode, use `workflow_conductor_agent` to create the first advisory mission plan before writing or product design.

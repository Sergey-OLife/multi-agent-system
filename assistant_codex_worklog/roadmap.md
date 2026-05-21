# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.65
- currentMilestone: Mode switch commands synced
- lastMergedPr: PR #259 — Add book and agent mode switch commands
- lastMergeCommit: `630e8bda6180e79b6402ead5e8d311c97e0f0203`

## Recent PR summary

- PR #257 — Define workflow conductor advisory activation scope.
- PR #258 — Sync state after workflow conductor advisory activation.
- PR #259 — Add book and agent mode switch commands.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

Mode switch commands are active as mandatory protocol addendum:

- `#книга` — switch conversation/workflow intent to Book/Product Mission Mode.
- `#агент` / `#агенты` — switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.

Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.

After `#книга`, `workflow_conductor_agent` creates the first advisory book/product mission plan before writing or product design starts.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` creates the first advisory agent-work plan.

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

Mode switch commands are recorded in `assistant_codex_worklog/protocol_addenda/mode_switch_commands.md` and registered in `assistant_codex_worklog/working-protocol.md`.

Workflow conductor advisory activation scope is recorded in `knowledge/07_operations/workflow_conductor_advisory_activation_scope_2026-05-21.md`.

README is the entrance map, not the live roadmap. Use project-state/current-state/roadmap for next action.

## Active archive-level open loops

- Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
- Durable book/product state switch: only by separate Sergey decision and state sync if needed.
- First book/product mission plan through conductor: only after `#книга` or equivalent explicit mode decision.
- Lifecycle policy layer: future-only and requires separate Sergey decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight: only by separate Sergey decision.

## Approved next sequence

1. merge this state sync after checks and approval;
2. wait for Sergey to choose `#книга`, `#агент` or `#агенты`;
3. after `#книга`, give an advisory book/product mission plan before writing or product design;
4. after `#агент` / `#агенты`, give an advisory agent-work plan before PR changes;
5. do not treat mode command as GitHub state mutation or approval.

## Recommended next work item

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

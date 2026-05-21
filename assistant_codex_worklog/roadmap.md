# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.67
- currentMilestone: PR operation response footer synced
- lastMergedPr: PR #263 — Add PR operation response footer protocol
- lastMergeCommit: `10f65324336a636ecf7f037af2708b29737a9deb`

## Recent PR summary

- PR #261 — Checkpoint full after mode switch commands.
- PR #262 — Align checkpoint state records with v2.66.
- PR #263 — Add PR operation response footer protocol.

## Status

`pr_operation_response_footer.md` is active as mandatory protocol addendum.

After PR / merge / state-sync / checkpoint operations, responses must include:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

Mode switch commands are active as mandatory protocol addendum:

- `#книга` — switch conversation/workflow intent to Book/Product Mission Mode.
- `#агент` / `#агенты` — switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.

Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.

After `#книга`, `workflow_conductor_agent` creates the first advisory book/product mission plan before writing or product design starts.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` creates the first advisory agent-work plan.

`workflow_conductor_agent` is active as advisory/manual orchestration planner only.

`workflow_conductor_agent` is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`agent_registry_librarian` is active as advisory/manual registry hygiene discipline.

`bot_reviewer_comments` is active mandatory manual PR review discipline only.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Required check contexts are documented in `knowledge/07_operations/checks_overview.md`:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

Local state-sync drift audit script is implemented as warning-only local diagnostic tool.

Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests, not enforcement.

Mode switch commands are recorded in `assistant_codex_worklog/protocol_addenda/mode_switch_commands.md`.

PR operation response footer is recorded in `assistant_codex_worklog/protocol_addenda/pr_operation_response_footer.md`.

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
5. include the PR operation response footer after PR-related work.

## Recommended next work item

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

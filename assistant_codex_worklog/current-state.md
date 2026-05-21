# Current State — Assistant × Codex

Date: 2026-05-21

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #263 — Add PR operation response footer protocol
- Status: merged
- Merge commit: `10f65324336a636ecf7f037af2708b29737a9deb`

## Current version

- currentVersion: v2.67
- currentMilestone: PR operation response footer synced

## Recent protocol sequence

PR #261 created the full checkpoint after mode switch commands as v2.66.

PR #262 corrected checkpoint state records to v2.66 / PR #261.

PR #263 added `assistant_codex_worklog/protocol_addenda/pr_operation_response_footer.md`.

## Current protocol result

After PR / merge / state-sync / checkpoint operations, responses must include:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.

`#книга` switches conversation/workflow intent to Book/Product Mission Mode.

After `#книга`, `workflow_conductor_agent` should create the first advisory book/product mission plan before writing or product design starts.

`#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` should create the first advisory agent-work plan.

Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.

`workflow_conductor_agent` is active as advisory/manual orchestration planner.

It is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer, or automatic mode switch.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`agent_registry_librarian` is active as advisory/manual registry hygiene discipline.

README is the entrance map, not the live roadmap.

For the current next action, use:

- `knowledge/00_manifest/project-state.json`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`.

## Current active manual disciplines

- `workflow_conductor_agent` advisory/manual orchestration planner;
- `critic_margin_agent` advisory/manual second-eyes discipline;
- `agent_registry_librarian` advisory/manual registry hygiene discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline;
- `pr_operation_response_footer` manual response footer discipline.

## Active archive-level open loops

- wait for Sergey to choose `#книга`, `#агент` or `#агенты`;
- durable book/product state switch only by separate Sergey decision and state sync if needed;
- first book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision;
- future runtime readiness checklist only by separate Sergey decision;
- lifecycle policy layer only by separate Sergey decision;
- further second-eyes tooling or mandatory preflight only by separate Sergey decision.

## Next safe step

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

After `#книга`, `workflow_conductor_agent` should create the first advisory book/product mission plan.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` should create the first advisory agent-work plan.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.67
- lastCompletedVersion: v2.67
- lastMergedPr: PR #263 — Add PR operation response footer protocol
- lastMergeCommit: 10f65324336a636ecf7f037af2708b29737a9deb
- currentMilestone: v2.67 PR operation response footer synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.67

This state sync records PR #263 — Add PR operation response footer protocol.

The key result:

```text
After PR / merge / state-sync / checkpoint operations, ChatGPT must include footer lines for bot/reviewer comments and archive status.
```

Required footer shape:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.

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
- resume book/product mode automatically.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Read protocol addenda, especially `pr_operation_response_footer.md`, `bot_reviewer_comments.md`, `archive_status_indicator.md` and `mode_switch_commands.md`.
4. Do not treat README as the live roadmap.
5. Treat `workflow_conductor_agent` as advisory/manual orchestration planner only.
6. Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current durable project mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode and state is synced if needed.
- Book Fast Track remains paused until separate Sergey decision.
- PR #263 added `pr_operation_response_footer.md` as mandatory protocol addendum.
- After PR, merge, state-sync, checkpoint, archive PR, correction PR, reviewer/bot handling or PR workflow status responses, ChatGPT must include footer lines for bot/reviewer comments and archive status.
- If bot/reviewer comments were not checked, ChatGPT must not say `clean point` / `чистая точка`; `get_pr_info` alone is not enough.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.
- Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- `workflow_conductor_agent` is active as advisory/manual orchestration planner only.
- `workflow_conductor_agent` is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- `critic_margin_agent` is active as advisory/manual second-eyes discipline only.
- `agent_registry_librarian` is active as advisory/manual registry hygiene discipline only.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.

## Active archive-level open loops

- Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
- Durable book/product state switch only by separate Sergey decision and state sync if needed.
- First book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision.
- Future runtime readiness checklist only by separate Sergey decision.
- Lifecycle policy layer only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.

## Paused tasks

- Do not continue the book automatically while current durable mode is Agent Shipyard / Agent Queue unless Sergey uses `#книга` or otherwise explicitly switches mode.
- Do not treat `#книга` as approval to write chapters, change book files, bypass source checks, bypass PR workflow or change GitHub state automatically.
- Do not treat `#агент` or `#агенты` as approval to activate agents, mutate registry, add routes, add validators, add hard guardrails, add runtime, add CI checks or bypass approval-gates.
- Do not treat `pr_operation_response_footer` as automation, CI check, validator, hard guardrail, archive-state mutation or approval gate.
- Do not say `clean point` / `чистая точка` after a PR operation unless relevant bot/reviewer comments were checked or truly not applicable.
- Do not treat `workflow_conductor_agent` advisory/manual activation as runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.

## Next action

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

After `#книга`, `workflow_conductor_agent` should create the first advisory book/product mission plan.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` should create the first advisory agent-work plan.

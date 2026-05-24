# Current State — Assistant × Codex

Date: 2026-05-24

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #283 — Add operations readiness note
- Status: merged
- Merge commit: `0da803f36660d0b6b65ef7199b2c0f7a73d0544c`

## Current version

- currentVersion: v2.70
- currentMilestone: Runtime readiness checklist synced

## Recent protocol sequence

PR #261 created the full checkpoint after mode switch commands as v2.66.

PR #262 corrected checkpoint state records to v2.66 / PR #261.

PR #263 added `assistant_codex_worklog/protocol_addenda/pr_operation_response_footer.md`.

## External-audit / archive-structure / authority arc

Merged arc: PR #270, PR #271, PR #272, PR #273, PR #275, PR #277, PR #278.

Closed unmerged: PR #274, PR #276, PR #279.

PR #273 added a local advisory archive structure check. PR #278 corrected empty-index handling in that advisory check. The advisory check remains warning-only/manual unless Sergey separately approves CI/gate promotion.

PR #280 synced the project-state/worklog files after that arc.

## State-sync additive discipline

PR #281 added `assistant_codex_worklog/protocol_addenda/state_sync_additive_patch_discipline.md` and registered it in `assistant_codex_worklog/working-protocol.md`.

State/resume sync is additive by default. Codex may assist, but should receive a patch-map, not a broad state rewrite task.

Codex local commits, done reports and PR-helper reports are not source-of-truth facts unless visible in GitHub.

PR #282 synced project-state/worklog after the additive patch discipline.

## Runtime readiness checklist

PR #283 added `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md`.

This is a documentation-only operations note and readiness map. It does not change repository behavior or project mode.

## Current protocol result

After PR / merge / state-sync / checkpoint operations, responses must include:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.

Mode switch commands are active:

- `#книга` switches conversation/workflow intent to Book/Product Mission Mode. First response should be an advisory book/product mission plan before writing or product design starts.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode. First response should be an advisory agent-work plan.

Mode switch commands do not change repository state, project-state, registry, activation status, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.

`workflow_conductor_agent` is active as advisory/manual orchestration planner.

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
- `pr_operation_response_footer` manual response footer discipline;
- `state_sync_additive_patch_discipline` manual state-sync discipline.

## Active archive-level open loops

- continue Agent Shipyard / Agent Queue with the next advisory open loop, likely lifecycle policy layer;
- durable book/product state switch only by separate Sergey decision and state sync if needed;
- first book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision;
- lifecycle policy layer only by separate Sergey decision;
- further second-eyes tooling or mandatory preflight only by separate Sergey decision;
- archive structure advisory check promotion beyond local warning-only diagnostics requires separate Sergey decision;
- bot/reviewer comment readiness may be a future validator candidate, not an automatic gate;
- runtime readiness remains documentation-only unless Sergey separately approves scoped runtime discussion or implementation.

## State-sync boundaries

This v2.70 update is state/resume sync only.

It does not change runtime behavior, add validators, add gates, change CI, change branch protection, change archive protocol, mutate registry, or resume book mode.

## Next safe step

Continue Agent Shipyard / Agent Queue with the next advisory open loop, likely lifecycle policy layer, or switch to `#книга` by explicit Sergey command.

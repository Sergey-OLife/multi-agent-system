# Current State — Assistant × Codex

Date: 2026-05-23

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #281 — Add state-sync additive patch discipline
- Status: merged
- Merge commit: `2ac0db1cbb0ff3e71144454d7c07e58d1e25496f`

## Current version

- currentVersion: v2.69
- currentMilestone: State-sync additive patch discipline synced

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

- wait for Sergey to choose `#книга`, `#агент` or `#агенты`;
- durable book/product state switch only by separate Sergey decision and state sync if needed;
- first book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision;
- future runtime readiness checklist only by separate Sergey decision;
- lifecycle policy layer only by separate Sergey decision;
- further second-eyes tooling or mandatory preflight only by separate Sergey decision;
- archive structure advisory check promotion beyond local warning-only diagnostics requires separate Sergey decision;
- bot/reviewer comment readiness may be a future validator candidate, not an automatic gate.

## State-sync boundaries

This v2.69 update is state/resume sync only.

It does not change runtime behavior, add validators, add gates, change CI, change branch protection, change archive protocol, mutate registry, or resume book mode.

## Next safe step

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

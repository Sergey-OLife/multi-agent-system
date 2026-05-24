# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.70
- lastCompletedVersion: v2.70
- lastMergedPr: PR #283 — Add operations readiness note
- lastMergeCommit: 0da803f36660d0b6b65ef7199b2c0f7a73d0544c
- currentMilestone: v2.70 Runtime readiness checklist synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.70

This state sync records PR #283 — Add operations readiness note.

The key result:

```text
knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md is a documentation-only readiness map for future runtime discussions.
```

The runtime readiness checklist is not runtime implementation, route automation, validator, hard guardrail, policy layer, CI gate, branch protection, registry mutation, archive protocol change, state-sync rewrite or book mode resume.

## What changed in v2.69

This state sync records PR #281 — Add state-sync additive patch discipline.

The key result:

```text
State/resume sync is additive by default. Codex may assist, but receives a patch-map, not a broad rewrite task.
```

PR #281 added `assistant_codex_worklog/protocol_addenda/state_sync_additive_patch_discipline.md` and registered it in `assistant_codex_worklog/working-protocol.md`.

The discipline preserves Codex as a tool while preventing recurrence of the PR #280 destructive state rewrite failure pattern.

## What changed in v2.68

This state sync records the completed external-audit / archive-structure / document-authority arc.

Merged arc:

- PR #270 — Add reasonable community balancing map.
- PR #271 — Clarify checks vs manual invariants.
- PR #272 — Add archive structure validator candidate.
- PR #273 — Add archive structure advisory check.
- PR #275 — Clarify document authority layers.
- PR #277 — Archive external audit validator and authority arc.
- PR #278 — Adjust archive structure index handling.

Closed unmerged:

- PR #274 — stale duplicate of PR #271.
- PR #276 — superseded by PR #278.
- PR #279 — duplicate of PR #275.

The key result:

```text
The archive structure check exists only as local advisory / warning-only diagnostics unless Sergey separately approves CI/gate promotion.
```

## What remains from v2.67

PR #263 added `pr_operation_response_footer.md` as mandatory protocol addendum.

Required footer shape after PR / merge / state-sync / checkpoint operations:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.

## Boundary

This state sync is state/resume sync only.

It does not:

- implement code;
- change runtime behavior;
- change workflows;
- add GitHub Actions;
- add required checks;
- add validators;
- add hard guardrails;
- add policy layer;
- change branch protection settings;
- change archive protocol;
- mutate registry status;
- activate route/runtime agents;
- change book workflow;
- resume book/product mode automatically.

## Current recovery path

1. Use GitHub `main` as the source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Read protocol addenda, especially `pr_operation_response_footer.md`, `bot_reviewer_comments.md`, `archive_status_indicator.md`, `mode_switch_commands.md` and `state_sync_additive_patch_discipline.md`.
4. Do not treat README as the live roadmap.
5. Treat `workflow_conductor_agent` as advisory/manual orchestration planner only.
6. Continue Agent Shipyard / Agent Queue with the next advisory open loop, or switch to `#книга` by explicit Sergey command.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current durable project mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode and state is synced if needed.
- Book Fast Track remains paused until separate Sergey decision.
- PR #263 added `pr_operation_response_footer.md` as mandatory protocol addendum.
- PR #270 added the reasonable community balancing map as an operations note only.
- PR #271 clarified checks vs manual invariants.
- PR #272 added archive structure validator candidate/spec only.
- PR #273 added a local advisory archive structure check and npm script.
- PR #275 clarified documentation authority layers.
- PR #277 archived the external-audit / validator / authority arc.
- PR #278 corrected empty-index handling in the advisory archive structure check.
- PR #280 synced state/resume after the external-audit / archive-structure / authority arc without changing runtime, CI, branch protection, validators, registry or archive protocol.
- PR #281 added state_sync_additive_patch_discipline.md as mandatory manual protocol addendum.
- PR #282 synced state/worklog after the additive patch discipline without changing runtime, CI, branch protection, validators, registry or archive protocol.
- PR #283 added `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md` as a documentation-only operations note and readiness map.
- Runtime readiness checklist is not runtime implementation, route automation, validator, hard guardrail, policy layer, CI gate, branch protection, registry mutation, archive protocol change, state-sync rewrite or book mode resume.
- State/resume sync is additive by default; Codex receives a patch-map, not a broad state rewrite task.
- Codex local commits, done reports and PR-helper reports are not source-of-truth facts unless visible in GitHub.
- Advisory checks remain warning-only/manual unless Sergey separately approves CI/gate promotion.
- After PR, merge, state-sync, checkpoint, archive PR, correction PR, reviewer/bot handling or PR workflow status responses, ChatGPT must include footer lines for bot/reviewer comments and archive status.
- If bot/reviewer comments were not checked, ChatGPT must not say `clean point` / `чистая точка`; `get_pr_info` alone is not enough.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode.
- Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- `workflow_conductor_agent` is active as advisory/manual orchestration planner only.
- `critic_margin_agent` is active as advisory/manual second-eyes discipline only.
- `agent_registry_librarian` is active as advisory/manual registry hygiene discipline only.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.

## Active archive-level open loops

- Continue Agent Shipyard / Agent Queue with the next advisory open loop, likely lifecycle policy layer.
- Durable book/product state switch only by separate Sergey decision and state sync if needed.
- First book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision.
- Lifecycle policy layer only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.
- Archive structure advisory check promotion beyond local warning-only diagnostics requires separate Sergey decision.
- Bot/reviewer comment readiness may be a future validator candidate, not an automatic gate.
- Runtime readiness remains documentation-only unless Sergey separately approves scoped runtime discussion or implementation.

## Paused tasks

- Do not continue the book automatically while current durable mode is Agent Shipyard / Agent Queue unless Sergey uses `#книга` or otherwise explicitly switches mode.
- Do not treat `#книга` as approval to write chapters, change book files, bypass source checks, bypass PR workflow or change GitHub state automatically.
- Do not treat `#агент` or `#агенты` as approval to activate agents, mutate registry, add routes, add validators, add hard guardrails, add runtime, add CI checks or bypass approval-gates.
- Do not treat `pr_operation_response_footer` as automation, CI check, validator, hard guardrail, archive-state mutation or approval gate.
- Do not say `clean point` / `чистая точка` after a PR operation unless relevant bot/reviewer comments were checked or truly not applicable.
- Do not treat `workflow_conductor_agent` advisory/manual activation as runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not treat `runtime_readiness_checklist_2026-05-24.md` as runtime implementation, validator, policy layer, CI gate, branch protection, registry mutation, archive protocol change or approval to implement infrastructure.
- Do not treat PR #274, PR #276 or PR #279 as implemented.
- Do not let Codex rewrite or compact state/resume files; state-sync is additive by default.

## Resume pointers

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/protocol_addenda/state_sync_additive_patch_discipline.md`
- `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md`

## Next action

Continue Agent Shipyard / Agent Queue with the next advisory open loop, likely lifecycle policy layer, or switch to `#книга` by explicit Sergey command.

Runtime readiness remains documentation-only unless Sergey separately approves scoped runtime discussion or implementation.

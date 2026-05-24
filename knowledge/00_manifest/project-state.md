# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.71
- lastCompletedVersion: v2.71
- lastMergedPr: PR #284 — State sync after operations readiness note
- lastMergeCommit: a66449b57c2bdb164cd304225b8de28e05ab6c7b
- currentMilestone: v2.71 Checkpoint full after runtime readiness state sync
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.71

This checkpoint records PR #284 — State sync after operations readiness note.

The key result:

```text
Runtime readiness is now synced into state/worklog as documentation-only planning context, not implementation or enforcement.
```

PR #284 synced state/resume after PR #283 and preserved the boundary that `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md` is a manual planning map only.

## What changed in v2.70

This state sync records PR #283 — Add operations readiness note.

The key result:

```text
runtime_readiness_checklist_2026-05-24.md exists as a documentation-only readiness map for future runtime discussions.
```

PR #283 added `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md`.

The note can be used as a manual planning frame when Agent Shipyard / Agent Queue work approaches runtime language.

It does not implement runtime, route automation, validators, hard guardrails, policy layer, infrastructure, CI, branch protection, registry mutation, archive protocol changes, state-sync rewrite or book workflow changes.

## What changed in v2.69

This state sync records PR #281 — Add state-sync additive patch discipline.

The key result:

```text
State/resume sync is additive by default. Codex may assist, but receives a patch-map, not a broad rewrite task.
```

PR #281 added `assistant_codex_worklog/protocol_addenda/state_sync_additive_patch_discipline.md` and registered it in `assistant_codex_worklog/working-protocol.md`.

The discipline preserves Codex as a tool while preventing recurrence of the PR #280 destructive state rewrite failure pattern.

## Boundary

This checkpoint/state sync is state/resume sync only.

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
6. Use `runtime_readiness_checklist_2026-05-24.md` only as a documentation-only planning map if future Agent Queue work approaches runtime language.
7. Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current durable project mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode and state is synced if needed.
- Book Fast Track remains paused until separate Sergey decision.
- PR #281 added state_sync_additive_patch_discipline.md as mandatory manual protocol addendum.
- PR #283 added `runtime_readiness_checklist_2026-05-24.md` as a documentation-only operations readiness note.
- PR #284 synced state/resume after PR #283 and recorded runtime readiness as documentation-only planning map.
- Runtime readiness checklist is a manual planning map only and does not implement runtime, route automation, validators, hard guardrails, policy layer, CI, branch protection, registry mutation, archive protocol change or book workflow change.
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

- Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
- Durable book/product state switch only by separate Sergey decision and state sync if needed.
- First book/product mission plan through conductor only after `#книга` or equivalent explicit mode decision.
- Lifecycle policy layer only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight only by separate Sergey decision.
- Archive structure advisory check promotion beyond local warning-only diagnostics requires separate Sergey decision.
- Bot/reviewer comment readiness may be a future validator candidate, not an automatic gate.
- Future runtime readiness implementation remains blocked unless Sergey separately approves a scoped runtime decision.

## Paused tasks

- Do not continue the book automatically while current durable mode is Agent Shipyard / Agent Queue unless Sergey uses `#книга` or otherwise explicitly switches mode.
- Do not treat `#книга` as approval to write chapters, change book files, bypass source checks, bypass PR workflow or change GitHub state automatically.
- Do not treat `#агент` or `#агенты` as approval to activate agents, mutate registry, add routes, add validators, add hard guardrails, add runtime, add CI checks or bypass approval-gates.
- Do not treat `pr_operation_response_footer` as automation, CI check, validator, hard guardrail, archive-state mutation or approval gate.
- Do not say `clean point` / `чистая точка` after a PR operation unless relevant bot/reviewer comments were checked or truly not applicable.
- Do not treat `workflow_conductor_agent` advisory/manual activation as runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, project-state sync or automation.
- Do not treat README as live roadmap; use project-state/current-state/roadmap for next action.
- Do not treat PR #274, PR #276 or PR #279 as implemented.
- Do not let Codex rewrite or compact state/resume files; state-sync is additive by default.
- Do not treat `runtime_readiness_checklist_2026-05-24.md` as runtime implementation, route automation, validator, hard guardrail, policy layer, infrastructure approval or deployment plan.

## Resume pointers

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/protocol_addenda/state_sync_additive_patch_discipline.md`
- `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md`

## Next action

Wait for Sergey to choose `#книга`, `#агент` or `#агенты`.

After `#книга`, `workflow_conductor_agent` should create the first advisory book/product mission plan.

After `#агент` / `#агенты`, `workflow_conductor_agent` or `agent_registry_librarian` should create the first advisory agent-work plan.

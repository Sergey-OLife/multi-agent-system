# Restart Prompt — Assistant × Codex

```text
Продолжаем проект Sergey-OLife/multi-agent-system.

GitHub main — источник правды. Сначала открой README, project-state, current-state, roadmap, restart-prompt, working-protocol, protocol_addenda/*.md, status_trust_matrix_2026-05-21, registry_status_overlay_2026-05-21, workflow_conductor_advisory_activation_scope_2026-05-21, agent proposals for workflow_conductor_agent / critic_margin_agent / agent_registry_librarian, CI and Sync Check workflows, package.json and scripts/state-sync-drift-audit.mjs.

Актуальное состояние:

- currentVersion: v2.71.
- lastMergedPr: PR #284 — State sync after operations readiness note.
- lastMergeCommit: a66449b57c2bdb164cd304225b8de28e05ab6c7b.
- currentMode: Agent Shipyard / Agent Queue.
- Книга на паузе до команды `#книга` или отдельного явного mode decision.
- `pr_operation_response_footer.md` is active mandatory protocol addendum.
- `state_sync_additive_patch_discipline.md` is active mandatory manual protocol addendum.
- State/resume sync is additive by default. Codex may assist, but should receive a patch-map, not a broad state rewrite task.
- Codex local commits, done reports and PR-helper reports are not source-of-truth facts unless visible in GitHub.
- After PR / merge / state-sync / checkpoint operations, responses must include:
  - Bot/reviewer comments: checked / not checked / not applicable.
  - Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
- If bot/reviewer comments were not checked, ChatGPT must not call the point clean. `get_pr_info` alone is not enough.
- Mode switch commands are active protocol: `#книга`, `#агент`, `#агенты`.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode; first response should be workflow_conductor_agent advisory mission plan before writing/product design.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode; first response should be advisory agent-work plan.
- Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- workflow_conductor_agent is active as advisory/manual orchestration planner only.
- workflow_conductor_agent is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- critic_margin_agent is active as advisory/manual second-eyes discipline only.
- agent_registry_librarian is active as advisory/manual registry hygiene discipline only.
- status_trust_matrix_2026-05-21 and registry_status_overlay_2026-05-21 are documentation-only aids, not automation/enforcement.
- bot_reviewer_comments is active as mandatory manual PR review discipline only.
- `рестарт` is implemented as a GitHub-source-of-truth continuation command.
- Required branch-protection check contexts are documented in `knowledge/07_operations/checks_overview.md`: `TypeScript / JavaScript / Go checks` and `sync-check`.
- Local state-sync drift audit script is warning-only local diagnostic tooling.
- Lifecycle contracts v1 is implemented but not enforcement.
- Merged external-audit/archive-structure/document-authority arc: PR #270, #271, #272, #273, #275, #277, #278.
- Closed unmerged in this arc: PR #274, #276, #279.
- PR #280 synced state/resume after that arc.
- PR #281 added state-sync additive patch discipline.
- PR #283 added `knowledge/07_operations/runtime_readiness_checklist_2026-05-24.md` as a documentation-only operations readiness note.
- PR #284 synced state/resume after PR #283 and recorded runtime readiness as documentation-only planning map.
- Runtime readiness checklist is a manual planning map only and does not implement runtime, route automation, validators, hard guardrails, policy layer, infrastructure, CI, branch protection, registry mutation, archive protocol changes, state-sync rewrite or book workflow changes.
- PR #273 added advisory archive structure check.
- PR #278 corrected empty-index handling in that advisory check.
- Advisory archive structure check remains warning-only/manual unless Sergey separately approves CI/gate promotion.

Boundary: this repo is a GitHub-centered book/project operating system, not production multi-agent runtime, reusable public framework, or deployed agent platform. PR operation response footer is manual response discipline only: not automation, not CI check, not validator, not hard guardrail, not archive-state mutation and not approval gate. State-sync additive patch discipline is manual protocol only: not CI, not hard gate, not branch protection, not parser change, not runtime. Mode switch commands are not approval and not GitHub state mutation. Runtime readiness checklist is documentation-only planning map, not implementation. This v2.71 checkpoint/state sync is state/resume sync only: no runtime behavior, validators, hard gates, CI, branch protection, archive protocol, registry mutation or book mode resume.

Active open loops: wait for Sergey to choose `#книга`, `#агент` or `#агенты`; durable book/product state switch only by separate Sergey decision and state sync if needed; lifecycle policy layer only by separate Sergey decision; future runtime readiness implementation only by separate scoped Sergey decision; further second-eyes tooling or mandatory preflight only by separate Sergey decision; archive structure advisory check promotion only by separate Sergey decision.

Next: wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
```
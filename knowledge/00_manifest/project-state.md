# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Source of truth basis

GitHub `main` remains the accepted source of truth for merged project state.

`knowledge/00_manifest/project-state.json` is the machine-readable resume diagnostic source. This markdown file mirrors it for human reading.

Worklog, restart prompts, archive entries, audit notes, operations notes and Notion memory are continuity or source-material layers. They help resume work, but they do not become active project state unless reflected in project-state, code, or an explicitly accepted document.

## Resume order

When restarting or selecting the next grounded action, read sources in this order:

1. `README.md`
2. `knowledge/00_manifest/project-state.json`
3. `knowledge/00_manifest/project-state.md`
4. `assistant_codex_worklog/current-state.md`
5. `assistant_codex_worklog/roadmap.md`
6. `assistant_codex_worklog/restart-prompt.md`
7. `assistant_codex_worklog/working-protocol.md`
8. `assistant_codex_worklog/protocol_addenda/*.md`
9. Any framework or operation file explicitly referenced by the state/current-state files.
10. Open PR list and relevant PR discussion/review comments when PR workflow is involved.

This order clarifies priority. It does not collapse the files into one source and does not turn worklog, archive, audit note, Notion page or proposal into project-state.

## Current version

- currentVersion: v2.76
- lastCompletedVersion: v2.76
- lastMergedPr: PR #305 — Clarify project Notion memory access
- lastMergeCommit: `bd77d56fb4c9b0fc4d51391a9246ff5af219acc5`
- currentMilestone: v2.76 State sync after PR #305 status correction and reasonable start 12 checks layer
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.75

This additive state sync records the merged PR #299-302 arc while preserving earlier durable state and guardrails.

- PR #299 — Add Plotnikov book architecture map
- PR #300 — Archive chapter rehydration audit state sync chat
- PR #301 — Add Notion context memory protocol
- PR #302 — Clarify project Notion memory access

PR #299 added `knowledge/07_operations/plotnikov_book_architecture_map_2026-05-26.md` as a documentation-only operations note.

Key content boundary:

- it maps how Plotnikov's whole-book structure should inform `Разумное сообщество`;
- it preserves Sergey’s correction that directional thoughts should first be placed in architecture, not immediately embedded into chapter prose;
- it clarifies that Chapter 1 should carry only the seed that personal reason becomes climate;
- it places the heavier community / stronger-people / durable-income thesis into later team, group and leadership zones.

PR #300 archived the chapter rehydration / audit / state-sync chat arc as archive only.

PR #301 added `knowledge/07_operations/notion_context_memory_protocol_2026-05-26.md` as documentation-only continuity protocol.

PR #302 clarified that the Notion continuity rule applies to project-linked Notion pages, not only a page created by one chat, and that manual/advisory agents may consult those pages through active chat/tool context only.

## What changed in v2.74

This previous state sync recorded:

- PR #294 — Add chapter rehydration agent proposal
- PR #296 — Add GitHub-centered current-state audit
- PR #295 — Clarify registry sync script boundary

PR #294 added `chapter_rehydration_agent` as a proposal-only chapter-preparation layer.

Boundary:

- proposal only;
- not activation;
- no registry mutation;
- no route automation;
- no runtime behavior;
- no validator or hard guardrail;
- no book-content approval;
- no book-mode activation.

PR #296 added `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md` as an operations-note external audit.

Boundary:

- documentation-only;
- not project-state;
- not roadmap;
- not implementation mandate;
- no runtime, validator, hard guardrail, CI, branch-protection or agent activation change.

PR #295 added an inline boundary note to `scripts/run-registry-sync.mjs`.

Boundary:

- comment-only clarification;
- no runtime behavior change;
- no registry mutation;
- no agent activation;
- no validator, hard guardrail, CI or branch-protection change;
- the script remains technical edge automation only.

## Existing extraction framework boundary

The Plotnikov extraction framework exists to identify:

- recurring human conflicts;
- degradation mechanisms;
- maturity conditions;
- influence distortions;
- community failure patterns.

It is not:

- a summary layer;
- an academic rewrite;
- a runtime extraction engine;
- a book replacement system.

The next grounded test step remains:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework before broadening the full 50-chapter pass.
```

`chapter_rehydration_agent` may be used as proposal-only/manual preparation logic where useful, but it must not be treated as active/routed/validator/runtime.

## Notion memory boundary

The Notion memory layer may hold long human-readable memory and recovery context.

GitHub keeps the authoritative map and reviewable facts.

Notion memory is not:

- GitHub source of truth;
- project-state;
- roadmap;
- checkpoint;
- approval;
- accepted book text;
- agent activation;
- registry mutation;
- runtime;
- validator;
- hard guardrail;
- CI gate;
- branch protection;
- approval bypass;
- background automation;
- workspace access policy.

Manual/advisory project agents may consult project-linked Notion memory pages through the active chat/tool context when their work requires semantic recovery. This is context consultation only and does not create runtime autonomy, routing, validators, hard guardrails, project-state authority, registry mutation authority, approval authority or Notion background watchers.

## Boundary

This state sync is state/resume sync only.

It does not:

- implement runtime;
- change runtime behavior;
- add validators;
- add hard guardrails;
- add policy layer;
- add CI gates;
- change branch protection;
- activate route/runtime agents;
- resume book mode automatically;
- approve candidate book content as final;
- turn Notion memory into source of truth or background automation.

## Current recovery path

1. Use GitHub `main` as source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Use `knowledge/00_manifest/resume-order.md` as the restart/source reading order note.
4. Treat human-core and extraction documents as documentation/advisory only.
5. Treat PR #291 opening material as candidate only, not final book content.
6. Treat `chapter_rehydration_agent` as proposal-only unless separately approved through the appropriate workflow.
7. Do not confuse extraction-framework with runtime automation.
8. Preserve Plotnikovsky Motor and scene-level practical tension during extraction passes.
9. Treat Notion memory as semantic recovery context only.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Book Fast Track remains paused until separate Sergey decision and is ignored for immediate next work.
- Current durable project mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode and state is synced if needed.
- PR #286 added `human_core_invariants_v0.1.md`, `plotnikov_full_pass_map.md` and `degradation_patterns_registry.md` as documentation/advisory project layers.
- PR #291 added an opening / `От автора` candidate working layer as candidate material only, not final approved book content.
- PR #292 clarified resume authority, manual discipline scope, continuity-layer boundaries and blocking/advisory/manual check layers as documentation-only.
- PR #294 added `chapter_rehydration_agent` as proposal-only manual/advisory chapter-preparation layer; it is not activation, registry mutation, route automation, runtime, validator, hard guardrail, book-content approval or book-mode activation.
- PR #296 added `github_centered_current_state_audit_2026-05-26.md` as documentation-only operations note; it is not project-state, roadmap, implementation mandate, runtime, validator, hard guardrail, CI, branch-protection or agent activation change.
- PR #295 added an inline boundary note to `scripts/run-registry-sync.mjs` clarifying that the script is a technical edge-automation helper only and not agent activation, route authority, validator, hard guardrail, CI gate, runtime behavior, policy engine or approval bypass.
- `knowledge/00_manifest/resume-order.md` is an operational manifest note, not a validator, hard guardrail, CI gate, replacement for `project-state.json` or runtime behavior.
- Human core invariants are constitutional documentation, not runtime, validator, hard guardrail, CI gate, policy engine or agent activation.
- Plotnikov full pass map is an extraction framework for the future 50-chapter pass, not a summary layer or book rewrite.
- Degradation patterns registry is an operational anthropology registry for recurring mechanisms, not enforcement or automated classification.
- Agent Shipyard / Agent Queue may run non-final extraction and creative sandbox work over Plotnikov chapters when explicitly requested by Sergey; such outputs are candidate material only, not accepted book content.
- Saving extraction outputs as accepted chapter text, changing book files, durable book/product mode switching, or treating candidate fragments as final requires explicit Sergey approval and the appropriate book workflow.
- PR #257 defined `workflow_conductor_agent` activation scope as active advisory/manual orchestration planner, not runtime/governance authority.
- PR #259 added mode switch commands `#книга`, `#агент` and `#агенты` as mandatory protocol addendum and registered it in working-protocol.
- PR #261 is the v2.66 checkpoint full after mode switch commands.
- PR #262 corrected checkpoint state records to v2.66 / PR #261.
- PR #263 added `pr_operation_response_footer.md` as mandatory protocol addendum.
- PR #270 added the reasonable community balancing map as an operations note only.
- PR #271 clarified that checks are gates only where explicitly required; manual invariants remain manual unless separately promoted.
- PR #272 added an archive structure validator candidate/spec only.
- PR #273 added a local advisory archive structure check and npm script, warning-only and not CI or hard gate.
- PR #275 clarified documentation authority layers in `documentation_topology.md`.
- PR #277 archived the external-audit / validator / authority arc.
- PR #278 corrected empty-index handling in the advisory archive structure check.
- PR #280 synced state/resume after the external-audit / archive-structure / authority arc without changing runtime, CI, branch protection, validators, registry or archive protocol.
- PR #281 added `state_sync_additive_patch_discipline.md` as mandatory manual protocol addendum.
- PR #283 added `runtime_readiness_checklist_2026-05-24.md` as a documentation-only operations readiness note.
- PR #284 synced state/resume after PR #283 and recorded runtime readiness as documentation-only planning map.
- Runtime readiness checklist is a manual planning map only and does not implement runtime, route automation, validators, hard guardrails, policy layer, CI, branch protection, registry mutation, archive protocol change or book workflow change.
- State/resume sync is additive by default; Codex receives a patch-map, not a broad state rewrite task.
- Codex local commits, done reports and PR-helper reports are not source-of-truth facts unless visible in GitHub.
- Advisory checks remain warning-only/manual unless Sergey separately approves CI/gate promotion.
- After PR, merge, state-sync, checkpoint, archive PR, correction PR, reviewer/bot handling or PR workflow status responses, ChatGPT must include footer lines for bot/reviewer comments and archive status.
- If bot/reviewer comments were not checked, ChatGPT must not call the point clean; `get_pr_info` alone is not enough.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode and first response should be an advisory mission plan through `workflow_conductor_agent`.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode and first response should be an advisory plan through `workflow_conductor_agent` or `agent_registry_librarian`.
- Mode switch commands are intent commands only and do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- `critic_margin_agent` is active as advisory/manual second-eyes discipline only and is not a runtime/route validator, CI gate, approval authority, hard guardrail or policy engine.
- `agent_registry_librarian` is active as advisory/manual registry hygiene discipline only and is not agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.
- `workflow_conductor_agent` is active as advisory/manual orchestration planner only and is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail or policy layer.
- Status trust matrix and registry status overlay remain documentation-only aids, not automation or authority.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Required branch-protection check contexts are TypeScript / JavaScript / Go checks and sync-check.
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- Local state-sync drift audit script is implementation but not enforcement.
- `+` means continue the next safe step, not approval.
- `++` means approval for the current clear approval-gate only.
- `+++` means the nearest grounded safe action and does not bypass approval-gates.
- PR #299 added Plotnikov book architecture map as documentation-only operations note; it is not project-state, roadmap, checkpoint, book-mode activation, accepted book content, agent activation, registry mutation, runtime, validator, hard guardrail, CI or branch-protection change.
- PR #299 records that Chapter 1 should carry only the seed that personal reason becomes climate; heavier community / stronger-people / durable-income thesis belongs in later team, group and leadership zones.
- PR #300 archived the chapter rehydration / audit / state-sync chat arc as archive only; it is not checkpoint, project-state, runtime, validator, hard guardrail, CI, branch protection, registry mutation, agent activation, book-mode activation or book-content approval.
- PR #301 added Notion context memory protocol as documentation-only continuity protocol: Notion may hold long human-readable memory and recovery context, while GitHub keeps authoritative map and reviewable facts.
- PR #302 clarified project-linked Notion memory scope: future chats may consult project-linked Notion pages when they have Notion tool access; manual/advisory agents may consult them through active chat/tool context only.
- Notion memory is not GitHub source of truth, project-state, roadmap, checkpoint, approval, accepted book text, agent activation, registry mutation, runtime, validator, hard guardrail, CI gate, branch protection, approval bypass, background automation or workspace access policy.
- Agent use of Notion memory is context consultation only; it does not create autonomous runtime, routed workers, validators, hard guardrails, project-state authority, registry mutation authority, approval authority or Notion background watchers.
- README and other line-sensitive files may stay as short maps and link to Notion for long human-readable instructions, but GitHub must still contain operational boundaries and all reviewable/source-of-truth facts.
- The next practical validation step remains: run the first 5-7 Plotnikov chapters through the extraction framework before broadening the full 50-chapter pass.
- Extraction outputs remain candidate material only; saving accepted chapter text, changing book files, durable book/product mode switching, or treating candidate fragments as final requires explicit Sergey approval and appropriate book workflow.

## Active archive-level open loops

- Run the first 5-7 Plotnikov chapters through the extraction framework.
- Validate whether the framework preserves scenes, pressure, practical conflict and Plotnikovsky Motor.
- Expand human-core invariants only after real extraction passes reveal recurring laws.
- Do not broaden to a full 50-chapter pass until the framework survives practical testing.
- Watch status language drift, README density, conductor scope creep and continuity-layer overreach as documentation-only watch items from the current-state audit.
- Watch Notion/GitHub authority confusion; Notion memory must remain context, not source of truth.

## Paused tasks

- Do not treat PR #291 opening material as final approved book content.
- Do not treat `chapter_rehydration_agent` as active/routed/validator/hard guardrail/runtime.
- Do not treat `github_centered_current_state_audit_2026-05-26.md` as project-state, roadmap, implementation mandate or approval for runtime/validator/hard-guardrail expansion.
- Do not treat `scripts/run-registry-sync.mjs` as agent activation authority, route authority, validator, hard guardrail, CI merge gate, runtime behavior, policy engine or approval bypass.
- Do not treat resume-order.md or resume-order sections as automation, validator, hard guardrail, CI gate or replacement for project-state.json.
- Do not treat human_core_invariants_v0.1.md as runtime, validator, policy engine or automatic scoring system.
- Do not treat degradation_patterns_registry.md as enforcement or automatic classification.
- Do not treat plotnikov_full_pass_map.md as implemented extraction automation.
- Do not continue book mode automatically without explicit Sergey mode decision.
- Do not treat PR #299 Plotnikov architecture map as final approved book content or permission to rewrite chapter files.
- Do not treat PR #301 or PR #302 as permission to move source-of-truth facts out of GitHub into Notion.
- Do not treat Notion memory as project-state, checkpoint, roadmap, approval, runtime or registry authority.
- Do not treat manual/advisory agents consulting Notion as agent activation, route automation, validator, hard guardrail or background watcher.
- Do not compact project-state markdown mirror by deleting durable active decisions, paused tasks, framework boundaries or protocol guardrails during state sync.

## Resume pointers

- `README.md`
- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `knowledge/00_manifest/resume-order.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/decision-log.md`
- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/protocol_addenda/*.md`
- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`
- `knowledge/05_agent_memory/agent_proposals/chapter_rehydration_agent.md`
- `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md`
- `knowledge/07_operations/plotnikov_book_architecture_map_2026-05-26.md`
- `knowledge/07_operations/notion_context_memory_protocol_2026-05-26.md`
- `scripts/run-registry-sync.mjs`

## Next action

Run the first 5-7 Plotnikov chapters through the extraction framework and validate that the framework strengthens practical clarity without killing narrative energy. Use `chapter_rehydration_agent` only as proposal/manual preparation logic unless separately activated.

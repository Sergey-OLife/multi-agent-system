# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable resume diagnostic source. Use these project-state files before relying on prior conversation memory.

## Source of truth basis

GitHub `main` remains the accepted source of truth for merged project state.

Worklog, restart prompts, archive entries, audit notes, operations notes and Notion memory are continuity or source-material layers. They help resume work, but they do not become active project state unless reflected in project-state, code, or an explicitly accepted document.

## Current version

- currentVersion: v2.75
- lastCompletedVersion: v2.75
- lastMergedPr: PR #302 — Clarify project Notion memory access
- lastMergeCommit: `6e3e7f1b42d33868d2c885383adbba21373efe86`
- currentMilestone: v2.75 Compact state/restart sync after Plotnikov architecture and Notion memory protocol arc
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.75

This compact state/restart sync records the merged PR #299-302 arc:

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

## Current recovery path

1. Use GitHub `main` as source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Use `knowledge/00_manifest/resume-order.md` as the restart/source reading order note.
4. Read `knowledge/07_operations/plotnikov_book_architecture_map_2026-05-26.md` when working with the Plotnikov book-architecture arc.
5. Read `knowledge/07_operations/notion_context_memory_protocol_2026-05-26.md` when handling Notion continuity memory or README-density questions.
6. Treat `chapter_rehydration_agent` as proposal-only unless separately approved through the appropriate workflow.
7. Treat all extraction outputs as candidate material until Sergey explicitly approves book workflow changes.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current durable mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode.
- Book work remains paused until `#книга` or a separate explicit mode decision.
- PR #299 Plotnikov architecture map is documentation-only and not final approved book content.
- Chapter 1 should carry only the seed that personal reason becomes climate; the heavier community architecture belongs later.
- PR #301 and PR #302 make Notion memory a project continuity layer, not project-state or source-of-truth replacement.
- Project-linked Notion pages may be used for semantic recovery by future chats and manual/advisory agent layers when active tool access exists.
- README and other line-sensitive files may link to Notion for long human-readable instructions, but GitHub must still contain operational boundaries and source-of-truth facts.
- The next practical validation step remains a limited 5-7 chapter Plotnikov extraction pass.

## Paused tasks

- Do not continue accepted book-work automatically while current durable mode is Agent Shipyard / Agent Queue unless Sergey uses `#книга` or otherwise explicitly switches mode.
- Do not treat PR #299 Plotnikov architecture map as permission to rewrite chapter files.
- Do not treat PR #301 or PR #302 as permission to move source-of-truth facts out of GitHub into Notion.
- Do not treat manual/advisory agents consulting Notion as agent activation, route automation, validator, hard guardrail or background watcher.
- Do not call a PR point clean unless relevant bot/reviewer comments were checked or truly not applicable.

## Resume pointers

- `README.md`
- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `knowledge/00_manifest/resume-order.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/protocol_addenda/*.md`
- `knowledge/07_operations/plotnikov_book_architecture_map_2026-05-26.md`
- `knowledge/07_operations/notion_context_memory_protocol_2026-05-26.md`
- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`
- `knowledge/05_agent_memory/agent_proposals/chapter_rehydration_agent.md`

## Next action

Run the first 5-7 Plotnikov chapters through the extraction framework and validate that the framework preserves Plotnikovsky Motor, scenes, pressure, practical conflict and human concreteness. Use `chapter_rehydration_agent` only as proposal/manual preparation logic unless separately activated.

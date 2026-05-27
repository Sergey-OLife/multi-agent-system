# Current State — Assistant × Codex

Date: 2026-05-26

## Source of truth basis

GitHub `main` is the accepted source of truth for merged project state.

Primary resume diagnostics start from `knowledge/00_manifest/project-state.json` and its human-readable mirror `knowledge/00_manifest/project-state.md`.

This file is a continuity/resume layer. It summarizes the working point for Assistant × Codex, but it does not override project-state, accepted code, or explicitly accepted project documents.

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

## Latest merged PRs now being synced

- PR #299 — Add Plotnikov book architecture map
- PR #300 — Archive chapter rehydration audit state sync chat
- PR #301 — Add Notion context memory protocol
- PR #302 — Clarify project Notion memory access

Latest merged PR before this sync:

- PR #302 — Clarify project Notion memory access
- Status: merged
- Merge commit: `6e3e7f1b42d33868d2c885383adbba21373efe86`

## Current version target

- currentVersion: v2.75
- currentMilestone: Compact state/restart sync after Plotnikov architecture and Notion memory protocol arc

## Recently merged context

PR #299 added `knowledge/07_operations/plotnikov_book_architecture_map_2026-05-26.md` as a documentation-only operations note.

It records the whole-book architecture rule for the Plotnikov arc:

- Chapter 1 carries only the seed that personal reason becomes climate;
- the larger community / stronger-people / durable-income thesis belongs later in team, group and leadership zones;
- directional ideas should be placed in architecture before they are embedded into chapter prose.

PR #300 archived the chapter rehydration / audit / state-sync chat arc as archive only.

PR #301 added `knowledge/07_operations/notion_context_memory_protocol_2026-05-26.md` as documentation-only continuity protocol.

PR #302 clarified that project-linked Notion pages may be consulted by future chats and manual/advisory agent layers when active Notion tool access exists.

## Notion memory boundary

Notion memory may store long human-readable memory and recovery context.

GitHub keeps the authoritative map and reviewable facts.

Notion memory is not project-state, roadmap, checkpoint, approval, accepted book text, runtime, validator, hard guardrail, registry authority, CI gate, branch protection, approval bypass, background automation or workspace access policy.

Manual/advisory agents may consult project-linked Notion pages only through an active chat/tool context. This does not create autonomous runtime, routing, validation, hard guardrails, project-state authority, registry mutation authority, approval authority or Notion background monitoring.

## Current extraction direction

The next practical validation step remains:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework.
```

The extraction framework must preserve:

- Plotnikovsky Motor;
- practical tension;
- scenes and conflict;
- human concreteness.

It must not:

- academicize the book;
- replace scenes with abstraction;
- kill narrative energy.

`chapter_rehydration_agent` may be used only as proposal/manual preparation logic unless separately activated through the appropriate workflow.

## Current audit/watch items

The current watch items remain documentation-only:

- README density;
- status language drift;
- conductor scope creep;
- continuity-layer overreach;
- Notion/GitHub authority confusion.

These are not runtime work, validator work, hard-guardrail work, roadmap approval or implementation mandate.

## Current protocol result

After PR / merge / state-sync / checkpoint operations, responses must include:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

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

## State-sync boundaries

This v2.75 compact sync is documentation/state alignment only.

It does not:

- implement runtime;
- add validators;
- add hard gates;
- change CI;
- change branch protection;
- mutate registry authority;
- resume book mode;
- approve candidate book content as final;
- activate `chapter_rehydration_agent`;
- turn Notion memory into source of truth or background automation.

## Next safe step

Run the first 5-7 Plotnikov chapters through the extraction framework and test whether the framework survives real material without losing practical force. Use `chapter_rehydration_agent` only as proposal/manual preparation logic unless separately activated.

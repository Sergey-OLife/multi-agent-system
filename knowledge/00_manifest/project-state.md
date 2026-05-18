# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.9
- lastCompletedVersion: v2.9
- lastMergedPr: PR #90 — Add source card builder agent proposal
- lastMergeCommit: eaefd8dcc22ee7dd1a5967b9ca362d79aadeaff4
- currentMilestone: v2.9 Source card builder proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #87 — Checkpoint full: Shipyard Modernization stability gate passed
- PR #88 — Add checkpoint compressor agent proposal
- PR #89 — Sync state after checkpoint compressor proposal
- PR #90 — Add source card builder agent proposal
- PR #91 — Sync state after source card builder proposal

## Current agent queue status

`source_card_builder` is now proposal only, not activated.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/source_card_builder.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no

Its role is to create source application passports after source intake. A source card is not proof that the full source was read.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- `checkpoint_compressor_agent` is a proposal only, not activated.
- `source_card_builder` is a proposal only, not activated.
- `source_card_builder` must not commit raw books, raw source text, PDFs, EPUBs, DJVUs, MOBIs, private Drive IDs or URLs.
- Before any `#checkpoint full` GitHub operation, ChatGPT must first send Sergey a compact restart prompt in chat.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Proposal agents

- `workflow_conductor_agent`: proposal only, not activated.
- `agent_registry_librarian`: proposal only, not activated.
- `approval_gate_keeper`: proposal only, not activated.
- `project_state_synchronizer`: proposal only, not activated.
- `checkpoint_compressor_agent`: proposal only, not activated.
- `source_card_builder`: proposal only, not activated.

## Active optional workflow layers

- `socratic_lantern_agent` — active optional workflow layer.
- `ethical_persuasion_guard` — active optional workflow layer.
- `cbt_thought_check_agent` — active optional workflow layer; not therapy, not diagnostics, not sales pressure tool.
- `source_intake_auditor` — active optional workflow layer; not workflow conductor.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.

## Next action

Prepare `copyright_boundary_guard` agent proposal without activation.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

## Important paths

- assistant_codex_worklog/current-state.md
- assistant_codex_worklog/roadmap.md
- assistant_codex_worklog/decision-log.md
- assistant_codex_worklog/working-protocol.md
- assistant_codex_worklog/restart-prompt.md
- assistant_codex_worklog/protocol_addenda/*.md
- knowledge/00_manifest/project-state.json
- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md
- knowledge/05_agent_memory/agent_proposals/checkpoint_compressor_agent.md
- knowledge/05_agent_memory/agent_proposals/source_card_builder.md
- knowledge/05_agent_memory/shipyard_modernization/bug_response_compatibility_protocol.md

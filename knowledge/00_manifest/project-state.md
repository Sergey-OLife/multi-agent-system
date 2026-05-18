# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.21
- lastCompletedVersion: v2.21
- lastMergedPr: PR #116 — Add anti-cliche editor proposal
- lastMergeCommit: 26d77624c640d1594b2e41aeaae0643959c250b4
- currentMilestone: v2.21 Anti-cliche editor proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #115 — Sync state after banality alarm proposal
- PR #117 — Add registry sync workflow
- PR #118 — Add conversation archive capture protocol
- PR #119 — Sync state after conversation archive protocol
- PR #116 — Add anti-cliche editor proposal
- PR #120 — Sync state after anti-cliche editor proposal

## Anti-cliche editor

`anti_cliche_editor` is now proposal only, not activated and not a hard guardrail.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no
- Hard guardrail: no

Its role is to classify and help rewrite cliche, commonplace, pseudo-depth, plastic advertising voice, moralizing, manual voice, bureaucracy, vague claims and overpolished AI tone.

## Registry mutation protocol

`knowledge/07_operations/registry_mutation_protocol.md` is now active.

Rule:

- registry changes must use deterministic tooling when available;
- manual full replacement of large registry is not the normal path;
- dry-run first, then apply;
- if local command is unavailable, use approved runner/workflow path.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `scripts/archive-audit.mjs`

Audit command:

```bash
npm run archive:audit
```

## Repository hygiene

Repository hygiene audit is available:

```bash
npm run hygiene:audit
```

Ledger:

- GitHub issue #99 — Repository hygiene ledger.

Branch cleanup remains `cleanup_needed`, not `completed`.

## Current agent queue status

`banality_alarm_agent` is proposal only, not activated and not a hard guardrail.

`author_style_memory_agent` remains proposal only, not activated and not a hard guardrail.

`sergey_interaction_profiler` remains proposal only, not activated and not a hard guardrail.

`anti_cliche_editor` remains proposal only, not activated and not a hard guardrail.

`review_depth_protocol` is active operational protocol.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Shipyard Modernization stability gate is passed.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Conversation archive is a separate human interaction archive, not project-state, approval-log or technical checkpoint.
- Archive audit is available as `npm run archive:audit`.
- Registry sync workflow is available as manual `workflow_dispatch` after PR #117.
- Registry mutation protocol is active: registry changes must use deterministic tooling rather than manual full replacement when tooling is available.
- `anti_cliche_editor` is a proposal only, not activated and not a hard guardrail.
- `checkpoint_compressor_agent` is a proposal only, not activated.
- `source_card_builder` is a proposal only, not activated.
- `copyright_boundary_guard` is a proposal only, not activated and not a hard guardrail.
- `svod_guard` is a proposal only, not activated and not a hard guardrail.
- `contextologist_agent` is a proposal only, not activated and not a hard guardrail.
- `sergey_interaction_profiler` is a proposal only, not activated and not a hard guardrail.
- `author_style_memory_agent` is a proposal only, not activated and not a hard guardrail.
- `banality_alarm_agent` is a proposal only, not activated and not a hard guardrail.
- `review_depth_protocol` defines L1/L2/L3 agent review depth, semantic discipline for `+`, `++`, `+++`, and anti-overengineering doctrine.
- Repository hygiene audit is available as `npm run hygiene:audit`.
- Repository hygiene ledger is GitHub issue #99.
- Branch hygiene cleanup remains cleanup_needed, not completed.
- Next agent queue candidate after `anti_cliche_editor` is `conversation_archive_librarian`, unless Sergey chooses a different agent.
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
- `copyright_boundary_guard`: proposal only, not activated.
- `svod_guard`: proposal only, not activated.
- `contextologist_agent`: proposal only, not activated.
- `sergey_interaction_profiler`: proposal only, not activated.
- `author_style_memory_agent`: proposal only, not activated.
- `banality_alarm_agent`: proposal only, not activated.
- `anti_cliche_editor`: proposal only, not activated.

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
- Do not pretend branch cleanup was completed while branches remain unresolved in issue #99.
- Do not let conversation archive become a raw transcript dump.

## Next action

Prepare `conversation_archive_librarian` proposal without activation, unless Sergey chooses a different agent or first asks to improve registry workflow automation.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

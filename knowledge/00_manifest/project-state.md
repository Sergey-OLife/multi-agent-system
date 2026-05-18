# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.20
- lastCompletedVersion: v2.20
- lastMergedPr: PR #118 — Add conversation archive capture protocol
- lastMergeCommit: 4f8096378daa55755690a348d455cc780dee17a9
- currentMilestone: v2.20 Conversation archive capture protocol synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #112 — Add author style memory agent proposal
- PR #114 — Add banality alarm agent proposal
- PR #115 — Sync state after banality alarm proposal
- PR #117 — Add registry sync workflow
- PR #118 — Add conversation archive capture protocol
- PR #119 — Sync state after conversation archive protocol

## Conversation archive

Conversation archive is now an active protocol layer, separate from technical state/worklog.

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

Rules:

- archive keeps conversation seeds, not full raw conversations;
- archive does not replace project-state, roadmap, decision-log, issues, source cards or agent proposals;
- do not duplicate material already reflected in architecture;
- if a thought is already implemented, leave only `implemented elsewhere` pointer;
- entries should have at least a 14-day review window;
- long-lived observations about Sergey interaction style are allowed, but not as psychological diagnoses;
- future `#checkpoint full` must include a short checkpoint capture check for semantic open loops not reflected in architecture.

## Registry sync workflow

Manual workflow is available after PR #117:

- `.github/workflows/registry-sync.yml`

It should be used to unblock PR #116 by syncing `anti_cliche_editor` into registry through deterministic `npm run registry:sync`, not manual full replacement.

## Repository hygiene

Repository hygiene audit is available:

```bash
npm run hygiene:audit
```

Ledger:

- GitHub issue #99 — Repository hygiene ledger.

Branch cleanup remains `cleanup_needed`, not `completed`.

Rule:

- tracked junk may be removed through normal PR deletion;
- stale branch cleanup must happen through GitHub UI or a future explicit safe branch cleanup tool;
- do not use branch-ref workarounds;
- do not claim cleanup completed until branches are actually removed and issue #99 is updated.

## Current agent queue status

`banality_alarm_agent` is proposal only, not activated and not a hard guardrail.

`author_style_memory_agent` remains proposal only, not activated and not a hard guardrail.

`sergey_interaction_profiler` remains proposal only, not activated and not a hard guardrail.

`review_depth_protocol` is active operational protocol.

`anti_cliche_editor` PR #116 remains blocked until registry sync is performed by registry sync workflow or approved runner path.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Shipyard Modernization stability gate is passed.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Conversation archive is a separate human interaction archive, not project-state, approval-log or technical checkpoint.
- Conversation archive stores only conversation seeds not already reflected in project architecture.
- Conversation archive entries are append-oriented and must not contain full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs or URLs.
- Conversation archive entries have at least a 14-day review window unless marked `long_lived_observation` or `implemented_elsewhere`.
- Future `#checkpoint full` should include a short checkpoint capture check for semantic open loops not reflected in architecture.
- Archive audit is available as `npm run archive:audit`.
- Registry sync workflow is available as manual `workflow_dispatch` after PR #117.
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
- Next agent queue candidate after `banality_alarm_agent` is `anti_cliche_editor`, unless Sergey chooses a different agent.
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

Use registry sync workflow to unblock PR #116 for `anti_cliche_editor` registry sync, or prepare `anti_cliche_editor` registry sync by approved runner path.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.18
- lastCompletedVersion: v2.18
- lastMergedPr: PR #112 — Add author style memory agent proposal
- lastMergeCommit: c5c3cf43951b3d32d46c5f37d994f66d941dd138
- currentMilestone: v2.18 Author style memory proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #102 — Sync state after repository hygiene audit
- PR #103 — Checkpoint full after repository hygiene state sync
- PR #104 — Add review depth protocol and profiler proposal
- PR #110 — Sync state after profiler proposal
- PR #111 — Checkpoint full after profiler state sync
- PR #112 — Add author style memory agent proposal

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

`author_style_memory_agent` is proposal only, not activated and not a hard guardrail.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/author_style_memory_agent.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no
- Hard guardrail: no

Its role is to store confirmed editorial style decisions, formula memory, rhythm memory, scene/object memory, failure-pattern memory and counterexamples without turning style into canon.

`sergey_interaction_profiler` remains proposal only, not activated and not a hard guardrail.

`review_depth_protocol` is active operational protocol.

- Protocol path: `knowledge/07_operations/review_depth_protocol.md`
- It defines L1/L2/L3 review depth, semantic discipline for `+`, `++`, `+++`, and anti-overengineering doctrine.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Shipyard Modernization stability gate is passed.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Repository hygiene audit is available as `npm run hygiene:audit`.
- Repository hygiene ledger is GitHub issue #99.
- Branch hygiene cleanup remains cleanup_needed, not completed.
- `checkpoint_compressor_agent` is a proposal only, not activated.
- `source_card_builder` is a proposal only, not activated.
- `copyright_boundary_guard` is a proposal only, not activated and not a hard guardrail.
- `svod_guard` is a proposal only, not activated and not a hard guardrail.
- `contextologist_agent` is a proposal only, not activated and not a hard guardrail.
- `sergey_interaction_profiler` is a proposal only, not activated and not a hard guardrail.
- `author_style_memory_agent` is a proposal only, not activated and not a hard guardrail.
- `review_depth_protocol` defines L1/L2/L3 agent review depth, semantic discipline for `+`, `++`, `+++`, and anti-overengineering doctrine.
- Next agent queue candidate is `banality_alarm_agent` unless Sergey chooses a different agent.
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

## Next action

Prepare `banality_alarm_agent` proposal without activation, unless Sergey chooses a different agent.

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
- knowledge/05_agent_memory/agent_proposals/copyright_boundary_guard.md
- knowledge/05_agent_memory/agent_proposals/svod_guard.md
- knowledge/05_agent_memory/agent_proposals/contextologist_agent.md
- knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md
- knowledge/05_agent_memory/agent_proposals/author_style_memory_agent.md
- knowledge/07_operations/review_depth_protocol.md
- knowledge/07_operations/repository_hygiene_protocol.md
- scripts/hygiene-audit.mjs

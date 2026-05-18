# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.14
- lastCompletedVersion: v2.14
- lastMergedPr: PR #101 — Add repository hygiene audit and ledger protocol
- lastMergeCommit: ade6c257aea62866e7985873bb02f6a8e09881b1
- currentMilestone: v2.14 Repository hygiene audit and ledger protocol synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #95 — Sync state after svod guard proposal
- PR #96 — Add contextologist agent proposal
- PR #97 — Sync state after contextologist proposal
- PR #98 — Checkpoint full after contextologist state sync
- PR #100 — Add repository hygiene audit and ledger protocol [closed superseded]
- PR #101 — Add repository hygiene audit and ledger protocol

## Repository hygiene

Repository hygiene audit is now available:

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

`contextologist_agent` is proposal only, not activated and not a hard guardrail.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/contextologist_agent.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no
- Hard guardrail: no

Its role is to restore the project map before a move. It does not command the route, change state or replace `workflow_conductor_agent`.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Repository hygiene audit is now available as `npm run hygiene:audit`.
- Repository hygiene ledger is GitHub issue #99.
- Branch hygiene cleanup remains cleanup_needed, not completed.
- `checkpoint_compressor_agent` is a proposal only, not activated.
- `source_card_builder` is a proposal only, not activated.
- `copyright_boundary_guard` is a proposal only, not activated and not a hard guardrail.
- `svod_guard` is a proposal only, not activated and not a hard guardrail.
- `contextologist_agent` is a proposal only, not activated and not a hard guardrail.
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

Prepare `sergey_interaction_profiler` proposal without activation.

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
- knowledge/07_operations/repository_hygiene_protocol.md
- scripts/hygiene-audit.mjs

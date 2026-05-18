# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.8
- lastCompletedVersion: v2.8
- lastMergedPr: PR #88 — Add checkpoint compressor agent proposal
- lastMergeCommit: 7700ee89a5865136e824c35856fbe5ebdd299a97
- currentMilestone: v2.8 Checkpoint compressor proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #85 — Add focused Go-core schema pressure tests
- PR #86 — Add bug response and compatibility protocol
- PR #87 — Checkpoint full: Shipyard Modernization stability gate passed
- PR #88 — Add checkpoint compressor agent proposal
- PR #89 — Sync state after checkpoint compressor proposal

## Current agent queue status

`checkpoint_compressor_agent` is now proposal only, not activated.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/checkpoint_compressor_agent.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no

Its role is to compress restart prompts as a start key, not an archive. It does not change project-state, roadmap, registry, routes, guardrails or PRs.

## Shipyard Modernization status

Stability gate passed.

- TypeScript остаётся orchestration shell.
- Go-core стал deterministic validation spine behind JSON stdin/stdout.
- Schema pressure invariants documented and pressure-tested without schema framework.
- Bug response compatibility protocol зафиксирован: classify, failing test/fixture, narrow fix, framework only after repeated proven pain.

## Layer formula

```text
Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.
```

Go-core — позвоночник системы, не полный replacement TypeScript.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, context maps, agent proposals and activations.
- `checkpoint_compressor_agent` is a proposal only, not activated.
- `checkpoint_compressor_agent` compresses restart prompts as a start key, not an archive.
- Before any `#checkpoint full` GitHub operation, ChatGPT must first send Sergey a compact restart prompt in chat.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Proposal agents

- `workflow_conductor_agent`: proposal only, not activated.
- `agent_registry_librarian`: proposal only, not activated.
- `approval_gate_keeper`: proposal only, not activated.
- `project_state_synchronizer`: proposal only, not activated.
- `checkpoint_compressor_agent`: proposal only, not activated.

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

Prepare `source_card_builder` agent proposal without activation.

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
- knowledge/05_agent_memory/shipyard_modernization/core_api_contract.md
- knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md
- knowledge/05_agent_memory/shipyard_modernization/sync_check_wrapper_contract.md
- knowledge/05_agent_memory/shipyard_modernization/bug_response_compatibility_protocol.md

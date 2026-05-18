# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.7
- lastCompletedVersion: v2.7
- lastMergedPr: PR #86 — Add bug response and compatibility protocol
- lastMergeCommit: 80f2df5f8e8bf1f8dbb272fd88056a57ecf615a3
- currentMilestone: v2.7 Shipyard Modernization stability gate passed
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #82 — Document schema pressure invariants for Go-core envelope
- PR #84 — Checkpoint full after restart prompt protocol correction
- PR #85 — Add focused Go-core schema pressure tests
- PR #86 — Add bug response and compatibility protocol
- PR #87 — Checkpoint full: Shipyard Modernization stability gate passed

## Shipyard Modernization status

Состояние после PR #86:

- Shipyard Modernization stability gate passed.
- TypeScript остаётся orchestration shell.
- Go-core стал deterministic validation spine behind JSON stdin/stdout.
- `sync-check` и `registry-check` существуют как реальные Go-core commands.
- TypeScript wrapper остаётся transport shell: file collection, binary invocation, stdout parsing, unavailable fallback.
- Minimal Sync Check CI workflow запускает Go-core validation loop.
- `registry-check` проверяет structural registry signal, не активирует агентов.
- Go validation primitives добавлены маленьким слоем, без validator framework.
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
- Current active mode returns to Agent Shipyard / Agent Queue.
- Strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, context maps, agent proposals and activations.
- TypeScript remains the orchestration shell; Go-core owns deterministic validation semantics behind JSON stdin/stdout.
- Go-core commands currently include `sync-check` and `registry-check`.
- Wrapper owns transport, not validation meaning.
- Go-core validation loop is part of CI through the minimal Sync Check workflow.
- Go-core semantic helpers may format diagnostics and status escalation mechanics but must not become a policy engine.
- Go-core envelope invariants are documented and pressure-tested without schema framework.
- Do not introduce JSON Schema/protobuf/OpenAPI/version-negotiation framework until repeated proven pain appears.
- Bug response protocol: classify bug, add minimal failing test or fixture, make narrow fix, consider framework only after repeated proven pain.
- Before any `#checkpoint full` GitHub operation, ChatGPT must first send Sergey a compact restart prompt in chat.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Proposal agents

- `workflow_conductor_agent`: proposal only, not activated.
- `agent_registry_librarian`: proposal only, not activated.
- `approval_gate_keeper`: proposal only, not activated.
- `project_state_synchronizer`: proposal only, not activated.

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

Return to the agent queue and prepare `checkpoint_compressor_agent` proposal without activation.

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
- knowledge/05_agent_memory/shipyard_modernization/core_api_contract.md
- knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md
- knowledge/05_agent_memory/shipyard_modernization/sync_check_wrapper_contract.md
- knowledge/05_agent_memory/shipyard_modernization/bug_response_compatibility_protocol.md
- .github/workflows/sync-check.yml
- package.json
- scripts/run-sync-check.mjs
- scripts/check-boundaries.mjs
- go-core/go.mod
- go-core/cmd/multi-agent-core/main.go
- go-core/cmd/multi-agent-core/main_test.go
- go-core/cmd/multi-agent-core/schema_pressure_test.go
- go-core/cmd/multi-agent-core/validation_primitives.go
- src/domain/index.ts
- src/engine/index.ts
- src/diagnostics/index.ts
- src/orchestration/index.ts
- src/router.ts
- src/agents.ts

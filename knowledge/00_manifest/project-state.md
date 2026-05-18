# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.5
- lastCompletedVersion: v2.5
- lastMergedPr: PR #82 — Document schema pressure invariants for Go-core envelope
- lastMergeCommit: a49de76ba93dd10cbad498e9962b049725c83d17
- currentMilestone: v2.5 Full checkpoint after Go-core transport, registry-check, semantic primitives and schema pressure contract
- currentMode: Agent Shipyard / Shipyard Modernization
- bookPaused: true

## Recent PRs

- PR #78 — Extract minimal sync-check transport helpers
- PR #79 — Add minimal registry-check Go command
- PR #81 — Add minimal Go validation primitives and pressure tests
- PR #82 — Document schema pressure invariants for Go-core envelope
- PR #83 — Checkpoint full after schema pressure contract

## Shipyard Modernization status

Состояние после PR #82:

- TypeScript остаётся orchestration shell.
- Go-core стал deterministic validation layer behind JSON stdin/stdout.
- `sync-check` и `registry-check` существуют как реальные Go-core commands.
- TypeScript wrapper теперь transport shell: file collection, binary invocation, stdout parsing, unavailable fallback.
- Minimal Sync Check CI workflow запускает Go-core validation loop.
- Transport extraction удержана без orchestration framework.
- `registry-check` проверяет structural registry signal, не активирует агентов.
- Go validation primitives добавлены маленьким слоем, без validator framework.
- Pressure tests проверяют bad states: registry identity, blocked project state, status priority.
- Schema pressure invariants documented before runtime enforcement.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until the agent shipyard is sufficiently built.
- Current active mode is Agent Shipyard with a temporary Shipyard Modernization subfocus.
- First build the ship, then sail: do not continue the book automatically while the current focus is agent buildout or shipyard modernization.
- Strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, context maps, agent proposals and activations.
- TypeScript remains the orchestration shell; Go-core owns deterministic validation semantics behind JSON stdin/stdout.
- Go-core commands currently include `sync-check` and `registry-check`.
- `sync-check` validates project state and handoff files.
- `registry-check` validates structural registry signals only; it does not activate agents or orchestrate workflows.
- Wrapper owns transport, file collection, binary invocation, stdout parsing and unavailable fallback, not validation meaning.
- Go-core validation loop is part of CI through the minimal Sync Check workflow.
- Go-core semantic helpers may format diagnostics and status escalation mechanics but must not become a policy engine.
- `blocked` outranks `needs_revision`; `needs_revision` outranks `ready`; `error` is contract/runtime failure; `unavailable` is wrapper/transport-level.
- Go-core envelope invariants are documented as internal API assumptions before runtime enforcement.
- Do not introduce JSON Schema/protobuf/OpenAPI/version-negotiation framework until pressure tests show real need.
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

- Do not continue the book automatically while current mode is Agent Shipyard or Shipyard Modernization.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.

## Next action

Add focused Go-core schema pressure tests for malformed envelopes and contract edge cases without introducing a schema framework.

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
- .github/workflows/sync-check.yml
- package.json
- scripts/run-sync-check.mjs
- scripts/check-boundaries.mjs
- go-core/go.mod
- go-core/cmd/multi-agent-core/main.go
- go-core/cmd/multi-agent-core/main_test.go
- go-core/cmd/multi-agent-core/validation_primitives.go
- src/domain/index.ts
- src/engine/index.ts
- src/diagnostics/index.ts
- src/orchestration/index.ts
- src/router.ts
- src/agents.ts

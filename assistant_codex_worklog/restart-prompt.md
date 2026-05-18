# Restart Prompt — Assistant × Codex

Скопируй этот текст в новый чат ChatGPT, если нужно продолжить работу без перегруза старого чата.

```text
Продолжаем проект Sergey-OLife/multi-agent-system в проекте «Пишем книгу».

GitHub — источник правды. Сначала открой:

1. assistant_codex_worklog/restart-prompt.md
2. assistant_codex_worklog/current-state.md
3. assistant_codex_worklog/roadmap.md
4. assistant_codex_worklog/working-protocol.md
5. assistant_codex_worklog/protocol_addenda/*.md
6. knowledge/00_manifest/project-state.md
7. knowledge/00_manifest/project-state.json
8. knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md
9. knowledge/05_agent_memory/agent_shipyard/hybrid_coordination_model.md
10. knowledge/05_agent_memory/agent_shipyard/materials_research_topology.md
11. knowledge/05_agent_memory/shipyard_modernization/core_api_contract.md
12. knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md
13. knowledge/05_agent_memory/shipyard_modernization/sync_check_wrapper_contract.md

Актуальное состояние:

- currentVersion: v2.5.
- lastCompletedVersion: v2.5.
- lastMergedPr: PR #82 — Document schema pressure invariants for Go-core envelope.
- lastMergeCommit: a49de76ba93dd10cbad498e9962b049725c83d17.
- Текущий режим: Agent Shipyard / Shipyard Modernization.
- Книга на паузе до отдельного решения Сергея.

Что сделано в Shipyard Modernization:

- PR #69 — import boundaries + public module entrypoints.
- PR #71 — tsconfig split: base/build/test.
- PR #72 — первый Go-core sync-check CLI.
- PR #73 — sync-check требует handoff-файлы перед `ready`.
- PR #75 — TypeScript sync-check wrapper: TS готовит envelope и вызывает optional Go binary.
- PR #76 — sync-check wrapper contract document.
- PR #77 — minimal sync-check CI workflow.
- PR #78 — minimal transport extraction и command registry.
- PR #79 — второй Go-core command: registry-check.
- PR #81 — minimal Go validation primitives + pressure tests.
- PR #82 — schema pressure invariants documented.

Текущая архитектурная формула:

- TypeScript остаётся orchestration shell.
- Go-core — deterministic validation layer behind JSON stdin/stdout.
- Wrapper owns transport, file collection, binary invocation, stdout parsing and unavailable fallback.
- Go-core owns validation semantics.
- CI проверяет minimal sync-check loop.
- registry-check structural, not orchestration.
- semantic helpers tiny; не policy engine.
- schema invariants documented before runtime enforcement.

Правила:

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Строгий PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.

Proposal-only агенты:

- workflow_conductor_agent.
- agent_registry_librarian.
- approval_gate_keeper.
- project_state_synchronizer.

Active optional workflow layers:

- socratic_lantern_agent.
- ethical_persuasion_guard.
- cbt_thought_check_agent.
- source_intake_auditor.

Следующий логичный шаг после merge checkpoint PR:

Add focused Go-core schema pressure tests for malformed envelopes and contract edge cases without introducing JSON Schema/protobuf/OpenAPI framework.

Проверить:

- missing/invalid schemaVersion;
- command mismatch;
- unsupported command;
- malformed project-state payload;
- status priority;
- command-local diagnostics;
- compatibility with extra ignored fields where allowed.
```

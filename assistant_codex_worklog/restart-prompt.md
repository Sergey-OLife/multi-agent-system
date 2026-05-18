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
14. knowledge/05_agent_memory/shipyard_modernization/bug_response_compatibility_protocol.md

Актуальное состояние:

- currentVersion: v2.7.
- lastCompletedVersion: v2.7.
- lastMergedPr: PR #86 — Add bug response and compatibility protocol.
- lastMergeCommit: 80f2df5f8e8bf1f8dbb272fd88056a57ecf615a3.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Shipyard Modernization stability gate passed.

Что завершено:

- Go-core sync-check CLI.
- TypeScript sync-check wrapper.
- sync-check wrapper contract.
- minimal sync-check CI workflow.
- registry-check as second Go-core command.
- Go validation primitives and pressure tests.
- schema pressure invariants.
- focused schema pressure tests.
- bug response / compatibility protocol.
- checkpoint restart-prompt-first порядок восстановлен.

Архитектурная формула:

Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.

Текущий вывод:

Shipyard Modernization достаточно устойчив. По умолчанию не добавлять новые modernization layers без конкретного bug/compatibility risk.

Следующий логичный шаг:

Вернуться к agent queue.
Первый кандидат: checkpoint_compressor_agent как proposal без activation.

Правила:

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.
```

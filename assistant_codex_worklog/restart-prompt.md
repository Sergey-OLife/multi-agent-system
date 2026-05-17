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

Актуальное состояние:

- currentVersion: v2.4.
- lastCompletedVersion: v2.4.
- lastMergedPr: PR #73 — Sync state after Go core sync-check.
- lastMergeCommit: efa728d33e1fdb7d1a42615670dc3446dc0745c2.
- Текущий режим: Agent Shipyard / Shipyard Modernization.
- Книга на паузе до отдельного решения Сергея.
- Формула этапа: сначала модернизируем стапель, потом продолжаем строить агентов.

Что сделано в Shipyard Modernization:

- PR #63 — зафиксирован подфокус Shipyard Modernization.
- PR #64 — включены incremental TypeScript builds.
- PR #65 — введены первые слои TypeScript: `domain / engine`.
- PR #66 — зафиксирован Go-core API contract: CLI + JSON stdin/stdout.
- PR #67 — из `agents.ts` вынесены `context-pack`, `svod-check`, `sync-map`, `anti-cliche diagnostics`.
- PR #68 — синхронизировано состояние после PR #64–67.
- PR #69 — добавлены public module entrypoints и import boundary enforcement.
- PR #70 — синхронизировано состояние после PR #69.
- PR #71 — TypeScript configs разделены на `base/build/test`.
- PR #72 — добавлен первый Go-core `sync-check` CLI.
- PR #73 — синхронизировано состояние после Go-core; `sync-check` теперь требует handoff-файлы перед статусом `ready`.

Shipyard Modernization rules:

- Сначала граница ответственности, потом файловая структура, потом конфиг, потом Go.
- Go-core вводить через CLI + JSON stdin/stdout как optional dev-tool до runtime replacement.
- Первый Go-core — `sync-check`; он не читает GitHub, не вызывает LLM, не меняет state и не активирует агентов.
- `sync-check` должен получать `project-state.md`, `current-state.md`, `roadmap.md`, `restart-prompt.md`; иначе `needs_revision`, не `ready`.
- `agents.ts` должен оставаться сборщиком agent registry, а не складом контекста и диагностик.
- `context-pack` живёт в `orchestration`, не в core-like `engine`, потому что зависит от `source-registry`.
- Import boundaries проверяются `scripts/check-boundaries.mjs`; `npm test` запускает boundary check перед build/tests.

Активные optional workflow layers:

1. `socratic_lantern_agent` — вопрос как фонарь, не поводок.
2. `ethical_persuasion_guard` — оставить огонь, убрать дым.
3. `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж; лёгкий юмор допустим, клоунада нет.
4. `source_intake_auditor` — источник не работает, пока не ясны место, роль, ограничения и запреты; не workflow conductor.

Proposal-only агенты:

- `workflow_conductor_agent` — координатор ансамбля агентов; не начальник системы; не меняет routes/guardrails/project-state/source registry сам.
- `agent_registry_librarian` — библиотекарь агентов; следит за дублями, статусами, registry sync и ложной активацией.
- `approval_gate_keeper` — сторож approval-шлюза. Формула: `+` двигает работу; `++` открывает конкретный шлюз.
- `project_state_synchronizer` — сверяет main, registry, roadmap, restart prompt, current-state и project-state; не активирован.

Архитектура:

- Agent system: Centralized Coordination + Peer-to-Peer communication.
- Materials: Coordinator-based star + fully-connected semantic topology.
- Peer-to-peer signal не равен решению и не обходит approval Сергея.
- Полносвязность материалов не отменяет source intake, dosage, fact-check, copyright boundary и approval.

Правила команд:

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если gates несколько — уточнить.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge включён, но не отменяет approval-gates.

Строгий PR workflow обязателен для кода, агентов, маршрутов, guardrails, source registries, tests/baseline, project-state, working protocols, source cards, Сводов, MVP, agent proposals/activations и Shipyard Modernization changes.

Книга:

- Не продолжать книгу автоматически.
- Последний книжный фокус: `chapter_00_preface`, Введение `От автора: перед входом`.
- Возврат к книге только по отдельному решению Сергея через Book Fast Track.
- Не создавать `book/03_approved/chapter_00_preface.md` без финального approval.

Запреты:

- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не делать вид, что все загруженные источники проаудированы.
- Не путать source card с прочитанным источником.
- Не активировать новые hard guardrails без отдельного решения Сергея.

Следующий логичный шаг:

Создать PR с TypeScript dev wrapper для Go-core `sync-check`: TS готовит input envelope из state/worklog файлов, вызывает optional Go-core binary и имеет ясный fallback, если Go/binary недоступны.
```

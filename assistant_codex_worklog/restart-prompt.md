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

Актуальное состояние:

- currentVersion: v2.4.
- lastCompletedVersion: v2.4.
- Последний полностью смерженный PR перед модернизационным фокусом: PR #62 — Add project state synchronizer proposal.
- Текущий режим: Agent Shipyard / Shipyard Modernization.
- Книга на паузе до отдельного решения Сергея.
- Формула этапа: сначала модернизируем стапель, потом продолжаем строить агентов.

Что произошло после v2.3:

- PR #56 — правило: чатовый restart prompt перед `#checkpoint full` не более 6000 знаков; полный `restart-prompt.md` может быть длиннее.
- PR #57 — proposal `workflow_conductor_agent`.
- PR #58 — архитектура агентной верфи: container registry, template, hybrid coordination model, materials research topology.
- PR #59 — proposal `agent_registry_librarian` + registry sync.
- PR #60 — proposal `approval_gate_keeper` + registry sync.
- PR #62 — proposal `project_state_synchronizer` + registry sync.
- PR #63 — Record shipyard modernization focus. Если он уже merged, следующий безопасный шаг: Enable incremental TypeScript builds. Если он ещё open, сначала завершить self-review и merge только после `++`.

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

Shipyard Modernization:

- Сначала оптимизировать TypeScript stack.
- Затем разнести TS-слои: domain / engine / integrations.
- Затем зафиксировать JSON boundary для будущего Go-core.
- Go принят как будущий кандидат для тяжёлых повторяемых проверок верфи, но не как немедленный rewrite.
- Go-core вводить через CLI + JSON stdin/stdout, сначала как optional dev-tool.

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

Если PR #63 уже merged: создать PR `Enable incremental TypeScript builds` — добавить `incremental` и `tsBuildInfoFile` в `tsconfig.json`, сохранить `skipLibCheck: true`, не включать `composite` до project references, не менять runtime-поведение.

Если PR #63 ещё open: сначала завершить review/merge этого PR.
```

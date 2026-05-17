# Restart Prompt — Assistant × Codex

Скопируй этот текст в новый чат ChatGPT, если нужно продолжить работу без перегруза старого чата.

```text
Продолжаем проект Sergey-OLife/multi-agent-system в проекте «Пишем книгу».

GitHub — источник правды по состоянию системы. Сначала открой и используй как рабочие якоря:

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
- lastMergedPr: PR #60 — Add approval gate keeper proposal.
- Текущий режим: Agent Shipyard / агентная верфь.
- Книга на паузе до отдельного решения Сергея.
- Рабочая метафора: сначала достраиваем корабль, потом плывём; даже попугай на борту не лишняя деталь, если он помнит опасные фразы капитана.

Что произошло после v2.3:

- PR #56 — правило: чатовый restart prompt перед `#checkpoint full` не более 6000 знаков; полный `restart-prompt.md` может быть длиннее.
- PR #57 — создан proposal `workflow_conductor_agent`.
- PR #58 — создана архитектура агентной верфи: контейнерный registry, шаблон контейнера, hybrid coordination model, materials research topology.
- PR #59 — создан proposal `agent_registry_librarian`; registry синхронизирован.
- PR #60 — создан proposal `approval_gate_keeper`; registry синхронизирован.

Активные optional workflow layers остаются прежними:

1. `socratic_lantern_agent` — вопрос как фонарь, не поводок.
2. `ethical_persuasion_guard` — оставить огонь, убрать дым.
3. `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж; лёгкий юмор допустим, клоунада нет.
4. `source_intake_auditor` — источник не работает, пока не ясны место, роль, ограничения и запреты; не workflow conductor.

Новые proposal-агенты, НЕ activation:

- `workflow_conductor_agent` — координатор ансамбля агентов. Определяет, кто входит в задачу, в каком порядке, где конфликт слоёв, где нужен `++`, что нельзя автоматизировать. Не меняет routes/guardrails/project-state/source registry сам.
- `agent_registry_librarian` — библиотекарь агентов. Следит за дублями, статусами, registry sync и ложной активацией.
- `approval_gate_keeper` — сторож approval-шлюза. Формула: `+` двигает работу; `++` открывает конкретный шлюз; ни один знак не даёт системе права решать шире контекста.

Зафиксированная архитектура:

- Agent system: Centralized Coordination + Peer-to-Peer communication.
- Materials: Coordinator-based star + fully-connected semantic topology.
- Peer-to-peer signal не равен решению и не обходит approval Сергея.
- Полносвязность материалов не отменяет source intake, dosage, fact-check, copyright boundary и approval.

Правила команд:

- `+` — продолжить следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если gates несколько — уточнить.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge в репозитории включён, но не отменяет approval-gates.

Строгий PR workflow обязателен для кода, агентов, маршрутов, guardrails, source registries, tests/baseline, project-state, working protocols, source cards, Сводов, MVP и agent proposals/activations.

Книга:

- Не продолжать книгу автоматически: текущий режим — агентная верфь.
- Последний книжный фокус: `chapter_00_preface`, читательское Введение `От автора: перед входом`.
- Возврат к книге только по отдельному решению Сергея через Book Fast Track: сначала чатовая редактура, потом GitHub фиксирует принятый результат.
- Не создавать `book/03_approved/chapter_00_preface.md` без финального approval.

Запреты:

- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не делать вид, что все загруженные источники проаудированы.
- Не путать source card с прочитанным источником.
- Не активировать новые hard guardrails без отдельного решения Сергея.

Следующий логичный шаг:

Создать `project_state_synchronizer` proposal. Причина: после merge PR состояние должно синхронизироваться между main, registry, roadmap, restart prompt и project-state.

Альтернативы по отдельному решению Сергея: `checkpoint_compressor_agent`, `source_card_builder`, `copyright_boundary_guard`, controlled activation для уже созданных proposal-агентов или возврат к книге через Book Fast Track.
```

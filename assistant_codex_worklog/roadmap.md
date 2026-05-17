# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track и источниками проекта «Пишем книгу».

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-17
- Версия: `v2.4`
- Смысл: зафиксировать переход в режим агентной верфи после создания архитектуры контейнеров и первых P0 proposal-агентов.

## Уже завершено

- v0.2 — routing baseline
- v0.3 — foundation agents diagnostics
- v0.4 — knowledge hierarchy
- v0.5 — source cards registry
- v0.6 — contextologist → source registry
- v0.7 — manual chapter workflow structure
- v0.8 — chapter processing artifact templates
- v0.9 — project resume protocol
- v1.0 — Process Plotnikov preface map and sync package
- v1.1 — Derive project resume diagnostics from project-state
- v1.2 — Fix project-state path resolution
- v1.3 — Add Russian review layer for artifacts
- v1.4 — Add clickable review links
- v1.5 — Add source location registry for Google Drive
- v1.6 — Train anti_cliche_editor on preface review case
- v1.7 — Add anti-cliche review map for chapter_00_preface
- v1.8 — Apply approved anti-cliche revisions to chapter_00_preface draft
- v1.9 — Create reviewed chapter_00_preface artifact
- v2.0 — Checkpoint Book Fast Track workflow
- v2.1 — Checkpoint project sources uploaded and Source Intake Audit ready
- v2.2 — Checkpoint optional agent environment: Socratic Lantern + Ethical Persuasion
- v2.3 — Checkpoint optional agent environment: CBT Thought Check + Source Intake Auditor
- v2.4 — Checkpoint Agent Shipyard architecture and first P0 proposals

## PR #56–60 summary

- PR #56: added chat restart prompt length limit — chat prompt up to 6000 chars; full `restart-prompt.md` may be longer.
- PR #57: added `workflow_conductor_agent` proposal.
- PR #58: added agent shipyard architecture: container template, parser-safe registry, hybrid coordination model, materials research topology.
- PR #59: added `agent_registry_librarian` proposal and synchronized registry status.
- PR #60: added `approval_gate_keeper` proposal and synchronized registry status.

## Current mode: Agent Shipyard

Книга временно отложена до появления необходимого набора агентов.

Рабочая формула:

> Сначала достраиваем корабль, потом плывём.

Текущий фокус — не продолжение глав, а достройка агентной архитектуры.

## Agent Shipyard architecture

Зафиксированы две архитектурные модели.

### Agent coordination

`Centralized Coordination + Peer-to-Peer communication`

- `workflow_conductor_agent` координирует маршрут, порядок входа агентов, конфликты и approval-gates.
- Агенты могут обмениваться specialist signals напрямую.
- Peer-to-peer signal не является решением и не обходит approval Сергея.
- Центральный координатор не получает права менять систему самостоятельно.

### Materials research topology

`Coordinator-based star + fully-connected semantic topology`

- координатор держит карту материалов;
- материалы связаны как исследовательская сеть;
- один источник может питать несколько агентов, глав, сцен, MVP-модулей и проверок;
- каждая связь должна иметь тип и ограничения;
- полносвязность не отменяет source intake, dosage, fact-check, copyright boundary и approval.

## Agent registry status

`agent_container_registry.md` — parser-safe YAML registry.

- schema version: `1.2`.
- 63 containers/candidates.
- `workflow_conductor_agent`: proposal.
- `agent_registry_librarian`: proposal.
- `approval_gate_keeper`: proposal.
- Остальные статусы — согласно registry.

Proposal не является activation.

## Active optional workflow layers

### `socratic_lantern_agent`

Статус: active optional workflow layer.

Формула:

> Вопрос — это фонарь, а не поводок.

### `ethical_persuasion_guard`

Статус: active optional workflow layer.

Формула:

> Оставить огонь. Убрать дым.

### `cbt_thought_check_agent`

Статус: active optional workflow layer.

Формула:

> Мысль — это не приговор. Это гипотеза, которую можно проверить.

Не терапия, не диагностика, не инструмент продаж. Лёгкий юмор допустим, клоунада нет.

### `source_intake_auditor`

Статус: active optional workflow layer.

Формула:

> Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.

Не hard guardrail, не route-required, не workflow conductor.

## New proposal agents

### `workflow_conductor_agent`

Координатор ансамбля агентов. Не начальник системы.

Должен решать: какие агенты нужны, в каком порядке, кто главный, где конфликт, где нужен `++`, что нельзя автоматизировать.

### `agent_registry_librarian`

Библиотекарь агентов.

Следит за дублями, статусами, registry sync и риском ложной активации.

### `approval_gate_keeper`

Сторож approval-шлюза.

Формула:

> `+` двигает работу. `++` открывает конкретный шлюз. Ни один знак не даёт системе права решать шире контекста.

## Strict PR Workflow

Остаётся обязательным для:

- кода;
- маршрутов агентов;
- guardrails;
- source registries;
- tests/baseline;
- project-state;
- working protocols;
- source cards/training cases;
- Сводов, MVP и карт контекстов;
- agent proposals / controlled activations / optional layers.

## Book Fast Track

Книга сейчас на паузе.

Если Сергей отдельно вернёт книгу в работу:

1. Писать и редактировать главу в чате.
2. Использовать агентов как внутренние редакторские слои.
3. GitHub фиксирует только принятый результат.
4. Не создавать approved artifact без отдельного финального approval.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если gates несколько — уточнить.
- Если после `++` PR существенно изменён — нужен новый `++`.

## Auto-merge

Сергей включил `Allow auto-merge`.

Это помогает, если PR ждёт checks/review, но не отменяет approval-gates. Merge/auto-merge только после понятного `++` и self-review.

## Restart prompt rule

- Чатовый restart prompt перед `#checkpoint full` — до 6000 знаков с пробелами.
- `assistant_codex_worklog/restart-prompt.md` может быть длиннее.
- Не вставлять в чатовый prompt большие фрагменты книги или raw source text.

## Ближайшие технические планы

1. Создать `project_state_synchronizer` proposal.
2. Затем `checkpoint_compressor_agent` proposal.
3. Затем `source_card_builder` proposal.
4. Затем `copyright_boundary_guard` proposal.
5. Затем `svod_guard`, `contextologist_agent`, `sergey_interaction_profiler`, `author_style_memory_agent`.
6. После нескольких proposal — решить, какие из них переводить в controlled activation.

## Отложенные задачи

- Возврат к книге через Book Fast Track — только после отдельного решения Сергея.
- Source Intake Audit первой волны источников.
- Controlled activation для новых proposal-агентов.
- Hard guardrail activation — только отдельным approval и отдельным PR.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не делать вид, что все загруженные источники уже проаудированы.
- Не путать source card с прочитанным источником.
- Все human-readable artifacts — на русском.
- Для кода и агентов сохранять строгий PR workflow.
- Давать кликабельные ссылки, если файл нужно открыть.

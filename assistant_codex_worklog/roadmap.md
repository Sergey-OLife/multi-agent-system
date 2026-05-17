# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track, источниками проекта «Пишем книгу» и текущей модернизацией агентной верфи.

## Текущий режим

`Agent Shipyard / Shipyard Modernization`

Книга временно отложена. Текущий фокус — модернизация верфи, чтобы дальнейшая агентная работа шла быстрее и чище.

Рабочая формула:

> Сначала модернизируем стапель, потом продолжаем строить агентов.

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

## Recent PR summary

- PR #63: recorded Shipyard Modernization focus.
- PR #64: enabled incremental TypeScript builds.
- PR #65: split TypeScript domain and engine layers.
- PR #66: added Go-core API contract.
- PR #67: extracted agent context and diagnostics modules.

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

## Proposal agents

- `workflow_conductor_agent`: proposal, not activated.
- `agent_registry_librarian`: proposal, not activated.
- `approval_gate_keeper`: proposal, not activated.
- `project_state_synchronizer`: proposal, not activated.

Proposal не является activation.

## Active optional workflow layers

- `socratic_lantern_agent` — вопрос как фонарь, не поводок.
- `ethical_persuasion_guard` — оставить огонь, убрать дым.
- `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж.
- `source_intake_auditor` — источник не работает без ясной роли и границ; не workflow conductor.

## Shipyard Modernization roadmap

Сергей принял направление: Go использовать позже как ядро для тяжёлых повторяемых проверок, но сначала выжать максимум из текущего TypeScript-стека.

### PR A — Record Shipyard Modernization focus

Статус: done via PR #63.

### PR B — Enable incremental TypeScript builds

Статус: done via PR #64.

### PR C — Split TypeScript domain and engine layers

Статус: done via PR #65.

### PR D — Add core API contract for future Go engine

Статус: done via PR #66.

### PR E — Extract context and diagnostics modules from agents.ts

Статус: done via PR #67.

Смысл: `agents.ts` должен оставаться сборщиком agent registry, а не складом контекста и диагностик.

### PR F — Choose next modernization branch

Возможные направления:

1. `tsconfig` split: base/build/test configs.
2. Minimal Go-core `sync-check` CLI по принятому contract.

Более осторожный путь: сначала `tsconfig` split, затем Go-core.

Более продуктовый путь: сразу минимальный Go-core `sync-check`, чтобы проверить Go на реальной задаче stale state / registry drift.

## Возврат к агентам

Возврат к очереди agent proposals возможен после отдельного решения Сергея.

Очередь:

1. `checkpoint_compressor_agent`
2. `source_card_builder`
3. `copyright_boundary_guard`
4. `svod_guard`
5. `contextologist_agent`
6. `sergey_interaction_profiler`
7. `author_style_memory_agent`

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
- agent proposals / controlled activations / optional layers;
- Shipyard Modernization changes.

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

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не делать вид, что все загруженные источники уже проаудированы.
- Не путать source card с прочитанным источником.
- Все human-readable artifacts — на русском.
- Для кода, агентов и модернизации сохранять строгий PR workflow.

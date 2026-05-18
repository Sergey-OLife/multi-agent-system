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
- v2.5 — Checkpoint Go-core validation loop and schema pressure contract

## Recent PR summary

- PR #78 — Extract minimal sync-check transport helpers.
- PR #79 — Add minimal registry-check Go command.
- PR #81 — Add minimal Go validation primitives and pressure tests.
- PR #82 — Document schema pressure invariants for Go-core envelope.
- PR #83 — Checkpoint full after schema pressure contract.

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

Сергей принял направление: Go использовать как ядро для тяжёлых повторяемых проверок только после TypeScript-дисциплины и JSON boundary.

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

### PR F — Enforce import boundaries and public module entrypoints

Статус: done via PR #69.

### PR G — Split tsconfig into base/build/test configs

Статус: done via PR #71.

### PR H — Add minimal Go-core sync-check CLI

Статус: done via PR #72.

### PR I — Sync state after Go-core and tighten handoff validation

Статус: done via PR #73.

### PR J — Add TypeScript dev wrapper for sync-check

Статус: done via PR #75.

Смысл:

- TypeScript готовит input envelope;
- wrapper вызывает optional Go-core binary;
- fallback возвращает `unavailable`, но не fake-ready;
- wrapper остаётся transport shell.

### PR K — Add sync-check wrapper contract

Статус: done via PR #76.

Смысл:

- зафиксированы stdout/stderr rules;
- allowed statuses;
- exit-code semantics;
- transport failure vs validation failure;
- fallback behavior.

### PR L — Add minimal sync-check CI workflow

Статус: done via PR #77.

Смысл:

- Go-core validation loop встроен в CI;
- skipped validation больше не выглядит successful pass;
- CI не стал orchestration layer.

### PR M — Extract minimal transport helpers

Статус: done via PR #78.

Смысл:

- wrapper получил minimal command registry;
- transport extraction не стала plugin framework.

### PR N — Add registry-check Go command

Статус: done via PR #79.

Смысл:

- второй реальный Go-core command;
- transport пережил второй use-case;
- registry-check structural, not orchestration.

### PR O — Add Go validation primitives and pressure tests

Статус: done via PR #81.

Смысл:

- small semantic primitives;
- pressure tests на bad states;
- no validator framework.

### PR P — Document schema pressure invariants

Статус: done via PR #82.

Смысл:

- implicit envelope invariants зафиксированы текстом;
- semantic assumptions made explicit before runtime enforcement;
- no JSON Schema/protobuf/OpenAPI framework.

### PR Q — Checkpoint full after schema pressure contract

Статус: current checkpoint PR.

Смысл:

- синхронизировать state/worklog/restart prompt после PR #82;
- зафиксировать следующий безопасный шаг: focused schema pressure tests.

### PR R — Add focused schema pressure tests

Статус: next safe step after checkpoint merge.

Цель: добавить Go-core tests для malformed envelopes и contract edge cases без schema framework.

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

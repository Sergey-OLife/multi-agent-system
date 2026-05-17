# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track, источниками проекта «Пишем книгу» и текущей модернизацией агентной верфи.

## Текущий режим

`Agent Shipyard / Shipyard Modernization`

Книга временно отложена. Текущий фокус — не продолжение глав и не следующий agent proposal, а модернизация верфи, чтобы дальнейшая агентная работа шла быстрее и чище.

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

- PR #58: added agent shipyard architecture: container template, parser-safe registry, hybrid coordination model, materials research topology.
- PR #59: added `agent_registry_librarian` proposal and synchronized registry status.
- PR #60: added `approval_gate_keeper` proposal and synchronized registry status.
- PR #62: added `project_state_synchronizer` proposal and synchronized registry status.

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

Цель: зафиксировать временный подфокус модернизации верфи после PR #62.

Изменения:

- project-state `.json` / `.md`;
- current-state;
- roadmap;
- decision-log.

Статус: current step.

### PR B — Enable incremental TypeScript builds

Цель: ускорить dev-loop без изменения runtime-поведения.

План:

- добавить `incremental: true` в `tsconfig.json`;
- добавить `tsBuildInfoFile`;
- сохранить `skipLibCheck: true`;
- не включать `composite` до project references;
- при необходимости добавить быстрый script для typecheck.

### PR C — Split TypeScript domain and engine layers

Цель: подготовить код к будущему Go-core без немедленного rewrite.

План:

- выделить `src/domain`;
- выделить `src/engine`;
- выделить `src/integrations`;
- не менять внешнее поведение CLI/router.

### PR D — Add core API contract for future Go engine

Цель: зафиксировать JSON boundary перед Go.

План:

- описать input/output для `sync-check`, `registry-check`, `route-preview`, `checkpoint-check`;
- не писать Go до утверждения контракта.

### PR E — Add minimal Go core sync-check CLI

Цель: доказать полезность Go на одном реальном сценарии.

Первый сценарий:

- proposal exists, but registry/backlog still points to completed proposal step.

Принцип:

- CLI first;
- JSON stdin/stdout;
- no HTTP/gRPC initially.

### PR F — Wire Go sync-check as optional shipyard tool

Цель: подключить Go-core как optional dev-tool, не ломая TypeScript runtime.

План:

- npm script or helper command;
- clear fallback if Go binary is missing;
- no route/guardrail changes.

## Возврат к агентам

Возврат к очереди agent proposals возможен после первых шагов модернизации:

1. TypeScript build loop оптимизирован.
2. Кодовые слои domain/engine/integrations намечены или выделены.
3. Go boundary описан хотя бы как contract.

После этого очередь:

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

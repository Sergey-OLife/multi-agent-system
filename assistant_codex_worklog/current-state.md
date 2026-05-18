# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект возвращается из подфокуса модернизации в режим:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #86 — Add bug response and compatibility protocol
- Статус: merged
- Merge commit: `80f2df5f8e8bf1f8dbb272fd88056a57ecf615a3`
- Смысл: добавлен lightweight protocol реакции на будущие баги и compatibility changes.

## Stability gate

Shipyard Modernization stability gate считается пройденным.

Проверено и зафиксировано:

- TypeScript остаётся orchestration shell.
- Go-core стал deterministic validation spine behind JSON stdin/stdout.
- Go-core commands: `sync-check`, `registry-check`.
- Wrapper владеет transport, не validation meaning.
- CI проверяет minimal sync-check path.
- Schema pressure tests добавлены без JSON Schema/protobuf/OpenAPI framework.
- Bug response protocol удерживает порядок: classify → failing test/fixture → narrow fix → framework only after repeated proven pain.

Рабочая формула:

```text
Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.
```

## Что завершено в пакете Shipyard Modernization

- PR #63 — зафиксирован подфокус Shipyard Modernization.
- PR #64 — включены incremental TypeScript builds.
- PR #65 — введены первые слои `domain / engine`.
- PR #66 — зафиксирован Go-core API contract: CLI + JSON stdin/stdout.
- PR #67 — вынесены context и diagnostics модули из `agents.ts`.
- PR #69 — добавлены import boundaries и public module entrypoints.
- PR #71 — TypeScript configs разделены на `base/build/test`.
- PR #72 — добавлен первый Go-core `sync-check` CLI.
- PR #73 — закрыта дыра с отсутствующими handoff files.
- PR #75 — добавлен TypeScript sync-check dev wrapper skeleton.
- PR #76 — добавлен sync-check wrapper contract document.
- PR #77 — добавлен minimal sync-check CI workflow.
- PR #78 — вынесены minimal transport helpers.
- PR #79 — добавлен второй Go-core command `registry-check`.
- PR #81 — добавлены minimal Go validation primitives and pressure tests.
- PR #82 — documented schema pressure invariants for Go-core envelope.
- PR #83 — full checkpoint after schema pressure contract.
- PR #84 — restart-prompt-first protocol correction checkpoint.
- PR #85 — focused Go-core schema pressure tests.
- PR #86 — bug response and compatibility protocol.

## Актуальные proposal-агенты

- `workflow_conductor_agent` — proposal only, не activation.
- `agent_registry_librarian` — proposal only, не activation.
- `approval_gate_keeper` — proposal only, не activation.
- `project_state_synchronizer` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — вопрос как фонарь, не поводок.
2. `ethical_persuasion_guard` — оставить огонь, убрать дым.
3. `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж.
4. `source_intake_auditor` — источник не работает без ясной роли и границ; не workflow conductor.

## Следующий безопасный шаг

Вернуться к agent queue и подготовить `checkpoint_compressor_agent` как proposal без activation.

Почему именно он:

- уже был реальный сбой с checkpoint/restart prompt;
- система стала плотнее;
- будущие переходы между чатами требуют сжатия без потери смысловой точки;
- агент должен помогать с checkpoint/restart continuity, но не менять project-state самостоятельно.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не вводим новые modernization layers без конкретного bug/compatibility риска.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

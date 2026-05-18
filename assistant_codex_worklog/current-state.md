# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Shipyard Modernization`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #83 — Checkpoint full after schema pressure contract
- Статус: merged
- Merge commit: `d2e3e66b57375c8ec8fe46d4e7180bb8f7731b1f`
- Смысл: синхронизированы project-state/worklog/restart prompt после PR #82; следующая точка — focused schema pressure tests.

## Важное процессное исправление

После вопроса Сергея зафиксировано:

- правило уже было в `working-protocol.md`: при `#checkpoint full` сначала дать restart prompt в чат;
- предыдущий сбой был assistant noncompliance, не missing policy;
- текущий checkpoint начат правильно: restart prompt был сначала выдан в чат, потом начаты GitHub-операции.

Рабочая формула:

```text
prompt first
GitHub second
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

## Архитектурная логика модернизации

- TypeScript остаётся оболочкой для CLI, интеграций, GitHub/LLM-обвязки и сценариев разработчика.
- Go-core развивается как deterministic validation layer за JSON boundary.
- Go-core команды сейчас: `sync-check`, `registry-check`.
- Wrapper знает transport, но не validation meaning.
- Go-core знает validation meaning, но не ходит в GitHub, не вызывает LLM, не меняет state.
- CI проверяет minimal sync-check path.
- Semantic primitives в Go остаются маленькими helpers, не policy engine.
- Schema pressure invariants зафиксированы текстом до runtime enforcement.

## Следующий безопасный технический шаг

Добавить focused Go-core schema pressure tests для malformed envelopes и contract edge cases без JSON Schema/protobuf/OpenAPI framework.

Проверять нужно не happy path, а плохие состояния:

- missing/invalid `schemaVersion`;
- command mismatch;
- unsupported command;
- malformed project-state payload;
- status priority;
- command-local diagnostics;
- compatibility with extra ignored fields where allowed.

## Что временно не делаем

- Не создаём следующий agent proposal (`checkpoint_compressor_agent`), пока Сергей не вернёт фокус к agent queue.
- Не меняем routes/guardrails/optional layers.
- Не продолжаем книгу автоматически.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не вводим schema framework до реальной необходимости.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

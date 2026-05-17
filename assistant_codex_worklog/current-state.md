# Current State — Assistant × Codex

Дата фиксации: 2026-05-17

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Shipyard Modernization`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #69 — `Add import boundaries and public module entrypoints`
- Статус: merged
- Merge commit: `087c28f6b48464365110ab643542c9eaa985d5af`
- Смысл: добавлены public entrypoints слоёв, `context-pack` перенесён в `orchestration`, добавлен dependency-free import boundary checker, `lint:boundaries` встроен в `npm test`, правила границ зафиксированы документом.

## Shipyard Modernization — что уже сделано

- PR #63 — зафиксирован подфокус Shipyard Modernization.
- PR #64 — включены incremental TypeScript builds через `incremental` и `tsBuildInfoFile`.
- PR #65 — введены первые слои `domain / engine` и сохранены compatibility entrypoints.
- PR #66 — зафиксирован Go-core API contract: CLI + JSON stdin/stdout.
- PR #67 — вынесены context и diagnostics модули из `agents.ts`.
- PR #68 — синхронизировано состояние после PR #64–67.
- PR #69 — добавлены import boundaries и public module entrypoints.

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

Принята линия: сначала граница ответственности, потом файловая структура, потом конфиг, потом Go.

Ключевые решения:

- Go принят как будущий кандидат для тяжёлых повторяемых проверок верфи.
- Go не означает полный немедленный rewrite.
- TypeScript остаётся оболочкой для CLI, интеграций, GitHub/LLM-обвязки и сценариев разработчика.
- Go-core вводится позже через CLI с JSON stdin/stdout.
- `agents.ts` не должен снова становиться складом контекста и диагностик.
- Public entrypoints задают доступ к слоям.
- `context-pack` находится в `orchestration`, потому что зависит от `source-registry`.
- Import boundaries теперь проверяются кодом перед тестами.

## Следующий безопасный технический шаг

Разделить `tsconfig` на base/build/test configs, потому что границы слоёв уже закреплены.

После этого следующий крупный шаг: первый минимальный Go-core `sync-check` CLI по принятому контракту.

## Что временно не делаем

- Не создаём следующий agent proposal (`checkpoint_compressor_agent`), пока Сергей не вернёт фокус к agent queue.
- Не меняем routes/guardrails/optional layers.
- Не продолжаем книгу автоматически.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

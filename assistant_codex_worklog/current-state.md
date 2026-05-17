# Current State — Assistant × Codex

Дата фиксации: 2026-05-17

## Текущая рабочая точка

После PR #62 проект остаётся в режиме `Agent Shipyard`, но внутри него открыт временный технический подфокус:

> `Shipyard Modernization` — модернизировать верфь перед продолжением агентных proposal.

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #62 — `Add project state synchronizer proposal`
- Статус: merged
- Merge commit: `9ffbe0e52f3b68e31ec425c311aacf3237d1ebb7`
- Смысл: `project_state_synchronizer` добавлен как proposal и синхронизирован в `agent_container_registry.md`; агент не активирован.

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

## Решение Сергея по модернизации

Принято направление: сначала оптимизировать текущий TypeScript-стек, затем постепенно вводить Go только там, где есть ясная граница и реальный выигрыш.

Ключевые решения:

- Go принят как будущий кандидат для тяжёлых повторяемых проверок верфи.
- Go не означает полный немедленный rewrite.
- TypeScript остаётся оболочкой для CLI, интеграций, GitHub/LLM-обвязки и сценариев разработчика.
- Первым техническим шагом должна стать оптимизация TypeScript build loop.
- Go вводится позже через CLI с JSON stdin/stdout.

## Дорожная логика Shipyard Modernization

1. Зафиксировать фокус модернизации верфи в state/worklog.
2. Включить incremental TypeScript builds.
3. Разделить TypeScript-слои: domain / engine / integrations.
4. Зафиксировать JSON-контракт будущего Go-core.
5. Добавить минимальный Go-core CLI для `sync-check`.
6. Подключить Go-core как optional dev-tool.
7. Вернуться к очереди агентных proposal.

## Следующий безопасный технический шаг

Создать PR `Enable incremental TypeScript builds`:

- добавить `incremental` и `tsBuildInfoFile` в `tsconfig.json`;
- сохранить `skipLibCheck: true`;
- не включать `composite` до project references;
- не менять runtime-поведение.

## Что временно не делаем

- Не создаём следующий agent proposal (`checkpoint_compressor_agent`), пока не зафиксирован первый шаг модернизации.
- Не начинаем Go-core до TypeScript-оптимизации и JSON-boundary.
- Не меняем routes/guardrails/optional layers.
- Не продолжаем книгу автоматически.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

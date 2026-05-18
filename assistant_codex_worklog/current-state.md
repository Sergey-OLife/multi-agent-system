# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #101 — Add repository hygiene audit and ledger protocol
- Статус: merged
- Merge commit: `ade6c257aea62866e7985873bb02f6a8e09881b1`
- Смысл: добавлен постоянный repository hygiene audit и ledger protocol.

## Repository hygiene

Теперь доступно:

```bash
npm run hygiene:audit
```

Единый ledger:

- Issue #99 — Repository hygiene ledger.

Статус веток:

- branch cleanup остаётся `cleanup_needed`, не `completed`;
- stale branches не удалялись;
- уборка веток должна быть выполнена через GitHub UI или будущий явный безопасный branch cleanup tool;
- не использовать branch-ref workarounds;
- не заявлять, что cleanup завершён, пока ветки не убраны реально и issue #99 не обновлён.

## Agent queue status

`contextologist_agent` теперь proposal only, не activation и не hard guardrail.

Его роль: восстанавливать карту проекта перед ходом.

Ограничение: он не командует маршрутом, не меняет state и не заменяет `workflow_conductor_agent`.

## Актуальные proposal-агенты

- `workflow_conductor_agent` — proposal only, не activation.
- `agent_registry_librarian` — proposal only, не activation.
- `approval_gate_keeper` — proposal only, не activation.
- `project_state_synchronizer` — proposal only, не activation.
- `checkpoint_compressor_agent` — proposal only, не activation.
- `source_card_builder` — proposal only, не activation.
- `copyright_boundary_guard` — proposal only, не activation.
- `svod_guard` — proposal only, не activation.
- `contextologist_agent` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `sergey_interaction_profiler` как proposal без activation.

Почему он следующий:

- архитектурные предохранители уже описаны;
- теперь нужно формализовать профиль взаимодействия с Сергеем;
- это снизит риск поддакивания, лишней технички, неверного approval и потери авторского режима работы.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не заявляем, что branch cleanup выполнен, пока ветки не удалены реально.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

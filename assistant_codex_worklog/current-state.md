# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #96 — Add contextologist agent proposal
- Статус: merged
- Merge commit: `3cb815653115665b104c7d59bec635f01368077e`
- Смысл: создан proposal `contextologist_agent` и синхронизирован registry status.

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

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #94 — Add svod guard agent proposal
- Статус: merged
- Merge commit: `538a3cf937d159b7595155b2018a414ecc8620e5`
- Смысл: создан proposal `svod_guard` и синхронизирован registry status.

## Agent queue status

`svod_guard` теперь proposal only, не activation и не hard guardrail.

Его роль: проверять согласие текста, главы, MVP-модуля или agent proposal с принятым Сводом.

Ограничение: он не переписывает Свод и не даёт финальное approval вместо Сергея.

## Актуальные proposal-агенты

- `workflow_conductor_agent` — proposal only, не activation.
- `agent_registry_librarian` — proposal only, не activation.
- `approval_gate_keeper` — proposal only, не activation.
- `project_state_synchronizer` — proposal only, не activation.
- `checkpoint_compressor_agent` — proposal only, не activation.
- `source_card_builder` — proposal only, не activation.
- `copyright_boundary_guard` — proposal only, не activation.
- `svod_guard` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `contextologist_agent` как proposal без activation.

Почему он следующий:

- после source guards и Svod guard нужна карта контекста;
- проект плотный: книга, MVP, агенты, Go-core, source intake и state rules уже связаны;
- `contextologist_agent` должен восстанавливать систему проекта перед ходом, чтобы не отвечать с хвоста.

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

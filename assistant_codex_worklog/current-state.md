# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #92 — Add copyright boundary guard agent proposal
- Статус: merged
- Merge commit: `fc81c223bbf45093697550c588fd4a7b696e5da1`
- Смысл: создан proposal `copyright_boundary_guard` и синхронизирован registry status.

## Agent queue status

`copyright_boundary_guard` теперь proposal only, не activation и не hard guardrail.

Его роль: защищать проект от raw source text, длинных цитат, близкого рерайта, private source locations и source leaks.

Ограничение: это не юридическое заключение и не замена профессиональной юридической проверки.

## Актуальные proposal-агенты

- `workflow_conductor_agent` — proposal only, не activation.
- `agent_registry_librarian` — proposal only, не activation.
- `approval_gate_keeper` — proposal only, не activation.
- `project_state_synchronizer` — proposal only, не activation.
- `checkpoint_compressor_agent` — proposal only, не activation.
- `source_card_builder` — proposal only, не activation.
- `copyright_boundary_guard` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `svod_guard` как proposal без activation.

Почему он следующий:

- source boundary уже получил proposal-предохранители;
- следующий риск — текст может не спорить с источниками, но спорить со своим Сводом;
- `svod_guard` должен держать внутренний позвоночник книги, главы, MVP и агентной системы.

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

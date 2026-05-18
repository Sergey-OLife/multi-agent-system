# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #114 — Add banality alarm agent proposal
- Статус: merged
- Merge commit: `5f65e6fee8a0e3dc47b9e80ea947b71e19b2a575`
- Смысл: добавлен `knowledge/05_agent_memory/agent_proposals/banality_alarm_agent.md`, registry синхронизирован.

## Что зафиксировал PR #114

- `banality_alarm_agent` — proposal only, не activation, не route element, не hard guardrail.
- Registry block для `banality_alarm_agent` переведён из `container` в `proposal`.
- Добавлен `proposal_path`.
- `next_action` в registry: `controlled_activation`.
- Книга не продолжалась.

## Repository hygiene

Доступно:

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

`banality_alarm_agent` теперь proposal only, не activation и не hard guardrail.

Его роль: быстро сигналить о банальности, рекламной пластмассе, методичке, слишком ИИ-голосе, потере мотора, псевдоглубине, декоративной морали и расплывчатых утверждениях.

Ограничение: он не переписывает весь текст, не заменяет `anti_cliche_editor`, `author_style_memory_agent`, `plotnikov_motor_agent`, `one_strike_chapter_agent` или живую редактуру Сергея.

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
- `sergey_interaction_profiler` — proposal only, не activation.
- `author_style_memory_agent` — proposal only, не activation.
- `banality_alarm_agent` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `anti_cliche_editor` как proposal без activation, если Сергей не выберет другой агент.

Почему он следующий:

- `banality_alarm_agent` теперь умеет быстро сигналить о сбое;
- нужен полноценный редакторский агент, который не просто кричит «пластмасса», а классифицирует и перетачивает клише;
- он должен работать глубже, чем сигнализация, но не превращаться в переписывание всей книги без запроса.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не заявляем, что branch cleanup выполнен, пока ветки не удалены реально.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее уже grounded safe action, не обход approval-gates.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

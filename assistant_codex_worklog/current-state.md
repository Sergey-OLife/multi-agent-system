# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #112 — Add author style memory agent proposal
- Статус: merged
- Merge commit: `c5c3cf43951b3d32d46c5f37d994f66d941dd138`
- Смысл: добавлен `knowledge/05_agent_memory/agent_proposals/author_style_memory_agent.md`, registry синхронизирован.

## Что зафиксировал PR #112

- `author_style_memory_agent` — proposal only, не activation, не route element, не hard guardrail.
- Registry block для `author_style_memory_agent` переведён из `container` в `proposal`.
- Добавлен `proposal_path`.
- `next_action` в registry: `controlled_activation`.
- Automatic memory writes не добавлялись.
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

`author_style_memory_agent` теперь proposal only, не activation и не hard guardrail.

Его роль: хранить подтверждённые editorial style decisions, formula memory, rhythm memory, scene/object memory, failure-pattern memory и counterexamples без превращения стиля в канон.

Ограничение: он не имитирует Сергея, не пишет вместо автора, не блокирует merge, не создаёт automatic memory writes и не заменяет живую редактуру.

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

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `banality_alarm_agent` как proposal без activation, если Сергей не выберет другой агент.

Почему он следующий:

- `author_style_memory_agent` уже оформлен как proposal;
- следующий ближайший контейнер в группе «Профиль взаимодействия и авторская память» — `banality_alarm_agent`;
- он должен быть коротким сигнализатором повторяющихся сбоев: банальность, пластмасса, методичка, слишком ИИ, потеря мотора.

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

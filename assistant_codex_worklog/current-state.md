# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #104 — Add review depth protocol and profiler proposal
- Статус: merged
- Merge commit: `c4125030eef986eb489b28122275d493997fc636`
- Смысл: добавлены `knowledge/07_operations/review_depth_protocol.md` и `knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md`.

## Что зафиксировал PR #104

- `review_depth_protocol` — active operational protocol.
- L1/L2/L3 review depth.
- Semantic discipline для `+`, `++`, `+++`.
- Anti-overengineering doctrine.
- `sergey_interaction_profiler` — proposal only, не activation, не route element, не hard guardrail.
- Profiler работает как editorial memory / drift diagnostics / contextual style mapping proposal.

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

`sergey_interaction_profiler` теперь proposal only, не activation и не hard guardrail.

Его роль: помогать системе помнить наблюдаемые редакторские решения, failure-patterns и drift-зоны без превращения стиля Сергея в догму.

Ограничение: он не имитирует личность Сергея, не подменяет редактора, не блокирует merge, не навязывает композиционные схемы и не становится authority layer.

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

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `author_style_memory_agent` как proposal без activation, если Сергей не выберет другой агент.

Почему он следующий:

- `sergey_interaction_profiler` уже оформлен как proposal;
- следующий контейнер ядра заполнения — `author_style_memory_agent`;
- он должен хранить вкус текста и авторские паттерны как рабочую память, а не как жёсткий канон.

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

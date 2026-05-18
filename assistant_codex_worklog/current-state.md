# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #110 — Sync state after profiler proposal
- Статус: merged
- Merge commit: `f9223e9698dc3dcdb16948effb894131ab14d36e`
- Смысл: state/worklog/registry sync после PR #104.

## Что зафиксировал PR #110

- `currentVersion`: v2.16.
- `sergey_interaction_profiler` зафиксирован как proposal only, не activation, не hard guardrail.
- Registry block для `sergey_interaction_profiler` переведён из `container` в `proposal`.
- `review_depth_protocol` остаётся active operational protocol.
- Следующий safe step после checkpoint: `author_style_memory_agent` proposal without activation.

## Текущий checkpoint

Идёт `#checkpoint full` после PR #110.

Checkpoint фиксирует:

- `currentVersion`: v2.17.
- `lastCompletedVersion`: v2.17.
- `lastMergedPr`: PR #110 — Sync state after profiler proposal.
- `lastMergeCommit`: `f9223e9698dc3dcdb16948effb894131ab14d36e`.
- `currentMilestone`: v2.17 Checkpoint full after profiler state sync.

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

`author_style_memory_agent` остаётся container. Следующий safe step — подготовить его proposal без activation, если Сергей не выберет другой агент.

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

## Следующий безопасный шаг после checkpoint

Подготовить `author_style_memory_agent` как proposal без activation, если Сергей не выберет другой агент.

Почему он следующий:

- `sergey_interaction_profiler` уже оформлен как proposal;
- registry синхронизирован;
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

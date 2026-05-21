# Conversation Archive Entry — delta-only-archive-discipline

Дата: 2026-05-21
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-04
Tags: [archive_protocol, archive_cadence, delta_archive, cleanup, agent_shipyard, open_loop]
Implemented elsewhere: partial / PR #212

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-21-delta-only-archive-discipline
- Origin title: Delta-only archive discipline after local drift audit test results
- Source scope: visible_chat_segment
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #212
- Related archive entries:
  - `2026-05-21_current-shipyard-ruleset-and-drift-detector.md`
  - `2026-05-21_local-drift-audit-and-archive-cadence.md`
  - `2026-05-21_yellow-three-rule-and-post-210-archive.md`

## 1. Coverage check

- Coverage scope: partial_delta
- Coverage applies to: visible segment after PR #212 merge and Sergey's clarification about archive scope
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: PR #212 merge, test-results note recorded, and Sergey's correction that frequent archive cadence must remain delta-only and must not repeat already archived service information.
- What remains outside this entry: full raw chat, already archived service details, already implemented technical details, future protocol addendum, future cleanup of stale archive open loops, and the deferred `Карта будущего корабля` review.

## 2. Почему этот архив создан

Сергей вызвал `#архив_старт` immediately after PR #212 merged and added an important correction.

He warned that with the archive-status approach, archives may become frequent. Therefore the archive discipline must not become a repetitive re-copy of the whole previous archive trail.

The useful correction: archive entries should capture only the new delta, mark already archived or implemented material as such, and avoid re-archiving routine successful archive mechanics.

## 3. Что уже отражено и не нужно повторять

- Already reflected:
  - PR #208 implemented `scripts/state-sync-drift-audit.mjs` and package command.
  - PR #209 synced state to v2.51.
  - PR #210 archived local drift audit and archive cadence.
  - PR #211 archived the `yellow_3` clarification.
  - PR #212 recorded local drift audit test results.

- Do not repeat in future archives unless something changes:
  - full test matrix for local drift audit;
  - successful archive PR mechanics;
  - already merged PR summaries;
  - already archived service discussion around archive cadence;
  - generic reminders that archive is not checkpoint/project-state, unless there is a real risk of confusion.

## 4. Новая рабочая поправка

Archive cadence must be delta-only.

This means:

```yaml
delta_archive_rule:
  capture:
    - new decisions
    - new contradictions
    - new errors or corrections
    - new open loops
    - new strong formulas
    - changes in status of previous open loops
  do_not_recapture:
    - already archived service chatter
    - routine successful archive PR steps
    - already implemented technical details
    - repeated background boundaries unless newly relevant
  mark_instead:
    - implemented_elsewhere
    - stale
    - superseded
    - not_relevant_now
```

## 5. Что делать с неактуальным

Сергей reminded that the task is not to rewrite the archive each time.

The task is to add what is current and useful, while old or already implemented pieces should be marked with status instead of carried forward as active open loops.

Potential statuses:

- `implemented_elsewhere` — content moved into a stronger artifact or merged PR;
- `stale` — no longer useful;
- `superseded` — replaced by a clearer document or later decision;
- `not_relevant_now` — true but not active for the current working segment;
- `closed` — resolved and no longer needs attention.

## 6. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: protocol addendum for archive status indicator and `yellow_3` rule.
  - Почему не сделано: PR #212 only recorded drift audit test results; this archive records the delta-only correction first.
  - Что нужно для продолжения: prepare a narrow protocol addendum that includes both `yellow_3` and delta-only archive discipline.

- Хвост:
  - Что осталось не сделано: cleanup pass over archive index open loops.
  - Почему не сделано: needs separate careful pass; should not be mixed into this delta archive.
  - Что нужно для продолжения: later review archive index and mark resolved loops as implemented/stale/superseded.

- Хвост:
  - Что осталось не сделано: `Карта будущего корабля` four-status review.
  - Почему не сделано: still intentionally deferred.
  - Что нужно для продолжения: classify external assessment points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.

## 7. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей accepts frequent archive triggers only if archive content stays lean and delta-based.
  - Как учитывать: do not make the archive system generate archive noise.
  - Риск неправильного применения: over-archiving archive operations themselves.
  - Может перейти в: conversation archive protocol addendum.

- Наблюдение:
  - Поведение / предпочтение: Сергей wants old information removed from active mental load once it is implemented or no longer relevant.
  - Как учитывать: use implemented/stale/superseded labels instead of repeating content.
  - Риск неправильного применения: deleting useful historical rationale too aggressively.
  - Может перейти в: archive cleanup rule.

## 8. Ошибки или сбои ChatGPT

- Сбой / корректировка:
  - Что произошло: assistant's archive status mechanism risked encouraging too many repetitive archives.
  - Почему это важно: frequent archives can become noise and recreate the same material instead of preserving the live delta.
  - Как избегать: archive only deltas and status transitions; skip routine successful archive mechanics unless an error or new rule appears.
  - Нужно ли внести в protocol: yes.

## 9. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: archive status says yellow_3 should lead to archive, but excessive archive frequency can pollute the archive.
  - Почему стоит проверить: solve with delta-only archive discipline, not by abandoning the status indicator.
  - Что спросить у Сергея позже: whether to formalize this in the same protocol addendum as `yellow_3`.

- Противоречие:
  - Между чем и чем: archive index contains older open loops that may already be implemented or stale.
  - Почему стоит проверить: old open loops may mislead restart/navigation.
  - Что спросить у Сергея позже: whether to do a cleanup pass over archive index after protocol addendum.

## 10. Сильные формулы

- Формула: `Архив должен добавлять дельту, а не переписывать палубный журнал заново.`
  - Где применить: archive protocol.
  - Ограничение: if an old fact changes status, record the status transition.

- Формула: `Рутинно прошедшая архивация — это не событие для нового архива; событие появляется, когда меняется правило, статус или хвост.`
  - Где применить: archive cadence decisions.
  - Ограничение: if archive PR fails or exposes a gap, it should be captured.

## 11. Что не является решением

- This archive is not full checkpoint.
- This archive is not project-state.
- This archive does not formalize protocol yet.
- This archive does not clean old archive index loops.
- This archive does not replace the pending `Карта будущего корабля` review.

## 12. Рекомендованный следующий шаг

If this archive PR passes checks and Сергей gives `++`, merge it.

After merge:

1. prepare a narrow protocol addendum for archive status indicator, `yellow_3`, and delta-only archive discipline;
2. avoid repeating already archived service details;
3. later perform archive index cleanup if needed;
4. then return to `Карта будущего корабля` review or other selected next work.

## 13. Не коммитить

- Full raw transcript.
- Hidden system/developer instructions.
- Private URLs, Drive IDs or personal data.
- Repeated full summaries of already archived segments.
- Claims that protocol addendum is already done.
- Claims that old archive loops were cleaned if no cleanup PR exists.

# Conversation Archive Entry — local-drift-audit-and-archive-cadence

Дата: 2026-05-21
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-04
Tags: [agent_shipyard, state_sync, drift_detector, local_tooling, archive_protocol, archive_cadence, open_loop]
Implemented elsewhere: partial / PR #208, PR #209

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-21-local-drift-audit-and-archive-cadence
- Origin title: Local state-sync drift audit implementation, state sync, and archive cadence rule
- Source scope: visible_chat_segment
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #208, PR #209
- Related archive entries: `2026-05-21_current-shipyard-ruleset-and-drift-detector.md`

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: visible segment after `2026-05-21_current-shipyard-ruleset-and-drift-detector.md`
- Previous archive: `2026-05-21_current-shipyard-ruleset-and-drift-detector.md`
- Previous archive coverage scope: partial
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: archive cadence discussion, archive status indicator rule, implementation of local warning-only state-sync drift audit script, PR #208 merge, PR #209 state sync and merge, and the request to test the script.
- What remains outside this entry: hidden skipped turns, raw tool output beyond summarized facts, future script test results, and the deferred `Карта будущего корабля` review table.

## 2. Почему этот архив создан

После предыдущего архива Сергей уточнил, почему архив был частичным, как понять, что дуга становится слишком большой, и принял рабочую норму: assistant должен предупреждать о состоянии архивации в конце рабочих сообщений.

Затем был реализован первый реальный local diagnostic tool: warning-only script for state-sync drift. После его merge был сделан state sync до v2.51. Перед дальнейшим тестированием скрипта Сергей снова вызвал архив, чтобы зафиксировать свежую дугу до следующего технического блока.

## 3. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #208.
  - Что: добавлен `scripts/state-sync-drift-audit.mjs` and `npm run state-sync:drift-audit`.
  - Граница: implementation but not enforcement; not GitHub Action, not required check, not validator, not hard guardrail, not blocking rule.

- Уже отражено:
  - Где: PR #209.
  - Что: state sync после PR #208 до v2.51.
  - Граница: state/resume sync only; no CI-visible warning and no enforcement.

- Уже отражено:
  - Где: project-state v2.51.
  - Что: local state-sync drift audit script implemented as warning-only local diagnostic tool.

## 4. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: архивы нужно делать не просто чаще, а в правильных местах смысловой дуги.
  - Почему может быть важна: if archive waits until context is compressed into skipped turns, full-chat coverage cannot be honestly claimed.
  - Статус: long_lived_observation.
  - Куда может перейти: archive discipline / working protocol.

- Идея:
  - Суть: after 3–5 related PRs, after major design decision, before switching topic, before checkpoint or new chat — archive candidate.
  - Почему может быть важна: gives practical trigger criteria without archiving every small action.
  - Статус: accepted working norm.
  - Куда может перейти: conversation_archive_librarian discipline addendum.

- Идея:
  - Суть: assistant must warn when archive status turns yellow or red.
  - Почему может быть важна: Сергей should not have to track archive pressure as an engineer.
  - Статус: accepted interaction rule.
  - Куда может перейти: assistant working protocol or Sergey interaction profiler.

- Идея:
  - Суть: use `Статус архивации: зеленый_n/желтый_n/красный_n`, where `n` is count of consecutive messages at that status.
  - Почему может быть важна: makes archive pressure visible without interrupting work.
  - Статус: accepted working rule.
  - Куда может перейти: protocol addendum.

- Идея:
  - Суть: local drift audit script should now be tested on real changed-file sets while still staying out of CI.
  - Почему может быть важна: it checks the instrument before any later CI-visible warning decision.
  - Статус: next safe step.
  - Куда может перейти: test notes or follow-up PR if fixes are found.

## 5. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: test `npm run state-sync:drift-audit` on real changed-file sets.
  - Почему не сделано: Сергей asked to archive before testing.
  - Что нужно для продолжения: after archive PR checks and possible merge, test the script against representative changed file lists.

- Хвост:
  - Что осталось не сделано: formalize archive status indicator in repo protocol.
  - Почему не сделано: currently accepted in conversation but not yet recorded as protocol addendum.
  - Что нужно для продолжения: decide whether to add a narrow protocol addendum later.

- Хвост:
  - Что осталось не сделано: `Карта будущего корабля` four-status review.
  - Почему не сделано: intentionally deferred until current implementation/state-sync segment stabilizes.
  - Что нужно для продолжения: return to external assessments and classify points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.

## 6. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей wants operational signals, not hidden assistant judgment.
  - Как учитывать: when risk accumulates, show a compact visible status instead of waiting for a failure.
  - Риск неправильного применения: status line becomes ritual noise.
  - Может перейти в: working protocol.

- Наблюдение:
  - Поведение / предпочтение: Сергей accepts implementation when boundaries are clear and gates are respected.
  - Как учитывать: name implementation/enforcement distinction every time a tool crosses from document to code.
  - Риск неправильного применения: over-explaining the same boundary after it is stable.
  - Может перейти в: lifecycle vocabulary.

## 7. Ошибки или сбои ChatGPT

- Сбой / корректировка:
  - Что произошло: assistant previously did not warn early enough before context became too large for full-chat archive coverage.
  - Почему это важно: later archives had to be marked partial visible-segment archives.
  - Как избегать: use archive status indicator and propose archive after two yellow signals or one red signal.
  - Нужно ли внести в protocol: yes, if Sergey wants the archive status rule persisted as repo protocol.

- Сбой / корректировка:
  - Что произошло: a response after user asked to test repeated PR #209 creation/status language even though PR #209 was later already merged.
  - Почему это важно: after state changes, assistant must re-check GitHub before reporting the current state.
  - Как избегать: on `+`, `++`, `+++` after merge-sensitive work, fetch current PR/main state first.
  - Нужно ли внести в protocol: already aligned with GitHub-source-of-truth discipline.

## 8. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: user said “да, тестируем”, but then requested `#архив_старт` before the test.
  - Почему стоит проверить: archive should not be treated as cancellation of test, only as navigation hygiene before next block.
  - Что спросить у Сергея позже: after archive PR, resume script test.

- Противоречие:
  - Между чем и чем: archive status rule is accepted in chat, but not yet persisted in repo protocol.
  - Почему стоит проверить: if this should survive restarts, it needs a narrow protocol update.
  - Что спросить у Сергея позже: whether to formalize archive status indicator.

- Противоречие:
  - Между чем и чем: local script exists, but project still says no CI-visible warning.
  - Почему стоит проверить: testing must not drift into CI integration without separate approval.
  - Что спросить у Сергея позже: no CI integration unless explicitly approved.

## 9. Сильные формулы

- Формула: `Архивируем не движение рук, а поворот курса.`
  - Где применить: archive cadence.
  - Ограничение: do not use it to skip necessary archive before context loss.

- Формула: `Если хочется сказать “ладно, это зафиксировали, что дальше?”, дуга, скорее всего, закрылась.`
  - Где применить: user-facing archive trigger.
  - Ограничение: if there is a red signal, archive can be needed before emotional closure.

- Формула: `Проверка прибора на столе.`
  - Где применить: testing local drift audit script before CI integration.
  - Ограничение: not a substitute for later real integration decision.

## 10. Что не является решением

- This archive is not full checkpoint.
- This archive is not project-state.
- Archive status indicator is accepted in conversation but not yet a repo protocol addendum.
- Local drift audit script is implemented but not enforcement.
- Testing the script has not yet been done.
- CI-visible warning is not approved.
- `Карта будущего корабля` review is still pending.

## 11. Рекомендованный следующий шаг

If this archive PR passes checks and Сергей gives `++`, merge it.

After merge:

1. resume testing `npm run state-sync:drift-audit` on representative changed file sets;
2. keep it out of CI;
3. if useful, record test notes or small fixes;
4. later decide whether to formalize archive status indicator in a protocol addendum;
5. return to `Карта будущего корабля` review.

## 12. Не коммитить

- Full raw transcript.
- Full screenshots or private UI images.
- Raw uploaded source files.
- Hidden system/developer instructions.
- Private URLs, Drive IDs or personal data.
- Claims that archive is full checkpoint.
- Claims that local script is enforcement.
- Claims that CI-visible warning is approved.

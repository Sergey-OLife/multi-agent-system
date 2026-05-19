# Conversation Archive Entry — corrective-current-chat-coverage-gap

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [archive_protocol, coverage_gap, full_chat_missing, failure_pattern, state_sync, ci, roadmap]
Implemented elsewhere: partial / PR #140, PR #142, PR #143, PR #144

## 0. Coverage check

- Coverage scope: corrective
- Previous checkpoint: no verified full-chat checkpoint found for this chat.
- Previous checkpoint coverage scope: missing.
- Previous archive/state coverage status: partial / thematic entries only.
- Full-chat marker present: no.
- Gap found: yes.
- What this entry covers: corrective capture of the known available semantic tail in the current chat: archive-start cumulative rule, explicit coverage_scope rule, PR #143 corrective archive, PR #144 v2.26 state sync, restart-prompt length verification failure, stale CI assertions debt, and next-step prioritization.
- What remains outside this entry: any earlier current-chat content not visible or not represented in the available conversation context; no claim of full_chat coverage is made.

## 1. Почему этот архив создан

Сергей указал на ключевой дефект: даже после исправлений `#архив_старт` я продолжал создавать тематические или corrective entries, но не доказал, что существует хотя бы одна корректная запись `coverage_scope: full_chat` для текущего чата. PR #145 был закрыт без merge, потому что сам признавал `coverage_scope: thematic` и не решал проблему полного покрытия.

Этот entry создаётся как corrective marker: в проекте отсутствует проверенный full-chat checkpoint для текущего чата. Поэтому нельзя утверждать, что весь чат полностью архивирован. Можно только зафиксировать known available semantic tail и явно назвать coverage gap.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #140
  - Что НЕ нужно дублировать: `#архив_старт` is cumulative, not last-topic-only.

- Уже отражено:
  - Где: PR #142
  - Что НЕ нужно дублировать: no full-chat marker = thematic coverage by default.

- Уже отражено:
  - Где: PR #143
  - Что НЕ нужно дублировать: corrective archive for critic margin orchestra, knowledge consistency risk and coverage-scope failure.

- Уже отражено:
  - Где: PR #144
  - Что НЕ нужно дублировать: v2.26 state sync after archive coverage fixes.

- Не отражено полностью:
  - Где: current conversation archive history
  - Что нельзя считать implemented: no merged archive entry proves full-chat coverage for the whole current chat.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: current chat has no verified full_chat archive checkpoint.
  - Почему может быть важна: future archive commands must not start from thematic or corrective entries as if they were full boundaries.
  - Статус: needs_decision / corrective
  - Куда может перейти: archive governance protocol / audit rule

- Идея:
  - Суть: `#архив_старт` should be able to produce a corrective coverage-gap entry when full_chat coverage is missing.
  - Почему может быть важна: this prevents false completeness and helps recover gradually without raw transcript dumping.
  - Статус: promising
  - Куда может перейти: conversation_capture_prompt / archive audit

- Идея:
  - Суть: restart-prompt length claims must be verified by actual character count.
  - Почему может быть важна: approximate compliance is not acceptable when the user sets a measurable limit.
  - Статус: needs_protocol
  - Куда может перейти: protocol addendum / helper script

- Идея:
  - Суть: stale CI assertions should be fixed before new design PRs.
  - Почему может быть важна: red CI becomes normalized if not fixed immediately.
  - Статус: needs_action
  - Куда может перейти: minimal CI cleanup PR

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: establish a real `coverage_scope: full_chat` checkpoint.
  - Почему не сделано: current available archive entries are thematic/corrective/partial; full earlier chat history is not proven covered.
  - Что нужно для продолжения: either create a full-chat checkpoint from all available current-chat context or explicitly accept that only corrective/partial coverage is possible.

- Хвост:
  - Что осталось не сделано: fix stale CI assertions.
  - Почему не сделано: archive and state sync work came first.
  - Что нужно для продолжения: separate minimal PR.

- Хвост:
  - Что осталось не сделано: knowledge_consistency_protocol.
  - Почему не сделано: red CI should be fixed first.
  - Что нужно для продолжения: CI cleanup PR, then protocol PR.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей не принимает формальное соответствие, если логическое основание не проверено.
  - Как учитывать: do not treat a correctly formatted Coverage check as proof of actual coverage.
  - Риск неправильного применения: bureaucratic compliance instead of real verification.
  - Может перейти в: long_lived_observation / archive governance

- Наблюдение:
  - Поведение / предпочтение: Сергей требует проверять измеримые утверждения, например длину текста.
  - Как учитывать: count before claiming.
  - Риск неправильного применения: confident but false compliance statements.
  - Может перейти в: protocol discipline

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: PR #145 was created as thematic archive despite the user's deeper requirement to resolve full-chat coverage.
  - Почему это важно: it repeated the surface-level fix while leaving the central gap untouched.
  - Как избегать: before any archive replacement, ask whether a full_chat checkpoint exists; if not, say missing and create corrective coverage-gap entry.
  - Нужно ли внести в protocol: yes

- Сбой:
  - Что произошло: assistant previously claimed character-count compliance without actual count.
  - Почему это важно: measurable constraints need deterministic verification.
  - Как избегать: use a counter or avoid numeric claim.
  - Нужно ли внести в protocol: yes

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: user wants full-chat archival integrity, but current archive source is partial/thematic and raw transcript dumping is forbidden.
  - Почему стоит проверить: full_chat may be impossible retroactively without full visible context.
  - Что спросить у Сергея позже: should we create best-effort corrective full-chat checkpoint from available context, explicitly naming inaccessible gaps?

## 8. Сильные формулы

- Формула: `Формат Coverage check не заменяет доказательство coverage.`
  - Где применить: archive governance.
  - Ограничение: requires auditable markers, not prose confidence.

- Формула: `Если full_chat checkpoint отсутствует, честный архив начинается с признания дыры.`
  - Где применить: corrective archive protocol.
  - Ограничение: not an excuse to stop capturing known semantic tail.

- Формула: `Непроверенная длина — это тоже hallucination.`
  - Где применить: measurable constraints protocol.
  - Ограничение: applies to countable constraints.

## 9. Что не является решением

- This entry is not full_chat coverage.
- This entry does not prove the whole current chat is archived.
- This entry does not fix stale CI assertions.
- This entry does not create knowledge_consistency_protocol.
- This entry does not approve branch protection or Go validators.

## 10. Рекомендованный следующий шаг

Create a minimal PR that fixes stale CI assertions, then decide whether to create a best-effort `coverage_scope: full_chat` checkpoint from all available current-chat context or keep the archive as corrective/partial with explicit gap.

## 11. Не коммитить

- Full raw transcript.
- Raw uploaded books / PDFs.
- Private links or personal data.
- Claims that this entry is full_chat.
- Claims that coverage gaps are closed.

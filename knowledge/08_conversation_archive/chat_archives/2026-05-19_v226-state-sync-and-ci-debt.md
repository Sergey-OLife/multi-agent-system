# Conversation Archive Entry — v226-state-sync-and-ci-debt

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [state_sync, ci, failure_pattern, archive_protocol, technical_debt, roadmap]
Implemented elsewhere: partial / PR #144

## 0. Coverage check

- Coverage scope: thematic
- Previous checkpoint: `2026-05-19_corrective-margin-orchestra-and-consistency.md`
- Previous checkpoint coverage scope: corrective
- Previous archive/state coverage status: partial
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: v2.26 state sync, restart prompt compression, CI stale assertions debt and next-step prioritization.
- What remains outside this entry: future knowledge consistency protocol, critic_margin_agent proposal and unresolved earlier thematic gaps.

## 1. Почему этот архив создан

После merge PR #143 проект был синхронизирован до v2.26. Одновременно проявился следующий operational risk: CI уже не падает случайно, а стабильно указывает на stale assertions-блок, который стал первым осознанным техническим долгом после стабилизации archive protocol.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #144
  - Что НЕ нужно дублировать: state sync до v2.26, cumulative archive rules, coverage-scope discipline.

- Уже отражено:
  - Где: restart-prompt.md
  - Что НЕ нужно дублировать: книга остаётся на паузе; current mode = Agent Shipyard / Agent Queue.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: после стабилизации archive protocol главным риском становится рассинхронизация тестовых ожиданий и реального состояния проекта.
  - Почему может быть важна: CI впервые начал выступать как индикатор knowledge drift, а не просто code failure.
  - Статус: promising
  - Куда может перейти: knowledge_consistency_protocol

- Идея:
  - Суть: следующий безопасный шаг — не новый design PR, а устранение stale assertions.
  - Почему может быть важна: иначе каждый следующий PR будет проходить через уже известный красный шум.
  - Статус: needs_decision
  - Куда может перейти: CI cleanup PR

- Идея:
  - Суть: restart instructions должны иметь жёсткий лимит размера и проходить ручную проверку длины.
  - Почему может быть важна: длинные restart prompts начинают терять переносимость между чатами.
  - Статус: promising
  - Куда может перейти: protocol addendum

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: исправить stale assertions-блок в CI.
  - Почему не сделано: state sync был приоритетнее.
  - Что нужно для продолжения: отдельный минимальный PR без архитектурных изменений.

- Хвост:
  - Что осталось не сделано: knowledge_consistency_protocol.
  - Почему не сделано: сначала нужен зелёный CI.
  - Что нужно для продолжения: cleanup PR по assertions.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей требует точного соблюдения ограничений, включая лимит символов.
  - Как учитывать: проверять длину фактически, а не приблизительно.
  - Риск неправильного применения: уверенное заявление без проверки разрушает доверие к остальным assertions.
  - Может перейти в: protocol discipline

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: assistant дважды заявил, что restart instruction меньше 8000 символов, хотя текст был длиннее.
  - Почему это важно: это не stylistic bug, а failure of verification discipline.
  - Как избегать: считать длину перед утверждением.
  - Нужно ли внести в protocol: yes

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: желание ускорять проект и необходимость сначала чинить stale assertions.
  - Почему стоит проверить: roadmap pressure может снова вытеснить consistency work.
  - Что спросить у Сергея позже: хотим ли мы rule «red CI blocks design PRs»?

## 8. Сильные формулы

- Формула: `Красный CI — это не шум, если он падает по одной и той же причине.`
  - Где применить: knowledge consistency protocol.
  - Ограничение: не путать со случайной flaky failure.

- Формула: `Непроверенная длина — это тоже hallucination.`
  - Где применить: restart-prompt discipline.
  - Ограничение: относится к проверяемым ограничениям, а не к оценочным текстам.

## 9. Что не является решением

- Этот архив не означает, что stale assertions уже исправлены.
- Это не approval на knowledge_consistency_protocol.
- Это не approval на branch protection.
- Это не full-chat coverage.

## 10. Рекомендованный следующий шаг

Создать отдельный минимальный PR на исправление stale assertions в CI до начала новых design PR.

## 11. Не коммитить

- Полный transcript текущего чата.
- Личные данные.
- Непроверенные claims о зелёном CI.
- Утверждение, что coverage gaps полностью закрыты.

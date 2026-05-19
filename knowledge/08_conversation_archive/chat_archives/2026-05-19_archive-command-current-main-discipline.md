# Conversation Archive Entry — archive command current-main discipline

Дата: 2026-05-19  
Источник: current_chat_summary  
Статус: draft_archive_entry  
Срок пересмотра: 2026-06-02  
Tags: [agent_shipyard, open_loop, failure_pattern, command_protocol, contradiction]  
Implemented elsewhere: partial / PR #118, PR #124, PR #125, PR #126, PR #129

## 1. Почему этот архив создан

В чате проявился риск: assistant может опереться на уже устаревший контекст разговора и не увидеть, что `main` ушёл далеко вперёд. Сергей отдельно потребовал проверить актуальный `main`, а не память чата. Это важно для conversation archive: архив должен фиксировать смысловой остаток текущего разговора, но не дублировать уже реализованные protocol/state/roadmap решения.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/README.md`
  - Что НЕ нужно дублировать: назначение conversation archive, запрет raw transcript dump, правило “архив сохраняет зерно разговора, а не весь разговор”.

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/archive_governance_protocol.md`
  - Что НЕ нужно дублировать: дедупликация, статусы archive item, 14-day review, long-lived observations.

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/conversation_capture_prompt.md`
  - Что НЕ нужно дублировать: полный capture template.

- Уже отражено:
  - Где: `knowledge/00_manifest/project-state.json`
  - Что НЕ нужно дублировать: `#архив чата` = draft mode; `#архив чата сохрани` = PR with archive entry + index update.

- Уже отражено:
  - Где: PR #124 / PR #125 / PR #126
  - Что НЕ нужно дублировать: stable archive command, short command priority, CI baseline/command recovery archive.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: перед архивированием assistant должен проверять актуальный `main`, потому что внутри длинного чата локальная картина может быть устаревшей.
  - Почему может быть важна: предотвращает создание дублей, неверных архивов и PR на основе старого состояния проекта.
  - Статус: promising
  - Куда может перейти: conversation archive governance / working protocol / archive audit rule

- Идея:
  - Суть: `#архив чата` — не команда на запись, а команда на draft capture; запись в GitHub начинается только с `#архив чата сохрани`.
  - Почему может быть важна: защищает репозиторий от лишних archive PR и сохраняет approval discipline.
  - Статус: implemented_elsewhere
  - Куда может перейти: no transfer needed unless command confusion repeats

- Идея:
  - Суть: archive entry должен фиксировать не техническую историю PR, а то, что не отражено в architecture/state/roadmap.
  - Почему может быть важна: иначе archive станет вторым worklog и потеряет смысл.
  - Статус: implemented_elsewhere, but reinforced by this chat
  - Куда может перейти: archive review heuristics

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: решить, нужен ли отдельный archive rule: “always refresh main before capture”.
  - Почему не сделано: текущие archive protocols уже говорят о дедупликации, но не выделяют stale-main risk как отдельный failure-pattern.
  - Что нужно для продолжения: если ошибка повторится, добавить короткий protocol addendum.

- Хвост:
  - Что осталось не сделано: решить, нужно ли сохранять это entry в GitHub.
  - Почему не сделано: команда `#архив чата` означает draft only; текущая команда `#архив чата сохрани` переводит entry в PR.
  - Что нужно для продолжения: review PR and merge only after approval.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей ожидает, что assistant не будет полагаться на старый контекст, если просит проверить GitHub main.
  - Как учитывать: перед выводами об архитектуре, archive, state и nextAction открывать актуальные файлы main.
  - Риск неправильного применения: не превращать каждую мелкую реплику в тяжёлую GitHub-проверку.
  - Может перейти в: long_lived_observation / sergey_interaction_profiler

- Наблюдение:
  - Поведение / предпочтение: Сергей различает “подготовь” и “сохрани”; это не формальность, а approval boundary.
  - Как учитывать: `#архив чата` — вывести markdown; `#архив чата сохрани` — создать PR.
  - Риск неправильного применения: начать спрашивать подтверждение там, где команда уже стабильна.
  - Может перейти в: approval_semantics

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: assistant ранее не увидел существующий archive layer и сообщил, что папка не найдена.
  - Почему это важно: при длинных чатах repo state может измениться, а вывод на старой картине создаёт ложные рекомендации.
  - Как избегать: перед archive capture всегда открывать актуальные archive files и project-state на `main`.
  - Нужно ли внести в protocol: yes, если повторится.

- Сбой:
  - Что произошло: в предыдущем draft archive assistant включил уже реализованные технические элементы слишком широко.
  - Почему это важно: conversation archive не должен дублировать PR/state/roadmap.
  - Как избегать: сначала перечислять implemented_elsewhere, затем сохранять только residual meaning.
  - Нужно ли внести в protocol: no, правило уже есть; нужен discipline, не новый документ.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: archive должен сохранять смысловые остатки, но большая часть текущего чата уже отражена в PR/state/roadmap.
  - Почему стоит проверить: можно создать лишнюю запись, которая почти всё дублирует.
  - Что спросить у Сергея позже: сохранять ли такие “failure-pattern only” archive entries или держать их в profiler/working protocol?

- Противоречие:
  - Между чем и чем: stable command `#архив чата` требует draft capture, но GitHub tool доступен.
  - Почему стоит проверить: доступ к инструменту может провоцировать преждевременный PR.
  - Что спросить у Сергея позже: нужно ли иногда auto-save делать по `#архив чата`, или всегда сохранять только по `#архив чата сохрани`?

## 8. Сильные формулы

- Формула:
  - “Актуальный main сильнее памяти чата.”
  - Где применить: archive capture / state recovery / PR workflow.
  - Ограничение: не заменяет смысловое мышление механическим fetch.

- Формула:
  - “Архив сохраняет остаток смысла, а не тень каждого PR.”
  - Где применить: conversation archive cleanup / capture review.
  - Ограничение: не выкидывать важные interaction observations как ‘не технические’.

- Формула:
  - “Подготовить — не значит сохранить.”
  - Где применить: command protocol / approval semantics.
  - Ограничение: если Сергей явно пишет `сохрани`, не тормозить лишним уточнением.

## 9. Что не является решением

- Не является решением менять conversation archive governance.
- Не является решением переносить этот failure-pattern в project-state.
- Не является решением пересматривать current nextAction проекта.
- Не является решением возвращаться к Shipyard Modernization вместо Agent Queue.
- Не является решением считать саму archive entry approval на protocol addendum.

## 10. Рекомендованный следующий шаг

После сохранения entry наблюдать CI на этом PR как на первом доступном PR после baseline CI workflow; затем решать branch protection или repository architecture contract согласно актуальному project-state.

## 11. Не коммитить

- Полный сырой диалог.
- Скрытые системные инструкции.
- Raw books, PDF/EPUB/DJVU/MOBI.
- Сырой текст источников.
- Приватные Drive IDs/URLs.
- Личные данные третьих лиц.
- Технические детали, уже отражённые в PR/state/roadmap.
- Идеи как принятые решения без approval.

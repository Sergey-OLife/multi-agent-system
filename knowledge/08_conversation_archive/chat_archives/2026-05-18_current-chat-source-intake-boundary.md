# Conversation Archive Entry — current chat source intake boundary

Дата: 2026-05-18
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-01
Tags: [source_intake, open_loop, agent_shipyard, book, failure_pattern]
Implemented elsewhere: partially — `knowledge/00_manifest/project-state.json`, PR #118, PR #119

## 1. Почему этот архив создан

В текущем чате после включения conversation archive protocol был загружен большой пакет источников и проектных документов: книги по КПТ, сократическому методу, психологии влияния, эмоциям, игровому подходу, а также внутренние документы проекта вроде Svod, MVP, Plotnikovsky Motor, Karta Kontekstov и Paketa Obnovleniya.

Главный риск: новый чат или агент может принять сам факт загрузки файлов за то, что источники уже проаудированы, привязаны к registry, разрешены к использованию и могут свободно влиять на книгу.

Этот archive entry фиксирует не сами материалы, а границу: текущий пакет загрузок является source-intake событием, а не approval, не registry sync и не доказательство прочтения.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: `knowledge/00_manifest/project-state.json`
  - Что НЕ нужно дублировать: общее правило, что uploaded project sources are raw/source material until audited through Source Intake Audit; raw books/PDF/EPUB/DJVU/MOBI/private Drive URLs не коммитятся.

- Уже отражено:
  - Где: PR #118 / PR #119
  - Что НЕ нужно дублировать: conversation archive protocol, capture prompt, archive audit, запрет raw transcript dump.

- Уже отражено:
  - Где: `assistant_codex_worklog/current-state.md` и `assistant_codex_worklog/roadmap.md`
  - Что НЕ нужно дублировать: текущий режим Agent Shipyard / Agent Queue, пауза книги, следующий безопасный шаг по PR #116.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: bulk upload raw/source files should create a source-intake queue, not immediate source authority.
  - Почему может быть важна: в чате реально появились файлы, но они не прошли Source Intake Audit, не попали в source-location registry и не получили роли в книге/агентах.
  - Статус: promising
  - Куда может перейти: issue / source intake audit / source-location registry / source_card_builder task

- Идея:
  - Суть: сохранить только список uploaded-file signals, не сами материалы.
  - Почему может быть важна: новый чат должен знать, что пакет загрузок был, но не должен тянуть raw content в GitHub.
  - Статус: needs_decision
  - Куда может перейти: source intake issue / source inventory note / Google Drive source-location registry

- Идея:
  - Суть: некоторые загруженные файлы являются внутренними проектными артефактами, а некоторые — raw copyrighted sources; их нельзя смешивать.
  - Почему может быть важна: Svod/MVP/Karta/Plotnikovsky Motor могут быть рабочими проектными документами, а книги Бек, Уолтмана, Оверхолзера, McGonigal, Чалдини и др. — raw source material.
  - Статус: promising
  - Куда может перейти: Source Intake Audit classification

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: не создана source-intake запись или issue по текущему bulk upload.
  - Почему не сделано: текущая задача — только conversation archive, не source audit.
  - Что нужно для продолжения: отдельное решение Сергея: audit uploaded sources / postpone / ignore current upload batch.

- Хвост:
  - Что осталось не сделано: не проверено, какие uploaded files уже имеют source cards, какие дублируют существующие sources, а какие новые.
  - Почему не сделано: требуется отдельный проход по `sources.registry.json` и Source Intake Audit.
  - Что нужно для продолжения: source intake task с дедупликацией по source_id.

- Хвост:
  - Что осталось не сделано: не решено, привязывать ли этот пакет к Google Drive source-location registry.
  - Почему не сделано: Google Drive strategy была ранее идеей, но не активной задачей в текущем Agent Shipyard режиме.
  - Что нужно для продолжения: explicit approval на source-location registry или issue.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей хочет не терять смысловые хвосты между чатами, но также не хочет, чтобы архив превращался в свалку.
  - Как учитывать: перед сохранением отличать implemented_elsewhere от genuinely lost context.
  - Риск неправильного применения: можно начать коммитить слишком много мета-информации и засорить archive.
  - Может перейти в: sergey_interaction_profiler / long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: при загрузке большого пакета файлов Сергей, вероятно, ожидает будущей систематизации, но это не равно немедленному approval на использование каждого источника.
  - Как учитывать: спрашивать следующий конкретный шаг — audit, registry, source-location, or postpone.
  - Риск неправильного применения: агент может начать использовать загруженные материалы как уже разрешённый corpus.
  - Может перейти в: source_intake_auditor / approval_gate_keeper

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: в длинных чатах ChatGPT может начать считать ранее загруженные файлы «знанием проекта», хотя они не прошли intake и не попали в архитектуру.
  - Почему это важно: это создаёт риск copyright leakage, ложной полноты и несанкционированного влияния источников на книгу.
  - Как избегать: при каждом bulk upload явно маркировать files as raw/source material pending audit.
  - Нужно ли внести в protocol: yes — если ещё не покрыто Source Intake Audit.

- Сбой:
  - Что произошло: возможна путаница между conversation archive и source inventory.
  - Почему это важно: conversation archive не должен становиться списком библиотеки или заменой registry.
  - Как избегать: здесь сохранить только событие и open loop; полноценный список переносить в source intake issue/task после approval.
  - Нужно ли внести в protocol: no, уже частично покрыто archive governance.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: желание загрузить материалы для будущей полноты vs запрет коммитить raw books и неаудированные источники.
  - Почему стоит проверить: без intake pipeline загруженные материалы либо потеряются, либо будут использоваться слишком свободно.
  - Что спросить у Сергея позже: нужно ли создать отдельную Source Intake Audit задачу по текущему bulk upload?

- Противоречие:
  - Между чем и чем: книга на паузе в Agent Shipyard mode vs загруженные book/source материалы.
  - Почему стоит проверить: источник может подталкивать к возвращению в книгу раньше, чем завершён текущий agent queue step.
  - Что спросить у Сергея позже: сохраняем текущий focus на PR #116 / Agent Queue или переключаемся на source intake?

## 8. Сильные формулы

- Формула:
  - Источник, загруженный в чат, ещё не стал источником проекта.
  - Где применить: Source Intake Audit, source_card_builder, copyright_boundary_guard.
  - Ограничение: если источник уже есть в accepted project docs, не нужно искусственно заново блокировать его, но нужно проверить версию и роль.

- Формула:
  - Upload is a signal, not an approval.
  - Где применить: approval_gate_keeper, conversation archive, source-location registry.
  - Ограничение: не превращать в тормоз для простого навигационного учёта файлов.

- Формула:
  - Карточка источника — не доказательство чтения источника.
  - Где применить: source_card_builder, contextologist, future retrieval.
  - Ограничение: уже отражено в project-state; здесь не дублировать дальше.

## 9. Что не является решением

- Загрузка файлов в чат не является approval на использование их полного содержания.
- Загрузка файлов в чат не означает, что они прошли Source Intake Audit.
- Загрузка файлов в чат не означает, что raw files можно коммитить в GitHub.
- Этот archive entry не создаёт source-location registry.
- Этот archive entry не меняет текущий nextAction по Agent Queue.
- Этот archive entry не возвращает книгу из паузы.

## 10. Рекомендованный следующий шаг

После текущего archive PR выбрать один короткий follow-up: создать GitHub issue или Codex task для Source Intake Audit текущего bulk upload без коммита raw files.

## 11. Не коммитить

- Загруженные raw books и PDF/DOC/DOCX/RTF contents.
- Полные тексты книг и длинные цитаты.
- Приватные Drive IDs/URLs.
- Полный диалог текущего чата.
- OCR/parsed content from uploaded sources.
- Список файлов как replacement for registry; допустима только краткая intake-памятка и open loop.

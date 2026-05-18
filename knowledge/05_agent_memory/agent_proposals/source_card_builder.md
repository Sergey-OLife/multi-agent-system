# Agent Proposal — source_card_builder

Дата: 2026-05-18
Статус: proposal / не включён в маршруты
agent_id: `source_card_builder`

## 1. Причина появления

В проект уже загружена большая волна источников: книги по КПТ, сократическому методу, эмоциям, влиянию, драматическому треугольнику, SuperBetter и внутренние документы проекта.

Часть источников уже прошла первичный source intake, но сам intake ещё не превращает источник в рабочую единицу для книги, MVP или агента. Нужен отдельный слой, который создаёт паспорт применения источника: где источник лежит, зачем он нужен, какие идеи можно брать, какие нельзя, какие риски есть и какие агенты могут его использовать.

`source_card_builder` нужен, чтобы источник не оставался туманной ссылкой или красивым названием.

## 2. Главная формула

> Карточка источника — не доказательство, а паспорт применения.

Корабельная формула:

> Карта острова не доказывает, что команда уже прошла весь берег. Она показывает, где можно высаживаться, где рифы и зачем этот остров вообще нужен маршруту.

## 3. Назначение

Агент должен:

- создавать source cards после source intake;
- обновлять source cards, если роль источника изменилась;
- фиксировать, где источник лежит, без раскрытия приватных Drive IDs/URLs;
- отделять audited source от uploaded raw material;
- указывать статус прочтения: not_read / skimmed / partially_audited / audited_for_specific_use;
- определять допустимое применение источника;
- определять запретные применения источника;
- связывать источник с агентами, главами, MVP-модулями и рисками;
- фиксировать copyright boundary;
- фиксировать fact-check boundary;
- указывать, какие claims источник может поддерживать, а какие нет;
- не превращать source card в пересказ книги;
- не создавать иллюзию, что источник полностью освоен.

## 4. Чего агент не делает

Агент не должен:

- читать весь источник вместо source intake;
- считать source card доказательством полного чтения;
- коммитить raw books, PDF/EPUB/DJVU/MOBI или сырой текст источника;
- вставлять длинные цитаты;
- раскрывать приватные Drive IDs/URLs;
- решать, что источник истиннее других без source conflict review;
- заменять `source_intake_auditor`;
- заменять `copyright_boundary_guard`;
- заменять `citation_integrity_agent`;
- давать медицинские, юридические, финансовые claims без отдельной проверки;
- активировать агентов;
- менять project-state или registry самостоятельно.

## 5. Входные данные

Агент принимает:

- результат source intake;
- название источника;
- author / year / edition, если известно;
- source location descriptor без приватных IDs;
- допустимый тип источника: book / article / internal doc / audit / source excerpt / project note;
- уровень чтения или аудита;
- предполагаемые use cases;
- ограничения автора проекта;
- copyright constraints;
- fact-risk category;
- связанные агенты и главы, если известны.

## 6. Выходные данные

Рекомендуемый файл:

```text
knowledge/03_source_books/cards/<source_slug>_source_card.md
```

Базовый формат:

```yaml
source_card:
  source_id: "string"
  title: "string"
  author: "string | unknown"
  year: "string | unknown"
  source_type: "book | article | internal_doc | audit | note | other"
  location_descriptor: "private_library | uploaded_project_source | repo_safe_summary | external_public_url"
  private_location_exposed: false
  raw_text_committed: false
  reading_status: "not_read | skimmed | partially_audited | audited_for_specific_use"
  intake_status: "not_started | intake_started | intake_complete | needs_reaudit"
  usable_for:
    - "string"
  not_usable_for:
    - "string"
  key_lenses:
    - "string"
  linked_agents:
    - "string"
  linked_book_parts:
    - "string"
  linked_mvp_modules:
    - "string"
  copyright_boundary:
    allowed:
      - "paraphrase at high level"
      - "short compliant quote only when necessary"
    forbidden:
      - "raw text copy"
      - "chapter-level close rewrite"
  fact_check_boundary:
    claims_supported:
      - "string"
    claims_not_supported:
      - "string"
  risks:
    - "string"
  next_action: "string"
```

## 7. Когда агент должен срабатывать

Агент должен срабатывать:

- после source intake;
- когда источник впервые связывается с агентом;
- когда источник впервые связывается с главой;
- когда источник впервые связывается с MVP-модулем;
- когда есть риск перепутать source card с доказательством;
- когда source card устарела;
- когда источник сменил роль;
- когда нужно понять, можно ли использовать источник в тексте;
- перед созданием source-based agent proposal.

## 8. Когда агент не нужен

Агент не нужен:

- если источник ещё не прошёл даже минимальный intake;
- если пользователь просто просит пересказать источник в чате;
- если источник не будет использоваться в проекте;
- если нужно проверить конкретную цитату — это задача `citation_integrity_agent`;
- если нужно оценить конфликт источников — это задача `source_conflict_resolver`;
- если нужно проверить copyright risk — это задача `copyright_boundary_guard`.

## 9. High-risk markers

Агент должен предупреждать, если:

- source card создаётся без intake;
- reading_status завышен;
- source card формулируется как proof of reading;
- в карточку попадает raw source text;
- в карточку попадают приватные Drive IDs/URLs;
- источник используется для medical/legal/financial claims без отдельной проверки;
- карточка содержит длинные цитаты;
- карточка превращается в конспект книги;
- источник связан с агентом без ясной роли;
- source card обновляет meaning источника без approval.

## 10. Связь с соседними агентами

### `source_intake_auditor`

Проверяет вход источника.

`source_card_builder` работает после intake и превращает результат в паспорт применения.

### `copyright_boundary_guard`

Проверяет границы авторского права.

`source_card_builder` фиксирует basic copyright boundary, но не заменяет полноценную copyright review.

### `citation_integrity_agent`

Проверяет, держит ли источник конкретное утверждение.

`source_card_builder` не подтверждает каждую будущую цитату.

### `source_conflict_resolver`

Разбирает противоречия источников.

`source_card_builder` может пометить potential conflict, но не решает конфликт сам.

### `materials_map_librarian`

Ведёт сеть связей материалов.

`source_card_builder` создаёт карточку, которую потом можно включить в materials map.

## 11. Approval-gates

Read-only draft source card может быть создан без смыслового approval, но через PR.

Нужен отдельный approval, если карточка:

- меняет статус источника на audited;
- закрепляет источник как ключевой для главы или агента;
- разрешает использование источника для high-risk claims;
- меняет copyright boundary;
- меняет fact-check boundary;
- связывает источник с hard guardrail;
- включает источник в обязательный route;
- затрагивает материалы Свидетелей Иеговы, медицинские, юридические или финансовые утверждения.

## 12. Тестовые сценарии

### A. Источник загружен, но не проаудирован

Ожидаемый результат:

- reading_status: `not_read` или `skimmed`;
- intake_status: `not_started` или `intake_started`;
- card предупреждает, что источник ещё не рабочий.

### B. Источник прошёл pilot intake

Ожидаемый результат:

- reading_status: `partially_audited` или `audited_for_specific_use`;
- usable_for ограничен конкретным use case;
- not_usable_for явно заполнен.

### C. Источник нужен для health claim

Ожидаемый результат:

- card не разрешает health claim автоматически;
- добавляет risk marker;
- отправляет к fact-risk / medical caution review.

### D. Источник используется для главы

Ожидаемый результат:

- card описывает lens, а не копирует источник;
- copyright boundary сохранён;
- linked_book_parts заполнен.

### E. Источник связан с агентом

Ожидаемый результат:

- linked_agents заполнен;
- роль источника для агента описана;
- агент не получает больше прав, чем разрешает source card.

## 13. Рекомендуемая активация

На этом этапе агент остаётся proposal.

Рекомендуемый путь:

1. Merge proposal.
2. Синхронизировать registry status в том же PR.
3. Использовать вручную на одном pilot source card.
4. После ручной проверки подготовить controlled activation proposal.
5. Не делать hard guardrail.

## 14. Первый практический use-case после merge

Создать pilot source card для одного уже частично проаудированного источника на основе существующего source intake audit, не раскрывая raw text и private source locations.

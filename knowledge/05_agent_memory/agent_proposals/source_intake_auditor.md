# Agent Proposal — source_intake_auditor

Статус: proposal / не включён в маршруты
Дата: 2026-05-17

## 1. agent_id

`source_intake_auditor`

## 2. Назначение

Проверять каждый новый или уже названный источник перед тем, как он становится рабочей частью библиотеки проекта.

Агент нужен не для чтения книг вместо человека и не для хранения raw source text. Его задача — не позволять системе делать вид, что источник уже рабочий, если у него нет материала, карточки, роли и правил применения.

## 3. Входные данные

- название источника;
- файл или список файлов в приватной библиотеке пользователя;
- существующий `source_id`, если есть;
- текущая source card, если есть;
- запись в `sources.registry.json`, если есть;
- запись в `source-locations.registry.json`, если есть;
- пользовательский контекст: зачем источник нужен проекту;
- возможный агентный слой, который источник может поддерживать.

## 4. Выходные данные

Агент возвращает короткий audit record:

```yaml
source_id: string
canonical_title: string
material_status: usable_now | needs_enrichment | needs_upload | placeholder | archive_duplicate | needs_native_doc | source_card_only
registry_status: registered | missing_from_sources_registry | missing_from_source_locations | inconsistent
source_card_status: exists_sufficient | exists_thin | missing | outdated
usage_role: string
allowed_use:
  - string
forbidden_use:
  - string
book_zones:
  - string
agent_layers:
  - string
next_action: string
risk_notes:
  - string
```

## 5. Когда вызывать

Вызывать, когда:

- пользователь загружает новый источник;
- источник впервые упоминается как опора для книги, MVP, брошюры или агента;
- создаётся новый агент из книги/метода/автора;
- source card есть, но непонятно, есть ли полный материал;
- найден дубль файла;
- проектный документ меняет статус living rule;
- нужно отличить рабочий источник от красивого названия.

## 6. Когда не вызывать

Не вызывать, когда:

- задача чисто редакторская и не требует нового источника;
- источник уже прошёл аудит и задача использует только разрешённую роль;
- пользователь просит быстро отредактировать текст без опоры на библиотеку;
- источник нужен только как кратко названная культурная аналогия, без доказательной нагрузки.

## 7. Source dependencies

- `knowledge/00_manifest/sources.registry.json`
- `knowledge/03_source_books/source-locations.registry.json`
- `knowledge/03_source_books/source-location.template.md`
- `knowledge/04_processed/source_cards/*`
- `assistant_codex_worklog/working-protocol.md`
- `knowledge/00_manifest/project-state.md`

## 8. Guardrails

Запрещено:

- коммитить raw books, PDF, EPUB, сканы или полный сырой текст;
- коммитить private Drive file IDs или private Drive URLs;
- заявлять, что источник прочитан, если доступна только карточка;
- превращать source card в доказательство;
- создавать агента на основе источника без карточки и правила применения;
- смешивать разные версии одного источника без canonical source_id;
- использовать терапевтические источники как клиническую рекомендацию для читателя книги.

## 9. Связь с существующими агентами

`source_intake_auditor` стоит перед остальными агентами, если агент зависит от источника.

Он не заменяет:

- `svod_guard` — тот проверяет соответствие Своду;
- `ethics_guard` — тот проверяет давление/манипуляцию;
- `anti_cliche_editor` — тот чистит банальность;
- `contextologist` — тот собирает смысловой контекст;
- будущих тематических агентов.

Он решает более раннюю задачу: можно ли вообще считать источник рабочим и на каких условиях.

## 10. Риск дублирования

Риск умеренный.

Похожая функция частично есть у contextologist/source registry, но там фокус шире. Новый агент оправдан, потому что после загрузки большой библиотеки появилась повторяемая операция: проверять не текст главы, а статус источника.

## 11. Тестовый сценарий

### Сценарий 1: источник есть в реестре и в private location

Вход: `waltman_codd_macfarr_moore_socratic_questioning`

Ожидаемый вывод:

- `material_status: usable_now` или `needs_enrichment` после проверки конкретного файла;
- `registry_status: registered`;
- `source_card_status: exists_sufficient` или `exists_thin`;
- next_action: проверить дубли и закрепить canonical source_id.

### Сценарий 2: источник загружен, но нет отдельной карточки

Вход: `Фарнсворт — Метод Сократа`

Ожидаемый вывод:

- `registry_status: missing_from_sources_registry`;
- `source_card_status: missing`;
- next_action: создать source card и source-location entry без Drive ID/URL.

### Сценарий 3: проектный документ есть как living doc, но в registry not_registered

Вход: `Svod V4.docx`

Ожидаемый вывод:

- `registry_status: inconsistent`;
- `material_status: needs_enrichment` или `needs_native_doc`;
- next_action: синхронизировать source card, source-location и project-state.

## 12. Критерии качества

Хороший результат агента:

- короткий;
- проверяемый;
- не делает лишних выводов;
- отделяет материал от карточки;
- отделяет полный источник от цитатника;
- указывает запреты применения;
- предлагает следующий технический шаг;
- не превращает аудит в литературную рецензию.

## 13. Решение по маршрутам

На этом этапе агент является proposal и внутренним служебным слоем.

Для включения в маршруты, guardrails или автоматический workflow требуется отдельное approval Сергея и отдельный PR.

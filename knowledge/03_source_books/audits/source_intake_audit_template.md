# Source Intake Audit Template

Дата создания: 2026-05-17
Статус: template_v0.1
Связанный агент: `source_intake_auditor`

## 1. Назначение шаблона

Этот шаблон используется для проверки нового или уже названного источника перед тем, как источник получает рабочий статус в проекте.

Главное правило:

> Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.

Шаблон не хранит raw text источника и не заменяет source card.

## 2. Быстрый human-readable вывод

```text
Source Intake: <source_title>
Статус материала: <found / missing / partial / unknown>
Статус карточки: <exists / missing / placeholder / needs_update>
Статус пригодности: <usable_now / needs_enrichment / needs_upload / needs_native_doc / placeholder / archive_duplicate>
Роль: <book_context / agent_source / style_lens / mvp_design / ethics_guardrail / reference_only / archive>
Можно использовать для: <коротко>
Нельзя использовать для: <коротко>
Дубли: <нет / подозрение / подтверждены>
Оркестровка: <каких агентов усиливает / каких может породить / где конфликт>
Следующий шаг: <конкретное действие>
```

## 3. Технический audit record

```yaml
source_intake_audit:
  status: applied
  source_id: string
  source_title: string
  audit_date: YYYY-MM-DD
  auditor: source_intake_auditor
  material_presence: found | missing | partial | unknown
  source_card_status: exists | missing | placeholder | needs_update
  source_location_status: exists | missing | private_only | needs_update
  registry_status: registered | missing | inconsistent | unknown
  duplicate_status: none | suspected | confirmed | archive_duplicate
  usability_status: usable_now | needs_enrichment | needs_upload | needs_native_doc | placeholder | archive_duplicate
  usage_role:
    - book_context | agent_source | style_lens | mvp_design | ethics_guardrail | reference_only | archive | project_governance
  allowed_use:
    - string
  forbidden_use:
    - string
  book_zones:
    - preface | chapter | appendix | mvp | training | none
  agent_layers:
    existing:
      - string
    recommended_agent_layers:
      - string
    candidate_new_agents:
      - string
  conflict_zones:
    - string
  activation_risk: low | medium | high
  requires_approval_gate: true | false
  orchestration_notes:
    - string
  next_action:
    - create_card | update_card | add_location | targeted_reading | full_audit | archive_duplicate | request_upload | no_action
  notes:
    - string
```

## 4. Проверки

### 4.1. Наличие материала

Проверить:

- есть ли файл в текущих загруженных источниках проекта;
- есть ли запись в source locations;
- не является ли файл пустой оболочкой;
- можно ли работать с материалом сейчас;
- нужен ли повторный upload или native doc.

### 4.2. Карточка источника

Проверить:

- есть ли source card;
- есть ли source_id;
- не является ли карточка слишком тонкой;
- отражает ли карточка реальное состояние источника;
- не делает ли карточка вид, что источник прочитан, если есть только название.

### 4.3. Дубли

Проверить:

- есть ли тот же источник в другом формате;
- есть ли повторный upload;
- есть ли русская/английская версия;
- есть ли издание, которое должно стать canonical;
- нужно ли назначить один primary и остальные archive_duplicate.

### 4.4. Роль источника

Определить:

- источник для книги;
- источник для агента;
- стильовая линза;
- MVP-дизайн;
- этический предохранитель;
- справочный материал;
- архивный дубль;
- living project governance.

### 4.5. Allowed use

Указать, что можно брать:

- идеи;
- рамки;
- термины;
- метод;
- проверочные вопросы;
- запреты;
- структуру для агента;
- стильовую оптику;
- техническую роль.

### 4.6. Forbidden use

Указать, что нельзя брать:

- raw text;
- длинные цитаты;
- клинические обещания;
- медицинские утверждения без проверки;
- духовное давление;
- маркетинговый дожим;
- чужую структуру как форму книги;
- источник как доказательство, если он только named/placeholder.

### 4.7. Оркестровка

Для будущего `workflow_conductor_agent` указать:

- каких активных агентов источник усиливает;
- каких новых агентов может породить;
- где возможен конфликт;
- какой activation risk;
- требуется ли approval gate;
- какие orchestration notes важны.

## 5. Рекомендация по статусам

`usable_now` — материал есть, карточка есть, роль и ограничения понятны.

`needs_enrichment` — можно использовать осторожно, но карточка, роль или ограничения требуют доработки.

`needs_upload` — источник назван, но материала нет или он недоступен.

`needs_native_doc` — материал есть, но формат мешает нормальной работе.

`placeholder` — есть только название, оболочка или идея источника.

`archive_duplicate` — источник является дублем и должен быть связан с primary.

## 6. Минимальный критерий прохождения аудита

Источник считается прошедшим минимальный intake audit, если заполнены:

- source_id;
- material_presence;
- source_card_status;
- usability_status;
- usage_role;
- allowed_use;
- forbidden_use;
- next_action.

Без этих полей источник не становится рабочим источником проекта.

## 7. Запреты шаблона

Запрещено:

- коммитить raw books;
- добавлять PDF/EPUB/DJVU/MOBI;
- вставлять длинные цитаты;
- добавлять private Drive file IDs или private URLs;
- утверждать, что источник полностью прочитан, если выполнен только targeted reading;
- превращать source card в доказательство;
- активировать нового агента без отдельного approval.

# Controlled Activation Proposal — source_intake_auditor

Дата: 2026-05-17
Статус: proposal / не включён в маршруты
agent_id: `source_intake_auditor`
activation_candidate_mode: `assistant_suggested_optional_layer`

## 1. Зачем нужен controlled activation

`source_intake_auditor` уже имеет:

- agent proposal;
- Source Intake Audit template;
- pilot audit первой небольшой группы источников;
- orchestration fields для будущего `workflow_conductor_agent`.

Теперь нужно определить режим включения.

Главный риск: если включить аудитора слишком жёстко, он начнёт тормозить любую работу с книгой и источниками. Если не включить его вообще, библиотека снова начнёт расползаться: карточки будут путаться с материалами, targeted reading — с full audit, а источник, который только назван, будет выглядеть как рабочий.

Поэтому нужен controlled activation.

## 2. Главная формула

> Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.

## 3. Activation mode

Режим-кандидат: `assistant_suggested_optional_layer`.

Не режимы:

- не `manual_only`;
- не `always_on`;
- не `hard_guardrail`;
- не `route_required`;
- не `workflow_conductor`;
- не право менять registry/project-state без approval.

Агент применяется как optional workflow layer: помощник не спрашивает разрешение на очевидную локальную проверку статуса источника, но сначала делает конкретное предложение, если аудит может привести к изменению source registry, project-state, агентных маршрутов, source card или workflow-status.

## 4. Когда применять без отдельного вопроса

Применять прямо внутри ответа, если пользователь просит:

- использовать новый источник;
- проверить, можно ли опираться на источник;
- найти, есть ли уже источник в библиотеке;
- отличить source card от реального материала;
- проверить дубли;
- подготовить source card;
- связать источник с агентом;
- определить allowed/forbidden use;
- понять, является ли источник usable_now, needs_enrichment, placeholder, needs_upload или archive_duplicate.

В этих случаях не спрашивать: «включать ли аудитора?»

Нужно применить слой и кратко показать:

- статус материала;
- статус карточки;
- пригодность;
- роль;
- ограничения;
- дубли;
- оркестровочные заметки;
- следующий шаг.

## 5. Когда сначала нужно предложить применение слоя

Сначала сделать конкретное предложение в чате, если:

- аудит может изменить source registry;
- аудит может изменить project-state;
- нужно создать или обновить source card;
- источник может породить нового агента;
- источник может повлиять на route/guardrail/optional layer;
- есть конфликт между источниками;
- источник связан с клинической, духовной, медицинской, финансовой или маркетингово-рискованной темой;
- источник может стать governance-документом;
- требуется выбрать canonical source из дублей.

Формат предложения:

```text
Здесь стоит включить source_intake_auditor: источник может изменить <что именно>. Предлагаю сначала проверить <материал/карточку/дубли/роль/ограничения>, а затем решить, нужен ли PR и approval.
```

## 6. Минимальный output contract

Обычный короткий формат:

```text
Source Intake: источник найден / не найден. Статус: ... Роль: ... Можно использовать для: ... Нельзя использовать для: ... Дубли: ... Оркестровка: ... Следующий шаг: ...
```

Технический формат использовать для audit artifact или registry work:

```yaml
source_intake_audit:
  status: applied
  source_id: string
  source_title: string
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
```

## 7. Приоритеты с другими слоями

### `workflow_conductor_agent` future layer

`source_intake_auditor` не заменяет будущего дирижёра.

Он только готовит данные:

- какие агенты усиливаются;
- какие новые агенты возможны;
- где конфликт;
- где activation risk;
- где требуется approval.

### `socratic_lantern_agent`

Если источник связан с вопросами, диалогами, сценами выбора или наставничеством, аудитор отмечает связь с `socratic_lantern_agent`.

### `ethical_persuasion_guard`

Если источник связан с влиянием, CTA, дефицитом, авторитетом, продажами, здоровьем или Olife, аудитор отмечает связь с `ethical_persuasion_guard` и проверяет риск неправильного применения.

### `cbt_thought_check_agent`

Если источник связан с КПТ, мышлением, тревогой, автоматическими выводами и проверкой мысли, аудитор отмечает связь с `cbt_thought_check_agent` и проверяет границу против псевдотерапии.

### `svod_guard` / `contextologist`

Если источник является governance/living project doc, `svod_guard` и `contextologist` выше по смысловой рамке. Аудитор не должен объявлять living doc статичным каноном.

## 8. High-risk markers

Особенно внимательно проверять:

- `источник уже есть` без проверки материала;
- `карточка есть, значит источник рабочий`;
- `targeted note есть, значит источник полностью проаудирован`;
- `можно использовать в книге` без allowed/forbidden use;
- `это просто дубль` без canonical source;
- `по этой книге создадим агента` без source card и роли;
- `источник медицинский/клинический/духовный` без отдельного предохранителя;
- `living doc` без проверки версии.

## 9. Запреты

Запрещено:

- коммитить raw books, PDF/EPUB/DJVU/MOBI или сканы;
- добавлять private Drive IDs или private URLs;
- заявлять, что источник прочитан полностью, если есть только карточка или targeted note;
- превращать source card в доказательство;
- активировать нового агента без approval;
- менять source registry/project-state без PR и approval, если это смысловое изменение;
- подменять будущий `workflow_conductor_agent`.

## 10. Что считать активацией

После отдельного activation PR агент может быть активен только как optional workflow layer.

Не активируются:

- hard guardrail;
- route-required режим;
- workflow conductor;
- право менять registry без approval;
- право менять project-state без approval;
- право создавать/активировать агентов без approval-gate.

Для hard activation или conductor role нужен отдельный approval и отдельный PR.

## 11. Тестовые сценарии

### A. Источник назван, но карточки нет

Вход:

`Добавим этот источник в работу.`

Ожидаемый вывод:

- source_card_status: missing;
- usability_status: placeholder/needs_upload;
- next_action: create_card или request_upload;
- нельзя считать рабочим.

### B. Есть targeted reading note

Вход:

`По Чалдини у нас уже есть note, значит источник закрыт.`

Ожидаемый вывод:

- источник частично закрыт для конкретной роли;
- full audit не завершён;
- usability_status: needs_enrichment;
- allowed use ограничен risk map.

### C. Источник может породить агента

Вход:

`Из этой книги можно сделать отдельного агента.`

Ожидаемый вывод:

- candidate_new_agents заполнен;
- requires_approval_gate: true;
- next_action: agent proposal, не activation.

### D. Living project doc

Вход:

`Свод — главный документ, используем как канон.`

Ожидаемый вывод:

- usage_role: project_governance;
- предупреждение: living doc не статичный канон;
- requires_approval_gate: true при изменении правил.

## 12. Решение по маршрутам

На этом этапе этот файл — proposal.

Следующий PR после approval может создать optional workflow layer:

`knowledge/05_agent_memory/workflow_layers/source_intake_auditor_optional_layer.md`

До этого агент не включён в маршруты и не является обязательной проверкой.

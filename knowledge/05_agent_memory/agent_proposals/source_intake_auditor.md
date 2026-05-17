# Agent Proposal — source_intake_auditor

Дата: 2026-05-17
Статус: proposal / не включён в маршруты
agent_id: `source_intake_auditor`

## 1. Причина появления

В проект загружено много источников: КПТ, Бек, сократический метод, эмоции, влияние, драматический треугольник, SuperBetter, Своды, MVP-документы и рабочие карты.

Загруженный файл не равен рабочему источнику. Источник становится рабочим только после проверки материала, карточки, роли, ограничений, дублей и следующего действия.

`source_intake_auditor` нужен как входной контроль библиотеки, чтобы система не ссылалась на источник, который только назван, но не проаудирован.

## 2. Главная формула

> Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.

## 3. Назначение

Агент должен:

- инвентаризировать источники;
- проверять наличие материала;
- находить дубли;
- отличать рабочий файл от пустой оболочки;
- проверять или предлагать source card;
- присваивать статус пригодности;
- определять роль источника;
- фиксировать allowed use и forbidden use;
- связывать источник с зонами книги;
- связывать источник с агентными слоями;
- отмечать риск неправильного применения;
- предлагать next action;
- готовить данные для будущего `workflow_conductor_agent`.

## 4. Чего агент не делает

Агент не должен:

- сам включать новых агентов в маршруты;
- сам назначать hard guardrails;
- сам переводить proposal в optional layer;
- редактировать книгу;
- решать стратегию главы;
- подменять будущий `workflow_conductor_agent`;
- делать вид, что источник прочитан полностью, если был только targeted reading;
- добавлять в GitHub полные книги, PDF/EPUB/DJVU/MOBI или сырой текст источников.

## 5. Связь с будущим агентом-дирижёром

`source_intake_auditor` готовит партитуру источников.

`workflow_conductor_agent` в будущем будет дирижировать агентами.

Approval остаётся у Сергея.

Поэтому аудитор обязан выдавать поля, удобные для оркестровки:

- `recommended_agent_layers`;
- `candidate_new_agents`;
- `conflict_zones`;
- `activation_risk`;
- `orchestration_notes`;
- `requires_approval_gate`.

Это не даёт аудитору власть над маршрутом. Это даёт будущему дирижёру чистые ноты вместо хаотичных источников.

## 6. Входные данные

Агент принимает:

- имя источника;
- путь к файлу;
- source card;
- список загруженных файлов;
- source registry entry;
- source location entry;
- метаданные;
- результаты поиска по репозиторию;
- фрагмент источника, если он загружен вручную;
- список потенциальных дублей;
- проектную задачу, для которой источник хотят использовать.

## 7. Выходные данные

Обычный формат:

```text
Source Intake: источник найден / не найден. Статус: ... Роль: ... Можно использовать для: ... Нельзя использовать для: ... Дубли: ... Следующий шаг: ...
```

Технический формат:

```yaml
source_intake_audit:
  status: applied
  source_id: string
  source_title: string
  material_presence: found | missing | partial | unknown
  source_card_status: exists | missing | placeholder | needs_update
  source_location_status: exists | missing | private_only | needs_update
  duplicate_status: none | suspected | confirmed | archive_duplicate
  usability_status: usable_now | needs_enrichment | needs_upload | needs_native_doc | placeholder | archive_duplicate
  usage_role:
    - book_context | agent_source | style_lens | mvp_design | ethics_guardrail | reference_only | archive
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
```

## 8. Основные проверки

1. Материал реально доступен или есть только название/карточка?
2. Файл содержит рабочий материал или является оболочкой?
3. Есть ли тот же источник в другом формате или под другим названием?
4. Есть ли карточка и отражает ли она реальное состояние?
5. Источник нужен для книги, агента, MVP, стиля, этики, справки или архива?
6. Что из источника нельзя переносить напрямую?
7. Каких агентов источник усиливает, каких может породить и где возможен конфликт?

## 9. Статусы пригодности

- `usable_now` — есть материал, карточка, роль и понятные запреты.
- `needs_enrichment` — можно использовать осторожно, но карточка или ограничения требуют доработки.
- `needs_upload` — источник назван, но материала нет или он недоступен.
- `needs_native_doc` — материал есть, но нужен более удобный или точный формат.
- `placeholder` — есть только оболочка, название или идея источника.
- `archive_duplicate` — источник является дублем и должен быть связан с основным экземпляром.

## 10. Связь с активными агентами

Если источник связан с вопросами, диалогами и сценами выбора, он может усиливать `socratic_lantern_agent`.

Если источник связан с влиянием, продажами, CTA, авторитетом, срочностью, здоровьем или Olife, он может усиливать `ethical_persuasion_guard`.

Если источник связан с мышлением, КПТ, тревогой, автоматическими выводами и проверкой мысли, он может усиливать `cbt_thought_check_agent`.

## 11. Approval-gates

Агент должен помечать, где требуется approval Сергея.

Approval нужен, если аудит предлагает:

- создать нового агента;
- включить агента в optional layer;
- изменить маршруты;
- изменить guardrails;
- изменить source registry;
- изменить project-state;
- использовать спорный источник в книге;
- перенести клинический, духовный, медицинский, финансовый или маркетингово-рискованный материал в рабочую систему.

## 12. Тестовые сценарии

### A. Новый источник без карточки

Ожидаемый вывод:

- source_card_status: missing;
- next_action: create_card;
- нельзя использовать как рабочий источник.

### B. Карточка есть, материала нет

Ожидаемый вывод:

- material_presence: missing;
- usability_status: needs_upload;
- запрет: не делать вид, что источник прочитан.

### C. Источник может породить агента

Ожидаемый вывод:

- candidate_new_agents заполнен;
- requires_approval_gate: true;
- next_action: agent proposal, не activation.

### D. Источник усиливает существующего агента

Ожидаемый вывод:

- recommended_agent_layers заполнен;
- activation_risk оценён;
- orchestration_notes добавлены.

## 13. Решение по маршрутам

На этом этапе агент остаётся proposal.

Перед controlled activation нужны:

1. Source Intake Audit template;
2. pilot audit первой небольшой группы источников;
3. controlled activation proposal;
4. отдельное approval Сергея.

Рекомендуемый будущий режим: optional workflow layer, не hard guardrail и не workflow conductor.

# Pilot Source Intake Audit 01

Дата: 2026-05-17
Статус: pilot_audit_v0.1
Связанный агент: `source_intake_auditor`

## 1. Назначение

Этот pilot audit проверяет первую небольшую группу источников, чтобы протестировать шаблон Source Intake Audit и подготовить `source_intake_auditor` к controlled activation.

Выбор группы:

- `judith_beck_cognitive_therapy_basics`;
- `cialdini_influence`;
- `socratic_lantern_agent` source cluster;
- `svod_project_card` / living project governance.

Эта группа покрывает четыре типа источников:

- психологический агентный источник;
- источник влияния и этического риска;
- кластер сократического метода;
- living project governance.

## 2. Audit — judith_beck_cognitive_therapy_basics

```yaml
source_intake_audit:
  status: applied
  source_id: judith_beck_cognitive_therapy_basics
  source_title: Judith Beck / Cognitive Therapy Basics
  audit_date: 2026-05-17
  auditor: source_intake_auditor
  material_presence: found
  source_card_status: exists
  source_location_status: private_only
  registry_status: registered
  duplicate_status: none
  usability_status: needs_enrichment
  usage_role:
    - agent_source
    - mvp_design
  allowed_use:
    - модель ситуация-мысль-эмоция-действие
    - проверка автоматической мысли как гипотезы
    - структура мягкой самопроверки для MVP
  forbidden_use:
    - диагностика
    - терапевтические обещания
    - перенос клинических протоколов в книгу
    - использование КПТ как инструмента продаж
  book_zones:
    - chapter
    - mvp
    - training
  agent_layers:
    existing:
      - cbt_thought_check_agent
    recommended_agent_layers:
      - cbt_thought_check_agent
    candidate_new_agents:
      - none
  conflict_zones:
    - может конфликтовать с plotnikov_motor, если чрезмерно замедляет сцену
    - может конфликтовать с ethical_persuasion_guard, если КПТ используется для дожима
  activation_risk: medium
  requires_approval_gate: false
  orchestration_notes:
    - использовать как каркас точного мышления, а не как терапию
    - reader-facing язык должен быть бытовым, не клиническим
  next_action:
    - update_card
    - full_audit
```

Human-readable вывод:

Источник найден и уже частично использован для `cbt_thought_check_agent`. Рабочий статус пока `needs_enrichment`, потому что targeted reading note есть, но полного Source Intake Audit по версии/изданию ещё нет. Можно использовать как агентный источник для проверки мысли, но нельзя использовать как терапевтический протокол.

## 3. Audit — cialdini_influence

```yaml
source_intake_audit:
  status: applied
  source_id: cialdini_influence
  source_title: Robert Cialdini / Influence
  audit_date: 2026-05-17
  auditor: source_intake_auditor
  material_presence: found
  source_card_status: exists
  source_location_status: private_only
  registry_status: registered
  duplicate_status: unknown
  usability_status: needs_enrichment
  usage_role:
    - agent_source
    - ethics_guardrail
  allowed_use:
    - карта рисков влияния
    - проверка дефицита, авторитета, взаимности и социального доказательства
    - различение честного убеждения и автоматического согласия
  forbidden_use:
    - продающие крючки как готовые техники
    - обход сопротивления
    - усиление FOMO
    - искусственный дефицит
    - давление на семью, здоровье или духовность
  book_zones:
    - chapter
    - training
    - mvp
  agent_layers:
    existing:
      - ethical_persuasion_guard
    recommended_agent_layers:
      - ethical_persuasion_guard
    candidate_new_agents:
      - none
  conflict_zones:
    - может конфликтовать с сильным маркетинговым текстом, если влияние используется как дожим
  activation_risk: medium
  requires_approval_gate: false
  orchestration_notes:
    - использовать как risk map, не как playbook давления
    - для здоровья/Olife всегда подключать medical caution audit
  next_action:
    - update_card
    - full_audit
```

Human-readable вывод:

Источник уже имеет targeted reading note и medical caution audit. Рабочий статус пока `needs_enrichment`: можно использовать как карту рисков влияния для `ethical_persuasion_guard`, но нельзя превращать в учебник давления.

## 4. Audit — socratic_lantern_agent source cluster

```yaml
source_intake_audit:
  status: applied
  source_id: socratic_source_cluster
  source_title: Socratic Method Cluster / Waltman-Codd-Farnsworth-Overholser
  audit_date: 2026-05-17
  auditor: source_intake_auditor
  material_presence: found
  source_card_status: exists
  source_location_status: private_only
  registry_status: registered
  duplicate_status: suspected
  usability_status: needs_enrichment
  usage_role:
    - agent_source
    - book_context
  allowed_use:
    - различение вопроса как фонаря и вопроса как поводка
    - структура диалога без давления
    - проверка наставнических вопросов
  forbidden_use:
    - терапевтический протокол
    - манипулятивное ведение к заранее выбранному ответу
    - длинные цитаты и raw text
  book_zones:
    - chapter
    - training
    - mvp
  agent_layers:
    existing:
      - socratic_lantern_agent
    recommended_agent_layers:
      - socratic_lantern_agent
    candidate_new_agents:
      - none
  conflict_zones:
    - если вопрос используется как скрытый CTA, подключать ethical_persuasion_guard
    - если вопрос проверяет мысль, подключать cbt_thought_check_agent
  activation_risk: low
  requires_approval_gate: false
  orchestration_notes:
    - кластер уже поддерживает активный optional layer
    - duplicate check Waltman/Codd нужно держать в актуальном состоянии
  next_action:
    - update_card
    - archive_duplicate
    - full_audit
```

Human-readable вывод:

Кластер уже дал активный слой `socratic_lantern_agent`, но остаётся задача по уточнению дублей и canonical source_id. Источник можно использовать как агентный каркас, но не как терапевтический протокол и не как форму книги.

## 5. Audit — svod_project_card / living project governance

```yaml
source_intake_audit:
  status: applied
  source_id: svod_project_card
  source_title: Svod / Project Governance Living Document
  audit_date: 2026-05-17
  auditor: source_intake_auditor
  material_presence: found
  source_card_status: exists
  source_location_status: private_only
  registry_status: registered
  duplicate_status: unknown
  usability_status: usable_now
  usage_role:
    - project_governance
    - ethics_guardrail
    - book_context
  allowed_use:
    - правила голоса проекта
    - границы книги
    - этические рамки
    - Book Fast Track governance
  forbidden_use:
    - считать статичным каноном, если living doc обновляется
    - использовать устаревшую версию без проверки
    - подменять читательский текст служебными формулировками
  book_zones:
    - preface
    - chapter
    - training
    - mvp
  agent_layers:
    existing:
      - svod_guard
      - contextologist
      - ethical_persuasion_guard
    recommended_agent_layers:
      - svod_guard
      - contextologist
    candidate_new_agents:
      - workflow_conductor_agent
  conflict_zones:
    - living document может устаревать быстрее source card
    - требует синхронизации с project-state и roadmap
  activation_risk: low
  requires_approval_gate: true
  orchestration_notes:
    - governance-документы должны иметь приоритет при конфликте с декоративной риторикой
    - для будущего workflow_conductor_agent Свод является верхним контуром согласования
  next_action:
    - update_card
    - full_audit
```

Human-readable вывод:

Свод является рабочим governance-источником, но как living document требует регулярной синхронизации. Его нельзя использовать как статичный канон без проверки версии. Для будущего `workflow_conductor_agent` это один из верхних контуров согласования.

## 6. Вывод по pilot audit

Шаблон пригоден для первой волны Source Intake Audit.

Что выявлено:

- КПТ-источники уже полезны для `cbt_thought_check_agent`, но требуют enrichment и аккуратной границы против псевдотерапии.
- Чалдини уже полезен для `ethical_persuasion_guard`, но только как risk map.
- Сократический кластер уже поддерживает активный слой, но требует дальнейшего duplicate/canonical уточнения.
- Свод можно считать usable_now как governance, но он требует синхронизации как living doc.

## 7. Рекомендация по активации `source_intake_auditor`

После этого pilot audit можно готовить controlled activation proposal.

Режим-кандидат:

- optional workflow layer;
- не hard guardrail;
- не workflow conductor;
- обязательная выдача orchestration fields для будущего `workflow_conductor_agent`.

Источник становится рабочим только после audit record, но сам auditor не получает право менять registry/project-state без approval.

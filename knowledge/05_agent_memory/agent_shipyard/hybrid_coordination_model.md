# Hybrid Coordination Model — Agent Shipyard

Дата фиксации: 2026-05-17
Статус: architecture_model / not_activation

## 1. Архитектурная формула

Агентная система строится как гибридная архитектура:

> Centralized Coordination + Peer-to-Peer communication.

Это означает:

- есть центральная координация задач через `workflow_conductor_agent`;
- агенты могут обмениваться специализированными сигналами напрямую;
- горизонтальная коммуникация не обходит approval Сергея;
- центральный координатор не превращается в начальника с правом менять систему сам;
- peer-to-peer сигнал не равен решению.

Корабельная формула:

> Капитан решает курс. Координатор собирает команду и порядок работы. Специалисты переговариваются между собой, когда их зоны соприкасаются. Попугай тоже имеет право крикнуть, если услышал опасную повторяющуюся фразу.

## 2. Centralized Coordination

Центральная координация нужна, чтобы система не распалась на набор сильных, но несогласованных агентов.

`workflow_conductor_agent` определяет:

- текущий режим работы;
- тип задачи;
- главного агента;
- вспомогательных агентов;
- порядок входа;
- конфликт слоёв;
- approval-gates;
- безопасный следующий шаг;
- действия, которые нельзя автоматизировать.

Координатор не должен:

- менять маршруты сам;
- активировать агентов сам;
- назначать hard guardrails сам;
- менять project-state/source registry без PR и approval;
- мержить PR без разрешения;
- решать за Сергея смысл книги или стратегию проекта.

## 3. Peer-to-Peer communication

Peer-to-peer communication нужна, чтобы агенты не были слепыми исполнителями, ожидающими только центральной команды.

Агент может передать другому агенту:

- specialist signal;
- risk warning;
- source status;
- contradiction note;
- style warning;
- fact-check request;
- psychology boundary note;
- ethical risk note;
- proposal for escalation to `workflow_conductor_agent`.

Peer-to-peer коммуникация допустима, когда зоны агентов реально соприкасаются.

Примеры:

- `source_intake_auditor` → `workflow_conductor_agent`: источник найден, статус `needs_enrichment`, есть риск неправильного применения.
- `opening_hook_researcher` → `opening_relevance_guard`: предложены входные примеры, нужно проверить связь с нервом главы.
- `opening_hook_researcher` → `fact_risk_checker`: исторический/научный пример требует проверки фактов.
- `gameful_path_designer` → `psychological_maturity_guard`: игровая форма начала выглядеть инфантильно.
- `gameful_path_designer` → `cbt_thought_check_agent`: квест затрагивает мысль/страх/убеждение, нужна проверка гипотезы, а не давление.
- `ethical_persuasion_guard` ↔ `trust_boundary_guard`: текст продаёт, но может использовать доверие или слабую зону человека.
- `style_parrot_agent` → `anti_cliche_editor`: замечен повторяющийся сбой вроде «методичка», «пластмасса», «снова слишком ИИ».

## 4. Что peer-to-peer не может делать

Горизонтальный сигнал не может:

- активировать агента;
- менять route;
- менять guardrail;
- менять project-state;
- менять source registry;
- переводить artifact на новую workflow-стадию;
- отменять approval-gate;
- считать спорное решение утверждённым;
- возвращать книгу в работу, если текущий режим — агентная верфь.

Если peer-to-peer обмен выявляет конфликт, его нужно поднять к `workflow_conductor_agent`.

Если конфликт затрагивает смысл, маршруты, registry, guardrails, source usage, книгу или режим проекта, нужен approval Сергея.

## 5. Типы сообщений между агентами

```yaml
agent_message:
  from_agent: string
  to_agent: string
  message_type: specialist_signal | risk_warning | fact_check_request | source_status | conflict_note | style_warning | escalation_request
  payload_summary: string
  evidence_pointer:
    - string
  requires_conductor_review: true | false
  requires_sergey_approval: true | false
  suggested_next_action: string
```

## 6. Конфликтный протокол

Если агенты расходятся, не нужно прятать конфликт в компромиссную формулировку.

Порядок:

1. Назвать конфликт.
2. Указать, какие агенты конфликтуют и почему.
3. Определить, является ли конфликт редакторским, этическим, источниковым, техническим или governance-конфликтом.
4. Передать конфликт `workflow_conductor_agent`.
5. Если требуется, запросить approval Сергея.

Пример:

```text
Conflict: `plotnikov_motor_agent` усиливает напор, но `quiet_master_agent` считает, что текст потерял спокойную силу. Нужен выбор режима сцены: больше действия или больше тишины. Approval требуется, если меняется голос главы.
```

## 7. Роль попугая

`style_parrot_agent` и `banality_alarm_agent` являются допустимыми участниками peer-to-peer communication.

Они не пишут текст и не принимают решений. Их работа — короткий сигнал о повторяющемся сбое:

- «банально»;
- «методичка»;
- «пластмасса»;
- «слишком ИИ»;
- «потерян мотор»;
- «слишком громко»;
- «книга поехала раньше корабля».

Попугай на борту не лишняя деталь, если он помнит то, что капитан уже однажды решил не забывать.

## 8. Главный запрет

Гибридная архитектура не должна стать лазейкой для самоуправления системы.

Centralized Coordination не отменяет Peer-to-Peer communication.

Peer-to-Peer communication не отменяет Centralized Coordination.

Оба слоя не отменяют approval Сергея.

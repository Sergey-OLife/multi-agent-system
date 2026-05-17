# Agent Container Template

Статус: template
Дата фиксации: 2026-05-17

Этот шаблон описывает пустой контейнер агента.

Контейнер — это не рабочий агент, не proposal и не activation. Он нужен, чтобы видеть архитектуру корабля до выхода в море.

## Статусы

- `container` — место в архитектуре занято, логика ещё не разработана.
- `proposal` — агент получил паспорт, но не включён в работу.
- `controlled_activation` — подготовлено предложение контролируемого включения.
- `optional_layer` — агент может применяться как необязательный рабочий слой.
- `route_element` — агент включён в конкретный маршрут.
- `hard_guardrail` — агент является жёстким предохранителем; требует отдельного решения.
- `deprecated` — агент больше не используется.

## Контейнер

```yaml
agent_container:
  agent_id: string
  working_name_ru: string
  status: container | proposal | controlled_activation | optional_layer | route_element | hard_guardrail | deprecated
  ship_role: hull | navigation | crew | signal | engine | medic | cartographer | archive | deck_watch | parrot | other
  why_needed: string
  main_formula: string
  does:
    - string
  does_not:
    - string
  inputs:
    - string
  outputs:
    - string
  source_dependencies:
    - string
  works_with:
    - string
  conflicts_with:
    - string
  activation_risk: low | medium | high
  approval_gate: true | false
  first_fill_priority: P0 | P1 | P2 | P3
  next_action: keep_container | write_proposal | targeted_reading | controlled_activation | optional_layer_pr | no_action
  notes:
    - string
```

## Правило заполнения

Контейнер должен быть достаточно ясным, чтобы:

- понять, зачем агент нужен;
- отличить его от соседних агентов;
- увидеть, какие источники понадобятся;
- увидеть, где есть риск дублирования;
- решить, стоит ли писать proposal.

Контейнер не должен создавать впечатление, что агент уже работает.

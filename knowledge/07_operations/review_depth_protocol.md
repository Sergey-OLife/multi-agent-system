# Review Depth Protocol

Статус: active operational protocol

## Главный принцип

> Глубина анализа агента должна быть пропорциональна масштабу его потенциального системного влияния.

Недостаточная глубина создаёт скрытые архитектурные риски.
Избыточная глубина создаёт интеллектуальный шум и размывание operational clarity.

---

## Review depth levels

### L1 — Functional review

Фокус:

- functional correctness;
- bounded scope;
- predictable behavior;
- deterministic outcomes;
- safety;
- auditability.

Подходит для:

- utility agents;
- hygiene tooling;
- repository maintenance;
- transport/state utilities.

### L2 — Workflow review

Фокус:

- workflow interactions;
- approval semantics;
- state transitions;
- failure modes;
- coordination boundaries;
- protocol compatibility.

Подходит для:

- coordination agents;
- state synchronizers;
- approval gates;
- workflow conductors.

### L3 — Epistemic review

Фокус:

- delayed systemic harm;
- authority drift;
- creative drift;
- memory pressure;
- persuasion risks;
- human-AI boundary;
- hidden incentives;
- philosophical contradictions.

Подходит для:

- memory agents;
- editorial agents;
- narrative agents;
- ethical layers;
- authority allocators.

---

## Delayed systemic harm principle

> Чем менее заметен и более накопителен потенциальный вред агента, тем глубже должен быть его архитектурный разбор.

Utility-agent обычно ломается явно и быстро.
Epistemic/editorial agent может месяцами выглядеть полезным, одновременно незаметно деформируя:

- критерии качества;
- распределение внимания;
- stylistic variability;
- пространство допустимого мышления.

---

## Diminishing returns rule

Анализ прекращается, когда новые слои:

- не открывают новые классы рисков;
- не создают новых operational distinctions;
- не уточняют реальные boundaries;
- а лишь усложняют уже понятую модель.

---

## Semantic discipline

### `+`

`+` означает:

> продолжить ближайший already-grounded safe step.

`+` не означает:

- unlimited exploration;
- scope expansion;
- automatic deepening;
- hidden roadmap escalation.

### `++`

`++` означает:

> explicit approval для текущего понятного approval-gate.

Если approval-gate отсутствует или неоднозначен, система обязана остановиться и указать это явно.

### `+++`

`+++` означает:

> делай: выполнить ближайшее уже сформулированное действие, если оно безопасно, grounded и не требует отдельного approval-gate.

`+++` усиливает исполнительный режим, но не отменяет предохранители.

`+++` нельзя использовать как обход:

- merge PR, если для него нужен `++`;
- activation агента;
- hard guardrail changes;
- route changes;
- checkpoint full без предварительного restart prompt;
- удаления файлов или опасных необратимых действий;
- действий, где approval-gate отсутствует, неясен или конфликтует с протоколом.

Если ближайшее действие требует `++`, система должна сказать об этом прямо и не выполнять действие по `+++`.

---

## Anti-overengineering doctrine

> Не всякая потенциальная возможность системы должна быть реализована.

Сложность должна расти только тогда, когда она:

- создаёт measurable operational value;
- снижает реальные риски;
- улучшает maintainability;
- или защищает архитектуру от cumulative drift.

---

## Bounded continuation principle

> Глубина не является добродетелью сама по себе.

Цель review:

- найти несущие различения;
- выявить hidden risks;
- определить реальные boundaries.

Не цель:

- производить бесконечную meta-reflection;
- превращать utility-agents в философские трактаты;
- усложнять ontology без operational необходимости.

---

## Text compression rule

> Хороший shipyard-document хранит не весь путь размышления, а только различения, без которых система начнёт ошибаться.

Reasoning trace не должен автоматически становиться permanent doctrine.

Shipyard-документы должны сохранять:

- operational clarity;
- reusability;
- updateability;
- hierarchy of importance.

# State Mutation Protocol

Статус: active operational doctrine

## Главный принцип

> Генерация идей и изменение состояния системы — разные классы ответственности.

Сильный reasoning не гарантирует безопасную mutation discipline.

---

## Core distinction

Разделяются:

- reasoning authority;
- mutation authority.

ChatGPT может:

- анализировать;
- проектировать;
- предлагать;
- выявлять distinctions;
- формулировать mutation intent.

Но critical state mutation должна по возможности выполняться deterministic tooling.

---

## Monolithic state risk

Большие state artifacts создают:

- unsafe overwrite pressure;
- synchronization drift;
- merge freeze risk;
- parser corruption risk;
- hidden side-effects.

Особенно опасны:

- giant YAML registries;
- mirrored state maps;
- multi-source truth documents.

---

## Large artifact rule

> Large structured state artifacts must not require full-file overwrite for routine mutations.

Если обычное изменение статуса требует полной перезаписи большого файла, архитектура считается unstable-by-growth.

---

## Deterministic mutation layer

Предпочтительный mutation path:

1. ChatGPT формулирует intent.
2. Deterministic tool выполняет mutation.
3. Validator проверяет consistency.
4. GitHub фиксирует diff.

Формула:

> Go edits state. ChatGPT explains intent.

---

## Required future tooling

Минимальный набор:

- `cmd/agent-registry-sync`
- `cmd/project-state-sync`
- `cmd/state-consistency-check`

Tooling должно:

- менять только targeted fragment;
- валидировать parser safety;
- печатать diff;
- проверять cross-file consistency;
- быть reproducible.

---

## Registry decomposition doctrine

Предпочтительно:

```text
registry/agents/*.yaml
```

вместо:

```text
one giant registry file
```

Aggregated registry может генерироваться автоматически.

---

## Critical state categories

### Narrative artifacts

Можно редактировать conversationally.

Примеры:

- главы;
- editor notes;
- proposals;
- commentary.

### Operational documents

Требуют discipline, но допускают manual editing.

Примеры:

- protocols;
- roadmaps;
- worklogs.

### Structured machine state

Предпочтительно менять deterministic tooling.

Примеры:

- registries;
- sync maps;
- state manifests;
- activation maps.

---

## Validation doctrine

Critical state mutation должна сопровождаться:

- consistency checks;
- orphan detection;
- duplicate detection;
- invalid transition checks;
- proposal ↔ registry ↔ project-state sync validation.

---

## Approval boundary

Deterministic tooling не отменяет approval-gates.

Tooling:

- не создаёт authority;
- не выполняет semantic approval;
- не активирует агентов автоматически.

---

## Anti-freeze doctrine

> Локальная несинхронность лучше unsafe mutation.

Если safe mutation path отсутствует:

- unresolved state должен быть явно локализован;
- hidden overwrite pressure запрещён;
- premature merge запрещён.

---

## Architectural maturity signal

Зрелость AI-assisted architecture определяется не только качеством reasoning.

Ключевой показатель:

> насколько безопасно система умеет изменять собственное состояние.

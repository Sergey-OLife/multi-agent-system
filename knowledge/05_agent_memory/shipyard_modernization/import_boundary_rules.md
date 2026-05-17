# Import Boundary Rules — Shipyard Modernization

Дата: 2026-05-17
Статус: active_architecture_rule

Этот документ фиксирует правила импортов для TypeScript-слоя до появления Go-core.

Цель — не сделать папки красивыми, а защитить execution boundary: что принадлежит domain, что engine, что diagnostics, что orchestration, а что должно остаться интеграционной обвязкой.

## 1. Главная формула

> Граница ответственности должна быть заперта кодом, а не держаться на памяти.

Если `agents.ts` снова начнёт собирать контекст, диагностировать, валидировать, роутить и хранить бизнес-логику, верфь снова превратится в склад.

## 2. Слои

### `src/domain`

Назначение: чистые типы и структуры данных.

Разрешено:

- type definitions;
- JSON-compatible structures;
- shared domain contracts.

Запрещено:

- `fs` / `node:fs`;
- GitHub adapters;
- LLM adapters;
- CLI side effects;
- imports from `engine`, `diagnostics`, `orchestration`, `integrations`.

### `src/engine`

Назначение: deterministic routing logic and core-like behavior.

Разрешено:

- task classification;
- route selection;
- pure text utilities;
- pure routing functions that receive dependencies as input.

Запрещено:

- direct file reads;
- source registry reads;
- project-state reads;
- GitHub/LLM/CLI adapters;
- imports from `diagnostics`, `orchestration`, `agents`.

### `src/diagnostics`

Назначение: deterministic checks over already supplied strings/structures.

Разрешено:

- anti-cliche diagnostics;
- svod-check diagnostics;
- sync-map diagnostics;
- pure checks that return structured results.

Запрещено:

- direct file reads;
- GitHub/LLM/CLI adapters;
- source registry reads;
- project-state reads.

### `src/orchestration`

Назначение: подготовка контекста и соединение нескольких чистых слоёв.

Разрешено:

- context-pack building;
- linking source registry output into route context;
- preparation of structured inputs for engine or future Go-core.

Запрещено:

- превращаться в новый `agents.ts`;
- хранить business logic агентов;
- напрямую выполнять GitHub/LLM side effects.

### `src/agents.ts`

Назначение: composition root / registry assembly.

Разрешено:

- wiring agents;
- calling imported runners/checks;
- registering agent IDs;
- preserving compatibility exports.

Запрещено:

- хранить большие diagnostics blocks;
- собирать context-pack внутри файла;
- превращаться в склад всех правил.

## 3. Public entrypoints

Слои должны иметь публичные точки входа:

- `src/domain/index.ts`;
- `src/engine/index.ts`;
- `src/diagnostics/index.ts`;
- `src/orchestration/index.ts`.

Новые внешние импорты должны идти через эти файлы, а не напрямую в кишки модулей.

Допущение на переходный период:

- `src/types.ts` и `src/domain/types.ts` сохраняются как compatibility layer для уже существующего публичного API.

## 4. Enforcement

Правила проверяются скриптом:

```bash
npm run lint:boundaries
```

`npm test` запускает boundary check перед build/tests.

## 5. Почему не ESLint пока

ESLint/Sheriff можно добавить позже. На текущем этапе выбран лёгкий dependency-free checker, чтобы не превращать архитектурный PR в PR про tooling stack.

Если правил станет больше, следующий шаг — заменить или дополнить checker специализированным lint tool.

## 6. Go-core implication

Будущий Go-core должен получать JSON input и возвращать JSON output. Он не должен наследовать TypeScript side effects.

Поэтому всё, что читает файлы, ходит в GitHub, вызывает LLM или мутирует state, должно оставаться за пределами core-like слоёв.

# Core API Contract — Future Go Engine

Дата: 2026-05-17
Статус: first_sync_check_implemented / optional_dev_tool

Этот документ фиксирует границу между TypeScript-оболочкой и Go-core.

Go-core не заменяет всю систему. Он выполняет тяжёлые, повторяемые и хорошо структурированные проверки верфи. TypeScript остаётся оболочкой для CLI, интеграций, GitHub/LLM-обвязки и сценариев разработчика.

## 1. Главная формула

> Сначала контракт, потом двигатель.

Go появляется только там, где есть ясный JSON-вход, JSON-выход и проверяемый выигрыш. Никакого полного rewrite без отдельного решения Сергея.

## 2. Архитектурный принцип

Первый формат интеграции:

```text
CLI + JSON stdin/stdout
```

Не использовать HTTP/gRPC на первом этапе.

Причина: для текущего репозитория нужен простой локальный инструмент проверки, а не второй сервисный слой.

## 3. Команда

Рабочее имя бинарника:

```bash
multi-agent-core
```

Формат вызова:

```bash
multi-agent-core <command> < input.json > output.json
```

Текущее состояние команд:

```text
sync-check — implemented in go-core/cmd/multi-agent-core
registry-check — planned
route-preview — planned
checkpoint-check — planned
```

## 4. Общий envelope входа

Каждая команда принимает JSON следующей формы:

```json
{
  "schemaVersion": "core-api.v1",
  "command": "sync-check",
  "context": {
    "currentMode": "Agent Shipyard / Shipyard Modernization",
    "currentTask": "string",
    "lastMergedPr": "PR #72 — Add minimal Go core sync-check CLI",
    "lastMergeCommit": "string",
    "approvalState": {
      "plusReceived": false,
      "doublePlusReceived": false,
      "approvedGate": null
    }
  },
  "files": [
    {
      "path": "knowledge/00_manifest/project-state.json",
      "kind": "project_state_json",
      "sha": "string",
      "content": "string"
    }
  ],
  "options": {
    "strict": true,
    "includeWarnings": true
  }
}
```

## 5. Общий envelope выхода

Каждая команда возвращает JSON следующей формы:

```json
{
  "schemaVersion": "core-api.v1",
  "command": "sync-check",
  "status": "ready",
  "summary": "string",
  "diagnostics": [
    {
      "severity": "medium",
      "code": "restart_prompt_missing_last_pr",
      "file": "assistant_codex_worklog/restart-prompt.md",
      "message": "string",
      "suggestedFix": "string"
    }
  ],
  "requiredUpdates": [
    "string"
  ],
  "blockedActions": [
    "string"
  ],
  "safeNextStep": "string"
}
```

Допустимые статусы:

```text
ready
needs_revision
blocked
error
```

Допустимые severity:

```text
low
medium
high
critical
```

## 6. Command: sync-check

Назначение: проверить, что state/worklog/roadmap/restart prompt/registry не ведут оператора в разные рабочие точки.

Минимальный вход:

- `project-state.json`;
- `project-state.md`;
- `current-state.md`;
- `roadmap.md`;
- `restart-prompt.md`;
- optional `agent_container_registry.md`;
- metadata последнего merged PR.

Проверки v1:

- `schemaVersion` должен быть `core-api.v1`;
- CLI command должен совпадать с `input.command`;
- `project-state.json` должен быть передан как input file;
- `lastMergedPr` совпадает между project-state `.json` и `.md`;
- `lastMergeCommit` совпадает между project-state `.json` и `.md`;
- `current-state.md`, `roadmap.md`, `restart-prompt.md` должны упоминать актуальный `lastMergedPr`;
- `context.lastMergedPr` и `context.lastMergeCommit` не должны расходиться с `project-state.json`, если переданы;
- `nextAction` не должен указывать на уже выполненный шаг;
- `currentMode` не должен конфликтовать с `bookPaused`;
- если registry не передан, sync-check возвращает low diagnostic и продолжает остальные проверки.

## 7. Command: registry-check

Назначение: проверить агентный registry.

Статус: planned.

Минимальный вход:

- `agent_container_registry.md`;
- список файлов `knowledge/05_agent_memory/agent_proposals/*.md`;
- список workflow layer файлов;
- optional: список route elements.

Проверки v1:

- если status `proposal`, должен быть `proposal_path`;
- если `proposal_path` указан, файл должен существовать;
- если proposal-файл существует, registry не должен оставаться `container`, кроме явно разрешённых черновиков;
- proposal не должен трактоваться как activation;
- `next_action` должен соответствовать статусу.

Первый реальный тестовый сценарий:

```text
proposal exists, but registry/backlog still points to completed proposal step
```

Этот сценарий уже проявлялся в PR #62 и должен стать testdata для registry-check.

## 8. Command: route-preview

Назначение: показать, какие агенты и слои будут участвовать в задаче, без выполнения LLM и без изменения файлов.

Статус: planned.

Минимальный вход:

- task input;
- текущий route map;
- список active optional layers;
- список proposal-only agents.

Выход должен содержать:

- detected task type;
- required route agents;
- optional layers;
- approval gates;
- blocked activations;
- warnings about proposal-only misuse.

## 9. Command: checkpoint-check

Назначение: проверить готовность к `#checkpoint full`.

Статус: planned.

Минимальный вход:

- current-state;
- roadmap;
- restart-prompt;
- project-state;
- recent PR metadata;
- optional changed files list.

Проверки v1:

- чатовый restart prompt должен укладываться в 6000 знаков, если передан как chat_handoff;
- полный `restart-prompt.md` может быть длиннее;
- restart prompt не содержит raw books/source text;
- nextAction не указывает устаревший шаг;
- checkpoint не смешивает PR merge и direct checkpoint commit.

## 10. TypeScript boundary

TypeScript должен:

- готовить JSON input;
- вызывать `multi-agent-core` как child process;
- читать JSON output;
- показывать человеку результат;
- не скрывать `blocked` или `needs_revision`;
- иметь понятный fallback, если Go binary не найден.

Go-core должен:

- не обращаться к GitHub напрямую в первой версии;
- не читать произвольные файлы без передачи через input envelope;
- не вызывать LLM;
- не менять файлы;
- не интерпретировать `++` шире переданного approval context;
- не активировать агентов.

## 11. Ошибки и отказоустойчивость

Если вход некорректен, Go-core возвращает:

```json
{
  "schemaVersion": "core-api.v1",
  "command": "sync-check",
  "status": "error",
  "summary": "Invalid input envelope.",
  "diagnostics": [
    {
      "severity": "high",
      "code": "invalid_input",
      "file": null,
      "message": "Missing schemaVersion.",
      "suggestedFix": "Provide schemaVersion: core-api.v1."
    }
  ],
  "requiredUpdates": [],
  "blockedActions": [],
  "safeNextStep": "Fix input envelope before running core checks."
}
```

## 12. Не-goals v1

В первой версии Go-core не должен:

- заменять TypeScript router;
- выполнять LLM-задачи;
- работать как HTTP/gRPC-сервис;
- менять файлы напрямую;
- мержить PR;
- активировать агентов;
- становиться hard guardrail;
- принимать решения за Сергея.

## 13. Минимальный критерий следующего Go-core PR

Следующий Go-core PR допустим только если:

1. текущий `sync-check` остаётся optional dev-tool;
2. TypeScript-интеграция не скрывает статусы `blocked` или `needs_revision`;
3. новые команды используют тот же envelope;
4. registry/checkpoint/route logic добавляются отдельно, без расширения полномочий Go-core.

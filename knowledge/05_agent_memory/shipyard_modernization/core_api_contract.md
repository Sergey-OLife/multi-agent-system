# Core API Contract — Future Go Engine

Дата: 2026-05-17
Статус: contract_draft / no_go_code_yet

Этот документ фиксирует границу между TypeScript-оболочкой и будущим Go-core.

Go-core не заменяет всю систему. Он должен выполнять тяжёлые, повторяемые и хорошо структурированные проверки верфи. TypeScript остаётся оболочкой для CLI, интеграций, GitHub/LLM-обвязки и сценариев разработчика.

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

## 3. Будущая команда

Рабочее имя бинарника:

```bash
multi-agent-core
```

Формат вызова:

```bash
multi-agent-core <command> < input.json > output.json
```

Первые команды:

```text
sync-check
registry-check
route-preview
checkpoint-check
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
    "lastMergedPr": "PR #65 — Split TypeScript domain and engine layers",
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
      "code": "registry_backlog_stale",
      "file": "knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md",
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
- `agent_container_registry.md`;
- metadata последнего merged PR.

Проверки v1:

- `lastMergedPr` совпадает между project-state `.json` и `.md`;
- `lastMergeCommit` совпадает между project-state `.json` и `.md`;
- `nextAction` не указывает на уже выполненный шаг;
- `restart-prompt.md` не указывает старый lastMergedPr;
- `currentMode` не конфликтует с Book Fast Track pause;
- proposal-файл не противоречит registry status.

## 7. Command: registry-check

Назначение: проверить агентный registry.

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

Этот сценарий уже проявлялся в PR #62 и должен стать первым Go-core testdata.

## 8. Command: route-preview

Назначение: показать, какие агенты и слои будут участвовать в задаче, без выполнения LLM и без изменения файлов.

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

## 13. Минимальный критерий готовности к первому Go PR

Можно писать первый Go PR только после того, как:

1. этот контракт смержен;
2. TypeScript domain/engine split уже смержен;
3. первая команда ограничена `sync-check` или `registry-check`;
4. есть testdata для сценария stale registry/backlog;
5. TypeScript-интеграция остаётся optional dev-tool.

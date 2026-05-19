# Repository Architecture Contract

Статус: operational_contract
Дата: 2026-05-19

Этот документ фиксирует текущие архитектурные границы репозитория `Sergey-OLife/multi-agent-system`.

Он не внедряет runtime database, Redis, Postgres, message broker, OpenTelemetry, gRPC или production deployment layer. Его задача — отделить рабочую архитектуру проекта от преждевременной инфраструктурной тяжести.

## 1. Главная формула

```text
Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.
```

Расшифровка:

- Go — deterministic spine для проверок, reconciliation, sync-check и будущего state engine.
- TypeScript / JavaScript — orchestration, CLI, scripts, agent-facing layer.
- LLM — смысловая обработка, редактура, анализ, проектирование.
- Сергей — approval authority.
- GitHub — текущий source of truth для кода, state, worklog, protocols, archive и PR history.

## 2. Текущий source of truth

На текущем этапе source of truth — GitHub `main`.

Главные state/handoff paths:

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/protocol_addenda/*.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/*.md`

Правила:

- `main` отражает только merged state.
- Open PR не является implemented state.
- Draft PR не является ready state.
- Project-state обновляется только после фактического merge.
- Conversation archive не заменяет project-state.
- Technical checkpoint не заменяет conversation archive.

## 3. Слой Go

Go используется как deterministic spine.

Go отвечает за:

- deterministic checks;
- sync-check logic;
- registry reconciliation;
- future state reconciliation;
- future event validation / replay checks;
- будущие устойчивые операции, где важна предсказуемость и компилируемые контракты.

Go не должен становиться полным переписыванием системы.

Go не должен забирать на себя:

- живую редактуру;
- смысловое проектирование;
- быстрые operational scripts, если им достаточно TS/JS;
- пользовательские ответы;
- LLM-рассуждение.

## 4. Слой TypeScript / JavaScript

TypeScript / JavaScript используются как orchestration and tool-facing layer.

TS/JS отвечает за:

- CLI commands;
- scripts;
- orchestration wrappers;
- GitHub operation helpers;
- audit commands;
- registry sync entrypoints;
- future agent-facing routing layer;
- schema validation на границе JSON.

TS/JS не должен становиться местом скрытой business logic, если эта логика требует deterministic consistency, replay, reconciliation или строгих state transitions.

## 5. Scripts boundary

`scripts/` — это edge automation, не второй core.

Scripts могут:

- запускать audits;
- вызывать Go-core;
- подготавливать sync operations;
- проверять repository hygiene;
- проверять conversation archive;
- быть тонкими wrappers над deterministic logic.

Scripts не должны:

- хранить долгоживущее состояние;
- принимать authoritative decisions без проверки;
- становиться единственным местом business rules;
- мутировать registry/state через ручную полную замену, если есть deterministic tooling;
- расходиться по логике с Go-core и protocols.

Формула:

```text
Scripts не должны стать вторым неформальным core.
```

## 6. CI boundary

Baseline CI уже внедрён:

- `.github/workflows/ci.yml`

CI запускается:

- на `pull_request` в `main`;
- вручную через `workflow_dispatch`.

CI проверяет:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

CI V1 intentionally does not include:

- ESLint;
- Prettier;
- golangci-lint;
- SonarCloud;
- CodeClimate;
- AI-review bots;
- branch protection.

Branch protection remains a separate future action item after CI is observed on a real PR.

## 7. Event contract: future, not runtime yet

Event envelope is accepted as a future contract discipline, not as a runtime database implementation yet.

Minimum event envelope:

```json
{
  "event_id": "uuid",
  "event_type": "registry.sync.completed",
  "stream": "registry",
  "stream_version": 1,
  "correlation_id": "corr_2026_05_19_001",
  "causation_id": "uuid-or-null",
  "idempotency_key": "registry.sync.completed:registry:1",
  "actor": {
    "agent_id": "registry_sync",
    "runtime": "ts|js|go|llm"
  },
  "occurred_at": "2026-05-19T00:00:00Z",
  "payload": {},
  "meta": {
    "schema_version": 1,
    "repo": "Sergey-OLife/multi-agent-system"
  }
}
```

For now, this is a design contract for future state/event work.

Do not implement event DB, event broker, Redis Streams or Postgres event_log without separate approval.

## 8. Idempotency and race-condition rules

Current project races are mostly GitHub/state/workflow races, not Redis/Postgres runtime races.

Known race patterns:

- stale SHA;
- duplicate PR;
- branch already exists;
- open PR mistaken for implemented state;
- state sync created before actual merge;
- archive index update collision;
- merge blocked by tool surface;
- PR changed after approval;
- workflow run not yet observed;
- short command lost in interface noise.

Rules:

1. Merge must use expected head SHA when available.
2. If PR materially changes after `++`, request a new `++`.
3. Before creating a PR, check whether an equivalent branch/PR already exists when context suggests possible duplication.
4. One operation should map to one branch and one PR.
5. State sync happens only after actual merge, not after intention to merge.
6. Archive paths must be unique by date/topic.
7. Archive index updates must be append-only unless doing a cleanup PR.
8. Branch protection must not be assumed until explicitly verified.
9. Tool-surface failure must be named as tool-surface failure, not GitHub failure.
10. Short commands must be recognized before handling interface noise.

## 9. Single-writer principle

For current GitHub-centered architecture:

- GitHub `main` is the authoritative state store.
- Project-state files are updated through PR only.
- Agent registry changes should use deterministic tooling when available.
- Conversation archive entries are append-oriented.
- Worklog/state sync PRs should not include runtime code changes.

For future runtime architecture:

- global workflow state should have one coordinator / writer;
- peers may collaborate locally, but global state changes must be committed through a bridge event;
- task-local peer communication must not silently mutate global state.

## 10. Redis/Postgres boundary

Redis/Postgres are future runtime layers, not current implementation.

Accepted future direction:

- Postgres can become durable source for workflows, snapshots, event log, worklog entries and knowledge indexes.
- Redis can become coordination/cache layer for locks, heartbeats, short-lived workflow state, dedupe keys and streams.

Not accepted yet:

- adding SQL migrations;
- adding Redis keyspace;
- adding event processors;
- adding runtime coordinator service;
- adding peer-to-peer agent threads;
- adding message broker.

These require separate design approval and PR.

## 11. P2P agent communication boundary

Hybrid rule for future multi-agent runtime:

```text
Global state and authority are centralized.
Task-local collaboration may be peer-to-peer.
```

Current project state:

- agents are mostly proposals, optional workflow layers or operational roles;
- they are not independent runtime processes;
- therefore P2P threads/messages are not implemented.

Future condition for P2P:

- only when agents become independent runtime participants;
- only with audit trail;
- only with bridge events for global state changes;
- only with idempotency keys and replayable events.

## 12. What is intentionally not implemented

This contract does not implement:

- Redis;
- Postgres;
- SQL tables;
- Redis Streams;
- Kafka / RabbitMQ;
- gRPC;
- OpenTelemetry;
- Prometheus / Grafana;
- OpenAPI generation;
- P2P agent messaging;
- runtime coordinator;
- branch protection.

These may become useful later, but adding them now would create infrastructure weight before the project has runtime pressure that justifies them.

## 13. Next likely steps

Recommended order:

1. Observe baseline CI on a real PR.
2. Consider branch protection.
3. Keep this architecture contract updated when boundaries change.
4. Only then consider schema contract / event contract files.
5. Defer Redis/Postgres runtime until there are real autonomous agents or durable workflow needs.

## 14. Practical test

Before adding infrastructure, ask:

```text
What current failure does this prevent?
Who will maintain it?
Which existing workflow will call it this week?
What breaks if we do not add it now?
```

If the answer is unclear, the idea belongs in conversation archive or roadmap, not runtime implementation.

# Future runtime hypotheses

Status: hypothesis map only. Nothing here is implemented or approved by this file.

## Why this exists

Some source notes discuss Redis, Postgres, P2P collaboration, event logs, snapshots, idempotency, race control, shared schemas and observability.

These ideas may become useful later, but the current repository is not a runtime system around them.

## Current boundary

Current architecture:

- GitHub main is the source of truth.
- Go is the deterministic spine.
- TypeScript / JavaScript connect orchestration and scripts.
- Scripts are edge automation, not a second core.

## Hypotheses held for later

- Redis / Postgres shared state.
- Event log and snapshots.
- P2P task-local collaboration.
- Idempotency and race-control infrastructure.
- Shared schema for TS and Go.
- Observability stack.
- Message broker.
- OpenAPI, gRPC or generated clients.

## Practical test before adoption

Before any hypothesis becomes a PR, answer:

1. What current failure does it prevent?
2. Who maintains it?
3. Which workflow needs it this week?
4. What breaks if we do not add it now?
5. Can a smaller protocol or check solve the problem first?

## Do not implement without separate decision

- Redis.
- Postgres.
- P2P runtime.
- OpenTelemetry.
- Kafka or RabbitMQ.
- gRPC or OpenAPI generation.
- Branch protection changes.
- New validators or hard guardrails.

# Vision intake map

Status: map only. This file does not implement new architecture.

## Purpose

This map keeps Sergey vision notes from becoming lost chat material or accidental architecture.

Vision notes can inspire decisions, but they are not implemented until a PR records the accepted change.

## Source note groups

- Future bugs: risk of source-of-truth drift, infrastructure serving itself, scripts becoming a hidden core, documentation drifting from behavior.
- Ideas: critic voice, conversation archive librarian, checkpoint behavior, parallel archive intake.
- Red flags: missing README, unprotected main, weak high-level map, scripts/core boundary, state authority risk.
- Shared storage: Redis, Postgres, event log, snapshots, P2P, race control, idempotency.
- Architecture: TS/JS plus Go division of responsibility.
- TS/JS + Go challenges: contracts, runtime boundaries, observability, deployment complexity.

## Classification

### Implemented

- GitHub main is the project source of truth.
- Go is the deterministic spine.
- TypeScript / JavaScript connect orchestration and scripts.
- Sync Check and CI are required PR verification when applicable.
- `critic_margin_agent` is active as manual preflight discipline only.
- Archive coverage discipline exists in conversation archive protocols.

### Accepted principle

- Scripts must not become a second core.
- Open PR is not implemented.
- Closed-unmerged PR is not implemented.
- Proposal, mechanics, manual discipline, route, validator, and hard guardrail are different stages.
- README is the entry map, not a raw dump.

### Open loop

- Controlled activation for `conversation_archive_librarian` manual discipline.
- Hardening `margin_orchestra` into protocol or tooling.
- Branch protection verification.
- Vision notes need source cards or a fuller intake ledger if they become project decisions.

### Future hypothesis

- Redis / Postgres shared state.
- Event log and snapshots.
- P2P task-local collaboration.
- Idempotency and race-control infrastructure.
- Shared schema for TS and Go.

### Do not implement without separate decision

- Redis.
- Postgres.
- P2P runtime.
- OpenTelemetry.
- Kafka or RabbitMQ.
- gRPC or OpenAPI generation.
- Branch protection changes.
- New validators or hard guardrails.

## Rule

If a vision note becomes accepted, record where it landed: PR, file, protocol, agent, roadmap item, or rejected/superseded note.

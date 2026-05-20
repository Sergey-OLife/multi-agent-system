# Vision intake map

Status: map only. This file does not implement new architecture.

## Purpose

This map keeps Sergey vision notes and archive reasoning from becoming lost chat material or accidental architecture.

Vision notes and archive entries can inspire decisions, but they are not implemented until a PR records the accepted change.

## Source groups

- Future bugs: source-of-truth drift, infrastructure serving itself, scripts becoming hidden core, documentation drift.
- Ideas: critic voice, conversation archive librarian, checkpoint behavior, parallel archive intake, restart command.
- Red flags: missing README, main protection, weak high-level map, scripts/core boundary, state authority risk.
- Shared storage: Redis, Postgres, event log, snapshots, P2P, race control, idempotency.
- Architecture: TS/JS plus Go division of responsibility.
- TS/JS + Go challenges: contracts, runtime boundaries, observability, deployment complexity.
- Archive reasoning: coverage scope, full-chat marker, implemented_elsewhere, corrective archive, parallel intake, consolidation.
- Maturity pressure: project value versus infrastructure self-service, explicit workflow, role boundaries, negative tests, observability, reproducibility, security, evaluation and maintenance signals.
- Ship metaphor: the project ship carries cargo and passengers; architecture must carry reusable multi-agent work and livable book worlds.

## Archive-derived rules

- A thematic archive entry is not a full-chat checkpoint.
- `coverage_scope: full_chat` must be explicit.
- `#архив_старт` is cumulative capture, not last-topic-only.
- Archive entries must record what is already implemented elsewhere.
- Raw transcripts and raw source dumps are not archive.

## Classification

### Implemented

- GitHub main is the project source of truth.
- Go is the deterministic spine.
- TypeScript / JavaScript connect orchestration and scripts.
- Sync Check and CI are required PR verification when applicable.
- `critic_margin_agent` is active as manual preflight discipline only.
- Archive coverage discipline exists in conversation archive protocols.
- README / architecture map is introduced by PR #181.
- State/worklog/restart were synced after PR #181 by PR #182.

### Accepted principle

- Scripts must not become a second core.
- Open PR is not implemented.
- Closed-unmerged PR is not implemented.
- Proposal, mechanics, manual discipline, route, validator, and hard guardrail are different stages.
- README is the entry map, not a raw dump.
- Architecture contract is a load-bearing wall; README is the entrance map.
- A future runtime idea is not current architecture.
- A maturity mechanism must prevent a real failure, not only decorate the system.
- The ship needs hull and engine for cargo, but also cabins and details for passengers.

### Open loop

- Restart command protocol.
- Project instruction update for restart command handling.
- Current chat archive before full checkpoint.
- Full checkpoint after archive work.
- Knowledge / protocol consistency check.
- Hardening `margin_orchestra` into protocol or tooling.
- Branch protection verification.
- Vision notes need source cards or a fuller intake ledger if they become project decisions.

### Future hypothesis

See `knowledge/07_operations/future_runtime_hypotheses.md`.

- Redis / Postgres shared state.
- Event log and snapshots.
- P2P task-local collaboration.
- Idempotency and race-control infrastructure.
- Shared schema for TS and Go.
- Runtime observability, security, reproducibility and evaluation suite.

### Do not implement without separate decision

- Redis.
- Postgres.
- P2P runtime.
- OpenTelemetry.
- Kafka or RabbitMQ.
- gRPC or OpenAPI generation.
- Branch protection changes.
- New validators or hard guardrails.

## Strong formulas

- Red flag became yellow, not green.
- README is the entrance door; architecture contract is the load-bearing wall.
- CI exists, but it is not a lock on the door until branch protection is configured.
- Protocol without checks becomes folklore.
- Future project bugs are less about code bugs and more about source-of-truth drift.
- The system must not keep checking its reflections instead of reality.
- The ship carries cargo and passengers: cargo needs strength; passengers need cabins.

## Rule

If a vision note becomes accepted, record where it landed: PR, file, protocol, agent, roadmap item, or rejected/superseded note.

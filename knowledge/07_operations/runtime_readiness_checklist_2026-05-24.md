# Runtime readiness checklist

Status: documentation-only readiness map
Date: 2026-05-24
Scope: future runtime discussion boundary

## Purpose

This document records the conditions that should be checked before the project discusses or scopes any future runtime layer.

It is not a runtime implementation plan.

It exists to prevent premature implementation of routing, validators, hard guardrails, infrastructure or production behavior while preserving a clear path for later decisions.

## Current repository boundary

The repository is currently a GitHub-centered book/project operating system.

It is not:

- a production multi-agent runtime;
- a reusable public framework;
- a deployed agent platform;
- a route automation system;
- a validator layer;
- a hard guardrail system;
- a policy engine;
- an external API product.

Manual/advisory disciplines may guide work, but they do not execute runtime behavior.

## Current useful foundations

The repository already has foundations that may support a future runtime discussion:

- GitHub source-of-truth discipline;
- project-state and worklog files;
- strict PR workflow;
- required CI and Sync Check contexts;
- manual bot/reviewer comment discipline;
- manual second-eyes discipline;
- state-sync additive patch discipline;
- advisory/manual agent layers;
- lifecycle vocabulary in Go contracts;
- warning-only local diagnostics.

These foundations do not imply runtime readiness by themselves.

## Readiness domains

### 1. Authority model

Before runtime is scoped, the project must define:

- who or what may make decisions;
- what remains Sergey-only approval;
- what an agent may recommend but not execute;
- what a runtime component may never do automatically;
- how manual/advisory output differs from executable behavior.

Open questions:

- What actions require human approval even in a future runtime?
- What status words are allowed for non-runtime agents?
- Which decisions must always be committed through GitHub PRs?

### 2. State model

Before runtime is scoped, the project must define:

- which files remain source of truth;
- which state files are schema-sensitive;
- which keys and arrays are durable and must not be compacted;
- how runtime events would be recorded without rewriting durable state;
- how rollback would work after a wrong state mutation.

Minimum boundary:

```text
Runtime must not mutate project-state, registry, archive, roadmap or protocol files outside approved PR workflow unless Sergey separately approves a different state mechanism.
```

### 3. Agent lifecycle model

Before runtime is scoped, the project must define lifecycle states clearly:

- container;
- proposal;
- mechanics;
- manual discipline;
- advisory activation;
- routed behavior;
- validator;
- hard guardrail;
- retired / archived.

A future runtime must not treat proposal, mechanics or manual discipline as routed behavior.

### 4. Routing boundaries

Before routing is scoped, the project must define:

- what may trigger an agent;
- what inputs are allowed;
- what outputs are allowed;
- which outputs require second-eyes review;
- which outputs require Sergey approval;
- which outputs may create a PR;
- which outputs may never create a PR automatically.

Minimum boundary:

```text
No auto-route, auto-merge, auto-activation or auto-registry mutation without a separate approved runtime decision.
```

### 5. Review and safety model

Before runtime is scoped, the project must define how these manual disciplines would be represented without mislabeling them as automation:

- bot/reviewer comment checking;
- second-eyes preflight;
- state-sync additive patch discipline;
- archive status indicator;
- approval-gates;
- rollback path.

A future runtime readiness review should answer:

- Which checks are manual?
- Which checks are warning-only?
- Which checks are required gates?
- Which checks are candidates only?
- Who may promote a warning to a gate?

### 6. Observability and audit trail

Before runtime infrastructure is scoped, the project must define what must be visible later:

- which agent/layer acted;
- what source of truth was read;
- what decision was made;
- what was only advisory;
- what was executed;
- what PR, commit or archive entry recorded the action;
- what approval was used.

This section is future-only. It does not approve an observability stack.

### 7. Infrastructure later

The following must remain future-only unless Sergey separately approves a scoped implementation:

- Redis;
- Postgres;
- P2P runtime;
- OpenAPI/gRPC;
- observability stack;
- message broker;
- queue worker;
- external API layer;
- authentication/authorization layer;
- production deployment.

## Manual readiness checklist

Use this checklist before proposing any runtime PR:

```text
RUNTIME READINESS PREFLIGHT

Decision:
- Is there explicit Sergey approval for runtime discussion?
- Is the scope documentation-only, prototype, or implementation?
- Is the target file/path clear?

Authority:
- Does this change alter who can decide?
- Does it create agent authority?
- Does it change approval-gates?

State:
- Does it mutate project-state, roadmap, registry or protocol files?
- Are schema-sensitive files touched?
- Is the state-sync additive by default?

Lifecycle:
- Does it treat proposal/manual discipline as activation?
- Does it introduce routed behavior?
- Does it introduce validator/hard guardrail language?

Routing:
- Does it add auto-route, auto-merge, auto-activation or auto-registry mutation?
- Does it add runtime behavior?

Checks:
- Does it change CI, Sync Check or branch protection?
- Are any warning-only checks promoted to gates?

Infrastructure:
- Does it add databases, broker, API, observability, queue or deployment?

Review:
- Are bot/reviewer comments checked?
- Is second-eyes preflight applied?
- Is rollback path described if implementation is involved?
```

## Promotion criteria

A future runtime work item may be considered for a scoped PR only if all are true:

- Sergey gives explicit approval for that specific runtime discussion or implementation;
- the proposed scope is narrow;
- authority and approval boundaries are written first;
- state mutation rules are written first;
- manual/advisory status is not mislabeled as automation;
- rollback or exit path is defined for any implementation;
- CI/branch-protection changes, if any, are approved separately;
- bot/reviewer comments and second-eyes review are required before merge.

## What must not be automated now

Do not use this checklist to implement or imply:

- runtime activation;
- route automation;
- validator layer;
- hard guardrails;
- policy layer;
- branch protection changes;
- CI gate promotion;
- registry mutation;
- archive protocol mutation;
- state-sync rewrite;
- book mode resume;
- infrastructure setup.

## Recommended current use

Use this document as a manual planning frame when Agent Shipyard / Agent Queue discussions approach runtime language.

If a future proposal uses words like `runtime`, `route`, `validator`, `guardrail`, `policy`, `broker`, `API`, `database`, `observability` or `deployment`, run this checklist first.

## Boundary

This document is an operations note and readiness map only.

It does not change runtime behavior, CI, branch protection, registry, route automation, validators, hard guardrails, archive protocol, project-state or book workflow.

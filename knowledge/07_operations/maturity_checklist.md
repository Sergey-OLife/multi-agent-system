# Maturity checklist

Status: diagnostic map. This file does not implement runtime, validators, observability, security tooling, or branch protection.

## Purpose

This checklist keeps practical maturity pressure on the project.

The project must not only describe itself well. It must keep proving that the architecture protects useful work rather than its own reflections.

## Current diagnosis

The project has become an engineering platform with a harder state contour:

- TypeScript / JavaScript provide orchestration and wrappers.
- Go provides deterministic checks and core commands.
- GitHub main records accepted state.
- CI and Sync Check participate in keeping state honest.
- README and documentation maps now give orientation.

Main risk: the system may start serving its own infrastructure instead of the book, product and user-facing value.

## Checklist classification

### Implemented or mostly implemented

- README / entrance map exists.
- CI and Sync Check run on PRs.
- Project state has machine-readable and human-readable mirrors.
- GitHub main is the source of truth.
- Agent lifecycle words are defined: proposal, mechanics, manual discipline, routed, validator, hard guardrail.
- Security boundary at project level: no runtime, validators, hard guardrails, branch protection or databases without separate decision.

### Partial / needs strengthening

- Clear one-sentence project purpose in README.
- Current GitHub workflow flow: command, source-of-truth read, preflight, PR, CI, approval, merge, state sync.
- Explicit agent role boundaries in one compact table or map.
- Knowledge / protocol consistency checks.
- Negative checks for failure patterns: missing source of truth, stale state, archive coverage gap, bot commit without final-head checks.
- Maintenance signals: recent PRs and state are visible, but this is not yet summarized as a health panel.

### Not yet applicable until runtime exists

- Runtime step limits, depth, retries, timeouts.
- Runtime output validators after model calls.
- Runtime observability: logs, traces, metrics, token and cost tracking.
- Runtime prompt injection boundary.
- Runtime data leakage boundary.
- Runtime evaluation suite on live agent scenarios.
- Runtime reproducibility through fixed prompts, versions, seeds and run records.

### Future runtime / needs separate decision

- Redis / Postgres shared state.
- Event log and snapshots.
- P2P task-local collaboration.
- Shared schema between TypeScript and Go.
- Message broker.
- OpenAPI or gRPC generation.
- Observability stack.

## Practical rule

Before adding a new maturity mechanism, ask:

1. What real failure does it prevent now?
2. Is the project already suffering from this failure?
3. Can README, protocol or CI solve it more simply?
4. Does it help the book/product, or only the infrastructure?
5. Who maintains it after merge?

## Red flag

If a new check only confirms what we already know, it is probably noise.

If a new check catches drift between state, docs, protocol, code or CI, it may be worth adding.

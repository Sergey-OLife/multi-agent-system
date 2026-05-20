# External assessment notes — 2026-05-20

Status: assessment notes / no implementation.

These notes record useful signals from two external-style assessments of the repository.

They do not implement runtime, routing, validators, hard guardrails, branch protection, databases, brokers, observability, releases, or production security tooling.

## Why this note exists

The assessments showed that the repository can be mistaken for a production multi-agent framework because of its name, agent vocabulary, Go/TypeScript tooling, CI workflows and active project discipline.

The current project truth is narrower:

- this is a GitHub-centered operating system for a book/project;
- it manages state, protocols, agent design, archives and review discipline;
- it is not a deployed multi-agent runtime;
- it is not a reusable public framework yet;
- manual disciplines are real workflow practices, not automated safety mechanisms.

## Signals worth accepting

### Branch protection must be verified

The external assessments repeatedly flagged main-branch protection.

Project state already says branch protection must not be treated as configured until explicitly verified.

Conclusion: the next practical step is branch protection verification, not immediate enforcement.

### Manual discipline must not be oversold

`critic_margin_agent`, `conversation_archive_librarian` and `margin_orchestra` are manual disciplines.

They reduce risk by forcing a second look, but they do not automatically block mistakes.

Conclusion: documentation must keep distinguishing manual discipline from validators and hard guardrails.

### State sync after merge is a real drift risk

The workflow allows a merged PR to need a separate state-sync PR.

This is acceptable as a controlled process, but it is also a drift risk if forgotten.

Conclusion: a future detector may be useful when protocol/state-sensitive files change but state files are not updated.

### CI / Sync Check should be easier to understand from outside

The repository uses CI and Sync Check, but external readers may not immediately see what each one checks.

Conclusion: a small checks overview may be useful later, without adding new tooling.

### Runtime readiness needs its own future checklist

Runtime concerns such as retries, timeouts, observability, prompt-injection resistance, data leakage, concurrency and release management are valid — but mostly not applicable to the current GitHub-centered mode.

Conclusion: record them as future runtime readiness requirements, not as current defects.

### Scripts boundary deserves an audit later

The assessments raised a possible risk that scripts may become a second core.

Current architecture says Go is the deterministic spine and scripts handle edge automation.

Conclusion: this should be checked by a scripts/core boundary audit before it becomes a claim or a fix.

## Points that are not appropriate as current criticism

### Missing Redis / Postgres / broker / observability is not a current defect

These are not forgotten components. They require separate decisions before implementation.

They become relevant only if the project moves toward runtime-centered orchestration or a reusable platform.

### No releases / packages is not a current blocking defect

The repository is an internal project operating system, not a public framework package.

Release and package discipline should be considered only if reuse or external distribution becomes a real goal.

### GitHub as state is a design choice in current mode

For the current project, GitHub main is the accepted source of truth.

A database-backed state model belongs to future runtime design, not the current operating mode.

### LLM layer is not decorative

The LLM layer is not authoritative, but it is not decorative.

It drafts, reasons, reviews and helps design. Sergey approves. GitHub records accepted state.

Better formulation: LLM is operationally useful but not an authority layer.

### Do not jump from verification to enforcement

Branch protection must be verified first.

If protection is absent or partial, enforcement requires a separate decision.

## Practical follow-up path

1. Merge the external-boundary clarification PR after checks and Sergey approval.
2. Verify branch protection and record the result.
3. Consider a small checks overview if external readability remains weak.
4. Consider a future runtime readiness checklist before any runtime implementation.
5. Consider a scripts/core boundary audit before claiming scripts are or are not becoming a second core.
6. Consider a warning-level detector for state-sync drift before any blocking validator.

## Boundary

These assessments are useful pressure, not a mandate to build a production runtime now.

The correct response is to clarify current maturity, close real near-term risks and preserve future runtime concerns without implementing them prematurely.

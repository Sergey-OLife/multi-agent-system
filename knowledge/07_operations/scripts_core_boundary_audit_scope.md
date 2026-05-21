# Scripts/core boundary audit scope

Status: discussion note only
Date: 2026-05-21
Scope: future audit framing

## 1. Why this note exists

External assessment and later project work raised a useful boundary question:

Are repository scripts still edge automation, or are they beginning to act as a second core beside the Go contract layer?

This note does not answer that question by changing code. It defines a future audit scope so the project can inspect the boundary without turning the concern into premature enforcement.

## 2. Current project framing

The current repository is a GitHub-centered book/project operating system.

It is not a production multi-agent runtime, reusable public framework, or deployed agent platform.

The current technical shape includes:

- Go code for deterministic/contract-oriented core work;
- TypeScript/JavaScript and scripts for repository automation and edge checks;
- GitHub workflows for existing CI and Sync Check;
- documentation and state files as the source of operational truth.

Recent work added lifecycle contracts v1 in `go-core/lifecycle/` as a pure Go contract vocabulary with unit tests.

That implementation is not enforcement, not route automation, not project-gate validator, not hard guardrail, not CI enforcement beyond existing tests, and not a policy layer.

## 3. Audit question

The future audit should answer one narrow question:

Do scripts remain edge automation around the project, or do they contain project-core decisions that should be documented, moved, mirrored, or explicitly accepted?

## 4. Non-goals

This discussion note does not approve or implement:

- code changes;
- script rewrites;
- Go package changes;
- CLI changes;
- GitHub Actions changes;
- new CI checks;
- validator behavior;
- hard guardrails;
- branch protection changes;
- runtime behavior;
- state-sync automation;
- lifecycle policy layer;
- repository restructure;
- book workflow changes.

It is not an implementation proposal and not an audit result.

## 5. Candidate files to inspect later

The audit should inspect current scripts and adjacent project contracts, including at minimum:

- `scripts/state-sync-drift-audit.mjs`;
- `scripts/run-sync-check.mjs`;
- `scripts/check-boundaries.mjs`;
- `scripts/hygiene-audit.mjs`;
- `scripts/archive-audit.mjs`;
- `scripts/run-registry-sync.mjs`;
- `package.json` script commands;
- `.github/workflows/ci.yml`;
- `.github/workflows/sync-check.yml`;
- `go-core/lifecycle/`;
- `knowledge/07_operations/checks_overview.md`;
- `knowledge/07_operations/state_sync_drift_detector_proposal.md`;
- `knowledge/07_operations/state_sync_drift_detector_implementation_proposal.md`;
- `knowledge/07_operations/state_sync_drift_audit_test_results_2026-05-21.md`.

This list is a starting scope, not a final inventory.

## 6. What counts as normal script work

Scripts can reasonably remain edge automation when they:

- read files and report diagnostics;
- wrap existing commands;
- check repository hygiene;
- support local operator review;
- make existing workflows easier to run;
- produce warning-only output;
- avoid changing source of truth by themselves;
- avoid making approval decisions;
- avoid claiming validator or hard-guardrail status;
- are documented as local tools or CI helpers.

Normal script work is not automatically a risk.

## 7. What may indicate second-core drift

The audit should flag possible second-core drift when scripts:

- define project lifecycle meaning independently of the Go contract layer;
- silently decide whether a state is valid or invalid without documented boundary;
- encode approval gates;
- decide whether a PR may merge beyond existing CI expectations;
- mutate project-state or archive indexes without explicit workflow decision;
- duplicate lifecycle vocabulary with different terms;
- treat manual discipline as automation;
- treat warning-only diagnostics as enforcement;
- become the only place where key project rules are expressed;
- contradict README, project-state, lifecycle proposal, or lifecycle v1 package;
- make runtime/security/platform claims not supported by current project mode.

A finding is not automatically a bug. It may be a documentation issue, a naming issue, or a legitimate future design pressure.

## 8. Classification model for findings

Future audit findings should be classified into four buckets:

| Status | Meaning | Example action |
|---|---|---|
| `already_ok` | Script behavior matches its documented boundary. | Leave as is. |
| `document_boundary` | Behavior is acceptable but under-documented. | Add or improve documentation. |
| `needs_design_decision` | Behavior may be valid but changes architecture meaning. | Discuss before implementation. |
| `move_or_refactor_later` | Core meaning likely belongs elsewhere or needs clearer ownership. | Prepare separate proposal only if needed. |

Do not use the audit to auto-generate implementation work.

## 9. Questions the audit should answer

- Which scripts are pure diagnostics?
- Which scripts participate in CI?
- Which scripts are local-only?
- Which scripts encode project vocabulary or lifecycle words?
- Which scripts duplicate meaning now covered by `go-core/lifecycle/`?
- Which scripts can fail a workflow, and under what documented rule?
- Which scripts are warning-only by design?
- Which scripts mutate files or state?
- Which scripts depend on archive or project-state structure?
- Which script behaviors are documented in `checks_overview.md`, project-state, or operation notes?

## 10. Expected audit output

A future audit should produce a small table, not a rewrite plan:

| File | Role | Boundary status | Risk | Recommended next step |
|---|---|---|---|---|

The audit should end with one of these conclusions:

- no action needed;
- documentation-only follow-up;
- narrow proposal needed;
- defer until runtime/framework direction changes.

## 11. Recommended next step

If Sergey chooses to continue this line later, run the scripts/core boundary audit using this scope.

The audit should be read-only first.

No script, Go package, workflow, validator, guardrail, branch protection or project-state automation should be changed without a separate decision.

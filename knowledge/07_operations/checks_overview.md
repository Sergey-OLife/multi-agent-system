# Checks overview

Status: operational documentation. This file documents existing checks and merge gates. It does not add validators, hard guardrails, runtime, routing, observability, releases, or production security tooling.

## Purpose

This document prevents confusion between workflow names, job names and GitHub required check contexts.

The confusion already appeared once after `Protect main` was enabled: the intended checks were first described as `CI` and `Sync Check`, but GitHub Rulesets required the exact check contexts produced by jobs.

## Gate vs advisory boundary

Checks are repository merge gates only when they are explicitly listed as required check contexts.

CI and Sync Check cover a subset of project invariants.

Lifecycle status, archive discipline, source-of-truth reading, manual second-eyes, reviewer comment handling and mode boundaries still rely on explicit review discipline unless a separate Sergey decision promotes a specific check to validator or hard gate.

## Protected branch gate

`main` / default branch is protected by GitHub Ruleset `Protect main`.

The current minimal gate is:

```yaml
merge_gate:
  protected_branch: "main / default branch"
  ruleset: "Protect main"
  requires_pull_request_before_merge: true
  required_status_checks:
    - "TypeScript / JavaScript / Go checks"
    - "sync-check"
  blocks_force_pushes: true
  restricts_deletions: true
  required_approvals: 0
  require_branches_up_to_date_before_merge: false
```

## Required checks

### `TypeScript / JavaScript / Go checks`

Source workflow file: `.github/workflows/ci.yml`

Workflow display name: `CI`

Job id: `checks`

GitHub required check context: `TypeScript / JavaScript / Go checks`

Runs on pull requests into `main` and manual dispatch.

Current steps:

- checkout;
- set up Node.js 20;
- set up Go from `go-core/go.mod`;
- install Node dependencies;
- source typecheck;
- test typecheck;
- TypeScript / JavaScript tests;
- Go tests;
- repository hygiene audit;
- conversation archive audit.

### `sync-check`

Source workflow file: `.github/workflows/sync-check.yml`

Workflow display name: `Sync Check`

Job id and GitHub required check context: `sync-check`

Runs on pull requests and on pushes to `main`.

Current steps:

- checkout;
- set up Node.js 20;
- set up Go from `go-core/go.mod`;
- build Go-core binary;
- run `npm run sync-check`.

## Important distinction

Workflow display names and required check contexts are not always the same.

For this repository:

```yaml
workflow_to_required_context:
  CI: "TypeScript / JavaScript / Go checks"
  Sync Check: "sync-check"
```

Rulesets must require the GitHub check contexts, not merely the friendly workflow names.

## Merge troubleshooting

If GitHub blocks merge with a required-checks message even when workflow runs look green:

1. Check the PR head SHA.
2. Check the actual check contexts shown on the PR.
3. Compare them with the Ruleset required checks.
4. Do not assume workflow name equals required check context.
5. If Ruleset check names were configured incorrectly, correct the Ruleset and record the correction.
6. Re-run or wait for checks on the latest PR head before merging.

## Boundary

This document describes repository-level checks only.

It does not create runtime validators, prompt-injection protection, observability, code-quality gates, agent hard guardrails, or production security tooling.

Future additions should be separate and explicit.

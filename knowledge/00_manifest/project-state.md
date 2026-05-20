# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.47
- lastCompletedVersion: v2.47
- lastMergedPr: PR #199 — Record branch protection ruleset activation
- lastMergeCommit: 00f9bd45bb26803be65544b70d34076dc0c6dacf
- currentMilestone: v2.47 Minimal branch protection Ruleset active
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.47

PR #199 recorded that Sergey enabled the minimal active GitHub Ruleset `Protect main` for `main` / default branch.

The Ruleset requires pull requests before merge and requires exact GitHub check contexts:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

It blocks force pushes and restricts deletions. Required approvals remain `0`. Branches are not required to be up to date before merging.

This is repository-level branch protection only. It is not runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.

## Current recovery path

1. Complete state sync after branch protection Ruleset activation.
2. Consider a small checks overview if external readability remains weak.
3. Consider a future runtime readiness checklist only by separate decision.
4. Consider a scripts/core boundary audit only if needed.
5. Consider a warning-level detector for state-sync drift only by separate decision.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are `TypeScript / JavaScript / Go checks` and `sync-check`.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, or project-state sync.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete state sync after branch protection Ruleset activation.

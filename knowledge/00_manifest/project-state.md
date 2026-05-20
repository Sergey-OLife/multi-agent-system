# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.48
- lastCompletedVersion: v2.48
- lastMergedPr: PR #201 — Document required checks and merge gates
- lastMergeCommit: 5fb507895d137843be5885f9bc490dc89f397088
- currentMilestone: v2.48 Required checks and merge gates documented
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.48

PR #201 added `knowledge/07_operations/checks_overview.md` and linked it from README.

The checks overview documents the protected `main` merge gate and the exact GitHub required check contexts:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

It also records the distinction between workflow display names and required check contexts.

This is operational documentation only. It is not runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, routing, releases, or production security tooling.

## Current recovery path

1. Complete short state sync after checks overview.
2. Consider a state-sync drift detector proposal as a separate design step.
3. Consider a future runtime readiness checklist only by separate decision.
4. Consider a scripts/core boundary audit only if needed.

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
- Required checks and merge gates are documented in `knowledge/07_operations/checks_overview.md`.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, runtime, registry status changes, or project-state sync.
- Do not treat repository-level branch protection as runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Complete short state sync after checks overview.

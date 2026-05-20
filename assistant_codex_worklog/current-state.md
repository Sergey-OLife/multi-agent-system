# Current State — Assistant × Codex

Date: 2026-05-20

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #201 — Document required checks and merge gates
- Status: merged
- Merge commit: `5fb507895d137843be5885f9bc490dc89f397088`

## Current version

- currentVersion: v2.48
- currentMilestone: Required checks and merge gates documented

## PR #201 result

PR #201 added `knowledge/07_operations/checks_overview.md` and linked it from README.

It documents the protected `main` merge gate and the exact GitHub required check contexts:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

It also records the distinction between workflow display names and required check contexts.

Status: operational documentation only. It is not runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, routing, releases, or production security tooling.

## Current active manual disciplines

- `critic_margin_agent` manual preflight discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline.

## Next safe step

Complete short state sync after checks overview.

After that, consider a state-sync drift detector proposal as a separate design step, not implementation.

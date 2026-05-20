# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.42
- currentMilestone: Archive librarian manual discipline active
- lastMergedPr: PR #188 — Activate archive librarian manual discipline
- lastMergeCommit: `9882209dfdc1697b182ea288c633969f12c9ae12`

## Recent PR summary

- PR #185 — Record consistency check.
- PR #186 — Record post-185 focus.
- PR #187 — Sync state after PR #186.
- PR #188 — Activate archive librarian manual discipline.
- PR #189 — Sync state after PR #188.

## Status

`conversation_archive_librarian` is active as manual archive discipline only.

Status: manual discipline only. Routes, validators, hard guardrails, branch protection, runtime, registry status change, project-state sync, ChatGPT memory use and book work were not changed.

## Newly recorded plan

Before deeper architecture work, record the current chat and recovery path:

1. archive this chat using the active archive discipline;
2. run full checkpoint after archive work;
3. add a new `рестарт` command protocol;
4. update the project instructions for `Пишем книгу` so the command is recognized correctly in a new chat.

`рестарт` should mean: continue work from GitHub source of truth, read the current resume files, name the current point, open PRs, approval gates and next safe step. It is not archive, not checkpoint, not memory-save and not a new topic.

## Metaphor correction

The ship carries both cargo and passengers.

Cargo: reusable architecture for designing future multi-agent systems.

Passengers: books, chapters, characters, scenes, voices and reader routes.

The ship needs a strong hull and working engine, but passengers also need cabins. Details, atmosphere and even “ruffles” are valid when they make the book livable rather than replacing the hull.

## Approved next sequence

1. record restart-command plan;
2. archive this chat;
3. run full checkpoint;
4. add `рестарт` command protocol and project instruction;
5. hardening `margin_orchestra`;
6. branch protection verification.

## Recommended next work item

Archive this chat using the active archive discipline.

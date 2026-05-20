# Sergey-OLife / multi-agent-system

This repository is the GitHub source of truth for the book/project operating system.

## Current project point

- Mode: Agent Shipyard / Agent Queue.
- Book work is paused until separate Sergey decision.
- Current state is recorded in `knowledge/00_manifest/project-state.json` and mirrored in `knowledge/00_manifest/project-state.md`.
- Use `assistant_codex_worklog/current-state.md`, `roadmap.md`, and `restart-prompt.md` to resume work.

## Architecture spine

- GitHub `main` records accepted state.
- Go is the deterministic spine.
- TypeScript / JavaScript connect CLI, scripts, and agent-facing orchestration.
- Scripts handle edge automation, not a second core.
- LLM reasons and drafts.
- Sergey approves.

## Active manual disciplines

- `critic_margin_agent` manual preflight: active only as a protocol discipline before high-risk GitHub margin operations.

It is not routing, validator, hard guardrail, branch protection, registry status change, or runtime.

## Proposal / not active

- `conversation_archive_librarian`: proposal plus activation mechanics, not activated.
- `margin_orchestra`: design-only, not a hard guardrail.
- Other listed agents in registry remain proposal/container unless explicitly synced otherwise.

## Checks before merge

When applicable, PR readiness means both:

- Sync Check
- CI

`+` continues the next safe step. `++` approves the current clear approval-gate. `+++` performs the nearest grounded safe action without bypassing gates.

## Do not confuse

- Proposal is not activation.
- Mechanics is not activation.
- Manual discipline is not route automation.
- Open PR is not implemented.
- Closed-unmerged PR is not implemented.
- Archive is not project-state.
- ChatGPT memory is not the repository.

## Next useful work

Choose one:

1. controlled activation for `conversation_archive_librarian` manual discipline;
2. harden `margin_orchestra` into protocol / tooling;
3. branch protection verification;
4. return to Book Fast Track by separate decision.

# Sergey-OLife / multi-agent-system

This repository is the GitHub source of truth for the book/project operating system.

In plain language: this repo is the map of the ship. Chat can discuss, LLM can draft, but accepted project state must be visible in GitHub.

## Start here

- Current state: `knowledge/00_manifest/project-state.json` and `knowledge/00_manifest/project-state.md`.
- Resume files: `assistant_codex_worklog/current-state.md`, `assistant_codex_worklog/roadmap.md`, `assistant_codex_worklog/restart-prompt.md`.
- Current mode: Agent Shipyard / Agent Queue.
- Book work is paused until a separate Sergey decision.

## Architecture in one page

- GitHub `main` records accepted state.
- Go is the deterministic spine.
- TypeScript / JavaScript connect CLI, scripts, and agent-facing orchestration.
- Scripts handle edge automation, not a second core.
- LLM reasons and drafts.
- Sergey approves.

Current architecture is GitHub-centered, not runtime-centered.

Future runtime target, if separately approved: coordinator-centered orchestration with a task-local full-mesh module bus.

Meaning: coordinator owns workflow, routing, assignment, policy and final status. Modules may consult each other through task-local channels, but they do not mutate global state directly. Important peer outcomes must be committed back to the central source of truth.

Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, message broker, branch protection, validators and hard guardrails require separate decisions before implementation.

## What is active now

- `critic_margin_agent` manual preflight is active only as a protocol discipline before high-risk GitHub margin operations.
- It checks operation class, hidden assumption, hidden risk, approval gate, and next safe step.
- It is not routing, validator, hard guardrail, branch protection, registry status change, or runtime.

## What is not active yet

- `conversation_archive_librarian`: proposal plus activation mechanics, not activated.
- `margin_orchestra`: design-only coordination pattern for second-eyes voices and critic tools; not a separate authority and not runtime.
- Other agents in registry remain proposal/container unless a merged PR says otherwise.

## Archive rules

Conversation archive is not project-state and not ChatGPT memory.

- `#архив чата` prepares a draft archive entry.
- `#архив чата сохрани` prepares a GitHub PR for archive entry and index update when allowed.
- `#архив_старт` is cumulative write-first archive work, not last-topic-only.
- No archive entry is a full-chat checkpoint unless it explicitly says `coverage_scope: full_chat`.
- If several archive PRs can conflict through `knowledge/08_conversation_archive/index.md`, use parallel intake or later consolidation.

## Vision intake

Sergey vision notes and archive reasoning are tracked as source material, not automatic architecture.

Use `knowledge/07_operations/vision_intake_map.md` to classify ideas as implemented, accepted principle, open loop, future hypothesis, or do-not-implement-without-separate-decision.

When an idea is implemented, record where it landed: PR, file, protocol, agent, roadmap item, rejected note, or superseded note.

## Lifecycle words

- container: named possible agent, not written yet;
- proposal: described agent, not active;
- mechanics: activation meaning is defined, but not active;
- manual discipline: active human/LLM protocol use, not automation;
- routed: agent participates in routing;
- validator: automated check;
- hard guardrail: blocking rule.

## Merge discipline

When applicable, PR readiness means both Sync Check and CI.

`+` continues the next safe step. `++` approves the current clear approval-gate. `+++` performs the nearest grounded safe action without bypassing gates.

## Do not confuse

- Proposal is not activation.
- Mechanics is not activation.
- Manual discipline is not route automation.
- Open PR is not implemented.
- Closed-unmerged PR is not implemented.
- Archive is not project-state.
- ChatGPT memory is not the repository.
- README is a map, not a dumping ground.

## Next useful work

Choose one:

1. controlled activation for `conversation_archive_librarian` manual discipline;
2. harden `margin_orchestra` into protocol / tooling;
3. branch protection verification;
4. return to Book Fast Track by separate decision.

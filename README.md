# Sergey-OLife / multi-agent-system

This repository is the GitHub source of truth for the book/project operating system.

In plain language: this repo is the map of the ship. Chat can discuss, LLM can draft, but accepted project state must be visible in GitHub.

## What this project solves

This project keeps book work, agent design, decisions, archives, state and technical boundaries from being lost in chats or confused with implemented reality.

## What this project is not

This repository is not a production multi-agent runtime, not a reusable public framework, and not a deployed agent platform.

Current maturity is a GitHub-centered operating system for a book/project: state, protocols, agent design, archives, review discipline and future architecture decisions.

Runtime orchestration, route automation, validators, hard guardrails, databases, message brokers, observability and production security boundaries require separate decisions before implementation.

Minimal repository branch protection is active through the GitHub Ruleset documented in `knowledge/07_operations/branch_protection_verification_2026-05-20.md` and `knowledge/07_operations/checks_overview.md`. Further branch-protection strengthening remains a separate decision.

Manual discipline is a real workflow layer, but it must not be described as automated safety.

## Start here

- Current state: `knowledge/00_manifest/project-state.json` and `knowledge/00_manifest/project-state.md`.
- Resume files: `assistant_codex_worklog/current-state.md`, `assistant_codex_worklog/roadmap.md`, `assistant_codex_worklog/restart-prompt.md`.
- Documentation topology: `knowledge/07_operations/documentation_topology.md`.
- Maturity checklist: `knowledge/07_operations/maturity_checklist.md`.
- Checks and merge gates: `knowledge/07_operations/checks_overview.md`.
- Current mode: Agent Shipyard / Agent Queue.
- Book work is paused until a separate Sergey decision.

## Current workflow

User command -> read GitHub source of truth -> apply manual preflight at margin points -> create PR -> wait for CI and Sync Check -> Sergey approval -> merge -> state sync when needed.

Open PR is not implemented. Merged PR without state sync may still need a separate state-sync PR.

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

Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, message broker, validators and hard guardrails require separate decisions before implementation.

## Second-eyes topology

Second-eyes work follows a similar coordinator-plus-instruments pattern.

- `critic_margin_agent` is the coordinator voice for margin checks.
- It may call for a specific second-eyes instrument when the risk needs it.
- `margin_orchestra` is the manual second-eyes preflight pattern for margin points.
- The critic does not become approval authority.
- The orchestra does not become a separate runtime, committee, validator, hard guardrail, branch protection, or registry status change.

Currently this is manual protocol discipline only. It is not routing, validator, hard guardrail, branch protection, registry status change, or runtime.

## Agent status

| Agent / pattern | Current status | Boundary |
|---|---|---|
| `critic_margin_agent` | active manual preflight discipline | not routed, not validator, not hard guardrail |
| `conversation_archive_librarian` | active manual archive discipline | not routed, not validator, not hard guardrail |
| `margin_orchestra` | active manual second-eyes preflight discipline | not routed, not runtime, not committee, not authority |
| other registry agents | proposal/container unless merged PR says otherwise | not active by default |

## Archive rules

Conversation archive is not project-state and not ChatGPT memory.

- `#архив чата` prepares a draft archive entry.
- `#архив чата сохрани` prepares a GitHub PR for archive entry and index update when allowed.
- `#архив_старт` is cumulative write-first archive work, not last-topic-only.
- `conversation_archive_librarian` manual discipline applies to archive commands and archive PR decisions.
- No archive entry is a full-chat checkpoint unless it explicitly says `coverage_scope: full_chat`.
- If several archive PRs can conflict through `knowledge/08_conversation_archive/index.md`, use parallel intake or later consolidation.

## Vision intake

Sergey vision notes and archive reasoning are tracked as source material, not automatic architecture.

Use `knowledge/07_operations/vision_intake_map.md` to classify ideas as implemented, accepted principle, open loop, future hypothesis, or do-not-implement-without-separate-decision.

When an idea is implemented, record where it landed: PR, file, protocol, agent, roadmap item, rejected note, or superseded note.

## Documentation growth

README is the entrance map, not the whole building.

It may expand while clarity improves. When it becomes too dense, keep the headline rule here, move details into a focused document, and link to it.

Do not optimize by deleting meaning. Optimize by splitting, merging, marking implemented_elsewhere, and replacing repeated explanations with links.

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

Required check contexts for protected `main` are documented in `knowledge/07_operations/checks_overview.md`.

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

Do not treat this README as the live roadmap.

For the current next action, read:

- `knowledge/00_manifest/project-state.json`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`.

Recent operations review notes may also define the next selected discussion, but they do not replace project-state or worklog files.
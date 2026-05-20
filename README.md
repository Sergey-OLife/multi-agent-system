# Sergey-OLife / multi-agent-system

This repository is the GitHub source of truth for the book/project operating system.

In plain language: this repo is the map of the ship. Chat can discuss, LLM can draft, but accepted project state must be visible in GitHub.

## Where we are now

- Mode: Agent Shipyard / Agent Queue.
- Book work is paused until a separate Sergey decision.
- Current state is recorded in `knowledge/00_manifest/project-state.json` and mirrored in `knowledge/00_manifest/project-state.md`.
- Resume from `assistant_codex_worklog/current-state.md`, `roadmap.md`, and `restart-prompt.md`.

## Architecture spine

- GitHub `main` records accepted state.
- Go is the deterministic spine.
- TypeScript / JavaScript connect CLI, scripts, and agent-facing orchestration.
- Scripts handle edge automation, not a second core.
- LLM reasons and drafts.
- Sergey approves.

This is not a P2P runtime. Global state and accepted decisions are centralized in GitHub. Any future Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, or branch protection change requires a separate decision.

## Second-eyes layer

`critic_margin_agent` is active only as manual preflight discipline before high-risk GitHub margin operations.

It checks the operation class, hidden assumption, hidden risk, approval gate, and next safe step.

It is not routing, validator, hard guardrail, branch protection, registry status change, or runtime.

`margin_orchestra` is design-only. It is the critic's possible coordination pattern for second-eyes voices and local instruments, not a separate authority and not an automatic agent runtime.

## Archive layer

Conversation archive is not project-state and not ChatGPT memory.

Archive commands must preserve meaning, not raw transcript dumps:

- `#архив чата` prepares a draft archive entry.
- `#архив чата сохрани` prepares a GitHub PR for archive entry and index update when allowed.
- `#архив_старт` is cumulative write-first archive work and must check coverage, previous checkpoint, full-chat marker, and gaps.

No archive entry is a full-chat checkpoint unless it explicitly says `coverage_scope: full_chat`.

If several archive PRs can conflict through `knowledge/08_conversation_archive/index.md`, use parallel intake or later consolidation instead of forcing a messy merge.

`conversation_archive_librarian` has proposal and activation mechanics, but is not activated yet.

## Implemented elsewhere / cleanup

When an idea is implemented, do not leave it floating as a live wish.

Mark where it landed: PR, file, protocol, agent, roadmap item, rejected note, or superseded note.

This is how the project avoids repeating the same idea as if it were still unresolved.

## Vision intake

Some project decisions came from Sergey vision notes and archive entries: future bugs, architecture risks, idea lists, red flags, shared storage thoughts, TS/JS + Go challenges, and corrective archive notes.

Those notes are not automatically implemented architecture. They must be classified as:

- implemented;
- accepted principle;
- open loop;
- future hypothesis;
- do not implement without separate decision.

See `knowledge/07_operations/vision_intake_map.md`.

## Proposal / mechanics / activation

Do not confuse lifecycle stages:

- container: named possible agent, not written yet;
- proposal: described agent, not active;
- mechanics: activation meaning is defined, but not active;
- manual discipline: active human/LLM protocol use, not automation;
- routed: agent participates in routing;
- validator: automated check;
- hard guardrail: blocking rule.

## Checks before merge

When applicable, PR readiness means both:

- Sync Check;
- CI.

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

# Conversation archive librarian manual discipline

Status: active manual discipline. No automation.

Use `conversation_archive_librarian` as the manual preflight voice for archive commands and archive PR decisions.

## Call points

- `#архив чата`
- `#архив чата сохрани`
- `#архив_старт`
- archive PR creation
- archive coverage review
- archive index conflict
- archive consolidation decision
- failed archive PR retry

## Required output

The preflight must name:

- archive mode
- origin type
- coverage scope
- coverage target
- allowed writes
- forbidden writes
- hidden risk
- approval gate
- next safe step

## Boundaries

This is manual discipline only.

It does not add routes, validators, hard guardrails, branch protection, runtime changes, registry status changes, project-state sync, ChatGPT memory use, or book work.

## Rules

- Archive is not project-state.
- Archive is not technical checkpoint.
- Archive is not ChatGPT memory.
- Missing `coverage_scope: full_chat` marker means thematic by default.
- Open PR is not implemented.
- Closed-unmerged PR is not implemented.
- `#архив_старт` is cumulative capture, not last-topic-only.
- Parallel archive intake must not force `index.md` conflicts.

## Approval gate

Archive PR merge still requires explicit `++`.

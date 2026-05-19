# Current State — Assistant × Codex

Date: 2026-05-19

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

## Latest merged PR

- PR #165 — Sync registry for conversation archive librarian
- Status: merged
- Merge commit: `5b98794f466e9d4722eb308e590c955eb0ae771a`

## Current version

- currentVersion: v2.32
- currentMilestone: Registry sync request flow and conversation archive librarian registry synced

## Open approval gates

No open PRs before this state sync PR.

## Closed unmerged PRs that are not implemented

- PR #141
- PR #145
- PR #152
- PR #162
- PR #164

## PR #165 result

PR #165 recorded `conversation_archive_librarian` in `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`.

The agent remains proposal-only. It is not activated, routed, or converted into a hard guardrail.

The registry update was produced by request-driven Go-backed registry sync, not by manual full-file replacement.

## Registry sync request flow

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- PR #165 used the flow successfully for `conversation_archive_librarian`.

Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 was closed unmerged for that reason. PR #165 reopened the final-head branch and passed CI plus Sync Check before merge.

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
#архив_старт
```

Current archive rules:

- Origin block is required for new archive entries.
- Coverage check must include `Coverage applies to`.
- `coverage_scope: full_chat` is valid only for the named target origin.
- Parallel archive PRs must not update `knowledge/08_conversation_archive/index.md`.
- Open PR is not implemented.
- `conversation_archive_librarian` proposal and registry entry exist, but activation has not been done.

## CI and Sync Check

- `.github/workflows/ci.yml` exists.
- `.github/workflows/sync-check.yml` exists.
- PR readiness means both Sync Check and CI when both apply.
- Branch protection is not configured.
- PR #165 had green CI and Sync Check before merge.

## Repository hygiene

```bash
npm run hygiene:audit
npm run archive:audit
```

Branch cleanup remains `cleanup_needed`, not `completed`.

## Standing agent status

Proposal-only agents include:

- `workflow_conductor_agent`
- `agent_registry_librarian`
- `approval_gate_keeper`
- `project_state_synchronizer`
- `checkpoint_compressor_agent`
- `source_card_builder`
- `copyright_boundary_guard`
- `svod_guard`
- `contextologist_agent`
- `sergey_interaction_profiler`
- `author_style_memory_agent`
- `banality_alarm_agent`
- `anti_cliche_editor`
- `conversation_archive_librarian`

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Next safe step

Choose the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, `critic_margin_agent` / `margin_orchestra` design, README / architecture map, or branch protection verification.

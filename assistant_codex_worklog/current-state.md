# Current State — Assistant × Codex

Date: 2026-05-20

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

## Latest merged PR

- PR #170 — Sync registry for critic margin agent
- Status: merged
- Merge commit: `a32983b15e8c53533f852cdb5787ae2ed614e28b`

## Current version

- currentVersion: v2.34
- currentMilestone: Critic margin agent registry synced

## Open approval gates

No open PRs before this state sync PR.

## Closed unmerged PRs that are not implemented

- PR #141
- PR #145
- PR #152
- PR #162
- PR #164
- PR #169

## PR #170 result

PR #170 recorded `critic_margin_agent` in `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`.

Status: proposal only; not activated; not routed; not a hard guardrail; not an automated validator.

The registry update was produced by request-driven Go-backed registry sync.

## Second-eyes preflight layer

`critic_margin_agent` exists as proposal and registry entry.

`margin_orchestra` remains design-only after PR #167.

Use the second-eyes design before margin-point operations.

## Registry sync request flow

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- PR #165 used the flow for `conversation_archive_librarian`.
- PR #170 used the flow for `critic_margin_agent`.

Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 and PR #169 were closed unmerged for that reason.

## CI and Sync Check

- `.github/workflows/ci.yml` exists.
- `.github/workflows/sync-check.yml` exists.
- PR readiness means both Sync Check and CI when both apply.
- Branch protection is not configured.
- PR #170 had green CI and Sync Check before merge.

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
- `critic_margin_agent`

## Next safe step

Choose the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, controlled activation proposal for `critic_margin_agent`, hardening `margin_orchestra`, README / architecture map, or branch protection verification.

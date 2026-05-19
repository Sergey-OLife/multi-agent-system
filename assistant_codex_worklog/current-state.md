# Current State — Assistant × Codex

Date: 2026-05-19

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

## Latest merged PR

- PR #167 — Add second-eyes preflight design
- Status: merged
- Merge commit: `22bee4a9f5e0cacfa130fd41992651c780c9a578`

## Current version

- currentVersion: v2.33
- currentMilestone: Second-eyes preflight design synced

## Open approval gates

No open PRs before this state sync PR.

## Closed unmerged PRs that are not implemented

- PR #141
- PR #145
- PR #152
- PR #162
- PR #164

## PR #167 result

PR #167 added:

- `knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md`
- `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md`

Status:

- proposal/design only;
- `critic_margin_agent` is not activated;
- `critic_margin_agent` is not in registry yet;
- `margin_orchestra` is not a hard guardrail;
- no validator or route change was added.

## Second-eyes preflight layer

The second-eyes layer is a preflight design for margin points where hidden assumptions can break an otherwise correct step.

Use it before:

- registry sync;
- agent activation;
- route changes;
- archive PR creation;
- state sync;
- workflow changes;
- checkpoint full;
- branch protection changes.

## Registry sync request flow

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- PR #165 used the flow successfully for `conversation_archive_librarian`.

Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 was closed unmerged for that reason.

## CI and Sync Check

- `.github/workflows/ci.yml` exists.
- `.github/workflows/sync-check.yml` exists.
- PR readiness means both Sync Check and CI when both apply.
- Branch protection is not configured.
- PR #167 had green CI and Sync Check before merge.

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

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Next safe step

Choose the next Agent Shipyard item: registry sync for `critic_margin_agent`, controlled activation proposal for `conversation_archive_librarian`, hardening `margin_orchestra` into protocol/tooling, README / architecture map, or branch protection verification.

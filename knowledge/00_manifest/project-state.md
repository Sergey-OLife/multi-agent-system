# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.34
- lastCompletedVersion: v2.34
- lastMergedPr: PR #170 — Sync registry for critic margin agent
- lastMergeCommit: a32983b15e8c53533f852cdb5787ae2ed614e28b
- currentMilestone: v2.34 Critic margin agent registry synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #165 — Sync registry for conversation archive librarian
- PR #166 — Sync state after PR #165
- PR #167 — Add second-eyes preflight design
- PR #168 — Sync state after PR #167
- PR #169 — closed unmerged; superseded by PR #170
- PR #170 — Sync registry for critic margin agent

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that must not be treated as implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.
- PR #169 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check; superseded by PR #170.

## What changed in v2.34

PR #170 recorded `critic_margin_agent` in:

- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`

Status:

- proposal only;
- not activated;
- not routed;
- not a hard guardrail;
- not an automated validator.

The registry update was produced through request-driven Go-backed registry sync.

## Second-eyes preflight layer

`critic_margin_agent` exists as proposal and registry entry after PR #170.

`margin_orchestra` remains design-only after PR #167.

Use the second-eyes design as reference before:

- registry sync;
- agent activation;
- route changes;
- archive PR creation;
- state sync;
- workflow changes;
- checkpoint full;
- branch protection changes.

## Registry sync request flow

PR #160 implemented `.github/workflows/registry-sync-request.yml`.

PR #163 extended deterministic Go registry sync:

- `go-core/cmd/agent-registry-sync/main.go`
- `go-core/cmd/agent-registry-sync/main_test.go`

The Go command can mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required registry fields.

PR #165 recorded `conversation_archive_librarian` in the registry as proposal-only.

PR #170 recorded `critic_margin_agent` in the registry as proposal-only.

Known caveat: bot-generated registry commits may not trigger final-head CI automatically. In that case, close the first request PR unmerged and open a new PR on the final head.

## Baseline CI and Sync Check

CI workflow:

- `.github/workflows/ci.yml`

Sync Check workflow:

- `.github/workflows/sync-check.yml`

Current rule: when both workflows apply, PR verification means both Sync Check and CI, not CI alone.

PR #170 had CI and Sync Check green before merge.

Branch protection remains not configured until explicitly verified.

## Current agent queue status

Proposal only, not activated:

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

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- Required PR verification layer currently includes Sync Check and CI, not CI alone.
- PR #169 was closed unmerged and must not be treated as implemented.
- PR #170 recorded `critic_margin_agent` in registry as proposal-only, not activation.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not activate `critic_margin_agent` without controlled activation and separate approval.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Decide the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, controlled activation proposal for `critic_margin_agent`, hardening `margin_orchestra` into protocol/tooling, README / architecture map, or branch protection verification.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.33
- lastCompletedVersion: v2.33
- lastMergedPr: PR #167 — Add second-eyes preflight design
- lastMergeCommit: 22bee4a9f5e0cacfa130fd41992651c780c9a578
- currentMilestone: v2.33 Second-eyes preflight design synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #160 — Add registry sync request workflow
- PR #161 — Fix registry sync request trigger
- PR #163 — Extend registry sync to insert missing agents
- PR #165 — Sync registry for conversation archive librarian
- PR #166 — Sync state after PR #165
- PR #167 — Add second-eyes preflight design

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that must not be treated as implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.

## What changed in v2.33

PR #167 added:

- `knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md`
- `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md`

This is proposal/design only:

- `critic_margin_agent` is not activated;
- `critic_margin_agent` is not routed;
- `critic_margin_agent` is not recorded in `agent_container_registry.md` yet;
- `margin_orchestra` is not a hard guardrail;
- no automated validator was added.

## Second-eyes preflight layer

The second-eyes layer exists to catch hidden assumptions before margin-point operations.

Use it as a design reference before:

- registry sync;
- agent activation;
- route changes;
- archive PR creation;
- state sync;
- workflow changes;
- checkpoint full;
- branch protection changes.

It was created after the registry-sync incident where the workflow was correct but the operation assumption was wrong: the old sync path assumed the target agent already existed in registry.

## Registry sync request flow

PR #160 implemented `.github/workflows/registry-sync-request.yml`.

PR #161 added pull_request fallback trigger.

PR #163 extended deterministic Go registry sync:

- `go-core/cmd/agent-registry-sync/main.go`
- `go-core/cmd/agent-registry-sync/main_test.go`

The Go command can mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required registry fields.

PR #165 recorded `conversation_archive_librarian` in the registry as proposal-only.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Current archive status:

- latest merged archive entry: `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md`;
- librarian proposal: merged in PR #158, registry synced in PR #165, not activated;
- `critic_margin_agent` is design/proposal only after PR #167.

## Baseline CI and Sync Check

CI workflow:

- `.github/workflows/ci.yml`

Sync Check workflow:

- `.github/workflows/sync-check.yml`

Current rule: when both workflows apply, PR verification means both Sync Check and CI, not CI alone.

PR #167 had CI and Sync Check green before merge.

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

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- Required PR verification layer currently includes Sync Check and CI, not CI alone.
- PR #152, PR #162 and PR #164 were closed unmerged and must not be treated as implemented.
- PR #167 added second-eyes preflight design only, not activation.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not activate `critic_margin_agent` without registry sync, controlled activation and separate approval.
- Do not treat `margin_orchestra` as hard guardrail or automated validator.
- Do not create hard guardrails without separate approval and PR.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162 or PR #164 as implemented.

## Next action

Decide the next Agent Shipyard item: registry sync for `critic_margin_agent`, controlled activation proposal for `conversation_archive_librarian`, hardening `margin_orchestra` into protocol/tooling, README / architecture map, or branch protection verification.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.32
- lastCompletedVersion: v2.32
- lastMergedPr: PR #165 — Sync registry for conversation archive librarian
- lastMergeCommit: 5b98794f466e9d4722eb308e590c955eb0ae771a
- currentMilestone: v2.32 Registry sync request flow and conversation archive librarian registry synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #158 — Add conversation archive librarian proposal
- PR #160 — Add registry sync request workflow
- PR #161 — Fix registry sync request trigger
- PR #163 — Extend registry sync to insert missing agents
- PR #165 — Sync registry for conversation archive librarian

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that must not be treated as implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.

## Repository architecture contract

PR #131 implemented:

- `knowledge/07_operations/repository_architecture_contract.md`

Contract fixed GitHub `main` as current source of truth, Go as deterministic spine, TypeScript / JavaScript as orchestration, `scripts/` as edge automation, event envelope as future contract, and Redis/Postgres/P2P as future runtime layers only.

Branch protection remains not configured until explicitly verified.

## Knowledge consistency protocol

PR #149 implemented:

- `knowledge/07_operations/knowledge_consistency_protocol.md`

The protocol fixes source-of-truth hierarchy, consistency classes C0-C5, merge aftermath checks, narrow state sync PR boundary, PR body consistency contract, red-flag phrases, observed drift patterns, follow-up consistency PR conditions, CI and Sync Check rules, future validator relationship and exit criteria.

It does not implement Go validator, JS audit, branch protection, README, agent activation or runtime changes.

## Registry sync request flow

PR #160 implemented:

- `.github/workflows/registry-sync-request.yml`

PR #161 added pull_request fallback trigger.

PR #163 extended deterministic Go registry sync:

- `go-core/cmd/agent-registry-sync/main.go`
- `go-core/cmd/agent-registry-sync/main_test.go`

The Go command can now mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required registry fields.

PR #165 used request-driven Go-backed registry sync to record `conversation_archive_librarian` in:

- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`

Important caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 was closed unmerged because of this; PR #165 was opened on the final head and passed CI + Sync Check before merge.

## Archive origin and parallel intake protocol

PR #153 implemented:

- `knowledge/08_conversation_archive/archive_origin_protocol.md`

The protocol fixes:

- new archive entries require an `Origin` block;
- `coverage_scope: full_chat` requires a target in `Coverage applies to`;
- full-chat coverage without origin target is invalid;
- single-lane archive mode: entry + index update in one PR;
- parallel intake mode: entry-only PR without `index.md` update;
- if another archive PR already updates `index.md`, a new archive PR must use parallel intake mode or wait;
- index consolidation after parallel entry-only PRs is a separate PR.

## PR #158 conversation archive librarian proposal

PR #158 added:

- `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`

The agent is proposal only. It is not activated, not routed and not a hard guardrail.

PR #165 later recorded it in the registry as proposal-only.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/archive_origin_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`
- `scripts/archive-audit.mjs`

Audit command:

```bash
npm run archive:audit
```

Current archive status:

- latest merged archive entry: `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md`;
- open archive PR: none;
- closed superseded/unmerged PRs: PR #133, PR #139, PR #141, PR #145, PR #152;
- librarian proposal: merged in PR #158, registry synced in PR #165, not activated.

## Baseline CI and Sync Check

CI workflow:

- `.github/workflows/ci.yml`
- commands: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`

Sync Check workflow:

- `.github/workflows/sync-check.yml`
- command: `npm run sync-check`

Current rule: when both workflows apply, PR verification means both Sync Check and CI, not CI alone.

PR #165 had CI and Sync Check green before merge.

## Repository hygiene

Repository hygiene audit is available as `npm run hygiene:audit`.

Ledger: GitHub issue #99 — Repository hygiene ledger.

Branch cleanup remains `cleanup_needed`, not `completed`.

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
- PR #158 added `conversation_archive_librarian` as proposal only, not activation.
- PR #165 recorded `conversation_archive_librarian` in registry as proposal only, not activation.
- Parallel archive PRs must not update `index.md`.
- Branch protection remains not configured until explicitly verified.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not activate `conversation_archive_librarian` without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.
- Do not treat PR #141, PR #145, PR #152, PR #162 or PR #164 as implemented.
- Do not treat PR #146 as full-chat coverage.
- Do not update `knowledge/08_conversation_archive/index.md` from parallel archive PRs.

## Next action

Decide the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, `critic_margin_agent` / `margin_orchestra` design, README / architecture map, or branch protection verification.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

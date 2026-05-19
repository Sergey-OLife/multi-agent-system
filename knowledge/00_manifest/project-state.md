# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.31
- lastCompletedVersion: v2.31
- lastMergedPr: PR #158 — Add conversation archive librarian proposal
- lastMergeCommit: 4fc8f41145b0c31eb06cd6b65f09e068d58d00fa
- currentMilestone: v2.31 Conversation archive librarian proposal synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #151 — Checkpoint full after knowledge consistency state sync
- PR #153 — Add archive origin and parallel intake protocol
- PR #154 — Sync state after archive origin protocol
- PR #152 — Archive Khmelevskaya style optic and command correction closed unmerged
- PR #155 — Sync state after closing PR #152
- PR #158 — Add conversation archive librarian proposal

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that must not be treated as implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to discipline mandatory.

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

## PR #152 closure

PR #152 was closed without merge after PR #153 changed the archive-entry discipline. Do not treat PR #152 as implemented.

## PR #155 state sync

PR #155 synchronized state/worklog/restart files after PR #152 was closed unmerged. It did not create archive entries, update `index.md`, activate agents, change runtime code or continue the book.

## PR #158 conversation archive librarian proposal

PR #158 added:

- `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`

The agent is proposal only. It is not activated, not routed and not a hard guardrail.

PR #158 intentionally did not update registry, routes, project-state, archive index, runtime code, tests, validators, branch protection or book content.

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
- librarian proposal: merged in PR #158, not activated.

## Baseline CI and Sync Check

CI workflow:

- `.github/workflows/ci.yml`
- commands: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`

Sync Check workflow:

- `.github/workflows/sync-check.yml`
- command: `npm run sync-check`

Current rule: when both workflows apply, PR verification means both Sync Check and CI, not CI alone.

PR #158 had CI and Sync Check green before merge.

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
- PR #152 was closed unmerged and must not be treated as implemented.
- PR #158 added `conversation_archive_librarian` as proposal only, not activation.
- `conversation_archive_librarian` registry entry still needs a separate registry sync PR if we want registry to reflect the merged proposal.
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
- Do not treat PR #141, PR #145 or PR #152 as implemented.
- Do not treat PR #146 as full-chat coverage.
- Do not update `knowledge/08_conversation_archive/index.md` from parallel archive PRs.

## Next action

Create a registry sync PR for `conversation_archive_librarian` so `agent_container_registry` records the merged proposal without activating it.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

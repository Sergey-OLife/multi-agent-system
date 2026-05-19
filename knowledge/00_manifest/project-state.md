# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.26
- lastCompletedVersion: v2.26
- lastMergedPr: PR #143 — Archive corrective margin orchestra and consistency discussion
- lastMergeCommit: a9353575780d56f31faa84e015998e1552647f53
- currentMilestone: v2.26 Archive coverage scope and corrective archive synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #136 — Add archive start GitHub write command
- PR #137 — Sync state after architecture and archive start
- PR #138 — Archive red flags after architecture contract
- PR #140 — Require cumulative archive start capture
- PR #142 — Require explicit archive coverage scope
- PR #143 — Archive corrective margin orchestra and consistency discussion

## Repository architecture contract

PR #131 implemented:

- `knowledge/07_operations/repository_architecture_contract.md`

Contract fixed:

- GitHub `main` as current source of truth for merged state;
- Go as deterministic spine;
- TypeScript / JavaScript as orchestration, CLI, scripts and agent-facing layer;
- `scripts/` as edge automation, not a second core;
- baseline CI boundary;
- event envelope as future contract discipline, not runtime implementation;
- idempotency / race-condition rules;
- single-writer principle;
- Redis/Postgres/P2P as future runtime layers only.

Not implemented by the contract:

- Redis;
- Postgres;
- SQL migrations;
- P2P runtime;
- event processor;
- OpenTelemetry / Prometheus / Grafana;
- Kafka / RabbitMQ / gRPC;
- OpenAPI generation;
- branch protection.

## Archive start command and coverage scope

PR #136 implemented:

- `#архив_старт`
- `assistant_codex_worklog/protocol_addenda/archive_start_command.md`

PR #140 fixed the command semantics:

- `#архив_старт` is cumulative, not last-topic-only.
- It must find the latest archive/state checkpoint and capture the unresolved semantic tail from there.
- It must not archive only the latest topic when earlier unresolved ideas appeared after the checkpoint.

PR #142 fixed the coverage-scope bug:

- no archive entry may be treated as full-chat coverage unless it explicitly says `coverage_scope: full_chat` or has an equivalent marker;
- no full-chat marker means thematic coverage by default;
- supported coverage types are `full_chat`, `thematic`, `partial`, and `corrective`.

PR #143 added the corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`

It records:

- Coverage scope: `corrective`;
- previous checkpoint coverage scope: `thematic`;
- full-chat marker present: no;
- gap found: yes;
- PR #141 was closed unmerged and must not be treated as implemented.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `scripts/archive-audit.mjs`

Audit command:

```bash
npm run archive:audit
```

Current archive status:

- latest merged archive entry: `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`;
- open archive PR: none known;
- closed superseded PRs: PR #133, PR #139, PR #141.

## Baseline CI workflow

PR #129 implemented baseline CI:

- workflow path: `.github/workflows/ci.yml`
- triggers: `pull_request` to `main`, `workflow_dispatch`
- permissions: `contents: read`
- Node.js: 20
- Go version: from `go-core/go.mod`

CI runs only existing scripts:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Observation:

- CI was observed on PR #131.
- Sync Check passed.
- CI failed during `npm test` because of stale test assertions, not because of the PR #131 architecture contract diff.
- Known stale assertions:
  - `baseline.test.ts` expected `currentVersion: v2.1` in `project-state.md`;
  - `knowledge.test.ts` expected source registry version `0.3` but registry is `0.6`;
  - `source-registry.test.ts` expected source registry version `0.3` but registry is `0.6`.

Branch protection remains not configured until explicitly verified. Do not use CI as a branch protection gate before fixing stale assertions.

## Repository hygiene

Repository hygiene audit is available:

```bash
npm run hygiene:audit
```

Ledger:

- GitHub issue #99 — Repository hygiene ledger.

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

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Repository architecture contract is implemented.
- Baseline CI workflow is implemented, but stale test assertions must be fixed before CI can become a reliable gate.
- `#архив_старт` is implemented as a write-first GitHub conversation archive command.
- `#архив_старт` is cumulative, not last-topic-only.
- Archive entries require explicit coverage scope discipline.
- Archive commands must not save to memory/handoff/project-state/arbitrary folders.
- Mass capture imports are quarantine PRs until checked.
- Branch protection remains a separate future action item and is not configured until explicitly verified.
- Conversation archive is a separate human interaction archive, not project-state, approval-log or technical checkpoint.
- Short commands have priority over interface noise, but pending work must be disclosed before acting when it can conflict.
- Repository hygiene audit is available as `npm run hygiene:audit`.
- Repository hygiene ledger is GitHub issue #99.
- Branch hygiene cleanup remains cleanup_needed, not completed.
- Before any `#checkpoint full` GitHub operation, ChatGPT must first send Sergey a compact restart prompt in chat.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.
- Do not pretend branch cleanup was completed while branches remain unresolved in issue #99.
- Do not let conversation archive become a raw transcript dump.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141 as implemented because it was closed unmerged.

## Next action

Fix stale CI assertions observed on PR #131, then choose the next design work item:

1. `knowledge_consistency_protocol`;
2. `conversation_archive_librarian`;
3. `critic_margin_agent` + `margin_orchestra`;
4. README / architecture map;
5. branch protection after CI is reliable.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.25
- lastCompletedVersion: v2.25
- lastMergedPr: PR #136 — Add archive start GitHub write command
- lastMergeCommit: 704c96453f98ff527a04c2ba98f3dba83a18daf0
- currentMilestone: v2.25 Architecture contract and archive-start command synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #126 — Archive CI baseline and command recovery
- PR #127 — Sync state after archive command and CI entry
- PR #129 — Add baseline CI workflow
- PR #130 — Sync state after baseline CI
- PR #131 — Add repository architecture contract
- PR #136 — Add archive start GitHub write command

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

## Archive start command

PR #136 implemented:

- `#архив_старт`
- `assistant_codex_worklog/protocol_addenda/archive_start_command.md`

`#архив_старт` is a write-first GitHub conversation archive command.

It must:

- check latest `main`;
- open latest `knowledge/08_conversation_archive/conversation_capture_prompt.md`;
- create an archive entry only in `knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md`;
- update only `knowledge/08_conversation_archive/index.md`;
- open a PR against `main`.

It must not save archive output to:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- roadmap;
- working protocol;
- arbitrary folders;
- full transcript dump.

If GitHub write is unavailable, do not save elsewhere. Output ready-to-copy markdown and name the blocker.

## Mass capture quarantine

Archive/handoff PRs created by mass-running archive commands across old chats are quarantine PRs until checked.

Reject/close PRs when they:

- write outside `knowledge/08_conversation_archive/chat_archives/`;
- update anything other than `knowledge/08_conversation_archive/index.md`;
- contain raw transcript;
- contain raw books / PDF / EPUB / DJVU / MOBI;
- contain private Drive IDs / URLs;
- carry stale project state as current;
- write to `knowledge/05_agent_memory/handoff/`;
- duplicate already implemented state/roadmap/protocol decisions.

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

Branch protection remains not configured until explicitly verified.

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

Open archive PR:

- PR #133 — Archive red flags after architecture contract.

This is still an approval-gate and must not be merged without explicit `++`.

## Repository hygiene

Repository hygiene audit is available:

```bash
npm run hygiene:audit
```

Ledger:

- GitHub issue #99 — Repository hygiene ledger.

Branch cleanup remains `cleanup_needed`, not `completed`.

## Current agent queue status

`anti_cliche_editor`, `banality_alarm_agent`, `author_style_memory_agent`, and `sergey_interaction_profiler` remain proposal only, not activated and not hard guardrails.

`review_depth_protocol` is active operational protocol.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Shipyard Modernization stability gate is passed.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Repository architecture contract is implemented.
- Baseline CI workflow is implemented.
- `#архив_старт` is implemented as a write-first GitHub conversation archive command.
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

## Proposal agents

- `workflow_conductor_agent`: proposal only, not activated.
- `agent_registry_librarian`: proposal only, not activated.
- `approval_gate_keeper`: proposal only, not activated.
- `project_state_synchronizer`: proposal only, not activated.
- `checkpoint_compressor_agent`: proposal only, not activated.
- `source_card_builder`: proposal only, not activated.
- `copyright_boundary_guard`: proposal only, not activated and not a hard guardrail.
- `svod_guard`: proposal only, not activated and not a hard guardrail.
- `contextologist_agent`: proposal only, not activated and not a hard guardrail.
- `sergey_interaction_profiler`: proposal only, not activated and not a hard guardrail.
- `author_style_memory_agent`: proposal only, not activated and not a hard guardrail.
- `banality_alarm_agent`: proposal only, not activated and not a hard guardrail.
- `anti_cliche_editor`: proposal only, not activated and not a hard guardrail.

## Active optional workflow layers

- `socratic_lantern_agent` — active optional workflow layer.
- `ethical_persuasion_guard` — active optional workflow layer.
- `cbt_thought_check_agent` — active optional workflow layer; not therapy, not diagnostics, not sales pressure tool.
- `source_intake_auditor` — active optional workflow layer; not workflow conductor.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.
- Do not pretend branch cleanup was completed while branches remain unresolved in issue #99.
- Do not let conversation archive become a raw transcript dump.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not merge PR #133 without explicit `++`.

## Next action

Decide PR #133 or inspect CI on PR #131 / next PR, then consider README or branch protection.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

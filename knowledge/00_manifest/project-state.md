# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.24
- lastCompletedVersion: v2.24
- lastMergedPr: PR #129 — Add baseline CI workflow
- lastMergeCommit: 7dd6e60cefb1aae72d4b55916c1c1a3652274634
- currentMilestone: v2.24 Baseline CI workflow synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #123 — Sync state after archive risks and capture refresh
- PR #124 — Add stable conversation archive command
- PR #125 — Add short command priority rule
- PR #126 — Archive CI baseline and command recovery
- PR #127 — Sync state after archive command and CI entry
- PR #129 — Add baseline CI workflow

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

Not included:

- ESLint
- Prettier
- golangci-lint
- SonarCloud / CodeClimate
- AI-review bots
- branch protection
- repository architecture contract

Branch protection remains a separate future action item after CI is observed on a PR.

## Archive command and CI baseline recovery

PR #124 added stable conversation archive commands:

```text
#архив чата
#архив чата сохрани
```

Rules:

- `#архив чата` runs the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat in draft mode.
- It does not write to GitHub by default.
- `#архив чата сохрани` creates a PR with archive entry and index update when GitHub tools are available.

PR #125 added short command priority:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

If a short command is exact, ChatGPT must recognize it before handling repeated attachments, auto-loaded sources, old non-blocking tails or adjacent tasks. If pending work can conflict with the command, ChatGPT must disclose the tail and ask before acting.

PR #126 archived CI baseline and command recovery.

## Archive risks and capture refresh

PR #121 archived repository contract risks:

- root `README.md` / repository architecture contract needed;
- source-of-truth map needed;
- `scripts/` boundary needed so scripts do not become a second informal core;
- `main` branch protection action item needed;
- future knowledge/protocol consistency checks needed;
- label-triggered registry sync may replace manual `workflow_dispatch` later.

These are archived risks and recommended work items, not implementation approval.

## Anti-cliche editor

`anti_cliche_editor` is proposal only, not activated and not a hard guardrail.

- Proposal path: `knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md`
- Registry status: `proposal`
- Next action in registry: `controlled_activation`
- Activation: no
- Hard guardrail: no

Its role is to classify and help rewrite cliche, commonplace, pseudo-depth, plastic advertising voice, moralizing, manual voice, bureaucracy, vague claims and overpolished AI tone.

## Registry mutation protocol

`knowledge/07_operations/registry_mutation_protocol.md` is active.

Rule:

- registry changes must use deterministic tooling when available;
- manual full replacement of large registry is not the normal path;
- dry-run first, then apply;
- if local command is unavailable, use approved runner/workflow path.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`
- `scripts/archive-audit.mjs`

Audit command:

```bash
npm run archive:audit
```

Conversation archive is a significant context recovery layer. For forgotten ideas, contradictions, plans, interaction style, or “what next?” questions, check `index.md` and relevant entries after state/roadmap.

## Repository hygiene

Repository hygiene audit is available:

```bash
npm run hygiene:audit
```

Ledger:

- GitHub issue #99 — Repository hygiene ledger.

Branch cleanup remains `cleanup_needed`, not `completed`.

## Current agent queue status

`banality_alarm_agent` is proposal only, not activated and not a hard guardrail.

`author_style_memory_agent` remains proposal only, not activated and not a hard guardrail.

`sergey_interaction_profiler` remains proposal only, not activated and not a hard guardrail.

`anti_cliche_editor` remains proposal only, not activated and not a hard guardrail.

`review_depth_protocol` is active operational protocol.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until separate Sergey decision.
- Current active mode is Agent Shipyard / Agent Queue.
- Shipyard Modernization stability gate is passed.
- Go checks, TypeScript connects, LLM thinks, Sergey approves, GitHub records.
- Baseline CI workflow is implemented in `.github/workflows/ci.yml`.
- Baseline CI runs on pull requests to `main` and `workflow_dispatch`.
- Baseline CI uses Node.js 20 and Go version from `go-core/go.mod`.
- Baseline CI runs existing scripts only: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`.
- Branch protection remains a separate future action item after CI is observed on a PR.
- Conversation archive is a separate human interaction archive, not project-state, approval-log or technical checkpoint.
- Stable short command `#архив чата` runs the latest repository capture prompt in draft mode and does not write to GitHub by default.
- Stable short command `#архив чата сохрани` creates a PR with archive entry plus index update when GitHub tools are available.
- Short commands have priority over interface noise, but pending work must be disclosed before acting when it can conflict.
- Repository architecture contract is a recommended next step but not yet approved as an implementation PR.
- Registry sync workflow is available as manual `workflow_dispatch` after PR #117.
- Registry mutation protocol is active: registry changes must use deterministic tooling rather than manual full replacement when tooling is available.
- `anti_cliche_editor` is a proposal only, not activated and not a hard guardrail.
- Repository hygiene audit is available as `npm run hygiene:audit`.
- Repository hygiene ledger is GitHub issue #99.
- Branch hygiene cleanup remains cleanup_needed, not completed.
- Next recommended work item is observe baseline CI on the next PR, then consider branch protection or repository architecture contract.
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
- Do not treat repository architecture contract recommendation as already approved.
- Do not treat branch protection as configured until it is explicitly verified.

## Next action

Observe baseline CI on the next PR, then consider branch protection or repository architecture contract.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

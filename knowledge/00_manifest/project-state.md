# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable source for project resume diagnostics.

## Current version

- currentVersion: v2.26
- lastCompletedVersion: v2.26
- lastMergedPr: PR #143 — Archive corrective margin orchestra and consistency discussion
- lastMergeCommit: `a9353575780d56f31faa84e015998e1552647f53`
- currentMilestone: v2.26 Corrective archive coverage and cumulative archive-start synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## Recent PRs

- PR #136 — Add archive start GitHub write command
- PR #138 — Archive red flags after architecture contract
- PR #140 — Require cumulative archive start capture
- PR #142 — Require explicit archive coverage scope
- PR #143 — Archive corrective margin orchestra and consistency discussion

## What changed after v2.25

PR #138 added a thematic archive entry for red flags after the repository architecture contract.

PR #140 fixed `#архив_старт` as cumulative capture, not last-topic-only.

PR #142 fixed archive coverage semantics:

- no full-chat marker = thematic coverage by default;
- archive entry cannot be treated as full-chat checkpoint without explicit `coverage_scope: full_chat` or equivalent Coverage check marker;
- coverage types are `full_chat`, `thematic`, `partial`, `corrective`.

PR #143 added a corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`

It explicitly states:

- Coverage scope: `corrective`;
- previous checkpoint coverage scope: `thematic`;
- full-chat marker present: no;
- gap found: yes;
- it does not claim full-chat coverage.

## Repository architecture contract

Implemented in PR #131:

- `knowledge/07_operations/repository_architecture_contract.md`

Contract fixed:

- GitHub `main` as current source of truth for merged state;
- Go as deterministic spine;
- TypeScript / JavaScript as orchestration, CLI, scripts and agent-facing layer;
- `scripts/` as edge automation, not a second core;
- event envelope as future contract discipline, not runtime implementation;
- Redis/Postgres/P2P as future runtime layers only;
- branch protection remains not configured until explicitly verified.

## Conversation archive

Conversation archive remains active as a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `scripts/archive-audit.mjs`

Audit:

```bash
npm run archive:audit
```

Stable commands:

- `#архив чата` — draft archive, no GitHub write by default.
- `#архив чата сохрани` — GitHub PR with archive entry + index update.
- `#архив_старт` — write-first cumulative GitHub archive command.

`#архив_старт` must:

- verify previous archive/state point;
- determine previous `coverage_scope`;
- not treat thematic entries as full-chat checkpoints;
- name coverage gap when no full-chat marker exists;
- capture the cumulative semantic tail, not only the latest topic;
- write only to `knowledge/08_conversation_archive/chat_archives/` and `knowledge/08_conversation_archive/index.md`.

## Baseline CI workflow

Implemented in PR #129:

- workflow path: `.github/workflows/ci.yml`
- triggers: `pull_request` to `main`, `workflow_dispatch`
- Node.js: 20
- Go version: from `go-core/go.mod`

CI runs existing scripts:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Branch protection remains not configured until explicitly verified.

## Repository hygiene

Repository hygiene audit:

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

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.
- Do not pretend branch cleanup was completed while branches remain unresolved in issue #99.
- Do not let conversation archive become a raw transcript dump.
- Do not treat branch protection as configured until explicitly verified.

## Next action

Create `knowledge_consistency_protocol` PR, then `conversation_archive_librarian` proposal, then `critic_margin_agent` with internal `margin_orchestra` proposal.

After those, consider README / branch protection / future Go validator.
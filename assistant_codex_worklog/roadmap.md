# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.30
- currentMilestone: Archive origin and parallel intake protocol synced
- lastMergedPr: PR #155 — Sync state after closing PR #152
- lastMergeCommit: `63f22f8300aa2bb5313383890fdd03a1c5d049b8`

## Recent PR summary

- PR #150 — Sync state after knowledge consistency protocol.
- PR #151 — Checkpoint full after knowledge consistency state sync.
- PR #153 — Add archive origin and parallel intake protocol.
- PR #154 — Sync state after archive origin protocol.
- PR #152 — Archive Khmelevskaya style optic and command correction closed unmerged.
- PR #155 — Sync state after closing PR #152.

## Open PRs

None.

## Closed unmerged PRs that matter

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.

These PRs are not implemented.

## What changed in v2.30

PR #153 added:

- `knowledge/08_conversation_archive/archive_origin_protocol.md`.

PR #153 also updated:

- `knowledge/08_conversation_archive/README.md`;
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`;
- `assistant_codex_worklog/protocol_addenda/archive_start_command.md`;
- `assistant_codex_worklog/restart-prompt.md`.

Protocol fixes:

- archive entries require an `Origin` block;
- Coverage check requires `Coverage applies to`;
- `coverage_scope: full_chat` applies only to the target origin;
- single-lane mode allows archive entry + index update in one PR;
- parallel intake mode writes entry-only PRs without `index.md` update;
- if another archive PR already updates `index.md`, new archive PR must use parallel intake mode or wait;
- consolidation PR updates `index.md` after merged entry-only PRs.

PR #154 synchronized state/worklog/restart after PR #153.

PR #152 was then closed unmerged because it was created under the pre-PR #153 archive discipline.

PR #155 synchronized state/worklog/restart after PR #152 was closed unmerged.

## Existing stable foundations

- PR #131 — repository architecture contract.
- PR #136 — `#архив_старт` write-first command.
- PR #140 — `#архив_старт` cumulative, not last-topic-only.
- PR #142 — explicit archive coverage scope.
- PR #146 — current-chat full-chat checkpoint remains missing; coverage gap not full coverage.
- PR #147 — stale CI assertions fixed and baseline CI green.
- PR #149 — knowledge consistency protocol.
- PR #151 — checkpoint full after knowledge consistency state sync.

## Conversation archive

Conversation archive remains separate from project-state, approval-log and technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/archive_origin_protocol.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/*.md`

Current archive command rules:

- `#архив чата` — draft archive entry, no GitHub write by default.
- `#архив чата сохрани` — archive PR according to single-lane or parallel intake mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.
- Parallel intake PR must not update `knowledge/08_conversation_archive/index.md`.
- Full-chat coverage requires explicit `Coverage applies to` target.

PR #152 material can be recreated later only under these rules.

## CI status

Required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

PR #155 had CI and Sync Check green before merge.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Create `conversation_archive_librarian` as the next design PR.

Then choose one of:

1. `critic_margin_agent` + `margin_orchestra`;
2. README / architecture map;
3. branch protection after separate verification.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track остаётся на паузе.
- Runtime Redis / Postgres / P2P remain future runtime only and must not be implemented without separate decision.
- PR #146 must not be treated as full-chat coverage.
- PR #141, PR #145 and PR #152 are not implemented.
- Knowledge consistency protocol is active as an operational protocol, not as an automated validator.
- Archive origin protocol is active as operational protocol, not as an archive librarian agent.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — archive PR according to current archive mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не считать source card прочитанным источником.
- Не превращать conversation archive в raw transcript dump.
- Не считать branch protection configured without verification.
- Не считать thematic archive entry full-chat checkpoint.
- Не считать closed-unmerged PR implemented.
- Human-readable artifacts — на русском.

# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.31
- currentMilestone: Conversation archive librarian proposal synced
- lastMergedPr: PR #158 — Add conversation archive librarian proposal
- lastMergeCommit: `4fc8f41145b0c31eb06cd6b65f09e068d58d00fa`

## Recent PR summary

- PR #151 — Checkpoint full after knowledge consistency state sync.
- PR #153 — Add archive origin and parallel intake protocol.
- PR #154 — Sync state after archive origin protocol.
- PR #152 — Archive Khmelevskaya style optic and command correction closed unmerged.
- PR #155 — Sync state after closing PR #152.
- PR #158 — Add conversation archive librarian proposal.

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that matter

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.

These PRs are not implemented.

## What changed in v2.31

PR #158 added:

- `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`.

It defines a proposal-only agent for conversation archive discipline:

- Origin block;
- `Coverage applies to`;
- full-chat marker handling;
- single-lane / parallel intake mode;
- open PR not implemented;
- raw transcript / raw books / private IDs запрет.

PR #158 intentionally did not update registry, routes, project-state, archive index, runtime code, tests, validators, branch protection or book content.

## Existing stable foundations

- PR #131 — repository architecture contract.
- PR #136 — `#архив_старт` write-first command.
- PR #140 — `#архив_старт` cumulative, not last-topic-only.
- PR #142 — explicit archive coverage scope.
- PR #146 — current-chat full-chat checkpoint remains missing; coverage gap not full coverage.
- PR #147 — stale CI assertions fixed and baseline CI green.
- PR #149 — knowledge consistency protocol.
- PR #151 — checkpoint full after knowledge consistency state sync.
- PR #153 — archive origin and parallel intake protocol.
- PR #155 — state sync after closing PR #152.

## Conversation archive

Conversation archive remains separate from project-state, approval-log and technical checkpoint.

Important paths:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/archive_origin_protocol.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/*.md`
- `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`

Current archive command rules:

- `#архив чата` — draft archive entry, no GitHub write by default.
- `#архив чата сохрани` — archive PR according to single-lane or parallel intake mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.
- Parallel intake PR must not update `knowledge/08_conversation_archive/index.md`.
- Full-chat coverage requires explicit `Coverage applies to` target.

`conversation_archive_librarian` exists as proposal only. It is not activated, not routed and not a hard guardrail.

## CI status

Required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

PR #158 had CI and Sync Check green before merge.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Create a registry sync PR for `conversation_archive_librarian` so `agent_container_registry` records the merged proposal without activating it.

Then choose one of:

1. controlled activation proposal for `conversation_archive_librarian`;
2. `critic_margin_agent` + `margin_orchestra`;
3. README / architecture map;
4. branch protection after separate verification.

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
- Archive origin protocol is active as operational protocol.
- `conversation_archive_librarian` proposal is merged but not activated.

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
- Не считать proposal activation.
- Human-readable artifacts — на русском.

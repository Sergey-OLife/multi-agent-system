# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused until Sergey gives a separate decision.

## Current milestone

- currentVersion: v2.32
- currentMilestone: Registry sync request flow and conversation archive librarian registry synced
- lastMergedPr: PR #165 — Sync registry for conversation archive librarian
- lastMergeCommit: `5b98794f466e9d4722eb308e590c955eb0ae771a`

## Recent PR summary

- PR #158 — Add conversation archive librarian proposal.
- PR #160 — Add registry sync request workflow.
- PR #161 — Fix registry sync request trigger.
- PR #163 — Extend registry sync to insert missing agents.
- PR #165 — Sync registry for conversation archive librarian.

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that matter

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.

These PRs are not implemented.

## What changed in v2.32

PR #160 added request-driven registry sync workflow:

- `.github/workflows/registry-sync-request.yml`

PR #161 added pull_request fallback trigger.

PR #163 extended deterministic registry tooling:

- `go-core/cmd/agent-registry-sync/main.go`
- `go-core/cmd/agent-registry-sync/main_test.go`

The Go tool can now insert a missing proposal/container block only with explicit `--insert-if-missing` and required fields.

PR #165 recorded `conversation_archive_librarian` in:

- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`

The agent remains proposal-only. It is not activated, routed, or converted into a hard guardrail.

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
- PR #158 — conversation archive librarian proposal.
- PR #165 — conversation archive librarian registry sync.

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

`conversation_archive_librarian` exists as proposal and registry entry only. It is not activated, not routed and not a hard guardrail.

## CI status

Required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

PR #165 had CI and Sync Check green before merge.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Choose one:

1. controlled activation proposal for `conversation_archive_librarian`;
2. `critic_margin_agent` + `margin_orchestra` / second-eyes preflight design;
3. README / architecture map;
4. branch protection verification.

Given the registry-sync miss, the strongest next design item is `critic_margin_agent` + `margin_orchestra` as a second-eyes preflight layer before archive / registry / state operations.

## Standing rules

- Proposal is not activation.
- Active optional workflow layers remain optional, not hard guardrails.
- Branch cleanup remains `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track remains paused.
- Runtime Redis / Postgres / P2P remain future runtime only and must not be implemented without separate decision.
- PR #146 must not be treated as full-chat coverage.
- PR #141, PR #145, PR #152, PR #162 and PR #164 are not implemented.
- Knowledge consistency protocol is active as an operational protocol, not as an automated validator.
- Archive origin protocol is active as operational protocol.
- `conversation_archive_librarian` proposal and registry entry are merged but not activated.

## Short commands

- `+` — next safe step, not approval.
- `++` — approval for the current clear approval-gate.
- `+++` — nearest grounded safe action, does not bypass approval-gates.
- `#архив чата` — draft archive entry, no GitHub write.
- `#архив чата сохрани` — archive PR according to current archive mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.

## Do not forget

- Do not upload raw books to GitHub.
- Do not store raw Plotnikov text.
- Do not treat source card as proof that full source was read.
- Do not turn conversation archive into raw transcript dump.
- Do not treat branch protection as configured without verification.
- Do not treat thematic archive entry as full-chat checkpoint.
- Do not treat closed-unmerged PR as implemented.
- Do not treat proposal as activation.
- Human-readable artifacts should be in Russian unless there is a practical reason otherwise.

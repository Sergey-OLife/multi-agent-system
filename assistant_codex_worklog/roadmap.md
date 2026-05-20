# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused until Sergey gives a separate decision.

## Current milestone

- currentVersion: v2.34
- currentMilestone: Critic margin agent registry synced
- lastMergedPr: PR #170 — Sync registry for critic margin agent
- lastMergeCommit: `a32983b15e8c53533f852cdb5787ae2ed614e28b`

## Recent PR summary

- PR #165 — Sync registry for conversation archive librarian.
- PR #166 — Sync state after PR #165.
- PR #167 — Add second-eyes preflight design.
- PR #168 — Sync state after PR #167.
- PR #169 — closed unmerged; superseded by PR #170.
- PR #170 — Sync registry for critic margin agent.

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that matter

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.
- PR #169 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check; superseded by PR #170.

These PRs are not implemented.

## What changed in v2.34

PR #170 recorded `critic_margin_agent` in:

- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`

Status:

- proposal only;
- not activated;
- not routed;
- not a hard guardrail;
- not an automated validator.

## Second-eyes preflight design

`critic_margin_agent` exists as proposal and registry entry.

`margin_orchestra` remains design-only after PR #167.

Use as design reference before registry sync, activation, route changes, archive PR creation, state sync, workflow changes, checkpoint full and branch protection changes.

## Existing stable foundations

- PR #131 — repository architecture contract.
- PR #136 — `#архив_старт` write-first command.
- PR #140 — `#архив_старт` cumulative, not last-topic-only.
- PR #142 — explicit archive coverage scope.
- PR #146 — current-chat full-chat checkpoint remains missing; coverage gap not full coverage.
- PR #149 — knowledge consistency protocol.
- PR #153 — archive origin and parallel intake protocol.
- PR #158 — conversation archive librarian proposal.
- PR #160 — registry sync request workflow.
- PR #163 — registry sync missing-agent insertion.
- PR #165 — conversation archive librarian registry sync.
- PR #167 — second-eyes preflight design.
- PR #170 — critic margin agent registry sync.

## CI status

Required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

PR #170 had CI and Sync Check green before merge.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Choose one:

1. controlled activation proposal for `conversation_archive_librarian`;
2. controlled activation proposal for `critic_margin_agent`;
3. harden `margin_orchestra` into operational protocol / tooling;
4. README / architecture map;
5. branch protection verification.

## Standing rules

- Proposal is not activation.
- Active optional workflow layers remain optional, not hard guardrails.
- Branch cleanup remains `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track remains paused.
- Runtime Redis / Postgres / P2P remain future runtime only and must not be implemented without separate decision.
- PR #146 must not be treated as full-chat coverage.
- PR #141, PR #145, PR #152, PR #162, PR #164 and PR #169 are not implemented.
- `conversation_archive_librarian` proposal and registry entry are merged but not activated.
- `critic_margin_agent` proposal and registry entry are merged but not activated.

## Short commands

- `+` — next safe step, not approval.
- `++` — approval for the current clear approval-gate.
- `+++` — nearest grounded safe action, does not bypass approval-gates.

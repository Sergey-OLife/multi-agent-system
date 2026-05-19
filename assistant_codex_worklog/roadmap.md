# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused until Sergey gives a separate decision.

## Current milestone

- currentVersion: v2.33
- currentMilestone: Second-eyes preflight design synced
- lastMergedPr: PR #167 — Add second-eyes preflight design
- lastMergeCommit: `22bee4a9f5e0cacfa130fd41992651c780c9a578`

## Recent PR summary

- PR #160 — Add registry sync request workflow.
- PR #161 — Fix registry sync request trigger.
- PR #163 — Extend registry sync to insert missing agents.
- PR #165 — Sync registry for conversation archive librarian.
- PR #166 — Sync state after PR #165.
- PR #167 — Add second-eyes preflight design.

## Open PRs

None before this state sync PR.

## Closed unmerged PRs that matter

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — closed unmerged after PR #153 made Origin / Coverage applies to mandatory.
- PR #162 — closed unmerged because registry sync trigger worked but Go sync could not insert missing agent blocks yet.
- PR #164 — closed unmerged because bot registry commit did not receive final-head CI / Sync Check.

These PRs are not implemented.

## What changed in v2.33

PR #167 added:

- `knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md`
- `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md`

This is proposal/design only:

- `critic_margin_agent` is not activated;
- `critic_margin_agent` is not routed;
- `critic_margin_agent` is not recorded in registry yet;
- `margin_orchestra` is not a hard guardrail;
- no automated validator was added.

## Second-eyes preflight design

`critic_margin_agent` is the proposed second-eyes voice.

`margin_orchestra` is the coordination pattern deciding when second-eyes preflight is required.

Use as design reference before:

- registry sync;
- activation;
- route changes;
- archive PR creation;
- state sync;
- workflow changes;
- checkpoint full;
- branch protection changes.

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

## Conversation archive

Conversation archive remains separate from project-state, approval-log and technical checkpoint.

`conversation_archive_librarian` exists as proposal and registry entry only. It is not activated, not routed and not a hard guardrail.

## CI status

Required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

PR #167 had CI and Sync Check green before merge.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Choose one:

1. registry sync for `critic_margin_agent` as proposal-only;
2. controlled activation proposal for `conversation_archive_librarian`;
3. harden `margin_orchestra` into operational protocol / tooling;
4. README / architecture map;
5. branch protection verification.

The nearest coherent continuation is registry sync for `critic_margin_agent`, because PR #167 intentionally did not record it in registry.

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
- `critic_margin_agent` proposal is merged but not in registry and not activated.

## Short commands

- `+` — next safe step, not approval.
- `++` — approval for the current clear approval-gate.
- `+++` — nearest grounded safe action, does not bypass approval-gates.
- `#архив чата` — draft archive entry, no GitHub write.
- `#архив чата сохрани` — archive PR according to current archive mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.

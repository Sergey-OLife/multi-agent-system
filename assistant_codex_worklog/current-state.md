# Current State — Assistant × Codex

Date: 2026-05-21

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #223 — Implement lifecycle contracts v1
- Status: merged
- Merge commit: `c2bb5d5d04aef05c871b18f219c56a688c69cdfa`

## Current version

- currentVersion: v2.55
- currentMilestone: Lifecycle contracts v1 implemented

## PR #223 result

PR #223 added `go-core/lifecycle/lifecycle.go` and `go-core/lifecycle/lifecycle_test.go`.

It implements lifecycle contracts v1 as a small pure Go contract vocabulary with unit tests for the highest-risk status confusions.

V1 covers selected entity types only:

- `agent`;
- `archive`;
- `state`;
- `script`;
- `source_card`.

It records forbidden status/confusion checks around proposal/validator, manual discipline/routed or stronger statuses, archive/project-state/checkpoint, script/CI enforcement, and source card/source proof confusion.

Important boundary: lifecycle contracts v1 is implemented, but it is not workflow enforcement. It is not CLI, GitHub Action, CI enforcement beyond existing tests, route automation, project-gate validator, hard guardrail, approval logic, state-sync automation, runtime behavior, branch protection change, or book workflow change.

## Recent archive note

PR #224 archived the blocked merge-tool path for PR #223. It was an archive only and did not implement lifecycle v1.

## Current active manual disciplines

- `critic_margin_agent` manual preflight discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline;
- `archive_status_indicator` manual archive-pressure discipline.

## Active archive-level open loops

- `Карта будущего корабля` review;
- repository architecture contract value from older archives;
- corrective margin/knowledge-consistency value from older archives;
- future runtime readiness checklist only by separate Sergey decision;
- scripts/core boundary audit only if needed after selected next work.

## Next safe step

Complete state sync after PR #223.

After that, choose the next work explicitly. Do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement, or hard guardrails without separate approval.

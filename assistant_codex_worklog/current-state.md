# Current State — Assistant × Codex

Date: 2026-05-21

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #237 — Clarify README documentation boundary
- Status: merged
- Merge commit: `775c9d0c49d366ce0de18dd6e4c431b55c2a63ea`

## Current version

- currentVersion: v2.58
- currentMilestone: README and operations review sequence synced

## Recent documentation review sequence

PR #235 recorded the scripts/core boundary audit result as a documentation-only follow-up.

PR #236 recorded the full future ship map review with 34 classified points and the five declared classification buckets only.

PR #237 recorded the README/documentation-topology boundary review and adjusted README so it no longer acts as the live roadmap.

## Current protocol result

README is the entrance map, not the live roadmap.

For the current next action, use:

- `knowledge/00_manifest/project-state.json`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`.

Operations review notes can guide discussion, but they do not replace project-state or worklog files.

## Current active manual disciplines

- `critic_margin_agent` manual preflight discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline.

## Active archive-level open loops

- future runtime readiness checklist only by separate Sergey decision;
- lifecycle policy layer only by separate Sergey decision;
- README/documentation-topology boundary has been reviewed; further cleanup only if separately selected;
- book work remains paused until separate Sergey decision.

## Next safe step

After this state sync is merged, choose the next work explicitly; no implementation follows automatically from the README/documentation-topology review.

Do not expand lifecycle contracts, operations review notes, README cleanup, runtime readiness, validators, CI enforcement, hard guardrails, or branch protection without separate approval.

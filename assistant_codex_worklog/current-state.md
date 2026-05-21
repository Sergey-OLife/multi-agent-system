# Current State — Assistant × Codex

Date: 2026-05-21

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #257 — Define workflow conductor advisory activation scope
- Status: merged
- Merge commit: `7ab13a3a21730ba7ca0aba76c3d22e2442050608`

## Current version

- currentVersion: v2.64
- currentMilestone: Workflow conductor advisory activation scope synced

## Recent Agent Queue sequence

PR #257 defined `workflow_conductor_agent` as active advisory/manual orchestration planner only.

## Current protocol result

`workflow_conductor_agent` is active as advisory/manual orchestration planner.

It may:

- classify task mode;
- identify primary/supporting agents;
- propose sequence;
- detect conflict zones;
- identify approval-gates;
- recommend the next safe step;
- state what must not be automated.

It is not:

- runtime;
- route automation;
- approval authority;
- registry mutation authority;
- project-state authority;
- validator;
- hard guardrail;
- policy layer;
- book writer;
- automatic mode switch.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`agent_registry_librarian` is active as advisory/manual registry hygiene discipline.

`status_trust_matrix_2026-05-21.md` is documentation-only classification aid.

`registry_status_overlay_2026-05-21.md` is documentation-only explanation layer for registry lifecycle status vs operational trust status.

README is the entrance map, not the live roadmap.

For the current next action, use:

- `knowledge/00_manifest/project-state.json`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`.

## Current active manual disciplines

- `workflow_conductor_agent` advisory/manual orchestration planner;
- `critic_margin_agent` advisory/manual second-eyes discipline;
- `agent_registry_librarian` advisory/manual registry hygiene discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline.

## Active archive-level open loops

- book/product mode switch only by separate Sergey decision;
- first book/product mission plan through conductor only after mode switch decision;
- future runtime readiness checklist only by separate Sergey decision;
- lifecycle policy layer only by separate Sergey decision;
- further second-eyes tooling or mandatory preflight only by separate Sergey decision.

## Next safe step

Decide explicitly whether to switch to book/product mode.

If Sergey chooses book/product mode, use `workflow_conductor_agent` to create the first advisory mission plan before writing or product design.

Do not let conductor switch modes by itself.

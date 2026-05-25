# Current State — Assistant × Codex

Date: 2026-05-24

## Source of Truth Basis

GitHub `main` is the accepted source of truth for merged project state.

Primary resume diagnostics start from `knowledge/00_manifest/project-state.json` and its human-readable mirror `knowledge/00_manifest/project-state.md`.

This file is a continuity/resume layer. It summarizes the working point for Assistant × Codex, but it does not override project-state, accepted code, or explicitly accepted project documents.

Archive entries, worklog notes and vision notes remain source material unless their decisions are reflected in project-state, code, or an explicitly accepted document.

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

## Latest merged PR

- PR #286 — Add human core invariants and extraction framework
- Status: merged
- Merge commit: `98f52a1ca4b69421d813c87b74ca0e34ecd3fb5f`

## Current version

- currentVersion: v2.72
- currentMilestone: State sync after human core invariants extraction framework

## Human-core extraction layer

PR #286 introduced:

- `human_core_invariants_v0.1.md`
- `plotnikov_full_pass_map.md`
- `degradation_patterns_registry.md`

These documents establish:

- constitutional human boundaries;
- operational anthropology extraction logic;
- recurring degradation-pattern tracking.

All layers remain documentation/advisory only.

They are not:

- runtime;
- validator system;
- hard guardrails;
- policy engine;
- orchestration enforcement.

## Current extraction direction

The extraction framework exists to identify:

- recurring human conflicts;
- self-deception patterns;
- influence distortions;
- degradation mechanisms;
- maturity conditions.

The next practical validation step:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework.
```

The extraction framework must preserve:

- Plotnikovsky Motor;
- practical tension;
- scenes and conflict;
- human concreteness.

It must not:

- academicize the book;
- replace scenes with abstraction;
- kill narrative energy.

## Current protocol result

After PR / merge / state-sync / checkpoint operations, responses must include:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

## Current active manual disciplines

- `workflow_conductor_agent` advisory/manual orchestration planner;
- `critic_margin_agent` advisory/manual second-eyes discipline;
- `agent_registry_librarian` advisory/manual registry hygiene discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline;
- `pr_operation_response_footer` manual response footer discipline;
- `state_sync_additive_patch_discipline` manual state-sync discipline.

## State-sync boundaries

This v2.72 state sync is documentation/state alignment only.

It does not:

- implement runtime;
- add validators;
- add hard gates;
- change CI;
- mutate registry authority;
- resume book mode.

## Next safe step

Run the first 5-7 Plotnikov chapters through the extraction framework and test whether the framework survives real material without losing practical force.
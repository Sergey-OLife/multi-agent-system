# Current State — Assistant × Codex

Date: 2026-05-26

## Source of Truth Basis

GitHub `main` is the accepted source of truth for merged project state.

Primary resume diagnostics start from `knowledge/00_manifest/project-state.json` and its human-readable mirror `knowledge/00_manifest/project-state.md`.

This file is a continuity/resume layer. It summarizes the working point for Assistant × Codex, but it does not override project-state, accepted code, or explicitly accepted project documents.

Archive entries, worklog notes, audit notes and vision notes remain source material unless their decisions are reflected in project-state, code, or an explicitly accepted document.

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey uses `#книга` or gives a separate explicit mode decision.

## Latest merged PRs now being synced

- PR #294 — Add chapter rehydration agent proposal
- PR #296 — Add GitHub-centered current-state audit
- PR #295 — Clarify registry sync script boundary

Latest merged PR before this state sync:

- PR #295 — Clarify registry sync script boundary
- Status: merged
- Merge commit: `d1948546eb35db7cd25797dbc83782f4f2220164`

## Current version target

- currentVersion: v2.74
- currentMilestone: State sync after chapter rehydration proposal and audit boundary notes

## Recently merged context

PR #294 added `chapter_rehydration_agent` as a proposal-only manual/advisory chapter-preparation layer.

Boundary:

- proposal only;
- not activation;
- no registry mutation;
- no route automation;
- no runtime behavior;
- no validator or hard guardrail;
- no book-content approval;
- no book-mode activation.

PR #296 added `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md` as an operations-note external audit.

Boundary:

- documentation-only;
- not project-state;
- not roadmap;
- not implementation mandate;
- no runtime, validator, hard guardrail, CI, branch-protection or agent activation change.

PR #295 added an inline boundary note to `scripts/run-registry-sync.mjs`.

Boundary:

- comment-only clarification;
- no runtime behavior change;
- no registry mutation;
- no agent activation;
- no validator, hard guardrail, CI or branch-protection change;
- the script remains technical edge automation only.

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

The next practical validation step remains:

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

`chapter_rehydration_agent` may be used only as proposal/manual preparation logic unless separately activated through the appropriate workflow.

## Current audit/watch items

The current-state audit preserved in PR #296 identifies watch items only:

- README density;
- status language drift;
- conductor scope creep;
- continuity-layer overreach.

These are documentation-only watch items. They are not runtime work, validator work, hard-guardrail work, roadmap approval or implementation mandate.

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

This v2.74 state sync is documentation/state alignment only.

It does not:

- implement runtime;
- add validators;
- add hard gates;
- change CI;
- mutate registry authority;
- resume book mode;
- approve candidate book content as final;
- activate `chapter_rehydration_agent`.

## Next safe step

Run the first 5-7 Plotnikov chapters through the extraction framework and test whether the framework survives real material without losing practical force. Use `chapter_rehydration_agent` only as proposal/manual preparation logic unless separately activated.
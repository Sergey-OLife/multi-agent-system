# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Source of truth basis

GitHub `main` remains the accepted source of truth for merged project state.

`knowledge/00_manifest/project-state.json` is the machine-readable resume diagnostic source. This markdown file mirrors it for human reading.

Worklog, restart prompts, archive entries and vision notes are continuity or source-material layers. They help resume work, but they do not become active project state unless reflected in project-state, code, or an explicitly accepted document.

## Resume order

When restarting or selecting the next grounded action, read sources in this order:

1. `README.md`
2. `knowledge/00_manifest/project-state.json`
3. `knowledge/00_manifest/project-state.md`
4. `assistant_codex_worklog/current-state.md`
5. `assistant_codex_worklog/roadmap.md`
6. `assistant_codex_worklog/restart-prompt.md`
7. `assistant_codex_worklog/working-protocol.md`
8. `assistant_codex_worklog/protocol_addenda/*.md`
9. Any framework or operation file explicitly referenced by the state/current-state files.
10. Open PR list and relevant PR discussion/review comments when PR workflow is involved.

This order clarifies priority. It does not collapse the files into one source and does not turn worklog or archive into project-state.

## Current version

- currentVersion: v2.72
- lastCompletedVersion: v2.72
- lastMergedPr: PR #286 — Add human core invariants and extraction framework
- lastMergeCommit: 98f52a1ca4b69421d813c87b74ca0e34ecd3fb5f
- currentMilestone: v2.72 State sync after human core invariants extraction framework
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.72

This state sync records PR #286 — Add human core invariants and extraction framework.

The key result:

```text
The project now contains a constitutional human-core layer and an extraction framework for the future Plotnikov full-pass.
```

PR #286 added:

- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`

These layers are documentation/advisory only.

They do not:

- implement runtime;
- add validators;
- add hard guardrails;
- add orchestration enforcement;
- activate agents;
- mutate registry authority;
- change CI or branch protection.

## Extraction framework boundary

The Plotnikov extraction framework exists to identify:

- recurring human conflicts;
- degradation mechanisms;
- maturity conditions;
- influence distortions;
- community failure patterns.

It is not:

- a summary layer;
- an academic rewrite;
- a runtime extraction engine;
- a book replacement system.

The next grounded test step is:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework before broadening the full 50-chapter pass.
```

## Boundary

This checkpoint/state sync is state/resume sync only.

It does not:

- implement runtime;
- change runtime behavior;
- add validators;
- add hard guardrails;
- add policy layer;
- add CI gates;
- change branch protection;
- activate route/runtime agents;
- resume book mode automatically.

## Current recovery path

1. Use GitHub `main` as source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Treat human-core and extraction documents as documentation/advisory only.
4. Do not confuse extraction-framework with runtime automation.
5. Preserve Plotnikovsky Motor and scene-level practical tension during extraction passes.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Human-core invariants are constitutional documentation, not runtime or enforcement.
- Degradation registry tracks recurring human/systemic degradation patterns only.
- Plotnikov extraction framework is intended to preserve practical tension, not academicize the book.
- The next safe content step is a limited 5-7 chapter extraction test.
- Current durable mode remains Agent Shipyard / Agent Queue until Sergey explicitly switches mode.

## Active archive-level open loops

- Run the first 5-7 Plotnikov chapters through the extraction framework.
- Validate whether the framework preserves scenes, pressure, practical conflict and Plotnikovsky Motor.
- Expand human-core invariants only after real extraction passes reveal recurring laws.
- Do not broaden to a full 50-chapter pass until the framework survives practical testing.

## Paused tasks

- Do not treat human_core_invariants_v0.1.md as runtime, validator, policy engine or automatic scoring system.
- Do not treat degradation_patterns_registry.md as enforcement or automatic classification.
- Do not treat plotnikov_full_pass_map.md as implemented extraction automation.
- Do not continue book mode automatically without explicit Sergey mode decision.

## Resume pointers

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`

## Next action

Run the first 5-7 Plotnikov chapters through the extraction framework and validate that the framework strengthens practical clarity without killing narrative energy.
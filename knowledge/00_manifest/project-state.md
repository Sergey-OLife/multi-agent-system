# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Source of truth basis

GitHub `main` remains the accepted source of truth for merged project state.

`knowledge/00_manifest/project-state.json` is the machine-readable resume diagnostic source. This markdown file mirrors it for human reading.

Worklog, restart prompts, archive entries, audit notes and vision notes are continuity or source-material layers. They help resume work, but they do not become active project state unless reflected in project-state, code, or an explicitly accepted document.

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

This order clarifies priority. It does not collapse the files into one source and does not turn worklog, archive, audit note or proposal into project-state.

## Current version

- currentVersion: v2.74
- lastCompletedVersion: v2.74
- lastMergedPr: PR #295 — Clarify registry sync script boundary
- lastMergeCommit: d1948546eb35db7cd25797dbc83782f4f2220164
- currentMilestone: v2.74 State sync after chapter rehydration proposal and audit boundary notes
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.74

This state sync records:

- PR #294 — Add chapter rehydration agent proposal
- PR #296 — Add GitHub-centered current-state audit
- PR #295 — Clarify registry sync script boundary

PR #294 added `chapter_rehydration_agent` as a proposal-only chapter-preparation layer.

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

## Existing extraction framework boundary

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

The next grounded test step remains:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework before broadening the full 50-chapter pass.
```

`chapter_rehydration_agent` may be used as proposal-only/manual preparation logic where useful, but it must not be treated as active/routed/validator/runtime.

## Boundary

This state sync is state/resume sync only.

It does not:

- implement runtime;
- change runtime behavior;
- add validators;
- add hard guardrails;
- add policy layer;
- add CI gates;
- change branch protection;
- activate route/runtime agents;
- resume book mode automatically;
- approve candidate book content as final.

## Current recovery path

1. Use GitHub `main` as source of truth.
2. Read project-state/current-state/roadmap/restart-prompt before selecting next work.
3. Use `knowledge/00_manifest/resume-order.md` as the restart/source reading order note.
4. Treat human-core and extraction documents as documentation/advisory only.
5. Treat PR #291 opening material as candidate only, not final book content.
6. Treat `chapter_rehydration_agent` as proposal-only unless separately approved through the appropriate workflow.
7. Do not confuse extraction-framework with runtime automation.
8. Preserve Plotnikovsky Motor and scene-level practical tension during extraction passes.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- PR #291 opening / `От автора` material is candidate material only, not final approved book content.
- PR #292 clarified resume authority and manual discipline scope as documentation-only.
- PR #294 `chapter_rehydration_agent` is proposal-only, not activation.
- PR #296 current-state audit is documentation-only operations note, not project-state or roadmap.
- PR #295 registry sync script boundary note clarifies script status only; it does not change script authority.
- `resume-order.md` is an operational manifest note, not automation or a replacement for project-state.
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
- Watch status language drift, README density, conductor scope creep and continuity-layer overreach as documentation-only watch items from the current-state audit.

## Paused tasks

- Do not treat PR #291 opening material as final approved book content.
- Do not treat `chapter_rehydration_agent` as active/routed/validator/hard guardrail/runtime.
- Do not treat `github_centered_current_state_audit_2026-05-26.md` as project-state, roadmap, implementation mandate or approval for runtime/validator/hard-guardrail expansion.
- Do not treat `scripts/run-registry-sync.mjs` as agent activation authority, route authority, validator, hard guardrail, CI merge gate, runtime behavior, policy engine or approval bypass.
- Do not treat resume-order.md or resume-order sections as automation, validator, hard guardrail, CI gate or replacement for project-state.json.
- Do not treat human_core_invariants_v0.1.md as runtime, validator, policy engine or automatic scoring system.
- Do not treat degradation_patterns_registry.md as enforcement or automatic classification.
- Do not treat plotnikov_full_pass_map.md as implemented extraction automation.
- Do not continue book mode automatically without explicit Sergey mode decision.

## Resume pointers

- `README.md`
- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `knowledge/00_manifest/resume-order.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`
- `knowledge/05_agent_memory/agent_proposals/chapter_rehydration_agent.md`
- `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md`
- `scripts/run-registry-sync.mjs`

## Next action

Run the first 5-7 Plotnikov chapters through the extraction framework and validate that the framework strengthens practical clarity without killing narrative energy. Use `chapter_rehydration_agent` only as proposal/manual preparation logic unless separately activated.
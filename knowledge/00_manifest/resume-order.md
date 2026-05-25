# Resume Order

Status: operational manifest note. This file clarifies restart/source reading order without replacing `project-state.json` or its human-readable mirror.

## Purpose

This note removes ambiguity between authority, continuity and navigation layers during restart or PR-preflight work.

It does not:

- create a validator;
- create a hard guardrail;
- create a CI gate;
- change runtime behavior;
- replace `project-state.json`;
- make worklog, archive or vision notes authoritative by themselves.

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
9. Any framework or operation file explicitly referenced by state/current-state/worklog.
10. Open PR list and relevant PR discussion/review comments when PR workflow is involved.

## Authority boundary

GitHub `main` remains the source of truth for merged project state.

`project-state.json` is the machine-readable resume diagnostic source.

`project-state.md` is its human-readable mirror.

`assistant_codex_worklog/*` is a continuity/resume layer.

Archive entries and vision notes are source material. They do not become active project state unless reflected in project-state, code, or an explicitly accepted document.

## Conflict rule

If these layers conflict:

1. Prefer GitHub `main` facts over chat memory.
2. Prefer `project-state.json` and `project-state.md` for current accepted state.
3. Use current-state, roadmap and restart-prompt to understand the current working path.
4. Treat archive/worklog/vision material as context unless it has been reflected in accepted state/code/docs.
5. Do not convert proposals, manual disciplines or candidate material into implemented status without a merged PR and, where needed, state sync.
# Anti-Cliche Editor Training Card

metadata:
- source_id: anti_cliche_editor_training_card
- title: Anti-Cliche Editor Training Card
- source_type: internal_agent_training_card
- priority_level: high
- processed_status: active
- primary_case: knowledge/04_processed/editor_training/anti_cliche_editor/chapter_00_preface_case_001.md
- created_at: 2026-05-17

## Purpose

This card teaches `anti_cliche_editor` to move beyond ordinary cliché removal.

The agent must detect not only tired phrases, but also correct declarations, over-polished ethical rhetoric, and stylish replacements that import the wrong register into the current scene.

## Main distinction

A phrase can be:

1. true but tired;
2. ethically correct but declarative;
3. strong because it becomes a scene;
4. stylish but risky because it brings the wrong register.

## Core rule

Not every strong sentence belongs to the current scene.

## Required checks

- Detect tired phrases.
- Detect moral abstractions without scene or price.
- Detect repeated `not this, but that` contrast structure.
- Detect reader-facing register risks, especially premature marketing language.
- Separate approved replacements from risky replacements.
- Prefer situation, action, and price over aphorism.
- Preserve `Тихий Мастер`: strength without shouting, precision without pose, ethics without sermon.

## Known risky example

`человек не обязан быть удобным для вашей воронки`

Assessment:
- strong: yes;
- precise: yes;
- risky in preface: yes.

Reason: it may pull the reader into marketing vocabulary before the ethical frame is stable.

## Preferred diagnostic fields

- `detectedCliches`
- `moralAbstractions`
- `overusedContrastPattern`
- `sceneReplacementSuggestions`
- `registerRisks`
- `approvedReplacements`
- `riskyReplacements`
- `decisionRule`
- `recommendedAction`

## Guardrail

Do not replace weak text with a more expensive cliché.

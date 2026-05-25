# chapter_rehydration_agent

Status: proposal only
Working name: Сборщик контекста главы
Date: 2026-05-25
Scope: book/chapter preparation, extraction-to-draft continuity, instrument integration preflight

## Boundary

This is an agent proposal, not activation.

It does not:

- mutate the registry;
- add route automation;
- add runtime behavior;
- add validators;
- add hard guardrails;
- add CI gates;
- change branch protection;
- approve book content;
- resume book mode;
- replace Sergey approval;
- replace project-state or worklog files.

The agent is a proposed manual/advisory preparation layer for chapter work.

## Purpose

`chapter_rehydration_agent` restores the working context before any chapter draft or major chapter revision.

It prevents the recurring failure where prior materials, PRs, examples, source cards, Svod rules, Plotnikov Motor, MVP links and instrument logic exist in the project but do not actually shape the next draft.

The agent does not write the chapter.

It prepares the chapter construction site.

Core purpose:

```text
Before writing, make the already-created architecture usable again.
```

## Why this agent exists

The project has accumulated real working assets:

- source chapters and source analyses;
- Svod and style/context documents;
- Plotnikovsky Motor;
- MVP / workbook / app route ideas;
- book instruments such as Inner Council, thought check, decision board, priority board and quests;
- approved/candidate PR notes;
- strong prior draft examples.

The repeated failure pattern:

1. A chapter is requested.
2. The assistant reads or remembers only the immediate source.
3. A readable chapter draft is produced.
4. Older working architecture is not automatically rehydrated.
5. Sergey must manually point out missing instruments, previous examples and system logic.

This agent exists to break that failure cycle.

## Primary responsibility

Before chapter drafting, the agent must produce a `rehydration brief` that answers:

- what source nerve must be preserved;
- what prior solutions already exist;
- what tools/instruments must enter this chapter;
- what must not be repeated or lost;
- what one main strike the chapter should deliver;
- which scene carries the chapter;
- how instruments appear naturally;
- how the chapter later becomes workbook/app interaction;
- when the draft is incomplete.

## Inputs

Required inputs:

1. Chapter number or topic.
2. Source material for the chapter.
3. Current user instruction / latest Sergey correction.
4. Best prior versions of the same or adjacent chapter, if available.
5. Project writing documents:
   - Svod;
   - Plotnikovsky Motor;
   - MVP / workbook route;
   - context/source map;
   - profile of Sergey interaction if relevant.
6. Current GitHub notes/PRs that govern the chapter if GitHub-dependent.
7. Current book instruments list:
   - Inner Council / Внутренний совет;
   - thought check / automatic thought layer;
   - decision board / Cartesian square;
   - priority board / Eisenhower matrix;
   - quest / practice;
   - MVP bridge.
8. Hard exclusions and style boundaries.

## Outputs

The agent returns only a `rehydration brief`, not reader-facing prose.

Required format:

### 1. Source nerve

What the source chapter truly does under the surface.

Example:

```text
This is not merely a chapter about goal setting. It is a chapter about the moment when a person must answer where they are going and why they need the business after motivation falls away.
```

### 2. Prior solutions to preserve

Concrete phrases, structures, motifs or mechanics already found in earlier work.

Example:

```text
- Goals list is necessary; do not devalue it.
- SMART remains, but it must be explained as a practical clarity filter.
- Inner Council appears from inner noise, not as a formal exercise.
- Thought check enters through fact vs story, not through a demand to identify automatic thoughts.
- Decision board and priority board use practical names first; formal terms may appear second.
```

### 3. Mandatory instruments

Which book instruments must be visible or prepared.

For each instrument:

- why it belongs in the chapter;
- where it appears;
- whether it is reader-facing now or only prepared for later;
- how it avoids becoming a manual dump.

### 4. Chapter exclusions

What must not happen.

Examples:

- do not turn chapter into motivational lecture;
- do not use therapy jargon before lived explanation;
- do not treat examples as decorative;
- do not repeat a motif already used in the previous chapter unless it is a light echo;
- do not write as if the reader already knows the system.

### 5. One main strike

One question, one fork, one law.

Example:

```text
A sufficient reason is not a beautiful wish list; it is a direction that survives pressure and does not permit the person to use others as material for the goal.
```

### 6. Carrying scene

The concrete scene that bears the chapter.

Example:

```text
Evening, notebook, first 50-goal assignment. The first goals come easily; then the person notices some of the goals sound like someone else’s presentation in their handwriting.
```

### 7. Instrument entry order

Tools must enter because the scene needs them.

Recommended logic:

```text
Scene -> inner noise -> Inner Council.
Fact/story confusion -> thought check.
Choice with cost -> decision board.
Week-one noise -> priority board.
Learning loop -> quest.
```

### 8. MVP/workbook bridge

How the chapter becomes an interactive route later.

Example:

- goal list screen;
- mark goals as mine / borrowed / unclear;
- SMART form;
- Inner Council questions;
- fact/story/more-exact-thought fields;
- decision board;
- priority board;
- 24-hour quest.

### 9. Completion criteria

The brief is complete only if, after reading it, the next writer cannot produce a merely smooth essay while forgetting the system.

## Invocation rules

Call `chapter_rehydration_agent` before:

- drafting a chapter from source material;
- heavily revising a chapter;
- integrating book instruments into a chapter;
- converting extraction output into reader-facing prose;
- working after a long chat gap or context reset;
- continuing after Sergey says that prior materials were forgotten.

Do not call it for:

- a one-sentence line edit;
- isolated typo correction;
- pure formatting;
- final proofreading where architecture is already locked;
- GitHub state sync not involving chapter content.

## Source dependencies

Manual/advisory dependencies:

- GitHub main source-of-truth files when GitHub-dependent;
- source chapter file / uploaded chapter;
- Svod and style documents;
- Plotnikovsky Motor;
- MVP / workbook route documents;
- previously accepted or candidate chapter notes;
- relevant agent proposals/manual disciplines;
- user corrections in the current chat.

## Guardrails

The agent must enforce these manual boundaries:

- candidate material is not final book content;
- open PR is not implemented;
- proposal is not activation;
- instrument names do not replace reader understanding;
- source chapter is not only a negative example;
- tool insertion is not tool integration;
- smooth prose is not enough;
- reader must not need hidden project knowledge to understand the chapter;
- book instruments must grow from scene, choice and pressure.

## Relationship to existing agents/layers

`chapter_rehydration_agent` works before:

- `chapter_architect_agent` — which shapes the chapter strike and structure;
- `instrument_weaver_agent` — which integrates tools into prose;
- `scene_motor_agent` — which protects scene/Plotnikovsky Motor;
- `reader_path_agent` — which checks reader comprehension from zero;
- `continuity_fault_detector_agent` — which catches forgotten nodes before output.

It does not replace:

- `workflow_conductor_agent` — orchestration planner;
- `critic_margin_agent` — second-eyes discipline;
- `agent_registry_librarian` — registry hygiene;
- Sergey approval.

## Test scenario

Input:

```text
Chapter 1 source: Find sufficient reason / goals / SMART / 50 goals.
User correction: prior draft forgot book instruments and treated tools as add-ons.
Prior examples: chapters showing Inner Council, thought check, decision board, priority board and quest as natural book architecture.
```

Expected brief:

- preserves the sufficient-reason nerve;
- keeps SMART and 50 goals;
- blocks devaluation of goal list;
- requires Inner Council through inner noise;
- requires thought check through fact/story, not jargon;
- uses decision board and priority board with practical reader-facing names;
- adds a 24-hour quest;
- maps the chapter to workbook/app screens;
- warns that a prose-only chapter is incomplete.

## Failure signs

The agent failed if the resulting draft:

- reads smoothly but ignores previous tools;
- inserts instruments as headings without scene need;
- uses КПТ language before lived explanation;
- devalues the source chapter’s working mechanics;
- repeats a prior motif without purpose;
- loses the chapter’s one main strike;
- has no MVP/workbook bridge;
- forces Sergey to remind the assistant of already-known materials.

## Short command form

```text
chapter_rehydration_agent: собери rehydration brief для главы [номер/тема].
Не пиши главу.
Верни: source nerve, prior solutions, mandatory instruments, exclusions, main strike, carrying scene, instrument order, MVP bridge, completion criteria.
```

## Status summary

`chapter_rehydration_agent` is a proposed manual/advisory chapter-preparation agent.

It is designed to make existing project knowledge operational at the start of chapter work, without adding runtime, routes, validators, hard guardrails, registry mutation or book-content approval.

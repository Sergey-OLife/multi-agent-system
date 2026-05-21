# Archive status indicator protocol

Status: active manual discipline. No automation.

This addendum defines the compact archive-pressure indicator used at the end of working messages and the delta-only archive rule.

It extends `conversation_archive_librarian_manual_discipline.md` without turning archive work into automation, routing, validation, branch protection, project-state sync, checkpoint logic, or hard guardrails.

## Purpose

The archive indicator makes archive pressure visible before the chat loses recoverable context.

It must prevent two opposite failures:

1. waiting too long and losing the working arc;
2. archiving so often that the archive repeats already captured service information.

## Indicator format

Use this line at the end of working replies when the conversation is in technical/project-operation mode:

```text
Статус архивации: зеленый_n
Статус архивации: желтый_n
Статус архивации: красный_n
```

`n` is the count of consecutive replies at the same status.

If the color changes, reset `n` to `1`.

## Status meanings

```yaml
archive_status:
  green:
    meaning: "archive is not needed now"
    action: "continue normal work"
  yellow_1_2:
    meaning: "the working arc is growing"
    action: "watch the archive pressure, do not interrupt work yet"
  yellow_3:
    meaning: "last yellow status before red"
    action: "explicitly warn Sergey that the next meaningful step should go through archive"
  red:
    meaning: "archive is needed before the next meaningful block"
    action: "create or resolve an archive PR before continuing the next arc"
```

At `желтый_3`, the assistant must not only print the status. It must explicitly say:

```text
Сергей, это последний жёлтый: следующий смысловой шаг лучше делать через архив. Если продолжим расширять дугу без фиксации, статус станет красным.
```

Use calm operational wording. Do not dramatize the status as an emergency.

## When status rises

Raise archive pressure when one or more of these signals accumulate:

- 3–5 related PRs in one working arc;
- a major design decision;
- a new command, protocol, or status term;
- a new open loop that must be reported back later;
- an external assessment or architecture review;
- a correction after assistant error;
- a planned topic switch;
- a checkpoint or new-chat boundary;
- context begins compressing into unavailable/skipped turns.

Two yellow signals usually require the assistant to propose archive soon.

One red signal requires archive before the next meaningful block.

## Delta-only archive rule

Frequent archive triggers must stay delta-only.

Archive entries should capture:

- new decisions;
- new contradictions;
- new errors or corrections;
- new open loops;
- new strong formulas;
- status changes of previous open loops;
- newly relevant boundaries.

Archive entries should not recapture:

- already archived service chatter;
- routine successful archive PR mechanics;
- already implemented technical details;
- repeated background boundaries unless newly relevant;
- previous archive content without a changed status.

If old content is no longer active, mark it instead of repeating it.

Allowed status labels include:

- `implemented_elsewhere`;
- `stale`;
- `superseded`;
- `not_relevant_now`;
- `closed`.

## What not to do

Do not use the archive indicator to force archive after every `+`, every CI wait, every merge, or every routine PR check.

Do not archive the fact that archive mechanics worked unless there was a new rule, error, conflict, status change, or open loop.

Do not treat archive entries as project-state.

Do not treat archive entries as checkpoints.

Do not let archive status bypass approval-gates.

Do not turn the indicator into CI, validator, route, hard guardrail, or automation.

## Relationship to commands

For `#архив чата`, `#архив_старт`, and similar archive commands, continue following `conversation_archive_librarian_manual_discipline.md`.

This addendum only adds:

1. the visible status indicator;
2. the `желтый_3` warning threshold;
3. the delta-only archive rule.

## Boundary

This is a manual protocol addendum only.

It does not change runtime behavior, agent routing, repository protection, CI checks, validators, hard guardrails, project-state, restart command semantics, or book workflow.

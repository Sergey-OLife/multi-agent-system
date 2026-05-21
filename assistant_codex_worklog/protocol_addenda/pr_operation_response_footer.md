# PR operation response footer

Status: mandatory protocol addendum
Date: 2026-05-21
Scope: responses after GitHub PR / merge / state-sync / checkpoint operations

## 1. Purpose

Recent failures showed two recurring slips:

- merge status was treated as enough even when bot/reviewer comments still needed review;
- archive pressure/status was not reported after PR-heavy work.

This addendum makes a short response footer mandatory after PR-related operations.

The goal is not decoration.

The goal is to prevent false clean-point claims.

## 2. When the footer is required

ChatGPT must include the footer after any response that reports or performs:

- PR creation;
- PR update;
- PR merge confirmation;
- PR close confirmation;
- state sync;
- checkpoint;
- archive PR;
- correction PR;
- reviewer/bot comment handling;
- mergeability/checks review;
- GitHub PR workflow status.

## 3. Required footer

Use this exact shape or a very close equivalent:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

If useful, add one short reason after each line.

## 4. Bot/reviewer comments rule

`Bot/reviewer comments: checked` is allowed only when the relevant PR comments/reviews/threads were actually checked through available GitHub tools.

Checking only PR metadata is not enough.

`get_pr_info` alone is not enough.

A merged PR can still contain unresolved semantic comments.

If bot/reviewer comments were not checked, ChatGPT must say:

```text
Bot/reviewer comments: not checked.
```

In that case ChatGPT must not say:

```text
clean point
чистая точка
review complete
no blocker
```

unless the statement is explicitly limited to merge status only.

## 5. Archive status rule

Archive status must be shown every time the footer is required.

Use current archive status indicator semantics:

- `зеленый_1` — clean / low pressure;
- `зеленый_2` — still safe but some material is accumulating;
- `желтый_1` — small unresolved meaningful tail;
- `желтый_2` — meaningful segment building up;
- `желтый_3` — archive threshold reached;
- `красный` — archive/checkpoint risk or serious confusion.

If uncertain, choose the more conservative status and state why.

## 6. Clean point rule

ChatGPT may say `чистая точка` only if all are true:

- no open PR blocker is known;
- relevant bot/reviewer comments were checked or truly not applicable;
- state/checkpoint/archive status is internally consistent;
- archive pressure is not `желтый_3` or `красный`.

## 7. Examples

### Example A — PR created

```text
Opened PR #123.

Bot/reviewer comments: not checked — PR is fresh and review may not have appeared yet.
Archive status: зеленый_2 — small PR segment, no archive threshold.
```

### Example B — PR merged and comments checked

```text
PR #123 merged.
Bot/reviewer comments: checked — no comments found.
Archive status: зеленый_1 — no unresolved archive pressure.
```

### Example C — PR merged but comments not checked

```text
PR #123 merged.
Bot/reviewer comments: not checked — merge status only, review audit still needed.
Archive status: желтый_1 — do not call this a clean point yet.
```

## 8. Do not infer

Do not infer from this footer that:

- bot/reviewer checking is automated;
- archive status is a CI check;
- archive status changes project-state;
- footer replaces bot_reviewer_comments protocol;
- footer replaces archive_status_indicator protocol;
- footer grants approval or bypasses gates.

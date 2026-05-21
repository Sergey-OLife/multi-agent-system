# Bot reviewer comments protocol

Status: mandatory protocol addendum
Date: 2026-05-21
Scope: pull request review discipline

## 1. Why this addendum exists

Some pull requests receive comments from `chatgpt-codex-connector` or similar automated review accounts.

Those comments can contain actionable review findings, boundary warnings, or false positives.

They must not be ignored merely because checks are green, the PR is mergeable, or the comment author is a bot.

## 2. Rule

Before ChatGPT presents a PR as ready for `++` or attempts merge, it must check PR discussion and review comments, including:

- top-level PR conversation comments;
- submitted PR reviews;
- inline review threads;
- unresolved review threads;
- comments from `chatgpt-codex-connector`.

If comments exist, ChatGPT must classify them before asking Sergey for approval or merging.

## 3. Classification

Each relevant bot/reviewer comment must be classified as one of:

- `must_fix` — the comment identifies a real issue that should be fixed in the same PR branch before merge;
- `not_applicable` — the comment is a false positive, already handled, or outside the PR scope;
- `future_followup` — the comment is useful but should not block the current PR and needs a separate future decision or artifact.

## 4. Required behavior

If classification is `must_fix`:

1. Do not ask for merge approval yet.
2. Fix the issue in the same PR branch.
3. Re-check changed files, mergeability, checks, and comments.
4. Report what was fixed.

If classification is `not_applicable`:

1. State briefly why it does not apply.
2. Do not change the PR just to satisfy a false positive.
3. Continue normal PR verification.

If classification is `future_followup`:

1. State why it should not block current merge.
2. Record it in the appropriate archive, roadmap, issue, proposal, or state-sync path only if it is concrete enough.
3. Do not silently convert it into implementation.

## 5. Merge boundary

A PR must not be described as ready for merge when there are unclassified bot/reviewer comments.

Green CI and mergeability are necessary but not sufficient when comments are present.

The correct ready-for-merge statement should include whether comments were checked and what their status is.

## 6. Non-goals

This addendum does not create:

- automated review enforcement;
- new GitHub Action;
- required check;
- validator;
- hard guardrail;
- route automation;
- policy engine;
- branch protection change;
- runtime behavior;
- approval bypass.

It is a manual PR review discipline only.

## 7. Minimal reporting format

When reporting PR readiness, include a compact line such as:

```text
Comments: checked; no bot/reviewer comments found.
```

or:

```text
Comments: checked; 2 bot comments found — 1 must_fix fixed in branch, 1 future_followup recorded.
```

or:

```text
Comments: checked; 1 bot comment found — classified not_applicable because <reason>.
```

## 8. Interaction with existing protocol

This addendum extends the required double self-review and mergeability checks.

It does not replace approval gates.

`+` may be used to continue comment checking.

`++` still means approval only for the current clear approval-gate after comments have been checked and classified.

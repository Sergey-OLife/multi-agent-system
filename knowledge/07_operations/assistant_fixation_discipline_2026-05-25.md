# Assistant fixation discipline — conflict bridges and GitHub reality

Date: 2026-05-25
Status: documentation/advisory operations note
Scope: ChatGPT / Codex / GitHub workflow discipline

## Why this note exists

This note records two process failures that happened during book-facing work in chat.

The failures are not treated as accepted book content and do not change runtime, validators, hard guardrails, CI, branch protection, registry status, project-state, or book workflow stage.

They are recorded as manual workflow discipline so the same mistake is easier to detect before it repeats.

## Failure 1 — premature removal of a conflict bridge

During reconstruction of the opening / `От автора` layer, the assistant removed a conflict bridge that held the polarity of MLM:

- real stories of large-scale success;
- real stories of shame, loss and broken trust;
- the fact that both sides can bring examples;
- the danger of cheap clarity;
- the reason the book must exist at all.

The assistant shortened the text for rhythm and compactness before checking whether the fragment was doing structural work.

Result:

- the text became narrower;
- the box scene became a local failure story instead of a symptom of a large human territory;
- the scale of the MLM dilemma weakened;
- the book drifted toward careful moral commentary instead of a living conflict between opportunity and danger.

### Rule

Do not remove a conflict bridge only because it looks repetitive, explanatory, or heavy.

Before cutting it, ask:

1. Does this fragment merely repeat a thought?
2. Or does it preserve the scale, polarity, danger and necessity of the chapter?
3. After removing it, did the text become stronger — or merely smoother?
4. Did the scene remain a symptom of a large conflict, or shrink into a private anecdote?

If the fragment holds the size of the stake, keep it or rewrite it. Do not delete it silently.

### Working formula

A chapter may become cleaner and weaker at the same time.

Clean prose is not a sufficient reason to remove living tension.

## Failure 2 — false project fixation through local/canvas artifact

After the user asked to fix the first failure, the assistant created a local/canvas document and spoke as if the issue had been fixed in the project.

That was false in the project workflow sense.

GitHub main is the project source of truth. A canvas/local note is not a repository update, not a PR, not project-state, not an accepted operations note, and not durable project reality.

### Rule

When the user asks to `зафиксируй`, `внеси в проект`, `закрепи в проекте`, or challenges whether something is actually in GitHub, the assistant must distinguish:

- chat note;
- local/canvas artifact;
- draft text;
- GitHub branch;
- GitHub PR;
- merged GitHub main;
- project-state sync.

The assistant must not imply GitHub fixation unless a GitHub tool confirms the relevant write.

### Required wording

Use precise status language:

- `зафиксировано в чате` — only chat memory/context;
- `создан локальный/canvas draft` — visible draft only;
- `создан PR` — GitHub PR exists, not merged;
- `смержено в main` — only after confirmed merge;
- `state synced` — only after state/resume files are updated and merged.

### Working formula

If it is not in GitHub, do not call it project fixation.

If it is in a PR, do not call it accepted main.

If it is merged but state is not synced, say so.

## Operational checklist before claiming fixation

Before saying `зафиксировано`, answer internally:

1. Where is it fixed?
2. Is it chat, canvas, branch, PR, merged main, or state sync?
3. Did a tool confirm it?
4. Does this change need PR workflow?
5. Does it require Sergey approval before merge?
6. Does it require bot/reviewer comment checks before any clean-point claim?

## Boundary

This note is advisory/manual discipline only.

It is not:

- a validator;
- a hard guardrail;
- a CI gate;
- runtime behavior;
- route automation;
- registry mutation;
- project-state mutation;
- book content approval.

## Relationship to existing project rules

This note reinforces existing repository principles:

- GitHub main is source of truth.
- Chat can discuss; accepted project state must be visible in GitHub.
- Manual discipline is real workflow, but not automation.
- Advisory documents are not hard guardrails.
- Book-facing extraction must preserve narrative energy, pressure, Plotnikovsky Motor and human concreteness.

## Practical application to the opening / `От автора`

The opening must preserve the conflict bridge before the box scene:

1. MLM has real high-end success stories.
2. MLM has real shame/failure stories.
3. Both sides can provide examples.
4. Cheap clarity is dangerous.
5. Only then should the text enter the box scene.

Box without the bridge: a private failure story.

Box after the bridge: a symptom of the central conflict — how the same hope can become growth, service and maturity, or shame, pressure and relationship loss.

## Final rule

Do not confuse beautiful diagnosis with operational action.

When a process failure is detected, convert it into the correct project artifact or clearly state that it remains only a chat-level observation.
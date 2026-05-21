# Second-eyes preflight card examples — 2026-05-21

Status: operational examples
Date: 2026-05-21
Mode: documentation-only / manual discipline only

## 1. Purpose

These examples demonstrate how the second-eyes layer can be applied at high-risk project margins without introducing automation, validators, hard guardrails or runtime orchestration.

The goal is not bureaucracy.

The goal is to make hidden assumptions visible before a risky GitHub/project action.

## 2. Minimal card structure

```text
Action:
Why now:
Risk:
Hidden assumption:
Critic check:
Result:
```

Possible critic results:

- `pass`
- `block`
- `split_required`
- `needs_approval`

## 3. Example — state sync

```text
Action:
Short state sync after merged protocol PR.

Why now:
State/worklog drift already exists.

Risk:
False current-state.

Hidden assumption:
Merged PR already changed main.

Critic check:
Was the PR actually merged into main or only approved/open?

Result:
pass
```

## 4. Example — archive PR

```text
Action:
Archive visible chat segment.

Why now:
Archive pressure reached yellow_3.

Risk:
Turning thematic archive into fake full-chat checkpoint.

Hidden assumption:
The archive covers the whole chat.

Critic check:
Does the archive explicitly declare coverage scope and gaps?

Result:
pass
```

## 5. Example — checkpoint full

```text
Action:
Create checkpoint full.

Why now:
Major state transition already merged.

Risk:
Checkpoint accidentally claims implementation that only exists in open PR.

Hidden assumption:
Latest PR is merged.

Critic check:
Was the merge commit verified before updating restart/state files?

Result:
pass
```

## 6. Example — failed retry

```text
Action:
Retry failed GitHub write.

Why now:
Previous attempt failed from tooling issue.

Risk:
Blind retry mutates the operation itself.

Hidden assumption:
The previous failure was transport/tooling only.

Critic check:
Did the retry preserve the same semantic operation?

Result:
pass
```

## 7. Example — agent activation proposal

```text
Action:
Activate proposal agent.

Why now:
Agent appears operationally useful.

Risk:
Proposal accidentally treated as active runtime layer.

Hidden assumption:
Manual discipline already equals activation.

Critic check:
Was there explicit approval for activation and registry/state change?

Result:
needs_approval
```

## 8. Example — README cleanup

```text
Action:
Simplify README.

Why now:
README became overloaded.

Risk:
README loses entrance-map role or silently becomes live roadmap again.

Hidden assumption:
README can safely absorb current-state semantics.

Critic check:
Will current next action still come from project-state/current-state/roadmap?

Result:
pass
```

## 9. Example — future runtime discussion

```text
Action:
Add runtime readiness roadmap.

Why now:
External audit mentioned observability/runtime.

Risk:
Future-only architecture becomes implicit roadmap.

Hidden assumption:
Future possibility already equals approved direction.

Critic check:
Did Sergey explicitly choose runtime-readiness work?

Result:
block
```

## 10. Boundary

These examples are:

- manual;
- illustrative;
- non-blocking;
- optional.

They are not:

- GitHub Actions;
- validator templates;
- runtime orchestration;
- mandatory forms;
- approval replacement;
- policy layer;
- hard guardrails.

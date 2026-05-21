# Second-eyes status clarification — 2026-05-21

Status: documentation clarification
Date: 2026-05-21
Scope: `critic_margin_agent`, `margin_orchestra`, `workflow_conductor_agent`
Mode: documentation-only / no activation

## 1. Why this note exists

The project currently uses second-eyes discipline in practice, but the related artifacts use different lifecycle words:

- `critic_margin_agent` exists as an agent proposal;
- `critic_margin_agent` logic is also active as a manual preflight discipline;
- `margin_orchestra` is active as a manual second-eyes preflight pattern;
- `workflow_conductor_agent` remains a separate proposal for broader workflow coordination.

This can look contradictory unless the status layers are kept separate.

## 2. Status clarification

| Artifact | Current status | Meaning | Not this |
|---|---|---|---|
| `critic_margin_agent` proposal | `proposal` as route/runtime agent | The agent is described but not routed, automated, or activated as runtime/route participant. | Not route, not validator, not hard guardrail, not runtime. |
| `critic_margin_agent` manual preflight | `active manual discipline` | Its critic voice can be used manually before high-risk GitHub margin operations. | Not formal route activation, not approval authority. |
| `margin_orchestra` | `active manual second-eyes preflight pattern` | Coordination pattern that decides when a short second look is needed at margin points. | Not committee, not runtime, not automated guardrail, not registry status change. |
| `workflow_conductor_agent` | `proposal` | Candidate future coordinator for broader agent workflow and approval-gate sequencing. | Not active, not second-eyes cluster by default, not automatically enabled by margin-orchestra work. |

## 3. Practical rule

Use this distinction:

```text
critic_margin_agent as agent = proposal.
critic_margin_agent as manual voice = active manual discipline.
margin_orchestra = active manual pattern.
workflow_conductor_agent = separate proposal.
```

This is not a loophole. It is a lifecycle distinction.

The manual voice can be used by ChatGPT/human workflow without claiming that the route/runtime agent is activated.

## 4. Current call pattern

At high-risk project margins:

1. Primary executor states the intended action.
2. `margin_orchestra` identifies whether this is a margin point.
3. `critic_margin_agent` manual voice checks hidden assumptions.
4. If the critic status is `pass`, work may continue.
5. If status is `block`, `split_required`, or `needs_approval`, stop and name the missing prerequisite.

## 5. What remains manual

All of this remains manual discipline.

It does not create:

- route automation;
- validator;
- hard guardrail;
- branch protection;
- GitHub Action;
- runtime behavior;
- approval authority;
- automatic registry status change;
- policy layer.

## 6. Relationship with future development

Future development can choose one of three separate paths, each requiring its own decision:

1. Add examples of preflight cards for common cases.
2. Propose tooling that only checks whether a preflight card is present.
3. Controlled activation of one agent in the Agent Queue.

This note approves none of those automatically.

## 7. Recommended next step after merge

After this clarification is merged, choose one Agent Queue candidate explicitly.

The safest candidate is still a documentation-only follow-up: preflight-card examples for state sync, archive PR, checkpoint full, failed retry and agent activation.

Controlled activation of `critic_margin_agent` or `workflow_conductor_agent` should remain a separate approval gate.

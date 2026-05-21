# Agent Queue next candidate review — 2026-05-21

Status: review result note
Date: 2026-05-21
Scope: next Agent Queue candidate after `critic_margin_agent` advisory/manual activation
Mode: documentation-only / no activation

## 1. Why this review exists

After PR #245 and PR #246, `critic_margin_agent` is synced as active advisory/manual second-eyes discipline.

The next step should not be another activation by inertia.

This note reviews the nearest Agent Queue candidates and recommends one next controlled step.

## 2. Current boundary

Current stable result:

```text
critic_margin_agent = active advisory/manual second-eyes discipline.
critic_margin_agent != runtime/route validator.
workflow_conductor_agent = separate proposal.
```

This review does not change those meanings.

## 3. Candidate table

| Candidate | Current status | Why it matters | Risk | Review result |
|---|---|---|---|---|
| `agent_registry_librarian` | proposal | Prevents duplicate agents, status confusion and uncontrolled Agent Queue growth. | Low/medium. Can become bureaucracy if overused. | Best next candidate for controlled activation scope. |
| `approval_gate_keeper` | proposal | Clarifies `+`, `++`, approval gates and semantic permission. | Medium. Can become too gate-heavy or ceremonial. | Useful later; not first after critic activation. |
| `project_state_synchronizer` | proposal | Keeps state/worklog/restart/project-state in sync. | Medium. Could duplicate drift audit and state-sync ritual. | Useful, but current drift/state tooling already exists. Not next. |
| `checkpoint_compressor_agent` | proposal | Helps keep restart prompts compact. | Low. Narrow utility. | Safe but less strategically urgent. |
| `workflow_conductor_agent` | proposal | Coordinates the whole agent ensemble. | High/medium. Can silently turn Agent Queue into orchestration runtime. | Not now. Requires separate explicit decision. |
| `source_card_builder` | proposal | Useful for source library discipline. | Medium. Relevant when source intake resumes. | Defer until source-card work is selected. |
| `svod_guard` | proposal | Protects book logic and one-spine chapter discipline. | High. Book mode is paused. | Defer until book mode resumes. |
| `anti_cliche_editor` | proposal | Strong writing utility. | Low. Book mode is paused. | Defer until book mode resumes. |

## 4. Recommendation

The next best Agent Queue candidate is:

```text
agent_registry_librarian
```

Reason:

- current work is still in Agent Shipyard / Agent Queue;
- the system has just activated one advisory/manual agent layer;
- the next risk is uncontrolled agent/status growth;
- the librarian’s core job is status hygiene, not orchestration;
- it is safer than activating `workflow_conductor_agent`;
- it is more structural than another writing/book agent while book mode is paused.

## 5. Recommended next PR

Prepare a narrow controlled activation scope for `agent_registry_librarian`.

Activation should mean:

```text
active advisory/manual registry hygiene discipline for Agent Queue decisions.
```

Activation should not mean:

- agent creation authority;
- registry mutation authority;
- route automation;
- validator;
- hard guardrail;
- workflow conductor;
- approval authority;
- runtime behavior;
- automatic state sync.

## 6. Non-goals

Do not activate:

- `workflow_conductor_agent`;
- `approval_gate_keeper`;
- `project_state_synchronizer`;
- any book/style agent;
- any source-card agent.

Do not add tooling, CI checks, validators, GitHub Actions, hard guardrails or runtime routing.

## 7. Suggested activation boundary for the next step

If Sergey approves the next controlled activation, the activation scope should say:

```text
agent_registry_librarian is active as advisory/manual registry hygiene discipline.
agent_registry_librarian is not a route, validator, hard guardrail, approval authority, workflow conductor, state synchronizer or automatic registry editor.
```

## 8. Why not workflow conductor now

`workflow_conductor_agent` is too broad for the current maturity point.

The project just learned to separate:

- manual discipline from automation;
- advisory output from enforcement;
- second-eyes voice from route validator.

Activating the full conductor now would raise orchestration pressure before the queue hygiene layer is mature.

## 9. Boundary

This note is review-only.

It does not:

- activate `agent_registry_librarian`;
- change registry status;
- change project-state;
- change roadmap;
- change workflows;
- change code;
- add automation;
- add validators;
- add hard guardrails;
- create approval authority.

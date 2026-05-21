# Critic margin agent activation scope — 2026-05-21

Status: controlled activation scope
Date: 2026-05-21
Scope: `critic_margin_agent`
Mode: advisory/manual-only activation

## 1. Why activation is now considered

`critic_margin_agent` already exists in practice as a manual second-eyes voice.

Recent work established:

- second-eyes status clarification;
- manual preflight semantics;
- operational preflight-card examples;
- explicit boundaries against runtime escalation.

The project therefore no longer benefits from pretending the critic layer is only hypothetical.

At the same time, the project is explicitly avoiding premature validator/runtime escalation.

This activation scope exists to preserve that balance.

## 2. Activation meaning

Activation means:

```text
The critic layer is formally recognized as an optional advisory second-eyes discipline for margin operations.
```

Activation does not mean:

- validator;
- required gate;
- hard guardrail;
- CI enforcement;
- runtime orchestration;
- route automation;
- policy engine;
- approval authority.

## 3. Operational role

The critic layer helps expose hidden assumptions before high-risk operations.

Typical targets:

- state sync;
- checkpoint full;
- archive PR;
- retry after failed operation;
- registry/status changes;
- activation proposals;
- README/topology changes;
- future-runtime discussions.

## 4. Allowed outputs

Allowed critic outcomes:

- `pass`;
- `block`;
- `split_required`;
- `needs_approval`.

These are advisory semantic outputs only.

They are not merge restrictions or workflow locks.

## 5. Required boundaries

The activated critic layer must remain:

- manual-first;
- optional;
- explainable;
- reversible;
- lightweight.

The critic layer must not:

- silently mutate tasks;
- silently rewrite scope;
- claim merge authority;
- auto-update state;
- auto-change registry;
- block GitHub operations;
- create mandatory forms;
- become committee workflow.

## 6. Relationship with margin_orchestra

`margin_orchestra` remains the coordination pattern.

`critic_margin_agent` becomes the formally recognized advisory critic voice inside that pattern.

This does not activate `workflow_conductor_agent`.

## 7. Registry interpretation

Correct interpretation after activation:

```text
critic_margin_agent:
- active as advisory/manual discipline;
- not active as runtime/route validator.
```

The project must not collapse these into a single meaning.

## 8. Current maturity rule

The current maturity stage favors:

- operational semantics;
- ambiguity reduction;
- explicit boundaries;
- human-visible reasoning.

It does not favor:

- enforcement escalation;
- hidden automation;
- governance layering;
- runtime policy machinery.

## 9. Future escalation gates

Any future move toward:

- validator behavior;
- mandatory preflight;
- CI integration;
- runtime routing;
- automated state checks;
- orchestration authority;
- policy layer

requires separate explicit approval.

## 10. Recommended implementation style

If activation proceeds:

- keep activation documentation-first;
- sync registry/state carefully;
- avoid symbolic overreach;
- avoid language suggesting enforcement.

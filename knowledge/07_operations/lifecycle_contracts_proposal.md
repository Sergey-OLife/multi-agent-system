# Lifecycle contracts proposal

Status: proposal only
Date: 2026-05-21
Scope: minimal contract layer for lifecycle statuses

## 1. Problem statement

The project uses lifecycle words to keep architectural boundaries honest:

- `container`;
- `proposal`;
- `mechanics`;
- `manual_discipline`;
- `routed`;
- `validator`;
- `hard_guardrail`.

These words are useful, but today they mostly live in human-readable documentation and working discipline.

That creates a predictable risk: future work can accidentally assign a stronger status than the artifact actually has.

Examples of dangerous confusion:

- treating a proposal as a validator;
- treating manual discipline as route automation;
- treating manual discipline as hard guardrail;
- treating an archive entry as project-state;
- treating local diagnostic tooling as CI enforcement.

The project has already reduced this risk through explicit wording, archive discipline, state sync discipline and local drift diagnostics. That is good, but text alone remains easy to forget.

The proposal is to introduce a minimal contract layer for lifecycle statuses, so the most important lifecycle terms can later become checkable project concepts instead of only prose conventions.

## 2. Why lifecycle words are insufficient as text

Lifecycle wording is a strong human protocol, but it is not an invariant.

Text can explain boundaries, but it cannot prevent incorrect status assignment by itself.

A future contributor, assistant run, or automation step can read an artifact and assume that:

- `proposal` means implemented;
- `manual_discipline` means enforced;
- `routed` means validator;
- archive means checkpoint;
- state note means source of truth.

The current project has intentionally avoided false claims. The next safe improvement is not runtime automation. It is a small contract vocabulary that makes false status language harder to introduce later.

## 3. Non-goals

This proposal does not approve or implement:

- route automation;
- validators;
- hard guardrails;
- runtime behavior;
- CI enforcement;
- GitHub Actions changes;
- branch protection changes;
- approval bypass;
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, broker, observability stack, release process, or production security tooling;
- README restructuring;
- `go-core` renaming;
- panic-based invariant checks;
- state sync enforcement;
- archive automation;
- book workflow changes.

This is a proposal only. It must not be treated as activation, implementation, routing, validation, or enforcement.

## 4. Proposed package shape

If approved later, the first implementation should be a small pure package for lifecycle contracts.

Recommended shape:

- package name: `lifecycle`;
- location: to be decided before implementation, likely under the existing Go contract/core area;
- content type: pure types and pure validation functions;
- no IO;
- no GitHub access;
- no CI integration beyond ordinary existing tests;
- no runtime mutation;
- no panic-based checks;
- no agent routing.

The package should define:

- lifecycle stages;
- allowed transitions;
- project entity types;
- entity-to-stage compatibility rules;
- confusion checks for known dangerous pairs;
- tests for allowed and forbidden cases.

## 5. Allowed stages

| Stage | Meaning | Boundary |
|---|---|---|
| `container` | A holding shell or conceptual place for future work. | Not a proposal, not implementation. |
| `proposal` | A documented suggestion or design option. | Not activation, not validator, not implemented status. |
| `mechanics` | A documented or implemented mechanism for how something may work. | Not necessarily active discipline or enforcement. |
| `manual_discipline` | A human-applied rule or practice. | Not route automation, not validator, not hard guardrail. |
| `routed` | A path or workflow route is recognized. | Not automatically a validator. |
| `validator` | A check can evaluate whether a rule is satisfied. | Not automatically hard guardrail unless blocking/enforced. |
| `hard_guardrail` | A blocking or enforced protection. | Requires separate explicit decision. |

## 6. Allowed transitions

Initial proposed transition model:

| From | Allowed next stages | Forbidden examples |
|---|---|---|
| `container` | `proposal` | `container -> validator`, `container -> hard_guardrail` |
| `proposal` | `mechanics` | `proposal -> validator`, `proposal -> hard_guardrail` |
| `mechanics` | `manual_discipline`, `routed` | `mechanics -> hard_guardrail` |
| `manual_discipline` | `routed` | `manual_discipline -> validator` without explicit later design, `manual_discipline -> hard_guardrail` |
| `routed` | `validator`, `manual_discipline` | `routed -> hard_guardrail` without validator stage |
| `validator` | `hard_guardrail` | `validator -> proposal` as status downgrade without explicit migration note |
| `hard_guardrail` | none by default | any silent downgrade |

The table is intentionally conservative. It should prevent status inflation before it prevents all possible edge cases.

## 7. Entity-to-stage matrix

The first implementation should check not only transitions, but also whether a given entity type is allowed to have a given lifecycle stage.

Initial matrix:

| Entity type | Allowed stages | Forbidden examples |
|---|---|---|
| `agent` | `proposal`, `manual_discipline`, `routed`, `validator`, `hard_guardrail` | `agent` as `container` unless explicitly used as holding shell; `agent` as `mechanics` without clearer artifact type |
| `pr` | `proposal`, `mechanics`, `routed` | `pr` as `validator` or `hard_guardrail` merely because it exists |
| `archive` | `mechanics`, `manual_discipline` | `archive` as `project-state`, `validator`, or `hard_guardrail` |
| `state` | `routed`, `validator`, `hard_guardrail` | `state` as `proposal`; project-state should not be treated as a loose idea |
| `protocol_addendum` | `manual_discipline`, `routed`, `validator` | `protocol_addendum` as hard guardrail without explicit enforcement decision |
| `script` | `mechanics`, `manual_discipline`, `validator` | `script` as hard guardrail unless blocking/enforced; local diagnostic script as CI enforcement |
| `workflow` | `validator`, `hard_guardrail` | `workflow` as proposal if it is active in `.github/workflows` |
| `source_card` | `proposal`, `mechanics`, `manual_discipline` | source card as full source or as proof that the source was read |

This matrix is proposal-level and should be refined before implementation.

## 8. Test matrix

Future implementation should include tests for both allowed and forbidden behavior.

Transition tests:

| Case | Expected result |
|---|---|
| `container -> proposal` | allowed |
| `proposal -> mechanics` | allowed |
| `mechanics -> manual_discipline` | allowed |
| `mechanics -> routed` | allowed |
| `manual_discipline -> routed` | allowed |
| `routed -> validator` | allowed |
| `validator -> hard_guardrail` | allowed |
| `proposal -> validator` | forbidden |
| `manual_discipline -> hard_guardrail` | forbidden |
| `container -> validator` | forbidden |
| `mechanics -> hard_guardrail` | forbidden |

Entity-stage tests:

| Case | Expected result |
|---|---|
| `agent + proposal` | valid |
| `agent + manual_discipline` | valid |
| `agent + validator` | valid only as explicit validator artifact/status |
| `pr + routed` | valid |
| `pr + hard_guardrail` | invalid |
| `archive + manual_discipline` | valid |
| `archive + validator` | invalid |
| `state + validator` | valid |
| `source_card + hard_guardrail` | invalid |
| empty entity name | invalid |

Confusion tests:

| Confusion pair | Expected result |
|---|---|
| `proposal` confused with `validator` | error |
| `manual_discipline` confused with `hard_guardrail` | error |
| `container` confused with `validator` | error |
| `archive` confused with `project-state` | error or unsupported pair |
| local diagnostic script confused with CI enforcement | error or unsupported pair |

## 9. Migration plan

### Step 1 — proposal

This document only records the proposal.

No code is added. No validation is added. No lifecycle behavior changes.

### Step 2 — minimal implementation proposal approval

Before writing code, decide:

- exact package location;
- exact entity type list;
- whether `protocol_addendum`, `script`, `workflow`, and `source_card` are included in v1;
- whether implementation should include only pure functions or also small CLI diagnostics later.

### Step 3 — pure package and tests

If approved later, add only:

- lifecycle stage definitions;
- entity type definitions;
- transition checks;
- entity-stage checks;
- confusion checks;
- unit tests.

No CI enforcement beyond existing test execution.

### Step 4 — later policy layer, only by separate decision

A later policy layer may eventually decide questions such as:

- whether a PR needs approval based on entity and stage;
- whether a state sync is required;
- whether an archive can be created without index update;
- whether an agent can move toward validator status.

This proposal does not approve that layer.

## 10. Open questions

- Should the first implementation live under `go-core`, `internal/lifecycle`, or another contract-oriented location?
- Should `protocol_addendum`, `script`, `workflow`, and `source_card` be v1 entity types or later additions?
- Should lifecycle contracts be purely Go-level, or should a later script consume them for diagnostics?
- Should archive/project-state confusion be represented as stage confusion, entity confusion, or a separate artifact-type rule?
- Should `validator -> hard_guardrail` require an explicit approval marker in a later policy layer?
- Should `state` be allowed as `hard_guardrail`, or should state remain a truth artifact while workflows provide enforcement?

## 11. Recommended next step

Discuss and refine this proposal.

If Sergey approves the direction later, prepare a separate implementation PR for pure lifecycle types and tests only.

Do not implement code from this proposal without separate approval.

# Margin orchestra manual preflight

Status: active manual discipline. No automation.

Use `margin_orchestra` as a compact second-eyes preflight pattern at high-risk project margins.

It is not a route, validator, hard guardrail, branch protection, runtime, committee, approval authority, or registry status change.

## Call points

Call the pattern before:

- registry sync;
- agent activation;
- route change;
- project-state sync after merge;
- archive PR creation;
- checkpoint full;
- workflow change;
- branch protection verification or change;
- closing / superseding a PR;
- retrying after a failed PR or blocked tool call;
- `+++`, if the nearest action may change repository state.

Use it lightly before:

- new protocol addendum;
- agent proposal with workflow impact;
- GitHub Actions change;
- mass archive or handoff operation;
- moving a human-facing rule toward deterministic tooling.

Do not use it deeply before:

- ordinary file reading;
- checking workflow status;
- simple answer without repository write;
- draft prose revision without project-state impact.

## Required output

A preflight card must name:

- margin point;
- primary action;
- operation class;
- hidden assumption checked;
- critic status: `pass`, `block`, `split_required`, or `needs_approval`;
- approval gate;
- next safe step.

Minimal shape:

```yaml
margin_orchestra:
  margin_point: "registry_sync | activation | route_change | state_sync | archive_pr | workflow_change | checkpoint | branch_protection | failed_retry | other"
  primary_action: "string"
  operation_class: "string"
  hidden_assumption_checked:
    - "string"
  critic_status: "pass | block | split_required | needs_approval"
  approval_gate: "none | plus_plus_required | separate_sergey_decision_required"
  next_safe_step: "string"
```

## Pass rule

Proceed only when the hidden assumption is explicit and no approval gate is bypassed.

## Block rule

Stop when:

- the operation class is unclear;
- the target object is missing;
- the tool cannot perform the real operation;
- an open PR is treated as implemented;
- a closed-unmerged PR is treated as implemented;
- proposal / mechanics / manual discipline is treated as route, validator, hard guardrail, branch protection, or runtime;
- final-head CI / Sync Check is missing where it applies;
- a single PR mixes unrelated risk classes that should be split.

## Split rule

Split work when one PR tries to combine:

- archive and checkpoint;
- protocol and runtime;
- proposal and activation;
- manual discipline and automated validator;
- state sync and unrelated feature work;
- branch protection verification and branch protection enforcement.

## Relationship to critic_margin_agent

`critic_margin_agent` is the named critic voice used inside this pattern.

The orchestra is the coordination pattern; the critic is the short second-eyes check.

Neither has approval authority.

## Relationship to existing design

This addendum hardens the existing `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md` design into active manual protocol discipline.

It still does not create automation, routing, validators, hard guardrails, branch protection, runtime, or committee behavior.

## First next step after this protocol

After this manual preflight protocol is merged, the next hardening step may be a tooling proposal or a narrow script/check that detects whether required preflight cards are present in selected protocol/state-sync PRs.

That tooling step requires a separate decision before implementation.

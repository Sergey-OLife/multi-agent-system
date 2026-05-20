# Margin orchestra protocol

Status: active manual protocol. No automation.

## Purpose

Use `margin_orchestra` as a short second-eyes protocol at repository margin points where a mistake can hide between otherwise correct steps.

It does not create routes, validators, hard guardrails, branch protection, runtime, registry status changes, or automated blocking.

## Required margin points

Use this protocol before:

- registry sync;
- agent activation;
- route change;
- state sync after merge;
- archive PR creation;
- checkpoint full;
- workflow change;
- branch protection change or verification;
- closing or superseding PRs;
- retry after a failed tool attempt;
- `+++` when the nearest action can change repository state.

## Optional margin points

Use when helpful before:

- new protocol;
- new agent proposal with workflow impact;
- GitHub Actions adjustment;
- mass archive or handoff work;
- moving a human-facing rule toward deterministic tooling.

## Skip points

Do not run the protocol for:

- reading files;
- checking workflow status;
- answering without repository write;
- editing draft text in chat without project-state impact.

## Manual preflight card

Before the action, write a compact preflight in the chat:

```yaml
margin_orchestra:
  margin_point: "state_sync | archive_pr | checkpoint | workflow_change | branch_protection | retry | other"
  primary_action: "short description"
  critic_status: "pass | block | split_required | needs_approval"
  hidden_assumption_checked:
    - "short item"
  approval_gate: "none | ++ required | specific PR"
  next_safe_step: "short item"
```

## Decision rules

If `critic_status` is `pass`, continue.

If `block`, stop and name the missing prerequisite.

If `split_required`, create or propose a smaller PR before continuing.

If `needs_approval`, stop until Sergey gives explicit `++`.

## Relationship to critic_margin_agent

`critic_margin_agent` supplies the short manual second-eyes voice.

This protocol gives that voice a repeatable shape.

## Boundary

This is manual protocol hardening only. Tooling, validators, hard guardrails, route wiring, branch protection and runtime require separate PRs and separate Sergey approval.

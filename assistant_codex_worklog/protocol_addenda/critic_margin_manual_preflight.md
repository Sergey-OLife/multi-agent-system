# Critic margin manual preflight

Status: active manual discipline. No automation.

Before high-risk GitHub margin operations, use `critic_margin_agent` as a short manual preflight voice.

Call points: registry sync, agent activation, route change, archive PR, state sync, workflow change, checkpoint, branch protection check, failed PR retry.

The preflight must name the operation class, checked assumption, hidden risk, approval gate, and next safe step.

This does not add routes, validators, hard guardrails, branch protection, runtime changes, or book changes.

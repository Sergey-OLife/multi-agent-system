# Critic margin activation mechanics

Status: mechanics only. No activation.

Activation means manual preflight use before high-risk boundaries.

It does not mean routes, validator, hard guardrail, registry status change, branch protection, or runtime change.

Allowed call points: registry sync, activation, route change, archive PR, state sync, workflow change, checkpoint, branch protection check, failed PR retry.

Required output: status, operation class, checked assumption, hidden risk, approval gate, next safe step.

A later activation PR may only add manual call discipline unless Sergey separately approves more.

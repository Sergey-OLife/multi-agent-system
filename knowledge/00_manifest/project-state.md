# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.45
- lastCompletedVersion: v2.45
- lastMergedPr: PR #194 — Harden margin orchestra manual preflight
- lastMergeCommit: 37b2dee986407f2be705e30ffb12ad790f9ef381
- currentMilestone: v2.45 Margin orchestra manual preflight discipline synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.45

PR #194 added `assistant_codex_worklog/protocol_addenda/margin_orchestra_manual_preflight.md`.

`margin_orchestra` is now active manual second-eyes preflight discipline at high-risk project margins.

It remains manual discipline only. It is not runtime, routing, validator, hard guardrail, branch protection, committee, approval authority, or registry status change.

## Current recovery path

1. Verify branch protection.
2. Prepare a separate tooling proposal for `margin_orchestra` only if Sergey separately approves it.
3. Continue deeper knowledge / protocol consistency automation proposal later if still useful.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, branch protection, runtime, registry status changes, or project-state sync.
- Do not treat branch protection as configured until it is explicitly verified.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Verify branch protection.

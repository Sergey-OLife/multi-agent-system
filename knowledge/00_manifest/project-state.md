# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.46
- lastCompletedVersion: v2.46
- lastMergedPr: PR #196 — Clarify external boundary and maturity status
- lastMergeCommit: 946221e46dc4103b1d284533ea916fb74cdb04b1
- currentMilestone: v2.46 External assessment boundary synced
- currentMode: Agent Shipyard / Agent Queue
- bookPaused: true

## What changed in v2.46

PR #196 clarified the external project boundary in README and maturity checklist.

The repository is now explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

External assessment conclusions were recorded in `knowledge/07_operations/external_assessment_notes_2026-05-20.md` without implementing runtime, routing, validators, hard guardrails, branch protection, observability, releases, or production security tooling.

## Current recovery path

1. Verify branch protection and record the result.
2. Consider a small checks overview if external readability remains weak.
3. Consider a future runtime readiness checklist only by separate decision.
4. Consider a scripts/core boundary audit only if needed.
5. Consider a warning-level detector for state-sync drift only by separate decision.

## Active decisions

- GitHub `main` is the source of truth for merged project state.
- Current active mode is Agent Shipyard / Agent Queue.
- Book Fast Track remains paused until separate Sergey decision.
- `conversation_archive_librarian` is active as manual archive discipline only.
- `critic_margin_agent` remains active as manual protocol discipline.
- `margin_orchestra` is active as manual second-eyes preflight discipline only.
- The `рестарт` command is implemented as a continuation command from GitHub source of truth.
- The repository is not a production multi-agent runtime, reusable public framework, or deployed agent platform.
- Redis, Postgres, P2P runtime, OpenAPI/gRPC, observability stack, broker, branch protection, validators and hard guardrails require separate decisions.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Agent Queue.
- Do not offer Book Fast Track as immediate next work until Sergey separately resumes it.
- Do not treat manual disciplines as routes, validators, hard guardrails, branch protection, runtime, registry status changes, or project-state sync.
- Do not treat branch protection as configured until it is explicitly verified and recorded.
- Do not implement runtime readiness items from external assessments without separate decision.
- Do not treat PR #141, PR #145, PR #152, PR #162, PR #164 or PR #169 as implemented.

## Next action

Verify branch protection and record the result.

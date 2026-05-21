# Roadmap — Assistant × Codex

## Current mode

`Agent Shipyard / Agent Queue`

Book work remains paused.

Book Fast Track is ignored for immediate next work until separate Sergey decision.

## Current milestone

- currentVersion: v2.63
- currentMilestone: Registry status overlay synced
- lastMergedPr: PR #255 — Add registry status overlay note
- lastMergeCommit: `d10be54144512238e3883f1e4a286497d6bdd861`

## Recent PR summary

- PR #252 — Archive Agent Queue and status trust closure.
- PR #253 — Index Agent Queue status trust archive entry.
- PR #254 — Record manual agent registry hygiene pass.
- PR #255 — Add registry status overlay note.

## Status

`рестарт` command protocol is implemented as a GitHub-source-of-truth continuation command.

`margin_orchestra` is active manual preflight discipline only.

`critic_margin_agent` is active as advisory/manual second-eyes discipline.

`critic_margin_agent` is not active as runtime/route validator, CI gate, approval authority, hard guardrail or policy engine.

`agent_registry_librarian` is active as advisory/manual registry hygiene discipline.

`agent_registry_librarian` is not active as agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.

`status_trust_matrix_2026-05-21.md` is documentation-only classification aid. It is not automation, validator, CI check, policy layer, runtime behavior, registry mutation or approval authority.

`registry_status_overlay_2026-05-21.md` is documentation-only explanation layer. It clarifies that registry lifecycle status tells what the agent is in the registry, while operational trust status tells how the project may use it now.

`workflow_conductor_agent` remains a separate proposal / future-only high-risk gate and is not activated by critic/margin/registry-librarian work.

`bot_reviewer_comments` is active mandatory manual PR review discipline only.

Before a PR is presented as ready for `++` or merged, PR comments, submitted reviews, inline review threads, unresolved review threads and `chatgpt-codex-connector` comments must be checked and classified.

Classification options: `must_fix`, `not_applicable`, `future_followup`.

The repository is explicitly documented as a GitHub-centered book/project operating system, not a production multi-agent runtime, reusable public framework, or deployed agent platform.

Minimal repository-level branch protection is active through GitHub Ruleset `Protect main` for `main` / default branch.

Required check contexts are documented in `knowledge/07_operations/checks_overview.md`:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

Local state-sync drift audit script is implemented as `scripts/state-sync-drift-audit.mjs` with package command `npm run state-sync:drift-audit`.

It is a warning-only local diagnostic tool, not a GitHub Action, required check, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, release, or production security tooling.

Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests.

It is implemented but not enforcement: no CLI, GitHub Action, CI enforcement beyond existing tests, route automation, project-gate validator, hard guardrail, approval logic, state-sync automation, runtime behavior, branch protection change, or book workflow change.

Agent Queue next candidate review is recorded in `knowledge/07_operations/agent_queue_next_candidate_review_2026-05-21.md`.

Agent registry librarian activation scope is recorded in `knowledge/07_operations/agent_registry_librarian_activation_scope_2026-05-21.md`.

Status trust matrix is recorded in `knowledge/07_operations/status_trust_matrix_2026-05-21.md`.

Manual agent registry hygiene pass is recorded in `knowledge/07_operations/agent_registry_hygiene_pass_2026-05-21.md`.

Registry status overlay is recorded in `knowledge/07_operations/registry_status_overlay_2026-05-21.md`.

README is the entrance map, not the live roadmap. Use project-state/current-state/roadmap for next action.

## Active archive-level open loops

- Lifecycle policy layer: future-only and requires separate Sergey decision.
- Future runtime readiness checklist: only by separate Sergey decision.
- Workflow conductor activation: only by separate Sergey decision.
- Further second-eyes tooling or mandatory preflight: only by separate Sergey decision.
- Book work remains paused until separate Sergey decision.

## Approved next sequence

1. merge this state sync after checks and approval;
2. choose explicitly between pausing Agent Queue for book/product work or discussing `workflow_conductor_agent` as a separate high-risk gate;
3. do not activate another agent by default;
4. do not treat registry status overlay as registry mutation, activation, validator, CI check, hard guardrail, policy layer, route/runtime behavior or approval authority;
5. if Sergey separately resumes book work, switch modes explicitly and update state.

## Recommended next work item

Choose explicitly: pause Agent Queue and return to book/product work, or discuss `workflow_conductor_agent` as a separate high-risk gate. Do not activate another agent by default.

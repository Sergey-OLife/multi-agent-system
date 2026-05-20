# Current State — Assistant × Codex

Date: 2026-05-20

## Working point

Mode: `Agent Shipyard / Agent Queue`.

Book work remains paused until Sergey gives a separate decision.

Book Fast Track is ignored for immediate next work per Sergey instruction.

## Latest merged PR

- PR #199 — Record branch protection ruleset activation
- Status: merged
- Merge commit: `00f9bd45bb26803be65544b70d34076dc0c6dacf`

## Current version

- currentVersion: v2.47
- currentMilestone: Minimal branch protection Ruleset active

## PR #199 result

PR #199 recorded that Sergey enabled the minimal active GitHub Ruleset `Protect main` for `main` / default branch.

The Ruleset requires pull requests before merge and requires exact GitHub check contexts:

- `TypeScript / JavaScript / Go checks`
- `sync-check`

It blocks force pushes and restricts deletions. Required approvals remain `0`. Branches are not required to be up to date before merging.

Status: repository-level branch protection only. It is not runtime security, prompt-injection protection, observability, code validator, agent hard guardrail, or production security tooling.

## Current active manual disciplines

- `critic_margin_agent` manual preflight discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight discipline.

## Next safe step

Consider a small checks overview for external readability, or pause for Sergey to choose the next work item.

# State sync drift detector proposal

Status: proposal only. No implementation.

This document proposes a warning-level detector for state-sync drift after PRs that change project-sensitive files.

It does not add a validator, hard guardrail, runtime, route, GitHub Action change, repository setting, or blocking rule.

## Problem

The project intentionally uses GitHub `main` as the source of truth.

Some merged PRs change state-sensitive material and require a follow-up state sync PR.

This is acceptable as manual discipline, but it creates a drift risk:

- a PR may be merged;
- the content may be real;
- state/resume files may still point to an older milestone;
- a later `рестарт` may recover from stale state if the sync was forgotten.

Recent work made this visible:

- PR #199 changed repository-level branch protection reality;
- PR #200 synced state afterward;
- PR #201 documented required checks and merge gates;
- PR #202 synced state afterward.

The workflow is correct, but still manual.

## Goal

Add a future detector that notices when state-sensitive changes probably require state sync.

First version should be advisory / warning-level, not blocking.

The detector should help humans notice drift. It should not decide project state by itself.

## Non-goals

This proposal does not aim to:

- auto-update project state;
- block merges immediately;
- replace Sergey approval;
- turn manual disciplines into validators;
- infer semantic truth from arbitrary file changes;
- create runtime orchestration;
- change branch protection rules;
- add a new required check without a separate decision.

## Candidate trigger paths

A warning may be useful when a PR changes any of these:

```yaml
state_sensitive_paths:
  - "README.md"
  - "knowledge/00_manifest/project-state.json"
  - "knowledge/00_manifest/project-state.md"
  - "assistant_codex_worklog/current-state.md"
  - "assistant_codex_worklog/roadmap.md"
  - "assistant_codex_worklog/restart-prompt.md"
  - "assistant_codex_worklog/working-protocol.md"
  - "assistant_codex_worklog/protocol_addenda/**"
  - "knowledge/07_operations/**"
  - "knowledge/05_agent_memory/agent_shipyard/**"
  - "knowledge/05_agent_memory/agent_proposals/**"
  - ".github/workflows/**"
```

## Candidate warning cases

The detector may warn when:

1. A PR changes protocol, workflow, operations, agent activation, branch protection record, or README, but does not update project-state/resume files.
2. A PR updates project-state JSON but not the Markdown mirror.
3. A PR updates the Markdown mirror but not project-state JSON.
4. A PR updates restart-prompt but not current-state / roadmap when milestone changed.
5. A PR body claims a version bump, but project-state JSON does not contain that version.
6. A PR body says "next step after merge: state sync" and the state sync PR is not visible yet after merge.

## Safe output shape

The detector should produce a short report, for example:

```yaml
state_sync_drift_detector:
  status: "pass | warn | not_applicable"
  blocking: false
  changed_state_sensitive_paths:
    - "string"
  possible_missing_sync:
    - "string"
  recommended_next_step: "string"
```

## First implementation idea

First implementation should be a script, not a hard rule.

Possible location:

```text
scripts/state-sync-drift-audit.mjs
```

Possible command:

```text
npm run state-sync:drift-audit
```

The script can inspect changed filenames and simple text patterns. It should avoid pretending to understand full project semantics.

## CI integration path

Recommended maturity ladder:

1. Document this proposal.
2. Add a local script with no CI effect.
3. Add a non-blocking CI summary or warning.
4. Only after repeated usefulness, consider making it part of Sync Check.
5. Only after a separate Sergey decision, consider blocking behavior.

## Risks

False positives are likely if the detector is too broad.

False confidence is likely if the detector is framed as semantic validation.

The detector must remain modest: it can detect suspicious drift patterns, not prove that project state is correct.

## Decision needed before implementation

Before implementation, Sergey should decide:

- warning-only script or CI-visible warning;
- exact trigger paths;
- whether it should inspect PR body text;
- whether it should run locally, in CI, or both;
- what false-positive rate is acceptable.

## Boundary

This proposal is not implementation.

It is a design step after checks overview and before automation.

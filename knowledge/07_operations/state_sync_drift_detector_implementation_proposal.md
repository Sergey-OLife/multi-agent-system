# State sync drift detector — local script implementation proposal

Status: implementation proposal only. No script is added by this document.

This document defines the first safe implementation shape for a warning-only local state-sync drift detector.

It is a continuation of `knowledge/07_operations/state_sync_drift_detector_proposal.md`.

## Decision frame

The next implementation step should be a local manual script, not CI-visible warning and not blocking validation.

```yaml
chosen_stage:
  stage: "warning_only_local_script"
  implementation_target: "local_manual_tool"
  enforcement: false
  ci_visible: false
  blocking: false
```

## Why local first

The detector is expected to produce false positives while its trigger paths and warning cases are being tuned.

Putting it into CI too early would make it feel like an official project check before its signal quality is known.

A local script lets the project test the detector on real PRs without changing merge behavior.

## Proposed file and command

```yaml
implementation_shape:
  script_file: "scripts/state-sync-drift-audit.mjs"
  npm_command: "state-sync:drift-audit"
  package_json_change: true
  ci_change: false
  sync_check_change: false
  branch_protection_change: false
```

Expected package command:

```json
{
  "scripts": {
    "state-sync:drift-audit": "node scripts/state-sync-drift-audit.mjs"
  }
}
```

## First-version input model

The first version should avoid GitHub API calls and avoid needing network access.

Recommended input modes:

```yaml
input_modes:
  explicit_changed_files:
    example: "node scripts/state-sync-drift-audit.mjs --files README.md,knowledge/07_operations/foo.md"
  files_from_stdin:
    example: "git diff --name-only main...HEAD | npm run state-sync:drift-audit -- --stdin"
  local_git_diff:
    example: "npm run state-sync:drift-audit -- --base main --head HEAD"
```

If implementing all three is too much for the first version, start with explicit file list plus stdin.

## State-sensitive paths

The first implementation should use a small constant list inside the script.

```yaml
state_sensitive_paths:
  - "README.md"
  - "knowledge/00_manifest/project-state.json"
  - "knowledge/00_manifest/project-state.md"
  - "assistant_codex_worklog/current-state.md"
  - "assistant_codex_worklog/roadmap.md"
  - "assistant_codex_worklog/restart-prompt.md"
  - "assistant_codex_worklog/working-protocol.md"
  - "assistant_codex_worklog/protocol_addenda/"
  - "knowledge/07_operations/"
  - "knowledge/05_agent_memory/agent_shipyard/"
  - "knowledge/05_agent_memory/agent_proposals/"
  - ".github/workflows/"
```

Use simple exact match / prefix match. Do not introduce glob libraries unless the need becomes real.

## First-version warning rules

The script should warn only on simple structural drift patterns.

```yaml
warning_rules:
  state_sensitive_without_state_sync:
    description: "A PR changes state-sensitive files but does not update any state/resume file."
    severity: "warn"
  project_state_json_without_md:
    description: "project-state.json changed without project-state.md."
    severity: "warn"
  project_state_md_without_json:
    description: "project-state.md changed without project-state.json."
    severity: "warn"
  restart_prompt_without_resume_files:
    description: "restart-prompt changed without current-state or roadmap."
    severity: "warn"
  resume_files_without_project_state:
    description: "current-state or roadmap changed without project-state files."
    severity: "warn"
```

Avoid semantic claims such as "the milestone is wrong" in the first version.

## Output contract

The script should print both a human-readable report and a final compact JSON block.

Example:

```yaml
state_sync_drift_detector:
  status: "warn"
  blocking: false
  changed_state_sensitive_paths:
    - "README.md"
    - "knowledge/07_operations/example.md"
  possible_missing_sync:
    - "state-sensitive files changed without project-state/resume files"
  recommended_next_step: "consider a state sync PR after merge"
```

Exit codes:

```yaml
exit_codes:
  pass: 0
  warn: 0
  input_error: 2
```

Important: warning must exit `0`. Otherwise the tool becomes a blocking validator by accident.

## Test cases for first script PR

The implementation PR should include tests only if the repository testing setup makes that cheap.

Minimum manual fixtures can be included directly in script comments or in a small test file later.

Suggested cases:

```yaml
test_cases:
  readme_only:
    files: ["README.md"]
    expected: "warn"
  project_state_pair:
    files:
      - "knowledge/00_manifest/project-state.json"
      - "knowledge/00_manifest/project-state.md"
    expected: "pass_or_warn_only_if_resume_missing"
  restart_prompt_only:
    files: ["assistant_codex_worklog/restart-prompt.md"]
    expected: "warn"
  normal_source_change:
    files: ["src/example.ts"]
    expected: "not_applicable"
  full_state_sync:
    files:
      - "assistant_codex_worklog/current-state.md"
      - "assistant_codex_worklog/roadmap.md"
      - "assistant_codex_worklog/restart-prompt.md"
      - "knowledge/00_manifest/project-state.json"
      - "knowledge/00_manifest/project-state.md"
    expected: "pass"
```

## What the first implementation must not do

```yaml
must_not:
  - "change GitHub Actions"
  - "change branch protection"
  - "add required checks"
  - "fail CI on warning"
  - "write to project-state automatically"
  - "open PRs automatically"
  - "query GitHub API"
  - "infer semantic correctness of project state"
  - "call itself validator or guardrail"
```

## Acceptance criteria for implementation PR

A future implementation PR should be accepted only if:

1. It adds `scripts/state-sync-drift-audit.mjs`.
2. It adds `state-sync:drift-audit` to `package.json`.
3. It does not edit `.github/workflows/*`.
4. It exits `0` for warnings.
5. It prints `blocking: false` in its report.
6. It documents that it is a local manual diagnostic tool.
7. CI and Sync Check remain green.

## Boundary

This document is not implementation.

It approves no enforcement.

It only defines the safest shape for a future warning-only local script.

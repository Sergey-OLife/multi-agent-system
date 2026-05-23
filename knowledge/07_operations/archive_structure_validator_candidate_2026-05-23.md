# Archive structure validator candidate

Status: candidate_spec / advisory_warning_only
Date: 2026-05-23
Source: external 50-question audit follow-up and PR #269 archive path failure

## 1. Purpose

This candidate records a narrow validator idea for archive structure consistency.

The goal is to reduce dependence on chat memory and manual discipline when archive PRs look green but are structurally wrong.

The validator should detect archive files that are placed outside the approved archive entries folder, missing archive index references, and archive entries that blur the boundary between archive, checkpoint and project-state.

## 2. Current mode boundary

This is not an implemented validator.

This candidate does not add CI, hard gates, branch protection, runtime behavior, route automation or project-state changes.

If implemented later, the first version should be advisory / warning-only unless Sergey separately approves promotion to a required check or hard gate.

## 3. Why this candidate exists

PR #269 exposed a concrete failure pattern: an archive entry was initially created under the archive root instead of the expected `chat_archives` folder.

The PR was technically correctable, but the failure showed that a green PR can still miss archive topology expectations unless the structure is explicitly checked.

This candidate turns that failure pattern into a small future check proposal.

## 4. Candidate validator identity

```yaml
validator_id: archive_structure_validator
status: candidate_spec
mode: advisory_warning_only
scope:
  - conversation archive entries
  - archive index consistency
  - archive/checkpoint boundary wording
```

## 5. Allowed archive paths

```yaml
allowed_paths:
  archive_entries_dir: knowledge/08_conversation_archive/chat_archives/
  archive_index: knowledge/08_conversation_archive/index.md
```

## 6. Proposed checks

### 6.1 archive_entry_location

Rule: every new archive entry must be under:

```text
knowledge/08_conversation_archive/chat_archives/
```

Severity now: `warning`.

Future gate candidate: yes, but only after separate approval.

### 6.2 no_root_archive_entry

Rule: no archive entry should be created directly under:

```text
knowledge/08_conversation_archive/
```

Severity now: `warning`.

Future gate candidate: yes, because it is structural and machine-checkable.

### 6.3 archive_index_reference

Rule: every new archive entry should have one matching row in:

```text
knowledge/08_conversation_archive/index.md
```

Severity now: `warning`.

Future gate candidate: yes, but only if false positives stay low.

### 6.4 archive_not_project_state

Rule: archive entries must not present themselves as project-state, checkpoint, implementation record or source of truth unless the wording explicitly marks the boundary.

Suggested warning markers:

```text
checkpoint
project-state
source of truth
current state
implemented
activation
full chat
```

Severity now: `warning`.

Future gate candidate: no. This check is semantic and should remain advisory unless narrowed to exact machine-safe patterns.

### 6.5 coverage_scope_marker

Rule: if an archive entry claims full-chat coverage, it must include an explicit marker such as:

```text
coverage_scope: full_chat
```

Severity now: `warning`.

Future gate candidate: possible later, after confirming the archive format is stable.

## 7. Expected output

A future advisory run should report:

```yaml
result: pass | warning | fail_candidate
affected_files:
  - path/to/file.md
findings:
  - check_id: archive_entry_location
    severity: warning
    reason: archive-like file is outside chat_archives
    suggested_fix: move file into chat_archives and update index.md
```

## 8. Example warning

```text
Archive structure validator: warning

Finding:
New archive-like file detected outside chat_archives.

File:
knowledge/08_conversation_archive/2026-05-23_hundred-mutations-and-archive-reading-discipline.md

Expected:
knowledge/08_conversation_archive/chat_archives/2026-05-23_hundred-mutations-and-archive-reading-discipline.md

Suggested fix:
Move the file into chat_archives and add or update the matching row in knowledge/08_conversation_archive/index.md.
```

## 9. Non-goals

This candidate must not become:

- a hard guardrail by default;
- an automatic archive fixer;
- a project-state validator;
- a checkpoint mechanism;
- a content-quality evaluator;
- a replacement for `conversation_archive_librarian`;
- a reason to archive more often;
- a way to bypass approval-gates.

## 10. If implemented later

A possible future script path:

```text
scripts/archive-structure-validator.mjs
```

A possible future npm script:

```json
{
  "scripts": {
    "archive:structure-check": "node scripts/archive-structure-validator.mjs"
  }
}
```

First implementation should be local advisory output only.

Promotion to CI, required check context or hard gate requires a separate Sergey decision and a separate PR.

## 11. Open questions

- Should the validator inspect only changed files in a PR, or the whole archive tree?
- Should index consistency be warning-only forever, or become a gate for archive PRs?
- What exact filename patterns count as archive-like files outside `chat_archives`?
- Should semantic markers such as `implemented` or `checkpoint` be checked by this validator or by a separate status wording validator?

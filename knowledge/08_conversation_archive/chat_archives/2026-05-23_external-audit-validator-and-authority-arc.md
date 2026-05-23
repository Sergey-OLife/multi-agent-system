# External audit, archive validator and document authority arc

Дата: 2026-05-23
Статус: draft_archive_entry
Срок пересмотра: 2026-06-06
Implemented elsewhere: partial / PR #270, PR #271, PR #272, PR #273, PR #275, PR #278; PR #274 closed unmerged as duplicate

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-23-audit-validator-authority-arc
- Origin title: External audit, archive validator and document authority arc
- Source scope: current_visible_segment
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #270, PR #271, PR #272, PR #273, PR #274, PR #275, PR #278
- Related archive entries: `knowledge/08_conversation_archive/chat_archives/2026-05-23_hundred-mutations-and-archive-reading-discipline.md`

## 1. Coverage check

- Coverage scope: full_chat
- Coverage applies to: current_visible_segment = chat-2026-05-23-audit-validator-authority-arc
- Previous checkpoint: latest indexed thematic entry `2026-05-23_hundred-mutations-and-archive-reading-discipline.md`; later merged PRs #270-#278 form the new operational arc
- Previous checkpoint coverage scope: thematic
- Previous archive/state coverage status: partial
- Full-chat marker present: no for previous thematic entry; yes for this current visible segment only
- Gap found: yes
- What this entry covers: the current visible operational arc around external audit handling, validator candidate/spec, advisory archive structure check, duplicate PR cleanup and document authority layer clarification
- What remains outside this entry: older hidden chat history; future decision on whether advisory checks should ever become CI, required checks or hard gates

## 2. Why this archive exists

This segment converted a broad external audit recommendation into a narrow sequence of safe repository actions without turning warnings into enforcement.

The important pattern is not the individual PR mechanics. The important pattern is the discipline of reducing a broad audit into the smallest useful artifact, then refusing to call open PRs or advisory specs implemented until GitHub `main` proves it.

## 3. New semantic seeds

### 3.1 Broad audit recommendations should be narrowed before PR work

The external audit proposed a six-file documentation PR. The useful part was real: reduce ambiguity between authority, continuity, proposal and advisory layers.

The chosen implementation was narrower: add one authority-layer table to `documentation_topology.md` instead of spreading repeated boundary text across six files.

Working rule:

```text
A broad audit can reveal a real problem without earning a broad PR.
First extract the smallest durable clarification.
```

### 3.2 Validator arc began as candidate, then stayed advisory

The archive structure validator started as a candidate/spec after the PR #269 archive path failure.

It then became a local advisory script through PR #273, still warning-only and not CI, not required check, not hard gate, not branch protection, not project-state sync and not automatic archive fixer.

Working rule:

```text
A validator candidate may become local diagnostic tooling before it becomes any gate.
Promotion to enforcement is a separate Sergey decision.
```

### 3.3 Codex bot comment proved why reviewer checking matters

Codex flagged a real false-negative in PR #273: substring matching through `indexText.includes(rel)` could treat an `.mdx` typo as a valid `.md` archive reference.

The finding was classified as `must_fix`, fixed in the same branch, and only then PR #273 was merged.

Working rule:

```text
Green checks are not enough when a bot/reviewer comment identifies a real logic gap.
Fix must happen in the same PR branch before merge.
```

### 3.4 Duplicate open PRs are project-state noise even when harmless

PR #274 repeated a change already merged through PR #271. It was closed unmerged as stale duplicate.

This matters because an open duplicate PR can corrupt restart/status interpretation even if the diff itself is harmless.

Working rule:

```text
An open stale duplicate is not neutral. It creates false open-loop pressure and should be closed, not merged.
```

### 3.5 Document authority table is now the preferred answer to layer confusion

PR #275 added an authority-layer table to `documentation_topology.md`.

The table records:

- `project-state` is highest for accepted state and resume diagnostics;
- README is the entrance map and contract layer;
- worklog/roadmap are derived continuity and sequencing notes;
- vision intake is non-authoritative unless approved;
- archive is historical record, not project-state or checkpoint unless explicitly marked;
- checks overview is operational, and only explicit required check contexts are merge gates.

Working rule:

```text
When documents conflict, project-state and README contracts take priority until a later state-sync or correction PR changes that.
```

## 4. Implemented elsewhere

## 4. Implemented elsewhere

- PR #270 — recorded the reasonable community balancing map operations note.
- PR #271 — clarified checks vs manual invariants in `checks_overview.md`.
- PR #272 — added archive structure validator candidate/spec.
- PR #273 — implemented advisory local archive structure check and npm script.
- PR #274 — closed unmerged as stale duplicate of PR #271.
- PR #275 — added document authority layers to `documentation_topology.md`.
- PR #278 — corrected empty-index handling in `scripts/archive-structure-check.mjs`.

Do not duplicate those files here. This archive keeps the reasoning arc and failure patterns.

## 5. Open loops

- Decide separately, if ever needed, whether the archive structure advisory check should be promoted beyond local warning-only diagnostics.
- If the validator series continues, the next candidate should likely be bot/reviewer comment readiness, not a hard gate by default.
- Keep the audit-response pattern: broad recommendation -> narrow useful artifact -> explicit boundaries -> PR workflow.
- After enough validator/documentation PRs, a technical checkpoint/state sync may be useful, but this archive entry is not that checkpoint.

## 6. Boundaries

This archive entry is not project-state, checkpoint, decision-log, roadmap, validator, hard guardrail, CI check, runtime behavior, branch protection change, approval or merge record.

It does not mark future validators as approved.

It does not resume book mode.

It does not override `project-state` or README contracts.

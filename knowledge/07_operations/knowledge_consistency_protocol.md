# Knowledge Consistency Protocol

Дата: 2026-05-19
Статус: operational_protocol

## 1. Назначение

Этот протокол защищает проект от расхождения источников правды.

Главный риск текущего репозитория — не отсутствие новых агентов и не нехватка runtime-инфраструктуры. Главный риск — ситуация, когда:

- GitHub `main` уже изменился;
- `project-state.json` говорит старое;
- `restart-prompt.md` ведёт новый чат в прошлую точку;
- `roadmap.md` предлагает уже сделанный шаг;
- archive index хранит другой статус;
- CI либо красный по устаревшим ожиданиям, либо зелёный, но не проверяет нужное.

Формула:

```text
Если документы проекта расходятся, LLM начинает рационализировать старую карту вместо проверки текущей местности.
```

## 2. Source of truth hierarchy

Текущая иерархия источников:

1. GitHub `main` — authoritative merged state.
2. Merged PR history — authoritative факт изменения.
3. `knowledge/00_manifest/project-state.json` — machine-readable resume state.
4. `knowledge/00_manifest/project-state.md` — human-readable mirror of project-state.json.
5. `assistant_codex_worklog/current-state.md` — рабочая точка для продолжения.
6. `assistant_codex_worklog/restart-prompt.md` — compact handoff для нового чата.
7. `assistant_codex_worklog/roadmap.md` — план, не факт выполненной реализации.
8. `knowledge/08_conversation_archive/index.md` — указатель conversation archive, не project-state.
9. `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md` — registry state for agents.
10. CI/workflows — verification layer, not semantic source of truth.

Правила:

- Open PR is not implemented.
- Draft PR is not ready state.
- Closed unmerged PR is not implemented.
- Merged PR is implemented only within its actual changed files and stated boundaries.
- Conversation archive entry is not full-chat checkpoint without explicit `coverage_scope: full_chat` marker.
- `project-state.*` must not be updated before the relevant PR is actually merged.

## 3. Consistency classes

### C0 — No sync needed

Use when a PR changes only isolated code/tests/docs and does not affect project state, roadmap, commands, protocols, registry, archive semantics, CI boundary or source-of-truth rules.

Examples:

- isolated typo in a non-protocol document;
- local test refactor with no state meaning;
- implementation detail that does not alter operational behavior.

### C1 — Local mirror sync

Use when a PR changes one source and its direct mirror.

Examples:

- `project-state.json` changed, so `project-state.md` must mirror it;
- archive entry added, so `knowledge/08_conversation_archive/index.md` must update;
- registry changed, so generated/derived registry files must be checked.

### C2 — Handoff sync

Use when the next chat would act incorrectly if handoff files were stale.

Must check:

- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`

Examples:

- PR merged that changes `lastMergedPr`, current version or next action;
- CI status changes from red to green;
- book pause/unpause state changes;
- active mode changes;
- approval-gate is resolved.

### C3 — Protocol sync

Use when a PR changes behavior rules, command semantics, approval semantics, archive semantics or architecture boundaries.

Must check:

- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/protocol_addenda/*.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- relevant `knowledge/07_operations/*.md`
- relevant scripts/tests/audits

Examples:

- `+`, `++`, `+++` semantics change;
- `#архив_старт` behavior changes;
- coverage_scope rule changes;
- strict PR workflow changes;
- scripts boundary changes.

### C4 — Architecture / registry / CI sync

Use when a PR changes architecture, CI, registry, Go-core checks, TS/JS orchestration, audit behavior or repository hygiene rules.

Must check:

- `knowledge/07_operations/repository_architecture_contract.md`
- `.github/workflows/*.yml`
- `go-core/**`
- `scripts/*.mjs`
- `tests/**`
- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`
- `knowledge/00_manifest/project-state.*`
- `assistant_codex_worklog/restart-prompt.md`

Examples:

- CI becomes green after known red state;
- workflow steps change;
- Go-core validation semantics change;
- registry sync workflow changes;
- branch protection is verified or changed.

### C5 — Archive coverage sync

Use when a PR changes conversation archive coverage, archive index, quarantine status or full-chat checkpoint status.

Must check:

- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `assistant_codex_worklog/protocol_addenda/archive_start_command.md`
- `assistant_codex_worklog/restart-prompt.md`
- `knowledge/00_manifest/project-state.*` if archive status affects next recovery point

Examples:

- archive entry claims `coverage_scope: full_chat`;
- corrective entry records a coverage gap;
- quarantine PR is accepted or closed;
- archive command behavior changes.

## 4. Merge aftermath checklist

After every merge, classify the merge using C0–C5.

If C0:

```text
No state sync required.
```

If C1 or higher, check whether a follow-up sync PR is required.

Minimum questions:

1. What changed in merged files?
2. Does `project-state.json` still point to the true latest merged PR?
3. Would a new chat using `restart-prompt.md` start from the right point?
4. Does `roadmap.md` still name an uncompleted next action?
5. Does `current-state.md` contradict GitHub PR history?
6. Does archive index reflect new archive entries?
7. Does CI status in docs match actual observed CI?
8. Did any open PR become stale because of the merge?
9. Did the merge close an approval-gate?
10. Did the merge create a new approval-gate?

## 5. State sync PR boundary

A state sync PR should be narrow.

Allowed files:

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`

Optional only if directly required:

- `assistant_codex_worklog/decision-log.md`
- relevant `assistant_codex_worklog/protocol_addenda/*.md`
- relevant `knowledge/07_operations/*.md`
- relevant archive index only if the sync PR is explicitly also an archive consistency PR

Not allowed in ordinary state sync PR:

- runtime code changes;
- test changes;
- registry mutations;
- agent activation;
- book chapter edits;
- raw source material;
- branch protection changes;
- new infrastructure.

If these are needed, create a separate PR.

## 6. PR body consistency contract

Every PR that changes project state, protocol, archive, registry, CI, tests or architecture must include:

```markdown
## Что сделано

## Зафиксировано / Изменено

## Что intentionally НЕ сделано

## Self-review

## Approval-gate
```

The `intentionally НЕ сделано` block is not decoration. It prevents accidental scope inflation.

Required statements when applicable:

- whether book remains paused;
- whether proposal agents remain proposal only;
- whether branch protection is configured or not configured;
- whether CI is green/red/not observed;
- whether a PR is merged/open/closed unmerged;
- whether archive coverage is full_chat/thematic/partial/corrective;
- whether raw books/private links were avoided.

## 7. Red-flag phrases

These phrases require verification before being written:

- `актуальное состояние`
- `последний смерженный PR`
- `реализовано`
- `готово к merge`
- `CI зелёный`
- `branch protection включён`
- `full-chat checkpoint`
- `coverage closed`
- `agent activated`
- `registry synced`
- `source audited`
- `book resumed`

Rule:

```text
If the phrase is externally checkable, check it before saying it.
```

## 8. Drift patterns already observed

### 8.1 Stale restart prompt after merged PRs

Observed pattern:

- PRs were merged;
- `restart-prompt.md` still pointed to older `lastMergedPr`;
- new chats risked restarting from stale state.

Required response:

- create a state sync PR after the relevant merge;
- do not continue design work on stale handoff.

### 8.2 CI red normalized as background noise

Observed pattern:

- CI failed because tests had stale constants;
- follow-up work risked accepting red CI as normal.

Required response:

- fix stale assertions before using CI as a gate;
- record green CI only after observed success.

### 8.3 Thematic archive mistaken for full-chat checkpoint

Observed pattern:

- an archive entry covered a theme;
- it was almost treated as full-chat coverage.

Required response:

- no `coverage_scope: full_chat` marker means thematic by default;
- record coverage gap instead of pretending closure.

### 8.4 Open PR treated as implemented

Observed pattern:

- open or closed-unmerged PRs were at risk of being described as implemented.

Required response:

- explicitly name open / closed unmerged status;
- update state only after merge.

## 9. When to create a follow-up consistency PR

Create a follow-up consistency PR when any of the following is true:

- `lastMergedPr` in project-state does not match latest meaningful merged PR;
- current next action names an already completed step;
- restart prompt would send the next chat to stale work;
- roadmap says CI is red after green fix, or green before observed green;
- archive index is missing a merged archive entry;
- archive entry claims full coverage without explicit marker;
- protocol changed but restart prompt still gives old command semantics;
- branch protection status is asserted without verification;
- proposal agent status changes;
- active mode changes;
- book pause state changes.

Do not create a follow-up consistency PR just because a PR was merged. Classify first.

## 10. CI and checks

CI is a verification layer.

Current baseline CI checks:

```bash
npm run typecheck
npm run typecheck:test
npm test
npm run test:core
npm run hygiene:audit
npm run archive:audit
```

Rules:

- Do not call CI green unless a workflow run was observed as green.
- Do not configure branch protection around a known-red CI.
- Do not treat skipped checks as passed checks.
- If a check fails on stale expectations, fix the stale expectations or document the debt before building more gates.
- If a check fails because of a real boundary violation, do not bypass it by weakening the check.

## 11. Relationship with future validators

This protocol is the human-readable consistency contract.

Future validators may enforce parts of it, but this PR does not implement a validator.

Possible future checks:

- verify `project-state.json.lastMergedPr` appears in `project-state.md`, `current-state.md`, `roadmap.md`, and `restart-prompt.md`;
- verify closed-unmerged PRs are not listed as implemented;
- verify archive entries with `full_chat` claims include explicit marker;
- verify branch protection status is not asserted without a verification marker;
- verify PR body contains `intentionally НЕ сделано` for state/protocol/archive changes.

Do not add Go validator / JS audit / branch protection in the same PR as this protocol unless separately approved.

## 12. Practical operating rule

Before answering “what next?” or starting a new PR, ask:

```text
Am I using current GitHub main, or yesterday's map?
```

If the answer is uncertain:

1. Check open PRs.
2. Check latest meaningful merged PR.
3. Check `project-state.json`.
4. Check `restart-prompt.md`.
5. Check relevant archive/protocol files.
6. Only then act.

## 13. Exit criteria

A consistency-sensitive PR is ready for merge only when:

- changed files match the declared scope;
- open / closed / merged PR statuses are not confused;
- CI status is stated accurately;
- state files do not point to completed next actions;
- archive coverage is not overstated;
- proposal is not described as activation;
- branch protection is not assumed;
- raw books/private links are not introduced;
- `intentionally НЕ сделано` is explicit;
- approval-gate is clear.

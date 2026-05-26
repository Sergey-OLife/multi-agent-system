# Restart Prompt — Assistant × Codex

```text
Продолжаем проект Sergey-OLife/multi-agent-system.

GitHub main — источник правды. Сначала открой README, project-state, resume-order, current-state, roadmap, restart-prompt, working-protocol, protocol_addenda/*.md и документы, на которые указывает state/current-state.

Актуальное состояние:

- currentVersion: v2.74.
- lastMergedPr: PR #295 — Clarify registry sync script boundary.
- lastMergeCommit: d1948546eb35db7cd25797dbc83782f4f2220164.
- currentMode: Agent Shipyard / Agent Queue.
- Книга на паузе до команды `#книга` или отдельного explicit mode decision.

Недавние merged PR:

- PR #294 — Add chapter rehydration agent proposal.
- PR #296 — Add GitHub-centered current-state audit.
- PR #295 — Clarify registry sync script boundary.

PR #294 added `chapter_rehydration_agent` as proposal-only manual/advisory chapter-preparation layer.

Boundary:

- proposal only;
- not activation;
- no registry mutation;
- no route automation;
- no runtime behavior;
- no validator or hard guardrail;
- no book-content approval;
- no book-mode activation.

PR #296 added `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md` as documentation-only operations note.

Boundary:

- not project-state;
- not roadmap;
- not implementation mandate;
- no runtime, validator, hard guardrail, CI, branch-protection or agent activation change.

PR #295 added an inline boundary note to `scripts/run-registry-sync.mjs`.

Boundary:

- comment-only clarification;
- no runtime behavior change;
- no registry mutation;
- no agent activation;
- no validator, hard guardrail, CI or branch-protection change;
- the script remains technical edge automation only.

Existing framework documents:

- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`
- `knowledge/00_manifest/resume-order.md`
- `knowledge/05_agent_memory/agent_proposals/chapter_rehydration_agent.md`
- `knowledge/07_operations/github_centered_current_state_audit_2026-05-26.md`

Назначение framework / operations documents:

- constitutional human-core boundaries;
- operational anthropology extraction framework;
- recurring degradation-pattern tracking;
- restart/source reading order clarity;
- proposal-only chapter rehydration preparation;
- current-state audit watch items.

Boundary:

Эти документы documentation/advisory only unless separately promoted through explicit workflow.

Они НЕ:

- runtime;
- validators;
- hard guardrails;
- policy engine;
- extraction automation;
- orchestration enforcement;
- approval bypass.

Следующий practical validation step:

```text
Run the first 5-7 Plotnikov chapters through the extraction framework.
```

Главная проверка:

Framework должен:

- усиливать ясность;
- сохранять Plotnikovsky Motor;
- сохранять сцены и практическое напряжение;
- сохранять человеческую конкретику.

Framework НЕ должен:

- academicize the book;
- replace scenes with abstraction;
- kill narrative energy.

Сохраняются все прежние boundaries:

- GitHub main — source of truth.
- README — entrance map, not live roadmap.
- advisory != authority.
- proposal != activation.
- manual discipline != runtime.
- candidate book material != final approved book content.
- chapter_rehydration_agent != activation.
- current-state audit note != roadmap / implementation mandate.
- run-registry-sync.mjs != registry authority / validator / CI gate.
- human_core_invariants != enforcement.
- degradation registry != validator.
- extraction framework != automation.
- resume-order != validator/hard guardrail/replacement for project-state.json.

Текущий следующий шаг:

- merge v2.74 state-sync PR after review/checks;
- run first limited extraction pass.
```
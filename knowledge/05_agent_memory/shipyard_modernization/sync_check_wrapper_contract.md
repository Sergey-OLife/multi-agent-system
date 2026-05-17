# Sync-Check Wrapper Contract

Дата: 2026-05-18
Статус: active / minimal_contract_v1

Документ фиксирует минимальный контракт между:

- TypeScript dev wrapper;
- Go-core sync-check;
- будущими CI/dev automation слоями.

Этот документ не расширяет полномочия wrapper.

Главный принцип:

> TypeScript shell orchestrates transport.
> Go-core owns validation semantics.

---

# 1. Architectural boundary

TypeScript wrapper отвечает только за:

- сбор input envelope;
- вызов Go binary;
- передачу stdin;
- получение stdout/stderr;
- transport normalization;
- fallback behavior;
- process exit semantics.

Wrapper не должен:

- валидировать project state;
- вычислять readiness;
- интерпретировать roadmap semantics;
- принимать orchestration decisions;
- активировать агентов;
- менять файлы.

Validation logic принадлежит Go-core.

---

# 2. Wrapper command

Рабочая команда:

```bash
npm run sync-check
```

Текущая реализация:

```text
scripts/run-sync-check.mjs
```

Wrapper запускает:

```bash
multi-agent-core sync-check
```

через child process.

---

# 3. Input envelope contract

Wrapper обязан передавать envelope формата:

```json
{
  "schemaVersion": "core-api.v1",
  "command": "sync-check",
  "context": {
    "currentMode": "string",
    "currentTask": "string",
    "lastMergedPr": "string",
    "lastMergeCommit": "string",
    "approvalState": {
      "plusReceived": false,
      "doublePlusReceived": false,
      "approvedGate": null
    }
  },
  "files": [],
  "options": {
    "strict": true,
    "includeWarnings": true
  }
}
```

Envelope должен передаваться через stdin.

Wrapper не должен читать произвольные repo files кроме явно перечисленных handoff/state файлов.

---

# 4. Required handoff files

Минимальный handoff set:

```text
knowledge/00_manifest/project-state.json
knowledge/00_manifest/project-state.md
assistant_codex_worklog/current-state.md
assistant_codex_worklog/roadmap.md
assistant_codex_worklog/restart-prompt.md
```

Дополнительные файлы допустимы только как optional inputs.

Wrapper не должен silently invent missing state.

---

# 5. Output contract

Go-core stdout должен быть machine-readable JSON.

Wrapper не должен смешивать:

- JSON output;
- decorative logs;
- ANSI formatting.

stdout:

```text
machine-readable JSON only
```

stderr:

```text
human/debug logs
```

---

# 6. Allowed statuses

Допустимые validation statuses:

```text
ready
needs_revision
blocked
error
unavailable
```

Смысл:

- ready — validation passed;
- needs_revision — state inconsistency found;
- blocked — contradictory/project-blocking state;
- error — invalid contract or runtime failure;
- unavailable — validation engine unavailable.

Wrapper не должен silently normalize unavailable → ready.

---

# 7. Exit-code semantics

Exit codes:

```text
0 = validation executed successfully and returned ready
1 = validation failed OR transport unavailable OR contract broken
```

Это означает:

- unavailable не считается successful validation;
- CI не должен пропускать skipped validation;
- invalid stdout считается failure.

---

# 8. Transport failures

Transport failure ≠ validation failure.

Transport failures:

- missing binary;
- spawn failure;
- invalid stdout JSON;
- broken stdin/stdout contract.

Validation failures:

- needs_revision;
- blocked.

Эти классы проблем нельзя смешивать.

---

# 9. Fallback behavior

Fallback допустим только как:

```json
{
  "status": "unavailable"
}
```

Fallback не должен:

- объявлять ready;
- скрывать infrastructure problems;
- маскировать skipped validation.

---

# 10. Contract stability

После merge PR #75 envelope считается:

```text
semi-stable internal API
```

Любые изменения:

- status names;
- envelope shape;
- exit semantics;
- stdout rules;
- transport block

должны рассматриваться как compatibility changes.

---

# 11. Non-goals

Wrapper intentionally does not:

- implement orchestration;
- replace TypeScript router;
- become CI coordinator;
- manage approvals;
- interpret roadmap logic;
- execute LLM flows;
- mutate repository state.

---

# 12. Safe next step after this contract

Следующий безопасный шаг:

```text
minimal CI/dev integration for sync-check
```

Не:

- second Go service;
- HTTP layer;
- orchestration rewrite;
- smart wrapper framework.

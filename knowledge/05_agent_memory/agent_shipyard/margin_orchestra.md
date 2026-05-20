# Margin Orchestra — second-eyes preflight design

Дата: 2026-05-19
Статус: design plus manual protocol

## 1. Зачем нужен оркестр

Один исполнитель хорошо двигает задачу по прямой. Но часть сбоев появляется не внутри шага, а на границе между шагами.

Registry-sync incident показал это точно:

- правильный принцип уже был: registry меняется инструментом;
- Go-backed sync уже существовал;
- workflow был добавлен;
- но не был задан главный preflight-вопрос: целевой agent block уже есть в registry или его надо вставить?

`margin_orchestra` нужен как coordination pattern для таких границ. Он не заменяет агентов и не превращает процесс в комитет. Он включает второй голос только там, где стоимость ошибки выше стоимости короткого preflight.

Manual protocol hardening lives in `assistant_codex_worklog/protocol_addenda/margin_orchestra_protocol.md`.

## 2. Главная формула

> Оркестр вторых глаз включается не тогда, когда нужно подумать больше, а когда ошибка может спрятаться между уже правильными действиями.

## 3. Margin points

Второй взгляд обязателен перед:

- registry sync;
- agent activation;
- route change;
- state sync after merge;
- archive PR creation;
- checkpoint full;
- workflow change;
- branch protection change;
- закрытием / supersede PR;
- повторением операции после failed attempt;
- `+++`, если ближайшее действие может изменить repository state.

Второй взгляд желателен перед:

- новым protocol;
- новым agent proposal с workflow impact;
- изменением GitHub Actions;
- массовой archive / handoff операцией;
- переносом human-facing rule в deterministic tooling.

Второй взгляд не нужен для глубокого запуска перед:

- обычным чтением файлов;
- проверкой workflow status;
- простым ответом без repository write;
- draft text revision без project-state impact.

## 4. Orchestration rule

At margin point:

1. Primary executor states intended action.
2. `critic_margin_agent` classifies operation.
3. Critic checks hidden assumptions.
4. If pass: executor continues.
5. If block: executor stops and names the exact missing prerequisite.
6. If split_required: create separate PR before continuing.
7. If approval required: stop until Sergey gives explicit `++`.

## 5. Minimal preflight card

```yaml
margin_orchestra:
  margin_point: "registry_sync | activation | route_change | state_sync | archive_pr | workflow_change | checkpoint | other"
  primary_action: "string"
  critic_required: true
  critic_status: "pass | block | split_required | needs_approval"
  hidden_assumption_checked:
    - "string"
  next_safe_step: "string"
```

## 6. Lessons from registry-sync incident

The old mental model compressed two operations into one word:

- update existing agent registry block;
- insert missing agent registry block.

Both were called registry sync, but only the first existed in Go tooling.

Correct future pattern:

- if target exists: mutate-existing path;
- if target missing: insert-if-missing path with explicit fields;
- if tooling cannot support operation: tooling PR first;
- if bot commit changes final head: final-head CI / Sync Check must still pass.

## 7. Relationship with review_depth_protocol

`review_depth_protocol` already says depth must match system impact.

`margin_orchestra` operationalizes that rule. It does not make every step L3. It identifies the boundary where a short second look prevents a long correction chain.

## 8. Not a hard guardrail yet

This document is no longer design-only because PR-level manual protocol hardening exists in `assistant_codex_worklog/protocol_addenda/margin_orchestra_protocol.md` once merged.

It still does not:

- add route logic;
- create automated validator;
- change branch protection;
- block merges by itself;
- add runtime.

Tooling or hard guardrails require a separate PR and explicit approval.
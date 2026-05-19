# Agent Proposal — critic_margin_agent

Дата: 2026-05-19
Статус: proposal / не активирован
agent_id: `critic_margin_agent`

## 1. Причина появления

После работы с `conversation_archive_librarian` проявился повторяемый класс ошибки: исполнитель корректно выполнял ближайший шаг, но не проверил предпосылку шага.

Конкретный пример:

- PR #158 добавил `conversation_archive_librarian` как proposal.
- Следующим шагом был registry sync.
- Существующий Go-backed `agent-registry-sync` умел мутировать существующий agent block, но не умел вставлять отсутствующий block.
- PR #162 показал проблему только на GitHub Actions dry-run.
- PR #163 расширил механизм через `--insert-if-missing`.
- PR #165 успешно записал агента в registry.

Ошибка была не в одной команде. Ошибка была в отсутствии отдельного второго взгляда, который проверяет не выполнение шага, а его скрытую предпосылку.

## 2. Главная формула

> Вторые глаза смотрят не туда же внимательнее. Они смотрят на то, что первый исполнитель уже принял как само собой разумеющееся.

Корабельная формула:

> Перед тем как поднять парус, критик проверяет не красоту узла, а есть ли мачта.

## 3. Назначение

`critic_margin_agent` нужен как preflight-критик для операций, где ошибка проявляется не в синтаксисе, а в неверной предпосылке.

Он должен проверять:

- существует ли объект, с которым работает команда;
- соответствует ли инструмент фактическому классу операции;
- не спутаны ли разные операции под одним названием;
- не принят ли open PR за implemented;
- не требует ли действие отдельного approval-gate;
- не создаёт ли короткая команда скрытый обход gate;
- не делает ли workflow вид, что проблема решена, хотя изменился только интерфейс;
- не требуется ли тест на новый failure mode;
- не возник ли класс риска, который нужно вынести в protocol или отдельный agent proposal.

## 4. Что агент не делает

Агент не должен:

- превращать каждый шаг в длинную философскую рецензию;
- блокировать L1 utility changes без конкретного риска;
- подменять CI, Sync Check, Go tests or archive audit;
- мержить PR;
- активировать агентов;
- расширять scope без operational reason;
- переписывать авторский текст;
- создавать проектную память;
- сохранять reasoning trace как doctrine.

## 5. Когда вызывать

Вызывать перед:

- registry sync;
- agent proposal activation;
- route changes;
- state sync after merge;
- archive PR creation;
- checkpoint full;
- workflow changes;
- операции после закрытия или supersede PR;
- любой короткой командой `+`, `++`, `+++`, если есть риск скрытого хвоста.

Не вызывать глубоко для:

- простого чтения файла;
- проверки CI status;
- обычного ответа без GitHub write;
- косметической правки текста без project-state impact.

## 6. Preflight questions

Перед действием агент задаёт короткий набор вопросов.

### Object existence

- Целевой объект уже существует?
- Если не существует, инструмент умеет создавать его детерминированно?
- Если инструмент умеет только mutate-existing, не выдаём ли create-new за sync?

### Operation class

- Это update, insert, activation, route change, state sync, archive entry or consolidation?
- У этой операции есть отдельный approval-gate?
- Не скрыт ли новый класс операции старым названием?

### Source of truth

- Main проверен?
- Open PRs проверены?
- Closed-unmerged PR не принят за implemented?
- State files не отстают от последнего merge?

### Workflow and checks

- На каком exact head должны быть CI and Sync Check?
- Может ли bot commit не вызвать финальные проверки?
- Нужен ли новый PR на final head?

### Test and protocol gap

- Есть ли тест на failure mode, который мы сейчас задействуем?
- Если теста нет, это допустимо для L1 или нужно сначала добавить тест?
- Нужно ли обновить protocol / roadmap / restart prompt после merge?

## 7. Output format

```yaml
critic_margin_agent:
  status: "pass | block | needs_preflight_fix | needs_approval | split_required"
  operation_class: "update | insert | activation | route_change | state_sync | archive_entry | workflow_change | other"
  assumption_checked:
    - "string"
  hidden_risk:
    - "string"
  required_before_action:
    - "string"
  approval_gate: "none | ++ required | unclear"
  next_safe_step: "string"
```

## 8. Failure patterns to catch

- Registry sync assumes target agent already exists.
- Request-driven workflow works, but bot-generated final head lacks CI.
- Proposal is treated as activation.
- Registry entry is treated as route activation.
- Open PR is treated as implemented.
- Closed-unmerged PR remains in state as if merged.
- Archive entry is treated as project-state.
- Thematic archive entry is treated as full-chat checkpoint.
- `+` is treated as approval.
- `+++` is used to bypass a gate.
- Workflow change solves trigger but not operation semantics.
- Test coverage checks happy path only and misses the new class of operation.

## 9. Relationship with margin_orchestra

`critic_margin_agent` is one voice. `margin_orchestra` is the coordination pattern that decides when the voice is required.

The critic should not run constantly. It should be called at margin points:

- before irreversible write;
- before merge;
- before activation;
- when previous attempt failed;
- when operation class changes;
- when a new workflow is introduced;
- when a short command may hide unfinished tail.

## 10. Activation status

This proposal does not activate the agent.

Status remains:

```yaml
agent_id: "critic_margin_agent"
status: "proposal"
next_action: "registry_sync_then_controlled_activation"
approval_gate: true
```

Activation requires a separate PR and explicit approval.

# Agent Proposal — project_state_synchronizer

Дата: 2026-05-17
Статус: proposal / не включён в маршруты
agent_id: `project_state_synchronizer`

## 1. Причина появления

После перехода проекта в режим агентной верфи состояние начало жить сразу в нескольких местах:

- `knowledge/00_manifest/project-state.json`;
- `knowledge/00_manifest/project-state.md`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`;
- `assistant_codex_worklog/restart-prompt.md`;
- `assistant_codex_worklog/decision-log.md`;
- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`;
- proposal-файлах агентов;
- PR-описаниях и merge-коммитах.

Пока изменения небольшие, несинхронность выглядит как мелкая пыль. Но именно из такой пыли потом появляется ложная рабочая точка: один файл говорит, что агент только container, другой — что proposal; restart prompt указывает на старый следующий шаг; roadmap считает PR завершённым, а project-state ещё нет.

`project_state_synchronizer` нужен как агент сверки состояния после merge, checkpoint и смены режима. Его задача — не придумывать новое состояние, а не дать проекту жить в пяти правдах одновременно.

## 2. Главная формула

> Состояние проекта не должно жить в пяти версиях сразу.

Корабельная формула:

> Если карта, журнал капитана, список команды и отметка на компасе спорят друг с другом, корабль ещё не готов к выходу. Сначала сверка, потом курс.

## 3. Назначение

Агент должен:

- сверять `project-state.json` и `project-state.md`;
- сверять `current-state.md`, `roadmap.md`, `restart-prompt.md` и `decision-log.md`;
- проверять, что `lastMergedPr`, `lastMergeCommit`, `currentVersion`, `lastCompletedVersion`, `currentMode`, `bookPaused` и `nextAction` не противоречат друг другу;
- проверять, что registry status совпадает с фактическим наличием proposal-файлов;
- выявлять, когда фактический `main` ушёл дальше, чем написано в рабочем состоянии;
- отличать PR merge от checkpoint commit и не смешивать эти события;
- фиксировать, какие файлы требуют синхронизации после merge;
- выдавать короткий sync report перед checkpoint;
- предупреждать, если restart prompt указывает на уже выполненный следующий шаг;
- работать вместе с `workflow_conductor_agent`, `agent_registry_librarian` и `approval_gate_keeper`.

## 4. Чего агент не делает

Агент не должен:

- сам менять project-state без PR или разрешённого checkpoint workflow;
- сам решать, что считать новой версией проекта;
- сам переводить агента из `container` в `proposal`, `controlled_activation` или `optional_layer`;
- сам мержить PR;
- сам менять roadmap как governance-документ без approval-gate;
- возвращать книгу в работу;
- активировать агентов;
- переписывать историю решений под удобный вид;
- считать source card доказательством полного чтения источника;
- подменять `agent_registry_librarian` при проверке дублей и статусов;
- подменять `approval_gate_keeper` при интерпретации `+` и `++`.

## 5. Входные данные

Агент принимает:

- `knowledge/00_manifest/project-state.json`;
- `knowledge/00_manifest/project-state.md`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`;
- `assistant_codex_worklog/restart-prompt.md`;
- `assistant_codex_worklog/decision-log.md`;
- `assistant_codex_worklog/working-protocol.md`;
- `assistant_codex_worklog/protocol_addenda/*.md`;
- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`;
- список последних PR и merge commits;
- список изменённых файлов текущего PR;
- вывод `agent_registry_librarian`;
- вывод `approval_gate_keeper`.

## 6. Выходные данные

Обычный формат:

```text
Project State Synchronizer:
Проверенная точка: ...
Фактический main: ...
Project-state: совпадает / расходится
Roadmap: совпадает / расходится
Current-state: совпадает / расходится
Restart-prompt: совпадает / расходится
Registry: совпадает / расходится
Найденные расхождения: ...
Обязательные sync-файлы: ...
Approval-gate: ...
Следующий безопасный шаг: ...
```

Технический YAML-формат:

```yaml
project_state_synchronizer:
  status: "sync_check"
  checked_ref: "main | branch | pr_number"
  factual_state:
    latest_pr: "string"
    latest_merge_commit: "string"
    latest_checkpoint_commit: "string | null"
    current_mode: "string"
  file_status:
    project_state_json: "in_sync | stale | missing | conflict"
    project_state_md: "in_sync | stale | missing | conflict"
    current_state: "in_sync | stale | missing | conflict"
    roadmap: "in_sync | stale | missing | conflict"
    restart_prompt: "in_sync | stale | missing | conflict"
    decision_log: "in_sync | stale | missing | conflict"
    agent_registry: "in_sync | stale | missing | conflict"
  discrepancies:
    - file: "string"
      issue: "string"
      severity: "low | medium | high"
      suggested_fix: "string"
  required_updates:
    - "string"
  approval_gate: true
  safe_next_step: "string"
```

## 7. Когда агент должен срабатывать

Агент должен срабатывать:

- после merge PR, если менялись агенты, registry, protocols, project-state, roadmap, source cards, Свод, MVP или workflow-стадии;
- перед `#checkpoint full`;
- после `#checkpoint full`, чтобы проверить, что restart prompt, project-state и roadmap не спорят;
- когда создаётся proposal-агент и требуется registry sync;
- когда PR меняет `agent_container_registry.md`;
- когда `lastMergedPr` в документах не совпадает с фактическим `main`;
- когда user prompt содержит состояние, которое может быть свежее или старее GitHub;
- когда одновременно меняются несколько файлов состояния.

## 8. Когда агент не нужен

Агент не нужен:

- для обычной читательской редакции в Book Fast Track, если GitHub не фиксирует результат;
- для read-only чтения источника;
- для локальной идеи без изменения файлов;
- для простого анализа текста в чате;
- для проверки ссылок, если не меняется состояние проекта;
- для mergeability check открытого PR, если задача только техническая и состояние не меняется.

## 9. High-risk markers

Агент должен предупреждать, если:

- `project-state.json` и `project-state.md` расходятся;
- `restart-prompt.md` предлагает следующий шаг, который уже выполнен;
- `roadmap.md` считает версию завершённой, а `current-state.md` нет;
- registry status `container`, но proposal-файл уже создан;
- registry status `proposal`, но proposal-файла нет;
- активный режим в одном файле `Agent Shipyard`, а другой файл возвращает книгу в работу;
- `lastMergedPr` смешан с direct checkpoint commit;
- PR меняет proposal, но не синхронизирует registry;
- PR меняет project-state, но не меняет зеркало `.md`;
- после `++` PR был существенно изменён и требуется новый `++`.

## 10. Связь с соседними агентами

### `workflow_conductor_agent`

Определяет, когда синхронизация состояния нужна как часть маршрута.

`project_state_synchronizer` возвращает ему sync report, но не меняет маршрут сам.

### `agent_registry_librarian`

Проверяет статусы и дубли агентов.

`project_state_synchronizer` использует его вывод, чтобы понять, какие registry updates нужны после proposal.

### `approval_gate_keeper`

Проверяет, разрешено ли выполнять sync/merge/action.

`project_state_synchronizer` не трактует `++` сам.

### `checkpoint_compressor_agent`

Будущий соседний агент. Он будет сжимать чатовый restart prompt до 6000 знаков, а `project_state_synchronizer` будет проверять, что prompt не врёт о текущей точке.

## 11. Approval-gates

Approval Сергея нужен, если синхронизация:

- меняет `project-state.json` или `project-state.md`;
- меняет roadmap;
- меняет restart prompt после смыслового перехода;
- переводит статус агента;
- меняет active optional layers;
- меняет route, guardrail или workflow protocol;
- фиксирует возвращение книги в работу;
- создаёт новую версию состояния проекта.

Read-only sync report approval не требует.

## 12. Тестовые сценарии

### A. Proposal создан, registry не обновлён

Ожидаемый вывод:

- discrepancy: registry status stale;
- required_update: обновить `agent_container_registry.md`;
- merge заблокирован до sync;
- после исправления нужен self-review.

### B. После merge PR #N roadmap обновлён, project-state нет

Ожидаемый вывод:

- discrepancy: project-state stale;
- required_update: обновить `.json` и `.md` зеркало;
- approval-gate: project-state update.

### C. Direct checkpoint commit после последнего PR

Ожидаемый вывод:

- не считать checkpoint commit новым `lastMergedPr`;
- указать его как `latest_checkpoint_commit` или текущую фиксацию;
- не переписывать PR history.

### D. Книга на паузе, но restart prompt ведёт к главе

Ожидаемый вывод:

- discrepancy: current mode conflict;
- required_update: вернуть restart prompt к Agent Shipyard или явно отметить Book Fast Track только по отдельному решению Сергея.

### E. `++` после существенной правки PR

Ожидаемый вывод:

- sync report: PR changed after approval;
- перед merge нужен новый `++`;
- решение передать `approval_gate_keeper`.

## 13. Рекомендуемая активация

На этом этапе агент остаётся proposal.

Рекомендуемый путь:

1. Merge proposal.
2. Синхронизировать registry status в том же PR.
3. Использовать вручную в чате при следующих PR агентной верфи.
4. После нескольких удачных ручных проверок подготовить controlled activation proposal.
5. Не делать hard guardrail.

## 14. Первый практический use-case после merge

После merge proposal агент можно вручную применять к следующему checkpoint или PR агентной верфи:

> Проверить, что main, registry, roadmap, restart prompt, current-state и project-state говорят об одной и той же рабочей точке, а не о разных стадиях одного корабля.

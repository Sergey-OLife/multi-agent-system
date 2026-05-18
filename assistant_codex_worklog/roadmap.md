# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track, источниками проекта «Пишем книгу» и текущей агентной верфью.

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга временно отложена. Shipyard Modernization stability gate passed. Текущий фокус — очередь агентов.

## Уже завершено

- v2.7 — Shipyard Modernization stability gate passed
- v2.8 — Checkpoint compressor proposal synced
- v2.9 — Source card builder proposal synced
- v2.10 — Copyright boundary guard proposal synced
- v2.11 — Svod guard proposal synced
- v2.12 — Contextologist proposal synced
- v2.13 — Checkpoint full after contextologist state sync
- v2.14 — Repository hygiene audit and ledger protocol synced
- v2.15 — Checkpoint full after repository hygiene state sync
- v2.16 — Review depth protocol and Sergey interaction profiler proposal synced
- v2.17 — Checkpoint full after profiler state sync
- v2.18 — Author style memory proposal synced

## Recent PR summary

- PR #102 — Sync state after repository hygiene audit.
- PR #103 — Checkpoint full after repository hygiene state sync.
- PR #104 — Add review depth protocol and profiler proposal.
- PR #110 — Sync state after profiler proposal.
- PR #111 — Checkpoint full after profiler state sync.
- PR #112 — Add author style memory agent proposal.

## Shipyard Modernization result

Stability gate passed.

Зафиксировано:

```text
Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.
```

Новый modernization work допускается только при конкретном bug/compatibility risk.

## Review depth protocol

Active operational protocol:

- L1 — Functional review.
- L2 — Workflow review.
- L3 — Epistemic review.
- Delayed systemic harm principle.
- Diminishing returns rule.
- Semantic discipline для `+`, `++`, `+++`.
- Anti-overengineering doctrine.
- Bounded continuation principle.
- Text compression rule.

## Repository hygiene

Доступно:

```bash
npm run hygiene:audit
```

Единый ledger:

- Issue #99 — Repository hygiene ledger.

Branch cleanup остаётся `cleanup_needed`, не `completed`.

Правило:

- tracked junk удаляется через нормальный PR;
- stale branches фиксируются в issue #99, если нет безопасного branch cleanup tool;
- не использовать branch-ref workarounds;
- не выдавать cleanup за completed до фактической уборки.

## Proposal agents

- `workflow_conductor_agent`: proposal, not activated.
- `agent_registry_librarian`: proposal, not activated.
- `approval_gate_keeper`: proposal, not activated.
- `project_state_synchronizer`: proposal, not activated.
- `checkpoint_compressor_agent`: proposal, not activated.
- `source_card_builder`: proposal, not activated.
- `copyright_boundary_guard`: proposal, not activated.
- `svod_guard`: proposal, not activated.
- `contextologist_agent`: proposal, not activated.
- `sergey_interaction_profiler`: proposal, not activated.
- `author_style_memory_agent`: proposal, not activated.

Proposal не является activation.

## Active optional workflow layers

- `socratic_lantern_agent` — вопрос как фонарь, не поводок.
- `ethical_persuasion_guard` — оставить огонь, убрать дым.
- `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж.
- `source_intake_auditor` — источник не работает без ясной роли и границ; не workflow conductor.

## Возврат к агентам

Очередь:

1. `banality_alarm_agent`

`checkpoint_compressor_agent`, `source_card_builder`, `copyright_boundary_guard`, `svod_guard`, `contextologist_agent`, `sergey_interaction_profiler` и `author_style_memory_agent` уже доведены до proposal, но не активированы.

Следующий безопасный шаг:

```text
prepare banality_alarm_agent proposal without activation
```

## Strict PR Workflow

Остаётся обязательным для:

- кода;
- маршрутов агентов;
- guardrails;
- source registries;
- tests/baseline;
- project-state;
- working protocols;
- source cards/training cases;
- Сводов, MVP и карт контекстов;
- agent proposals / controlled activations / optional layers;
- repository hygiene protocols;
- Shipyard Modernization changes.

## Book Fast Track

Книга сейчас на паузе.

Если Сергей отдельно вернёт книгу в работу:

1. Писать и редактировать главу в чате.
2. Использовать агентов как внутренние редакторские слои.
3. GitHub фиксирует только принятый результат.
4. Не создавать approved artifact без отдельного финального approval.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — выполнить ближайшее уже grounded safe action, не обход approval-gates.
- Если gates несколько — уточнить.
- Если после `++` PR существенно изменён — нужен новый `++`.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не делать вид, что все загруженные источники уже проаудированы.
- Не путать source card с прочитанным источником.
- Не считать branch cleanup завершённым, пока issue #99 не обновлён после реальной уборки.
- Все human-readable artifacts — на русском.
- Для кода, агентов и модернизации сохранять строгий PR workflow.

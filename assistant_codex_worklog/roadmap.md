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

## Recent PR summary

- PR #91 — Sync state after source card builder proposal.
- PR #92 — Add copyright boundary guard agent proposal.
- PR #93 — Sync state after copyright boundary guard proposal.
- PR #94 — Add svod guard agent proposal.
- PR #95 — Sync state after svod guard proposal.

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

## Proposal agents

- `workflow_conductor_agent`: proposal, not activated.
- `agent_registry_librarian`: proposal, not activated.
- `approval_gate_keeper`: proposal, not activated.
- `project_state_synchronizer`: proposal, not activated.
- `checkpoint_compressor_agent`: proposal, not activated.
- `source_card_builder`: proposal, not activated.
- `copyright_boundary_guard`: proposal, not activated.
- `svod_guard`: proposal, not activated.

Proposal не является activation.

## Active optional workflow layers

- `socratic_lantern_agent` — вопрос как фонарь, не поводок.
- `ethical_persuasion_guard` — оставить огонь, убрать дым.
- `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж.
- `source_intake_auditor` — источник не работает без ясной роли и границ; не workflow conductor.

## Возврат к агентам

Очередь:

1. `contextologist_agent`
2. `sergey_interaction_profiler`
3. `author_style_memory_agent`

`checkpoint_compressor_agent`, `source_card_builder`, `copyright_boundary_guard` и `svod_guard` уже доведены до proposal, но не активированы.

Следующий безопасный шаг:

```text
prepare contextologist_agent proposal without activation
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
- Если gates несколько — уточнить.
- Если после `++` PR существенно изменён — нужен новый `++`.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не делать вид, что все загруженные источники уже проаудированы.
- Не путать source card с прочитанным источником.
- Все human-readable artifacts — на русском.
- Для кода, агентов и модернизации сохранять строгий PR workflow.

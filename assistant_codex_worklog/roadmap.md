# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track, источниками проекта «Пишем книгу» и текущей агентной верфью.

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга временно отложена. Shipyard Modernization stability gate passed. Текущий фокус — state sync после PR #121/#122 и выбор между repository architecture contract и `conversation_archive_librarian` proposal.

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
- v2.19 — Banality alarm proposal synced
- v2.20 — Conversation archive capture protocol synced
- v2.21 — Anti-cliche editor proposal synced
- v2.22 — Archive risks and capture prompt refresh synced

## Recent PR summary

- PR #118 — Add conversation archive capture protocol.
- PR #119 — Sync state after conversation archive protocol.
- PR #116 — Add anti-cliche editor proposal.
- PR #120 — Sync state after anti-cliche editor proposal.
- PR #122 — Refresh conversation capture prompt and restart handoff.
- PR #121 — Archive repository contract risks.

## Archive risks and capture refresh

PR #122 refreshed the universal conversation capture prompt and restart handoff.

Key rule:

```text
main — источник правды только для merged state.
open PR ≠ implemented.
draft PR ≠ ready state.
approval-gate ≠ approval.
```

PR #121 archived repository contract risks:

- root `README.md` / repository architecture contract needed;
- source-of-truth map needed;
- `scripts/` boundary needed so scripts do not become a second informal core;
- `main` branch protection action item needed;
- future knowledge/protocol consistency checks needed;
- label-triggered registry sync may replace manual `workflow_dispatch` later.

These are archived risks and recommended work items, not implementation approval.

## Anti-cliche editor

`anti_cliche_editor` is proposal only, not activated and not a hard guardrail.

Merged in PR #116:

- `knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md`
- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`
- `knowledge/07_operations/registry_mutation_protocol.md`

Core role:

```text
Убрать умно звучащее пустое. Оставить точное и живое.
```

## Registry mutation protocol

Active operational protocol:

- registry changes must use deterministic tooling when available;
- manual full replacement of large registry is not the normal path;
- dry-run first, then apply;
- if local command is unavailable, use approved runner/workflow path;
- registry sync is complete only after proposal file exists, registry status/next_action/proposal_path are updated, diff is checked, and no activation was smuggled in.

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

Отдельные future improvements:

- manual `workflow_dispatch` можно заменить label-triggered registry sync workflow;
- repository architecture contract должен описать границы Go-core / TS-orchestrator / scripts;
- branch protection для `main` нужно вынести отдельным action item.

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

## Conversation archive

Conversation archive is active as a separate human interaction archive:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`

Audit:

```bash
npm run archive:audit
```

Rules:

- preserve conversation seeds, not raw chat;
- do not duplicate project-state / roadmap / issue / proposal / registry;
- add archive entries only when something would otherwise be lost;
- during future `#checkpoint full`, run a short checkpoint capture check;
- long-lived observations about Sergey interaction style are allowed, but not as psychological diagnosis;
- check archive index and relevant entries for forgotten ideas, contradictions, plans and interaction-style questions.

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
- `banality_alarm_agent`: proposal, not activated.
- `anti_cliche_editor`: proposal, not activated.

Proposal не является activation.

## Active optional workflow layers

- `socratic_lantern_agent` — вопрос как фонарь, не поводок.
- `ethical_persuasion_guard` — оставить огонь, убрать дым.
- `cbt_thought_check_agent` — мысль как гипотеза, не приговор; не терапия, не диагностика, не инструмент продаж.
- `source_intake_auditor` — источник не работает без ясной роли и границ; не workflow conductor.

## Возврат к агентам / архитектуре

Текущий ближайший recommended work item:

1. Создать `Add repository architecture contract` PR, если Сергей не выберет другой шаг.
2. Не включать туда branch protection implementation, label-triggered workflow и integration tests.
3. Их оформить как следующие независимые задачи.

Альтернативный агентский шаг:

- `conversation_archive_librarian` proposal only.

Альтернативные книжно-редакторские агенты:

- `plotnikov_motor_agent`
- `one_strike_chapter_agent`
- `telegram_voice_editor`

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
- conversation archive protocols;
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
- Не превращать conversation archive в raw transcript dump.
- Не считать repository architecture contract уже approved.
- Все human-readable artifacts — на русском.
- Для кода, агентов и модернизации сохранять строгий PR workflow.

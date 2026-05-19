# Current State — Assistant × Codex

Дата фиксации: 2026-05-19

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Последний смерженный PR

- PR #136 — Add archive start GitHub write command
- Статус: merged
- Merge commit: `704c96453f98ff527a04c2ba98f3dba83a18daf0`

## Текущая версия

- currentVersion: v2.25
- currentMilestone: Architecture contract and archive-start command synced

## Что зафиксировал PR #131

Добавлен operational contract:

- `knowledge/07_operations/repository_architecture_contract.md`

Зафиксировано:

- GitHub `main` — current source of truth;
- Go — deterministic spine;
- TypeScript / JavaScript — orchestration, CLI, scripts, agent-facing layer;
- `scripts/` — edge automation, не второй core;
- event envelope — future contract, не runtime implementation;
- Redis / Postgres / P2P — future runtime layers only;
- branch protection — not configured until explicitly verified.

## Что зафиксировал PR #136

Добавлена write-first команда:

```text
#архив_старт
```

Она должна:

- сразу использовать GitHub tools;
- писать archive entry только в `knowledge/08_conversation_archive/chat_archives/`;
- обновлять только `knowledge/08_conversation_archive/index.md`;
- открывать PR против `main`.

Запрещено сохранять archive output в:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- project-state;
- roadmap;
- working protocol;
- arbitrary folders.

Если GitHub write недоступен, не сохранять в другое место; вывести ready-to-copy markdown и назвать блокер.

## Открытый approval-gate

- PR #133 — Archive red flags after architecture contract
- Статус: open
- Не мержить без явного `++`.

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
#архив_старт
```

Short command priority:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

## Mass capture quarantine

Archive/handoff PRs из массового прогона старых чатов считаются quarantine PR до проверки.

Закрывать без merge, если PR:

- пишет вне `knowledge/08_conversation_archive/chat_archives/`;
- обновляет не только `knowledge/08_conversation_archive/index.md`;
- содержит raw transcript / raw books / private links;
- тащит старый project-state как текущий;
- пишет в `knowledge/05_agent_memory/handoff/`;
- дублирует уже реализованные state/roadmap/protocol решения.

## Baseline CI

- `.github/workflows/ci.yml` implemented.
- Checks: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`.
- Branch protection: not configured.

## Repository hygiene

```bash
npm run hygiene:audit
npm run archive:audit
```

Branch cleanup остаётся `cleanup_needed`, не `completed`.

## Standing agent status

Proposal only, not activated:

- `workflow_conductor_agent`
- `agent_registry_librarian`
- `approval_gate_keeper`
- `project_state_synchronizer`
- `checkpoint_compressor_agent`
- `source_card_builder`
- `copyright_boundary_guard`
- `svod_guard`
- `contextologist_agent`
- `sergey_interaction_profiler`
- `author_style_memory_agent`
- `banality_alarm_agent`
- `anti_cliche_editor`

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Следующий безопасный шаг

Decide PR #133 or inspect CI on PR #131 / next PR, then consider README or branch protection.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не считаем branch protection настроенным без отдельной проверки.
- Не мержим PR #133 без явного `++`.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — PR с archive entry + index update.
- `#архив_старт` — write-first GitHub archive PR.

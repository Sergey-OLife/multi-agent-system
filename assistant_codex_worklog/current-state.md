# Current State — Assistant × Codex

Дата фиксации: 2026-05-19

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Последний смерженный PR

- PR #143 — Archive corrective margin orchestra and consistency discussion
- Статус: merged
- Merge commit: `a9353575780d56f31faa84e015998e1552647f53`

## Текущая версия

- currentVersion: v2.26
- currentMilestone: Corrective archive coverage and cumulative archive-start synced

## Что зафиксировали PR #138 / #140 / #142 / #143

PR #138 добавил thematic archive entry по красным флагам после repository architecture contract.

PR #140 закрепил:

```text
#архив_старт is cumulative, not last-topic-only.
```

PR #142 закрепил:

```text
No full-chat marker = thematic coverage by default.
```

Archive entry нельзя считать full-chat checkpoint без явного:

```text
coverage_scope: full_chat
```

PR #143 добавил corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`

Он покрывает известный накопительный хвост и прямо говорит:

- Coverage scope: corrective;
- previous checkpoint coverage scope: thematic;
- full-chat marker present: no;
- gap found: yes;
- entry does not claim full-chat coverage.

## Repository architecture contract

Implemented in PR #131:

- `knowledge/07_operations/repository_architecture_contract.md`

Зафиксировано:

- GitHub `main` — current source of truth;
- Go — deterministic spine;
- TypeScript / JavaScript — orchestration, CLI, scripts, agent-facing layer;
- `scripts/` — edge automation, не второй core;
- event envelope — future contract, не runtime implementation;
- Redis / Postgres / P2P — future runtime layers only;
- branch protection — not configured until explicitly verified.

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
#архив_старт
```

`#архив_старт` must:

- immediately use GitHub tools;
- check main, index, open PRs and relevant archive entries;
- open latest conversation_capture_prompt.md;
- determine previous coverage_scope;
- not treat thematic entries as full-chat checkpoints;
- name coverage gap if no full-chat marker exists;
- capture the cumulative semantic tail, not only the latest topic;
- write only to `knowledge/08_conversation_archive/chat_archives/` and `knowledge/08_conversation_archive/index.md`.

Short command priority:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

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

Create `knowledge_consistency_protocol` PR, then `conversation_archive_librarian` proposal, then `critic_margin_agent` with internal `margin_orchestra` proposal.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не считаем branch protection настроенным без отдельной проверки.
- Не внедряем runtime P2P / Redis / Postgres / Go validators без отдельного решения.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — PR с archive entry + index update.
- `#архив_старт` — cumulative write-first GitHub archive PR.

# Current State — Assistant × Codex

Дата фиксации: 2026-05-19

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #126 — Archive CI baseline and command recovery
- Статус: merged
- Merge commit: `01891be8fdb45240f79c00746a5dadef9172a6a2`
- Смысл: сохранён archive entry по baseline CI для TypeScript / JavaScript / Go и recovery после сбоя распознавания короткой команды `#архив чата`.

## Недавние merged PRs

- PR #123 — Sync state after archive risks and capture refresh
- PR #124 — Add stable conversation archive command
- PR #125 — Add short command priority rule
- PR #126 — Archive CI baseline and command recovery

## Что зафиксировал PR #124

Добавлены стабильные команды conversation archive:

```text
#архив чата
#архив чата сохрани
```

Правила:

- `#архив чата` выполняет актуальную версию `knowledge/08_conversation_archive/conversation_capture_prompt.md` по текущему чату.
- По умолчанию команда готовит draft archive entry и не пишет в GitHub.
- `#архив чата сохрани` создаёт PR с archive entry + index update, если GitHub tools доступны.
- Длинный capture prompt может улучшаться в репозитории, короткая команда остаётся стабильной.

## Что зафиксировал PR #125

Добавлено правило short command priority:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

Если сообщение Сергея состоит из точной короткой команды, ChatGPT сначала распознаёт её и проверяет pending work.

Если хвост не блокирует команду — назвать хвост и выполнить команду.

Если хвост может создать дубль, конфликт, потерю approval-gate или смешение archive/checkpoint — сначала спросить Сергея, что делать.

## Что зафиксировал PR #126

Сохранён archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`

И обновлён:

- `knowledge/08_conversation_archive/index.md`

Заархивировано:

- baseline CI для TypeScript / JavaScript / Go как promising next work item;
- CI V1 должен использовать существующие scripts: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`;
- ESLint / Prettier / golangci-lint / SonarCloud / CodeClimate / AI-review bots пока не вводить;
- TS/Go/JS boundaries позже закрепить в repository architecture contract;
- сбой `#архив чата` сохранён как failure pattern, уже закрытый правилом PR #125.

Это archived idea / recommended work item, не implementation approval.

## Anti-cliche editor

`anti_cliche_editor` — proposal only, не activation и не hard guardrail.

Registry status:

```text
anti_cliche_editor: proposal
next_action: controlled_activation
proposal_path: knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md
```

Главная формула агента:

```text
Убрать умно звучащее пустое. Оставить точное и живое.
```

## Registry mutation protocol

`knowledge/07_operations/registry_mutation_protocol.md` active operational protocol.

Правило:

```text
Registry меняется инструментом, а не памятью ассистента.
```

Manual full replacement большого registry запрещён как обычный путь.

## Conversation archive

Conversation archive активен как отдельный human interaction archive:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`
- `scripts/archive-audit.mjs`

Audit:

```bash
npm run archive:audit
```

Archive не является project-state, approval-log или technical checkpoint.

Он важен при вопросах:

- что у нас дальше;
- какие идеи потерялись;
- какие противоречия не закрыты;
- как учитывать стиль взаимодействия;
- какие open loops не отражены в roadmap/state.

## Repository hygiene

Доступно:

```bash
npm run hygiene:audit
```

Единый ledger:

- Issue #99 — Repository hygiene ledger.

Branch cleanup остаётся `cleanup_needed`, не `completed`.

## Актуальные proposal-агенты

- `workflow_conductor_agent` — proposal only, не activation.
- `agent_registry_librarian` — proposal only, не activation.
- `approval_gate_keeper` — proposal only, не activation.
- `project_state_synchronizer` — proposal only, не activation.
- `checkpoint_compressor_agent` — proposal only, не activation.
- `source_card_builder` — proposal only, не activation.
- `copyright_boundary_guard` — proposal only, не activation.
- `svod_guard` — proposal only, не activation.
- `contextologist_agent` — proposal only, не activation.
- `sergey_interaction_profiler` — proposal only, не activation.
- `author_style_memory_agent` — proposal only, не activation.
- `banality_alarm_agent` — proposal only, не activation.
- `anti_cliche_editor` — proposal only, не activation.

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Подготовить `Add baseline CI workflow` PR, если Сергей не выберет сначала `repository architecture contract` или `conversation_archive_librarian` proposal.

Важно:

```text
baseline CI пока recommended work item, не approval.
```

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не заявляем, что branch cleanup выполнен, пока ветки не удалены реально.
- Не превращаем conversation archive в raw transcript dump.
- Не считаем repository architecture contract уже утверждённым.
- Не считаем baseline CI утверждённым до отдельного approval / PR.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее уже grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry по текущему чату, без записи в GitHub.
- `#архив чата сохрани` — создать PR с archive entry + index update, если tools доступны.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

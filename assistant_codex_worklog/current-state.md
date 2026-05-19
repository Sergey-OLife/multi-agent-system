# Current State — Assistant × Codex

Дата фиксации: 2026-05-19

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Последний смерженный PR

- PR #129 — Add baseline CI workflow
- Статус: merged
- Merge commit: `7dd6e60cefb1aae72d4b55916c1c1a3652274634`

## Текущая версия

- currentVersion: v2.24
- currentMilestone: Baseline CI workflow synced

## Что зафиксировал PR #129

Добавлен baseline CI workflow:

- `.github/workflows/ci.yml`

Workflow запускается:

- на `pull_request` в `main`;
- вручную через `workflow_dispatch`.

Проверки:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Не добавлялись:

- ESLint;
- Prettier;
- golangci-lint;
- SonarCloud / CodeClimate;
- AI-review bots;
- branch protection;
- repository architecture contract.

Branch protection остаётся отдельным будущим шагом после наблюдения CI на следующем PR.

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
```

`#архив чата` выполняет актуальную версию `knowledge/08_conversation_archive/conversation_capture_prompt.md` по текущему чату, готовит draft archive entry и не пишет в GitHub.

`#архив чата сохрани` создаёт PR с archive entry + index update, если GitHub tools доступны.

Short command priority:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

## Conversation archive

Важные пути:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`
- `scripts/archive-audit.mjs`

Audit:

```bash
npm run archive:audit
```

## Repository hygiene

```bash
npm run hygiene:audit
```

Ledger:

- Issue #99 — Repository hygiene ledger.

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

Наблюдать baseline CI на следующем PR. После этого отдельно рассмотреть:

- branch protection;
- repository architecture contract;
- `conversation_archive_librarian` proposal.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не считаем branch protection настроенным без отдельной проверки.
- Не считаем repository architecture contract approved.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry по текущему чату, без записи в GitHub.
- `#архив чата сохрани` — создать PR с archive entry + index update, если tools доступны.

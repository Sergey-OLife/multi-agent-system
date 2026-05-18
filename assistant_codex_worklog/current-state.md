# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #121 — Archive repository contract risks
- Статус: merged
- Merge commit: `cc8e2f2216e518871b35c3aa48c91fdbc6bb4943`
- Смысл: сохранён archive entry о repository contract / main protection risks после обновления capture prompt.

## Недавние merged PRs

- PR #120 — Sync state after anti-cliche editor proposal
- PR #122 — Refresh conversation capture prompt and restart handoff
- PR #121 — Archive repository contract risks

## Что зафиксировал PR #122

Обновлён universal conversation capture prompt и restart handoff.

Ключевая поправка:

```text
main — источник правды только для merged state.
open PR ≠ implemented.
draft PR ≠ ready state.
approval-gate ≠ approval.
```

При сборе archive entry теперь нужно проверять relevant open PRs, если текущий чат на них ссылается.

`knowledge/08_conversation_archive/chat_archives/*.md` добавлен в restart prompt как обязательный слой восстановления контекста.

## Что зафиксировал PR #121

Сохранён archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`

И обновлён:

- `knowledge/08_conversation_archive/index.md`

Заархивированы риски:

- нужен root `README.md` / repository architecture contract;
- нужна source-of-truth map;
- нужен boundary для `scripts/`, чтобы они не стали вторым неформальным core;
- нужен отдельный action item для `main` branch protection;
- нужны future knowledge/protocol consistency checks;
- manual `workflow_dispatch` для registry sync можно позже заменить label-triggered workflow.

Это archived risks и recommended work items, не implementation approval.

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

Подготовить `Add repository architecture contract` PR, если Сергей не выберет сначала `conversation_archive_librarian` proposal.

Важно:

```text
repository architecture contract пока recommended work item, не approval.
```

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не заявляем, что branch cleanup выполнен, пока ветки не удалены реально.
- Не превращаем conversation archive в raw transcript dump.
- Не считаем repository architecture contract уже утверждённым.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее уже grounded safe action, не обход approval-gates.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

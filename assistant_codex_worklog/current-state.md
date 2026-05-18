# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #116 — Add anti-cliche editor proposal
- Статус: merged
- Merge commit: `26d77624c640d1594b2e41aeaae0643959c250b4`
- Смысл: добавлен proposal `anti_cliche_editor`, registry sync выполнен через Registry Sync workflow, добавлен `registry_mutation_protocol`.

## Что зафиксировал PR #116

- `knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md`
- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`
- `knowledge/07_operations/registry_mutation_protocol.md`

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

Агент классифицирует и помогает точечно править:

- клише;
- общие места;
- псевдоглубину;
- рекламную пластмассу;
- морализаторство;
- методический тон;
- канцелярит;
- расплывчатые утверждения;
- слишком гладкий ИИ-голос.

## Registry mutation protocol

`knowledge/07_operations/registry_mutation_protocol.md` теперь active operational protocol.

Правило:

```text
Registry меняется инструментом, а не памятью ассистента.
```

Нормальный путь:

1. proposal file;
2. `npm run registry:sync -- ... --dry-run`;
3. apply без `--dry-run`;
4. проверка changed files;
5. проверка точечного registry diff;
6. PR ready only after sync.

Manual full replacement большого registry запрещён как обычный путь.

## Conversation archive

Conversation archive активен как отдельный human interaction archive:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/`
- `scripts/archive-audit.mjs`

Audit:

```bash
npm run archive:audit
```

Archive не является project-state, approval-log или technical checkpoint.

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

Подготовить `conversation_archive_librarian` proposal without activation, если Сергей не выберет другой ближайший агент или сначала не попросит улучшить registry workflow automation.

Ожидаемый порядок, ранее согласованный с Сергеем:

```text
1. Разблокировать PR #116 через Registry Sync workflow — done.
2. Довести anti_cliche_editor — proposal merged, not activated.
3. Потом создать conversation_archive_librarian proposal.
4. После 2–3 реальных archive entries решить, активировать ли его как optional workflow layer.
```

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не меняем routes/guardrails/optional layers.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не заявляем, что branch cleanup выполнен, пока ветки не удалены реально.
- Не превращаем conversation archive в raw transcript dump.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее уже grounded safe action, не обход approval-gates.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Auto-merge не отменяет approval-gates.

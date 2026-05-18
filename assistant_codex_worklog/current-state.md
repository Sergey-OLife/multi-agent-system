# Current State — Assistant × Codex

Дата фиксации: 2026-05-18

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга остаётся на паузе. Возврат к книге — только по отдельному решению Сергея через Book Fast Track.

## Последний смерженный PR

- PR #118 — Add conversation archive capture protocol
- Статус: merged
- Merge commit: `4f8096378daa55755690a348d455cc780dee17a9`
- Смысл: добавлен отдельный conversation archive layer для смысловых следов диалогов, которые не должны теряться между чатами.

## Что зафиксировал PR #118

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_lost-dialogue-and-idea-archive.md`
- `scripts/archive-audit.mjs`
- `npm run archive:audit`

Conversation archive не является project-state, approval-log или technical checkpoint.

Он сохраняет только смысловые зерна:

- идеи, которые иначе потеряются;
- противоречия;
- open loops;
- наблюдения о стиле взаимодействия;
- ошибки ChatGPT;
- сильные формулы;
- указатели на то, где мысль реализована.

Запрещено сохранять full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.

## Registry sync workflow

PR #117 смержен ранее и добавил:

- `.github/workflows/registry-sync.yml`

Его нужно использовать для разблокировки PR #116:

```text
target_branch: agent-proposal-anti-cliche-editor
agent_id: anti_cliche_editor
proposal_path: knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md
dry_run: true сначала, затем false
```

PR #116 остаётся заблокирован до registry sync.

## Repository hygiene

Доступно:

```bash
npm run hygiene:audit
```

Единый ledger:

- Issue #99 — Repository hygiene ledger.

Статус веток:

- branch cleanup остаётся `cleanup_needed`, не `completed`;
- stale branches не удалялись;
- уборка веток должна быть выполнена через GitHub UI или будущий явный безопасный branch cleanup tool;
- не использовать branch-ref workarounds;
- не заявлять, что cleanup завершён, пока ветки не убраны реально и issue #99 не обновлён.

## Agent queue status

`banality_alarm_agent` теперь proposal only, не activation и не hard guardrail.

`anti_cliche_editor` proposal PR #116 открыт, но blocked/draft до registry sync через workflow или approved runner path.

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

## Активные optional workflow layers

1. `socratic_lantern_agent` — optional workflow layer.
2. `ethical_persuasion_guard` — optional workflow layer.
3. `cbt_thought_check_agent` — optional workflow layer; not therapy, not diagnostics.
4. `source_intake_auditor` — optional workflow layer; not workflow conductor.

## Следующий безопасный шаг

Разблокировать PR #116 через Registry Sync workflow:

```text
workflow: Registry Sync
target_branch: agent-proposal-anti-cliche-editor
agent_id: anti_cliche_editor
proposal_path: knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md
dry_run: true first
```

После успешного dry-run повторить с `dry_run: false`, проверить PR #116, снять draft, проверить changed files/mergeability/comments.

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

# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.25
- currentMilestone: Architecture contract and archive-start command synced
- lastMergedPr: PR #136 — Add archive start GitHub write command

## Recent PR summary

- PR #129 — Add baseline CI workflow.
- PR #130 — Sync state after baseline CI.
- PR #131 — Add repository architecture contract.
- PR #136 — Add archive start GitHub write command.

## Что изменилось в v2.25

PR #131 добавил:

- `knowledge/07_operations/repository_architecture_contract.md`

Контракт закрепил:

- GitHub `main` — current source of truth;
- Go — deterministic spine;
- TypeScript / JavaScript — orchestration, CLI, scripts, agent-facing layer;
- `scripts/` — edge automation, не второй core;
- event envelope — future contract, не runtime implementation;
- Redis / Postgres / P2P — future runtime only.

PR #136 добавил:

```text
#архив_старт
```

Это write-first GitHub archive command. Он пишет только в:

- `knowledge/08_conversation_archive/chat_archives/`
- `knowledge/08_conversation_archive/index.md`

Запрещено сохранять archive output в memory / handoff / project-state / roadmap / arbitrary folders.

## Conversation archive

Conversation archive остаётся отдельным human interaction archive, не project-state, не approval-log и не technical checkpoint.

Важные пути:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`

Audit:

```bash
npm run archive:audit
```

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
#архив_старт
```

Rule:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
GitHub archive command writes only to GitHub conversation archive directory.
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

## Open approval-gate

- PR #133 — Archive red flags after architecture contract.
- Не мержить без явного `++`.

## Recommended next work item

Сначала решить PR #133 или проверить CI observation на PR #131 / следующем PR.

Затем отдельно выбрать:

- `Add repository README`;
- branch protection;
- protocol / knowledge consistency checks;
- `conversation_archive_librarian` proposal.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track остаётся на паузе.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — PR с archive entry + index update.
- `#архив_старт` — write-first GitHub archive PR.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не считать source card прочитанным источником.
- Не превращать conversation archive в raw transcript dump.
- Не считать branch protection configured without verification.
- Human-readable artifacts — на русском.

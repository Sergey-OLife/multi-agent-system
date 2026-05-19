# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.23
- currentMilestone: Archive command and CI baseline recovery synced
- lastMergedPr: PR #126 — Archive CI baseline and command recovery

## Recent PR summary

- PR #123 — Sync state after archive risks and capture refresh.
- PR #124 — Add stable conversation archive command.
- PR #125 — Add short command priority rule.
- PR #126 — Archive CI baseline and command recovery.

## Что изменилось в v2.23

PR #124 закрепил стабильные команды:

```text
#архив чата
#архив чата сохрани
```

PR #125 закрепил правило:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

PR #126 сохранил смысловой archive entry о двух линиях:

- baseline CI для TypeScript / JavaScript / Go;
- recovery после сбоя распознавания короткой команды `#архив чата`.

## Conversation archive

Conversation archive остаётся отдельным human interaction archive, не project-state, не approval-log и не technical checkpoint.

Важные пути:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`

Audit:

```bash
npm run archive:audit
```

## Recommended next work item

`Add baseline CI workflow`.

CI V1 должен использовать только существующие scripts:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Не включать в этот PR ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate, AI-review bots, branch protection или repository architecture contract.

## Альтернативные следующие шаги

- `Add repository architecture contract`.
- `conversation_archive_librarian` proposal only.
- `plotnikov_motor_agent`.
- `one_strike_chapter_agent`.
- `telegram_voice_editor`.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Repository architecture contract remains recommended, not approved implementation.
- Baseline CI remains recommended until separate approval / PR.
- Book Fast Track остаётся на паузе.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry по текущему чату, без записи в GitHub.
- `#архив чата сохрани` — PR с archive entry + index update, если tools доступны.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не считать source card прочитанным источником.
- Не превращать conversation archive в raw transcript dump.
- Не считать repository architecture contract approved.
- Не считать baseline CI approved before separate approval / PR.
- Human-readable artifacts — на русском.

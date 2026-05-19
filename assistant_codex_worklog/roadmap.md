# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.24
- currentMilestone: Baseline CI workflow synced
- lastMergedPr: PR #129 — Add baseline CI workflow

## Recent PR summary

- PR #124 — Add stable conversation archive command.
- PR #125 — Add short command priority rule.
- PR #126 — Archive CI baseline and command recovery.
- PR #127 — Sync state after archive command and CI entry.
- PR #129 — Add baseline CI workflow.

## Что изменилось в v2.24

PR #129 добавил baseline CI workflow:

- `.github/workflows/ci.yml`

Workflow запускается:

- `pull_request` в `main`;
- `workflow_dispatch`.

CI V1 использует только существующие scripts:

- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Не добавлены:

- ESLint;
- Prettier;
- golangci-lint;
- SonarCloud / CodeClimate;
- AI-review bots;
- branch protection;
- repository architecture contract.

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
```

Rule:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
```

## Recommended next work item

Наблюдать baseline CI на следующем PR. После этого отдельно решить:

- включать ли branch protection;
- делать ли `Add repository architecture contract`;
- готовить ли `conversation_archive_librarian` proposal.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Repository architecture contract remains recommended, not approved implementation.
- Branch protection remains not configured until explicitly verified.
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
- Не считать branch protection configured without verification.
- Human-readable artifacts — на русском.

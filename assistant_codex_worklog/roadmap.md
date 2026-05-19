# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.26
- currentMilestone: Archive coverage scope and corrective archive synced
- lastMergedPr: PR #143 — Archive corrective margin orchestra and consistency discussion
- lastMergeCommit: `a9353575780d56f31faa84e015998e1552647f53`

## Recent PR summary

- PR #136 — Add archive start GitHub write command.
- PR #137 — Sync state after architecture and archive start.
- PR #138 — Archive red flags after architecture contract.
- PR #140 — Require cumulative archive start capture.
- PR #142 — Require explicit archive coverage scope.
- PR #143 — Archive corrective margin orchestra and consistency discussion.

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

## Что изменилось в v2.26

PR #140 исправил failure pattern: `#архив_старт` теперь cumulative, not last-topic-only.

PR #142 добавил coverage-scope rule:

- archive entry нельзя считать full-chat checkpoint без явного `coverage_scope: full_chat` или эквивалентного маркера;
- no full-chat marker = thematic coverage by default;
- coverage types: `full_chat`, `thematic`, `partial`, `corrective`.

PR #143 добавил corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`.

Entry фиксирует:

- `conversation_archive_librarian`;
- archive parallel intake / consolidation;
- checkpoint delta sync;
- `critic_margin_agent` and internal `margin_orchestra`;
- cumulative-capture failure pattern;
- explicit `coverage_scope` fix;
- `Баги будущего` / knowledge consistency risk.

PR #141 закрыт unmerged и не считается implemented.

## Conversation archive

Conversation archive остаётся отдельным human interaction archive, не project-state, не approval-log и не technical checkpoint.

Важные пути:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`

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
No full-chat marker = thematic coverage by default.
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

No open PR approval-gate known after PR #143 merge.

## CI observation

Baseline CI is implemented, but first observation on PR #131 showed failure in existing stale assertions:

- `baseline.test.ts` expected `currentVersion: v2.1`;
- `knowledge.test.ts` expected source registry version `0.3`, but registry is `0.6`;
- `source-registry.test.ts` expected source registry version `0.3`, but registry is `0.6`.

Therefore branch protection should not be configured around CI until stale assertions are fixed.

## Recommended next work item

First fix stale CI assertions observed on PR #131.

Then choose exactly one design PR:

1. `knowledge_consistency_protocol`;
2. `conversation_archive_librarian`;
3. `critic_margin_agent` + `margin_orchestra`;
4. README / architecture map;
5. branch protection after CI is reliable.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track остаётся на паузе.
- Runtime Redis / Postgres / P2P remain future runtime only and must not be implemented without separate decision.

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
- Не считать thematic archive entry full-chat checkpoint.
- Не считать PR #141 implemented.
- Human-readable artifacts — на русском.

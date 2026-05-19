# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.29
- currentMilestone: Checkpoint full after knowledge consistency state sync
- lastMergedPr: PR #150 — Sync state after knowledge consistency protocol
- lastMergeCommit: `f4687cfc01de13d9a9dbf875d1f2d78a3a40027d`

## Recent PR summary

- PR #144 — Sync state after archive coverage fixes.
- PR #146 — Archive corrective current chat coverage gap.
- PR #147 — Fix stale CI assertions.
- PR #148 — Sync state after CI fix.
- PR #149 — Add knowledge consistency protocol.
- PR #150 — Sync state after knowledge consistency protocol.

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

## Что изменилось в v2.27

PR #146 добавил corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md`.

Entry фиксирует:

- no verified `coverage_scope: full_chat` checkpoint exists for the current chat;
- previous checkpoint coverage scope: `missing`;
- full-chat marker present: no;
- gap found: yes;
- PR #145 was closed unmerged and must not be treated as implemented.

PR #147 fixed stale CI assertions and made baseline CI green.

Fixed:

- `baseline.test.ts` no longer expects `currentVersion: v2.1` in `project-state.md`;
- `knowledge.test.ts` no longer expects source registry version `0.3`;
- `source-registry.test.ts` no longer expects source registry version `0.3`;
- Go-core CLI supports the `--` command separator used by schema-pressure tests.

CI and Sync Check were green on PR #147 head before merge.

## Что изменилось в v2.28

PR #149 добавил:

- `knowledge/07_operations/knowledge_consistency_protocol.md`.

Protocol фиксирует:

- source-of-truth hierarchy;
- consistency classes C0-C5;
- merge aftermath checklist;
- narrow state sync PR boundary;
- PR body consistency contract;
- red-flag phrases requiring verification;
- already observed drift patterns;
- conditions for follow-up consistency PR;
- CI and Sync Check rules;
- relationship with future validators;
- exit criteria for consistency-sensitive PRs.

Codex feedback was addressed before merge:

- required repository checks now include `npm run sync-check`;
- PR readiness must mention both Sync Check and CI when both workflows apply.

PR #150 synchronized state/worklog/restart after PR #149.

## Что изменилось в v2.29

Checkpoint full зафиксировал полную рабочую точку после PR #150.

Checkpoint confirms:

- current mode remains `Agent Shipyard / Agent Queue`;
- book remains paused;
- `knowledge_consistency_protocol` is implemented as operational protocol, not automated validator;
- required PR verification layer is Sync Check + CI when both apply;
- next design PR is `conversation_archive_librarian`.

## Conversation archive

Conversation archive остаётся отдельным human interaction archive, не project-state, не approval-log и не technical checkpoint.

Важные пути:

- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `knowledge/08_conversation_archive/archive_governance_protocol.md`
- `knowledge/08_conversation_archive/index.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`
- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md`

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

No open PR approval-gate known after PR #150 merge.

## CI status

Baseline CI is implemented and green after PR #147.

Current required repository verification layer includes both workflows when both apply:

- Sync Check — `.github/workflows/sync-check.yml`, `npm run sync-check`;
- CI — `.github/workflows/ci.yml`.

Branch protection remains not configured until separately verified and approved.

## Recommended next work item

Create `conversation_archive_librarian` as the next design PR after checkpoint full.

Then choose one of:

1. `critic_margin_agent` + `margin_orchestra`;
2. README / architecture map;
3. branch protection after separate verification.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers остаются optional, not hard guardrails.
- Branch cleanup остаётся `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track остаётся на паузе.
- Runtime Redis / Postgres / P2P remain future runtime only and must not be implemented without separate decision.
- PR #146 must not be treated as full-chat coverage; it records a missing full-chat checkpoint.
- PR #141 and PR #145 were closed unmerged and are not implemented.
- Knowledge consistency protocol is active as an operational protocol, not as an automated validator.

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
- Не считать PR #141 / PR #145 implemented.
- Human-readable artifacts — на русском.

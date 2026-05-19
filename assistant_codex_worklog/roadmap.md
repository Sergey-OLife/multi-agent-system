# Roadmap — Assistant × Codex

## Текущий режим

`Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Current milestone

- currentVersion: v2.26
- currentMilestone: Corrective archive coverage and cumulative archive-start synced
- lastMergedPr: PR #143 — Archive corrective margin orchestra and consistency discussion
- lastMergeCommit: `a9353575780d56f31faa84e015998e1552647f53`

## Recent PR summary

- PR #136 — Add archive start GitHub write command.
- PR #138 — Archive red flags after architecture contract.
- PR #140 — Require cumulative archive start capture.
- PR #142 — Require explicit archive coverage scope.
- PR #143 — Archive corrective margin orchestra and consistency discussion.

## Conversation archive status

Conversation archive remains a separate human interaction archive, not project-state, approval-log or technical checkpoint.

Important rule:

```text
#архив_старт is cumulative, not last-topic-only.
```

Coverage rule:

```text
No full-chat marker = thematic coverage by default.
```

Archive entry cannot be treated as full-chat checkpoint without explicit:

```text
coverage_scope: full_chat
```

Coverage types:

- `full_chat`
- `thematic`
- `partial`
- `corrective`

Latest merged corrective archive entry:

- `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`

It covers the known gap around:

- archive stabilization wave;
- `conversation_archive_librarian`;
- archive parallel intake / consolidation;
- checkpoint delta sync;
- `critic_margin_agent` and internal `margin_orchestra`;
- cumulative-capture failure pattern;
- explicit `coverage_scope` fix;
- `Баги будущего` / knowledge consistency risk.

## Next approved order

Sergey approved the following order after PR #143:

1. State sync after PR #138/#140/#142/#143.
2. `knowledge_consistency_protocol`.
3. `conversation_archive_librarian` proposal.
4. `critic_margin_agent` with internal `margin_orchestra` proposal.
5. README / branch protection / future Go validator line.

This order is approved direction, not automatic approval to merge future materially changed PRs without review.

## Recommended next work item

After this state sync PR is merged:

1. Create `knowledge/07_operations/knowledge_consistency_protocol.md`.
2. Do not add audit script yet unless the protocol clearly defines initial deterministic checks.
3. Then create `conversation_archive_librarian` proposal.
4. Then create `critic_margin_agent` proposal with `margin_orchestra` as internal section.

## Repository architecture contract

Implemented in PR #131:

- `knowledge/07_operations/repository_architecture_contract.md`

Contract fixed:

- GitHub `main` — current source of truth;
- Go — deterministic spine;
- TypeScript / JavaScript — orchestration, CLI, scripts, agent-facing layer;
- `scripts/` — edge automation, not second core;
- event envelope — future contract, not runtime implementation;
- Redis / Postgres / P2P — future runtime only.

## Baseline CI

PR #129 implemented baseline CI:

- `.github/workflows/ci.yml`

CI runs existing scripts only:

- `typecheck`
- `typecheck:test`
- `test`
- `test:core`
- `hygiene:audit`
- `archive:audit`

Branch protection remains not configured until explicitly verified.

## Mass capture quarantine

Archive/handoff PRs from mass-running commands across old chats are quarantine PRs until checked.

Reject/close without merge if PR:

- writes outside `knowledge/08_conversation_archive/chat_archives/`;
- updates anything except `knowledge/08_conversation_archive/index.md`;
- contains raw transcript / raw books / private links;
- carries stale project-state as current;
- writes to `knowledge/05_agent_memory/handoff/`;
- duplicates already implemented state/roadmap/protocol decisions;
- lacks clear `coverage_scope`.

## Standing rules

- Proposal не является activation.
- Active optional workflow layers remain optional, not hard guardrails.
- Branch cleanup remains `cleanup_needed`, not completed.
- Branch protection remains not configured until explicitly verified.
- Book Fast Track remains paused.
- Do not implement runtime P2P / Redis / Postgres / Go validators without separate decision.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — PR с archive entry + index update.
- `#архив_старт` — cumulative write-first GitHub archive PR.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не считать source card прочитанным источником.
- Не превращать conversation archive в raw transcript dump.
- Не считать thematic entry full-chat checkpoint.
- Не считать branch protection configured without verification.
- Human-readable artifacts — на русском.

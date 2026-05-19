# Restart Prompt — Assistant × Codex

Скопируй этот текст в новый чат ChatGPT, если нужно продолжить работу без перегруза старого чата.

```text
Продолжаем проект Sergey-OLife/multi-agent-system в проекте «Пишем книгу».

GitHub — источник правды. Сначала открой:

1. assistant_codex_worklog/restart-prompt.md
2. assistant_codex_worklog/current-state.md
3. assistant_codex_worklog/roadmap.md
4. assistant_codex_worklog/working-protocol.md
5. assistant_codex_worklog/protocol_addenda/*.md
6. knowledge/00_manifest/project-state.md
7. knowledge/00_manifest/project-state.json
8. knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md
9. knowledge/05_agent_memory/agent_shipyard/hybrid_coordination_model.md
10. knowledge/05_agent_memory/agent_shipyard/materials_research_topology.md
11. knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md
12. knowledge/05_agent_memory/agent_proposals/author_style_memory_agent.md
13. knowledge/05_agent_memory/agent_proposals/banality_alarm_agent.md
14. knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md
15. knowledge/07_operations/review_depth_protocol.md
16. knowledge/07_operations/repository_hygiene_protocol.md
17. knowledge/07_operations/registry_mutation_protocol.md
18. knowledge/07_operations/repository_architecture_contract.md
19. knowledge/08_conversation_archive/README.md
20. knowledge/08_conversation_archive/archive_governance_protocol.md
21. knowledge/08_conversation_archive/conversation_capture_prompt.md
22. knowledge/08_conversation_archive/index.md
23. knowledge/08_conversation_archive/chat_archives/*.md
24. assistant_codex_worklog/protocol_addenda/archive_start_command.md
25. scripts/hygiene-audit.mjs
26. scripts/archive-audit.mjs
27. .github/workflows/registry-sync.yml
28. .github/workflows/ci.yml

Актуальное состояние:

- currentVersion: v2.26.
- lastCompletedVersion: v2.26.
- lastMergedPr: PR #143 — Archive corrective margin orchestra and consistency discussion.
- lastMergeCommit: a9353575780d56f31faa84e015998e1552647f53.
- currentMilestone: v2.26 Archive coverage scope and corrective archive synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Repository architecture contract:

- `knowledge/07_operations/repository_architecture_contract.md` implemented in PR #131.
- GitHub `main` is current source of truth.
- Go is deterministic spine.
- TypeScript / JavaScript are orchestration, CLI, scripts and agent-facing layer.
- `scripts/` are edge automation, not a second core.
- Event envelope is future contract, not runtime implementation.
- Redis / Postgres / P2P are future runtime layers only.
- Branch protection remains not configured until explicitly verified.

Baseline CI:

- `.github/workflows/ci.yml` implemented in PR #129.
- Runs on `pull_request` to `main` and `workflow_dispatch`.
- Uses Node.js 20 and Go version from `go-core/go.mod`.
- Runs: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`.
- CI was observed on PR #131: Sync Check passed, CI failed during `npm test` because of stale test assertions.
- Known stale assertions: `baseline.test.ts` expects `currentVersion: v2.1`; `knowledge.test.ts` and `source-registry.test.ts` expect source registry version `0.3`, while registry is `0.6`.
- Do not configure branch protection around CI until stale assertions are fixed.

Stable conversation archive commands:

- `#архив чата` means: run the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat; prepare draft archive entry only; do not write to GitHub by default.
- `#архив чата сохрани` means: use GitHub tools and create a PR with archive entry + index update in `knowledge/08_conversation_archive/chat_archives/` and `knowledge/08_conversation_archive/index.md` only.
- `#архив_старт` means: write-first cumulative archive command. Immediately use GitHub tools, verify the latest archive/state checkpoint, check whether the previous archive entry covered the chat up to that point, then capture the full new semantic tail from that checkpoint to now.
- `#архив_старт` is cumulative, not last-topic-only.
- For `#архив_старт`, create archive entries only in `knowledge/08_conversation_archive/chat_archives/`, update only `knowledge/08_conversation_archive/index.md`, and open a PR against `main`.
- `#архив_старт` entries must include a `Coverage check` section with `Coverage scope`, previous checkpoint coverage scope, full-chat marker status, gap status, what is covered and what remains outside.
- No archive entry may be treated as full-chat coverage unless it explicitly says `coverage_scope: full_chat` or equivalent. No full-chat marker = thematic coverage by default.
- Coverage types: `full_chat`, `thematic`, `partial`, `corrective`.
- If GitHub tools are unavailable for `#архив_старт`, do not save elsewhere. Output ready-to-copy markdown and state that GitHub write was not possible.
- Never save archive command output to ChatGPT memory, project memory, `knowledge/05_agent_memory/handoff/`, project-state, roadmap, working protocol or arbitrary folders.
- Do not use `#checkpoint` for semantic archive capture.

Latest conversation archive state:

- PR #138 merged `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md`.
- PR #140 fixed `#архив_старт` cumulative capture.
- PR #142 fixed explicit archive coverage scope.
- PR #143 merged `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md`.
- PR #141 was closed unmerged and must not be treated as implemented.
- No open archive PR is known after PR #143.

Known archive failure patterns:

- Bad: `#архив_старт` archives only the latest topic and leaves earlier unarchived ideas unnamed.
- Bad: assistant treats a thematic archive entry as full-chat coverage without explicit `full_chat` marker.
- Correct: `#архив_старт` first verifies previous coverage scope, then captures the cumulative unresolved semantic tail. If there is no explicit full-chat checkpoint, it must say so and mark coverage_gap.

Mass capture quarantine:

- Archive/handoff PRs created by mass-running commands across old chats are quarantine PRs until checked.
- Reject/close entries that write outside `knowledge/08_conversation_archive/chat_archives/`, duplicate state/roadmap/protocol, contain stale project state, or look like project memory/handoff instead of conversation archive.

Short command priority:

- Exact short commands must not lose to interface noise: repeated attachments, auto-loaded sources, long inserts, old non-blocking tails.
- First recognize the command, then check pending work.
- If the pending work does not block the command, name the tail briefly and execute the command.
- If the pending work may create a duplicate, skip an approval-gate or mix archive/checkpoint, ask Sergey what to do before acting.
- Formula: command must not lose to noise; tail must not be hidden by the new command.

Conversation archive — важный слой восстановления контекста:

- `knowledge/08_conversation_archive/` активен как отдельный human interaction archive.
- Это не project-state, не approval-log и не technical checkpoint.
- При вопросах Сергея о забытых идеях, противоречиях, планах, стиле взаимодействия или «что у нас дальше?» проверяй state/roadmap и `knowledge/08_conversation_archive/index.md` + relevant entries.
- Сохранять только conversation seeds, которые не отражены в architecture/state/roadmap/issue/proposal/registry.
- Не сохранять full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.
- Audit доступен: `npm run archive:audit`.

Repository hygiene:

- `npm run hygiene:audit` доступен.
- Issue #99 — Repository hygiene ledger.
- Branch cleanup остаётся cleanup_needed, не completed.

Operational protocol:

- `review_depth_protocol` активен.
- `+` — следующий grounded safe step, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее already grounded safe action, не обход approval-gates.

Proposal agents:

- workflow_conductor_agent.
- agent_registry_librarian.
- approval_gate_keeper.
- project_state_synchronizer.
- checkpoint_compressor_agent.
- source_card_builder.
- copyright_boundary_guard.
- svod_guard.
- contextologist_agent.
- sergey_interaction_profiler.
- author_style_memory_agent.
- banality_alarm_agent.
- anti_cliche_editor.

Active optional workflow layers:

- socratic_lantern_agent.
- ethical_persuasion_guard.
- cbt_thought_check_agent.
- source_intake_auditor.

Rules:

- Proposal не является activation.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов, repository hygiene, conversation archive и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Fix stale CI assertions observed on PR #131, then choose exactly one design PR: knowledge_consistency_protocol, conversation_archive_librarian, critic_margin_agent + margin_orchestra, README / architecture map, or branch protection after CI is reliable.
```

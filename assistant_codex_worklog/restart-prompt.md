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
- currentMilestone: v2.26 Corrective archive coverage and cumulative archive-start synced.
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
- Does not include ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate, AI-review bots or branch protection.

Stable conversation archive commands:

- `#архив чата` means: run latest repository capture prompt against current chat; prepare draft archive entry only; do not write to GitHub by default.
- `#архив чата сохрани` means: use GitHub tools and create a PR with archive entry + index update in `knowledge/08_conversation_archive/chat_archives/` and `knowledge/08_conversation_archive/index.md` only.
- `#архив_старт` means: write-first cumulative archive command. Immediately use GitHub tools, verify previous archive/state checkpoint and capture the full new semantic tail. Do not capture only the latest topic.
- For `#архив_старт`, create archive entries only in `knowledge/08_conversation_archive/chat_archives/`, update only `knowledge/08_conversation_archive/index.md`, and open a PR against `main`.
- `#архив_старт` entries must include `Coverage check`: coverage scope, previous checkpoint scope, full-chat marker status, gap status, what is covered and what remains outside.
- No archive entry may be treated as full-chat coverage unless it explicitly says `coverage_scope: full_chat` or equivalent. No full-chat marker = thematic coverage by default.
- If GitHub tools are unavailable for `#архив_старт`, do not save elsewhere. Output ready-to-copy markdown and state that GitHub write was not possible.
- Never save archive command output to ChatGPT memory, project memory, `knowledge/05_agent_memory/handoff/`, project-state, roadmap, working protocol or arbitrary folders.
- Do not use `#checkpoint` for semantic archive capture.

Known archive failure patterns:

- Bad: `#архив_старт` archives only the latest topic and leaves earlier unarchived ideas unnamed.
- Bad: assistant treats a thematic archive entry as full-chat coverage without explicit `full_chat` marker.
- Correct: `#архив_старт` first verifies previous coverage scope, then captures the cumulative unresolved semantic tail. If there is no explicit full-chat checkpoint, it must say so and mark coverage_gap.

Open approval-gates:

- No open PR at the moment of this state sync.
- Future PRs still require explicit `++` before merge.

Approved next order from Sergey:

1. State sync after PR #138/#140/#142/#143.
2. `knowledge_consistency_protocol`.
3. `conversation_archive_librarian` proposal.
4. `critic_margin_agent` with internal `margin_orchestra` proposal.
5. README / branch protection / future Go validator line.

Mass capture quarantine:

- Archive/handoff PRs created by mass-running commands across old chats are quarantine PRs until checked.
- Reject/close entries that write outside `knowledge/08_conversation_archive/chat_archives/`, duplicate state/roadmap/protocol, contain stale project state, lack clear `coverage_scope`, or look like project memory/handoff instead of conversation archive.

Short command priority:

- Exact short commands must not lose to interface noise: repeated attachments, auto-loaded sources, long inserts, old non-blocking tails.
- First recognize the command, then check pending work.
- If pending work does not block the command, name the tail briefly and execute the command.
- If pending work may create a duplicate, skip an approval-gate or mix archive/checkpoint, ask Sergey what to do before acting.
- Formula: command must not lose to noise; tail must not be hidden by the new command.

Conversation archive:

- `knowledge/08_conversation_archive/` is a separate human interaction archive.
- It is not project-state, approval-log or technical checkpoint.
- Check it for forgotten ideas, contradictions, plans, interaction style and what-next questions.
- Save only conversation seeds not already reflected in architecture/state/roadmap/issue/proposal/registry.
- Do not save full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.
- Audit: `npm run archive:audit`.

Repository hygiene:

- `npm run hygiene:audit` available.
- Issue #99 — Repository hygiene ledger.
- Branch cleanup remains cleanup_needed, not completed.

Operational protocol:

- `review_depth_protocol` active.
- `+` — next grounded safe step, not approval.
- `++` — approval for current clear approval-gate only.
- `+++` — nearest already grounded safe action, does not bypass approval-gates.

Proposal agents remain proposal only, not activated:

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

Правила:

- Proposal не является activation.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов, repository hygiene, conversation archive и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.
- Не внедрять runtime P2P / Redis / Postgres / Go validators без отдельного решения.
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Create `knowledge_consistency_protocol` PR, then `conversation_archive_librarian` proposal, then `critic_margin_agent` with internal `margin_orchestra` proposal. After that consider README / branch protection / future Go validator.
```

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
15. knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md
16. knowledge/07_operations/review_depth_protocol.md
17. knowledge/07_operations/repository_hygiene_protocol.md
18. knowledge/07_operations/registry_mutation_protocol.md
19. knowledge/07_operations/repository_architecture_contract.md
20. knowledge/07_operations/knowledge_consistency_protocol.md
21. knowledge/08_conversation_archive/README.md
22. knowledge/08_conversation_archive/archive_governance_protocol.md
23. knowledge/08_conversation_archive/archive_origin_protocol.md
24. knowledge/08_conversation_archive/conversation_capture_prompt.md
25. knowledge/08_conversation_archive/index.md
26. knowledge/08_conversation_archive/chat_archives/*.md
27. assistant_codex_worklog/protocol_addenda/archive_start_command.md
28. scripts/hygiene-audit.mjs
29. scripts/archive-audit.mjs
30. scripts/run-registry-sync.mjs
31. .github/workflows/registry-sync.yml
32. .github/workflows/registry-sync-request.yml
33. .github/workflows/sync-check.yml
34. .github/workflows/ci.yml
35. go-core/cmd/agent-registry-sync/main.go
36. go-core/cmd/agent-registry-sync/main_test.go
37. go-core/cmd/multi-agent-core/main.go
38. tests/baseline.test.ts
39. tests/knowledge.test.ts
40. tests/source-registry.test.ts

Актуальное состояние:

- currentVersion: v2.32.
- lastCompletedVersion: v2.32.
- lastMergedPr: PR #165 — Sync registry for conversation archive librarian.
- lastMergeCommit: 5b98794f466e9d4722eb308e590c955eb0ae771a.
- currentMilestone: v2.32 Registry sync request flow and conversation archive librarian registry synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.
- Open PRs: none before this state sync PR.
- Closed unmerged PRs that must not be treated as implemented: PR #141, PR #145, PR #152, PR #162, PR #164.

PR #158 status:

- Added `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`.
- Status: proposal only.
- Not activated, not routed, not a hard guardrail.

PR #165 status:

- Recorded `conversation_archive_librarian` in `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md` as proposal-only.
- Registry update was produced through request-driven Go-backed registry sync.
- Agent activation was not done.
- Routes were not changed.
- Runtime and book content were not changed.

Registry sync request flow:

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- The Go command can mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required fields.
- PR #165 used this flow successfully for `conversation_archive_librarian`.
- Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 was closed unmerged for that reason; PR #165 reopened the final-head branch and passed CI plus Sync Check before merge.

Repository architecture contract:

- `knowledge/07_operations/repository_architecture_contract.md` implemented in PR #131.
- GitHub `main` is current source of truth.
- Go is deterministic spine.
- TypeScript / JavaScript are orchestration, CLI, scripts and agent-facing layer.
- `scripts/` are edge automation, not a second core.
- Event envelope is future contract, not runtime implementation.
- Redis / Postgres / P2P are future runtime layers only.
- Branch protection remains not configured until explicitly verified.

Knowledge consistency protocol:

- `knowledge/07_operations/knowledge_consistency_protocol.md` implemented in PR #149.
- It defines source-of-truth hierarchy, consistency classes C0-C5, merge aftermath checks, narrow state sync PR boundary, PR body consistency contract, red-flag phrases, observed drift patterns, follow-up consistency PR conditions, CI rules, future validator relationship and exit criteria.
- Required repository checks include `npm run sync-check`.
- This is an operational protocol, not an automated validator.

Archive origin and parallel intake protocol:

- `knowledge/08_conversation_archive/archive_origin_protocol.md` implemented in PR #153.
- New archive entries require an Origin block.
- Coverage check must include `Coverage applies to`.
- `coverage_scope: full_chat` is valid only for the named target origin.
- Single-lane archive mode allows entry + index update in one PR.
- Parallel intake mode writes entry-only PRs without `index.md` update.
- If another archive PR already updates `knowledge/08_conversation_archive/index.md`, new archive PR must use parallel intake mode or wait.
- Consolidation PR updates `index.md` after merged entry-only PRs.

Conversation archive librarian:

- Proposal path: `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`.
- Registry path: `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`.
- Purpose: preserve semantic seeds without turning archive into raw memory dump.
- Handles discipline for Origin, Coverage applies to, full-chat marker, archive mode, open PR handling and raw/private content exclusions.
- Not activated.

Required repository verification layer:

- Sync Check workflow: `.github/workflows/sync-check.yml`, command `npm run sync-check`.
- CI workflow: `.github/workflows/ci.yml`.
- CI runs: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`.
- When both workflows apply, PR readiness means Sync Check + CI, not CI alone.
- PR #165 had CI + Sync Check green before merge.
- Branch protection remains not configured until explicitly verified and separately approved.

Stable conversation archive commands:

- `#архив чата` means: run the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat; prepare draft archive entry only; do not write to GitHub by default.
- `#архив чата сохрани` means: use GitHub tools and create an archive PR according to current archive mode.
- `#архив_старт` means: write-first cumulative archive command according to current archive mode.
- New archive entries must include Origin block + Coverage check.
- No archive entry may be treated as full-chat coverage unless it explicitly says `coverage_scope: full_chat` and names target in `Coverage applies to`.
- If GitHub tools are unavailable for `#архив_старт`, do not save elsewhere. Output ready-to-copy markdown and state that GitHub write was not possible.
- Never save archive command output to ChatGPT memory, project memory, `knowledge/05_agent_memory/handoff/`, project-state, roadmap, working protocol or arbitrary folders.
- Do not use `#checkpoint` for semantic archive capture.

Latest conversation archive state:

- PR #146 merged `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md` and records that no verified full-chat checkpoint exists for the current chat.
- PR #152 is closed unmerged and not implemented.
- PR #153 implemented origin / parallel intake protocol.
- PR #158 added conversation_archive_librarian proposal only.
- PR #165 recorded conversation_archive_librarian in registry only.

Known failure patterns:

- Bad: `#архив_старт` archives only the latest topic and leaves earlier unarchived ideas unnamed.
- Bad: assistant treats a thematic archive entry as full-chat coverage without explicit target.
- Bad: registry sync assumes the target agent already exists in registry.
- Correct: verify previous coverage scope, capture cumulative semantic tail, name the target origin, and run registry preflight before sync.

Short command priority:

- Exact short commands must not lose to interface noise.
- First recognize the command, then check pending work.
- If the pending work does not block the command, name the tail briefly and execute the command.
- If the pending work may create a duplicate, skip an approval-gate or mix archive/checkpoint, ask Sergey what to do before acting.

Repository hygiene:

- `npm run hygiene:audit` доступен.
- `npm run archive:audit` доступен.
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
- conversation_archive_librarian.

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

Следующий логичный шаг:

Choose the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, `critic_margin_agent` + `margin_orchestra` / second-eyes preflight design, README / architecture map, or branch protection verification.
```
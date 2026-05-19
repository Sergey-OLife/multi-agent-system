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
9. knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md
10. knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md
11. knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md
12. knowledge/07_operations/review_depth_protocol.md
13. knowledge/07_operations/registry_mutation_protocol.md
14. knowledge/07_operations/repository_architecture_contract.md
15. knowledge/07_operations/knowledge_consistency_protocol.md
16. knowledge/08_conversation_archive/README.md
17. knowledge/08_conversation_archive/archive_governance_protocol.md
18. knowledge/08_conversation_archive/archive_origin_protocol.md
19. knowledge/08_conversation_archive/conversation_capture_prompt.md
20. knowledge/08_conversation_archive/index.md
21. knowledge/08_conversation_archive/chat_archives/*.md
22. scripts/hygiene-audit.mjs
23. scripts/archive-audit.mjs
24. scripts/run-registry-sync.mjs
25. .github/workflows/registry-sync-request.yml
26. .github/workflows/sync-check.yml
27. .github/workflows/ci.yml
28. go-core/cmd/agent-registry-sync/main.go
29. go-core/cmd/agent-registry-sync/main_test.go
30. go-core/cmd/multi-agent-core/main.go

Актуальное состояние:

- currentVersion: v2.33.
- lastCompletedVersion: v2.33.
- lastMergedPr: PR #167 — Add second-eyes preflight design.
- lastMergeCommit: 22bee4a9f5e0cacfa130fd41992651c780c9a578.
- currentMilestone: v2.33 Second-eyes preflight design synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.
- Open PRs: none before this state sync PR.
- Closed unmerged PRs that must not be treated as implemented: PR #141, PR #145, PR #152, PR #162, PR #164.

PR #167 status:

- Added `knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md`.
- Added `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md`.
- Status: proposal/design only.
- `critic_margin_agent` is not activated.
- `critic_margin_agent` is not routed.
- `critic_margin_agent` is not recorded in `agent_container_registry.md` yet.
- `margin_orchestra` is not a hard guardrail and not an automated validator.

Second-eyes preflight:

- `critic_margin_agent` is the proposed second-eyes voice.
- `margin_orchestra` is the coordination pattern deciding when second-eyes preflight is required.
- Use as design reference before registry sync, activation, route changes, archive PR creation, state sync, workflow changes, checkpoint full and branch protection changes.
- This was added after the registry-sync incident where the old path assumed the target agent already existed in registry.

Registry sync request flow:

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- The Go command can mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required fields.
- PR #165 used this flow successfully for `conversation_archive_librarian`.
- Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 was closed unmerged for that reason.

Conversation archive librarian:

- Proposal path: `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`.
- Registry path: `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`.
- Not activated.

Required repository verification layer:

- Sync Check workflow: `.github/workflows/sync-check.yml`, command `npm run sync-check`.
- CI workflow: `.github/workflows/ci.yml`.
- When both workflows apply, PR readiness means Sync Check + CI, not CI alone.
- PR #167 had CI + Sync Check green before merge.
- Branch protection remains not configured until explicitly verified and separately approved.

Stable conversation archive commands:

- `#архив чата` means draft archive entry, no GitHub write by default.
- `#архив чата сохрани` means create an archive PR according to current archive mode.
- `#архив_старт` means write-first cumulative archive command according to current archive mode.
- New archive entries must include Origin block + Coverage check.
- No archive entry may be treated as full-chat coverage unless it explicitly says `coverage_scope: full_chat` and names target in `Coverage applies to`.

Operational protocol:

- `+` — next grounded safe step, not approval.
- `++` — approval for current clear approval-gate.
- `+++` — nearest already grounded safe action, does not bypass approval-gates.

Proposal agents include:

- conversation_archive_librarian.
- critic_margin_agent.

Rules:

- Proposal is not activation.
- Strict PR workflow is required for code, agents, guardrails, registries, project-state, source cards, MVP, Svod, repository hygiene, conversation archive and Shipyard Modernization.
- Do not continue the book automatically.
- Do not commit raw books, PDF/EPUB/DJVU/MOBI, raw source text, private Drive IDs/URLs.
- Do not activate hard guardrails or proposal agents without separate decision.

Следующий логичный шаг:

Choose the next Agent Shipyard item: registry sync for `critic_margin_agent`, controlled activation proposal for `conversation_archive_librarian`, hardening `margin_orchestra` into protocol/tooling, README / architecture map, or branch protection verification.
```
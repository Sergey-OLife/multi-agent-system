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

- currentVersion: v2.34.
- lastCompletedVersion: v2.34.
- lastMergedPr: PR #170 — Sync registry for critic margin agent.
- lastMergeCommit: a32983b15e8c53533f852cdb5787ae2ed614e28b.
- currentMilestone: v2.34 Critic margin agent registry synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.
- Open PRs: none before this state sync PR.
- Closed unmerged PRs that must not be treated as implemented: PR #141, PR #145, PR #152, PR #162, PR #164, PR #169.

PR #170 status:

- Recorded `critic_margin_agent` in `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md` as proposal-only.
- Registry update was produced through request-driven Go-backed registry sync.
- Agent activation was not done.
- Routes were not changed.
- Hard guardrail / validator was not created.
- Runtime and book content were not changed.

Second-eyes preflight:

- `critic_margin_agent` is now proposal + registry entry, but not activated.
- `margin_orchestra` is design-only, not hard guardrail and not automated validator.
- Use as design reference before registry sync, activation, route changes, archive PR creation, state sync, workflow changes, checkpoint full and branch protection changes.

Registry sync request flow:

- PR #160 added `.github/workflows/registry-sync-request.yml`.
- PR #161 added pull_request fallback trigger.
- PR #163 extended `go-core/cmd/agent-registry-sync/main.go` and tests with `--insert-if-missing`.
- The Go command can mutate existing agent blocks and can insert missing proposal/container blocks only with explicit `--insert-if-missing` and required fields.
- PR #165 used this flow for `conversation_archive_librarian`.
- PR #170 used this flow for `critic_margin_agent`.
- Known caveat: bot-generated registry commits may not trigger final-head CI automatically. PR #164 and PR #169 were closed unmerged for that reason.

Conversation archive librarian:

- Proposal path: `knowledge/05_agent_memory/agent_proposals/conversation_archive_librarian.md`.
- Registry path: `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`.
- Not activated.

Required repository verification layer:

- Sync Check workflow: `.github/workflows/sync-check.yml`, command `npm run sync-check`.
- CI workflow: `.github/workflows/ci.yml`.
- When both workflows apply, PR readiness means Sync Check + CI, not CI alone.
- PR #170 had CI + Sync Check green before merge.
- Branch protection remains not configured until explicitly verified and separately approved.

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

Choose the next Agent Shipyard item: controlled activation proposal for `conversation_archive_librarian`, controlled activation proposal for `critic_margin_agent`, hardening `margin_orchestra` into protocol/tooling, README / architecture map, or branch protection verification.
```
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
11. knowledge/05_agent_memory/agent_proposals/checkpoint_compressor_agent.md
12. knowledge/05_agent_memory/agent_proposals/source_card_builder.md
13. knowledge/05_agent_memory/agent_proposals/copyright_boundary_guard.md
14. knowledge/05_agent_memory/agent_proposals/svod_guard.md

Актуальное состояние:

- currentVersion: v2.11.
- lastCompletedVersion: v2.11.
- lastMergedPr: PR #94 — Add svod guard agent proposal.
- lastMergeCommit: 538a3cf937d159b7595155b2018a414ecc8620e5.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Shipyard Modernization stability gate passed.

Proposal agents now include:

- workflow_conductor_agent.
- agent_registry_librarian.
- approval_gate_keeper.
- project_state_synchronizer.
- checkpoint_compressor_agent.
- source_card_builder.
- copyright_boundary_guard.
- svod_guard.

Active optional workflow layers:

- socratic_lantern_agent.
- ethical_persuasion_guard.
- cbt_thought_check_agent.
- source_intake_auditor.

Правила:

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.

Следующий логичный шаг:

Prepare contextologist_agent proposal without activation.
```

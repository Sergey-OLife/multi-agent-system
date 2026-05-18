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
15. knowledge/05_agent_memory/agent_proposals/contextologist_agent.md

Актуальное состояние:

- currentVersion: v2.13.
- lastCompletedVersion: v2.13.
- lastMergedPr: PR #97 — Sync state after contextologist proposal.
- lastMergeCommit: 52388d39fb2d3b5e965b5718df3bccc0259857b8.
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
- contextologist_agent.

Active optional workflow layers:

- socratic_lantern_agent.
- ethical_persuasion_guard.
- cbt_thought_check_agent.
- source_intake_auditor.

Branch hygiene:

- PR #97 merged.
- Several merged/stale branches remain.
- Current GitHub tool surface has no explicit safe delete-branch operation.
- Do not use force-ref workaround.
- Clean up stale branches manually in GitHub UI or through future explicit delete-branch tool.

Правила:

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- Если после `++` PR существенно изменён — нужен новый `++`.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.

Следующий логичный шаг:

Prepare sergey_interaction_profiler proposal without activation.
```

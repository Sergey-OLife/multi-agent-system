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
16. knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md
17. knowledge/05_agent_memory/agent_proposals/author_style_memory_agent.md
18. knowledge/07_operations/review_depth_protocol.md
19. knowledge/07_operations/repository_hygiene_protocol.md
20. scripts/hygiene-audit.mjs

Актуальное состояние:

- currentVersion: v2.18.
- lastCompletedVersion: v2.18.
- lastMergedPr: PR #112 — Add author style memory agent proposal.
- lastMergeCommit: c5c3cf43951b3d32d46c5f37d994f66d941dd138.
- currentMilestone: v2.18 Author style memory proposal synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Repository hygiene:

- `npm run hygiene:audit` доступен.
- Issue #99 — Repository hygiene ledger.
- Branch cleanup остаётся cleanup_needed, не completed.
- Не использовать branch-ref workarounds.
- Не заявлять cleanup completed до фактической уборки веток и обновления issue #99.

Operational protocol:

- `review_depth_protocol` активен как operational protocol.
- L1/L2/L3 review depth.
- `+` — следующий grounded safe step, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее уже grounded safe action, не обход approval-gates.

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

Active optional workflow layers:

- socratic_lantern_agent.
- ethical_persuasion_guard.
- cbt_thought_check_agent.
- source_intake_auditor.

Правила:

- Proposal не является activation.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов, repository hygiene и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Prepare banality_alarm_agent proposal without activation, unless Sergey chooses a different agent.
```

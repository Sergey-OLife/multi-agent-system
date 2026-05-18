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
14. knowledge/07_operations/review_depth_protocol.md
15. knowledge/07_operations/repository_hygiene_protocol.md
16. knowledge/08_conversation_archive/README.md
17. knowledge/08_conversation_archive/archive_governance_protocol.md
18. knowledge/08_conversation_archive/conversation_capture_prompt.md
19. knowledge/08_conversation_archive/index.md
20. scripts/hygiene-audit.mjs
21. scripts/archive-audit.mjs
22. .github/workflows/registry-sync.yml

Актуальное состояние:

- currentVersion: v2.20.
- lastCompletedVersion: v2.20.
- lastMergedPr: PR #118 — Add conversation archive capture protocol.
- lastMergeCommit: 4f8096378daa55755690a348d455cc780dee17a9.
- currentMilestone: v2.20 Conversation archive capture protocol synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Conversation archive:

- `knowledge/08_conversation_archive/` активен как отдельный human interaction archive.
- Это не project-state, не approval-log и не technical checkpoint.
- Сохранять только conversation seeds, которые не отражены в architecture/state/roadmap/issue/proposal/registry.
- Не сохранять full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.
- Audit доступен: `npm run archive:audit`.
- Future `#checkpoint full` должен включать short checkpoint capture check: есть ли смысловые open loops, не отражённые в architecture?

Registry sync workflow:

- PR #117 добавил `.github/workflows/registry-sync.yml`.
- Использовать для PR #116 вместо ручного full replacement registry.
- PR #116 — Add anti-cliche editor proposal — blocked/draft до registry sync.

Для PR #116 workflow inputs:

- target_branch: agent-proposal-anti-cliche-editor
- agent_id: anti_cliche_editor
- proposal_path: knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md
- dry_run: true first, then false

Repository hygiene:

- `npm run hygiene:audit` доступен.
- Issue #99 — Repository hygiene ledger.
- Branch cleanup остаётся cleanup_needed, не completed.
- Не использовать branch-ref workarounds.

Operational protocol:

- `review_depth_protocol` активен.
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
- banality_alarm_agent.

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
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Use Registry Sync workflow to unblock PR #116, then check PR #116 files/mergeability/comments and remove draft only if registry sync is correct.
```

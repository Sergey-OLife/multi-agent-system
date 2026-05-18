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
18. knowledge/08_conversation_archive/README.md
19. knowledge/08_conversation_archive/archive_governance_protocol.md
20. knowledge/08_conversation_archive/conversation_capture_prompt.md
21. knowledge/08_conversation_archive/index.md
22. scripts/hygiene-audit.mjs
23. scripts/archive-audit.mjs
24. .github/workflows/registry-sync.yml

Актуальное состояние:

- currentVersion: v2.21.
- lastCompletedVersion: v2.21.
- lastMergedPr: PR #116 — Add anti-cliche editor proposal.
- lastMergeCommit: 26d77624c640d1594b2e41aeaae0643959c250b4.
- currentMilestone: v2.21 Anti-cliche editor proposal synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

PR #116:

- `anti_cliche_editor` proposal merged.
- Registry sync выполнен через Registry Sync workflow.
- `anti_cliche_editor` registry status: proposal.
- `next_action`: controlled_activation.
- `proposal_path`: knowledge/05_agent_memory/agent_proposals/anti_cliche_editor.md.
- Activation: no.
- Hard guardrail: no.

Anti-cliche editor:

- proposal only;
- не заменяет `banality_alarm_agent`, `author_style_memory_agent`, `plotnikov_motor_agent`, `one_strike_chapter_agent`, fact-check или source/copyright checks;
- главная формула: “Убрать умно звучащее пустое. Оставить точное и живое.”
- классифицирует cliche, commonplace, pseudo-depth, plastic advertising voice, moralizing, manual voice, bureaucracy, vague claims, overpolished AI tone.

Registry mutation protocol:

- `knowledge/07_operations/registry_mutation_protocol.md` active.
- Registry меняется инструментом, а не памятью ассистента.
- Нормальный путь: dry-run → apply → changed files check → точечный registry diff check.
- Manual full replacement большого registry запрещён как обычный путь.
- Если local command недоступен, использовать approved runner/workflow path.

Conversation archive:

- `knowledge/08_conversation_archive/` активен как отдельный human interaction archive.
- Это не project-state, не approval-log и не technical checkpoint.
- Сохранять только conversation seeds, которые не отражены в architecture/state/roadmap/issue/proposal/registry.
- Не сохранять full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.
- Audit доступен: `npm run archive:audit`.
- Future `#checkpoint full` должен включать short checkpoint capture check: есть ли смысловые open loops, не отражённые в architecture?

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
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Prepare `conversation_archive_librarian` proposal only, unless Sergey chooses another next agent or first asks to improve registry workflow automation.

Согласованный порядок:

1. Разблокировать PR #116 через Registry Sync workflow — done.
2. Довести anti_cliche_editor — proposal merged, not activated.
3. Потом создать conversation_archive_librarian proposal.
4. После 2–3 реальных archive entries решить, активировать ли его как optional workflow layer.
```

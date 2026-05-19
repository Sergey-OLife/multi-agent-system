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
22. knowledge/08_conversation_archive/chat_archives/*.md
23. scripts/hygiene-audit.mjs
24. scripts/archive-audit.mjs
25. .github/workflows/registry-sync.yml

Актуальное состояние:

- currentVersion: v2.23.
- lastCompletedVersion: v2.23.
- lastMergedPr: PR #126 — Archive CI baseline and command recovery.
- lastMergeCommit: 01891be8fdb45240f79c00746a5dadef9172a6a2.
- currentMilestone: v2.23 Archive command and CI baseline recovery synced.
- Текущий режим: Agent Shipyard / Agent Queue.
- Книга на паузе до отдельного решения Сергея.

Stable conversation archive command:

- `#архив чата` means: run the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat; prepare draft archive entry only; do not write to GitHub by default.
- `#архив чата сохрани` means: run the latest repository version of the same prompt and, if GitHub tools are available, create a PR with archive entry + index update.
- The short command is stable across project chats; the long prompt behind it may evolve in the repository.
- Do not use `#checkpoint` for semantic archive capture.

Short command priority:

- Exact short commands must not lose to interface noise: repeated attachments, auto-loaded sources, long inserts, old non-blocking tails.
- First recognize the command, then check pending work.
- If the pending work does not block the command, name the tail briefly and execute the command.
- If the pending work may create a duplicate, skip an approval-gate or mix archive/checkpoint, ask Sergey what to do before acting.
- Formula: command must not lose to noise; tail must not be hidden by the new command.

Conversation archive — важный слой восстановления контекста:

- `knowledge/08_conversation_archive/` активен как отдельный human interaction archive.
- Это не project-state, не approval-log и не technical checkpoint.
- При вопросах Сергея о забытых идеях, противоречиях, планах, стиле взаимодействия или «что у нас дальше?» проверяй не только state/roadmap, но и `knowledge/08_conversation_archive/index.md` + релевантные entries.
- Relevant entries:
  - `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
  - `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md`
- Сохранять только conversation seeds, которые не отражены в architecture/state/roadmap/issue/proposal/registry.
- Не сохранять full raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs.
- Audit доступен: `npm run archive:audit`.

CI baseline:

- CI baseline is archived as promising next work item, not approved implementation.
- Recommended CI V1: `typecheck`, `typecheck:test`, `test`, `test:core`, `hygiene:audit`, `archive:audit`.
- Do not add ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate or AI-review bots before baseline CI and repository contract are settled.

Repository contract risks archived:

- root `README.md` / repository architecture contract needed;
- source-of-truth map needed;
- `scripts/` boundary needed so scripts do not become a second informal core;
- `main` branch protection action item needed;
- future knowledge/protocol consistency checks needed;
- label-triggered registry sync may replace manual `workflow_dispatch` later.

These are archived risks and recommended work items, not implementation approval.

Anti-cliche editor:

- `anti_cliche_editor` proposal merged in PR #116.
- Registry status: proposal.
- `next_action`: controlled_activation.
- Activation: no.
- Hard guardrail: no.
- Главная формула: “Убрать умно звучащее пустое. Оставить точное и живое.”

Registry mutation protocol:

- `knowledge/07_operations/registry_mutation_protocol.md` active.
- Registry меняется инструментом, а не памятью ассистента.
- Manual full replacement большого registry запрещён как обычный путь.

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

Правила:

- Proposal не является activation.
- Strict PR workflow обязателен для кода, агентов, guardrails, registries, project-state, source cards, MVP, Сводов, repository hygiene, conversation archive и Shipyard Modernization.
- Не продолжать книгу автоматически.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не активировать hard guardrails или proposal agents без отдельного решения.
- Перед любым будущим `#checkpoint full` сначала выдать compact restart prompt в чат.

Следующий логичный шаг:

Prepare `Add baseline CI workflow` PR unless Sergey chooses repository architecture contract or `conversation_archive_librarian` proposal first.
```

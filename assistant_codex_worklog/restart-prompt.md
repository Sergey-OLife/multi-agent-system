# Restart Prompt — Assistant × Codex

```text
Продолжаем проект Sergey-OLife/multi-agent-system.

GitHub main — источник правды. Сначала открой README, project-state, current-state, roadmap, restart-prompt, documentation_topology, maturity_checklist, checks_overview, lifecycle_contracts_proposal, lifecycle Go package, state_sync_drift_audit_test_results_2026-05-21, scripts_core_boundary_audit_result_2026-05-21, future_ship_map_review_2026-05-21, readme_documentation_boundary_review_2026-05-21, old_architecture_tails_focused_review_2026-05-21, second_eyes_status_clarification_2026-05-21, baseline_audit_takeaways_2026-05-21, second_eyes_preflight_card_examples_2026-05-21, critic_margin_agent_activation_scope_2026-05-21, agent_queue_next_candidate_review_2026-05-21, agent_registry_librarian_activation_scope_2026-05-21, status_trust_matrix_2026-05-21, agent_registry_hygiene_pass_2026-05-21, registry_status_overlay_2026-05-21, workflow_conductor_advisory_activation_scope_2026-05-21, registry, working-protocol, protocol_addenda/mode_switch_commands, bot_reviewer_comments, archive_status_indicator, conversation archive index, margin_orchestra, margin_orchestra_manual_preflight, workflow_conductor_agent proposal, critic_margin_agent proposal, agent_registry_librarian proposal, conversation_archive_librarian proposal, conversation_archive_librarian_manual_discipline, restart_command, CI and Sync Check workflows, package.json and scripts/state-sync-drift-audit.mjs.

Актуальное состояние:

- currentVersion: v2.66.
- lastMergedPr: PR #261 — Checkpoint full after mode switch commands.
- lastMergeCommit: a29f4dec0bb7348d6d0abd1004fee21eaeb620ae.
- currentMode: Agent Shipyard / Agent Queue.
- Книга на паузе до команды `#книга` или отдельного явного mode decision.
- Mode switch commands are active protocol: `#книга`, `#агент`, `#агенты`.
- `#книга` switches conversation/workflow intent to Book/Product Mission Mode; first response should be workflow_conductor_agent advisory mission plan before writing/product design.
- `#агент` and `#агенты` switch conversation/workflow intent to Agent Shipyard / Agent Queue Mode; first response should be advisory agent-work plan.
- Mode switch commands do not change repository state, project-state, registry, agent activation, approval-gates, PR workflow, runtime, validators, hard guardrails or workflow_conductor authority by themselves.
- workflow_conductor_agent is active as advisory/manual orchestration planner only.
- workflow_conductor_agent is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch.
- workflow_conductor_agent may classify task mode, identify primary/supporting agents, propose sequence, detect conflict zones, identify approval-gates and recommend next safe step.
- conversation_archive_librarian is active as manual archive discipline only.
- critic_margin_agent is active as advisory/manual second-eyes discipline only.
- critic_margin_agent is not active as runtime/route validator, CI gate, approval authority, hard guardrail or policy engine.
- agent_registry_librarian is active as advisory/manual registry hygiene discipline only.
- agent_registry_librarian is not agent creation authority, registry mutation authority, route automation, validator, hard guardrail, workflow conductor, approval authority, runtime behavior or automatic state sync.
- status_trust_matrix_2026-05-21 is documentation-only classification aid, not automation/enforcement.
- registry_status_overlay_2026-05-21 is documentation-only explanation layer for registry lifecycle status vs operational trust status.
- margin_orchestra is active as manual second-eyes preflight pattern only.
- archive_status_indicator is active as manual archive-pressure discipline only.
- bot_reviewer_comments is active as mandatory manual PR review discipline only.
- `рестарт` is implemented as a GitHub-source-of-truth continuation command.
- Minimal GitHub Ruleset `Protect main` is active for `main` / default branch.
- Required branch-protection check contexts are documented in `knowledge/07_operations/checks_overview.md`: `TypeScript / JavaScript / Go checks` and `sync-check`.
- Local state-sync drift audit script is implemented as warning-only local diagnostic tool.
- Lifecycle contracts v1 is implemented in `go-core/lifecycle/` as a small pure Go contract vocabulary with unit tests, not enforcement.

Boundary: this repo is a GitHub-centered book/project operating system, not production multi-agent runtime, reusable public framework, or deployed agent platform. Mode switch commands are not approval and not GitHub state mutation. Local drift audit remains warning-only local diagnostic tool, not enforcement. Archive status indicator is manual discipline only. Bot reviewer comments protocol is manual discipline only. Lifecycle contracts v1 is implemented but not enforcement. Operations review notes are not implementation mandates. workflow_conductor_agent advisory/manual activation is not runtime, route automation, approval authority, registry mutation authority, project-state authority, validator, hard guardrail, policy layer, book writer or automatic mode switch. critic_margin_agent advisory/manual activation is not runtime activation. agent_registry_librarian advisory/manual activation is not registry mutation authority or workflow conductor. status trust matrix is not automation. registry status overlay is not registry mutation, activation, validator, CI check, hard guardrail, policy layer, route/runtime behavior or approval authority.

Active open loops: wait for Sergey to choose `#книга`, `#агент` or `#агенты`; durable book/product state switch only by separate Sergey decision and state sync if needed; lifecycle policy layer only by separate Sergey decision; future runtime readiness checklist only by separate Sergey decision; further second-eyes tooling or mandatory preflight only by separate Sergey decision.

Next: wait for Sergey to choose `#книга`, `#агент` or `#агенты`.
```
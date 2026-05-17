# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.4
- lastCompletedVersion: v2.4
- lastMergedPr: PR #60 — Add approval gate keeper proposal
- lastMergeCommit: e41e9aa3367d23165798b8b87b73c34fb84a9a9a
- currentMilestone: v2.4 Checkpoint Agent Shipyard architecture and first P0 proposals
- currentMode: Agent Shipyard
- bookPaused: true

## Completed versions

- v0.2 routing baseline
- v0.3 foundation agents diagnostics
- v0.4 knowledge hierarchy
- v0.5 source cards registry
- v0.6 contextologist to source registry
- v0.7 manual chapter workflow structure
- v0.8 chapter processing artifact templates
- v0.9 project resume protocol
- v1.0 Process Plotnikov preface map and sync package
- v1.1 Derive project resume diagnostics from project-state
- v1.2 Fix project-state path resolution
- v1.3 Add Russian review layer for artifacts
- v1.4 Add clickable review links
- v1.5 Add source location registry for Google Drive
- v1.6 Train anti_cliche_editor on preface review case
- v1.7 Add anti-cliche review map for chapter_00_preface
- v1.8 Apply approved anti-cliche revisions to chapter_00_preface draft
- v1.9 Create reviewed chapter_00_preface artifact
- v2.0 Checkpoint Book Fast Track workflow
- v2.1 Checkpoint project sources uploaded and Source Intake Audit ready
- v2.2 Checkpoint optional agent environment: Socratic Lantern + Ethical Persuasion
- v2.3 Checkpoint optional agent environment: CBT Thought Check + Source Intake Auditor
- v2.4 Checkpoint Agent Shipyard architecture and first P0 proposals

## Recent PRs

- PR #56 — Add chat restart prompt length limit
- PR #57 — Add workflow conductor agent proposal
- PR #58 — Add agent shipyard container registry
- PR #59 — Add agent registry librarian proposal
- PR #60 — Add approval gate keeper proposal

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until the agent shipyard is sufficiently built.
- Current active mode is Agent Shipyard.
- First build the ship, then sail: do not continue the book automatically while the current focus is agent buildout.
- Strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, context maps, agent proposals and activations.
- Raw Plotnikov text, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs and URLs are not committed to GitHub.
- Uploaded project sources are raw/source material until audited through Source Intake Audit.
- Source cards are not proof that full sources were read.
- Chat restart prompt before checkpoint full must be no more than 6000 characters with spaces; full restart-prompt.md may be longer.
- `+` means continue the next safe step, not approval.
- `++` means approval for the current clear approval-gate only.
- If a PR materially changes after `++`, a new `++` is required before merge.
- If approval-gates are multiple, ask which gate is approved.
- Allow auto-merge is enabled, but auto-merge does not bypass approval-gates.
- `socratic_lantern_agent` is active only as an optional workflow layer, not a hard guardrail.
- `ethical_persuasion_guard` is active only as an optional workflow layer, not a hard guardrail.
- `cbt_thought_check_agent` is active only as an optional workflow layer, not a hard guardrail or therapy mode.
- `source_intake_auditor` is active only as an optional workflow layer, not a hard guardrail or workflow conductor.
- `workflow_conductor_agent` is a proposal only, not activated.
- `agent_registry_librarian` is a proposal only, not activated.
- `approval_gate_keeper` is a proposal only, not activated.
- Agent architecture is Centralized Coordination + Peer-to-Peer communication.
- Materials architecture is Coordinator-based star + fully-connected semantic topology.
- Peer-to-peer signal is not a decision and does not bypass Sergey approval.
- Fully connected material topology does not bypass source intake, dosage, fact-check, copyright boundary or approval.
- New agents may be proposed whenever there is a real separate function, but duplicates and false activations must be avoided.

## Active optional workflow layers

### `socratic_lantern_agent`

- Status: active optional workflow layer
- Formula: `Вопрос — это фонарь, а не поводок`
- Not: hard guardrail, route-required mode, mandatory check for all texts

### `ethical_persuasion_guard`

- Status: active optional workflow layer
- Formula: `Оставить огонь. Убрать дым`
- Not: hard guardrail, route-required mode, anti-marketing sterilizer

### `cbt_thought_check_agent`

- Status: active optional workflow layer
- Formula: `Мысль — это не приговор. Это гипотеза, которую можно проверить`
- Not: hard guardrail, route-required mode, therapy, diagnostics, sales pressure tool
- Tone: light humor allowed, clowning forbidden

### `source_intake_auditor`

- Status: active optional workflow layer
- Formula: `Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать`
- Not: hard guardrail, route-required mode, workflow conductor, registry/project-state authority without approval

## Proposal agents

### `workflow_conductor_agent`

- Status: proposal only
- Role: coordinates agent workflow, order, conflicts and approval-gates
- Not activated

### `agent_registry_librarian`

- Status: proposal only
- Role: tracks duplicates, statuses, registry sync and false activation risk
- Not activated

### `approval_gate_keeper`

- Status: proposal only
- Role: protects `+ / ++` approval gates and prevents overbroad interpretation of approvals
- Not activated

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate `workflow_conductor_agent` without controlled activation and separate approval.
- Do not activate `agent_registry_librarian` without controlled activation and separate approval.
- Do not activate `approval_gate_keeper` without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.

## Next action

Create `project_state_synchronizer` proposal, unless Sergey chooses another agent or returns to the book explicitly.

## Manual chapter upload

- manualChapterUpload: true
- rawTextCommitted: false

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

## Source intake state

- mode: optional_layer_active
- uploadedProjectSources: true
- audited: partial
- template: knowledge/03_source_books/audits/source_intake_audit_template.md
- pilotAudit: knowledge/03_source_books/audits/pilot_source_intake_audit_01.md
- nextAuditName: Source Intake Audit: первая волна проектных источников

## Important paths

- assistant_codex_worklog/current-state.md
- assistant_codex_worklog/roadmap.md
- assistant_codex_worklog/decision-log.md
- assistant_codex_worklog/working-protocol.md
- assistant_codex_worklog/restart-prompt.md
- assistant_codex_worklog/protocol_addenda/*.md
- knowledge/00_manifest/project-state.json
- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/agent_shipyard/agent_container.template.md
- knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md
- knowledge/05_agent_memory/agent_shipyard/hybrid_coordination_model.md
- knowledge/05_agent_memory/agent_shipyard/materials_research_topology.md
- knowledge/05_agent_memory/agent_proposals/workflow_conductor_agent.md
- knowledge/05_agent_memory/agent_proposals/agent_registry_librarian.md
- knowledge/05_agent_memory/agent_proposals/approval_gate_keeper.md
- knowledge/05_agent_memory/workflow_layers/socratic_lantern_optional_layer.md
- knowledge/05_agent_memory/workflow_layers/ethical_persuasion_optional_layer.md
- knowledge/05_agent_memory/workflow_layers/cbt_thought_check_optional_layer.md
- knowledge/05_agent_memory/workflow_layers/source_intake_auditor_optional_layer.md
- knowledge/03_source_books/audits/source_intake_audit_template.md
- knowledge/03_source_books/audits/pilot_source_intake_audit_01.md
- book/01_drafts/chapter_00_preface.md
- book/02_reviewed/chapter_00_preface.md

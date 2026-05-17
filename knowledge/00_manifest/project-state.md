# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.2
- lastCompletedVersion: v2.2
- lastMergedPr: PR #45 — Add ethical persuasion optional workflow layer
- currentMilestone: v2.2 Checkpoint optional agent environment: Socratic Lantern + Ethical Persuasion

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

## Active decisions

- raw Plotnikov text is not committed to GitHub
- Plotnikov is available in private Google Drive for navigation and dosage only
- Plotnikov is uploaded manually one chapter at a time for processed artifacts
- source cards are registry-based
- private Drive file IDs and URLs are not committed to the public repository
- anti_cliche_editor must distinguish tired cliches, correct declarations, strong scene replacements, and stylish register risks
- anti_cliche review maps do not modify drafts until user approves targeted revisions
- chapter_00_preface reviewed artifact exists but approved artifact is not created yet
- Book Fast Track is the default mode for writing chapters in chat before GitHub fixation
- for book chapters, agents operate as internal editorial layers rather than separate PR artifacts for every pass
- strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, and context maps
- Source Intake Audit is required before treating newly uploaded project materials as working library sources
- project source uploads are raw/source material until audited for Drive presence, duplicates, empty shells, source cards, usage roles, allowed use, forbidden use, book zones, agent layers, and next action
- ChatGPT may create separate agents whenever project logic requires it or a new agent significantly improves work quality
- agent count is not capped; the limit is process quality, avoiding chaos, duplication, and unnecessary slowdown
- new agents that change routes, guardrails, or system behavior require explicit user approval before merge
- every new PR must pass mandatory double self-review before being given to the user as ready
- when the user must inspect a file, responses must include a clickable GitHub link to that file
- project voice uses Тихий Мастер, not Каленчевский голос
- direct internal confessional wording is not used in reader-facing book text
- approved chapters require explicit user approval
- `+` means continue the next safe step, not approval
- `++` means approval for the current clear approval-gate
- mergeability checks are automatic and do not require separate user confirmation
- restart prompt must be sent in chat before checkpoint full begins
- `socratic_lantern_agent` is active only as an optional workflow layer, not a hard guardrail
- `ethical_persuasion_guard` is active only as an optional workflow layer, not a hard guardrail
- Cialdini is used as a risk map for influence, not as a playbook for pressure
- health and Olife communication must avoid medical promises, fear, guilt, fits-all claims, and doctor replacement

## Active optional workflow layers

### `socratic_lantern_agent`

- Status: active optional workflow layer
- Formula: `Вопрос — это фонарь, а не поводок`
- Applies to: questions, dialogues, scenes of choice, mentorship, MVP forks
- Not: hard guardrail, route-required mode, mandatory check for all texts

### `ethical_persuasion_guard`

- Status: active optional workflow layer
- Formula: `Оставить огонь. Убрать дым`
- Applies to: selling texts, offers, CTA, Olife/health, urgency, authority, social proof, constructive pressure
- Preserves: persuasion, inspiration, CTA, entrepreneurial impulse, constructive pressure
- Removes: guilt, fear, fake urgency, pressure on family/health/spirituality, unchecked authority, baseless promises
- Not: hard guardrail, route-required mode, anti-marketing sterilizer

## Paused tasks

- Do not create `book/03_approved/chapter_00_preface.md` until the new chat/editorial pass explicitly reaches final approval.
- Do not start a new book PR before continuing the reader-facing preface in chat.
- Do not treat all uploaded project sources as fully audited until Source Intake Audit is completed.
- Do not activate any new hard guardrail without separate approval and PR.

## Next action

Either create `source_intake_auditor` / begin Source Intake Audit, create `cbt_thought_check_agent`, or continue reader-facing `chapter_00_preface` in chat using Book Fast Track.

## Manual chapter upload

- manualChapterUpload: true
- rawTextCommitted: false

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Continue from the first boundary of разумное сообщество toward the promise of the book: learn to distinguish where the path remains human and where a person becomes a means.

## Source intake state

- mode: ready_for_first_wave_audit
- uploadedProjectSources: true
- audited: partial
- nextAuditName: Source Intake Audit: первая волна проектных источников

Completed targeted notes:

- `waltman_codd_socratic_questioning_note_01`
- `farnsworth_socratic_method_note_01`
- `overholser_socratic_psychotherapy_note_01`
- `cialdini_influence_note_01`

Candidate agents:

- source_intake_auditor
- cbt_thought_check_agent
- emotion_compass_agent
- gameful_path_designer

## Important paths

- assistant_codex_worklog/current-state.md
- assistant_codex_worklog/roadmap.md
- assistant_codex_worklog/decision-log.md
- assistant_codex_worklog/working-protocol.md
- assistant_codex_worklog/restart-prompt.md
- assistant_codex_worklog/protocol_addenda/*.md
- knowledge/00_manifest/project-state.json
- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/handoff/latest-handoff.md
- knowledge/00_manifest/sources.registry.json
- knowledge/03_source_books/source-locations.registry.json
- knowledge/03_source_books/source-location.template.md
- knowledge/05_agent_memory/workflow_layers/socratic_lantern_optional_layer.md
- knowledge/05_agent_memory/workflow_layers/ethical_persuasion_optional_layer.md
- knowledge/05_agent_memory/agent_proposals/socratic_lantern_agent.md
- knowledge/05_agent_memory/agent_proposals/ethical_persuasion_guard.md
- knowledge/03_source_books/targeted_reading_notes/cialdini_influence_note_01.md
- knowledge/03_source_books/audits/ethical_persuasion_medical_caution_audit_01.md
- tests/baseline.test.ts
- book/01_drafts/chapter_00_preface.md
- book/02_reviewed/chapter_00_preface.md
- knowledge/05_agent_memory/review_queue/review-index.md

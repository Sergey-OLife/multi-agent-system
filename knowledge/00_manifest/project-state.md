# Project State

This file is the human-readable mirror of `knowledge/00_manifest/project-state.json`, which is the machine-readable single source of truth for project resume diagnostics. Use these project-state files before relying on prior conversation memory.

## Current version

- currentVersion: v2.4
- lastCompletedVersion: v2.4
- lastMergedPr: PR #69 — Add import boundaries and public module entrypoints
- lastMergeCommit: 087c28f6b48464365110ab643542c9eaa985d5af
- currentMilestone: v2.4 Shipyard Modernization after import boundaries enforcement
- currentMode: Agent Shipyard / Shipyard Modernization
- bookPaused: true

## Recent PRs

- PR #65 — Split TypeScript domain and engine layers
- PR #66 — Add Go core API contract
- PR #67 — Extract agent context and diagnostics modules
- PR #68 — Sync state after shipyard modernization PRs
- PR #69 — Add import boundaries and public module entrypoints

## Shipyard Modernization status

Состояние после PR #69:

- TypeScript incremental builds включены.
- Введены слои `domain / engine / diagnostics / orchestration`.
- Зафиксирован Go-core API contract: CLI + JSON stdin/stdout.
- Из `agents.ts` вынесены `context-pack`, `svod-check`, `sync-map`, `anti-cliche diagnostics`.
- `context-pack` перенесён из `engine` в `orchestration`, потому что зависит от `source-registry`.
- Добавлены public module entrypoints для `domain`, `engine`, `diagnostics`, `orchestration`.
- Import boundaries закреплены через `scripts/check-boundaries.mjs` и `npm run lint:boundaries`.
- `npm test` теперь запускает boundary check перед build/tests.

## Active decisions

- GitHub is the source of truth for project state.
- Book Fast Track remains the writing mode for book chapters, but the book is currently paused until the agent shipyard is sufficiently built.
- Current active mode is Agent Shipyard with a temporary Shipyard Modernization subfocus.
- First build the ship, then sail: do not continue the book automatically while the current focus is agent buildout or shipyard modernization.
- Strict PR workflow remains required for code, agent logic, guardrails, registries, tests, project-state, source cards, training cases, Svod, MVP, context maps, agent proposals and activations.
- Shipyard Modernization improves the TypeScript stack first, then introduces Go only behind a clear JSON boundary where it gives a real benefit.
- Go is accepted as the future core language candidate for heavy repeatable shipyard checks, not as an immediate full rewrite.
- TypeScript incremental builds are enabled through tsconfig incremental and tsBuildInfoFile.
- TypeScript domain and engine layers have been introduced while compatibility entrypoints remain.
- Go-core API contract is fixed as CLI plus JSON stdin/stdout before any Go runtime code is added.
- `agents.ts` should remain a registry assembly point, not a dumping ground for context and diagnostics logic.
- Public module entrypoints now define layer access for domain, engine, diagnostics and orchestration.
- `context-pack` belongs to orchestration, not core-like engine, because it depends on source registry.
- Import boundaries are enforced by `scripts/check-boundaries.mjs` and `npm test`.
- Protected layers must not import filesystem, child process, registry/state, integrations or direct adapter side effects outside their allowed boundary.
- Raw Plotnikov text, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs and URLs are not committed to GitHub.
- Uploaded project sources are raw/source material until audited through Source Intake Audit.
- Source cards are not proof that full sources were read.
- Chat restart prompt before checkpoint full must be no more than 6000 characters with spaces; full restart-prompt.md may be longer.
- `+` means continue the next safe step, not approval.
- `++` means approval for the current clear approval-gate only.
- If a PR materially changes after `++`, a new `++` is required before merge.
- If approval-gates are multiple, ask which gate is approved.
- Allow auto-merge is enabled, but auto-merge does not bypass approval-gates.
- Proposal agents remain proposal only, not activated.
- Active optional workflow layers remain optional only, not hard guardrails.

## Proposal agents

- `workflow_conductor_agent`: proposal only, not activated.
- `agent_registry_librarian`: proposal only, not activated.
- `approval_gate_keeper`: proposal only, not activated.
- `project_state_synchronizer`: proposal only, not activated.

## Active optional workflow layers

- `socratic_lantern_agent` — active optional workflow layer.
- `ethical_persuasion_guard` — active optional workflow layer.
- `cbt_thought_check_agent` — active optional workflow layer; not therapy, not diagnostics, not sales pressure tool.
- `source_intake_auditor` — active optional workflow layer; not workflow conductor.

## Paused tasks

- Do not continue the book automatically while current mode is Agent Shipyard or Shipyard Modernization.
- Do not create `book/03_approved/chapter_00_preface.md` until final approval.
- Do not treat all uploaded project sources as fully audited.
- Do not activate proposal agents without controlled activation and separate approval.
- Do not create hard guardrails without separate approval and PR.
- Do not return to the agent proposal queue until Sergey redirects or the current modernization segment is checkpointed.

## Next action

Split `tsconfig` into base/build/test configs now that TypeScript layer boundaries and import enforcement are in place. After that, create the first minimal Go-core `sync-check` CLI using the accepted core API contract.

## Chat writing state

- chapterId: chapter_00_preface
- mode: Book Fast Track paused
- readerTitle: От автора: перед входом
- acceptedOpening: Эта книга не обещает чудо — она даёт карту. И начинается с отказа.
- acceptedFinanceLine: Она не обещает, что вы быстро решите финансовые вопросы.
- acceptedTrustLine: В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.
- currentRule: Введение — морковка: сначала человек, узнавание и доверие; инструменты, термины и кухня MLM позже.
- nextChatMove: Only after Sergey returns to the book: continue from the first boundary of разумное сообщество toward the promise of the book.

## Important paths

- assistant_codex_worklog/current-state.md
- assistant_codex_worklog/roadmap.md
- assistant_codex_worklog/decision-log.md
- assistant_codex_worklog/working-protocol.md
- assistant_codex_worklog/restart-prompt.md
- assistant_codex_worklog/protocol_addenda/*.md
- knowledge/00_manifest/project-state.json
- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/shipyard_modernization/core_api_contract.md
- knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md
- knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md
- tsconfig.json
- package.json
- scripts/check-boundaries.mjs
- src/domain/index.ts
- src/domain/types.ts
- src/engine/index.ts
- src/engine/classify-task.ts
- src/engine/route-request.ts
- src/engine/routes.ts
- src/engine/text-utils.ts
- src/diagnostics/index.ts
- src/diagnostics/anti-cliche.ts
- src/diagnostics/svod-check.ts
- src/diagnostics/sync-map.ts
- src/orchestration/index.ts
- src/orchestration/context-pack.ts
- src/router.ts
- src/agents.ts
- book/01_drafts/chapter_00_preface.md
- book/02_reviewed/chapter_00_preface.md

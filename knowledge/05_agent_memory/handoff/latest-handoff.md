# Latest Handoff

Use this handoff when a new chat or Codex session starts without access to prior dialogue memory.

## Resume protocol

1. Run the project resume route with `resume project` or `восстанови проект`.
2. Read `diagnostics.projectResume` as the authoritative state snapshot.
3. Confirm that raw Plotnikov text remains outside GitHub.
4. Continue from `nextAction` unless the user explicitly changes priority.

## Current state snapshot

- currentVersion: v0.9
- lastCompletedVersion: v0.8
- lastMergedPr: PR #7 — v0.8 Add chapter processing artifact templates
- currentMilestone: v0.9 Add project resume protocol
- nextAction: v1.0 Process first Plotnikov chapter
- manualChapterUpload: true
- rawTextCommitted: false

## Important paths

- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/handoff/latest-handoff.md
- knowledge/00_manifest/sources.registry.json
- book/00_manifest/chapter-status.example.json
- knowledge/03_source_books/plotnikov/source-location.md

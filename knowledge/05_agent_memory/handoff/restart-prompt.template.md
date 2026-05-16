# Restart Prompt Template

Paste this into a new chat or Codex session to restore project context from committed state files instead of relying on old dialogue memory.

```text
Работай от main.

Восстанови состояние проекта по файлам, не по памяти старого диалога.

Сначала проверь:
- knowledge/00_manifest/project-state.md
- knowledge/05_agent_memory/handoff/latest-handoff.md
- knowledge/00_manifest/sources.registry.json
- book/00_manifest/chapter-status.example.json
- knowledge/03_source_books/plotnikov/source-location.md

Затем запусти project_resume route через запрос:
resume project

Подтверди:
- currentVersion: v0.9
- lastCompletedVersion: v0.8
- lastMergedPr: PR #7 — v0.8 Add chapter processing artifact templates
- currentMilestone: v0.9 Add project resume protocol
- nextAction: v1.0 Process first Plotnikov chapter
- currentVersion
- lastCompletedVersion
- lastMergedPr
- currentMilestone
- completedVersions
- activeDecisions
- pausedTasks
- nextAction
- manualChapterUpload
- rawTextCommitted
- importantPaths

Не пересоздавай проект.
Не удаляй baseline.
Не добавляй raw books.
Не меняй FinalResult contract без необходимости.
Продолжай с nextAction, если пользователь не дал другую задачу.
```

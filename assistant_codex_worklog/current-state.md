# Current State — Assistant × Codex

Дата фиксации: 2026-05-19

## Текущая рабочая точка

Проект остаётся в режиме:

> `Agent Shipyard / Agent Queue`

Книга на паузе до отдельного решения Сергея.

## Последний смерженный PR

- PR #155 — Sync state after closing PR #152
- Статус: merged
- Merge commit: `63f22f8300aa2bb5313383890fdd03a1c5d049b8`

## Текущая версия

- currentVersion: v2.30
- currentMilestone: Archive origin and parallel intake protocol synced

## Открытые approval-gates

- No open PRs.

## Закрытые unmerged PRs, которые нельзя считать implemented

- PR #141 — closed unmerged after coverage-scope fix.
- PR #145 — closed unmerged because it was thematic and did not verify full-chat checkpoint status.
- PR #152 — Archive Khmelevskaya style optic and command correction, closed unmerged after PR #153 made Origin / Coverage applies to discipline mandatory.

## Что зафиксировал PR #153

Добавлен archive protocol:

- `knowledge/08_conversation_archive/archive_origin_protocol.md`

Обновлены:

- `knowledge/08_conversation_archive/README.md`
- `knowledge/08_conversation_archive/conversation_capture_prompt.md`
- `assistant_codex_worklog/protocol_addenda/archive_start_command.md`
- `assistant_codex_worklog/restart-prompt.md`

Зафиксировано:

- new archive entries require an `Origin` block;
- `coverage_scope: full_chat` requires a target in `Coverage applies to`;
- full-chat coverage without origin target is invalid;
- single-lane archive mode allows entry + index update in one PR;
- parallel intake mode writes only entry file and does not update `index.md`;
- if another archive PR already updates `index.md`, new archive PR must use parallel intake mode or wait;
- index consolidation after parallel entry-only PRs is a separate PR;
- future archive audit should check Origin, Coverage applies to and no index update in parallel mode.

## Что зафиксировал PR #154

PR #154 synchronized state/worklog/restart files after PR #153.

Обновлены только:

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`

## Что произошло с PR #152

PR #152 был закрыт без merge.

Причина:

- PR #152 создан до PR #153.
- В нём есть Coverage check, но нет обязательного теперь Origin block.
- В нём нет `Coverage applies to`.
- Он напрямую обновлял общий `knowledge/08_conversation_archive/index.md` по старой дисциплине.

Материал PR #152 не считается потерянным, но если нужен позже, его нужно пересобрать новым archive PR по протоколу PR #153.

## Что зафиксировал PR #155

PR #155 synchronized state/worklog/restart files after PR #152 was closed unmerged.

Он зафиксировал:

- no open PRs;
- PR #152 closed unmerged, not implemented;
- next action: `conversation_archive_librarian` design PR.

PR #155 не создавал archive entry, не обновлял `index.md`, не активировал агентов, не менял runtime-код и не продолжал книгу.

## Что уже было зафиксировано раньше

- PR #131 — repository architecture contract.
- PR #136 — `#архив_старт` write-first command.
- PR #140 — `#архив_старт` cumulative, not last-topic-only.
- PR #142 — explicit coverage scope discipline.
- PR #146 — current-chat full-chat checkpoint is missing; this is coverage gap, not full-chat coverage.
- PR #147 — stale CI assertions fixed; baseline CI green.
- PR #149 — knowledge consistency protocol.
- PR #150 — state sync after knowledge consistency protocol.
- PR #151 — checkpoint full after knowledge consistency state sync.

## Conversation archive commands

```text
#архив чата
#архив чата сохрани
#архив_старт
```

Current archive rules:

- Origin block is required for new archive entries.
- Coverage check must include `Coverage applies to`.
- `coverage_scope: full_chat` is valid only for the named target origin.
- Parallel archive PRs must not update `knowledge/08_conversation_archive/index.md`.
- Open PR is not implemented.

## Baseline CI and Sync Check

- `.github/workflows/ci.yml` implemented.
- `.github/workflows/sync-check.yml` implemented.
- Required PR verification layer includes both Sync Check and CI when both workflows apply.
- Branch protection: not configured.
- PR #155 had CI and Sync Check green before merge.

## Repository hygiene

```bash
npm run hygiene:audit
npm run archive:audit
```

Branch cleanup остаётся `cleanup_needed`, не `completed`.

## Standing agent status

Proposal only, not activated:

- `workflow_conductor_agent`
- `agent_registry_librarian`
- `approval_gate_keeper`
- `project_state_synchronizer`
- `checkpoint_compressor_agent`
- `source_card_builder`
- `copyright_boundary_guard`
- `svod_guard`
- `contextologist_agent`
- `sergey_interaction_profiler`
- `author_style_memory_agent`
- `banality_alarm_agent`
- `anti_cliche_editor`

Active optional workflow layers:

- `socratic_lantern_agent`
- `ethical_persuasion_guard`
- `cbt_thought_check_agent`
- `source_intake_auditor`

## Следующий безопасный шаг

Create `conversation_archive_librarian` as the next design PR, now that PR #155 synced state after closing PR #152 and there are no open PRs.

## Что временно не делаем

- Не продолжаем книгу автоматически.
- Не активируем proposal agents без controlled activation and separate approval.
- Не коммитим raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не считаем branch protection настроенным без отдельной проверки.
- Не считаем PR #141, PR #145 or closed-unmerged PR #152 implemented.
- Не считаем PR #146 full-chat coverage: он explicitly records a missing full-chat checkpoint.
- Не обновляем `index.md` в parallel archive PR.

## Короткие команды

- `+` — следующий безопасный шаг, не approval.
- `++` — approval текущего понятного approval-gate.
- `+++` — ближайшее grounded safe action, не обход approval-gates.
- `#архив чата` — draft archive entry, без записи в GitHub.
- `#архив чата сохрани` — archive PR according to single-lane or parallel intake mode.
- `#архив_старт` — write-first GitHub archive PR according to current archive mode.

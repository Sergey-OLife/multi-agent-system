# Conversation Archive Index

Статус: navigation_index

Этот файл не дублирует archive entries. Он помогает быстро увидеть, что лежит в архиве, что уже реализовано, что устарело и какие хвосты ещё открыты.

| Date | Entry | Status | Review date | Tags | Implemented elsewhere | Open loop |
|---|---|---|---|---|---|---|
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_lost-dialogue-and-idea-archive.md` | not_relevant_now | 2026-06-01 | style, open_loop, failure_pattern, archive_protocol | PR #118 | historical only; not active for current Agent Shipyard path |
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md` | implemented_elsewhere | 2026-06-01 | agent_shipyard, repository_hygiene, architecture_contract, failure_pattern | partial / PR #117, PR #118, PR #120, project-state v2.25 | closed: architecture contract path moved into later architecture/state work |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, repository_hygiene, failure_pattern, ci, command_protocol | partial / PR #124, PR #125, project-state v2.24+ | closed: baseline CI and state-sync path later stabilized |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, repository_hygiene, architecture_contract, ci, branch_protection, failure_pattern | partial / PR #129, PR #131, PR #136, PR #198-#201 | closed: branch protection and required checks are documented in later operations records |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, critic_margin_agent, margin_orchestra, archive_protocol, knowledge_consistency, architecture, corrective | partial / PR #138, PR #140, PR #142, project-state v2.28+ | closed: superseded/corrective path moved into later state/protocol/manual discipline work |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md` | not_relevant_now | 2026-06-02 | archive_protocol, coverage_gap, full_chat_missing, failure_pattern, state_sync, ci, roadmap | partial / PR #140, PR #142, PR #143, PR #144 | historical coverage warning only; no current action unless doing archive audit |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_current-chat-origin-protocol-and-state-tail.md` | implemented_elsewhere | 2026-06-02 | archive_protocol, origin_protocol, state_sync, failure_pattern, command_protocol, agent_shipyard | partial / PR #153, PR #154, PR #155-open, project-state v2.30-v2.32 | closed: conversation_archive_librarian and origin protocol path later implemented/synced |
| 2026-05-20 | `knowledge/08_conversation_archive/chat_archives/2026-05-20_restart-command-and-ship-metaphor.md` | implemented_elsewhere | 2026-06-03 | agent_shipyard, command_protocol, checkpoint, restart, archive_protocol, metaphor, failure_pattern | partial / PR #188, PR #189, PR #192, PR #194 | closed: checkpoint/restart/margin_orchestra path later implemented/synced |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_current-shipyard-ruleset-and-drift-detector.md` | needs_decision | 2026-06-04 | agent_shipyard, branch_protection, checks, state_sync, drift_detector, architecture_review, archive_protocol, implementation_proposal | partial / PR #198-#206, PR #208, PR #212 | active only for `Карта будущего корабля` review; script implementation/test path closed |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_local-drift-audit-and-archive-cadence.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, state_sync, drift_detector, local_tooling, archive_protocol, archive_cadence | partial / PR #208-#209, PR #212, PR #214 | closed: script test results and archive status protocol recorded |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_yellow-three-rule-and-post-210-archive.md` | implemented_elsewhere | 2026-06-04 | archive_protocol, archive_cadence, status_indicator, agent_shipyard, drift_detector | partial / PR #210, PR #214 | closed: `yellow_3` rule formalized in protocol addendum |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_delta-only-archive-discipline.md` | implemented_elsewhere | 2026-06-04 | archive_protocol, archive_cadence, delta_archive, cleanup, agent_shipyard | partial / PR #212, PR #214 | closed: delta-only archive discipline formalized; cleanup pass captured in this index update |

## Current active archive-level open loops

- `Карта будущего корабля` review: classify external assessment points as `already fixed`, `true but future`, `useful now`, or `not appropriate`.
- Future runtime readiness checklist: only by separate Sergey decision.
- Scripts/core boundary audit: only if needed after selected next work.

## Status legend

- `draft_archive_entry` — новая запись, ещё не проверена временем.
- `promising` — мысль стоит развивать.
- `needs_decision` — нужен отдельный выбор Сергея.
- `implemented_elsewhere` — содержание перенесено в более сильный artifact; здесь оставить только ссылку.
- `long_lived_observation` — наблюдение о стиле, противоречии или проектной логике, которое стоит хранить дольше 14 дней.
- `stale` — запись устарела и может быть закрыта.
- `superseded` — заменена более точным документом.
- `not_relevant_now` — верно, но не активно для текущего рабочего сегмента.
- `closed` — resolved and no longer needs attention.

## Cleanup rule

Если запись старше 14 дней и не имеет статуса `long_lived_observation`, `needs_decision` или `implemented_elsewhere`, её нужно пересмотреть.

Пересмотр не означает автоматическое удаление. Возможные действия:

- оставить;
- сократить;
- перенести в issue/proposal/state;
- отметить `implemented_elsewhere`;
- отметить `stale`;
- отметить `superseded`;
- отметить `not_relevant_now`;
- отметить `closed`;
- удалить отдельным cleanup PR.

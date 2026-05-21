# Conversation Archive Index

Статус: navigation_index

Этот файл не дублирует archive entries. Он помогает быстро увидеть, что лежит в архиве, что уже реализовано, что устарело и какие хвосты ещё открыты.

| Date | Entry | Status | Review date | Tags | Implemented elsewhere | Open loop |
|---|---|---|---|---|---|---|
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_lost-dialogue-and-idea-archive.md` | draft_archive_entry | 2026-06-01 | style, open_loop, failure_pattern, archive_protocol | PR #118 | first real external-chat capture still needed |
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md` | draft_archive_entry | 2026-06-01 | agent_shipyard, repository_hygiene, open_loop, architecture_contract, failure_pattern | partial / PR #117, PR #118, PR #120 | decide repository architecture contract PR |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md` | draft_archive_entry | 2026-06-02 | agent_shipyard, repository_hygiene, open_loop, failure_pattern, ci, command_protocol | partial / PR #124, PR #125, project-state v2.22 pending sync | state sync after PR #124/#125, then decide baseline CI workflow |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md` | draft_archive_entry | 2026-06-02 | agent_shipyard, repository_hygiene, architecture_contract, open_loop, ci, branch_protection, failure_pattern | partial / PR #129, PR #131, PR #136, project-state v2.25 | check CI observation, then decide README / branch protection / protocol consistency checks |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md` | draft_archive_entry | 2026-06-02 | agent_shipyard, critic_margin_agent, margin_orchestra, archive_protocol, knowledge_consistency, open_loop, architecture, failure_pattern, corrective | partial / PR #138, PR #140, PR #142, project-state v2.25 pending state sync | close PR #141 as superseded, state sync, then choose critic proposal / archive librarian / knowledge consistency protocol |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md` | draft_archive_entry | 2026-06-02 | archive_protocol, coverage_gap, full_chat_missing, failure_pattern, state_sync, ci, roadmap | partial / PR #140, PR #142, PR #143, PR #144 | decide whether to create best-effort full_chat checkpoint from available context |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_current-chat-origin-protocol-and-state-tail.md` | draft_archive_entry | 2026-06-02 | archive_protocol, origin_protocol, state_sync, open_loop, failure_pattern, command_protocol, agent_shipyard | partial / PR #153, PR #154, PR #155-open | resolve PR #155, then create conversation_archive_librarian |
| 2026-05-20 | `knowledge/08_conversation_archive/chat_archives/2026-05-20_restart-command-and-ship-metaphor.md` | draft_archive_entry | 2026-06-03 | agent_shipyard, command_protocol, checkpoint, restart, archive_protocol, metaphor, open_loop, failure_pattern | partial / PR #188, PR #189 | full checkpoint, restart command protocol, then margin_orchestra |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_current-shipyard-ruleset-and-drift-detector.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, branch_protection, checks, state_sync, drift_detector, architecture_review, archive_protocol, implementation_proposal | partial / PR #198-#206 | implement warning-only local script only after separate decision; return to `Карта будущего корабля` review |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_local-drift-audit-and-archive-cadence.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, state_sync, drift_detector, local_tooling, archive_protocol, archive_cadence | partial / PR #208-#209 | test local drift audit script; decide whether to formalize archive status indicator |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_yellow-three-rule-and-post-210-archive.md` | draft_archive_entry | 2026-06-04 | archive_protocol, archive_cadence, status_indicator, agent_shipyard, drift_detector | partial / PR #210 | test local drift audit script; consider protocol addendum for yellow_3 rule |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_delta-only-archive-discipline.md` | draft_archive_entry | 2026-06-04 | archive_protocol, archive_cadence, delta_archive, cleanup, agent_shipyard | partial / PR #212 | add protocol addendum for yellow_3 and delta-only archive discipline; later cleanup stale archive loops |

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

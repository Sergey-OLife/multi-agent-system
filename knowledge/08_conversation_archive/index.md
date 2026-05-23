# Conversation Archive Index

Статус: navigation_index

Этот файл не дублирует archive entries. Он помогает быстро увидеть, что лежит в архиве, что уже реализовано, что устарело и какие хвосты ещё открыты.

Cleanup rule is conservative: age alone is not a deletion signal. Старые хвосты могут быть ценным отложенным материалом. Статус `implemented_elsewhere` ставится только там, где есть конкретное место реализации. Если конкретного места реализации нет, запись сохраняется как `needs_decision`, `long_lived_observation` или `not_relevant_now`, но не считается мусором.

| Date | Entry | Status | Review date | Tags | Implemented elsewhere | Open loop |
|---|---|---|---|---|---|---|
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_lost-dialogue-and-idea-archive.md` | long_lived_observation | 2026-06-01 | style, open_loop, failure_pattern, archive_protocol | PR #118 | preserved: old but potentially useful failure-pattern material; not active unless external-chat capture resumes |
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md` | implemented_elsewhere | 2026-06-01 | agent_shipyard, repository_hygiene, open_loop, architecture_contract, failure_pattern | PR #117, PR #118, PR #120, `knowledge/07_operations/repository_architecture_contract.md`, PR #235, PR #237, `knowledge/07_operations/old_architecture_tails_focused_review_2026-05-21.md` | closed for current navigation: repository contract, README boundary and scripts/core boundary are now concretely recorded |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_ci-baseline-and-short-command-recovery.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, repository_hygiene, open_loop, failure_pattern, ci, command_protocol | partial / PR #124, PR #125, project-state v2.24+ | closed: baseline CI / command recovery path has concrete later implementation and state references |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_red-flags-after-architecture-contract.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, repository_hygiene, architecture_contract, open_loop, ci, branch_protection, failure_pattern | partial / PR #129, PR #131, PR #136, PR #198-#201 | closed for current navigation: branch protection and required checks now have concrete operations records |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-margin-orchestra-and-consistency.md` | implemented_elsewhere | 2026-06-02 | agent_shipyard, critic_margin_agent, margin_orchestra, archive_protocol, knowledge_consistency, open_loop, architecture, failure_pattern, corrective | PR #138, PR #140, PR #142, `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md`, `knowledge/05_agent_memory/agent_shipyard/margin_orchestra.md`, `assistant_codex_worklog/protocol_addenda/margin_orchestra_manual_preflight.md`, `knowledge/07_operations/old_architecture_tails_focused_review_2026-05-21.md` | closed for current navigation: archive coverage semantics and second-eyes manual discipline are now concretely recorded |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md` | long_lived_observation | 2026-06-02 | archive_protocol, coverage_gap, full_chat_missing, failure_pattern, state_sync, ci, roadmap | partial / PR #140, PR #142, PR #143, PR #144 | preserved: old coverage warning remains useful as archive-quality caution; no current action unless doing archive audit |
| 2026-05-19 | `knowledge/08_conversation_archive/chat_archives/2026-05-19_current-chat-origin-protocol-and-state-tail.md` | implemented_elsewhere | 2026-06-02 | archive_protocol, origin_protocol, state_sync, open_loop, failure_pattern, command_protocol, agent_shipyard | partial / PR #153, PR #154, PR #155-open, project-state v2.30-v2.32 | closed for current navigation: conversation archive origin/protocol path later implemented/synced |
| 2026-05-20 | `knowledge/08_conversation_archive/chat_archives/2026-05-20_restart-command-and-ship-metaphor.md` | implemented_elsewhere | 2026-06-03 | agent_shipyard, command_protocol, checkpoint, restart, archive_protocol, metaphor, open_loop, failure_pattern | partial / PR #188, PR #189, PR #192, PR #194 | closed for current navigation: restart command and margin_orchestra paths have concrete later implementation/sync |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_current-shipyard-ruleset-and-drift-detector.md` | needs_decision | 2026-06-04 | agent_shipyard, branch_protection, checks, state_sync, drift_detector, architecture_review, archive_protocol, implementation_proposal | partial / PR #198-#206, PR #208, PR #212 | active: remaining value mostly future runtime readiness / architecture-contract review; script implementation/test path is closed |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_local-drift-audit-and-archive-cadence.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, state_sync, drift_detector, local_tooling, archive_protocol, archive_cadence | partial / PR #208-#209, PR #212, PR #214 | closed: script test results and archive status protocol are recorded in concrete files/PRs |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_yellow-three-rule-and-post-210-archive.md` | implemented_elsewhere | 2026-06-04 | archive_protocol, archive_cadence, status_indicator, agent_shipyard, drift_detector | partial / PR #210, PR #214 | closed: `yellow_3` rule is formalized in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md` |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_delta-only-archive-discipline.md` | implemented_elsewhere | 2026-06-04 | archive_protocol, archive_cadence, delta_archive, cleanup, agent_shipyard | partial / PR #212, PR #214 | closed: delta-only archive discipline is formalized in `assistant_codex_worklog/protocol_addenda/archive_status_indicator.md` |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_state-sync-and-conservative-archive-cleanup.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, state_sync, archive_protocol, archive_index, conservative_cleanup | partial / PR #216, PR #217 | after merge: conversation mode; no new technical work unless selected |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_lifecycle-proposal-and-state-sync-pr.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, lifecycle_contracts, external_audit, state_sync, archive_protocol | PR #219, PR #220, PR #221 | closed: PR #220 merged after archive; lifecycle code still requires separate decision |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_final-lifecycle-state-sync-closure.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, lifecycle_contracts, state_sync, archive_protocol, closure | PR #219, PR #220, PR #221 | after merge: discussion/refinement mode; no open PRs expected |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_lifecycle-v1-implementation-blocked-merge.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, lifecycle_contracts, implementation, blocked_merge, archive_protocol | PR #223, PR #224 | closed: PR #223 and PR #224 merged manually |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_lifecycle-v1-state-sync-pr.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, lifecycle_contracts, state_sync, archive_protocol | PR #223, PR #224, PR #225, PR #226 | closed: PR #225 and PR #226 merged |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_final-lifecycle-v1-state-sync-closure.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, lifecycle_contracts, state_sync, archive_protocol, closure | PR #223, PR #225, PR #226 | after merge: lifecycle v1 implementation/state-sync/archive arc closed; choose next work explicitly |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_bot-reviewer-protocol-and-scripts-scope.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, pr_workflow, bot_comments, scripts_core_boundary, archive_protocol | PR #228, PR #229, PR #230 | closed: PR #228, PR #229 and PR #230 merged |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_bot-reviewer-addendum-registered.md` | implemented_elsewhere | 2026-06-04 | agent_shipyard, pr_workflow, bot_comments, archive_protocol, closure | PR #229, PR #230, PR #231, PR #233, PR #234 | closed: bot reviewer comments protocol registration/state-sync/checkpoint arc closed through v2.57 |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_readme-boundary-and-operations-review-closure.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, state_sync, documentation_topology, operations_review, checkpoint, archive_protocol | PR #231, PR #233, PR #234, PR #235, PR #236, PR #237, PR #238, PR #239 | after merge: visible segment archived; next work must be chosen explicitly from v2.59 state |
| 2026-05-21 | `knowledge/08_conversation_archive/chat_archives/2026-05-21_agent-queue-and-status-trust-closure.md` | draft_archive_entry | 2026-06-04 | agent_shipyard, agent_queue, second_eyes, registry_hygiene, external_audit, status_trust, state_sync, archive_protocol | PR #241, PR #242, PR #243, PR #244, PR #245, PR #246, PR #247, PR #248, PR #249, PR #250, PR #251, PR #252 | after merge: segment archived; choose next direction explicitly from v2.62 state |
| 2026-05-23 | `knowledge/08_conversation_archive/chat_archives/2026-05-23_book-agent-and-writing-stack-recalibration.md` | draft_archive_entry | 2026-06-06 | agent_shipyard, book_agent, portable_workspace, mode_commands, failure_pattern, writing_stack, book_quality | PR #257-#264 | open loops: decide whether to create operations notes for Book Agent portable workspace and one-voice-first writing stack recalibration |
| 2026-05-23 | `knowledge/08_conversation_archive/chat_archives/2026-05-23_hundred-mutations-and-archive-reading-discipline.md` | draft_archive_entry | 2026-06-06 | book_system, archive_protocol, failure_pattern, writing_process, project_memory, operations_note | not yet / manual transfer needed | open loops: create durable operations note `reasonable_community_balancing_map_2026-05-23.md`; retry PR when GitHub write works; apply archive-reading discipline to future large project archives |

## Current active archive-level open loops

- Future runtime readiness checklist: only by separate Sergey decision.
- Lifecycle policy layer remains future-only and requires separate Sergey decision.
- README/documentation-topology boundary has been reviewed; further cleanup only if separately selected.
- Book work remains paused until separate Sergey decision.
- Book Agent portable workspace architecture: needs decision before any implementation or PR note.
- Book-writing agent stack recalibration: needs decision before returning to book mode; avoid committee writing.

## Status legend

- `draft_archive_entry` — новая запись, ещё не проверена временем.
- `promising` — мысль стоит развивать.
- `needs_decision` — нужен отдельный выбор Сергея.
- `implemented_elsewhere` — содержание перенесено в более сильный artifact; здесь оставить только ссылку.
- `long_lived_observation` — наблюдение о стиле, противоречии или проектной логике, которое стоит хранить дольше 14 дней.
- `stale` — запись устарела по содержанию, а не по возрасту; требует обоснования.
- `superseded` — заменена более точным документом.
- `not_relevant_now` — верно, но не активно для текущего рабочего сегмента.
- `closed` — resolved and no longer needs attention.

## Cleanup rule

Старость сама по себе не делает хвост мусором. Некоторые старые хвосты — это отложенная ценность, а не шум.

Пересмотр не означает автоматическое удаление. Возможные действия:

- оставить;
- сократить;
- перенести в issue/proposal/state;
- отметить `implemented_elsewhere`, только если есть конкретное место реализации;
- отметить `stale`, только если устарело содержание, а не дата;
- отметить `superseded`;
- отметить `not_relevant_now`;
- отметить `closed`;
- удалить отдельным cleanup PR.

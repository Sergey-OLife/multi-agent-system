# Conversation Archive Entry — bot-reviewer-protocol-and-scripts-scope

Дата: 2026-05-21
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-04
Tags: [agent_shipyard, pr_workflow, bot_comments, scripts_core_boundary, archive_protocol, open_loop]
Implemented elsewhere: partial / PR #228, PR #229-open

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-21-bot-reviewer-protocol-and-scripts-scope
- Origin title: Scripts/core boundary scope, bot reviewer comments protocol, and archive start
- Source scope: visible_chat_segment
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #228, PR #229

## 1. Coverage check

- Coverage scope: partial_delta
- Coverage applies to: visible segment after PR #227 closure and return to `Карта будущего корабля`.
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: `Карта будущего корабля` was resumed; scripts/core boundary audit scope was prepared and PR #228 was merged; bot reviewer comments rule was identified as insufficiently explicit; PR #229 was opened with mandatory addendum; archive was requested immediately after.
- What remains outside this entry: full raw chat, final merge result for PR #229, future state sync if needed, future read-only scripts/core boundary audit.

## 2. Почему этот архив создан

Сергей сообщил, что PR #228 уже смержен, затем попросил сделать addendum по bot reviewer comments и сразу выполнить `#архив_старт`.

This archive keeps the delta without re-copying the full scripts/core discussion note or the full protocol addendum.

## 3. Новая дельта

- Дельта:
  - Суть: PR #228 was merged manually/externally.
  - Почему важно: `knowledge/07_operations/scripts_core_boundary_audit_scope.md` is now in main as a discussion note only.
  - Статус: implemented in main.
  - Merge commit: `78f28f4c61e4f8f5c21fd4884e3fa566ed168c0f`.

- Дельта:
  - Суть: Working protocol had general PR self-review rules, but no explicit mandatory rule to check and classify `chatgpt-codex-connector` comments before approval/merge.
  - Почему важно: green checks and mergeability are not enough if reviewer/bot comments are present.
  - Статус: gap identified.

- Дельта:
  - Суть: PR #229 was opened with `assistant_codex_worklog/protocol_addenda/bot_reviewer_comments.md`.
  - Почему важно: it makes bot/reviewer comment checking a mandatory manual PR review discipline.
  - Статус: open at capture time.

## 4. PR #229 status at capture time

- PR #229 — `Add bot reviewer comments protocol`.
- Status: open, not draft, mergeable.
- Changed files:
  - `assistant_codex_worklog/protocol_addenda/bot_reviewer_comments.md`.
- Comments:
  - Top-level PR comments checked: none at initial check.
  - Review threads checked: none at initial check.
- Checks:
  - `Sync Check`: success;
  - `CI`: in progress at initial check.
- Merge status: not merged at capture time.

## 5. Tool-path note

An attempt was made to also register the addendum in `assistant_codex_worklog/working-protocol.md`, but the `update_file` call failed before modifying the file because the payload accidentally included display metadata.

The addendum itself is marked mandatory and is still covered by the existing working-protocol rule that all `assistant_codex_worklog/protocol_addenda/*.md` files must be opened and applied.

A later cleanup may register `bot_reviewer_comments.md` in the visible addenda list, but that is not required for the addendum to be considered mandatory if merged.

## 6. Boundary

PR #229 is manual protocol discipline only.

It does not create:

- automated review enforcement;
- GitHub Action;
- required check;
- validator;
- hard guardrail;
- route automation;
- policy engine;
- branch protection change;
- runtime behavior;
- approval bypass.

## 7. Active open loops

- PR #229 remains open and requires checks, comment review, and merge approval.
- If PR #229 merges, consider whether a small follow-up should register it explicitly in `working-protocol.md` list, unless the PR itself is amended before merge.
- Future read-only scripts/core boundary audit remains optional and should use `knowledge/07_operations/scripts_core_boundary_audit_scope.md`.
- Lifecycle policy layer remains future-only and requires separate Sergey decision.
- `Карта будущего корабля` review remains partly done but not fully converted into an operations note.

## 8. Что не является решением

- This archive is not full checkpoint.
- This archive is not project-state.
- PR #229 is not merged at capture time.
- Bot reviewer comments protocol is not automation or enforcement.
- Scripts/core boundary audit scope is not an audit result and not implementation.

## 9. Рекомендованный следующий шаг

After archive PR creation, handle PR #229 separately:

1. verify PR #229 checks;
2. verify PR #229 comments/review threads under the new intended rule;
3. if clean, request or apply the clear merge approval gate.

Then merge the archive PR only after its own checks and approval.

## 10. Не коммитить

- Full raw transcript.
- Hidden system/developer instructions.
- Private URLs, Drive IDs or personal data.
- Claims that PR #229 is merged before it is merged.
- Claims that bot comment review is automated enforcement.
- Claims that scripts/core boundary audit was completed.

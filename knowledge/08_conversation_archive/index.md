# Conversation Archive Index

Статус: navigation_index

Этот файл не дублирует archive entries. Он помогает быстро увидеть, что лежит в архиве, что уже реализовано, что устарело и какие хвосты ещё открыты.

| Date | Entry | Status | Review date | Tags | Implemented elsewhere | Open loop |
|---|---|---|---|---|---|---|
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_lost-dialogue-and-idea-archive.md` | draft_archive_entry | 2026-06-01 | style, open_loop, failure_pattern, archive_protocol | PR #118 | first real external-chat capture still needed |
| 2026-05-18 | `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md` | draft_archive_entry | 2026-06-01 | agent_shipyard, repository_hygiene, open_loop, architecture_contract, failure_pattern | partial / PR #117, PR #118, PR #120 | decide repository architecture contract PR |

## Status legend

- `draft_archive_entry` — новая запись, ещё не проверена временем.
- `promising` — мысль стоит развивать.
- `needs_decision` — нужен отдельный выбор Сергея.
- `implemented_elsewhere` — содержание перенесено в более сильный artifact; здесь оставить только ссылку.
- `long_lived_observation` — наблюдение о стиле, противоречии или проектной логике, которое стоит хранить дольше 14 дней.
- `stale` — запись устарела и может быть закрыта.
- `superseded` — заменена более точным документом.

## Cleanup rule

Если запись старше 14 дней и не имеет статуса `long_lived_observation`, `needs_decision` или `implemented_elsewhere`, её нужно пересмотреть.

Пересмотр не означает автоматическое удаление. Возможные действия:

- оставить;
- сократить;
- перенести в issue/proposal/state;
- отметить `implemented_elsewhere`;
- отметить `stale`;
- удалить отдельным cleanup PR.

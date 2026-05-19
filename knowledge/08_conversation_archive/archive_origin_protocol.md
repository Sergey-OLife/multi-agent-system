# Archive Origin and Parallel Intake Protocol

Дата: 2026-05-19
Статус: operational_protocol

## 1. Назначение

Этот протокол решает проблему параллельных conversation archives из разных чатов проекта.

Цель:

- каждый чат может сохранить свой смысловой archive entry;
- всем агентам понятно, откуда пришла запись;
- archive entries доступны общей системе;
- параллельные archive PR не конфликтуют из-за общего `knowledge/08_conversation_archive/index.md`.

## 2. Главная идея

Conversation archive хранит не безымянные заметки, а записи с происхождением.

Каждый archive entry должен отвечать на два разных вопроса:

1. Origin: откуда пришла запись?
2. Coverage: какой объём этого origin она покрывает?

`coverage_scope: full_chat` без origin недостаточен. Всегда нужно понимать: full chat какого именно чата или видимого сегмента?

## 3. Обязательный Origin block

Новые archive entries должны включать блок:

```markdown
## 0. Origin

- Origin type: project_chat / imported_chat / external_chat_paste / current_visible_segment
- Origin id: <stable-short-id>
- Origin title:
- Source scope: full_visible_chat / partial_visible_chat / pasted_summary / imported_summary
- Capture command: #архив чата / #архив чата сохрани / #архив_старт / manual
- Captured from: current chat / another project chat / pasted response / uploaded summary
- Related PRs:
- Related archive entries:
```

`Origin id` должен быть стабильным и коротким, например:

```text
chat-2026-05-19-khmelevskaya-style-optic
chat-2026-05-19-agent-shipyard-coverage-fix
external-2026-05-19-old-chat-import-07
```

Запрещено включать в `Origin id` private URLs, Drive IDs, raw thread IDs or personal data.

## 4. Coverage block

После Origin block должен идти Coverage check:

```markdown
## 1. Coverage check

- Coverage scope: full_chat / thematic / partial / corrective
- Coverage applies to: origin_chat_id / current_visible_segment / pasted_material / imported_summary
- Previous checkpoint:
- Previous checkpoint coverage scope: full_chat / thematic / partial / missing / open PR only
- Previous archive/state coverage status: complete / partial / missing / open PR only
- Full-chat marker present: yes/no
- Gap found: yes/no
- What this entry covers:
- What remains outside this entry:
```

## 5. Как читать full_chat

`coverage_scope: full_chat` означает full coverage только для указанного `Coverage applies to`.

Пример:

```text
Coverage scope: full_chat
Coverage applies to: origin_chat_id = chat-2026-05-19-khmelevskaya-style-optic
```

Это не значит, что закрыт весь проект, все старые чаты или все прошлые coverage gaps.

Если entry покрывает только видимую часть чата, писать:

```text
Coverage scope: full_chat
Coverage applies to: current_visible_segment
What remains outside this entry: earlier hidden / unavailable chat history
```

## 6. Single-lane archive mode

Использовать, когда одновременно открыт только один archive PR и риск конфликта низкий.

Разрешено:

- создать один archive entry;
- обновить `knowledge/08_conversation_archive/index.md` в том же PR.

Требования:

- Origin block есть;
- Coverage check есть;
- нет raw transcript;
- нет private IDs/URLs;
- open PR не называется implemented.

## 7. Parallel intake mode

Использовать, когда архивируются несколько чатов параллельно или уже открыт archive PR, который трогает `index.md`.

Правило:

```text
Parallel archive PR writes only its own entry file.
It must not update knowledge/08_conversation_archive/index.md.
```

После merge нескольких entry-only PR создаётся отдельный consolidation PR:

```text
Update knowledge/08_conversation_archive/index.md from merged entries.
```

Consolidation PR должен:

- найти merged entries без index row;
- добавить строки в `index.md`;
- не менять сами archive entries;
- не добавлять raw content;
- указать, какие entries были indexed.

## 8. Что делать с уже открытым archive PR

Если открыт archive PR, который уже обновляет `index.md`, новый archive PR должен выбрать одно из двух:

1. wait mode — дождаться решения предыдущего PR;
2. parallel intake mode — создать только entry file without index update.

Нельзя молча создавать второй PR с update того же `index.md`, если это создаёт предсказуемый conflict.

## 9. Доступность для агентов

Агенты используют archive entries так:

1. Сначала читают `index.md`, если entry уже indexed.
2. Если entry fresh / unindexed, читают merged entry files directly.
3. Open PR могут учитываться только как `open PR only`, not implemented.
4. Origin block помогает понять, относится ли запись к текущему чату, другому чату, imported summary or visible segment.

## 10. Audit expectations

Будущий archive audit должен проверять:

- наличие Origin block;
- наличие Coverage check;
- наличие `Coverage applies to`;
- отсутствие raw transcript;
- отсутствие raw books / PDF / EPUB / DJVU / MOBI;
- отсутствие private Drive IDs/URLs;
- что parallel intake PR не меняет `index.md`;
- что full_chat всегда имеет явный target в `Coverage applies to`.

## 11. Не является решением

Этот протокол не создаёт agent runtime.
Он не активирует `conversation_archive_librarian`.
Он не внедряет Go validator.
Он не включает branch protection.
Он не закрывает старые coverage gaps автоматически.

Он только задаёт понятный способ сохранять архивы из разных чатов без конфликта по общему index.

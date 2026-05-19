# Protocol Addendum — Archive Start Command

Статус: mandatory_rule
Дата: 2026-05-19

## 1. Проблема

Массовый прогон коротких archive-команд по старым чатам показал сбой: часть чатов могла понять команду как просьбу сохранить информацию в память проекта, handoff или другой нестандартный путь, а не как GitHub conversation archive.

Позже обнаружен второй сбой: `#архив_старт` мог быть понят как команда сохранить только последнюю обсуждаемую тему, а не накопительный смысловой хвост текущего чата.

Третий сбой: ассистент мог принять тематическую archive-запись за полную границу истории чата, хотя в ней не было явного маркера `coverage_scope: full_chat`.

Четвёртый сбой: разные чаты могут параллельно создавать archive PR и все они пытаются обновить один общий `knowledge/08_conversation_archive/index.md`, что создаёт predictable merge conflicts.

## 2. Новая короткая команда

```text
#архив_старт
```

Это универсальная write-first команда для project chats.

Она означает:

1. Проверить актуальный `main`.
2. Открыть актуальный `knowledge/08_conversation_archive/conversation_capture_prompt.md`.
3. Найти последнюю проверенную archive/state точку текущего чата.
4. Определить её `coverage_scope` and origin.
5. Не считать тематическую запись полной границей чата.
6. Сначала убедиться, что предыдущая archive entry корректно покрывает историю до этой точки.
7. Если предыдущая запись неполна, тематическая или не имеет full-chat marker, явно отметить coverage gap.
8. Собрать весь новый смысловой хвост текущего чата от последней проверенной full-chat точки или от явно названной тематической точки с coverage gap.
9. Не ограничиваться последней обсуждаемой темой, если раньше после checkpoint были незакрытые идеи.
10. Записать entry только в:

```text
knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md
```

11. Обновить `knowledge/08_conversation_archive/index.md` только в single-lane mode or consolidation PR.
12. Если уже открыт archive PR с index update, использовать parallel intake mode или спросить Сергея.
13. Открыть PR в GitHub против `main`.

## 3. Origin rule

Archive entry must say where it came from.

Every new entry must include:

```markdown
## 0. Origin

- Origin type: project_chat / imported_chat / external_chat_paste / current_visible_segment
- Origin id: <stable-short-id>
- Origin title:
- Source scope: full_visible_chat / partial_visible_chat / pasted_summary / imported_summary
- Capture command:
- Captured from:
- Related PRs:
- Related archive entries:
```

Do not include private URLs, Drive IDs, raw thread IDs or personal data in Origin id.

## 4. Coverage scope rule

No archive entry may be treated as full-chat coverage unless it explicitly says:

```text
coverage_scope: full_chat
```

or includes an equivalent explicit marker in its `Coverage check` section.

Default rule:

```text
No full-chat marker = thematic coverage by default.
```

`coverage_scope: full_chat` must always have a target:

```text
Coverage applies to: origin_chat_id / current_visible_segment / pasted_material / imported_summary
```

Coverage types:

- `full_chat` — entry explicitly claims and justifies coverage of the target origin up to a stated boundary.
- `thematic` — entry covers only one topic or theme; default when no full-chat marker exists.
- `partial` — entry knowingly covers only part of the relevant history.
- `corrective` — entry corrects a previous coverage gap or supersedes a flawed entry.

A thematic entry must not be used as a full-chat checkpoint.

## 5. Cumulative capture rule

`#архив_старт` is cumulative, not last-topic-only.

Перед записью ассистент обязан:

1. Проверить последнюю релевантную archive/state точку.
2. Определить её origin and coverage scope.
3. Проверить, закрывает ли она previous history for its target origin.
4. Проверить open PRs: open PR не является implemented.
5. Вытащить все новые semantic seeds с момента доказанной full-chat точки или явно обозначить gap, если такой точки нет.
6. Разделить unrelated themes на несколько archive entries, если один entry смешает разные линии.
7. Добавить Origin block and Coverage check section.

Обязательный блок:

```markdown
## 0. Origin

- Origin type: project_chat / imported_chat / external_chat_paste / current_visible_segment
- Origin id:
- Origin title:
- Source scope: full_visible_chat / partial_visible_chat / pasted_summary / imported_summary
- Capture command:
- Captured from:
- Related PRs:
- Related archive entries:

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

Если ассистент сохраняет только одну узкую тему, он обязан прямо написать, какие другие темы остаются вне entry и почему.

## 6. Single-lane and parallel intake modes

Single-lane mode:

- use when no other archive PR updating `index.md` is open;
- create entry file;
- update `knowledge/08_conversation_archive/index.md` in the same PR.

Parallel intake mode:

- use when another archive PR updating `index.md` is already open or when importing multiple chats in parallel;
- create only the entry file;
- do not update `knowledge/08_conversation_archive/index.md`;
- after merge of entry-only PRs, create a separate consolidation PR that updates `index.md`.

If unsure whether a new archive PR would conflict with an open archive PR, stop and ask Sergey.

## 7. Запрещённые направления сохранения

Для `#архив_старт` и `#архив чата сохрани` запрещено сохранять archive entry в:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- `knowledge/05_agent_memory/`;
- любые произвольные notes/handoff folders;
- полный transcript dump.

## 8. Если GitHub tool недоступен

Если GitHub write недоступен, ассистент не должен выбирать другой способ хранения.

Правильный ответ:

```text
GitHub write is unavailable in this chat. I cannot perform #архив_старт correctly. Here is ready-to-copy markdown for manual transfer.
```

## 9. Отличие от старых команд

```text
#архив чата
```

Draft-only mode. Подготовить markdown, proposed path и index row. Не писать в GitHub.

```text
#архив чата сохрани
```

Explicit save mode. Использовать GitHub tools и создать PR со стандартным archive entry. Index update allowed only in single-lane mode.

```text
#архив_старт
```

Write-first cumulative mode. Сразу делать GitHub archive PR в стандартной директории и покрывать весь новый смысловой хвост от последней проверенной full-chat точки. Если full-chat точки нет, explicitly declare coverage gap and do not pretend completeness.

## 10. Карантин массовых импортов

Все archive/handoff PR, созданные массовым прогоном команд по старым чатам, считаются quarantine PR до проверки:

1. путь строго `knowledge/08_conversation_archive/chat_archives/`;
2. index update only if single-lane or consolidation mode;
3. нет raw transcript;
4. нет raw books / PDF / EPUB / DJVU / MOBI;
5. нет private Drive IDs / URLs;
6. нет старого project state, выданного за текущий;
7. нет записи в `knowledge/05_agent_memory/handoff/`;
8. нет дублирования уже реализованных state/roadmap/protocol решений;
9. есть Origin block;
10. есть Coverage check with target origin.

Если PR не проходит карантин, его нужно закрыть с комментарием, не мержить.

## 11. Известные failure patterns

Недопустимый сценарий 1:

```text
User runs #архив_старт.
Assistant archives only the latest topic.
Earlier unarchived ideas after the previous checkpoint are left out without being named.
```

Недопустимый сценарий 2:

```text
Assistant treats a thematic archive entry as full-chat coverage without an explicit full_chat marker.
```

Недопустимый сценарий 3:

```text
Multiple archive PRs from different chats all update index.md and create predictable conflicts.
```

Правильное поведение:

```text
#архив_старт first verifies origin and prior coverage scope, then captures the cumulative unresolved semantic tail.
If it intentionally captures only one theme, it must state what remains outside and why.
If there is no explicit full_chat checkpoint, it must say so and mark coverage_gap.
If parallel archive PRs exist, use entry-only parallel intake or wait.
```

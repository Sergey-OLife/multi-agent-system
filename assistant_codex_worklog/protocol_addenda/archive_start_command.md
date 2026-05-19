# Protocol Addendum — Archive Start Command

Статус: mandatory_rule
Дата: 2026-05-19

## 1. Проблема

Массовый прогон коротких archive-команд по старым чатам показал сбой: часть чатов могла понять команду как просьбу сохранить информацию в память проекта, handoff или другой нестандартный путь, а не как GitHub conversation archive.

Позже обнаружен второй сбой: `#архив_старт` мог быть понят как команда сохранить только последнюю обсуждаемую тему, а не накопительный смысловой хвост текущего чата.

Третий сбой: ассистент мог принять тематическую archive-запись за полную границу истории чата, хотя в ней не было явного маркера `coverage_scope: full_chat`.

Причина: в прежней формулировке было недостаточно жёстко указано, что сохранение archive entry должно идти только через GitHub и только в стандартную директорию conversation archive, что `#архив_старт` должен собирать всё новое с проверенной точки до текущего момента, и что archive entry не является full-chat checkpoint без явного coverage marker.

## 2. Новая короткая команда

```text
#архив_старт
```

Это универсальная write-first команда для project chats.

Она означает:

1. Проверить актуальный `main`.
2. Открыть актуальный `knowledge/08_conversation_archive/conversation_capture_prompt.md`.
3. Найти последнюю проверенную archive/state точку текущего чата.
4. Определить её `coverage_scope`.
5. Не считать тематическую запись полной границей чата.
6. Сначала убедиться, что предыдущая archive entry корректно покрывает историю до этой точки.
7. Если предыдущая запись неполна, тематическая или не имеет full-chat marker, явно отметить coverage gap.
8. Собрать весь новый смысловой хвост текущего чата от последней проверенной full-chat точки или от явно названной тематической точки с coverage gap.
9. Не ограничиваться последней обсуждаемой темой, если раньше после checkpoint были незакрытые идеи.
10. Записать entry только в:

```text
knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md
```

11. Обновить только:

```text
knowledge/08_conversation_archive/index.md
```

12. Открыть PR в GitHub против `main`.

## 3. Coverage scope rule

No archive entry may be treated as full-chat coverage unless it explicitly says:

```text
coverage_scope: full_chat
```

or includes an equivalent explicit marker in its `Coverage check` section.

Default rule:

```text
No full-chat marker = thematic coverage by default.
```

Coverage types:

- `full_chat` — entry explicitly claims and justifies coverage of the whole chat up to a stated boundary.
- `thematic` — entry covers only one topic or theme; default when no full-chat marker exists.
- `partial` — entry knowingly covers only part of the relevant history.
- `corrective` — entry corrects a previous coverage gap or supersedes a flawed entry.

A thematic entry must not be used as a full-chat checkpoint.

## 4. Cumulative capture rule

`#архив_старт` is cumulative, not last-topic-only.

Перед записью ассистент обязан:

1. Проверить последнюю релевантную archive/state точку.
2. Определить её coverage scope.
3. Проверить, закрывает ли она предыдущую историю полностью.
4. Проверить open PRs: open PR не является implemented.
5. Вытащить все новые semantic seeds с момента доказанной full-chat точки или явно обозначить gap, если такой точки нет.
6. Разделить unrelated themes на несколько archive entries, если один entry смешает разные линии.
7. Добавить `Coverage check` section.

Обязательный блок:

```markdown
## 0. Coverage check

- Coverage scope: full_chat / thematic / partial / corrective
- Previous checkpoint:
- Previous checkpoint coverage scope: full_chat / thematic / partial / missing / open PR only
- Previous archive/state coverage status: complete / partial / missing / open PR only
- Full-chat marker present: yes/no
- Gap found: yes/no
- What this entry covers:
- What remains outside this entry:
```

Если ассистент сохраняет только одну узкую тему, он обязан прямо написать, какие другие темы остаются вне entry и почему.

## 5. Запрещённые направления сохранения

Для `#архив_старт` и `#архив чата сохрани` запрещено сохранять archive entry в:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- `knowledge/05_agent_memory/`;
- любые произвольные notes/handoff folders;
- полный transcript dump.

## 6. Если GitHub tool недоступен

Если GitHub write недоступен, ассистент не должен выбирать другой способ хранения.

Правильный ответ:

```text
GitHub write is unavailable in this chat. I cannot perform #архив_старт correctly. Here is ready-to-copy markdown for manual transfer.
```

## 7. Отличие от старых команд

```text
#архив чата
```

Draft-only mode. Подготовить markdown, proposed path и index row. Не писать в GitHub.

```text
#архив чата сохрани
```

Explicit save mode. Использовать GitHub tools и создать PR со стандартным archive entry + index update.

```text
#архив_старт
```

Write-first cumulative mode. Сразу делать GitHub archive PR в стандартной директории и покрывать весь новый смысловой хвост от последней проверенной full-chat точки. Если full-chat точки нет, explicitly declare coverage gap and do not pretend completeness.

## 8. Карантин массовых импортов

Все archive/handoff PR, созданные массовым прогоном команд по старым чатам, считаются quarantine PR до проверки:

1. путь строго `knowledge/08_conversation_archive/chat_archives/`;
2. index update только для `knowledge/08_conversation_archive/index.md`;
3. нет raw transcript;
4. нет raw books / PDF / EPUB / DJVU / MOBI;
5. нет private Drive IDs / URLs;
6. нет старого project state, выданного за текущий;
7. нет записи в `knowledge/05_agent_memory/handoff/`;
8. нет дублирования уже реализованных state/roadmap/protocol решений.

Если PR не проходит карантин, его нужно закрыть с комментарием, не мержить.

## 9. Известные failure patterns

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

Правильное поведение:

```text
#архив_старт first verifies prior coverage scope, then captures the cumulative unresolved semantic tail.
If it intentionally captures only one theme, it must state what remains outside and why.
If there is no explicit full_chat checkpoint, it must say so and mark coverage_gap.
```

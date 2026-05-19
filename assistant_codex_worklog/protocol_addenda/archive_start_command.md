# Protocol Addendum — Archive Start Command

Статус: mandatory_rule
Дата: 2026-05-19

## 1. Проблема

Массовый прогон коротких archive-команд по старым чатам показал сбой: часть чатов могла понять команду как просьбу сохранить информацию в память проекта, handoff или другой нестандартный путь, а не как GitHub conversation archive.

Позже обнаружен второй сбой: `#архив_старт` мог быть понят как команда сохранить только последнюю обсуждаемую тему, а не накопительный смысловой хвост текущего чата.

Причина: в прежней формулировке было недостаточно жёстко указано, что сохранение archive entry должно идти только через GitHub и только в стандартную директорию conversation archive, а также что `#архив_старт` должен проверять предыдущую archive/state точку и собирать всё новое с этой точки до текущего момента.

## 2. Новая короткая команда

```text
#архив_старт
```

Это универсальная write-first команда для project chats.

Она означает:

1. Проверить актуальный `main`.
2. Открыть актуальный `knowledge/08_conversation_archive/conversation_capture_prompt.md`.
3. Найти последнюю проверенную archive/state точку текущего чата.
4. Сначала убедиться, что предыдущая archive entry корректно покрывает историю до этой точки.
5. Если предыдущая запись неполна, явно отметить coverage gap.
6. Собрать весь новый смысловой хвост текущего чата от последней проверенной точки до текущего момента.
7. Не ограничиваться последней обсуждаемой темой, если раньше после checkpoint были незакрытые идеи.
8. Записать entry только в:

```text
knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md
```

9. Обновить только:

```text
knowledge/08_conversation_archive/index.md
```

10. Открыть PR в GitHub против `main`.

## 3. Cumulative capture rule

`#архив_старт` is cumulative, not last-topic-only.

Перед записью ассистент обязан:

1. Проверить последнюю релевантную archive/state точку.
2. Проверить, закрывает ли она предыдущую историю полностью.
3. Проверить open PRs: open PR не является implemented.
4. Вытащить все новые semantic seeds с момента checkpoint.
5. Разделить unrelated themes на несколько archive entries, если один entry смешает разные линии.
6. Добавить `Coverage check` section.

Обязательный блок:

```markdown
## 0. Coverage check

- Previous checkpoint:
- Previous archive/state coverage status: complete / partial / missing / open PR only
- Gap found: yes/no
- What this entry covers:
- What remains outside this entry:
```

Если ассистент сохраняет только одну узкую тему, он обязан прямо написать, какие другие темы остаются вне entry и почему.

## 4. Запрещённые направления сохранения

Для `#архив_старт` и `#архив чата сохрани` запрещено сохранять archive entry в:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- `knowledge/05_agent_memory/`;
- любые произвольные notes/handoff folders;
- полный transcript dump.

## 5. Если GitHub tool недоступен

Если GitHub write недоступен, ассистент не должен выбирать другой способ хранения.

Правильный ответ:

```text
GitHub write is unavailable in this chat. I cannot perform #архив_старт correctly. Here is ready-to-copy markdown for manual transfer.
```

## 6. Отличие от старых команд

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

Write-first cumulative mode. Сразу делать GitHub archive PR в стандартной директории и покрывать весь новый смысловой хвост от последней проверенной точки, а не только последнюю тему.

## 7. Карантин массовых импортов

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

## 8. Известный failure pattern

Недопустимый сценарий:

```text
User runs #архив_старт.
Assistant archives only the latest topic.
Earlier unarchived ideas after the previous checkpoint are left out without being named.
```

Правильное поведение:

```text
#архив_старт first verifies prior coverage, then captures the cumulative unresolved semantic tail.
If it intentionally captures only one theme, it must state what remains outside and why.
```

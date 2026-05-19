# Protocol Addendum — Archive Start Command

Статус: mandatory_rule
Дата: 2026-05-19

## 1. Проблема

Массовый прогон коротких archive-команд по старым чатам показал сбой: часть чатов могла понять команду как просьбу сохранить информацию в память проекта, handoff или другой нестандартный путь, а не как GitHub conversation archive.

Причина: в прежней формулировке было недостаточно жёстко указано, что сохранение archive entry должно идти только через GitHub и только в стандартную директорию conversation archive.

## 2. Новая короткая команда

```text
#архив_старт
```

Это универсальная write-first команда для project chats.

Она означает:

1. Проверить актуальный `main`.
2. Открыть актуальный `knowledge/08_conversation_archive/conversation_capture_prompt.md`.
3. Собрать смысловой archive entry текущего чата.
4. Записать entry только в:

```text
knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md
```

5. Обновить только:

```text
knowledge/08_conversation_archive/index.md
```

6. Открыть PR в GitHub против `main`.

## 3. Запрещённые направления сохранения

Для `#архив_старт` и `#архив чата сохрани` запрещено сохранять archive entry в:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- `knowledge/05_agent_memory/`;
- любые произвольные notes/handoff folders;
- полный transcript dump.

## 4. Если GitHub tool недоступен

Если GitHub write недоступен, ассистент не должен выбирать другой способ хранения.

Правильный ответ:

```text
GitHub write is unavailable in this chat. I cannot perform #архив_старт correctly. Here is ready-to-copy markdown for manual transfer.
```

## 5. Отличие от старых команд

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

Write-first mode. Сразу делать GitHub archive PR в стандартной директории, без промежуточного draft-only шага.

## 6. Карантин массовых импортов

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

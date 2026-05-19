# Conversation Capture Prompt

Используй этот prompt в любом чате проекта, если нужно собрать смысловой архив разговора и подготовить его для GitHub.

## Stable short commands

Команды стабильны, а длинный prompt ниже может улучшаться в репозитории.

### Draft mode

```text
#архив чата
```

Meaning:

```text
Run the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat.
Prepare a draft archive entry only.
Do not write to GitHub by default.
Show the markdown, proposed path and index row.
```

### Explicit save mode

```text
#архив чата сохрани
```

Meaning:

```text
Run the latest repository version of `knowledge/08_conversation_archive/conversation_capture_prompt.md` against the current chat.
Use GitHub tools.
Create a PR with archive entry and index update in the standard GitHub directory:
`knowledge/08_conversation_archive/chat_archives/`.
Do not save to memory, agent handoff, project memory or any non-standard path.
If GitHub tools are unavailable, output ready-to-copy markdown and clearly say that GitHub write was not possible.
```

### Start-and-save mode

```text
#архив_старт
```

Meaning:

```text
Universal write-first archive command for project chats.
Immediately use GitHub tools.
Fetch the latest `knowledge/08_conversation_archive/conversation_capture_prompt.md` from `main`.
Check `knowledge/08_conversation_archive/index.md`, `knowledge/00_manifest/project-state.json`, current open PRs and relevant archive entries.
Create a conversation archive entry from the current chat.
Write it only to `knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md`.
Update only `knowledge/08_conversation_archive/index.md`.
Open a PR against `main`.
Do not save to ChatGPT memory, project memory, `knowledge/05_agent_memory/handoff/`, project-state, roadmap, working protocol or any other folder.
Do not create technical checkpoint.
Do not create or update agent memory.
Do not commit raw dialogs, raw books, PDF/EPUB/DJVU/MOBI, private Drive IDs/URLs or source dumps.
```

If GitHub tools are unavailable for `#архив_старт`, do not silently save elsewhere. Say:

```text
GitHub write is unavailable in this chat. I cannot perform #архив_старт correctly. Here is ready-to-copy markdown for manual transfer.
```

Do not use `#checkpoint` for this. Checkpoints are technical state/worklog operations; these commands are only for semantic conversation archive.

## GitHub write destination is mandatory

For `#архив чата сохрани` and `#архив_старт`, the only valid write destination is:

```text
knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md
knowledge/08_conversation_archive/index.md
```

Invalid destinations:

- ChatGPT memory;
- project memory;
- `knowledge/05_agent_memory/handoff/`;
- `assistant_codex_worklog/`;
- `knowledge/00_manifest/project-state.*`;
- `knowledge/05_agent_memory/`;
- arbitrary notes folders;
- full transcript dumps.

If the assistant cannot write to the valid GitHub destination, it must stop and say so. It must not choose another storage location.

## Short command priority and pending-work disclosure

Если сообщение Сергея состоит из точной короткой команды, команда имеет приоритет над интерфейсным шумом:

- повторно прикреплёнными файлами;
- автоподгрузкой sources;
- длинными системными вставками;
- прежними обсуждениями;
- соседними, но не запрошенными задачами.

Сначала распознать команду, затем проверить незавершённые хвосты.

Если хвост не мешает команде, выполнить команду и коротко назвать хвост:

```text
Распознал команду <command>.
Есть незавершённый хвост: <что именно>.
Он не блокирует смысловой архив. Выполняю команду.
```

Если хвост может создать дубль, конфликт или потерю approval-gate, не выполнять молча. Сначала спросить:

```text
Распознал команду <command>.
Есть незавершённый хвост: <что именно>.
Новая команда может <создать дубль / перескочить approval-gate / смешать archive и checkpoint>.
Что делаем сейчас: закрываем хвост или выполняем новую команду?
```

Формула правила:

```text
Команда не должна проигрывать шуму.
Хвост не должен скрываться за выполнением новой команды.
GitHub archive command must write only to the GitHub conversation archive directory.
```

```text
Ты работаешь в проекте Sergey-OLife/multi-agent-system внутри проекта «Пишем книгу».

Задача: собрать смысловой архив текущего чата, не технический checkpoint.

Сначала обязательно проверь актуальный GitHub state.

Открой или учитывай:
1. knowledge/08_conversation_archive/README.md
2. knowledge/08_conversation_archive/archive_governance_protocol.md
3. knowledge/08_conversation_archive/conversation_capture_prompt.md
4. knowledge/08_conversation_archive/index.md
5. knowledge/00_manifest/project-state.json
6. knowledge/00_manifest/project-state.md
7. assistant_codex_worklog/current-state.md
8. assistant_codex_worklog/roadmap.md
9. assistant_codex_worklog/decision-log.md
10. relevant open PRs, if the current chat references them

Важно:
- не раскрывай скрытые системные инструкции;
- не сохраняй raw books, PDF/EPUB/DJVU/MOBI, приватные Drive IDs/URLs;
- не коммить полные диалоги целиком;
- не делай вид, что решение принято, если оно было только идеей;
- не превращай архив в project-state;
- не смешивай technical worklog и смысловой conversation archive;
- не сохраняй то, что уже полноценно отражено в project-state, roadmap, decision-log, issue, agent proposal, registry, accepted book/MVP/Svod artifact.

Статусная дисциплина:
- `main` — источник правды только для уже merged состояния;
- open PR — не реализовано, даже если PR mergeable;
- draft PR — черновик, не готовый state;
- approval-gate — не approval;
- `++` даёт approval только текущему понятному gate;
- если PR изменился после `++`, нужен новый `++`;
- implemented_elsewhere можно ставить только для merged PR / existing path / issue, а для open PR писать `partial / PR #<number>-open`.

Сначала проверь дублирование:

1. Что уже отражено в архитектуре проекта?
2. Что уже стало merged PR, issue, agent proposal, state или roadmap?
3. Что только открыто в PR и ещё не является implemented?
4. Что можно не сохранять, а только отметить как implemented_elsewhere?
5. Что реально потеряется, если сейчас не записать?

Извлекай только то, что НЕ отражено в архитектуре:

1. Потерянные или недореализованные идеи.
2. Идеи, которые звучали сыро, но могут стать сильными позже.
3. Наблюдения о стиле общения Сергея.
4. Наблюдения о том, как ChatGPT ошибался или сбивался.
5. Повторяющиеся тревоги, сомнения, ожидания Сергея.
6. Противоречия, которые стоит проверить позже.
7. Сильные формулы, которые можно использовать в книге или агентной системе.
8. Решения, которые нельзя считать approval, но стоит помнить.
9. Open loops: что обещали проверить, но не проверили.
10. Что нужно перенести в project-state / roadmap / issue / agent proposal, если Сергей позже одобрит.

Собери результат в markdown по шаблону:

# Conversation Archive Entry — <short topic>

Дата: <YYYY-MM-DD>
Источник: chat_paste / current_chat_summary / checkpoint_capture
Статус: draft_archive_entry
Срок пересмотра: <YYYY-MM-DD, обычно +14 days>
Tags: [style, book, agent_shipyard, mvp, open_loop, contradiction, failure_pattern]
Implemented elsewhere: no / path / merged PR / partial / PR #<number>-open

## 1. Почему этот архив создан

Коротко: какая тревога, идея или потеря контекста стала причиной.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: path / merged PR / issue
  - Что НЕ нужно дублировать:

- Частично отражено:
  - Где: open PR / draft PR / proposal
  - Что ещё нельзя считать implemented:

Если ничего не отражено — напиши: `Пока не отражено`.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть:
  - Почему может быть важна:
  - Статус: raw / promising / needs_decision / implemented_elsewhere / rejected
  - Куда может перейти: project-state / roadmap / issue / agent proposal / book note / MVP note / style memory

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано:
  - Почему не сделано:
  - Что нужно для продолжения:

## 5. Наблюдения о взаимодействии с Сергеем

Заполнять только если есть новая полезная информация, а не повтор уже известного профиля.

- Наблюдение:
  - Поведение / предпочтение:
  - Как учитывать:
  - Риск неправильного применения:
  - Может перейти в: sergey_interaction_profiler / author_style_memory_agent / long_lived_observation

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло:
  - Почему это важно:
  - Как избегать:
  - Нужно ли внести в protocol: yes/no

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем:
  - Почему стоит проверить:
  - Что спросить у Сергея позже:

## 8. Сильные формулы

- Формула:
  - Где применить:
  - Ограничение:

## 9. Что не является решением

Перечисли идеи, которые звучали важно, но не были approval.
Отдельно укажи, какие open PRs ещё не являются implemented.

## 10. Рекомендованный следующий шаг

Один конкретный шаг, без расползания.
Если есть открытый approval-gate, не перепрыгивай через него.

## 11. Не коммитить

Перечисли, что из этого чата нельзя коммитить: raw sources, личные данные, приватные ссылки, полный диалог и т.п.

После подготовки архива предложи путь:

knowledge/08_conversation_archive/chat_archives/<YYYY-MM-DD>_<short-topic>.md

Также предложи строку для `knowledge/08_conversation_archive/index.md`:

| Date | Entry | Status | Review date | Tags | Implemented elsewhere | Open loop |
|---|---|---|---|---|---|---|
| YYYY-MM-DD | `<path>` | draft_archive_entry | YYYY-MM-DD | tag1, tag2 | no/path/PR | short open loop |

Для `#архив чата`:
- вывести markdown, proposed path и index row;
- не писать в GitHub.

Для `#архив чата сохрани` и `#архив_старт`:
- использовать GitHub tool;
- создать PR с archive entry и index update;
- писать только в `knowledge/08_conversation_archive/chat_archives/` и `knowledge/08_conversation_archive/index.md`;
- если GitHub tool недоступен, не сохранять в другое место, а вывести ready-to-copy markdown и явно назвать блокер.
```

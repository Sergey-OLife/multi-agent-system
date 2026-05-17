# Protocol Addendum — restart prompt before checkpoint

Статус: обязательное рабочее правило
Дата фиксации: 2026-05-17

## Правило

Перед выполнением команды:

```text
#checkpoint full
```

ChatGPT обязан сначала прислать Сергею корректный restart prompt для следующего чистого чата.

Checkpoint не начинается, пока Сергей не получил этот prompt в чате.

Чатовый restart prompt должен соответствовать отдельному правилу лимита:

- максимум 6000 знаков с пробелами;
- лимит относится только к prompt, который отправляется в чат;
- файл `assistant_codex_worklog/restart-prompt.md` может быть длиннее и подробнее;
- длинные фрагменты книги, источников и истории проекта заменяются путями, ссылками и короткими указателями.

Подробное правило см.: `assistant_codex_worklog/protocol_addenda/chat_restart_prompt_length_limit.md`.

## Зачем это нужно

Команда `#checkpoint full` обычно используется в момент, когда чат уже перегружен или проект находится на границе перехода. Если сначала обновить файлы, а потом формулировать restart prompt, есть риск:

- потерять живой контекст последнего решения;
- зафиксировать техническое состояние без удобного входа в новый чат;
- заставить Сергея самому собирать стартовый текст;
- создать restart prompt, который формально верен, но не отражает текущий рабочий фокус;
- раздуть чатовый prompt до архивного документа, который трудно скопировать и быстро применить.

Поэтому порядок меняется: сначала Сергей получает компактный prompt рестарта, потом выполняется checkpoint.

## Обязательный порядок при `#checkpoint full`

1. Сначала сформировать в текущем чате свежий restart prompt для нового чистого чата.
2. Проверить, что чатовый prompt не длиннее 6000 знаков с пробелами.
3. В prompt указать:
   - текущий репозиторий;
   - текущий режим работы;
   - последний merged PR;
   - текущий незавершённый фокус;
   - какие файлы открыть в первую очередь;
   - что не делать в новом чате;
   - какие approval-gates действуют;
   - первый следующий шаг.
4. Если нужен книжный контекст, вставить не больше 1–2 предложений последнего принятого текста и дать путь к файлу/состоянию.
5. После отправки prompt Сергею выполнить технический checkpoint.
6. В ходе checkpoint обновить `restart-prompt.md`, `current-state.md`, `roadmap.md`, `decision-log.md`, project-state и другие нужные файлы.
7. После checkpoint проверить, что файл `assistant_codex_worklog/restart-prompt.md` не противоречит prompt, уже отправленному Сергею.

## Запреты

Запрещено:

- начинать `#checkpoint full` без предварительного restart prompt в чате;
- писать общий restart prompt без конкретной текущей точки проекта;
- ссылаться только на память чата вместо GitHub;
- забывать указать, какие ветки/PR уже смержены, а какие только предложены;
- смешивать книжный Book Fast Track и технический PR workflow без пояснения текущего режима;
- вставлять в чатовый restart prompt большие фрагменты книги;
- вставлять сырой текст источников;
- пересказывать `project-state`, `roadmap`, `current-state` или `working-protocol` вместо ссылок на них.

## Минимальный шаблон restart prompt

```text
Продолжаем проект Sergey-OLife/multi-agent-system в проекте «Пишем книгу».

Главный источник правды — GitHub, не память старого чата.

Сначала открыть:
1. assistant_codex_worklog/restart-prompt.md
2. assistant_codex_worklog/current-state.md
3. assistant_codex_worklog/roadmap.md
4. assistant_codex_worklog/working-protocol.md
5. assistant_codex_worklog/protocol_addenda/*.md
6. knowledge/00_manifest/project-state.md
7. knowledge/05_agent_memory/review_queue/review-index.md

Текущий режим: <Book Fast Track | Strict PR Workflow | Source Intake Audit | другой режим>.
Последний merged PR: <номер, название, commit sha>.
Текущий фокус: <одна конкретная рабочая задача>.
Следующий допустимый шаг: <что делать первым>.
Не делать: <главные запреты и ловушки>.
Approval-gates: <что нельзя мержить/менять без явного согласия Сергея>.

Лимит: этот чатовый restart prompt должен быть до 6000 знаков с пробелами.
```

## Связанные файлы

- `assistant_codex_worklog/protocol_addenda/chat_restart_prompt_length_limit.md`
- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `knowledge/00_manifest/project-state.md`

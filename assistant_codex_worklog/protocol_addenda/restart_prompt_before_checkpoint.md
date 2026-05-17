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

## Зачем это нужно

Команда `#checkpoint full` обычно используется в момент, когда чат уже перегружен или проект находится на границе перехода. Если сначала обновить файлы, а потом формулировать restart prompt, есть риск:

- потерять живой контекст последнего решения;
- зафиксировать техническое состояние без удобного входа в новый чат;
- заставить Сергея самому собирать стартовый текст;
- создать restart prompt, который формально верен, но не отражает текущий рабочий фокус.

Поэтому порядок меняется: сначала Сергей получает готовый prompt рестарта, потом выполняется checkpoint.

## Обязательный порядок при `#checkpoint full`

1. Сначала сформировать в текущем чате свежий restart prompt для нового чистого чата.
2. В prompt указать:
   - текущий репозиторий;
   - текущий режим работы;
   - последний merged PR;
   - текущий незавершённый фокус;
   - какие файлы открыть в первую очередь;
   - что не делать в новом чате;
   - какие approval-gates действуют.
3. После отправки prompt Сергею выполнить технический checkpoint.
4. В ходе checkpoint обновить `restart-prompt.md`, `current-state.md`, `roadmap.md`, `decision-log.md`, project-state и другие нужные файлы.
5. После checkpoint проверить, что файл `assistant_codex_worklog/restart-prompt.md` не противоречит prompt, уже отправленному Сергею.

## Запреты

Запрещено:

- начинать `#checkpoint full` без предварительного restart prompt в чате;
- писать общий restart prompt без конкретной текущей точки проекта;
- ссылаться только на память чата вместо GitHub;
- забывать указать, какие ветки/PR уже смержены, а какие только предложены;
- смешивать книжный Book Fast Track и технический PR workflow без пояснения текущего режима.

## Минимальный шаблон restart prompt

```text
Продолжаем проект Sergey-OLife/multi-agent-system в проекте «Пишем книгу».

Главный источник правды — GitHub, не память старого чата.

Сначала открыть:
1. assistant_codex_worklog/restart-prompt.md
2. assistant_codex_worklog/current-state.md
3. assistant_codex_worklog/roadmap.md
4. assistant_codex_worklog/working-protocol.md
5. knowledge/00_manifest/project-state.md
6. knowledge/05_agent_memory/review_queue/review-index.md

Текущий режим: <Book Fast Track | Strict PR Workflow | Source Intake Audit | другой режим>.
Последний merged PR: <номер, название, commit sha>.
Текущий фокус: <одна конкретная рабочая задача>.
Следующий допустимый шаг: <что делать первым>.
Не делать: <главные запреты и ловушки>.
Approval-gates: <что нельзя мержить/менять без явного согласия Сергея>.
```

## Связанные файлы

- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `knowledge/00_manifest/project-state.md`

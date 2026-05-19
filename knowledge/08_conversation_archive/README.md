# Conversation Archive

Статус: human_interaction_archive

Эта папка отделена от технического state/worklog.

Её задача — сохранять смысловые следы разговоров, которые могут потеряться между чатами:

- идеи, которые ещё не стали задачами;
- сомнения Сергея;
- наблюдения о стиле взаимодействия;
- противоречия, которые стоит проверить позже;
- сильные формулы;
- незавершённые решения;
- личные рабочие предпочтения;
- будущие гипотезы для книги, MVP и агентной системы.

## Чем это не является

Conversation archive не является:

- project-state;
- decision-log;
- approval-log;
- source card;
- registry;
- checkpoint;
- заменой GitHub issue;
- местом для raw books, PDF, EPUB, DJVU, MOBI или приватных ссылок;
- местом для полного текста переписки.

## Главное правило

> Архив сохраняет зерно разговора, а не весь разговор.

Не нужно коммитить полные диалоги. Нужно сохранять:

- что возникло;
- почему это может быть важно;
- что ещё не решено;
- куда вернуться;
- какие формулировки или наблюдения могут пригодиться.

## Origin and parallel intake

Новые archive entries должны указывать происхождение записи.

См. протокол:

```text
knowledge/08_conversation_archive/archive_origin_protocol.md
```

Минимальное правило:

- archive entry должен иметь `Origin` block;
- `coverage_scope: full_chat` должен уточнять, full chat какого origin он покрывает;
- если архивы из нескольких чатов создаются параллельно, entry PR не должен трогать общий `index.md`;
- общий `index.md` обновляется отдельным consolidation PR.

Это позволяет хранить архивы отдельно по чатам, но делать их доступными всем агентам без конфликтов по одному index file.

## Правило недублирования архитектуры

Не архивировать то, что уже полноценно отражено в:

- `knowledge/00_manifest/project-state.json`;
- `knowledge/00_manifest/project-state.md`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`;
- `assistant_codex_worklog/decision-log.md`;
- agent proposal;
- registry;
- GitHub issue;
- accepted book/MVP/Svod artifact.

Если мысль уже реализована, в archive entry допустима только короткая пометка:

```text
Реализовано в: <path or PR>
Не дублировать содержание.
```

## Правило добавления

Archive entry добавляется, а не переписывает историю.

Исключения:

- исправить явную ошибку;
- добавить ссылку `implemented_in`;
- сменить статус на `implemented_elsewhere`, `stale`, `superseded`, `long_lived_observation`;
- сократить запись через cleanup PR.

## Срок жизни

Рабочее правило: архивный элемент живёт минимум 14 дней.

После этого его можно:

- перенести в project-state / roadmap / issue / agent proposal / book notes;
- оставить как long-lived observation;
- закрыть как stale;
- удалить только отдельным cleanup PR.

Если запись относится к стилю общения Сергея, устойчивым failure-patterns, противоречиям книги или сильным формулам, её можно хранить дольше 14 дней как `long_lived_observation`.

## Где хранить записи

Рекомендуемый путь:

```text
knowledge/08_conversation_archive/chat_archives/YYYY-MM-DD_short-topic.md
```

Пример:

```text
knowledge/08_conversation_archive/chat_archives/2026-05-18_registry-sync-and-lost-dialogue.md
```

## Индекс

`index.md` — не дубль архива, а навигационная карта.

Он должен хранить только короткие строки:

- archive entry;
- статус;
- review date;
- tags;
- куда перенесено, если перенесено;
- что ещё открыто.

При single-lane archive mode entry PR может обновлять index.

При parallel intake mode entry PR не обновляет index; отдельный consolidation PR добавляет строки после merge entry files.

## Checkpoint capture rule

Во время будущего `#checkpoint full` нужно выполнять короткую проверку:

```text
Есть ли в этом чате смысловые идеи, противоречия, стильовые наблюдения или open loops,
которые НЕ отражены в project-state/roadmap/decision-log/agent proposals/issues?
```

Если нет — ничего не добавлять.

Если да — добавить короткий archive entry в `knowledge/08_conversation_archive/chat_archives/` и обновить `index.md`, кроме parallel intake mode.

Checkpoint не должен превращаться в автоматическую свалку переписки.

## Ограничения размера

Один archive entry должен быть коротким:

- ориентир: до 200 строк;
- без полного текста переписки;
- без больших цитат;
- без raw source material;
- без повторения того, что уже отражено в архитектуре.

Если тема большая, лучше создать несколько коротких entries по смысловым узлам, чем один тяжёлый файл.

## Когда использовать

Использовать, когда Сергей говорит:

- «кажется, это потерялось»;
- «запомни это для нашего взаимодействия»;
- «это может пригодиться потом»;
- «собери идеи из этого чата»;
- «сделай архив разговора»;
- «там была мысль, которую мы ещё не реализовали»;
- «это касается моего стиля общения»;
- `#checkpoint full`, если в чате есть незафиксированные смысловые хвосты.

## Как использовать потом

Когда Сергей спрашивает о планах, противоречиях, забытых идеях или логике взаимодействия, сначала проверять:

1. project-state;
2. roadmap/current-state;
3. relevant agent proposals;
4. conversation archive index;
5. relevant archive entries.

Архив не имеет власти над проектом. Он даёт материал для внимания.

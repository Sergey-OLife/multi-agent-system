# Repository Hygiene Protocol

Дата: 2026-05-18
Статус: operational_protocol

## 1. Назначение

Этот протокол задаёт постоянный порядок работы с чистотой репозитория:

- временные рабочие ветки;
- старые ветки после PR;
- локальные и сгенерированные артефакты;
- случайно добавленные служебные файлы;
- материалы, которые не должны попадать в GitHub.

Главный принцип:

> То, что можно безопасно убрать, убирается. То, что нельзя убрать текущим инструментом, фиксируется в едином ledger и не теряется в чате.

## 2. Единое место учёта

Единый ledger:

- GitHub issue #99 — `Repository hygiene ledger`.

Туда попадает всё, что:

- найдено audit script;
- требует ручной проверки;
- не может быть обработано текущим инструментом;
- не должно оставаться только в чате.

## 3. Команда аудита

Использовать:

```bash
npm run hygiene:audit
```

Скрипт проверяет:

- tracked junk files;
- local junk markers;
- branch list;
- merged branch candidates;
- branches needing classification.

Скрипт не выполняет опасных операций с ветками. Он даёт отчёт.

## 4. Правило работы

Через PR можно убирать только подтверждённые tracked artifacts:

- случайные logs;
- build leftovers;
- committed generated artifacts;
- случайные raw source files;
- temporary files inside repository tree.

Ветки обрабатываются отдельно: только через GitHub UI или будущий явный безопасный инструмент для branch cleanup.

Запрещено:

- считать cleanup завершённым до фактической уборки;
- имитировать уборку веток переносом ссылок;
- трогать ветку открытого PR;
- убирать ветку без проверки связи с PR.

## 5. Правило перед checkpoint

Перед `#checkpoint full` желательно выполнить hygiene audit или сверить issue #99.

Если есть unresolved cleanup:

- фиксировать `cleanup_needed`;
- не писать `completed`;
- не смешивать cleanup с agent activation или code changes.

## 6. Правило после merge PR

После merge PR:

1. Проверить, осталась ли head branch.
2. Если есть безопасный branch cleanup tool — использовать его.
3. Если такого инструмента нет — добавить ветку в issue #99.
4. Не выдавать branch list за чистый, пока это не проверено.

## 7. Exit criteria

Cleanup считается выполненным только если:

- ветки реально убраны;
- tracked junk отсутствует;
- ledger обновлён;
- audit report не показывает confirmed tracked junk.

## 8. Текущий статус

На момент создания протокола:

- targeted tracked junk scan: no confirmed tracked junk;
- branch list: expanded stale/needs-classification set;
- safe branch cleanup tool: unavailable in current tool surface;
- ledger: issue #99 opened.

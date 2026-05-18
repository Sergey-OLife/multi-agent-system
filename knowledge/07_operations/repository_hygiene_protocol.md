# Repository Hygiene Protocol

Дата: 2026-05-18
Статус: operational_protocol

## 1. Назначение

Этот протокол задаёт постоянный порядок работы с мусором репозитория:

- stale branches;
- временные PR branches;
- generated artifacts;
- raw source leaks;
- local build leftovers;
- файлы, которые не должны попадать в GitHub.

Главный принцип:

> То, что можно безопасно удалить, удаляется. То, что нельзя удалить безопасно, попадает в единый ledger и не теряется в чате.

## 2. Единое место учёта

Единый ledger:

- GitHub issue #99 — `Repository hygiene ledger`.

Туда попадает всё, что:

- найдено audit script;
- не может быть удалено текущим инструментом;
- требует ручной проверки;
- может быть удалено только через GitHub UI или будущий explicit delete-branch tool.

## 3. Что удаляется сразу

Через PR можно удалять сразу:

- tracked generated files;
- accidental logs;
- committed build artifacts;
- accidental raw source files;
- temporary files inside repository tree.

Удаление выполняется только явной операцией file delete в PR.

## 4. Что не удаляется автоматически

Ветки не удаляются через force-ref workaround.

Если нет явной безопасной операции `delete branch`, branch cleanup фиксируется в ledger.

Запрещено:

- делать вид, что cleanup завершён;
- переписывать ветку на другой SHA, чтобы имитировать удаление;
- удалять ветку без проверки связи с PR;
- удалять активную ветку открытого PR.

## 5. Команда аудита

Использовать:

```bash
npm run hygiene:audit
```

Скрипт проверяет:

- tracked junk files;
- local junk markers;
- branch list;
- merged branches;
- branches needing classification.

Скрипт не удаляет ветки.

## 6. Правило перед checkpoint

Перед `#checkpoint full` желательно выполнить hygiene audit или сверить ledger.

Если есть unresolved cleanup:

- зафиксировать его как `cleanup_needed`;
- не писать `completed`;
- не смешивать cleanup с agent activation или code changes.

## 7. Правило после merge PR

После merge PR:

1. Проверить, осталась ли head branch.
2. Если есть безопасный delete branch tool — удалить.
3. Если нет — записать branch в issue #99.
4. Не продолжать делать вид, что branch list чистый.

## 8. Exit criteria

Cleanup считается выполненным только если:

- ветки реально удалены;
- tracked junk отсутствует;
- ledger обновлён;
- audit report не показывает confirmed tracked junk.

## 9. Текущий статус

На момент создания протокола:

- tracked junk targeted scan: no confirmed tracked junk;
- branch list: expanded stale/needs-classification set;
- safe delete branch tool: unavailable;
- ledger: issue #99 opened.

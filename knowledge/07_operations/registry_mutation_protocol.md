# Registry Mutation Protocol

Дата: 2026-05-18
Статус: operational_protocol

## 1. Причина появления

Во время подготовки `anti_cliche_editor` возникла ошибка процесса: registry sync сначала попытались рассматривать как ручной full replacement большого `agent_container_registry.md`.

Это опасный путь. Большой registry нельзя регулярно менять руками через полный replacement, если уже есть детерминированный инструмент для точечной мутации.

## 2. Главное правило

> Registry меняется инструментом, а не памятью ассистента.

Для изменения статуса агента использовать:

```bash
npm run registry:sync -- \
  --agent <agent_id> \
  --status <status> \
  --next-action <next_action> \
  --proposal-path <proposal_path>
```

Перед применением использовать dry-run:

```bash
npm run registry:sync -- \
  --agent <agent_id> \
  --status <status> \
  --next-action <next_action> \
  --proposal-path <proposal_path> \
  --dry-run
```

## 3. Запрещённый обычный путь

Не использовать ручной full replacement `agent_container_registry.md` как обычный способ registry sync.

Исключение допустимо только если:

- `registry:sync` недоступен;
- причина недоступности явно зафиксирована;
- полный diff проверен;
- нет риска потери блоков registry.

## 4. Нормальный порядок для agent proposal

1. Создать proposal file.
2. Выполнить `npm run registry:sync -- ... --dry-run`.
3. Если diff точный, выполнить команду без `--dry-run`.
4. Проверить changed files.
5. Проверить, что registry изменён только в блоке нужного агента и итоговой строке, если это требуется.
6. Только после этого открывать PR как ready-for-review.

## 5. Если GitHub tool surface не может выполнить local command

Если текущий исполнитель не может физически запустить `npm run registry:sync`, он обязан:

- не делать вид, что registry sync выполнен;
- не открывать merge-ready PR;
- открыть PR как draft/blocked или остановиться;
- явно указать команду, которую нужно выполнить локально или через future runner;
- не использовать ручной full replacement большого registry без отдельной проверки.

## 6. Почему здесь полезен Go

Go полезен не как замена TypeScript и не как новая архитектурная мода.

Он полезен как deterministic spine для маленьких повторяемых операций:

- найти ровно один agent block;
- отказать при неоднозначности;
- проверить допустимый status transition;
- вставить `proposal_path` в правильное место;
- показать diff;
- не полагаться на память LLM.

## 7. Exit criteria

Registry sync считается выполненным только если:

- proposal file существует;
- registry status обновлён;
- `next_action` обновлён;
- `proposal_path` добавлен;
- diff проверен;
- PR не draft;
- activation не выполнялась без отдельного approval.

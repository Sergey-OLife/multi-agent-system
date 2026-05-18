# Bug Response and Compatibility Protocol

Дата: 2026-05-18
Статус: active / lightweight_protocol_v1

Этот документ фиксирует, как реагировать на будущие баги в Shipyard Modernization, Go-core boundary, wrapper, CI и агентной верфи.

Цель не в том, чтобы заранее построить большой framework.

Цель:

```text
сначала понять класс сбоя,
затем добавить минимальное воспроизведение,
потом сделать узкий fix,
и только после этого думать об архитектуре.
```

---

# 1. Architectural principle

Рабочая формула проекта:

```text
Go проверяет.
TypeScript соединяет.
LLM думает.
Сергей утверждает.
GitHub фиксирует.
```

Эта формула применяется и к багам.

Баг не должен автоматически становиться поводом для:

- schema framework;
- generic validator engine;
- orchestration rewrite;
- smarter wrapper;
- new hard guardrail;
- agent activation;
- transport abstraction layer.

Сначала bug class, failing case, narrow fix.

---

# 2. Bug classes

Каждый баг сначала классифицируется.

## 2.1 Contract bug

Признаки:

- envelope shape нарушен;
- status meaning не совпадает с contract;
- stdout/stderr boundary нарушена;
- compatibility rule не соблюдён;
- команда принимает то, что должна отклонять.

Первое действие:

```text
добавить focused contract test
```

Owner:

```text
Go-core contract / wrapper contract docs
```

## 2.2 Transport bug

Признаки:

- wrapper не нашёл binary;
- stdin/stdout обработаны неправильно;
- invalid stdout смешался с validation failure;
- unavailable выглядит как success;
- exit code misleading.

Первое действие:

```text
добавить wrapper/transport test or explicit fixture
```

Owner:

```text
TypeScript wrapper
```

Важно:

TypeScript не должен начинать принимать validation decisions.

## 2.3 Validation bug

Признаки:

- Go-core неправильно определил `ready`, `needs_revision`, `blocked`, `error`;
- status priority нарушен;
- diagnostics command-locality нарушена;
- requiredUpdates или blockedActions неверно классифицированы.

Первое действие:

```text
добавить minimal Go failing test
```

Owner:

```text
Go-core validation command
```

## 2.4 State sync bug

Признаки:

- `project-state.json` и `project-state.md` расходятся;
- `current-state.md`, `roadmap.md`, `restart-prompt.md` показывают разные точки;
- lastMergedPr/lastMergeCommit устарели;
- checkpoint не отражает последний merge.

Первое действие:

```text
сверить source of truth и сделать checkpoint/state sync PR
```

Owner:

```text
project-state / worklog files
```

## 2.5 CI bug

Признаки:

- CI пропускает skipped validation;
- CI падает не по причине проверяемого контракта;
- workflow скрывает infrastructure failure;
- local dev и CI расходятся.

Первое действие:

```text
добавить minimal CI-facing reproduction or workflow check
```

Owner:

```text
.github/workflows + wrapper contract
```

## 2.6 Agent logic bug

Признаки:

- агент активирован без approval;
- proposal принят за active layer;
- optional layer ведёт себя как hard guardrail;
- peer-to-peer signal стал решением;
- агент меняет project-state/source registry/routes без approval.

Первое действие:

```text
зафиксировать нарушение в agent/workflow protocol, затем narrow PR
```

Owner:

```text
agent registry / working protocol / approval gate
```

## 2.7 Source/material bug

Признаки:

- source card принят за прочитанный источник;
- raw book/text accidentally committed;
- источник используется без source intake;
- copyright boundary нарушена;
- материалу присвоена ложная роль.

Первое действие:

```text
остановить использование источника и провести source intake correction
```

Owner:

```text
source intake / source cards / copyright boundary
```

---

# 3. Default bug response sequence

Если баг найден:

```text
1. Назвать observed behavior.
2. Назвать expected behavior.
3. Классифицировать bug class.
4. Проверить, есть ли уже test/protocol, который должен был это поймать.
5. Если test нет — добавить минимальный failing test or fixture.
6. Сделать самый узкий fix.
7. Проверить, не изменился ли contract meaning.
8. Если изменился project state — сделать checkpoint/state sync.
9. Если изменился contract/protocol — получить explicit approval-gate.
```

Запрещено:

```text
сразу проектировать framework
сразу переносить ответственность между слоями
сразу активировать нового агента
сразу делать hard guardrail
сразу менять status semantics
```

---

# 4. Compatibility rules

## Allowed without semantic approval, still via PR

Можно делать без отдельного смыслового approval, если change действительно narrow:

- добавить optional ignored field;
- добавить новый test case;
- уточнить diagnostic wording без изменения meaning;
- добавить fixture;
- усилить malformed input test;
- исправить typo в protocol/documentation;
- улучшить local helper без изменения contract.

PR всё равно нужен.

## Requires explicit approval-gate

Нужен явный `++` после понятного review, если изменение:

- переименовывает status;
- меняет status priority;
- меняет envelope shape так, что old consumers ломаются;
- меняет meaning diagnostics;
- переносит validation meaning из Go в TypeScript;
- делает wrapper semantic decision-maker;
- даёт Go-core право читать GitHub, вызывать LLM или менять файлы;
- активирует proposal agent;
- превращает optional layer в hard guardrail;
- меняет project-state source of truth;
- меняет checkpoint protocol;
- вводит schema framework или version negotiation.

---

# 5. Layer ownership under bugs

```text
Go-core:
- deterministic validation;
- malformed input behavior;
- status escalation;
- command-local diagnostics;
- contract edge cases.

TypeScript:
- file collection;
- binary invocation;
- transport failure handling;
- stdout parsing;
- unavailable fallback;
- GitHub/LLM/dev workflow shell.

LLM/agents:
- interpretation;
- editorial reasoning;
- ethical review;
- source role reasoning;
- ambiguity handling.

Sergey:
- approval-gates;
- meaning-level decisions;
- activation decisions;
- book direction;
- disputed ethical/product/spiritual frames.

GitHub:
- source of truth;
- history;
- PR workflow;
- checkpoint record.
```

Если баг требует нарушить эту карту ownership, это не bug fix. Это architecture change.

---

# 6. When to consider a framework

Framework можно обсуждать только если повторились минимум три условия:

```text
1. Один и тот же класс багов повторился несколько раз.
2. Narrow tests and narrow fixes уже не удерживают проблему.
3. Есть ясный список invariants, которые текущий код не может поддерживать локально.
```

До этого framework считается premature abstraction.

---

# 7. Safe next step after this protocol

После этого protocol следующий безопасный шаг:

```text
checkpoint full: Shipyard Modernization stability gate passed
```

Если Сергей решит не делать checkpoint сразу, допустимо сначала выполнить review этого protocol PR и убедиться, что он не расширил scope.

После stability checkpoint можно возвращаться к agent queue.

Первый кандидат:

```text
checkpoint_compressor_agent
```

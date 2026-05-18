# Conversation Archive Governance Protocol

Дата: 2026-05-18
Статус: operational_protocol

## 1. Назначение

Этот протокол защищает `knowledge/08_conversation_archive/` от двух крайностей:

1. Потерять важные идеи, потому что они родились в боковом чате и не попали в roadmap/state.
2. Превратить архив в свалку длинных пересказов, дублей и сырых диалогов.

Главное правило:

> В архив попадает только то, что ещё не отражено в архитектуре проекта, но может понадобиться для будущего мышления, книги, MVP, агентной системы или понимания взаимодействия с Сергеем.

## 2. Что сохранять

Сохранять:

- сырые идеи, которые могут дозреть;
- идеи, которые ещё не стали task/PR/issue/agent proposal;
- open loops;
- противоречия, которые стоит проверить позже;
- наблюдения о стиле общения Сергея;
- наблюдения о сбоях ChatGPT;
- сильные формулы;
- будущие аргументы для книги;
- важные сомнения, если они помогают проектной дисциплине;
- указатель на то, где идея уже реализована, если она реализована частично.

## 3. Что не сохранять

Не сохранять:

- полный сырой чат;
- raw books, PDF, EPUB, DJVU, MOBI;
- приватные Drive IDs / URLs;
- личные данные третьих лиц;
- то, что уже полностью отражено в project-state, roadmap, decision-log, issue или agent proposal;
- технический шум;
- повтор формулировок из PR body;
- эмоциональную реакцию без проектной ценности;
- длинную аргументацию, если достаточно одного вывода и ссылки на реализацию.

## 4. Дедупликация

Перед созданием archive entry проверить:

1. Есть ли это уже в `knowledge/00_manifest/project-state.*`?
2. Есть ли это в `assistant_codex_worklog/roadmap.md`?
3. Есть ли это в `assistant_codex_worklog/decision-log.md`?
4. Есть ли это в GitHub issue / PR?
5. Есть ли это в agent proposal?
6. Есть ли это в предыдущих archive entries?

Если идея уже реализована, не пересказывать её заново. Достаточно короткой строки:

```text
Status: implemented
Implemented in: PR #<number> / path/to/file.md
Residual value: why archive still matters, if any
```

## 5. Статусы archive item

Использовать один из статусов:

- `raw` — сырая мысль, пока не ясно, куда её вести;
- `promising` — есть потенциал, но нужно решение;
- `needs_decision` — требуется вопрос Сергею;
- `implemented` — реализовано в PR/file/issue;
- `partially_implemented` — часть реализована, часть ещё open loop;
- `rejected` — отклонено;
- `stale` — потеряло актуальность;
- `long_lived_observation` — важно для стиля/взаимодействия, хранить долго.

## 6. Срок жизни

Базовое правило: entry живёт минимум 14 дней.

После 14 дней entry должен быть классифицирован:

- удалить как stale отдельным cleanup PR;
- оставить как `long_lived_observation`;
- перенести в project-state / roadmap / issue / agent proposal / book note;
- пометить `implemented` и оставить как исторический trace, если он помогает понять происхождение решения.

## 7. Long-lived observations о Сергее

Если информация важна для понимания стиля общения Сергея, она не должна растворяться в разовых entries.

Оформлять так:

```yaml
observation_type: "interaction_style | editorial_preference | anxiety_signal | approval_semantics | authorial_voice"
status: "long_lived_observation"
evidence: "short paraphrase, not raw dialogue"
how_to_use: "specific behavior rule"
risk_if_overused: "how this can become distortion"
review_after: "YYYY-MM-DD"
```

Важно: observations не являются психологическим диагнозом. Это рабочие наблюдения о взаимодействии.

## 8. Checkpoint hook

При `#checkpoint full` выполнять короткую проверку:

> Есть ли в текущем чате смысловые идеи, не отражённые в architecture/state/roadmap/issue/agent proposal?

Если да:

1. Создать или обновить archive entry.
2. Не переписывать весь archive заново.
3. Добавить только новые items или указатели `implemented in`.
4. Не смешивать archive update с technical state, если это делает PR тяжёлым; при необходимости создать отдельный archive PR.

## 9. Не руками, где возможно

Если GitHub tool доступен, assistant должен сам создать archive PR.

Если GitHub tool недоступен, assistant должен:

- сформировать markdown entry;
- дать точный путь;
- не заявлять, что entry сохранён.

Полностью автоматического сбора из всех чатов без явного действия нет. Поэтому capture prompt нужен в каждом чате, где возникла ценная мысль.

## 10. Exit criteria хорошего archive entry

Хороший entry:

- короче исходного разговора минимум в 10 раз;
- содержит только смысловые зерна;
- показывает статус каждой идеи;
- не дублирует реализованное без причины;
- указывает, куда идея может перейти;
- содержит review date;
- не содержит raw private material;
- не имеет власти над проектом без approval.

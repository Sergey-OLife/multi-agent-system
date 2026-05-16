# Current State — Assistant × Codex

Дата фиксации: 2026-05-16

Эта фиксация описывает не содержание книги, а состояние нашей совместной работы с Codex и репозиторием.

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-16
- Статус: создана отдельная рабочая память `assistant_codex_worklog/` и зафиксирована текущая точка восстановления.

## Последний смерженный PR

- PR #14 — `Add assistant Codex worklog`
- Статус: merged
- Смысл: создана отдельная папка рабочей памяти ChatGPT ↔ Сергей ↔ Codex, не относящаяся напрямую к книге.

## Последний продуктовый этап Codex

- PR #13 — `v1.4 Add clickable review links`
- Статус: merged
- Смысл: `review-index.md` стал пультом проверки с кликабельными GitHub-ссылками.

## Текущая версия процесса

- currentVersion: v1.4
- assistant_worklog_version: checkpoint-2026-05-16-full
- next manual action: пользователь проверяет `chapter_00_preface` через review index.

## Текущие главные ссылки

- [Assistant Worklog README](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/README.md)
- [Restart Prompt](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/restart-prompt.md)
- [Current State](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/current-state.md)
- [Roadmap](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/roadmap.md)
- [Working Protocol](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/working-protocol.md)
- [Decision Log](https://github.com/Sergey-OLife/multi-agent-system/blob/main/assistant_codex_worklog/decision-log.md)
- [Review Index](https://github.com/Sergey-OLife/multi-agent-system/blob/main/knowledge/05_agent_memory/review_queue/review-index.md)
- [Plotnikov Map — chapter_00_preface](https://github.com/Sergey-OLife/multi-agent-system/blob/main/knowledge/04_processed/plotnikov_map/plotnikov_chapter_00_preface_map.md)
- [Sync Package — chapter_00_preface](https://github.com/Sergey-OLife/multi-agent-system/blob/main/knowledge/02_project_rules/sync_packages/sync_chapter_00_preface.md)
- [Human Review Guide](https://github.com/Sergey-OLife/multi-agent-system/blob/main/knowledge/00_manifest/human-review-guide.md)
- [Project State](https://github.com/Sergey-OLife/multi-agent-system/blob/main/knowledge/00_manifest/project-state.md)

## Что сейчас надо сделать после возвращения

1. Открыть Review Index.
2. Проверить русифицированные файлы:
   - Plotnikov Map — chapter_00_preface;
   - Sync Package — chapter_00_preface.
3. Принять одно из решений:
   - `approve` — можно делать chapter draft;
   - `needs changes` — перечислить правки;
   - `reject` — не переходить к draft.

## Активные решения

- Полные книги не загружаются в GitHub.
- Сырой Плотников не хранится в репозитории.
- Плотников загружается вручную, по одной главе.
- Все human-readable review artifacts должны быть на русском.
- В ответах пользователю нужно давать кликабельные GitHub-ссылки, а не только пути.
- `review-index.md` должен быть главным пультом проверки.
- `project-state.json` — машинный single source of truth для resume diagnostics.
- `project-state.md` — человекочитаемое зеркало.
- Для новых чатов использовать restart prompt из `assistant_codex_worklog/` и проектные файлы состояния.
- Команда `#checkpoint full` означает: обновить рабочую память, roadmap, decision log и при необходимости protocol/restart prompt.

## Отложено

- Google Drive private source library.
- `v1.5 Add source location registry for Google Drive`.
- Массовая привязка 57 source cards к файлам на Google Drive.
- Chapter draft по `chapter_00_preface` — только после approval map/sync.
- Настоящая глава 1 Плотникова — после завершения работы с предисловием или отдельного решения.

## Что не относится к этой папке

- Эта папка не хранит карту Плотникова как источник.
- Эта папка не хранит черновики книги.
- Эта папка не хранит raw materials.
- Эта папка не заменяет `knowledge/00_manifest/project-state.json`.

Она только помогает восстановить нашу рабочую линию: Сергей ↔ ChatGPT ↔ Codex.

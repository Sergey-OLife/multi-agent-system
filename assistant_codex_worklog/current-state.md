# Current State — Assistant × Codex

Дата фиксации: 2026-05-16

Эта фиксация описывает не содержание книги, а состояние нашей совместной работы с Codex и репозиторием.

## Последний проверенный этап

Последний смерженный PR:

- PR #13 — `v1.4 Add clickable review links`
- Статус: merged
- Смысл: `review-index.md` стал пультом проверки с кликабельными GitHub-ссылками.

## Текущая версия процесса

- currentVersion: v1.4
- next manual action: пользователь проверяет `chapter_00_preface` через review index.

## Текущие главные ссылки

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

## Принятые решения

- Полные книги не загружаются в GitHub.
- Сырой Плотников не хранится в репозитории.
- Плотников загружается вручную, по одной главе.
- Все human-readable review artifacts должны быть на русском.
- В ответах пользователю нужно давать кликабельные GitHub-ссылки, а не только пути.
- `review-index.md` должен быть главным пультом проверки.
- `project-state.json` — машинный single source of truth для resume diagnostics.
- `project-state.md` — человекочитаемое зеркало.
- Для новых чатов использовать restart prompt из этой папки и проектные файлы состояния.

## Что не относится к этой папке

- Эта папка не хранит карту Плотникова как источник.
- Эта папка не хранит черновики книги.
- Эта папка не хранит raw materials.
- Эта папка не заменяет `knowledge/00_manifest/project-state.json`.

Она только помогает восстановить нашу рабочую линию: Сергей ↔ ChatGPT ↔ Codex.

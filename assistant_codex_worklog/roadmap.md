# Roadmap — Assistant × Codex

Эта дорожная карта описывает не книгу, а рабочий процесс с Codex и мультиагентной системой.

## Уже завершено

- v0.2 — routing baseline
- v0.3 — foundation agents diagnostics
- v0.4 — knowledge hierarchy
- v0.5 — source cards registry
- v0.6 — contextologist → source registry
- v0.7 — manual chapter workflow structure
- v0.8 — chapter processing artifact templates
- v0.9 — project resume protocol
- v1.0 — Process Plotnikov preface map and sync package
- v1.1 — Derive project resume diagnostics from project-state
- v1.2 — Fix project-state path resolution
- v1.3 — Add Russian review layer for artifacts
- v1.4 — Add clickable review links

## Следующий ручной шаг

Пользователь проверяет:

- Plotnikov Map — chapter_00_preface
- Sync Package — chapter_00_preface

Решение пользователя:

- approve — можно переходить к chapter draft;
- needs changes — правим map/sync;
- reject — не идём дальше.

## Ближайшие планы

### v1.5 — Add source location registry for Google Drive

Цель: связать source cards с приватной библиотекой пользователя в Google Drive без загрузки raw books в GitHub.

Нужно создать:

- `knowledge/03_source_books/source-locations.registry.json`
- `knowledge/03_source_books/source-location.template.md`
- source-location entries для ключевых источников.

Правила:

- raw books не коммитить;
- приватные Google Drive ссылки не делать публичными без отдельного решения;
- хранить только `raw_location: private_google_drive`, `drive_filename`, `raw_text_committed: false`;
- если source card есть, но фрагмент не загружен, агент не имеет права делать вид, что читал книгу.

### v1.6 — Process chapter_00_preface draft

Только после approval map/sync package.

Создаётся:

- `book/01_drafts/chapter_00_preface.md`

Не создаётся:

- reviewed;
- approved;
- update package.

### v1.7 — Review chapter_00_preface draft

Проверка по слоям:

- Свод;
- антибанальность;
- драматургия;
- Частотный язык;
- Тихий Мастер;
- духовная сфера без внутренней конфессиональной лексики;
- отсутствие пересказа Плотникова.

### v1.8 — Approve chapter_00_preface

Только после явного approval пользователя.

### v1.9 — Update package after chapter_00_preface

Фиксация новых правил, изменений стиля, workflow, source usage.

### v2.0 — Process Plotnikov chapter 01

Пользователь загружает настоящую главу 1: `Найдите достаточную причину`.

Сначала создаются только:

- plotnikov map;
- sync package.

## Отложенные задачи

- Массовая привязка всех 57 source cards к Google Drive.
- Полная система source location registry.
- Более глубокая самообучаемость агентов через update packages.
- Автоматическое обновление review queue при каждом новом map/sync package.
- Отдельный `assistant_codex_worklog` checkpoint после каждой крупной серии PR.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не начинать draft без approval map/sync.
- Давать пользователю кликабельные ссылки.
- Все human-readable artifacts — на русском.
- ChatGPT/Codex должен честно говорить, если полного материала нет.

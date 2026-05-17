# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub и мультиагентной системой после перехода к режиму `Book Fast Track`.

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-17
- Смысл: зафиксировать состояние после PR #24 и после решения разделить строгий технический workflow и быстрый книжный workflow.

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
- v1.5 — Add source location registry for Google Drive
- v1.6 — Train anti_cliche_editor on preface review case
- v1.7 — Add anti-cliche review map for chapter_00_preface
- v1.8 — Apply approved anti-cliche revisions to chapter_00_preface draft
- v1.9 — Create reviewed chapter_00_preface artifact
- PR #24 — `v1.9 Create reviewed preface chapter`

## Новое процессное решение

### Book Fast Track

Для глав книги больше не использовать тяжёлую цепочку GitHub-артефактов на каждый промежуточный шаг.

Правильный режим:

1. Писать и редактировать главу в чате.
2. Использовать агентов как внутренние редакторские слои, а не как отдельные файлы на каждый проход.
3. Давать Сергею один цельный читательский текст и короткую редакторскую записку.
4. GitHub использовать для фиксации принятого результата, а не для каждого промежуточного размышления.
5. Один PR может фиксировать принятую главу или пакет из 1–2 глав.

### Strict PR Workflow

Остаётся обязательным для:

- кода;
- маршрутов агентов;
- guardrails;
- source registries;
- tests/baseline;
- project-state;
- working protocols;
- source cards/training cases;
- Сводов, MVP и карт контекстов.

## Текущий литературный шаг

Продолжить `chapter_00_preface` в чате как читательскую версию Введения.

Не начинать с нового PR.

Принятые решения по Введению:

- Заголовок: `От автора: перед входом`
- Начало: `Эта книга не обещает чудо — она даёт карту. И начинается с отказа.`
- Формула: `Она не обещает, что вы быстро решите финансовые вопросы.`
- Введение — морковка, а не ранний разбор кухни MLM.
- В начале не перегружать читателя языком продаж.
- Сначала человек, узнавание и доверие; инструменты, термины и кухня — позже.
- Принята формула: `В деле, где один человек приглашает другого идти рядом, доверие становится рабочей зоной ответственности.`

## Следующий ход по книге

Продолжить текст после фрагмента про первую границу разумного сообщества.

Редакторский переход:

- от первой границы доверия;
- к обещанию книги;
- не «научим продавать правильно», а «будем учиться различать, где путь остаётся человеческим, а где человек становится средством».

## Ближайшие технические планы

Только после возвращения к техническому режиму или по отдельному запросу:

- обновить `project-state` под новый Book Fast Track;
- при необходимости упростить chapter workflow templates;
- проверить, нужно ли сохранять `reviewed` stage как optional, а не обязательную стадию;
- привести `review-index.md` к новому режиму, чтобы он не заставлял читать дубли глав.

## Отложенные задачи

- Массовая привязка всех source cards к Google Drive.
- Более глубокая самообучаемость агентов через update packages.
- Автоматическое обновление review queue при новых map/sync package.
- Полная интеграция Book Fast Track в agent routing.
- Следующая глава Плотникова и наша глава 1 — после завершения читательской версии Введения или отдельного решения.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не заставлять Сергея читать одно и то же несколько раз без редакторской необходимости.
- В книжной работе сначала чатовая редактура, потом GitHub фиксация.
- Давать кликабельные ссылки, если файл нужно открыть.
- Все human-readable artifacts — на русском.
- Если полного материала нет, не делать вид, что источник прочитан.
- Для кода и агентов сохранять строгий PR workflow.

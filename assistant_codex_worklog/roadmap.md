# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track и источниками проекта «Пишем книгу».

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-17
- Версия: `v2.2`
- Смысл: зафиксировать состояние после сборки первого блока агентной среды: `socratic_lantern_agent` и `ethical_persuasion_guard` активированы как optional workflow layers.

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
- v2.0 — Checkpoint Book Fast Track workflow
- v2.1 — Checkpoint project sources uploaded and Source Intake Audit ready
- v2.2 — Checkpoint optional agent environment: Socratic Lantern + Ethical Persuasion

## PR #31–45 summary

- PR #31–33: registered first wave of living project docs and project source cards with cautious statuses.
- PR #34: added `socratic_lantern_agent` proposal.
- PR #35: added Socratic block targeted audit and Waltman/Codd duplicate check.
- PR #36: added targeted reading notes for Waltman/Codd, Farnsworth, Overholser and preliminary duplicate result.
- PR #37: added Socratic block status and source-location override.
- PR #38: added controlled activation proposal for `socratic_lantern_agent`.
- PR #39: added `+` / `++` shorthand protocol.
- PR #40: activated `socratic_lantern_agent` as optional workflow layer.
- PR #41: added `ethical_persuasion_guard` proposal.
- PR #42: added automatic mergeability check rule and linked protocol addenda from restart path.
- PR #43: added Cialdini targeted reading note and medical caution audit.
- PR #44: added controlled activation proposal for `ethical_persuasion_guard`.
- PR #45: activated `ethical_persuasion_guard` as optional workflow layer.

## Book Fast Track

Для глав книги не использовать тяжёлую цепочку GitHub-артефактов на каждый промежуточный шаг.

Правильный режим:

1. Писать и редактировать главу в чате.
2. Использовать агентов как внутренние редакторские слои, а не как отдельные файлы на каждый проход.
3. Давать Сергею один цельный читательский текст и короткую редакторскую записку.
4. GitHub использовать для фиксации принятого результата, а не для каждого промежуточного размышления.
5. Один PR может фиксировать принятую главу или пакет из 1–2 глав.

## Strict PR Workflow

Остаётся обязательным для:

- кода;
- маршрутов агентов;
- guardrails;
- source registries;
- tests/baseline;
- project-state;
- working protocols;
- source cards/training cases;
- Сводов, MVP и карт контекстов;
- агентных паспортов, если они меняют маршруты или поведение системы.

## Действующие optional workflow layers

### `socratic_lantern_agent`

Статус: active optional workflow layer.

Роль: проверяет вопросы, диалоги, сцены выбора, наставничество и MVP-развилки.

Формула:

> Вопрос — это фонарь, а не поводок.

Не является:

- hard guardrail;
- route-required режимом;
- обязательной проверкой всех текстов.

### `ethical_persuasion_guard`

Статус: active optional workflow layer.

Роль: проверяет влияние, продающие тексты, CTA, офферы, Olife/здоровье, срочность, авторитет, социальное доказательство и конструктивное давление.

Формула:

> Оставить огонь. Убрать дым.

Не является:

- hard guardrail;
- route-required режимом;
- анти-маркетинговым стерилизатором;
- автоматической блокировкой текстов.

## Новая техническая линия: Source Intake Audit

Сергей загрузил в источники проекта большую волну материалов. Их нельзя считать автоматически обработанной библиотекой.

Следующий технический блок:

`Source Intake Audit: первая волна проектных источников`

Задачи блока:

1. Составить инвентарь загруженных материалов.
2. Проверить, какие уже есть в Google Drive/source locations.
3. Найти дубли, пустые оболочки и неразобранные файлы.
4. Уточнить статус каждого источника: `usable_now`, `needs_enrichment`, `needs_upload`, `placeholder`, `archive_duplicate`, `needs_native_doc`.
5. Создать/обновить карточки источников.
6. Указать роль источника, где можно использовать, где нельзя, зоны книги и агентные слои.
7. Отметить, какие источники требуют отдельного агента или agent proposal.

## Потенциальные агенты после v2.2

Пока не создавать все автоматически. Проверять по реальной пользе.

Кандидаты:

- `source_intake_auditor` — аудит источников, дублей, карточек и статусов.
- `cbt_thought_check_agent` — проверка мысли, когнитивных искажений, поспешных выводов.
- `emotion_compass_agent` — эмоция под реакцией без превращения главы в терапию.
- `gameful_path_designer` — квесты, маршрут новичка и тренажёр без инфантильной геймификации.

Рекомендуемый следующий технический агент:

- `source_intake_auditor`, если цель — привести библиотеку в порядок.

Альтернативный следующий тематический агент:

- `cbt_thought_check_agent`, если цель — усилить психологическую точность глав, MVP-развилок и маршрута новичка.

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
- не `научим продавать правильно`, а `будем учиться различать, где путь остаётся человеческим, а где человек становится средством`.

## Ближайшие технические планы

1. Создать/активировать `source_intake_auditor` или начать Source Intake Audit без отдельного агента.
2. Провести Source Intake Audit первой волны источников.
3. Создать или обновить карточки источников для проектных документов и ключевых внешних материалов.
4. Определить, какие источники порождают отдельных агентов.
5. Массово привязать source cards к source locations там, где это безопасно и не раскрывает private IDs.
6. Рассмотреть `cbt_thought_check_agent` как следующий тематический слой.
7. Вернуться к Введению через Book Fast Track, когда технический блок будет достаточно собран.

## Отложенные задачи

- Более глубокая самообучаемость агентов через update packages.
- Автоматическое обновление review queue при новых map/sync package.
- Полная интеграция Book Fast Track в agent routing.
- Следующая глава Плотникова и наша глава 1 — после завершения читательской версии Введения или отдельного решения.
- Hard guardrail activation для новых агентов — только отдельным approval и отдельным PR.

## Нельзя забыть

- Не загружать raw books в GitHub.
- Не хранить сырой текст Плотникова.
- Не делать вид, что все загруженные источники уже проаудированы.
- Не заставлять Сергея читать одно и то же несколько раз без редакторской необходимости.
- В книжной работе сначала чатовая редактура, потом GitHub фиксация.
- Давать кликабельные ссылки, если файл нужно открыть.
- Все human-readable artifacts — на русском.
- Если полного материала нет, не делать вид, что источник прочитан.
- Для кода и агентов сохранять строгий PR workflow.

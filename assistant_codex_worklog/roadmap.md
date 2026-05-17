# Roadmap — Assistant × Codex

Эта дорожная карта описывает рабочий процесс с Codex, GitHub, мультиагентной системой, Book Fast Track и источниками проекта «Пишем книгу».

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-17
- Версия: `v2.3`
- Смысл: зафиксировать состояние после расширения optional agent environment до четырёх активных слоёв: Socratic Lantern, Ethical Persuasion, CBT Thought Check, Source Intake Auditor.

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
- v2.3 — Checkpoint optional agent environment: CBT Thought Check + Source Intake Auditor

## PR #47–54 summary

- PR #47: added `cbt_thought_check_agent` proposal.
- PR #48: added Judith Beck / CBT targeted reading notes and pseudotherapy boundary audit.
- PR #49: added controlled activation proposal for `cbt_thought_check_agent`.
- PR #50: activated `cbt_thought_check_agent` as optional workflow layer.
- PR #51: added `source_intake_auditor` proposal with orchestration fields for future `workflow_conductor_agent`.
- PR #52: added Source Intake Audit template and pilot audit.
- PR #53: added controlled activation proposal for `source_intake_auditor`.
- PR #54: activated `source_intake_auditor` as optional workflow layer.

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

Формула:

> Вопрос — это фонарь, а не поводок.

Применение: вопросы, диалоги, сцены выбора, наставничество, MVP-развилки.

Не является hard guardrail, route-required режимом или обязательной проверкой всех текстов.

### `ethical_persuasion_guard`

Статус: active optional workflow layer.

Формула:

> Оставить огонь. Убрать дым.

Применение: влияние, продающие тексты, CTA, офферы, Olife/здоровье, срочность, авторитет, социальное доказательство и конструктивное давление.

Не является hard guardrail, route-required режимом, анти-маркетинговым стерилизатором или автоматической блокировкой текстов.

### `cbt_thought_check_agent`

Статус: active optional workflow layer.

Формула:

> Мысль — это не приговор. Это гипотеза, которую можно проверить.

Применение: внутренние монологи, страхи, сомнения, возражения, MVP-развилки, проверка факта/догадки/эмоции/вывода.

Не является hard guardrail, route-required режимом, терапией, диагностикой или инструментом продаж.

### `source_intake_auditor`

Статус: active optional workflow layer.

Формула:

> Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.

Применение: проверка статуса источника, дубли, source cards, allowed/forbidden use, usability status, orchestration fields.

Не является hard guardrail, route-required режимом или `workflow_conductor_agent`.

## GitHub Actions safety

Не отключать `Require approval for workflow runs` / GitHub Actions workflow approval без отдельного решения Сергея.

Текущий ручной барьер `Approve and run workflows` считается частью безопасности, потому что AI/agent PR не должен автоматически получать доступ к секретам и критическим workflows.

## Source Intake Audit

Source Intake Audit теперь имеет:

- `source_intake_auditor` proposal;
- Source Intake Audit template;
- pilot audit первой небольшой группы источников;
- controlled activation proposal;
- optional workflow layer.

Аудитор может применяться без отдельного вопроса для локальной проверки источника, но не может сам менять registry/project-state или активировать агентов без approval.

## Архитектурная линия: будущий `workflow_conductor_agent`

Сергей зафиксировал потребность в агенте-дирижёре / агенте-оркестранте.

Разделение:

- `source_intake_auditor` готовит партитуру источников;
- будущий `workflow_conductor_agent` дирижирует агентами;
- approval остаётся у Сергея.

Следующий наиболее эффективный технический блок:

`workflow_conductor_agent` proposal.

Он должен быть координатором ансамбля, но не системой самоуправления.

Он должен отвечать:

1. Какие агенты нужны в задаче?
2. В каком порядке они работают?
3. Кто главный, кто вспомогательный?
4. Где конфликт между слоями?
5. Где нужен `++`?
6. Что нельзя автоматизировать?

Не включать его сразу как optional layer. Сначала proposal, потом controlled activation, потом отдельное approval.

## Потенциальные агенты после v2.3

Кандидаты:

- `workflow_conductor_agent` — координатор ансамбля агентов в конкретной задаче.
- `emotion_compass_agent` — эмоция под реакцией без превращения главы в терапию.
- `gameful_path_designer` — квесты, маршрут новичка и тренажёр без инфантильной геймификации.

Рекомендуемый следующий агент:

- `workflow_conductor_agent`.

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

1. Создать `workflow_conductor_agent` proposal.
2. Проверить его на риск самозахвата власти.
3. Зафиксировать, что approval остаётся у Сергея.
4. После proposal — controlled activation proposal.
5. После отдельного approval — optional workflow layer, не hard guardrail.
6. Потом продолжить Source Intake Audit первой волны источников или вернуться к Введению через Book Fast Track.

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

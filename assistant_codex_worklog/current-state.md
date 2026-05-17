# Current State — Assistant × Codex

Дата фиксации: 2026-05-17

Эта фиксация описывает состояние совместной работы Сергей ↔ ChatGPT ↔ GitHub/Codex после разворота проекта в режим агентной верфи.

## Последний checkpoint

- Команда: `#checkpoint full`
- Дата: 2026-05-17
- Статус: фиксируется состояние после PR #60.
- Версия состояния: `v2.4`

## Последний смерженный PR

- PR #60 — `Add approval gate keeper proposal`
- Статус: merged
- Merge commit: `e41e9aa3367d23165798b8b87b73c34fb84a9a9a`
- Смысл: `approval_gate_keeper` добавлен как proposal и синхронизирован в `agent_container_registry.md`; агент не активирован.

## Главный поворот этапа

Книга временно поставлена на паузу до появления необходимого набора агентов.

Рабочая метафора Сергея:

> Сначала достраиваем корабль, потом плывём. Не собираем корабль по ходу путешествия. Даже попугай на борту не лишняя деталь, а друг капитана.

Текущий режим: `Agent Shipyard` / агентная верфь.

Книга не продолжается автоматически. Возврат к книге требует отдельного решения Сергея.

## Что сделано после v2.3

- PR #56: добавлено правило лимита чатового restart prompt до 6000 знаков с пробелами; полный `restart-prompt.md` может быть подробнее.
- PR #57: добавлен proposal `workflow_conductor_agent`; агент остаётся proposal, не activation.
- PR #58: добавлена архитектура агентной верфи:
  - `agent_container.template.md`;
  - `agent_container_registry.md`;
  - `hybrid_coordination_model.md`;
  - `materials_research_topology.md`.
- PR #59: добавлен proposal `agent_registry_librarian`; registry синхронизирован.
- PR #60: добавлен proposal `approval_gate_keeper`; registry синхронизирован.

## Агентная архитектура

Зафиксирована гибридная агентная архитектура:

> Centralized Coordination + Peer-to-Peer communication.

Смысл:

- `workflow_conductor_agent` координирует маршрут, порядок входа агентов, конфликты и approval-gates;
- агенты могут обмениваться specialist signals напрямую;
- peer-to-peer signal не является решением;
- peer-to-peer не обходит approval Сергея;
- центральный координатор не получает власть менять систему самостоятельно.

## Топология материалов

Зафиксирована топология исследовательских материалов:

> Coordinator-based star + fully-connected semantic topology.

Смысл:

- координатор держит карту материалов;
- материалы связаны между собой как исследовательская сеть, а не как склад файлов;
- один источник может питать несколько агентов, глав, сцен, MVP-модулей и проверок;
- каждая связь должна иметь тип: `supports`, `warns`, `conflicts_with`, `informs_style`, `feeds_agent`, `feeds_chapter`, `requires_fact_check`, `requires_dosage`, `requires_approval` и др.;
- полносвязность материалов не отменяет source intake, dosage, fact-check, copyright boundary и approval.

## Реестр агентной верфи

`agent_container_registry.md` теперь parser-safe YAML registry.

Текущие параметры:

- schema version: `1.2`.
- всего контейнеров/кандидатов: 63.
- `workflow_conductor_agent`: status `proposal`.
- `agent_registry_librarian`: status `proposal`.
- `approval_gate_keeper`: status `proposal`.
- остальные контейнеры остаются container / optional_layer согласно registry.

Важно: proposal не является activation.

## Активные optional workflow layers

Активны только четыре optional workflow layers:

1. `socratic_lantern_agent`
   - формула: `Вопрос — это фонарь, а не поводок`;
   - не hard guardrail.

2. `ethical_persuasion_guard`
   - формула: `Оставить огонь. Убрать дым`;
   - не hard guardrail.

3. `cbt_thought_check_agent`
   - формула: `Мысль — это не приговор. Это гипотеза, которую можно проверить`;
   - не терапия, не диагностика, не инструмент продаж;
   - в контейнере уточнено: лёгкий юмор допустим, клоунада нет.

4. `source_intake_auditor`
   - формула: `Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать`;
   - не hard guardrail;
   - не route-required;
   - не workflow conductor.

## Новые proposal-агенты

### `workflow_conductor_agent`

Статус: proposal.

Роль: координатор ансамбля агентов, не начальник системы.

Должен определять:

- главный и вспомогательные агенты;
- порядок входа;
- конфликт слоёв;
- approval-gates;
- безопасный следующий шаг;
- что нельзя автоматизировать.

Не имеет права самостоятельно менять маршруты, project-state, source registry, guardrails или активировать агентов.

### `agent_registry_librarian`

Статус: proposal.

Роль: библиотекарь агентной системы.

Следит за:

- дублями;
- статусами container/proposal/controlled activation/optional layer/route element/hard guardrail;
- registry sync;
- риском ложной активации;
- тем, чтобы новый агент имел собственную работу.

### `approval_gate_keeper`

Статус: proposal.

Роль: сторож approval-шлюза.

Главная формула:

> `+` двигает работу. `++` открывает конкретный шлюз. Ни один знак не даёт системе права решать шире контекста.

Правило: если после `++` PR существенно изменён, перед merge нужен новый `++`.

## Короткие команды

- `+` означает продолжить следующий логичный безопасный шаг.
- `+` не является approval на merge, activation или изменение состояния проекта.
- `++` означает approval текущего понятного approval-gate.
- Если approval-gates несколько, нужно уточнить, какой именно утверждается.
- Если после approval PR был существенно изменён, нужен новый `++`.

## Auto-merge

Сергей включил `Allow auto-merge` в репозитории.

Это даёт возможность включать auto-merge, если PR ждёт обязательных checks/review. Но approval-gates не отменяются: merge или auto-merge возможны только после понятного `++` и self-review.

## Checkpoint restart prompt rule

- Чатовый restart prompt перед `#checkpoint full` должен быть не более 6000 знаков с пробелами.
- `assistant_codex_worklog/restart-prompt.md` может быть длиннее и подробнее.
- В чатовый prompt не вставлять большие фрагменты книги, raw source text или длинные описательные вставки; использовать GitHub-якоря и короткую рабочую точку.

## Текущее состояние книги

Книга на паузе до отдельного решения Сергея.

Последний литературный фокус до паузы: `chapter_00_preface`, читательская версия Введения `От автора: перед входом`.

Сохранённый смысловой узел:

- книга не обещает чудо, а даёт карту;
- введение — морковка, не ранний разбор кухни MLM;
- первая граница разумного сообщества: человек почти согласен, но ещё не до конца понял, на что соглашается;
- следующий книжный ход после возвращения: перейти от первой границы к обещанию книги — учиться различать, где путь остаётся человеческим, а где человек становится средством.

Не создавать `book/03_approved/chapter_00_preface.md` без отдельного финального approval.

## Текущие паузы и запреты

- Не продолжать книгу автоматически: текущий режим — агентная верфь.
- Не активировать `workflow_conductor_agent`, `agent_registry_librarian`, `approval_gate_keeper` без controlled activation и отдельного approval.
- Не делать новых hard guardrails без отдельного решения Сергея.
- Не считать все загруженные источники проаудированными.
- Не коммитить raw books, PDF/EPUB/DJVU/MOBI, сырой текст источников, приватные Drive IDs/URLs.
- Не трактовать source card как доказательство полного чтения источника.

## Следующий логичный шаг

Следующий P0-кандидат ядра верфи:

`project_state_synchronizer` proposal.

Причина: после серии PR состояние уже расходилось между фактическим `main`, registry, roadmap, restart prompt и project-state. Нужен агент, который удерживает синхронизацию состояния проекта после merge, checkpoint и смены режима.

Альтернативы после отдельного решения Сергея:

- `checkpoint_compressor_agent` proposal;
- `source_card_builder` proposal;
- controlled activation для уже созданных proposal-агентов;
- возврат к книге через Book Fast Track.

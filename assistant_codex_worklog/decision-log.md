# Decision Log — Assistant × Codex

Этот журнал фиксирует ключевые решения рабочего процесса Сергей ↔ ChatGPT ↔ Codex/GitHub.

## Решения

### 1. Не начинать новый чат с нуля

Решение: использовать `assistant_codex_worklog/` и проектные state-файлы как рабочие якоря.

### 2. Отделить работу с Codex от книги

`assistant_codex_worklog/` хранит рабочий слой управления процессом, а не raw books и не черновики книги.

### 3. Главный источник правды — GitHub

Новый чат восстанавливается по файлам репозитория, а не по памяти старого чата.

### 4. Все ответы с файлами должны содержать кликабельные ссылки

Если Сергею нужно открыть, проверить или сравнить файл, давать кликабельную GitHub-ссылку, а не только путь.

### 5. Новая задача или текущий PR

- если PR смержен — следующая веха обычно новая задача/ветка;
- если PR открыт и правим замечание reviewer — это ответ в текущий PR/ветку;
- если работа сделана, но PR не виден — создать PR из той же ветки, а не плодить дубль.

### 6. Google Drive для исходников

Полные материалы держать в приватной библиотеке или в источниках проекта, не в GitHub.

Не грузить raw books, PDF/EPUB/DJVU/MOBI и сырой текст Плотникова в репозиторий.

### 7. Approval-gates

Доступ к GitHub не равен разрешению на смысловое действие.

Approval Сергея требуется для merge, activation, route/guardrail/project-state/source registry changes, изменения смысла книги и спорных этических/духовных/маркетинговых рамок.

### 8. Двойная самопроверка PR

Каждый PR до передачи Сергею проходит два self-review прохода:

- технический: mergeable, не draft, ожидаемые файлы, state/tests sync, raw materials не попали в repo;
- смысловой: нет перескока стадий, нет ложного статуса, нет новой красивой риторики вместо правила.

### 9. Ограниченный auto-merge

ChatGPT может пытаться мержить только после двойной самопроверки и `++`.

Сергей включил `Allow auto-merge`; это помогает при ожидании checks/review, но не отменяет approval-gates.

### 10. Введена команда checkpoint

Команда `#checkpoint full` означает сохранить полную рабочую точку.

При таком checkpoint обновляются worklog/state-файлы, restart prompt и при необходимости project-state.

### 11. Book Fast Track

Код, агенты, маршруты, guardrails, registries, tests и project-state — через строгий PR workflow.

Главы книги — сначала быстрый редакторский цикл в чате; GitHub фиксирует уже принятый результат.

### 12. Текущее состояние Введения

Введение `chapter_00_preface` отложено до возвращения к книге.

Приняты решения:

- Заголовок: `От автора: перед входом`.
- Начало: `Эта книга не обещает чудо — она даёт карту. И начинается с отказа.`
- Введение — морковка, а не ранний разбор кухни MLM.
- Ключ: чужое доверие не должно становиться инструментом.

### 13. Source Intake Audit и автономное создание агентов

Новый источник не считается рабочим только потому, что он назван.

Источник становится рабочим, когда есть материал, карточка, роль и правило применения.

ChatGPT может предлагать новых агентов, если есть отдельная функция, но агент не должен плодить дубли и хаос.

### 14. Загружена первая большая волна источников проекта

Сергей загрузил материалы КПТ/Бек, сократический метод, эмоции, влияние, драматический треугольник, SuperBetter и ключевые проектные документы.

Эти материалы считаются сырьём, а не полностью проаудированной библиотекой.

### 15. Короткие команды Сергея: `+` и `++`

- `+` означает продолжить следующий логичный безопасный шаг.
- `+` не approval.
- `++` approval текущего понятного approval-gate.
- Если gates несколько — требуется уточнение.
- Если после `++` PR существенно изменён — нужен новый `++`.

### 16. Автоматическая проверка mergeability

Перепроверка mergeability открытого PR не требует отдельного подтверждения Сергея.

### 17. Restart prompt перед checkpoint full

Перед `#checkpoint full` ChatGPT обязан сначала прислать Сергею корректный restart prompt для следующего чистого чата.

Чатовый restart prompt ограничен 6000 знаками с пробелами. Полный `assistant_codex_worklog/restart-prompt.md` может быть длиннее.

### 18. `socratic_lantern_agent` активирован как optional workflow layer

Формула: `Вопрос — это фонарь, а не поводок`.

### 19. `ethical_persuasion_guard` вместо анти-маркетингового фильтра

Формула: `Оставить огонь. Убрать дым`.

Сохранять убеждение, CTA, предпринимательский импульс и конструктивное давление; отсекать дым манипуляции.

### 20. Чалдини используется как risk map, не как учебник давления

Принципы влияния допустимы, если помогают человеку увидеть реальность яснее; недопустимы как playbook давления.

### 21. Для здоровья/Olife действует medical caution audit

Не использовать диагноз, страх за семью, обещания лечения, fits-all claims и замену врача.

### 22. `ethical_persuasion_guard` активирован как optional workflow layer

Не hard guardrail, не route-required, не анти-маркетинговый стерилизатор.

### 23. `cbt_thought_check_agent` активирован как optional workflow layer

Формула: `Мысль — это не приговор. Это гипотеза, которую можно проверить`.

Не терапия, не диагностика, не инструмент продаж.

### 24. КПТ-источники используются как каркас точного мышления, не как терапия

Проект не лечит читателя, а помогает точнее думать и честнее действовать.

### 25. `source_intake_auditor` создан не как дирижёр, а как входной контроль библиотеки

Он готовит партитуру источников; будущий `workflow_conductor_agent` дирижирует агентами; approval остаётся у Сергея.

### 26. Source Intake Audit получил template и pilot audit

Созданы `source_intake_audit_template.md` и `pilot_source_intake_audit_01.md`.

### 27. `source_intake_auditor` активирован как optional workflow layer

Не hard guardrail, не route-required, не workflow conductor, не меняет registry/project-state без approval.

### 28. GitHub Actions workflow approval остаётся включённым

Не отключать `Require approval for workflow runs` без отдельного решения Сергея.

### 29. `workflow_conductor_agent` создан как proposal

PR #57 смержен.

Решение:

- агент является координатором ансамбля, не начальником системы;
- не активирован;
- не меняет routes, guardrails, project-state, source registry и не мержит PR без approval.

### 30. Книга поставлена на паузу ради агентной верфи

Решение Сергея:

> Сначала достраиваем корабль, потом плывём.

До отдельного решения книга не продолжается. Текущий режим — агентная верфь.

### 31. Агентная система имеет гибридную архитектуру

PR #58 смержен.

Решение:

> Centralized Coordination + Peer-to-Peer communication.

`workflow_conductor_agent` координирует маршрут, но агенты могут обмениваться specialist signals. Peer-to-peer signal не равен решению и не обходит approval Сергея.

### 32. Материалы имеют звёздно-полносвязную топологию

PR #58 смержен.

Решение:

> Coordinator-based star + fully-connected semantic topology.

Координатор держит карту, материалы держат связи. Полносвязность не отменяет fact-check, source intake, dosage, copyright boundary и approval.

### 33. Агентная верфь получила parser-safe YAML registry

PR #58 смержен.

`agent_container_registry.md` содержит 63 containers/candidates и использует parser-safe YAML. Строковые значения обёрнуты в кавычки, чтобы двоеточия не ломали будущий tooling.

### 34. `agent_registry_librarian` создан как proposal

PR #59 смержен.

Решение:

- библиотекарь агентов следит за дублями, статусами, registry sync и ложной активацией;
- не активирован;
- registry синхронизирован: status `proposal`, next_action `controlled_activation`.

### 35. `approval_gate_keeper` создан как proposal

PR #60 смержен.

Решение:

- сторож approval-шлюза различает `+`, `++`, текстовое approval и несколько gates;
- не активирован;
- registry синхронизирован: status `proposal`, next_action `controlled_activation`;
- `+` не merge approval;
- `++` открывает только текущий понятный gate.

### 36. `project_state_synchronizer` создан как proposal

PR #62 смержен.

Решение:

- синхронизатор состояния проекта следит, чтобы main, registry, roadmap, restart prompt, current-state и project-state не расходились;
- не активирован;
- registry синхронизирован: status `proposal`, next_action `controlled_activation`;
- первый практический use-case — проверка согласованности project state после merge/checkpoint.

### 37. Начата Shipyard Modernization

Решение Сергея: принять Go как будущий кандидат для ядра тяжёлых повторяемых проверок, но не начинать полный rewrite.

Правило этапа:

- сначала оптимизировать TypeScript build loop;
- затем разнести TypeScript-слои domain / engine / integrations;
- затем зафиксировать JSON boundary для будущего Go-core;
- затем добавить минимальный Go CLI как optional dev-tool;
- не продолжать следующий agent proposal, пока не зафиксирован первый шаг модернизации или Сергей не перенаправит работу.

### 38. TypeScript build loop получил incremental compilation

PR #64 смержен.

Решение:

- включить `incremental`;
- добавить `tsBuildInfoFile`;
- сохранить `skipLibCheck`;
- не включать `composite` до project references.

### 39. TypeScript получил первые domain / engine слои

PR #65 смержен.

Решение:

- вынести доменные типы в `src/domain/types.ts`;
- сохранить `src/types.ts` как compatibility re-export;
- вынести classifier, routes, route-request и text-utils в `src/engine`;
- сохранить внешний router wrapper.

### 40. Зафиксирован Go-core API contract

PR #66 смержен.

Решение:

- первый формат интеграции Go-core: CLI + JSON stdin/stdout;
- первые команды: `sync-check`, `registry-check`, `route-preview`, `checkpoint-check`;
- Go-core не читает GitHub напрямую, не вызывает LLM, не меняет файлы и не активирует агентов;
- HTTP/gRPC не используются на первом этапе.

### 41. `agents.ts` очищен от context и diagnostics блоков

PR #67 смержен.

Решение:

- вынести `context-pack` в `src/engine/context-pack.ts`;
- вынести `svod-check`, `sync-map`, `anti-cliche diagnostics` в `src/diagnostics`;
- `agents.ts` должен оставаться сборщиком agent registry, а не складом логики.

### 42. Import boundaries закреплены кодом

PR #69 смержен.

Решение:

- добавить public entrypoints для `domain`, `engine`, `diagnostics`, `orchestration`;
- перенести `context-pack` из `engine` в `orchestration`, потому что он зависит от `source-registry`;
- добавить dependency-free checker `scripts/check-boundaries.mjs`;
- встроить `lint:boundaries` в `npm test`;
- зафиксировать правила в `knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md`;
- защищённые слои не должны импортировать filesystem, child process, registry/state, integrations или adapter side effects вне разрешённой границы.

### 43. Следующая ветка модернизации после PR #69

Следующий безопасный шаг:

1. split `tsconfig` на base/build/test configs;
2. после этого первый минимальный Go-core `sync-check` CLI по принятому contract.

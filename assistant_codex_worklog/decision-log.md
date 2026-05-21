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
- зафиксировать правила в `knowledge/05_agent_memory/shipyard_modernization/import_boundary_rules.md`.

### 43. TypeScript configs split

PR #71 смержен.

Решение:

- разделить TypeScript configs на `base/build/test`;
- сохранить `tsconfig.json` как compatibility root;
- не включать `composite` до project references;
- оставить import boundaries в `npm test`.

### 44. Первый Go-core sync-check CLI

PR #72 смержен.

Решение:

- добавить `go-core` как optional dev-tool;
- первая команда: `sync-check`;
- интерфейс: JSON stdin/stdout;
- Go-core не читает файлы сам, не ходит в GitHub, не вызывает LLM, не меняет state, не активирует агентов;
- добавить `npm run test:core` для Go tests.

### 45. Sync-check больше не объявляет ready без handoff files

PR #73 смержен.

Решение:

- `sync-check` должен получать `project-state.md`, `current-state.md`, `roadmap.md`, `restart-prompt.md`;
- если handoff-файлы не переданы, возвращать `needs_revision`, не `ready`;
- добавить тест на запуск только с `project-state.json`.

### 46. Full checkpoint after Go-core sync-check

PR #74 смержен.

Следующий безопасный шаг был TypeScript dev wrapper для Go-core `sync-check`.

### 47. TypeScript sync-check dev wrapper

PR #75 смержен.

Решение:

- TS wrapper готовит envelope из state/worklog files;
- вызывает optional Go-core binary;
- fallback возвращает `unavailable`, не fake-ready;
- wrapper не дублирует validation semantics.

### 48. Sync-check wrapper contract document

PR #76 смержен.

Решение:

- зафиксировать input/output contract;
- stdout JSON only;
- stderr debug/human logs;
- unavailable не считается successful validation;
- transport failure and validation failure remain distinct.

### 49. Minimal sync-check CI workflow

PR #77 смержен.

Решение:

- CI собирает Go binary и запускает `npm run sync-check`;
- skipped validation больше не проходит silently;
- CI не становится orchestration layer.

### 50. Minimal transport extraction

PR #78 смержен.

Решение:

- вынести command registry, envelope builder, transport invocation, stdout parsing, unavailable response builder, status normalization;
- не создавать plugin system, middleware, command classes или orchestration framework.

### 51. Second Go-core command: registry-check

PR #79 смержен.

Решение:

- добавить второй реальный Go-core command;
- wrapper выбирает command через minimal registry;
- file sets command-specific;
- registry-check structural, not orchestration;
- проверять `agent_id: "workflow_conductor_agent"`, а не loose substring.

### 52. Go validation primitives and pressure tests

PR #81 смержен.

Решение:

- добавить small primitives: `addRequiredDiagnostic`, `addBlockedDiagnostic`, `validationStatus`;
- blocked > needs_revision > ready;
- pressure tests проверяют bad states;
- не создавать validator framework или policy engine.

### 53. Schema pressure invariants documented

PR #82 смержен.

Решение:

- implicit envelope invariants documented before runtime enforcement;
- command ownership, status precedence, diagnostics invariants and compatibility rules explicit;
- no JSON Schema/protobuf/OpenAPI/version negotiation yet.

### 54. Full checkpoint after schema pressure contract

Checkpoint фиксирует состояние после PR #82.

Следующий безопасный шаг: focused Go-core schema pressure tests для malformed envelopes и contract edge cases без schema framework.

### 55. `checkpoint_compressor_agent` создан как proposal

PR #88 смержен.

Решение:

- агент сжимает restart prompt как стартовый ключ, а не архив;
- не активирован;
- registry синхронизирован: status `proposal`, next_action `controlled_activation`.

### 56. `source_card_builder` создан как proposal

PR #90 смержен.

Решение:

- карточка источника — паспорт применения, не доказательство прочтения;
- не активирован;
- registry синхронизирован.

### 57. `copyright_boundary_guard` создан как proposal

PR #92 смержен.

Решение:

- источник помогает думать, но не становится нашим текстом;
- не юридическое заключение;
- не активирован и не hard guardrail.

### 58. `svod_guard` создан как proposal

PR #94 смержен.

Решение:

- Свод задаёт правила, текст не должен спорить с собственным позвоночником;
- агент не переписывает Свод и не даёт approval вместо Сергея;
- не активирован и не hard guardrail.

### 59. `contextologist_agent` создан как proposal

PR #96 смержен.

Решение:

- сначала карта, потом ход;
- агент восстанавливает контекст проекта перед шагом;
- не командует маршрутом, не меняет state, не заменяет `workflow_conductor_agent`;
- не активирован и не hard guardrail.

### 60. State sync после `contextologist_agent`

PR #97 смержен.

Решение:

- state/worklog/restart prompt указывают на PR #96/97;
- следующий safe step — `sergey_interaction_profiler` proposal without activation.

### 61. Branch hygiene после PR #97

Проверка показала stale merged branches после серии proposal/state-sync PR.

Решение:

- ветки не влияют на runtime, Go/TS, registry, state, routes, guardrails или книгу;
- текущий GitHub tool surface не имеет явной безопасной операции delete branch;
- не использовать force-ref workaround;
- очистить stale branches вручную в GitHub UI или будущим явным delete-branch tool;
- не заявлять, что cleanup выполнен, пока ветки реально не удалены.

### 62. Checkpoint full after contextologist state sync

PR #98 смержен.

Решение:

- зафиксировать v2.13;
- подтвердить режим `Agent Shipyard / Agent Queue`;
- книга остаётся на паузе;
- следующий safe step — `sergey_interaction_profiler` proposal without activation;
- branch hygiene зафиксирована как cleanup_needed, не как completed.

### 63. Repository hygiene audit and ledger protocol

PR #101 смержен.

Решение:

- добавить `npm run hygiene:audit`;
- добавить `scripts/hygiene-audit.mjs`;
- добавить `knowledge/07_operations/repository_hygiene_protocol.md`;
- создать issue #99 как единый Repository hygiene ledger;
- tracked junk проверять повторяемо;
- веточный cleanup фиксировать в ledger, если нет безопасного branch cleanup tool;
- не использовать branch-ref workarounds;
- не считать cleanup completed до фактической уборки.

### 64. State sync after repository hygiene audit

PR #102 смержен.

Решение:

- state/worklog/restart prompt указывают на PR #101/102;
- branch cleanup остаётся cleanup_needed, not completed;
- следующий safe step остаётся `sergey_interaction_profiler` proposal without activation.

### 65. Checkpoint full after repository hygiene state sync

PR #103 подготовлен как checkpoint после PR #102.

Решение:

- зафиксировать v2.15;
- подтвердить режим `Agent Shipyard / Agent Queue`;
- repository hygiene audit активен как инструмент проверки;
- branch cleanup остаётся cleanup_needed в issue #99;
- следующий safe step — `sergey_interaction_profiler` proposal without activation.

### 66. Bot reviewer comments protocol and checkpoint after state sync

PR #229 добавил `assistant_codex_worklog/protocol_addenda/bot_reviewer_comments.md` как обязательную ручную PR-review discipline.

PR #231 зарегистрировал этот addendum в видимом списке `working-protocol.md`.

PR #233 выполнил короткий state sync после изменения рабочего протокола.

Решение:

- перед `++` или merge нужно проверять top-level PR comments, submitted reviews, inline review threads, unresolved review threads и comments from `chatgpt-codex-connector`;
- каждый значимый comment классифицируется как `must_fix`, `not_applicable` или `future_followup`;
- green checks и mergeability недостаточны, если есть неразобранные reviewer/bot comments;
- bot reviewer comments protocol остаётся manual discipline only: не automation, не GitHub Action, не required check, не validator, не hard guardrail, не route automation, не policy engine, не branch protection change, не runtime behavior и не approval bypass;
- после checkpoint v2.57 следующий шаг выбирается явно: `Карта будущего корабля` review или read-only scripts/core boundary audit.

### 67. Documentation review sequence and README boundary

PR #235 recorded the scripts/core boundary audit result as a documentation-only follow-up.

PR #236 recorded the full future ship map review with 34 classified points and only five declared bucket values: `already_fixed`, `useful_now`, `true_but_future`, `not_appropriate_current`, `reframe`.

PR #237 clarified the README/documentation-topology boundary and replaced stale README next-work list with project-state/current-state/roadmap pointers.

PR #238 synced state/resume files after README boundary review.

Decision:

- README is entrance map, not live roadmap;
- project-state/current-state/roadmap are used for current next action;
- operations review notes are not implementation mandates;
- scripts/core boundary audit result, future ship map review and README boundary review remain documentation notes only;
- no runtime readiness, lifecycle policy layer, hard guardrails, branch protection strengthening, README cleanup, or book-mode switch follows automatically;
- after checkpoint v2.59, next work must be chosen explicitly.

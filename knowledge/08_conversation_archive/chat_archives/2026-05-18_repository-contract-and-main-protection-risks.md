# Conversation Archive Entry — repository-contract-and-main-protection-risks

Дата: 2026-05-18
Источник: chat_paste
Статус: draft_archive_entry
Срок пересмотра: 2026-06-01
Tags: [agent_shipyard, repository_hygiene, open_loop, contradiction, failure_pattern, architecture_contract]
Implemented elsewhere: partial / PR #117, PR #118, PR #120

## 1. Почему этот архив создан

Сергей принёс внешний архитектурный разбор репозитория с красными флагами, которые могут стрельнуть позже:

- отсутствие верхнеуровневого README и явного repo-level contract;
- незащищённый `main`;
- риск превращения `scripts/` во второй неформальный core;
- расслоение source of truth между state, registry, worklog, CI, Go-core и protocol files;
- слабая проверка соответствия knowledge/protocols фактическому поведению системы.

Это не technical checkpoint и не готовое решение. Это набор архитектурных рисков, которые не должны потеряться после merge PR #120.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/README.md`
  - Что НЕ нужно дублировать: conversation archive как место для смысловых следов, а не raw chat.

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/archive_governance_protocol.md`
  - Что НЕ нужно дублировать: дедупликация, статусы, 14-дневный review window, запрет превращать архив в свалку.

- Уже отражено:
  - Где: `knowledge/00_manifest/project-state.*`, `assistant_codex_worklog/current-state.md`, `assistant_codex_worklog/roadmap.md`
  - Что НЕ нужно дублировать: текущий режим Agent Shipyard / Agent Queue, conversation archive, repository hygiene ledger, registry sync workflow, PR workflow.

- Частично отражено:
  - Где: PR #117 / `.github/workflows/registry-sync.yml`
  - Что НЕ нужно дублировать: manual Registry Sync workflow уже существует.
  - Остаточный риск: workflow пока manual, label-triggered sync ещё не реализован.

- Частично отражено:
  - Где: PR #120 — `Sync state after anti-cliche editor proposal`
  - Что НЕ нужно дублировать: state sync после PR #116, статус `anti_cliche_editor`, `registry_mutation_protocol`, next safe step.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: нужен верхнеуровневый `README.md` и/или `repository_contract.md`, который объясняет слои репозитория: `knowledge`, protocols, worklog, `src`/orchestrator, Go-core, scripts, tests, CI.
  - Почему может быть важна: без repo-level карты архитектуру придётся восстанавливать по PR history и фрагментам state/worklog.
  - Статус: promising
  - Куда может перейти: roadmap / issue / repository hygiene protocol / README PR

- Идея:
  - Суть: нужно явно зафиксировать source-of-truth map: что является источником правды для project state, registry, protocols, worklog, CI и Go-core checks.
  - Почему может быть важна: иначе state, registry, workflow logs и worklog начнут расходиться, а ошибки будут решаться вручную, не через core.
  - Статус: promising
  - Куда может перейти: `knowledge/07_operations/repository_contract.md`

- Идея:
  - Суть: `scripts/` должен быть ограничен как edge automation; бизнес-логика должна жить либо в Go-core, либо в TS-orchestrator API, но не расползаться по glue-скриптам.
  - Почему может быть важна: иначе `scripts/` станет вторым неформальным core, который трудно тестировать и поддерживать.
  - Статус: promising
  - Куда может перейти: repository contract / script boundary protocol / tests

- Идея:
  - Суть: защита `main` должна быть вынесена в отдельный action item: branch protection, PR-only, required CI.
  - Почему может быть важна: `main` используется как источник правды для ассистента; случайный прямой push или merge без проверок ломает не только код, но и project memory.
  - Статус: needs_decision
  - Куда может перейти: GitHub Settings checklist / issue / repository hygiene ledger

- Идея:
  - Суть: нужны проверки соответствия `knowledge/protocols` фактическому поведению системы.
  - Почему может быть важна: документы могут стать фольклором, если тесты проверяют код, но не проверяют, что протоколы всё ещё описывают реальное поведение.
  - Статус: raw / promising
  - Куда может перейти: integration tests / sync-check extension / future Go-core checks

- Идея:
  - Суть: label-triggered registry sync workflow может закрыть уязвимость manual `workflow_dispatch`.
  - Почему может быть важна: Registry Sync workflow помог разблокировать PR #116, но ручной запуск через Actions остаётся узким местом.
  - Статус: promising
  - Куда может перейти: workflow PR / registry mutation protocol addendum

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: repo-level README / architecture contract.
  - Почему не сделано: это новый архитектурный слой, его нельзя смешивать со state sync.
  - Что нужно для продолжения: открыть отдельный PR `Add repository architecture contract`.

- Хвост:
  - Что осталось не сделано: branch protection для `main`.
  - Почему не сделано: может требовать GitHub Settings и прав, которых текущий tool surface может не иметь.
  - Что нужно для продолжения: проверить доступность branch protection settings; если tool surface не позволяет, дать Сергею точную ручную инструкцию.

- Хвост:
  - Что осталось не сделано: label-triggered Registry Sync.
  - Почему не сделано: сначала закрывали зависший PR #116 ручным workflow.
  - Что нужно для продолжения: отдельный workflow PR после repo contract или как часть registry workflow automation improvement.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей приносит внешнюю критику как stress-test архитектуры, ожидая отделения реальных мин от шума.
  - Как учитывать: не успокаивать, а делить на уже закрытое / частично закрытое / новое и превращать сильные пункты в roadmap, issue или archive.
  - Риск неправильного применения: можно начать хаотично добавлять новые PR поверх незакрытых approval-gates.
  - Может перейти в: sergey_interaction_profiler / long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: Сергей ожидает выбора порядка реализации, а не простого согласия с критикой.
  - Как учитывать: держать один ближайший шаг и не смешивать state sync, architecture contract, branch protection и workflow automation в один PR.
  - Риск неправильного применения: чрезмерная осторожность станет тормозом, чрезмерная активность — архитектурным мусором.
  - Может перейти в: author_style_memory_agent / workflow_conductor_agent

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: ранее ассистент упирался в tool-surface ограничения: merge PR #118 был заблокирован инструментально; workflow_dispatch не был доступен из GitHub tool; branch creation требовал SHA; update_file получил 409 из-за устаревшего SHA.
  - Почему это важно: проект строится на GitHub как источнике правды, но tool surface не всегда покрывает все GitHub-действия.
  - Как избегать: различать GitHub problem vs tool-surface problem; после ошибки фиксировать fallback: manual UI, свежий SHA, PR comment, state sync только после фактического merge.
  - Нужно ли внести в protocol: yes, как process fallback / tool-surface limitation pattern.

- Сбой:
  - Что произошло: был риск начать следующий агентский шаг до merge PR #120.
  - Почему это важно: state sync должен закрывать предыдущий слой до начала нового proposal, иначе roadmap начинает опережать main.
  - Как избегать: не начинать `conversation_archive_librarian` PR до merge PR #120.
  - Нужно ли внести в protocol: no, уже покрыто approval-gate discipline; можно оставить как archive observation.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: GitHub/main — источник правды vs `main` может быть не защищён branch protection.
  - Почему стоит проверить: если `main` не защищён, source of truth уязвим к прямому изменению.
  - Что спросить у Сергея позже: готов ли он включить branch protection вручную через GitHub Settings, если tool surface не позволит сделать это автоматически?

- Противоречие:
  - Между чем и чем: Go-core как deterministic spine vs manual workflow dispatch / scripts glue.
  - Почему стоит проверить: deterministic spine снижает риск ручной ошибки, но если запуск остаётся ручным, процесс всё ещё имеет человеческую точку отказа.
  - Что спросить у Сергея позже: делать ли label-triggered registry sync сразу после repository contract или отложить до следующего registry use-case?

- Противоречие:
  - Между чем и чем: богатый knowledge/worklog layer vs слабая проверка соответствия документов поведению системы.
  - Почему стоит проверить: документы могут выглядеть актуальными, но не подтверждаться тестами.
  - Что спросить у Сергея позже: какие 2–3 протокола первыми превратить в проверяемые integration tests?

## 8. Сильные формулы

- Формула: `Репозиторий как позвоночник ассистента.`
  - Где применить: README / repository contract / branch protection rationale.
  - Ограничение: не превращать в лозунг; рядом нужна concrete source-of-truth map.

- Формула: `Scripts не должны стать вторым неформальным core.`
  - Где применить: repository contract / scripts boundary.
  - Ограничение: не запрещать scripts вообще; отделить edge automation от business logic.

- Формула: `Future-you не должен лезть в историю PR’ов как в архив, чтобы понять архитектуру.`
  - Где применить: README rationale.
  - Ограничение: формулировка разговорная; в README лучше смягчить.

- Формула: `Инфраструктура мышления вокруг core.`
  - Где применить: внутреннее описание проекта / README intro.
  - Ограничение: для внешнего README может звучать слишком широко; нужна практическая расшифровка.

## 9. Что не является решением

- Внешний разбор не является approval на создание README PR.
- Внешний разбор не является approval на изменение branch protection.
- Внешний разбор не является approval на label-triggered workflow.
- Внешний разбор не является approval на новые tests.
- Предложение `Add repository architecture contract` пока является recommended next step, не принятым решением.

## 10. Рекомендованный следующий шаг

Открыть отдельный маленький PR:

`Add repository architecture contract`

Минимальный состав PR:

- `README.md`
- `knowledge/07_operations/repository_contract.md`
- короткое обновление roadmap/current-state, если потребуется

Не включать туда branch protection implementation, label-triggered workflow и integration tests. Их оформить как следующие независимые задачи.

## 11. Не коммитить

- Полный текст текущего чата.
- Сырые книги, PDF/EPUB/DJVU/MOBI.
- Приватные ссылки, Drive IDs, личные данные.
- Полный внешний разбор как raw transcript.
- Скриншоты GitHub UI, если они не нужны как issue evidence.
- Длинные цитаты из загруженного файла `Вставленный текст.txt`; достаточно краткого смыслового извлечения.

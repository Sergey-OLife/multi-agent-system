# Conversation Archive Entry — ci-baseline-and-short-command-recovery

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [agent_shipyard, repository_hygiene, open_loop, failure_pattern, ci, command_protocol]
Implemented elsewhere: partial / PR #124, PR #125, project-state v2.22 pending sync

## 1. Почему этот архив создан

В текущем чате возникли две важные линии, которые могут потеряться между техническими шагами:

1. Сергей предложил усилить проект через CI для TypeScript / JavaScript / Go.
2. Команда `#архив чата` сначала не была распознана ассистентом из-за шума от автоподгруженных файлов, после чего был создан и смержен PR #125 с правилом приоритета коротких команд.

Это не technical checkpoint. Это смысловой след о том, как проект улучшает устойчивость: через CI, короткие команды и защиту от интерфейсного шума.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: `knowledge/08_conversation_archive/conversation_capture_prompt.md`
  - Что НЕ нужно дублировать: стабильная команда `#архив чата`, режим `#архив чата сохрани`, правило draft-by-default, запрет смешивать archive и checkpoint.

- Уже отражено:
  - Где: PR #124 — `Add stable conversation archive command`
  - Что НЕ нужно дублировать: короткая команда уже добавлена в `conversation_capture_prompt.md`, `restart-prompt.md`, `working-protocol.md`.

- Уже отражено:
  - Где: PR #125 — `Add short command priority rule`
  - Что НЕ нужно дублировать: правило “Команда не должна проигрывать шуму. Хвост не должен скрываться за выполнением новой команды.”

- Уже отражено:
  - Где: `knowledge/00_manifest/project-state.json`
  - Что НЕ нужно дублировать: общий статус проекта v2.22, conversation archive как отдельный слой, repository architecture contract как recommended next work item.

- Частично отражено:
  - Где: `package.json`
  - Что ещё нельзя считать implemented: CI workflow ещё не создан, хотя команды для него уже существуют.

- Частично отражено:
  - Где: `.github/workflows/registry-sync.yml`
  - Что ещё нельзя считать implemented: есть workflow для registry sync, но нет общего baseline CI workflow для каждого PR.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: нужен baseline CI workflow для PR, который запускает TypeScript / JavaScript / Go checks и project audits.
  - Почему может быть важна: проект уже опирается на GitHub как источник правды; без автоматических проверок PR может выглядеть чистым по описанию, но ломать сборку, Go-core, hygiene или archive rules.
  - Статус: promising / needs_decision
  - Куда может перейти: workflow PR / repository architecture contract / branch protection checklist

- Идея:
  - Суть: CI V1 должен быть узким: `npm run typecheck`, `npm run typecheck:test`, `npm test`, `npm run test:core`, `npm run hygiene:audit`, `npm run archive:audit`.
  - Почему может быть важна: это использует уже существующие scripts, не добавляет новую инфраструктурную кашу и сразу проверяет реальные слабые места проекта.
  - Статус: promising
  - Куда может перейти: `.github/workflows/ci.yml`

- Идея:
  - Суть: ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate, AI-review bots, OpenTelemetry и gRPC/OpenAPI generation пока не вводить.
  - Почему может быть важна: раннее добавление тяжёлых инструментов создаст шум, а не устойчивость; сначала нужен baseline CI и repository architecture contract.
  - Статус: needs_decision
  - Куда может перейти: roadmap / future issue

- Идея:
  - Суть: архитектурная формула TS/Go/JS должна быть закреплена в repository contract: Go — deterministic spine/check layer; TS/JS — orchestration/CLI/scripts/agent-facing layer; scripts — edge automation, не второй core.
  - Почему может быть важна: это снимает риск расползания логики между Go, TS и scripts.
  - Статус: promising
  - Куда может перейти: `knowledge/07_operations/repository_contract.md`

- Идея:
  - Суть: короткая команда должна иметь приоритет над интерфейсным шумом, но не должна скрывать незавершённые хвосты.
  - Почему может быть важна: в текущем чате команда `#архив чата` была проигнорирована из-за автоподгруженных файлов; это реальный failure pattern.
  - Статус: implemented_elsewhere / PR #125
  - Куда может перейти: уже перешло в working protocol и restart prompt

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: state sync после PR #124 и PR #125.
  - Почему не сделано: команда `#архив чата` не является checkpoint и не должна обновлять state.
  - Что нужно для продолжения: отдельный state sync PR после завершения текущего archive PR.

- Хвост:
  - Что осталось не сделано: baseline CI workflow.
  - Почему не сделано: сначала обсуждалась архитектурная целесообразность; PR ещё не создавался.
  - Что нужно для продолжения: отдельный PR `Add baseline CI workflow`.

- Хвост:
  - Что осталось не сделано: branch protection с required CI checks.
  - Почему не сделано: сначала нужен сам CI workflow; кроме того, branch protection может требовать ручной настройки в GitHub Settings.
  - Что нужно для продолжения: после merge CI дать Сергею точную инструкцию или проверить доступность tool surface.

- Хвост:
  - Что осталось не сделано: repository architecture contract.
  - Почему не сделано: его нельзя смешивать с CI и state sync.
  - Что нужно для продолжения: отдельный PR `Add repository architecture contract`.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей проверяет не только содержание решения, но и поведение ассистента на сбоях: “почему ты не воспринял команду?”
  - Как учитывать: при ошибке не оправдываться, а выделять failure pattern и превращать его в правило процесса.
  - Риск неправильного применения: можно начать архивировать каждый микросбой и раздувать protocol layer.
  - Может перейти в: sergey_interaction_profiler / long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: Сергей предпочитает короткие устойчивые команды, за которыми стоит обновляемый репозиторный prompt.
  - Как учитывать: команда должна оставаться стабильной, а логика выполнения — обновляться в GitHub.
  - Риск неправильного применения: спутать короткую команду с магической платформенной командой и забыть, что её всё равно нужно распознавать в чате.
  - Может перейти в: working-protocol / restart-prompt / command_protocol

- Наблюдение:
  - Поведение / предпочтение: Сергей приносит внешние технические предложения как stress-test: “что из этого нам реально поможет?”
  - Как учитывать: отвечать не списком всего возможного, а выбором V1/V2/Vlater с объяснением, что внедрять сейчас, что позже и почему.
  - Риск неправильного применения: преждевременно подключить тяжёлые инструменты и создать инфраструктурный шум.
  - Может перейти в: repository_contract / roadmap

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: ассистент не выполнил `#архив чата` с первого раза, потому что отвлёкся на автоподгруженные файлы и sources.
  - Почему это важно: короткая команда должна быть устойчивой к интерфейсному шуму, иначе команда становится декоративной.
  - Как избегать: сначала распознавать точную короткую команду; потом проверять хвосты; затем либо выполнять, либо спрашивать, если есть конфликт.
  - Нужно ли внести в protocol: yes — уже внесено через PR #125.

- Сбой:
  - Что произошло: после merge PR #124 и PR #125 state ещё отстаёт от main.
  - Почему это важно: project-state остаётся v2.22 и не отражает свежие protocol improvements.
  - Как избегать: отдельный state sync после завершения текущего archive PR.
  - Нужно ли внести в protocol: no, это штатный хвост state sync.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: “GitHub — источник правды” vs отсутствие общего CI на PR.
  - Почему стоит проверить: источник правды должен быть автоматически проверяемым, иначе доверие держится только на ручном self-review.
  - Что спросить у Сергея позже: внедряем ли baseline CI сразу после state sync?

- Противоречие:
  - Между чем и чем: “Go проверяет / TypeScript соединяет” vs отсутствие repository contract, который фиксирует границы Go/TS/scripts.
  - Почему стоит проверить: без контракта scripts могут стать вторым неформальным core.
  - Что спросить у Сергея позже: делать ли repository architecture contract до или после CI?

- Противоречие:
  - Между чем и чем: короткие команды должны выполняться сразу vs незавершённые хвосты могут конфликтовать с новой командой.
  - Почему стоит проверить: без правила disclosure ассистент либо игнорирует команду, либо молча перескакивает через хвост.
  - Что спросить у Сергея позже: нужно ли все короткие команды описать в отдельном command registry?

## 8. Сильные формулы

- Формула: `Команда не должна проигрывать шуму.`
  - Где применить: working protocol / restart prompt / command registry.
  - Ограничение: команда не должна обходить approval-gates.

- Формула: `Хвост не должен скрываться за выполнением новой команды.`
  - Где применить: правила коротких команд, checkpoint/archive handling.
  - Ограничение: не превращать каждый хвост в длинную остановку процесса.

- Формула: `Go проверяет. TypeScript соединяет. LLM думает. Сергей утверждает. GitHub фиксирует.`
  - Где применить: repository architecture contract.
  - Ограничение: рядом нужна техническая карта слоёв, иначе это останется лозунгом.

- Формула: `CI — не умный советчик, а строгая машина проверки.`
  - Где применить: PR `Add baseline CI workflow`.
  - Ограничение: не использовать как аргумент за AI-review bots на раннем этапе.

- Формула: `Scripts не должны стать вторым неформальным core.`
  - Где применить: repository contract / scripts boundary.
  - Ограничение: scripts допустимы как edge automation.

## 9. Что не является решением

- Обсуждение CI не является approval на создание `.github/workflows/ci.yml`.
- Предложение baseline CI не является approval на branch protection.
- Предложение CI не является approval на ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate или AI-review bots.
- Repository architecture contract всё ещё recommended work item, не approved implementation.
- `#архив чата` не является командой сохранить в GitHub.
- Этот archive entry не является state sync.
- PR #124 и PR #125 уже merged, но project-state ещё не синхронизирован после них.

## 10. Рекомендованный следующий шаг

Сначала сделать state sync после PR #124 и PR #125.

После этого — отдельный PR:

`Add baseline CI workflow`

Минимальный состав CI V1:

- Node.js 20
- Go from `go-core/go.mod`
- `npm install`
- `npm run typecheck`
- `npm run typecheck:test`
- `npm test`
- `npm run test:core`
- `npm run hygiene:audit`
- `npm run archive:audit`

Не включать в этот PR ESLint, Prettier, golangci-lint, SonarCloud, CodeClimate, AI-review bots, branch protection или repository architecture contract.

## 11. Не коммитить

- Полный текст текущего чата.
- Сырые книги, PDF/EPUB/DJVU/MOBI.
- Приватные ссылки, Drive IDs, личные данные.
- Полный список автоподгруженных файлов как raw dump.
- Длинные цитаты из загруженных источников.
- Полные внешние технические предложения как transcript.
- Любые материалы, которые создают видимость принятого решения без approval.

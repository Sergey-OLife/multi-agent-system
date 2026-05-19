# Conversation Archive Entry — red-flags-after-architecture-contract

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [agent_shipyard, repository_hygiene, architecture_contract, open_loop, ci, branch_protection, failure_pattern]
Implemented elsewhere: partial / PR #129, PR #131, project-state v2.24 pending sync

## 1. Почему этот архив создан

Сергей вернулся к файлу «Красные флаги» и спросил, что с этими мыслями. Это был не повтор, а отдельный диагностический слой: не runtime-архитектура Redis/Postgres/P2P, а риски текущего репозитория.

В разговоре стало ясно: часть красных флагов уже закрыта или снижена через baseline CI и repository architecture contract, но несколько хвостов остаются рабочими рисками.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #129 — `Add baseline CI workflow`
  - Что НЕ нужно дублировать: baseline CI уже внедрён как `.github/workflows/ci.yml`.

- Уже отражено:
  - Где: PR #131 — `Add repository architecture contract`
  - Что НЕ нужно дублировать: границы Go / TS / JS / scripts, GitHub main как source of truth, event envelope как future contract, idempotency / race-condition rules, Redis/Postgres/P2P как future runtime, не текущая реализация.

- Уже отражено:
  - Где: `knowledge/07_operations/repository_architecture_contract.md`
  - Что НЕ нужно дублировать: scripts boundary, single-writer principle, GitHub-centered source of truth, branch protection not assumed until verified.

- Частично отражено:
  - Где: `knowledge/00_manifest/project-state.json`
  - Что ещё нельзя считать implemented: state пока v2.24 и не отражает merge PR #131.

- Частично отражено:
  - Где: `knowledge/08_conversation_archive/chat_archives/2026-05-18_repository-contract-and-main-protection-risks.md`
  - Что ещё нельзя считать implemented: README, main protection, protocol consistency checks и branch protection всё ещё не закрыты.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: файл «Красные флаги» — это не шум и не повтор. Это диагностическая карта текущих repository risks.
  - Почему может быть важна: она помогает не уйти в красивые future-runtime схемы, пока текущий репозиторий ещё имеет незакрытые базовые риски.
  - Статус: promising / partially implemented
  - Куда может перейти: roadmap / repository hygiene issue / state sync / README PR

- Идея:
  - Суть: отсутствие README частично компенсировано architecture contract, но не закрыто полностью.
  - Почему может быть важна: architecture contract — внутренний операционный документ; README — входная карта для future-you, Codex, ChatGPT и внешнего ревьюера.
  - Статус: needs_decision
  - Куда может перейти: README PR

- Идея:
  - Суть: main branch protection остаётся настоящим красным флагом.
  - Почему может быть важна: baseline CI уже есть, но пока checks не обязательны, merge discipline держится на ручном процессе.
  - Статус: needs_decision
  - Куда может перейти: branch protection setup / GitHub settings checklist / issue

- Идея:
  - Суть: protocol / knowledge consistency checks — следующий слой после baseline CI.
  - Почему может быть важна: сейчас CI проверяет typecheck/test/go/hygiene/archive, но не проверяет, что protocols не расходятся с фактическим поведением.
  - Статус: promising
  - Куда может перейти: future CI check / scripts / Go-core validator

- Идея:
  - Суть: scripts boundary уже закреплён в architecture contract, но enforcement ещё не автоматизирован.
  - Почему может быть важна: без проверки `scripts/` может снова начать превращаться во второй core.
  - Статус: partially implemented
  - Куда может перейти: repository hygiene check / protocol consistency check

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: state sync после PR #131.
  - Почему не сделано: команда `#архив чата` не является checkpoint/state sync.
  - Что нужно для продолжения: отдельный PR `Sync state after architecture contract`.

- Хвост:
  - Что осталось не сделано: проверить, как baseline CI отработал на PR #131.
  - Почему не сделано: после merge PR #131 это ещё не было отдельно разобрано.
  - Что нужно для продолжения: посмотреть checks/workflow result по PR #131, если tool surface даёт доступ.

- Хвост:
  - Что осталось не сделано: README.md как входная карта репозитория.
  - Почему не сделано: сначала был создан внутренний architecture contract.
  - Что нужно для продолжения: отдельный PR `Add repository README`.

- Хвост:
  - Что осталось не сделано: branch protection для `main`.
  - Почему не сделано: сначала нужно наблюдать CI на реальном PR; плюс branch protection может требовать ручной настройки GitHub Settings.
  - Что нужно для продолжения: после CI observation подготовить точный checklist или выполнить через tool, если доступно.

- Хвост:
  - Что осталось не сделано: protocol / knowledge consistency checks.
  - Почему не сделано: пока есть только baseline CI и audits.
  - Что нужно для продолжения: определить минимальный первый check: например, presence/consistency check для обязательных paths, state version, archive index, working protocol references.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей возвращается к ранее высказанным мыслям не из-за повторения, а чтобы проверить, не потерялись ли они в рабочем потоке PR.
  - Как учитывать: при таких вопросах нужно не отвечать “уже сделали”, а разложить по статусам: закрыто / частично закрыто / ещё открыто / шум.
  - Риск неправильного применения: можно начать преждевременно архивировать каждую мысль, хотя часть уже отражена в state/contract.
  - Может перейти в: sergey_interaction_profiler / long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: Сергей ценит прямую диагностику: красный флаг должен либо стать задачей, либо быть назван шумом.
  - Как учитывать: не сглаживать риски; статус “жёлтый” уместен, когда риск снижен, но не закрыт.
  - Риск неправильного применения: превратить всё в список тревог без приоритета.
  - Может перейти в: repository_hygiene_protocol / roadmap discipline

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: ранее была тенденция отвечать на архитектурные идеи как на потенциальную реализацию, хотя часть из них должна оставаться future boundary.
  - Почему это важно: можно случайно притянуть Redis/Postgres/P2P раньше, чем проекту нужен runtime layer.
  - Как избегать: применять practical test из architecture contract: какую текущую ошибку это предотвращает, кто поддерживает, какой workflow вызовет это на этой неделе, что сломается без этого сейчас.
  - Нужно ли внести в protocol: no — уже отражено в architecture contract.

- Сбой:
  - Что произошло: project-state ещё не отражает PR #131.
  - Почему это важно: GitHub main уже содержит contract, но state пока говорит v2.24 / PR #129.
  - Как избегать: сделать state sync после текущего archive PR.
  - Нужно ли внести в protocol: no — штатный state-sync хвост.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: baseline CI уже внедрён, но branch protection ещё не настроен.
  - Почему стоит проверить: CI есть, но пока не является обязательным gate.
  - Что спросить у Сергея позже: включаем ли branch protection после проверки CI на PR #131?

- Противоречие:
  - Между чем и чем: architecture contract есть, но README отсутствует.
  - Почему стоит проверить: внутренний контракт помогает нам, но не заменяет входную карту репозитория.
  - Что спросить у Сергея позже: делаем ли README следующим после state sync?

- Противоречие:
  - Между чем и чем: protocols описывают поведение, но CI пока не проверяет соответствие protocols фактической системе.
  - Почему стоит проверить: без consistency checks protocols могут стать фольклором.
  - Что спросить у Сергея позже: какой первый protocol consistency check нужен — state, archive, registry или scripts boundary?

## 8. Сильные формулы

- Формула: `Красный флаг стал жёлтым, не зелёным.`
  - Где применить: status review по README / architecture contract / branch protection.
  - Ограничение: не использовать как красивую фразу без конкретного статуса.

- Формула: `README — это входная дверь, architecture contract — несущая стена.`
  - Где применить: README PR / repository hygiene explanation.
  - Ограничение: README не должен дублировать весь contract.

- Формула: `CI есть, но пока не стал замком на двери.`
  - Где применить: branch protection discussion.
  - Ограничение: не утверждать, что branch protection уже включён.

- Формула: `Протокол без проверки постепенно становится фольклором.`
  - Где применить: protocol consistency checks.
  - Ограничение: не превращать в повод для тяжёлого тестового фреймворка раньше времени.

## 9. Что не является решением

- Файл «Красные флаги» сам по себе не является approval на README PR.
- Файл «Красные флаги» не является approval на branch protection.
- Architecture contract не закрывает README.
- Baseline CI не означает, что `main` защищён.
- Discussion of protocol consistency checks не является approval на новые validators.
- `#архив чата` не является state sync.
- PR #131 merged, но project-state пока не синхронизирован после него.

## 10. Рекомендованный следующий шаг

Сначала сделать state sync после PR #131.

После этого проверить CI result на PR #131.

Затем выбрать один следующий PR:

`Add repository README`

README должен быть коротким входным документом, а не копией architecture contract.

## 11. Не коммитить

- Полный текст текущего чата.
- Полный файл «Красные флаги» как raw dump.
- Приватные ссылки, личные данные, Drive IDs.
- Сырые книги, PDF/EPUB/DJVU/MOBI.
- Long raw excerpts from uploaded materials.
- Любые утверждения, будто branch protection уже включён.
- Любые утверждения, будто README уже создан.

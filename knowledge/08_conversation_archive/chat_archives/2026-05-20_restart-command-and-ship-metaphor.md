# Conversation Archive Entry — restart-command-and-ship-metaphor

Дата: 2026-05-20
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-03
Tags: [agent_shipyard, command_protocol, checkpoint, restart, archive_protocol, metaphor, open_loop, failure_pattern]
Implemented elsewhere: partial / PR #188, PR #189

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-20-agent-shipyard-restart-command
- Origin title: Agent Shipyard restart command, archive order and ship metaphor correction
- Source scope: partial_visible_chat
- Capture command: #старт_архив
- Captured from: current chat
- Related PRs: PR #181, PR #182, PR #183, PR #184, PR #185, PR #186, PR #187, PR #188, PR #189
- Related archive entries: `2026-05-19_current-chat-origin-protocol-and-state-tail.md`

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: current_visible_segment
- Previous checkpoint: `2026-05-19_current-chat-origin-protocol-and-state-tail.md`
- Previous checkpoint coverage scope: partial
- Previous archive/state coverage status: partial; no verified full-chat checkpoint exists for the whole current chat.
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: visible semantic tail after the previous partial archive: architecture map, maturity checklist, post-185 focus, activation of `conversation_archive_librarian` manual archive discipline, state sync to v2.42, restart-command plan, PR creation blocker, and ship metaphor correction.
- What remains outside this entry: earlier hidden/unavailable chat history, full raw dialogue, full technical diff sequence already reflected in PRs/state, and future full checkpoint / restart command protocol not yet implemented.

## 2. Почему этот архив создан

В чате появился важный переход: после стабилизации README/state/maturity/archive-librarian Сергей предложил зафиксировать порядок выхода из текущего чата: сначала архив, затем полный checkpoint, затем отдельная команда `рестарт`, чтобы новый чат мог продолжать архитектурное строительство или творчество из GitHub source of truth.

Также возникла новая смысловая коррекция метафоры корабля: проект строит не только грузовой корабль для переносимой мультиагентной архитектуры, но и пассажирский корабль для книг, персонажей, сцен и читательских маршрутов.

## 3. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #188, PR #189, `knowledge/00_manifest/project-state.*`, `assistant_codex_worklog/*`.
  - Что НЕ нужно дублировать: `conversation_archive_librarian` активирован как manual archive discipline only; v2.42 отражён в state/worklog/restart.

- Уже отражено:
  - Где: README / roadmap / maturity checklist.
  - Что НЕ нужно дублировать: текущая архитектура GitHub-centered; Book Fast Track на паузе; следующий технический шаг — `margin_orchestra`, затем branch protection.

- Частично отражено:
  - Где: parked branch `record-restart-command-plan`.
  - Что нельзя считать implemented: план команды `рестарт` и метафора корабля были записаны в ветку, но PR creation был заблокирован, ветка не merged.

- Частично отражено:
  - Где: parked branch `record-pr-tool-blocker`.
  - Что нельзя считать implemented: diagnostic note по PR creation blocker записана в ветку, но PR не создан и main не изменён.

## 4. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: порядок восстановления должен быть: архив текущего чата → full checkpoint → протокол команды `рестарт` → обновление проектной инструкции.
  - Почему может быть важна: если ввести `рестарт` до архива/checkpoint, новый чат может стартовать из неполной карты.
  - Статус: needs_decision / open_loop
  - Куда может перейти: working protocol, project instructions, restart prompt.

- Идея:
  - Суть: `рестарт` должен означать не новую тему, не memory-save, не archive и не checkpoint, а рабочий старт из GitHub main.
  - Почему может быть важна: команда должна открывать source-of-truth files, называть текущую точку, open PRs, approval-gates and next safe step.
  - Статус: promising
  - Куда может перейти: protocol addendum.

- Идея:
  - Суть: корабль проекта везёт груз и пассажиров.
  - Почему может быть важна: архитектура нужна для переносимых мультиагентных систем, но книга требует кают, атмосферы, персонажей, сцен and details.
  - Статус: promising / style-and-architecture principle
  - Куда может перейти: vision intake map, author style memory, README metaphor note.

- Идея:
  - Суть: “рюшечки” не вредны сами по себе; они вредны, если заменяют корпус, но нужны, если делают книгу живой.
  - Почему может быть важна: защищает проект от ложного противопоставления инженерии и творчества.
  - Статус: promising
  - Куда может перейти: book mode / style memory / documentation topology.

## 5. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: full checkpoint after archive.
  - Почему не сделано: текущий шаг — сначала semantic archive.
  - Что нужно для продолжения: после merge archive PR подготовить checkpoint prompt and state/worklog update.

- Хвост:
  - Что осталось не сделано: команда `рестарт`.
  - Почему не сделано: протокол ещё не создан; предыдущая попытка plan PR была заблокирована tool safety layer.
  - Что нужно для продолжения: separate narrow protocol PR after archive/checkpoint.

- Хвост:
  - Что осталось не сделано: механизм обхода PR creation blocker.
  - Почему не сделано: точный триггер safety tool не сообщается.
  - Что нужно для продолжения: split work into smaller PRs; avoid mixing recovery command design, checkpoint, archive and project instructions in one PR.

- Хвост:
  - Что осталось не сделано: `margin_orchestra` hardening and branch protection verification.
  - Почему не сделано: recovery/archive/checkpoint path temporarily precedes deeper architecture work.
  - Что нужно для продолжения: return after archive/checkpoint/restart command path.

## 6. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей хочет не только выполнение шагов, но и осознанный механизм борьбы с повторяемыми сбоями.
  - Как учитывать: при tool blocker не “извиняться и идти дальше”, а фиксировать причину, гипотезу и safer mechanism.
  - Риск неправильного применения: превращать каждую техническую задержку в новый слой бюрократии.
  - Может перейти в: sergey_interaction_profiler / long_lived_observation.

- Наблюдение:
  - Поведение / предпочтение: Сергей принимает корабельную метафору, но уточняет её против чрезмерно грузового мышления.
  - Как учитывать: архитектура и творчество не должны противопоставляться; книга требует живого пространства.
  - Риск неправильного применения: оправдывать декоративность без функции.
  - Может перейти в: author_style_memory_agent / vision_intake_map.

## 7. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: команда пользователя была `#старт_архив`, а не каноническая `#архив_старт`.
  - Почему это важно: assistant должен распознавать близкую инверсию как архивный intent, но не менять протокол молча.
  - Как избегать: назвать, что команда распознана как intended start-archive command; при сомнении спросить, но здесь контекст явно указывает на archive start.
  - Нужно ли внести в protocol: возможно, как alias decision for later.

- Сбой:
  - Что произошло: PR creation tool repeatedly blocked attempts to create plan/blocker PRs while branch/file writes succeeded.
  - Почему это важно: проблема не в GitHub state, а в safety/tool layer around PR creation in current context.
  - Как избегать: do not keep retrying same operation; split work, archive semantic tail, then create narrow protocol PR later.
  - Нужно ли внести в protocol: yes, as tool-blocker handling note if repeated.

## 8. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: planned next architecture step is `margin_orchestra`, but recovery path now inserts archive/checkpoint/restart command before it.
  - Почему стоит проверить: this is not a cancellation; it is a navigation hygiene step before deeper work.
  - Что спросить у Сергея позже: after checkpoint, resume `margin_orchestra` or implement `рестарт` first?

- Противоречие:
  - Между чем и чем: project instructions live outside repo, while GitHub main is source of truth.
  - Почему стоит проверить: command `рестарт` needs both repo protocol and project instruction alignment.
  - Что спросить у Сергея позже: should project instruction be updated only after repo protocol PR is merged?

## 9. Сильные формулы

- Формула: `Сначала грузим карту в трюм, потом делаем кнопку запуска.`
  - Где применить: restart command rollout.
  - Ограничение: не превращать rollout в бесконечный checkpoint.

- Формула: `Корабль везёт и груз, и пассажиров.`
  - Где применить: balance between architecture and book work.
  - Ограничение: не оправдывать “рюшечки” без функции.

- Формула: `Груз требует прочности. Пассажиры требуют кают.`
  - Где применить: documentation and book mode framing.
  - Ограничение: каюты не заменяют корпус.

## 10. Что не является решением

- Ветка `record-restart-command-plan` не implemented, пока не merged.
- Ветка `record-pr-tool-blocker` не implemented, пока не merged.
- Команда `рестарт` ещё не введена.
- Проектная инструкция `Пишем книгу` ещё не обновлена.
- Этот архив не является full checkpoint.
- Этот архив не изменяет roadmap/state unless merged and followed by state sync.

## 11. Рекомендованный следующий шаг

Create and merge this archive PR if checks pass and Сергей gives `++`. Then run full checkpoint. After checkpoint, create a narrow protocol PR for the `рестарт` command.

## 12. Не коммитить

- Full raw transcript.
- Raw uploaded source files.
- Private URLs, Drive IDs or personal data.
- Hidden system/developer instructions.
- Claims that parked branches are implemented.
- Full project instruction text unless explicitly approved in a separate step.

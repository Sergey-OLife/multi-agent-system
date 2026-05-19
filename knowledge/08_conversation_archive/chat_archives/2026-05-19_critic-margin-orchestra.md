# Conversation Archive Entry — critic-margin-orchestra

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [agent_shipyard, critic_margin_agent, margin_orchestra, book, technical_process, open_loop, architecture]
Implemented elsewhere: partial / project-state v2.25 / AI r-assistant source uploaded, no proposal yet

## 1. Почему этот архив создан

Сергей уточнил идею `critic_margin_agent`: это не просто отдельный критик, а «вторая пара глаз» для технички и книги. У агента должна быть внутренняя инструментальная среда — `margin_orchestra`, выросшая из логики `AI r-assistant.pdf`.

Важно сохранить различие: `critic_margin_agent` — субъект второй пары глаз; `margin_orchestra` — его внутренний набор инструментов, не самостоятельная власть и не замена общей архитектуры агентов.

## 2. Что уже отражено в архитектуре

- Уже отражено:
  - Где: `knowledge/00_manifest/project-state.json` v2.25
  - Что НЕ нужно дублировать: GitHub is source of truth, Go as deterministic spine, TS/JS orchestration, scripts edge automation, proposal agents not activated, Redis/Postgres/P2P future runtime only.

- Уже отражено:
  - Где: `knowledge/07_operations/repository_architecture_contract.md`
  - Что НЕ нужно дублировать: centralized GitHub authority, Go checks, TS/JS orchestration, scripts boundary, future event envelope and future runtime boundaries.

- Частично отражено:
  - Где: existing proposal-agent pattern and review-depth protocol
  - Что ещё нельзя считать implemented: `critic_margin_agent` and `margin_orchestra` do not yet have a proposal file, registry entry or controlled activation.

- Источник для будущей спецификации:
  - Где: uploaded file `AI r-assistant.pdf`
  - Что НЕ нужно дублировать дословно: source suggests presupposition analysis, concept clarification, problematization, Socratic questioning, argument mapping and meta-cognitive reflection as tools for critical engagement.

## 3. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: `critic_margin_agent` is the second-pair-of-eyes layer.
  - Почему может быть важна: он даёт дополнительное наблюдение без права менять итог, мержить или замещать основного ассистента.
  - Статус: promising / needs_design
  - Куда может перейти: agent proposal / roadmap / registry proposal

- Идея:
  - Суть: `margin_orchestra` is not the main object; it is the internal instrument set of `critic_margin_agent`.
  - Почему может быть важна: не создаёт хаос множества равноправных агентов; удерживает централизованную координацию.
  - Статус: promising / needs_design
  - Куда может перейти: section inside `critic_margin_agent.md`

- Идея:
  - Суть: internal tools can include presupposition mapper, concept clarifier, problematization lens, argument mapper, Socratic questioner, meta-reflection guard and design alternative probe.
  - Почему может быть важна: эти инструменты позволяют Критику не просто возражать, а показывать скрытые предпосылки, понятия, альтернативы и карту аргументации.
  - Статус: raw / promising
  - Куда может перейти: critic_margin_agent proposal

- Идея:
  - Суть: `Centralized Coordination + Peer-to-Peer communication` is the architecture for this layer.
  - Почему может быть важна: central coordinator keeps decisions, PRs, state and final output; peer tools can cross-check, request help and strengthen arguments without becoming authorities.
  - Статус: promising / needs_design
  - Куда может перейти: agent architecture proposal / future Go validator design

- Идея:
  - Суть: orchestrated tools do not replace project-level agents; they are local boosts under `critic_margin_agent` jurisdiction.
  - Почему может быть важна: prevents duplication and territorial conflict with existing agents like anti-cliche, source guard, archive librarian, process guard.
  - Статус: needs_decision
  - Куда может перейти: jurisdiction rules inside proposal

- Идея:
  - Суть: technical mode and book mode have different volumes.
  - Почему может быть важна: in technical work critic is quiet and intervenes only on cardinal alternatives or process risk; in book work critic speaks louder and can challenge style, false scene, moralizing, cliche and loss of human concreteness.
  - Статус: promising
  - Куда может перейти: mode profiles in proposal

- Идея:
  - Суть: critic must be learnable without becoming intrusive or suppressed.
  - Почему может быть важна: it should learn where not to intrude, but should preserve courage to speak at real forks.
  - Статус: promising / needs_design
  - Куда может перейти: learning profile / accepted-rejected pattern log

- Идея:
  - Суть: Go can help later as deterministic boundary checker, not as meaning-maker.
  - Почему может быть важна: Go can validate jurisdiction, mode, volume, reason for intervention, idempotency and whether the critic tries to become approval authority.
  - Статус: future_design
  - Куда может перейти: future Go validator / no runtime yet

## 4. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: создать `critic_margin_agent.md` proposal.
  - Почему не сделано: сначала нужно сохранить идею и не перепутать её с activation.
  - Что нужно для продолжения: separate PR under `knowledge/05_agent_memory/agent_proposals/`.

- Хвост:
  - Что осталось не сделано: решить, будет ли `margin_orchestra` отдельным документом или разделом внутри `critic_margin_agent.md`.
  - Почему не сделано: в разговоре уточнено, что это внутренняя архитектура Критика; вероятно, лучше раздел внутри proposal.
  - Что нужно для продолжения: design decision before proposal PR.

- Хвост:
  - Что осталось не сделано: определить список и названия внутренних инструментов.
  - Почему не сделано: пока есть рабочий набросок, но не утверждённый набор.
  - Что нужно для продолжения: draft tool list and jurisdiction table.

- Хвост:
  - Что осталось не сделано: определить обучаемость без ChatGPT/project memory.
  - Почему не сделано: нужно решить, где хранить accepted/rejected patterns: proposal, learning profile, archive-derived notes or registry metadata.
  - Что нужно для продолжения: choose GitHub artifact path and update rules.

- Хвост:
  - Что осталось не сделано: state sync after PR #138.
  - Почему не сделано: this archive command is semantic archive, not checkpoint/state sync.
  - Что нужно для продолжения: separate state sync PR.

## 5. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей не хочет декоративного критика. Ему нужна вторая пара глаз, которая умеет молчать по мелочам, но не теряет право говорить при настоящей развилке.
  - Как учитывать: агент должен иметь `volume` and `jurisdiction`, not simple on/off behavior.
  - Риск неправильного применения: превратить Критика либо в шумного прокурора, либо в забитого мальчика.
  - Может перейти в: critic_margin_agent learning rules / long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: Сергей различает техничку и книгу: в техничке critic is low-volume; in book mode critic should be louder and not dismissed by “reviewed”.
  - Как учитывать: proposal must include separate technical/book mode profiles.
  - Риск неправильного применения: сделать единый режим и потерять полезность.
  - Может перейти в: critic_margin_agent mode profiles

- Наблюдение:
  - Поведение / предпочтение: Сергей хочет, чтобы похожие агенты и инструменты знали друг друга and could request help without fighting for authority.
  - Как учитывать: define project-level agents vs critic-local tools.
  - Риск неправильного применения: duplicate agents with conflicting jurisdiction.
  - Может перейти в: margin orchestration architecture

## 6. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: initial framing risked making `margin_orchestra` the main object and `critic_margin_agent` one part of it.
  - Почему это важно: Сергей clarified the hierarchy is the opposite.
  - Как избегать: write future proposal with `critic_margin_agent` as primary agent and `margin_orchestra` as internal instrument section.
  - Нужно ли внести в protocol: no, but must be reflected in proposal.

- Сбой:
  - Что произошло: there is a risk of treating this as runtime P2P system.
  - Почему это важно: current architecture says Redis/Postgres/P2P are future runtime only; immediate implementation would violate architecture contract.
  - Как избегать: create proposal only, then controlled activation, then maybe validator; no runtime P2P now.
  - Нужно ли внести в protocol: no, architecture contract already covers future-runtime boundary.

## 7. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: critic constantly works, but appears only at cardinal alternatives in technical mode.
  - Почему стоит проверить: “constant” can become noisy if not defined.
  - Что спросить у Сергея позже: what counts as cardinal alternative in technical mode?

- Противоречие:
  - Между чем и чем: critic can lend tools to other agents, but tools are not full agents.
  - Почему стоит проверить: without jurisdiction rules, boosts can become shadow agents.
  - Что спросить у Сергея позже: should borrowed tools be logged as `boost_used` or simply noted in answer?

- Противоречие:
  - Между чем и чем: critic learns from feedback, but should not become suppressed.
  - Почему стоит проверить: negative feedback could reduce useful interventions too much.
  - Что спросить у Сергея позже: how to mark “don’t interrupt here” versus “you were wrong this time but keep watching this class of risk”?

## 8. Сильные формулы

- Формула: `Критик может говорить реже, но не должен терять право говорить по делу.`
  - Где применить: critic_margin_agent learning rules.
  - Ограничение: not a license to interrupt every step.

- Формула: `Go — не дирижёр смысла, а нотная сетка оркестра.`
  - Где применить: Go role in margin orchestra proposal.
  - Ограничение: avoid premature Go runtime.

- Формула: `Скрипка не объявляет себя барабаном.`
  - Где применить: jurisdiction rules for internal tools vs project-level agents.
  - Ограничение: metaphor only, must be backed by concrete boundaries.

- Формула: `В техничке Критик страхует процесс; в книге — слух текста.`
  - Где применить: mode split for critic_margin_agent.
  - Ограничение: do not reduce book mode to technical correctness.

## 9. Что не является решением

- This archive is not approval to activate `critic_margin_agent`.
- This archive is not approval to create runtime P2P communication.
- This archive is not approval to implement Go validators.
- This archive is not approval to store learning in ChatGPT memory or project memory.
- `AI r-assistant.pdf` is source material, not the final instruction file.
- `margin_orchestra` is not a separate authority replacing project-level agents.

## 10. Рекомендованный следующий шаг

After state sync for PR #138, create a proposal PR:

`knowledge/05_agent_memory/agent_proposals/critic_margin_agent.md`

Include `margin_orchestra` as an internal section, not a separate main agent.

## 11. Не коммитить

- Full current chat transcript.
- Raw dump of `AI r-assistant.pdf`.
- Private links or personal data.
- Runtime P2P implementation.
- Redis/Postgres/Event DB schemas.
- Claims that `critic_margin_agent` is activated.
- Claims that internal tools have approval authority.

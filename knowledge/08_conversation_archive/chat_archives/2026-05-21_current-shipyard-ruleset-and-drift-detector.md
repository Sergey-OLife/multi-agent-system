# Conversation Archive Entry — current-shipyard-ruleset-and-drift-detector

Дата: 2026-05-21
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-04
Tags: [agent_shipyard, branch_protection, checks, state_sync, drift_detector, architecture_review, archive_protocol, open_loop, implementation_proposal]
Implemented elsewhere: partial / PR #198, PR #199, PR #200, PR #201, PR #202, PR #203, PR #204, PR #205, PR #206

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-20-21-agent-shipyard-ruleset-drift-detector
- Origin title: Branch protection, checks overview, state-sync drift detector and future-ship map
- Source scope: visible_chat_segment
- Capture command: #старт_архив
- Captured from: current chat
- Related PRs: PR #198, PR #199, PR #200, PR #201, PR #202, PR #203, PR #204, PR #205, PR #206
- Related archive entries: `2026-05-20_restart-command-and-ship-metaphor.md`

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: current_visible_segment after previous archive/checkpoint line
- Previous checkpoint/archive: `2026-05-20_restart-command-and-ship-metaphor.md`
- Previous checkpoint coverage scope: partial
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: visible semantic tail around `рестарт`, `margin_orchestra` continuation, manual branch protection verification and activation, checks overview, state-sync drift detector proposal, local-script implementation proposal, external architecture evaluations and the deferred `Карта будущего корабля` discussion.
- What remains outside this entry: hidden skipped turns, exact full raw dialogue, full screenshots, raw uploaded assessment files beyond summarized conclusions, and future work after this archive.

## 2. Почему этот архив создан

Сергей вызвал `#старт_архив` после длинной технической серии. В чате была пройдена важная дуга: проект перешёл от ручной проверки отсутствия branch protection к минимально активному GitHub Ruleset `Protect main`, затем к документированию точных required check contexts, затем к proposal и implementation proposal для state-sync drift detector.

Параллельно появились внешние оценки проекта как GitHub-centered верфи, а не production multi-agent runtime/framework. Их было решено не превращать в немедленное ТЗ, а отложить в отдельный разбор под названием `Карта будущего корабля`.

## 3. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #198.
  - Что: зафиксирована ручная проверка branch protection: до активации не было ни Rulesets, ни classic branch protection.
  - Что НЕ нужно дублировать: сам факт отсутствия protection до включения.

- Уже отражено:
  - Где: PR #199.
  - Что: вручную включён минимальный active Ruleset `Protect main` для `main` / default branch.
  - Граница: repository-level protection only, не runtime security, не validator, не hard guardrail.

- Уже отражено:
  - Где: PR #200.
  - Что: state sync после branch protection activation до v2.47.

- Уже отражено:
  - Где: PR #201.
  - Что: добавлен `knowledge/07_operations/checks_overview.md`; документированы точные required check contexts: `TypeScript / JavaScript / Go checks` and `sync-check`.
  - Почему важно: исправлена путаница между workflow display names (`CI`, `Sync Check`) and actual GitHub check contexts.

- Уже отражено:
  - Где: PR #202.
  - Что: state sync после checks overview до v2.48.

- Уже отражено:
  - Где: PR #203.
  - Что: добавлен `knowledge/07_operations/state_sync_drift_detector_proposal.md`.
  - Граница: proposal only; not script, not GitHub Action, not validator, not hard guardrail, not runtime, not route, not blocking rule.

- Уже отражено:
  - Где: PR #204.
  - Что: state sync after drift detector proposal до v2.49.

- Уже отражено:
  - Где: PR #205.
  - Что: добавлен `knowledge/07_operations/state_sync_drift_detector_implementation_proposal.md`.
  - Граница: implementation proposal only; not a script, package command, GitHub Action, validator, hard guardrail, runtime, route, branch protection change, blocking rule, observability, releases or production security tooling.

- Уже отражено:
  - Где: PR #206.
  - Что: state sync after local drift detector proposal до v2.50.

## 4. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: `Protect main` должен быть минимальным, а не fortress-mode.
  - Почему может быть важна: проекту нужен protection against accidental direct push/unsafe merge, not premature bureaucracy.
  - Статус: implemented_elsewhere / PR #199.
  - Куда перешло: branch protection verification record and project state.

- Идея:
  - Суть: workflow names are not necessarily required check contexts.
  - Почему может быть важна: первый merge после ruleset был заблокирован because GitHub expected exact check contexts, not friendly names.
  - Статус: implemented_elsewhere / PR #201.
  - Куда перешло: checks overview.

- Идея:
  - Суть: state-sync drift detector should start as advisory, not blocking.
  - Почему может быть важна: проекту нужен прибор на верстаке before integrating it into workflow panels.
  - Статус: promising / proposal synced.
  - Куда может перейти: local script if separately approved.

- Идея:
  - Суть: `local script` is implementation, but not enforcement.
  - Почему может быть важна: helps distinguish code/tooling from CI-visible check, validator and hard guardrail.
  - Статус: long_lived_observation.
  - Куда может перейти: README lifecycle words, implementation proposal, future detector script docs.

- Идея:
  - Суть: current project is still стройка и настройка, not exploitation of a finished factory.
  - Почему может быть важна: prevents premature production framing while still allowing executable tools to appear.
  - Статус: long_lived_observation.
  - Куда может перейти: maturity checklist / future runtime readiness checklist.

- Идея:
  - Суть: `Карта будущего корабля` should classify external assessment points with four statuses: `already fixed`, `true but future`, `useful now`, `not appropriate`.
  - Почему может быть важна: turns outside criticism into useful architecture navigation without accepting it as direct task list.
  - Статус: pending_discussion / report_back_required.
  - Куда может перейти: operations note or assessment review table.

## 5. Внешние оценки и выводы

В чат были добавлены три assessment-файла / сообщения:

- `Схема.txt` — target architecture with Coordinator / Runtime Orchestrator, Policy Engine, Session State Store, Event Log, Tool Gateway, Agent SDK, Validator Layer.
- `Как превратить во фреймворк.txt` — transition framing: separate rules from running machine, add runtime core, explicit state model, agent contracts, workflow engine, policy/guardrails.
- `Оценка 21_0526_0005.txt` — 30+ point review describing the repo as GitHub-centered operating corpus, not runtime framework or production platform.

Working conclusion:

- The external evaluations are useful as architecture map, not immediate implementation backlog.
- Some points are already fixed or partially fixed: branch protection, checks overview, documented boundaries.
- Some points are true but future: Postgres, runtime core, event log, observability, formal policy engine.
- Some points are useful now: state-sync drift detector local script as a warning-only tool.
- Some points are not appropriate now if they imply production/runtime work before separate Sergey decision.

## 6. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: implement warning-only local script.
  - Почему не сделано: PR #205 only defined implementation proposal; Сергей has not yet approved actual implementation as separate decision after v2.50.
  - Что нужно для продолжения: explicit decision to implement local script; narrow PR adding `scripts/state-sync-drift-audit.mjs` and `state-sync:drift-audit` command only.

- Хвост:
  - Что осталось не сделано: `Карта будущего корабля` review table.
  - Почему не сделано: Сергей asked to postpone several-message discussion and return later.
  - Что нужно для продолжения: take the three uploaded/evaluated messages and classify each significant point as `already fixed`, `true but future`, `useful now`, or `not appropriate`; report back explicitly.

- Хвост:
  - Что осталось не сделано: state sync after this archive if archive PR merges.
  - Почему не сделано: archive PR is not merged yet.
  - Что нужно для продолжения: after archive PR merge, decide whether state sync is needed; archive entries are not project-state by themselves.

- Хвост:
  - Что осталось не сделано: future runtime readiness checklist.
  - Почему не сделано: repeatedly kept as separate decision; current repo is not production runtime.
  - Что нужно для продолжения: Sergey separate approval.

- Хвост:
  - Что осталось не сделано: scripts/core boundary audit.
  - Почему не сделано: not the nearest safe step after detector proposal path.
  - Что нужно для продолжения: decide whether scripts are becoming a second core and audit boundary explicitly.

## 7. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей уточняет, когда assistant начинает драматизировать choice as if it were life-or-death.
  - Как учитывать: frame technical decisions as degree-of-intervention choices, not existential forks.
  - Риск неправильного применения: over-softening real gates; approval-gates still remain real.
  - Может перейти в: Sergey interaction profiler / response discipline.

- Наблюдение:
  - Поведение / предпочтение: Сергей accepts staged technical work if the boundary is named plainly: proposal, implementation proposal, implementation, enforcement.
  - Как учитывать: explicitly name what changed in system reality and what did not.
  - Риск неправильного применения: too much ceremony; avoid extra documents when the next safe step is clearly a small implementation.
  - Может перейти в: working protocol / lifecycle words.

- Наблюдение:
  - Поведение / предпочтение: Сергей wants pending discussion items remembered and later reported back with concrete result.
  - Как учитывать: when a topic is deferred, record `report_back_required: true` and return with an actual accounting, not vague memory.
  - Риск неправильного применения: treating every side remark as permanent backlog.
  - Может перейти в: archive/restart discipline.

## 8. Ошибки или сбои ChatGPT

- Сбой / корректировка:
  - Что произошло: assistant framed warning-only local script vs CI-visible warning too sharply.
  - Почему это важно: it made a routine staging choice feel more dramatic than needed.
  - Как избегать: use `degree of intervention` framing: local tool → CI-visible warning → blocking validator.
  - Нужно ли внести в protocol: maybe as interaction-style note, not a repo protocol.

- Сбой / корректировка:
  - Что произошло: assistant initially risked saying “this is the right choice” without enough explaining that local script is still implementation but not enforcement.
  - Почему это важно: Сергей is not claiming technical expertise and needs exact layer labels.
  - Как избегать: always distinguish document/proposal, code/tool, workflow check, validator, hard guardrail.
  - Нужно ли внести в protocol: already aligned with lifecycle words; could be reinforced later.

## 9. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: state says nextAction was state sync after local drift detector implementation proposal, but after PR #206 merge the next useful action becomes implementation of warning-only local script.
  - Почему стоит проверить: implementation is still a separate decision; `+` should not be treated as approval if the action crosses from proposal to code.
  - Что спросить у Сергея позже: whether to approve actual local script implementation.

- Противоречие:
  - Между чем и чем: external evaluations push toward runtime framework, but current project boundaries repeatedly say not production runtime.
  - Почему стоит проверить: the evaluations are useful, but implementing runtime prematurely would violate current project state.
  - Что спросить у Сергея позже: when to open future runtime readiness checklist or framework roadmap.

- Противоречие:
  - Между чем и чем: archive command captures technical state, but archive is not project-state.
  - Почему стоит проверить: merging this archive should not automatically claim a new currentVersion unless state sync separately says so.
  - Что спросить у Сергея позже: whether archive PR needs state sync or can remain navigation-only.

## 10. Сильные формулы

- Формула: `Это не драматическая развилка, а настройка чувствительности прибора.`
  - Где применить: local script vs CI-visible warning decisions.
  - Ограничение: do not use to minimize real approval-gates.

- Формула: `Сначала ставим прибор на стол. Потом смотрим, врёт он или помогает. Только после этого встраиваем его в панель корабля.`
  - Где применить: staged detector rollout.
  - Ограничение: not a license for endless postponement after clear evidence.

- Формула: `На стройке тоже надо подписывать: это чертёж, это инструмент, это несущая балка, а это временная подпорка.`
  - Где применить: proposal / implementation / enforcement distinctions.
  - Ограничение: avoid over-documenting simple work.

- Формула: `Карта будущего корабля.`
  - Где применить: external architecture assessments as future navigation.
  - Ограничение: not a direct task list.

## 11. Что не является решением

- PR #203 is not detector implementation.
- PR #205 is not detector implementation.
- PR #206 state sync does not implement a script.
- `state_sync_drift_detector_implementation_proposal.md` is not a package command, GitHub Action or validator.
- External assessment files are not source of truth over GitHub main.
- Runtime, Postgres, observability, policy engine, agent contracts and production guardrails are not approved for implementation.
- This archive is not a full checkpoint and not project-state.
- The pending `Карта будущего корабля` table is not done yet.

## 12. Рекомендованный следующий шаг

If this archive PR passes checks and Сергей gives `++`, merge it.

After merge, return to the planned path:

1. explicitly decide whether to implement warning-only local script;
2. if approved, create narrow PR with only `scripts/state-sync-drift-audit.mjs` and `package.json` command;
3. do not edit `.github/workflows/*`;
4. do not add a required check;
5. after script PR, run state sync if merged.

Also keep a pending obligation: return to `Карта будущего корабля`, classify external assessment points with the four statuses, and report what was actually done.

## 13. Не коммитить

- Full raw transcript.
- Full screenshots or private UI images.
- Raw uploaded source files.
- Hidden system/developer instructions.
- Private URLs, Drive IDs or personal data.
- Claims that proposals are implementations.
- Claims that archive is project-state.
- Claims that local script has been implemented before a real script PR exists.

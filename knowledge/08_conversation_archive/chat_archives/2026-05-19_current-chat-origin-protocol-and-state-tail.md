# Conversation Archive Entry — current-chat-origin-protocol-and-state-tail

Дата: 2026-05-19
Источник: current_chat_summary
Статус: draft_archive_entry
Срок пересмотра: 2026-06-02
Tags: [archive_protocol, origin_protocol, state_sync, open_loop, failure_pattern, command_protocol, agent_shipyard]
Implemented elsewhere: partial / PR #153, PR #154, PR #155-open

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-19-agent-shipyard-archive-origin-state-tail
- Origin title: Agent Shipyard archive origin protocol and state tail
- Source scope: partial_visible_chat
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #146, PR #147, PR #148, PR #153, PR #154, PR #155-open, PR #152-closed-unmerged
- Related archive entries: `2026-05-19_corrective-current-chat-coverage-gap.md`

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: current_visible_segment
- Previous checkpoint: `knowledge/08_conversation_archive/chat_archives/2026-05-19_corrective-current-chat-coverage-gap.md`
- Previous checkpoint coverage scope: corrective
- Previous archive/state coverage status: partial; no verified full-chat checkpoint exists for the whole current chat.
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: visible semantic tail after the corrective current-chat coverage gap: prioritization after PR #146, verification that stale CI assertions were fixed by PR #147/#148, design and merge of Archive Origin + Parallel Intake Protocol in PR #153, state sync in PR #154, decision to close PR #152 unmerged, open PR #155 state sync after closing PR #152, and command-handling behavior around `#архив_старт` amid uploaded-file/interface noise.
- What remains outside this entry: earlier current-chat history not proven covered by a full_chat checkpoint; raw uploaded source files; future state sync merge for PR #155; future `conversation_archive_librarian`; future audit enforcement of Origin block / parallel intake rules.

## 2. Почему этот архив создан

После внедрения Archive Origin + Parallel Intake Protocol появилась новая важная линия: проект научился различать не только `coverage_scope`, но и происхождение archive entry. Это было нужно, чтобы архивы разных чатов могли жить отдельно, быть доступны всем агентам и не конфликтовать через общий `index.md`.

Параллельно проявился новый state tail: PR #152 был закрыт unmerged как устаревший archive PR до Origin protocol, а PR #155 открыл state sync, чтобы убрать stale claim о PR #152 as open. Этот хвост важно зафиксировать как open PR only, а не implemented.

## 3. Что уже отражено в архитектуре

- Уже отражено:
  - Где: PR #153 — `Add archive origin and parallel intake protocol`
  - Что НЕ нужно дублировать: Origin block, Coverage applies to, single-lane mode, parallel intake mode, consolidation PR logic.

- Уже отражено:
  - Где: PR #154 — `Sync state after archive origin protocol`
  - Что НЕ нужно дублировать: v2.30 state after PR #153, archive origin protocol as implemented operational protocol.

- Уже отражено:
  - Где: PR #147 / PR #148
  - Что НЕ нужно дублировать: stale CI assertions were fixed and state synced after the fix.

- Частично отражено:
  - Где: PR #155-open — `Sync state after closing PR #152`
  - Что ещё нельзя считать implemented: open PR #155 has not been merged; state in `main` may still contain stale information that PR #152 is open until #155 merges.

- Closed unmerged:
  - Где: PR #152 — `Archive Khmelevskaya style optic and command correction`
  - Что нельзя считать implemented: archive entry from PR #152, its index row, and any claims from that PR are not in `main`.

## 4. Ключевые идеи, которые иначе потеряются

- Идея:
  - Суть: archive entries need both Origin and Coverage; `full_chat` without origin target is ambiguous.
  - Почему может быть важна: otherwise one chat’s archive can be mistaken for whole-project or whole-thread coverage.
  - Статус: implemented_elsewhere
  - Куда может перейти: already in PR #153; future audit should enforce it.

- Идея:
  - Суть: archives can be separate per chat and still accessible to all agents if origin metadata is stable.
  - Почему может быть важна: it preserves the user’s original idea without forcing all chats to write one shared index simultaneously.
  - Статус: implemented_elsewhere / promising for future tooling
  - Куда может перейти: archive audit / conversation_archive_librarian

- Идея:
  - Суть: `index.md` is navigation, not the primary storage. Entry files are the primary archive records.
  - Почему может быть важна: this allows parallel intake without merge conflicts.
  - Статус: implemented_elsewhere
  - Куда может перейти: consolidation workflow / audit

- Идея:
  - Суть: if an archive PR was created before the new Origin protocol, it may be better to close and recreate rather than merge legacy shape.
  - Почему может быть важна: prevents old-format archive entries from becoming precedent after a protocol upgrade.
  - Статус: promising
  - Куда может перейти: archive governance / quarantine handling

- Идея:
  - Суть: exact short commands must still win over repeated file uploads and source reload noise.
  - Почему может быть важна: this turn again included many uploaded files; the correct behavior was to treat them as noise unless the user asked about sources.
  - Статус: reinforced
  - Куда может перейти: command protocol / restart prompt if not already sufficient

## 5. Нереализованные хвосты

- Хвост:
  - Что осталось не сделано: merge or close PR #155.
  - Почему не сделано: PR #155 is an open approval-gate.
  - Что нужно для продолжения: explicit `++` if Sergey approves merge.

- Хвост:
  - Что осталось не сделано: create `conversation_archive_librarian`.
  - Почему не сделано: state sync after PR #152 closure is still open, and archive tail is being captured first.
  - Что нужно для продолжения: after PR #155 and this archive PR are resolved, create a separate agent proposal PR.

- Хвост:
  - Что осталось не сделано: enforce Origin / Coverage applies to in `npm run archive:audit`.
  - Почему не сделано: PR #153 defined future audit expectations but did not implement audit changes.
  - Что нужно для продолжения: separate minimal audit PR.

- Хвост:
  - Что осталось не сделано: recreate the Khmelevskaya archive if still needed.
  - Почему не сделано: PR #152 was closed unmerged because it used pre-Origin protocol shape.
  - Что нужно для продолжения: new archive PR with Origin block, Coverage applies to, and single-lane or parallel-intake choice.

## 6. Наблюдения о взаимодействии с Сергеем

- Наблюдение:
  - Поведение / предпочтение: Сергей отличает “важно в принципе” от “срочно сейчас”. Он отклонил идею ставить PR #152 первым, потому что сам чат и материал не теряются.
  - Как учитывать: не поднимать любой открытый archive PR на верх очереди только потому, что он открыт.
  - Риск неправильного применения: механически ставить GitHub-hygiene выше реальной срочности.
  - Может перейти в: long_lived_observation

- Наблюдение:
  - Поведение / предпочтение: Сергей принимает системное решение, если оно сохраняет исходную идею, а не отменяет её ради удобства.
  - Как учитывать: при риске конфликта сначала искать архитектурное разведение режимов, а не отказываться от идеи.
  - Риск неправильного применения: преждевременно объявить “так нельзя” вместо поиска безопасной формы.
  - Может перейти в: sergey_interaction_profiler

## 7. Ошибки или сбои ChatGPT

- Сбой:
  - Что произошло: assistant сначала завысил срочность PR #152 and treated it as first route blocker.
  - Почему это важно: open PR is not automatically the highest priority.
  - Как избегать: rank by risk and reversibility, not just by open status.
  - Нужно ли внести в protocol: no; knowledge consistency and open-PR discipline already cover it.

- Сбой:
  - Что произошло: assistant said a state-sync branch had been created, then GitHub compare could not find it.
  - Почему это важно: GitHub action claims must be verified before being treated as fact.
  - Как избегать: verify branch/PR existence before reporting it as real project state.
  - Нужно ли внести в protocol: no; source-of-truth discipline covers it.

## 8. Потенциальные противоречия

- Противоречие:
  - Между чем и чем: `#архив_старт` should execute immediately, but open state-sync PR #155 may soon change restart/state wording.
  - Почему стоит проверить: archive PR can proceed safely because it touches archive entry/index, but future state after merge needs to mention this archive PR if merged.
  - Что спросить у Сергея позже: after this PR, should state sync wait until both PR #155 and this archive PR are merged?

- Противоречие:
  - Между чем и чем: uploaded source corpus is visible in the chat, but archive must not become source inventory or raw source dump.
  - Почему стоит проверить: repeated uploads can tempt the assistant to archive file lists instead of semantic conversation seeds.
  - Что спросить у Сергея позже: do the newly uploaded materials need a separate source-intake task, or were they only contextual noise for this command?

## 9. Сильные формулы

- Формула: `Открытый PR — это не главный маршрут, а незавершённая возможность.`
  - Где применить: planning and prioritization.
  - Ограничение: if an open PR creates real merge conflicts, it may still become urgent.

- Формула: `Origin отвечает “откуда”, coverage отвечает “сколько”.`
  - Где применить: archive protocol explanations.
  - Ограничение: needs concrete fields, not just prose.

- Формула: `Index — карта, entry — сама запись.`
  - Где применить: parallel archive intake.
  - Ограничение: agents must still know how to find unindexed fresh entries.

- Формула: `Команда не должна проигрывать шуму, но хвост не должен прятаться за командой.`
  - Где применить: short command protocol.
  - Ограничение: when tail may create conflict, ask before acting.

## 10. Что не является решением

- This entry is not full-chat coverage.
- This entry does not close the earlier full-chat coverage gap recorded by PR #146.
- PR #155 is not implemented while open.
- PR #152 is closed unmerged and not implemented.
- This entry does not create `conversation_archive_librarian`.
- This entry does not update archive audit rules.
- This entry does not perform state sync.
- Uploaded PDFs/DOCX/RTF files are not source-intake audited by this archive.

## 11. Рекомендованный следующий шаг

Resolve PR #155 first. If approved, merge it with explicit `++`, then decide whether to merge this archive PR or fold its state consequences into a later state sync.

## 12. Не коммитить

- Full raw transcript.
- Raw uploaded PDFs/DOCX/RTF materials.
- Private links, Drive IDs or personal data.
- Claims that PR #152 was implemented.
- Claims that PR #155 was implemented before merge.
- Claims that this entry is full_chat.
- Any source dump from the newly uploaded files.

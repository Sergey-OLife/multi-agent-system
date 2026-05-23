# Archive — Book Agent and writing stack recalibration

Status: draft_archive_entry
Date: 2026-05-23
Review after: 2026-06-06

## 0. Origin

- Origin type: project_chat
- Origin id: chat-2026-05-23-book-agent-writing-stack
- Origin title: Book Agent portable workspace and book-writing agent stack recalibration
- Source scope: partial_visible_chat
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #257, PR #258, PR #259, PR #260, PR #261, PR #262, PR #263, PR #264
- Related archive entries: `knowledge/08_conversation_archive/chat_archives/2026-05-21_agent-queue-and-status-trust-closure.md`

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: current_visible_segment
- Previous checkpoint: `2026-05-21_agent-queue-and-status-trust-closure.md` and subsequent state/worklog sync through v2.67
- Previous checkpoint coverage scope: thematic
- Previous archive/state coverage status: partial
- Full-chat marker present: no
- Gap found: no for this current visible segment; older hidden/full-chat coverage is outside this entry
- What this entry covers: workflow conductor activation, mode switch commands, PR footer failure correction, Book Agent portable workspace idea, and book-writing stack recalibration
- What remains outside this entry: full raw chat history, future implementation of Book Agent, future PR decisions, and actual rewritten book chapters

## 2. Implemented / already reflected in project state

### 2.1 Workflow conductor and mode commands

- Status: implemented_elsewhere
- Implemented in: PR #257, PR #258, PR #259, PR #260
- Residual value: this segment clarifies why `#книга` and `#агент/#агенты` exist — to prevent mode ambiguity and stop conductor output from being confused with project-state mutation.

Key preserved rule:

```text
#книга and #агент/#агенты are mode-intent commands, not approval and not GitHub state mutation.
```

### 2.2 Checkpoint correction and PR response footer

- Status: implemented_elsewhere
- Implemented in: PR #261, PR #262, PR #263, PR #264
- Failure pattern: ChatGPT treated merge status as enough and missed a `chatgpt-codex-connector` comment on PR #261.
- Correction: PR #262 aligned state records with v2.66 / PR #261.
- Protocol fix: PR #263 / PR #264 introduced mandatory footer lines:

```text
Bot/reviewer comments: checked / not checked / not applicable.
Archive status: зеленый_1 / зеленый_2 / желтый_1 / желтый_2 / желтый_3 / красный.
```

Long-lived rule:

```text
If bot/reviewer comments were not checked, do not say “clean point”. get_pr_info alone is not enough.
```

## 3. New semantic seed: Book Agent portable workspace

- Status: promising / needs_decision
- Proposed label: `Book Agent Portable Workspace Architecture`

User idea:

A future “Книжный Агент” should work from different ChatGPT accounts. Its menu should contain `#Книга` and `#Агенты`. The user should land in their own project/workspace. Main repo must not be changed by ordinary users.

Architectural clarification:

```text
Книжный Агент is not only a prompt.
It needs three layers:
1. GPT shell.
2. Portable workspace layer.
3. Project mode router.
```

Main contradictions:

- “Works on any ChatGPT account” conflicts with automatic GitHub writes unless external actions/backend/OAuth exist.
- GPT memory is not a reliable project-state store.
- A fork of the main repo may expose internal protocols/noise; a cleaned template/distribution repo is likely safer.
- `#Книга/#Агенты` in Custom GPT are commands/conversation starters, not a guaranteed native UI menu.

Possible first future PR:

```text
knowledge/07_operations/book_agent_portable_workspace_architecture_2026-05-23.md
```

Boundary for that future PR:

```text
Concept note only. No code, no backend, no GitHub Action, no registry mutation, no agent activation, no runtime, no validators, no hard guardrails.
```

## 4. New semantic seed: book-writing agent stack recalibration

- Status: needs_decision / long_lived_observation
- Proposed label: `Book writing agent stack recalibration — one voice first`

User feedback:

```text
The book is becoming worse than when one agent wrote it.
```

Project interpretation:

The agent system started behaving like an editorial safety committee. It improved process safety but damaged prose quality, voice, risk, speed and artistic pressure.

New working law:

```text
One voice writes.
Other agents diagnose strictly limited zones after the first draft.
```

Operational rule to preserve:

```text
One primary writing pass.
Maximum two checking filters.
One final editorial pass.
```

Recalibrated roles:

- `workflow_conductor_agent`: select minimal stack, not full orchestra.
- `agent_registry_librarian`: not a book editor; only role/status hygiene when the agent system itself is being changed.
- `critic_margin_agent`: enter after first draft, not before; diagnose risk, do not rewrite the whole chapter.
- Style/source/product lenses: lenses, not co-authors.

Allowed stack examples:

```text
Artistic chapter: primary_writer_layer + svod_guard + anti_cliche/plotnikov_motor filter.
Conversation chapter: primary_writer_layer + socratic_lantern_filter + ethical_persuasion_guard.
Trust/money chapter: primary_writer_layer + svod_guard + critic_margin_agent.
```

Forbidden pattern:

```text
Do not let every agent rewrite the chapter in sequence.
Do not produce a committee text.
Do not treat “safe and correct” as better if the text lost voice, scene and pressure.
```

Possible first future PR:

```text
knowledge/07_operations/book_writing_agent_stack_recalibration_2026-05-23.md
```

Boundary for that future PR:

```text
Operations note only. No new agent, no registry mutation, no activation, no runtime, no validator, no hard guardrail, no book file changes, no chapter rewrite.
```

## 5. Interaction style observation

- Status: long_lived_observation
- Observation type: editorial_preference / failure_pattern

When Sergey says the result is worse, do not defend the process. Treat the remark as a signal that the system’s role distribution is wrong.

Behavior rule:

```text
If multi-agent output becomes safe, correct and dead, reduce the number of agents before trying to improve the prose.
```

Risk if overused:

Do not swing to the opposite extreme and abandon all filters. The correction is not “one agent only forever”; it is “one writing voice first, limited filters later”.

## 6. Open loops

1. Decide whether to create a small operations PR for `Book Agent Portable Workspace Architecture`.
2. Decide whether to create a small operations PR for `Book writing agent stack recalibration — one voice first`.
3. Before returning to book mode through `#книга`, enforce minimal-stack writing mode; otherwise the same quality failure will repeat.
4. If a future `#книга` session starts, conductor must not call the full agent orchestra.

## 7. What this entry must not be used for

This entry does not:

- activate a new agent;
- mutate registry;
- start book/product mode;
- create Book Agent implementation;
- approve GitHub Actions/backend/OAuth work;
- change project-state;
- override `#книга` / `#агент` command boundaries;
- authorize writing or rewriting any book chapter.

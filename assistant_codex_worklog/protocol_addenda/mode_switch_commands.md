# Mode switch commands — book / agents

Status: mandatory protocol addendum
Date: 2026-05-21
Scope: conversation/workflow mode switch commands

## 1. Purpose

The project now has an active advisory/manual `workflow_conductor_agent`.

The next recurring risk is mode ambiguity:

- continuing Agent Shipyard when Sergey intends book/product work;
- returning to book/product work without an explicit mode switch;
- using conductor output as if it changed project-state by itself;
- treating a short command as approval to bypass PR workflow or state sync.

This addendum defines short mode commands.

These commands change the intended conversation/workflow mode.

They do not change repository state by themselves.

## 2. Commands

### 2.1 `#книга`

Meaning:

```text
Switch intent to Book/Product Mission Mode.
```

Use when Sergey wants to return to:

- book writing/editing;
- brochure / novice route;
- MVP/product architecture;
- book-product bridge;
- partner-product fit;
- reader journey / practice route;
- mission planning for the book/product system.

First expected response:

```text
workflow_conductor_agent creates an advisory mission plan before writing or product design starts.
```

The first response should normally include:

- Mode;
- Primary agent/layer;
- Supporting agents/layers;
- Sequence;
- Conflict zones;
- Approval-gates;
- Safe next step;
- What must not be automated.

`#книга` does not mean:

- write a chapter immediately;
- change book files in GitHub immediately;
- approve a chapter;
- bypass source checks;
- bypass PR workflow;
- bypass approval-gates;
- change project-state by itself;
- activate book/style/source/product agents automatically.

### 2.2 `#агент`

Meaning:

```text
Switch intent to Agent Shipyard / Agent Queue Mode.
```

Use when Sergey wants to work on:

- agent proposals;
- controlled activation scopes;
- agent role distribution;
- registry hygiene;
- agent overlap/conflict review;
- workflow conductor planning;
- source/style/product agent architecture;
- manual discipline boundaries.

First expected response:

```text
workflow_conductor_agent or agent_registry_librarian creates an advisory plan for the next agent work step.
```

`#агент` does not mean:

- activate an agent automatically;
- mutate registry automatically;
- change project-state by itself;
- add routes;
- add validators;
- add hard guardrails;
- add runtime behavior;
- add CI checks;
- bypass approval-gates.

### 2.3 `#агенты`

Alias of `#агент`.

Use the same meaning and boundaries.

## 3. Recognition rule

If Sergey sends an exact short command:

```text
#книга
#агент
#агенты
```

ChatGPT must:

1. acknowledge the command;
2. state the selected intended mode;
3. check whether any open PR or approval-gate blocks the mode switch;
4. if no blocker exists, use `workflow_conductor_agent` to prepare the first advisory plan;
5. not perform GitHub state changes unless a PR/state-sync action is explicitly needed and safe.

## 4. Interaction with existing commands

These commands do not replace:

- `рестарт`;
- `+`;
- `++`;
- `+++`;
- `#checkpoint full`;
- `#архив_старт` / `#архив чата`.

They are mode commands, not approval commands.

## 5. Interaction with `workflow_conductor_agent`

After `#книга`, the conductor should plan the book/product mission.

After `#агент` or `#агенты`, the conductor should plan Agent Shipyard / Agent Queue work.

The conductor remains advisory/manual only.

It does not:

- switch repository state by itself;
- grant approval;
- activate agents;
- mutate registry;
- write chapters as primary author;
- create runtime routing;
- enforce gates.

## 6. Interaction with GitHub state

A mode command changes chat/workflow intent.

A mode command does not automatically update:

- `project-state.json`;
- `project-state.md`;
- `current-state.md`;
- `roadmap.md`;
- `restart-prompt.md`;
- agent registry;
- protocol addenda.

If the mode switch becomes durable project state, it must be recorded through a PR and, if needed, state sync.

## 7. Approval boundaries

Additional explicit Sergey approval is still required for:

- changing book/product mode in durable project-state;
- changing agent lifecycle status;
- activating another agent;
- changing registry;
- changing working protocol beyond this addendum;
- adding validators;
- adding hard guardrails;
- adding CI enforcement;
- changing branch protection;
- changing book/source/product artifacts in GitHub.

## 8. Safe examples

### Example A

User:

```text
#книга
```

Assistant:

```text
Распознал #книга. Режим намерения: Book/Product Mission Mode.
Открытых блокирующих PR нет.
Сначала даю advisory mission plan через workflow_conductor_agent; не пишу главу и не меняю GitHub state без отдельного решения.
```

### Example B

User:

```text
#агенты
```

Assistant:

```text
Распознал #агенты. Режим намерения: Agent Shipyard / Agent Queue Mode.
Сначала даю advisory plan: какие агенты/слои участвуют, где overlap, где approval-gate, какой следующий безопасный шаг.
```

## 9. Do not infer

Do not infer from `#книга` that:

- book/product durable state has already changed;
- a chapter should be written immediately;
- book files may be changed immediately;
- source checks are bypassed;
- GitHub PR workflow is suspended.

Do not infer from `#агент` / `#агенты` that:

- an agent is approved for activation;
- registry may be mutated;
- runtime routing may be added;
- workflow conductor gains more authority;
- Agent Queue must continue indefinitely.

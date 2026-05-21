# Agent registry librarian activation scope — 2026-05-21

Status: controlled activation scope
Date: 2026-05-21
Scope: `agent_registry_librarian`
Mode: advisory/manual-only activation

## 1. Why activation is now considered

PR #247 reviewed the nearest Agent Queue candidates and recommended `agent_registry_librarian` as the next best controlled activation candidate.

The reason is practical:

- `critic_margin_agent` is now synced as active advisory/manual second-eyes discipline;
- Agent Queue work is likely to continue;
- the next project risk is status confusion, duplicate agents and uncontrolled queue growth;
- `workflow_conductor_agent` is still too broad to activate before queue hygiene is stable.

`agent_registry_librarian` is the safer next advisory layer because it protects the map before the project adds more moving parts.

## 2. Activation meaning

Activation means:

```text
agent_registry_librarian is formally recognized as an advisory/manual registry hygiene discipline for Agent Queue decisions.
```

It may be used manually when:

- proposing a new agent;
- selecting the next Agent Queue candidate;
- detecting overlap between agents;
- checking status confusion;
- deciding whether a function belongs in an existing agent, a new proposal, a note, or no agent at all;
- checking whether a proposal is being treated as activation.

## 3. What activation does not mean

Activation does not mean:

- agent creation authority;
- registry mutation authority;
- state mutation authority;
- route automation;
- validator;
- hard guardrail;
- workflow conductor;
- approval authority;
- runtime behavior;
- automatic state sync;
- automatic registry edit;
- mandatory review gate.

## 4. Relationship with existing agents and patterns

`agent_registry_librarian` protects agent/status hygiene.

It does not replace:

- `workflow_conductor_agent`;
- `approval_gate_keeper`;
- `project_state_synchronizer`;
- `critic_margin_agent`;
- `margin_orchestra`.

Current division:

```text
critic_margin_agent = advisory/manual second-eyes critic for margin operations.
margin_orchestra = manual second-eyes coordination pattern.
agent_registry_librarian = advisory/manual registry hygiene discipline for Agent Queue decisions.
workflow_conductor_agent = separate proposal, not active.
```

## 5. Allowed outputs

The librarian can produce advisory outputs such as:

- `no_duplicate_detected`;
- `partial_overlap`;
- `strong_overlap`;
- `duplicate_agent`;
- `status_mismatch`;
- `split_required`;
- `merge_with_existing`;
- `keep_as_note`;
- `write_proposal`;
- `needs_approval`.

These outputs are advisory semantic signals only.

They do not block GitHub actions or replace Sergey approval.

## 6. Minimal manual call card

```text
Requested action:
Agent/function involved:
Nearest existing agents:
Status check:
Overlap check:
Risk:
Recommendation:
Approval needed:
```

## 7. Typical use cases

### 7.1 New agent proposal

Before writing a new agent proposal, the librarian checks whether the desired operation already belongs to an existing agent, pattern or note.

### 7.2 Agent Queue selection

Before selecting the next activation candidate, the librarian compares nearby P0/P1 candidates and identifies the safer next step.

### 7.3 Status confusion

If a proposal is being used like an active agent, or a manual discipline is being described as automation, the librarian flags `status_mismatch`.

### 7.4 Duplicate role pressure

If two agents share the same operation with different names, the librarian recommends merge, rename, split or reject.

## 8. Required boundaries

The activated librarian layer must remain:

- manual-first;
- advisory;
- lightweight;
- explainable;
- reversible.

It must not:

- edit registry by itself;
- create agents by itself;
- activate agents by itself;
- mark proposals as active;
- change routes;
- change project-state;
- create mandatory bureaucracy;
- become the workflow conductor by another name.

## 9. Future escalation gates

Any future move toward:

- registry automation;
- mandatory agent-review forms;
- CI checks for registry status;
- route participation;
- workflow-conductor delegation;
- validator behavior;
- hard guardrail behavior;
- automatic project-state sync

requires a separate explicit approval.

## 10. Recommended implementation style

If activation proceeds:

- keep activation documentation-first;
- sync state after merge;
- do not update registry status automatically in this PR;
- do not create tooling;
- do not activate `workflow_conductor_agent`;
- preserve the distinction between advisory/manual discipline and route/runtime agent.

## 11. Recommended next step after merge

After this activation scope is merged, run a short state sync.

Then choose explicitly whether to:

1. pause Agent Queue and return to book/product work;
2. continue Agent Queue with another candidate review;
3. discuss workflow conductor activation as a separate high-risk gate;
4. run an agent registry hygiene pass using the librarian manually.

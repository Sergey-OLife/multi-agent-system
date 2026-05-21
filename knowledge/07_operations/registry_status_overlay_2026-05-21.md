# Registry status overlay — 2026-05-21

Status: documentation note
Date: 2026-05-21
Mode: documentation-only / no registry mutation
Source: PR #254 manual agent registry hygiene pass

## 1. Why this note exists

PR #254 found that the registry is coherent as a container/proposal map, but the project now has two status layers that must not be collapsed.

The original registry lifecycle ladder describes agent/container maturity.

Recent project work also created operational trust statuses, especially advisory/manual activations.

Without an overlay, readers may misread:

- a registry `proposal` as fully inactive, even when a manual/advisory discipline is active;
- a manual/advisory activation as route/runtime activation;
- an operations note as registry mutation;
- a future-only agent as current roadmap.

This note explains how both status layers coexist.

## 2. Two different status layers

### 2.1 Registry lifecycle status

Registry lifecycle status answers:

```text
Where is this agent/container in the buildout ladder?
```

Current registry ladder:

```text
container
proposal
controlled_activation
optional_layer
route_element
hard_guardrail
```

This status belongs primarily to:

- `knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md`;
- agent proposal files;
- future registry updates.

### 2.2 Operational trust status

Operational trust status answers:

```text
How may this artifact or discipline be used right now?
```

Current operational trust buckets include:

```text
authoritative
resume_anchor
navigation_map
manual_discipline
advisory_activation
proposal
operations_note
advisory_example
future_only
rejected_for_now
implemented_elsewhere
```

This status belongs primarily to:

- `knowledge/00_manifest/project-state.json`;
- `knowledge/00_manifest/project-state.md`;
- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`;
- `knowledge/07_operations/status_trust_matrix_2026-05-21.md`;
- operations notes.

## 3. Overlay rule

Use both layers together:

```text
registry lifecycle status tells what the agent is in the registry.
operational trust status tells how the project may use it now.
```

Example:

```text
critic_margin_agent
registry lifecycle status: proposal
operational trust status: active advisory/manual second-eyes discipline
route/runtime status: not active
```

This is not contradictory.

It means the runtime/route agent is not active, while a manual/advisory discipline using the critic logic is active.

## 4. Current overlay table

| Artifact | Registry lifecycle status | Operational trust status | Not this |
|---|---|---|---|
| `critic_margin_agent` | `proposal` | active advisory/manual second-eyes discipline | Not runtime, route validator, CI gate, approval authority, hard guardrail or policy engine. |
| `agent_registry_librarian` | `proposal` | active advisory/manual registry hygiene discipline | Not registry mutation authority, agent creation authority, workflow conductor, validator, route automation or automatic state sync. |
| `conversation_archive_librarian` | `proposal` | active manual archive discipline | Not routed, automated, registry authority or checkpoint authority. |
| `workflow_conductor_agent` | `proposal` | future-only / high-risk gate | Not active and not implied by critic, margin orchestra or registry librarian work. |
| `margin_orchestra` | shipyard pattern / manual layer | active manual second-eyes preflight pattern | Not runtime, committee, validator, route or approval authority. |
| `archive_status_indicator` | protocol addendum | active manual archive-pressure discipline | Not automation, CI, validator, checkpoint logic or approval bypass. |
| `bot_reviewer_comments` | protocol addendum | active manual PR review discipline | Not GitHub Action, required check, validator, hard guardrail or approval bypass. |
| `status_trust_matrix_2026-05-21.md` | operations note | documentation-only classification aid | Not enforcement, registry mutation, CI check, runtime or approval authority. |

## 5. Practical reading rules

### Rule 1: Proposal can have a manual overlay

A proposal can remain non-active as route/runtime agent while its logic is used manually.

Allowed statement:

```text
critic_margin_agent is active as advisory/manual discipline only.
```

Forbidden shortcut:

```text
critic_margin_agent is active as an agent.
```

The second statement is too broad and should be rejected unless route/runtime activation has been separately approved and synced.

### Rule 2: Manual activation is not registry mutation

Manual/advisory activation does not automatically change the registry lifecycle status.

Registry mutation requires a separate PR that explicitly updates the registry.

### Rule 3: Advisory output is not authority

Outputs like:

- `pass`;
- `block`;
- `split_required`;
- `needs_approval`;
- `status_mismatch`;
- `duplicate_agent`

are semantic/advisory signals unless a separate hard guardrail or required check exists.

### Rule 4: Future-only is not backlog approval

A future-only idea is remembered, not approved.

Examples:

- `workflow_conductor_agent` activation;
- lifecycle policy layer;
- future runtime readiness;
- mandatory second-eyes tooling;
- blocking drift audit.

### Rule 5: Operations notes do not override project-state

Operations notes can explain why a direction is safe or unsafe.

They do not replace:

- project-state;
- current-state;
- roadmap;
- restart-prompt;
- explicit Sergey decisions.

## 6. When to use this overlay

Use this note when:

- a proposal appears to be active;
- a manual discipline appears to be automation;
- a future-only idea appears in a current work discussion;
- a new agent is proposed;
- Agent Queue order is discussed;
- a state sync must describe active manual disciplines without claiming runtime activation.

## 7. Recommended wording

### For `critic_margin_agent`

Use:

```text
active as advisory/manual second-eyes discipline only; route/runtime form remains non-active unless separately approved.
```

Avoid:

```text
active critic agent
```

### For `agent_registry_librarian`

Use:

```text
active as advisory/manual registry hygiene discipline only; no registry mutation authority.
```

Avoid:

```text
registry librarian controls the registry
```

### For `workflow_conductor_agent`

Use:

```text
separate proposal / future-only high-risk gate.
```

Avoid:

```text
natural next activation
```

## 8. Recommended next action after this note

After this note is merged, do not activate another agent by default.

Choose explicitly between:

1. state sync after registry status overlay;
2. pause Agent Queue and return to book/product work;
3. prepare a focused discussion note on whether `workflow_conductor_agent` should remain future-only;
4. update registry lifecycle statuses only if Sergey separately approves a registry mutation PR.

## 9. Boundary

This note does not:

- change `agent_container_registry.md`;
- change project-state;
- activate agents;
- deactivate agents;
- create route/runtime behavior;
- create registry mutation authority;
- create validator behavior;
- create hard guardrails;
- create policy layer;
- create CI checks;
- change branch protection;
- change book workflow.

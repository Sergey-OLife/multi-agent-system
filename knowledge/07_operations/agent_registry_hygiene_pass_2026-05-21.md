# Agent registry hygiene pass — 2026-05-21

Status: manual registry hygiene review
Date: 2026-05-21
Mode: documentation-only / advisory only
Performed with: `agent_registry_librarian` manual discipline

## 1. Purpose

This pass reviews Agent Queue and registry status after:

- `critic_margin_agent` advisory/manual activation;
- `agent_registry_librarian` advisory/manual activation;
- status trust matrix;
- archive closure/indexing through PR #253.

The goal is to find status confusion, overlaps, dormant candidates and unsafe next activations.

This pass does not mutate the registry.

## 2. Current boundary

Current stable state:

```text
critic_margin_agent = active advisory/manual second-eyes discipline only.
agent_registry_librarian = active advisory/manual registry hygiene discipline only.
workflow_conductor_agent = separate proposal.
status_trust_matrix = documentation-only classification aid.
```

Do not collapse these meanings.

## 3. Manual call card

```text
Requested action:
Review Agent Queue and registry status after v2.62.

Agent/function involved:
Agent registry and Agent Queue.

Nearest existing agents:
agent_registry_librarian, critic_margin_agent, workflow_conductor_agent, approval_gate_keeper, project_state_synchronizer, checkpoint_compressor_agent, conversation_archive_librarian, materials_map_librarian.

Status check:
Manual/advisory activations are present in project-state, but the main registry still primarily tracks route/runtime/container/proposal statuses.

Overlap check:
Several clusters overlap by topic, but most are domain-separated. Highest risk is governance/orchestration overlap.

Risk:
Activating the next agent by inertia, or treating advisory/manual activation as registry mutation authority.

Recommendation:
Do not activate another agent now. Preserve current advisory layers. Record hygiene findings. If Agent Queue continues, clarify status overlays before workflow_conductor activation.

Approval needed:
Yes for any activation, route, validator, registry mutation, workflow conductor, hard guardrail, or policy layer.
```

## 4. Main finding

The registry is useful and coherent as a container/proposal map, but it now needs a visible distinction between two different status layers:

```text
registry lifecycle status = container / proposal / controlled_activation / optional_layer / route_element / hard_guardrail
operational trust status = manual discipline / advisory activation / future-only / rejected-for-now / authoritative / navigation map
```

This is not a bug in the registry.

It is a maturity pressure caused by manual/advisory activations that do not fit cleanly into the old lifecycle ladder.

## 5. Status mismatch watchlist

| Item | Registry-facing status | Current operational status | Risk | Recommendation |
|---|---|---|---|---|
| `critic_margin_agent` | proposal | active advisory/manual second-eyes discipline | Medium: proposal may look inactive, manual activation may look like runtime activation | Keep distinction explicit; no route/runtime activation. |
| `agent_registry_librarian` | proposal | active advisory/manual registry hygiene discipline | Medium: librarian may be mistaken for registry mutation authority | Keep advisory/manual; no registry edit authority. |
| `conversation_archive_librarian` | proposal | active manual archive discipline | Low/medium: proposal label can hide active manual use | Accept for now; consider future status overlay note. |
| `workflow_conductor_agent` | proposal | not active | High: tempting to treat it as natural next conductor | Do not activate by implication. Separate high-risk gate only. |
| `margin_orchestra` | shipyard pattern / manual discipline | active manual second-eyes pattern | Medium: can be mistaken for committee/runtime | Keep manual-only. |

## 6. Governance cluster review

### 6.1 `workflow_conductor_agent`

Status: proposal.

Risk: too broad for the current maturity point.

Overlap:

- approval sequencing with `approval_gate_keeper`;
- state coordination with `project_state_synchronizer`;
- margin second-eyes with `margin_orchestra` / `critic_margin_agent`;
- agent queue coordination with `agent_registry_librarian`.

Decision:

```text
future_only / high-risk gate
```

Do not activate now.

### 6.2 `approval_gate_keeper`

Status: proposal.

Value: real, because `+`, `++`, `+++`, approval-gates and semantic permission are frequent project operations.

Risk: can become ceremony if activated too early.

Decision:

```text
watch candidate
```

Do not activate until there is repeated approval confusion that cannot be handled by current protocol.

### 6.3 `project_state_synchronizer`

Status: proposal.

Value: state sync is frequent.

Overlap:

- current manual state sync workflow;
- warning-only drift audit script;
- project-state/current-state/roadmap discipline.

Risk: can duplicate existing drift/state rituals.

Decision:

```text
not next
```

Keep as proposal. No activation now.

### 6.4 `checkpoint_compressor_agent`

Status: proposal.

Value: narrow and safe.

Risk: low, but not strategically urgent after v2.62.

Decision:

```text
safe later / not now
```

Useful when checkpoint/restart prompt pressure returns.

## 7. Librarian cluster review

### 7.1 `agent_registry_librarian`

Status: active advisory/manual discipline; route/runtime or automation form is not active.

Decision:

```text
keep current advisory/manual status
```

No registry mutation authority.

### 7.2 `conversation_archive_librarian`

Status: active manual archive discipline; route/runtime form not active.

Decision:

```text
keep current manual status
```

No automation or route activation.

### 7.3 `materials_map_librarian`

Status: container.

Overlap with archive and registry librarians is naming-level, not functional duplicate.

Distinct work:

- registry librarian = agent/status hygiene;
- conversation archive librarian = chat/archive capture discipline;
- materials map librarian = source/material relation map.

Decision:

```text
keep container
```

No proposal until material/source mapping work resumes.

## 8. Style/editor cluster review

Relevant agents:

- `anti_cliche_editor`;
- `banality_alarm_agent`;
- `author_style_memory_agent`;
- `sergey_interaction_profiler`;
- `style_parrot_agent`;
- `scene_forge_agent`;
- `plotnikov_motor_agent`.

Finding:

There is real overlap, but it is mostly layered:

- profiler observes interaction patterns;
- author style memory stores confirmed style decisions;
- anti-cliche editor performs deep cleanup;
- banality alarm gives short warning signals;
- style parrot is a lightweight signal concept and may duplicate banality alarm unless its output remains sharply distinct.

Decision:

```text
book_paused / defer
```

Do not activate style/editor agents while current mode is Agent Shipyard / Agent Queue unless Sergey explicitly resumes book mode.

Specific watch item:

```text
style_parrot_agent should not receive proposal unless its output is demonstrably distinct from banality_alarm_agent.
```

## 9. Source/fact cluster review

Relevant agents:

- `source_intake_auditor`;
- `source_card_builder`;
- `source_conflict_resolver`;
- `source_dosage_guard`;
- `copyright_boundary_guard`;
- `citation_integrity_agent`;
- `fact_risk_checker`;
- `link_verifier_agent`;
- `freshness_checker_agent`.

Finding:

This cluster is coherent but dense. It should not be activated as a bundle.

Decision:

```text
source work only by selected source-card/source-audit mode
```

If source work resumes, the safest sequence is:

1. source intake / fact risk;
2. source card;
3. citation integrity / link verification / freshness;
4. dosage and copyright boundaries.

No current activation.

## 10. Ethics / MLM / health cluster review

Relevant agents:

- `ethical_persuasion_guard`;
- `mlm_reality_checker`;
- `trust_boundary_guard`;
- `offer_integrity_agent`;
- `health_claims_guard`;
- `social_proof_skeptic`;
- `relationship_boundary_agent`;
- `family_safety_guard`.

Finding:

Strong conceptual fit with the book/product vision, but current mode is not book/product mode.

Risk:

Activating them now would restart book/product work indirectly.

Decision:

```text
defer until book/product mode resumes
```

No current Agent Queue activation.

## 11. MVP/product cluster review

Relevant agents:

- `mvp_method_architect`;
- `gameful_path_designer`;
- `novice_route_designer`;
- `mentor_mode_designer`;
- `quest_integrity_guard`;
- `progress_metrics_agent`;
- `developer_ready_architect`;
- `data_privacy_guard`;
- `localization_guard`;
- `partner_product_intake_agent`;
- `monetization_ethics_agent`.

Finding:

This is a future product track, not current Agent Queue hygiene.

Decision:

```text
future_only unless Sergey resumes MVP/product mode
```

No current activation.

## 12. Highest-risk overlaps

| Overlap | Risk | Current decision |
|---|---|---|
| `workflow_conductor_agent` vs `approval_gate_keeper` vs `project_state_synchronizer` | Governance layer becomes too broad too early | Do not activate conductor. Keep as high-risk gate. |
| `style_parrot_agent` vs `banality_alarm_agent` | Duplicate warning agent | Keep `style_parrot_agent` as container only. |
| `agent_registry_librarian` vs registry mutation authority | Advisory layer mistaken for editor/authority | Keep advisory/manual only. |
| `project_state_synchronizer` vs drift audit/state sync rituals | Duplicated state machinery | Do not activate now. |
| source/fact agents as bundle | Dense source subsystem activates at once | Activate only under selected source mode. |

## 13. Queue classification after this pass

### Keep active manual/advisory

- `critic_margin_agent` advisory/manual second-eyes discipline;
- `agent_registry_librarian` advisory/manual registry hygiene discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes pattern;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline.

### Keep proposal / do not activate now

- `workflow_conductor_agent`;
- `approval_gate_keeper`;
- `project_state_synchronizer`;
- `checkpoint_compressor_agent`;
- `source_card_builder`;
- `copyright_boundary_guard`;
- `svod_guard`;
- `contextologist_agent`;
- `sergey_interaction_profiler`;
- `author_style_memory_agent`;
- `banality_alarm_agent`.

### Keep container / no proposal now

- book/style scene agents while book mode is paused;
- source conflict/dosage/fact agents until source mode is selected;
- MVP/product agents until product mode is selected;
- ethics/MLM/health agents until book/product mode resumes.

## 14. Recommendation

Do not activate another agent now.

The next useful move is one of two choices:

1. pause Agent Queue and return to book/product work by explicit Sergey decision;
2. if Agent Queue continues, create a small `registry status overlay` note that explains how manual/advisory activation relates to registry lifecycle statuses.

The second option is safer than activating `workflow_conductor_agent`.

## 15. Do not infer

Do not infer from this pass that:

- registry should be rewritten now;
- proposal statuses are wrong;
- manual/advisory activation equals route/runtime activation;
- `workflow_conductor_agent` should be next;
- book/product work has resumed;
- source/MVP/ethics agents should be activated as bundles;
- status trust matrix became enforcement;
- `agent_registry_librarian` may edit registry automatically.

# Status trust matrix — 2026-05-21

Status: documentation note
Date: 2026-05-21
Mode: documentation-only / no enforcement
Purpose: reduce status confusion after advisory/manual activation of `critic_margin_agent` and `agent_registry_librarian`

## 1. Why this note exists

The project now has several layers that can sound stronger than they are:

- source-of-truth files;
- resume/worklog files;
- manual disciplines;
- proposal agents;
- operations notes;
- audit takeaways;
- future-only ideas.

The risk is not only drift.

The risk is trust confusion: treating a useful note as a roadmap, a proposal as activation, a manual discipline as automation, or an advisory layer as authority.

This matrix defines what each status means and what must not be inferred from it.

## 2. Trust buckets

| Bucket | Meaning | Can guide current work? | Can change behavior by itself? | Examples | Do not infer |
|---|---|---:|---:|---|---|
| `authoritative` | Current source of truth for a specific project state or rule. | yes | only within its declared scope | `knowledge/00_manifest/project-state.json`, `project-state.md`, branch protection checks overview | Do not treat as runtime or universal authority. |
| `resume_anchor` | Used to restart and continue work safely. | yes | no | `current-state.md`, `roadmap.md`, `restart-prompt.md` | Do not treat as independent source of truth if project-state disagrees. |
| `navigation_map` | Helps find the right file or layer. | yes | no | README as entrance map, `documentation_topology.md`, archive index | Do not treat as live roadmap or state. |
| `manual_discipline` | Human/assistant workflow discipline that can be applied manually. | yes | no | `critic_margin_agent` advisory/manual use, `agent_registry_librarian` advisory/manual use, `margin_orchestra`, `bot_reviewer_comments`, `archive_status_indicator` | Do not treat as automation, validator, route, hard guardrail or approval authority. |
| `proposal` | Describes a possible agent, layer or mechanism before activation. | yes, as context | no | `workflow_conductor_agent`, inactive route/runtime forms of agents | Do not treat as implemented or active. |
| `operations_note` | Captures a review, boundary, audit result or decision context. | yes, as reference | no | baseline audit takeaways, old architecture tails review, future ship map review, scripts/core boundary audit result | Do not treat as roadmap, implementation mandate or approval. |
| `advisory_example` | Demonstrates a manual pattern. | yes, as example | no | second-eyes preflight card examples | Do not turn into mandatory form or validator without approval. |
| `future_only` | Valid idea for later, not current direction. | no, unless selected | no | runtime readiness, lifecycle policy layer, workflow conductor activation, mandatory preflight tooling | Do not start implementation without separate Sergey decision. |
| `rejected_for_now` | Not appropriate for current stage or explicitly blocked now. | no | no | blocking drift audit now, v0.5 production-style release, moving/deleting `book/`, premature validators/hard guardrails | Do not reintroduce without new evidence and approval. |
| `implemented_elsewhere` | Old/archive content moved into a stronger artifact. | only through target artifact | no | archive tails closed by focused review | Do not keep treating the old tail as active backlog. |

## 3. Project-specific mapping

### 3.1 Authoritative

Current authoritative state layer:

- `knowledge/00_manifest/project-state.json`;
- `knowledge/00_manifest/project-state.md` as human-readable mirror;
- GitHub `main` for merged repository state;
- required checks documented in `knowledge/07_operations/checks_overview.md`.

Boundary:

- authoritative does not mean runtime;
- authoritative does not mean production framework;
- authoritative does not bypass Sergey approval gates.

### 3.2 Resume anchors

Resume anchors:

- `assistant_codex_worklog/current-state.md`;
- `assistant_codex_worklog/roadmap.md`;
- `assistant_codex_worklog/restart-prompt.md`;
- `assistant_codex_worklog/decision-log.md`.

Boundary:

- these files support continuation;
- if they conflict with current project-state/main, verify and sync rather than guessing.

### 3.3 Navigation maps

Navigation maps:

- README;
- `knowledge/07_operations/documentation_topology.md`;
- `knowledge/08_conversation_archive/index.md`.

Boundary:

- README is entrance map, not live roadmap;
- archive index is navigation, not checkpoint;
- documentation topology is map, not automatic route.

### 3.4 Manual disciplines

Current active manual/advisory disciplines:

- `critic_margin_agent` advisory/manual second-eyes discipline;
- `agent_registry_librarian` advisory/manual registry hygiene discipline;
- `conversation_archive_librarian` manual archive discipline;
- `margin_orchestra` manual second-eyes preflight pattern;
- `archive_status_indicator` manual archive-pressure discipline;
- `bot_reviewer_comments` manual PR review discipline.

Boundary:

- manual discipline is not automation;
- advisory signal is not approval;
- `block`, `needs_approval` or `split_required` language is semantic guidance, not GitHub enforcement;
- manual discipline does not change registry or project-state by itself.

### 3.5 Proposals

Proposal layer includes:

- `workflow_conductor_agent`;
- inactive route/runtime form of `critic_margin_agent`;
- inactive route/runtime or automation form of `agent_registry_librarian`;
- other agent proposals not explicitly activated.

Boundary:

- proposal is not activation;
- activation requires separate explicit decision and state/registry sync if applicable;
- a proposal can inform discussion but cannot be cited as implemented behavior.

### 3.6 Operations notes

Operations notes include:

- `knowledge/07_operations/baseline_audit_takeaways_2026-05-21.md`;
- `knowledge/07_operations/old_architecture_tails_focused_review_2026-05-21.md`;
- `knowledge/07_operations/future_ship_map_review_2026-05-21.md`;
- `knowledge/07_operations/scripts_core_boundary_audit_result_2026-05-21.md`;
- `knowledge/07_operations/readme_documentation_boundary_review_2026-05-21.md`.

Boundary:

- operations notes can guide discussion;
- they do not replace project-state/current-state/roadmap;
- they do not approve runtime, validators, policy layer, branch protection changes or book-mode switch.

### 3.7 Future-only

Current future-only zones:

- lifecycle policy layer;
- future runtime readiness checklist;
- `workflow_conductor_agent` activation;
- mandatory second-eyes tooling;
- blocking drift audit;
- maturity checklist automation;
- Redis/Postgres/P2P runtime/OpenAPI/gRPC/observability stack/broker.

Boundary:

- future-only means useful to remember, not useful to implement now;
- future-only work requires a separate Sergey decision.

### 3.8 Rejected for now

Rejected-for-now examples:

- treating baseline audit as release roadmap;
- treating drift audit as blocking gate now;
- moving/deleting `book/` because book work is paused;
- turning preflight card examples into mandatory forms;
- treating advisory/manual agents as validators or hard guardrails;
- activating `workflow_conductor_agent` by implication.

Boundary:

- rejected for now is not rejected forever;
- it can return only with new evidence, explicit scope and approval.

## 4. Decision rule

When a new artifact appears, classify it before using it:

```text
Is it authoritative, resume anchor, navigation map, manual discipline, proposal, operations note, advisory example, future-only, rejected-for-now, or implemented elsewhere?
```

If unclear, do not act on it as authority.

Use `agent_registry_librarian` manually for agent/status ambiguity.

Use `critic_margin_agent` manually for margin-risk ambiguity.

## 5. What this note does not do

This note does not:

- change project-state;
- change registry status;
- activate agents;
- add tooling;
- add validators;
- add hard guardrails;
- add GitHub Actions;
- change branch protection;
- create a runtime layer;
- create approval authority;
- create a release gate;
- change book workflow.

## 6. Recommended use

Use this matrix during:

- restart;
- state sync;
- archive PRs;
- agent queue selection;
- external audit review;
- deciding whether an idea is current work or future-only.

If an item is misclassified, correct the classification before building on it.

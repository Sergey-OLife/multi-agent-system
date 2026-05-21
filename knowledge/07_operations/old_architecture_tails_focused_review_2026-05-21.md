# Old architecture tails focused review — 2026-05-21

Status: focused review result
Date: 2026-05-21
Scope: old archive tails about repository architecture contract and corrective margin/knowledge-consistency
Mode: documentation-only / no implementation

## 1. Purpose

This review resolves two preserved archive-level tails that were still listed as needing a focused review:

- `2026-05-18_repository-contract-and-main-protection-risks.md`;
- `2026-05-19_corrective-margin-orchestra-and-consistency.md`.

The goal is not to delete the old archive value. The goal is to decide what is already implemented elsewhere, what remains useful, and what should not be treated as current work.

## 2. Preflight boundary

This is a review/index cleanup PR only.

It does not:

- change code;
- change scripts;
- change Go packages;
- change workflows;
- change branch protection;
- add required checks;
- add validators;
- add hard guardrails;
- add runtime behavior;
- activate agents;
- route agents;
- change book workflow;
- replace project-state/current-state/roadmap.

## 3. Review table

| Tail | Original concern | Current status | Decision | Why |
|---|---|---|---|---|
| Repository contract / README | Need top-level README and repository architecture contract | Implemented elsewhere | Close for current navigation | README and `knowledge/07_operations/repository_architecture_contract.md` now define the repository identity, source-of-truth map, Go/TS/scripts boundaries, CI boundary and future runtime boundary. |
| Main protection | `main` is source of truth but may be unprotected | Implemented elsewhere | Close for current navigation | Minimal repository branch protection and required check contexts are now documented through branch-protection verification and checks overview. Further strengthening remains a separate decision, not this tail. |
| Scripts as second core | `scripts/` may become hidden core | Implemented elsewhere | Close for current navigation | `scripts_core_boundary_audit_result_2026-05-21.md` records that current scripts remain edge automation / CI helpers, with a boundary note for `run-registry-sync.mjs`. |
| Source-of-truth drift | State, registry, worklog, CI, Go-core and protocols may drift | Partly implemented elsewhere | Preserve as general discipline, not as this old tail | Restart protocol, project-state/current-state/roadmap, state-sync drift audit and README boundary now cover the practical current layer. Full transaction safety or database state is future-only. |
| Label-triggered registry sync | Manual registry sync could be improved | Not current priority | Defer unless selected | This is a possible workflow improvement, but not a required next action after current architecture stabilization. |
| Knowledge/protocol consistency audit | Protocols may become folklore | Still useful, but not immediate | Keep as future candidate | The signal is valid, but current project state does not approve a validator or audit script here. It can return later as a narrow knowledge-consistency review. |
| Archive coverage semantics | Thematic archive can be mistaken for full-chat checkpoint | Implemented elsewhere | Close for current navigation | Explicit coverage-scope discipline and archive-status protocol now cover the failure pattern. |
| Conversation archive librarian | Need archive discipline owner | Implemented elsewhere | Close for current navigation | `conversation_archive_librarian` is active as manual archive discipline for archive commands and archive PR decisions. |
| Critic / margin second-eyes | Need a second-pair-of-eyes layer | Implemented as manual discipline | Close this tail, move remaining ambiguity to agent queue if selected | `critic_margin_agent` and `margin_orchestra` are active as manual preflight disciplines, but not routes, validators, hard guardrails or runtime. Remaining issue is status clarification, not this archive tail. |
| Margin orchestra relationship | Orchestra must not become separate authority | Implemented elsewhere | Close for current navigation | README, margin orchestra docs and protocol addendum now state that the orchestra is a manual pattern, not runtime, committee, validator or approval authority. |
| Checkpoint delta sync | Checkpoint should not blindly regenerate everything | Mostly implemented by practice | Preserve as working discipline, not immediate PR | Current checkpoint/state-sync practice records deltas. No separate tool is approved now. |
| Future bugs / knowledge consistency | Project risk is source-of-truth drift | Partly implemented elsewhere | Keep as future-only candidate | Useful idea, but a validator/check would require separate decision. |

## 4. Result

Both old archive tails can be removed from the current active archive-level open loops.

They should not be deleted. They should be marked as `implemented_elsewhere` in the archive index with concrete references.

Remaining value moves into narrower, clearer future choices:

1. select one agent from the queue;
2. optionally clarify second-eyes status before agent activation;
3. consider a future knowledge-consistency review only by separate selection;
4. consider future runtime readiness only by separate decision;
5. consider lifecycle policy layer only by separate decision.

## 5. Recommended next step after merge

After this review is merged, the next selected direction can proceed to Agent Queue.

The most coherent first candidate is the second-eyes cluster:

- clarify `critic_margin_agent` status as proposal vs active manual discipline;
- keep `margin_orchestra` as manual pattern;
- keep `workflow_conductor_agent` separate from the second-eyes cluster;
- do not activate route/runtime behavior without a separate approval gate.

## 6. Do not infer

Do not infer from this review that:

- old archive entries are trash;
- future runtime readiness is approved;
- lifecycle policy layer is approved;
- knowledge-consistency validator is approved;
- `critic_margin_agent` is routed;
- `workflow_conductor_agent` is activated;
- manual second-eyes discipline is automation.

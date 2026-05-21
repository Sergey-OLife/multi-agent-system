# Baseline audit takeaways — 2026-05-21

Status: external-audit takeaway note
Date: 2026-05-21
Source files: `Аудит 2105_1556.txt`, `Pelease plan_2105.txt`
Mode: documentation-only / no implementation

## 1. Purpose

This note preserves the useful part of the external baseline/release audit without turning the audit into an automatic roadmap.

The audit saw a real maturity shift: the project is no longer held only by honest wording. Some key project words now have code, tests, protocols, checks and operations notes around them.

The useful conclusion is not “build runtime now”.

The useful conclusion is:

```text
The project needs trust in confirmed invariants before it adds more infrastructure.
```

## 2. What to keep from the audit

### 2.1 Lifecycle words became types

Keep this as a baseline fact.

`lifecycle contracts v1` means lifecycle terms are no longer only literary labels. They are represented as a minimal contract vocabulary with tests.

Boundary: do not expand lifecycle contracts toward policy layer, route automation, validators, CI enforcement or hard guardrails without separate approval.

### 2.2 Drift audit is observability, not enforcement

Keep the audit’s warning: warning-only drift checks expose a known vulnerability.

But do not immediately convert the drift audit into a blocking gate.

Current interpretation:

- drift audit is an observability layer;
- it is not a required check;
- it is not a validator;
- it is not a hard guardrail;
- promotion to blocking behavior would require separate decision after repeated drift pressure.

### 2.3 Documentation topology should change intentionally

Keep the signal that documentation topology can drift.

Current interpretation:

- README is entrance map, not live roadmap;
- topology changes should be intentional;
- new documents should have clear ownership and reason;
- documentation freeze windows are not adopted as a ritual.

### 2.4 Scripts became operational diagnostics, not second core

Keep the refined version of the audit’s signal.

Correct wording:

```text
Scripts include operational diagnostics, but they remain edge automation / CI helpers, not a second core.
```

### 2.5 Worklog is continuity layer, not source of truth

Keep the useful signal, but avoid the “second brain” framing as doctrine.

Correct wording:

```text
worklog = continuity layer
main = source of truth
restart = bridge
```

### 2.6 Main risk changed

The strongest audit takeaway:

```text
Code can protect discipline, but code can also suffocate flexibility.
```

This is now the key caution for Agent Shipyard development.

## 3. What not to keep as current action

### 3.1 Do not delete `book/` from main

The book is paused, not abandoned.

Removing `book/` would falsely signal that the project is now infrastructure-only.

### 3.2 Do not make drift audit blocking now

Blocking drift audit is premature hardening at the current maturity stage.

It may become useful later, but only after repeated drift pressure and a separate approval decision.

### 3.3 Do not turn maturity checklist automation into immediate work

Maturity checklist automation is a future candidate, not current work.

A premature script may check rituals rather than real invariants.

### 3.4 Do not treat `v0.5 Baseline` as production release

The baseline idea is useful only if framed as semantic stabilization, not runtime/product release.

Correct framing:

```text
semantic stabilization milestone
```

Not:

```text
production baseline
runtime release
hardening sprint
```

## 4. Useful future options

These remain possible future choices, not approvals:

1. semantic baseline note / milestone;
2. non-blocking baseline checklist;
3. later drift-gate proposal if drift recurs;
4. later maturity-check script if checklist semantics stabilize;
5. later lifecycle v2 proposal only if v1 proves insufficient.

## 5. Current recommendation

Do not start with runtime readiness, policy layer, hard guardrails or release engineering.

The next useful project movement remains operational semantics:

- reduce ambiguity;
- clarify lifecycle/status boundaries;
- preserve flexibility;
- avoid turning every diagnostic into enforcement;
- choose Agent Queue work explicitly.

## 6. Boundary

This note does not:

- approve a v0.5 release;
- create release gates;
- change CI;
- change branch protection;
- make drift audit blocking;
- automate maturity checklist;
- delete or move `book/`;
- add runtime behavior;
- add validators;
- add hard guardrails;
- add lifecycle policy layer;
- activate agents.

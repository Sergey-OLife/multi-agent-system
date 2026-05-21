# Scripts/core boundary audit result — 2026-05-21

Status: audit result note
Date: 2026-05-21
Scope: read-only scripts/core boundary audit
Related scope: `knowledge/07_operations/scripts_core_boundary_audit_scope.md`

## 1. Audit question

This note records the first read-only answer to the narrow audit question:

Do repository scripts remain edge automation around the project, or do they contain project-core decisions that should be documented, moved, mirrored, or explicitly accepted?

## 2. Method

The audit inspected the current scripts/core boundary without changing code, workflows, branch protection, project state, runtime behavior, validators, hard guardrails, or registry semantics.

Reviewed areas:

- `scripts/state-sync-drift-audit.mjs`;
- `scripts/run-sync-check.mjs`;
- `scripts/check-boundaries.mjs`;
- `scripts/hygiene-audit.mjs`;
- `scripts/archive-audit.mjs`;
- `scripts/run-registry-sync.mjs`;
- `package.json` script commands;
- `.github/workflows/ci.yml`;
- `.github/workflows/sync-check.yml`;
- `go-core/lifecycle/`;
- adjacent operations notes documenting checks and drift-audit behavior.

## 3. Result table

| File | Role | Boundary status | Risk | Recommended next step |
|---|---|---|---|---|
| `scripts/state-sync-drift-audit.mjs` | Local warning-only state-sync drift diagnostic | `already_ok` | Low | Leave as is. It is warning-only, prints non-blocking output, and does not mutate state. |
| `scripts/run-sync-check.mjs` | JavaScript wrapper around Go-core `sync-check` / `registry-check` | `already_ok` | Low-medium | Leave as is. It builds an envelope and delegates to Go-core; unavailable transport is not treated as fake-ready validation. |
| `scripts/check-boundaries.mjs` | TypeScript import-boundary checker | `already_ok` | Low | Leave as is. It enforces technical import boundaries, not lifecycle status, approval, or route decisions. |
| `scripts/hygiene-audit.mjs` | Repository hygiene audit | `already_ok` | Low | Leave as is. It reports tracked junk, raw-source risks, and branch cleanup candidates; it does not delete branches or bypass PR workflow. |
| `scripts/archive-audit.mjs` | Conversation archive structure audit | `already_ok` | Low | Leave as is. It checks archive structure, size, review dates, and index presence; it is not project-state or checkpoint logic. |
| `scripts/run-registry-sync.mjs` | Wrapper for Go registry sync command | `document_boundary` | Medium | Add or keep an explicit boundary note: this wrapper delegates to Go and must not be treated as agent activation, approval, routing, or automatic registry authority. |
| `package.json` script commands | Command map for tests, audits, sync check and registry sync | `already_ok` | Low | Leave as is. Command registration alone does not create authority or a second core. |
| `.github/workflows/ci.yml` | Repository CI job | `already_ok` | Low | Leave as is. It runs existing typechecks, tests, Go tests, hygiene audit, and archive audit; it is repository-level CI, not runtime or agent governance. |
| `.github/workflows/sync-check.yml` | Sync Check workflow | `already_ok` | Low | Leave as is. It builds Go-core and runs `npm run sync-check`; it does not create route automation or runtime behavior. |
| `go-core/lifecycle/` | Pure lifecycle contract vocabulary with unit tests | `already_ok` | Low | Leave as is. It is explicit contract vocabulary, not workflow enforcement, not CI policy layer, not route automation, and not hard guardrail. |

## 4. Main conclusion

Conclusion: `documentation-only follow-up`.

The inspected scripts currently remain edge automation / CI helpers around the project. They do not appear to function as a second project core beside Go-core.

The only item that deserves clearer documentation is `scripts/run-registry-sync.mjs`, because it is short, operationally powerful by association, and connected to registry maintenance. The risk is not current behavior but future over-reading: someone could later treat the wrapper as authority for registry changes unless its boundary is explicit.

## 5. Boundary for `scripts/run-registry-sync.mjs`

`scripts/run-registry-sync.mjs` is a wrapper around the Go registry sync command.

It may help execute registry synchronization work when that work is already selected and handled through the normal PR workflow.

It must not be treated as:

- agent activation;
- route change;
- approval gate;
- approval bypass;
- registry authority by itself;
- automatic source of truth update;
- validator;
- hard guardrail;
- runtime behavior;
- branch protection;
- policy engine.

Any registry-changing result still requires normal review, expected-file inspection, checks, reviewer/bot comment classification, and Sergey approval when the change crosses an approval gate.

## 6. What this result does not do

This audit result does not:

- change scripts;
- change Go packages;
- change GitHub Actions;
- add required checks;
- add validators;
- add hard guardrails;
- change branch protection;
- implement runtime behavior;
- create state-sync automation;
- approve lifecycle policy layer;
- restructure the repository;
- change book workflow.

## 7. Recommended next step

No implementation PR is needed from this audit.

After this note is merged, the next selected work can move to `Карта будущего корабля` review.

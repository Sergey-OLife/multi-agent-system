# Future ship map review — 2026-05-21

Status: review result note
Date: 2026-05-21
Scope: full classification of the external "future ship" assessment
Mode: read-only review result / documentation only

## 1. Purpose

This note classifies the full external assessment into operational buckets so the project does not treat a vivid audit as an automatic build mandate.

The review uses the current repository state after:

- lifecycle contracts v1 implementation;
- bot reviewer comments protocol registration;
- scripts/core boundary audit result.

## 2. Classification buckets

The `Classification` column uses only these declared bucket values.

Nuance such as watchfulness, partial coverage, or future pressure belongs in `Current reading` or `Next handling`, not in the classification value.

| Bucket | Meaning |
|---|---|
| `already_fixed` | The concern is already covered by current main or recent notes. |
| `useful_now` | The concern is real and can guide a small near-term documentation or review step. |
| `true_but_future` | The concern is valid only if the project moves toward runtime/framework mode. |
| `not_appropriate_current` | The criticism is not appropriate for the current GitHub-centered project OS mode. |
| `reframe` | The point contains a useful signal, but the original framing is too strong, stale, or misleading. |

## 3. Full classification

| # | External assessment point | Classification | Current reading | Next handling |
|---:|---|---|---|---|
| 1 | GitHub as source of truth is not atomicity-safe. | `already_fixed` | Correct risk. Current mitigation exists through state-sync discipline, restart from GitHub main, and warning-only drift audit. It is not transaction-safe and should not be described as such. | Keep manual state-sync discipline and warning-only drift audit; do not build database state now. |
| 2 | Manual discipline is not automation, but workflow relies on it. | `already_fixed` | Correct. Project now repeatedly states manual disciplines are not validators, hard guardrails, routes, or approval bypasses. This remains a watch item for future wording. | Continue enforcing this in wording and PR review. |
| 3 | Scripts may have become a second core. | `already_fixed` | A read-only scripts/core boundary audit now records scripts as edge automation / CI helpers, with a boundary note for `run-registry-sync.mjs`. | No code change. Keep the audit result as the boundary record. |
| 4 | Coordinator-centered runtime future conflicts with GitHub-centered present. | `true_but_future` | Valid only if the project moves toward runtime mode. Current mode is GitHub-centered book/project OS. | Do not resolve now. Keep as future runtime readiness topic. |
| 5 | README is no longer only a map; it risks becoming an operating manual. | `useful_now` | Useful signal. The project should keep README navigational and avoid letting it absorb every protocol detail. | Future small documentation topology / README-boundary review may be useful. Not this PR. |
| 6 | State sync after merge is a Damocles sword. | `already_fixed` | Real risk. Already partially addressed by drift detector proposal, local warning-only script, tests, and recent state-sync practice. | Keep warning-only. Do not make it blocking without separate decision. |
| 7 | Archive index conflict may create merge friction. | `reframe` | Real operational friction, but not proven as urgent. Conservative archive index cleanup already exists. Append-only design may be considered later. | Defer; do not restructure archive now. |
| 8 | Lifecycle words are semantic traps. | `already_fixed` | Partly stale as a criticism: lifecycle contracts v1 now exists in `go-core/lifecycle/`. The remaining future pressure is policy layer, not the basic vocabulary. | Do not implement policy layer without separate decision. |
| 9 | "Do not confuse" warnings reveal likely failure points. | `already_fixed` | Correct. The project now uses repeated boundary language because these confusions are high-risk. | Keep boundary language precise; avoid making warnings sound like automation. |
| 10 | Next useful work is backlog without priority. | `useful_now` | Mostly correct. The project should keep selecting one safe next action instead of carrying many equal priorities. | Continue explicit next-action selection. |
| 11 | Go-core is not the whole core; it is formal contract vocabulary. | `reframe` | Good signal, but do not rename `go-core`. It currently hosts deterministic checks and contract vocabulary; the name is acceptable if boundaries are clear. | Keep name. Clarify role when needed. |
| 12 | `assistant_codex_worklog` is a second brain and drift-prone. | `already_fixed` | Correct by design. Worklog is the recovery layer, but GitHub main remains source of truth. | Continue restart protocol and state sync. |
| 13 | `knowledge/` can act as a second source of truth. | `reframe` | It is not separate from GitHub; it is the documented state layer inside GitHub main. Drift risk exists between files, not between GitHub and knowledge as separate systems. | Maintain project-state mirrors and sync checks. |
| 14 | Tests can become stale and falsely reassuring. | `useful_now` | Generally true. Current CI and Go tests are active, but stale assertions remain a recurring risk in any fast-changing project. | Treat test updates as part of future implementation PRs; no standalone broad test rewrite now. |
| 15 | Workflows are the only hard guardrail. | `already_fixed` | Correct. Minimal branch protection requires PRs and required checks. Manual disciplines remain non-hard. | Keep this distinction explicit. |
| 16 | Four TypeScript configs may indicate complexity growth. | `not_appropriate_current` | Config split was an intentional build/test boundary decision. Not a defect by itself. | No action. |
| 17 | TypeScript layer moves faster than Go-core. | `reframe` | This can be healthy: scripts and TS wrappers are expected to move faster than contract vocabulary. | Watch scripts/core boundary, already audited. |
| 18 | Many branches and no releases mean no frozen version. | `true_but_future` | Branch hygiene is a current operational matter, but releases/tags are not required while the repo is internal project OS. | Branch cleanup only through safe UI/tool. Release discipline only if external reuse becomes real. |
| 19 | Scripts are more active than Go-core. | `already_fixed` | Recent scripts/core audit answered the direct risk: current scripts remain edge automation / CI helpers. | No implementation from this point. |
| 20 | Archive index is a conflicting resource. | `reframe` | It can conflict, but current protocol already treats archive/index handling conservatively. Append-only may be a future design, not immediate fix. | Defer. |
| 21 | Main should always be synchronized with state. | `already_fixed` | The project cannot guarantee atomicity, but it has explicit state-sync and restart discipline. | Keep using state-sync PRs after state-sensitive merges. |
| 22 | Manual discipline is expected but not enforced. | `already_fixed` | True and intentional. Manual discipline is not enforcement. Reviewer/bot comments protocol now strengthens manual checking without turning it into automation. | Do not oversell it. |
| 23 | Agents should not mutate state directly. | `not_appropriate_current` | In current GitHub-centered mode, changes happen through PRs. Future runtime constraints are separate. | Do not design runtime mutation model now. |
| 24 | README as map is overloaded. | `useful_now` | This is the clearest remaining documentation pressure. README should stay entry map, with detailed protocols living in linked files. | Consider a future README/documentation topology boundary review. |
| 25 | CI protects main; if CI fails, main is exposed. | `already_fixed` | Minimal branch protection now requires PR and checks. This is repository protection, not production security. | Keep checks green and exact contexts documented. |
| 26 | Rename `go-core` to `go-contracts`. | `not_appropriate_current` | Too disruptive and unnecessary. The role can be clarified without renaming. | No action. |
| 27 | Delete README and replace it with index links. | `not_appropriate_current` | Do not delete README. The useful signal is to keep README as entrance map and move detail outward. | Consider future README-boundary cleanup, not deletion. |
| 28 | Add `state-sync-required` label. | `true_but_future` | Potentially useful, but would add GitHub label/process mechanics. Current warning-only drift audit is safer and already implemented. | Defer. Discuss only if drift recurs. |
| 29 | Make archive index append-only. | `true_but_future` | Could reduce conflicts, but may also degrade navigation quality. Needs design before implementation. | Defer. |
| 30 | Add panic-based Go invariants. | `not_appropriate_current` | Too strong for current maturity. Current accepted path is pure types/tests without panic or enforcement. | Reject for now. No panic invariants. |
| 31 | Convert lifecycle words into types. | `already_fixed` | Lifecycle contracts v1 already exists as pure Go vocabulary with tests. Full policy layer remains future-only. | Do not reopen as broad implementation. |
| 32 | Add policy layer above lifecycle contracts. | `true_but_future` | Conceptually useful later, but it would move toward enforcement/approval logic and needs separate decision. | Defer until Sergey explicitly approves policy layer exploration. |
| 33 | Entity-to-stage matrix is needed. | `already_fixed` | Lifecycle v1 currently uses allowed/forbidden entity-stage pairs for selected entity types. A broader PR/entity policy matrix is future work. | Do not expand without separate approval. |
| 34 | External audit has weak proof unless checked against current main. | `already_fixed` | This review rechecks the audit against current main and recent notes instead of accepting it as fact. | Keep this method for future external audits. |

## 4. Short conclusion

The external assessment was directionally useful but too dramatic in several claims.

The main crack it identified is real:

> The project relies on honest naming and disciplined handoff, while only part of that discipline is encoded as deterministic checks.

However, several recommended fixes are either already done, too strong for the current maturity, or belong to a future runtime/framework mode.

The current repository does not need another implementation push right now. It needs to preserve current boundaries and avoid turning every vivid diagnosis into code.

## 5. One next PR

This PR is the one next PR: record the full classification as an operations note.

After this PR is merged, no additional immediate implementation PR follows from the future ship review.

Next work should be chosen explicitly from current project priorities. If Sergey wants a practical continuation, the safest next discussion is a narrow README/documentation-topology boundary review, not runtime, not policy layer, not hard guardrails.

## 6. Boundary

This note does not:

- implement code;
- change Go packages;
- change scripts;
- change workflows;
- add GitHub labels;
- add required checks;
- add validators;
- add hard guardrails;
- add policy layer;
- change branch protection;
- change runtime behavior;
- change book workflow;
- rename `go-core`;
- restructure README or archive index.

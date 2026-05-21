# State sync drift audit — local test results

Date: 2026-05-21
Status: test results note
Related implementation: PR #208 — Implement local state sync drift audit
Related state sync: PR #209 — Sync state after local drift audit script
Tool: `scripts/state-sync-drift-audit.mjs`
Command: `npm run state-sync:drift-audit`

## Boundary

This note records manual/logic-level representative tests for the local warning-only state-sync drift audit script.

It does not change the script, CI, GitHub Actions, required checks, branch protection, validators, hard guardrails, runtime, routes, observability, release process, or production security tooling.

The script remains implementation but not enforcement.

## Expected behavior under test

The tool should:

- identify state-sensitive changed-file sets;
- warn when state-sensitive changes appear without expected state/resume sync files;
- return `0` for warnings;
- return `2` for input errors;
- print `blocking: false` in output;
- stay local/manual and out of CI.

## Representative test matrix

| Case | Input | Expected status | Expected exit | Result |
|---|---|---:|---:|---|
| normal source change | `src/example.ts` | `not_applicable` | `0` | pass |
| README only | `README.md` | `warn` | `0` | pass |
| operations note only | `knowledge/07_operations/example.md` | `warn` | `0` | pass |
| project-state JSON only | `knowledge/00_manifest/project-state.json` | `warn` | `0` | pass |
| project-state pair | `knowledge/00_manifest/project-state.json`, `knowledge/00_manifest/project-state.md` | `pass` | `0` | pass |
| restart prompt only | `assistant_codex_worklog/restart-prompt.md` | `warn` | `0` | pass |
| full state sync set | `assistant_codex_worklog/current-state.md`, `assistant_codex_worklog/roadmap.md`, `assistant_codex_worklog/restart-prompt.md`, `knowledge/00_manifest/project-state.json`, `knowledge/00_manifest/project-state.md` | `pass` | `0` | pass |
| stdin mode | `README.md`, `knowledge/07_operations/foo.md` | `warn` | `0` | pass |
| unknown argument | `--unknown` | input error | `2` | pass |
| no input | empty args | input error | `2` | pass |

## Observations

- The warning cases stay non-blocking because expected warning exit code is `0`.
- Input misuse is separated from diagnostic warning because expected input error exit code is `2`.
- The state pair case avoids a false warning when `project-state.json` and `project-state.md` are updated together.
- The full state sync set is recognized as structurally safe.
- The tool checks structural drift only. It does not verify semantic correctness of the state content.

## Current conclusion

The first local drift audit script behaves as intended for the representative changed-file patterns.

It is useful as a manual diagnostic instrument.

It should remain out of CI unless Sergey separately approves a later CI-visible warning stage.

## Next steps

1. Keep using the tool manually when state-sensitive files are touched.
2. Do not turn it into a required check without separate approval.
3. If false positives appear in real work, tune the rule set before discussing CI-visible warning.
4. Separately decide whether to formalize the archive status indicator and `yellow_3` threshold in a protocol addendum.

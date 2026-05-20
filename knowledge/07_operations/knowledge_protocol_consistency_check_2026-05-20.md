# Knowledge / protocol consistency check — 2026-05-20

Status: diagnostic check only. This file does not implement validators, runtime, branch protection, routes, agent activation, or book work.

## Scope

Check whether current orientation docs agree after PR #183 and PR #184.

Checked surfaces:

- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `README.md`
- `knowledge/07_operations/maturity_checklist.md`
- `knowledge/07_operations/knowledge_consistency_protocol.md`

## Result

Overall status: pass with one intentional focus adjustment.

No evidence found that current state, roadmap and restart files point to different versions. Main currently records v2.40, PR #183 as the latest meaningful merged PR, and maturity checklist as diagnostic map only.

The next operational focus should exclude Book Fast Track for now per Sergey instruction. Book remains paused; this is a priority adjustment, not book work.

## Confirmed boundaries

- GitHub main remains source of truth.
- Book work remains paused.
- Current mode remains Agent Shipyard / Agent Queue.
- Maturity checklist is diagnostic map only.
- README is an entrance map, not a dumping ground.
- Future runtime hypotheses are not implementation.
- `critic_margin_agent` remains manual preflight discipline only.
- `conversation_archive_librarian` remains not activated.
- `margin_orchestra` remains design-only.
- Branch protection remains not configured until verified.

## Drift risks still open

- Knowledge / protocol consistency is still manual, not validator-backed.
- Branch protection is still unverified / not configured.
- `conversation_archive_librarian` has mechanics but is not active.
- `margin_orchestra` is still design-only.
- Runtime maturity topics remain not applicable until runtime exists.

## Follow-up recommendation

Next useful work should be one of:

1. controlled activation for `conversation_archive_librarian` manual discipline;
2. hardening `margin_orchestra` into protocol / tooling;
3. branch protection verification;
4. deeper knowledge/protocol consistency automation proposal.

Book Fast Track should not be offered as the next path until Sergey separately resumes it.

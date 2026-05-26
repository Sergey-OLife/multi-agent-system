# GitHub-centered current-state audit — 2026-05-26

Status: external audit / operations note.
Boundary: documentation-only; not project-state, not roadmap, not implementation mandate, no runtime, validator, hard guardrail, CI gate, branch-protection or agent activation change.

Scope: current project mode as GitHub-centered internal project OS.
Out of scope: production runtime framework readiness, infra stack completeness, hard-gate expansion without demonstrated recurring failure.

## Stage verdict

- Project is operating in its declared mode: GitHub-centered project/book operating system, not production runtime.
- Boundary language is unusually explicit and mostly consistent across README, project-state, and operations docs.
- Main risks are not missing infrastructure; they are ambiguity drift, layer confusion, and accidental over-hardening.

## Findings (strict current-stage framing)

### 1) Mode declaration is explicit and consistent
1. **Finding**: The repository clearly declares itself as GitHub-centered operating system and explicitly rejects runtime/platform interpretation.
2. **Evidence**: README sections "What this project is not" and "Architecture in one page"; project-state active decisions.
3. **Current classification**: `implemented`.
4. **Risk if ignored**: Future contributors may still import runtime assumptions from external audits.
5. **Recommended action**: Keep a short "audit mode" header in future audits: current-state vs runtime-readiness.
6. **Do not infer**: This does not approve runtime backlog execution.

### 2) Source-of-truth hierarchy is documented, but restart paths remain multi-file fragile
1. **Finding**: Source hierarchy is explicit (GitHub main + project-state), but restart depends on many files and can drift semantically.
2. **Evidence**: README "Start here" and "Current workflow"; project-state resume order; documentation topology authority layers.
3. **Current classification**: `implemented` + `manual discipline`.
4. **Risk if ignored**: Mis-prioritized resume order can recreate stale intent or overtrust continuity notes.
5. **Recommended action**: Add a compact "authoritative vs continuity" matrix snippet to restart-prompt (no validator needed).
6. **Do not infer**: This is not evidence for new CI gate/validator.

### 3) Manual discipline is honestly labeled; that is maturity, not weakness
1. **Finding**: Manual layers are repeatedly and correctly marked as manual/non-automated.
2. **Evidence**: README manual discipline clauses; checks_overview manual layer table; project-state paused tasks.
3. **Current classification**: `implemented`.
4. **Risk if ignored**: Reviewers may still narrate manual layers as if enforced.
5. **Recommended action**: Keep strict wording template in PR descriptions: "manual protocol, non-blocking, non-validator".
6. **Do not infer**: No need to auto-promote manual controls.

### 4) Warning-only advisory checks are currently stage-appropriate
1. **Finding**: Advisory checks (archive structure/state drift) are intentionally warning-only and align with current flexibility needs.
2. **Evidence**: checks_overview blocking/advisory/manual split; project-state active decisions and paused tasks.
3. **Current classification**: `implemented`.
4. **Risk if ignored**: Over-eager promotion to blocking can freeze exploration and increase ritual overhead.
5. **Recommended action**: Retain warning-only status; track recurring failure count in notes before any promotion proposal.
6. **Do not infer**: This is not a rejection of all future enforcement forever.

### 5) README is functioning as entrance map but nearing density threshold
1. **Finding**: README still maps entry/boundary well, but now bundles entrance map + workflow + lifecycle + archive + second-eyes semantics in one layer.
2. **Evidence**: README "Start here", "Current workflow", "Architecture", "Second-eyes", "Lifecycle words", "Merge discipline".
3. **Current classification**: `implemented` with `drift risk`.
4. **Risk if ignored**: Status phrases become hard to maintain and easier to contradict in deeper docs.
5. **Recommended action**: Reframe only—keep README headlines; move extended lifecycle examples to a linked protocol note.
6. **Do not infer**: Not a request to shrink README aggressively or delete book context.

### 6) Script/core boundary: no proof of "scripts as second core" yet
1. **Finding**: Current evidence supports scripts as edge diagnostics/check wrappers, not policy authority.
2. **Evidence**: checks_overview describes advisory checks; README states scripts are edge automation; no documented script authority to mutate accepted state.
3. **Current classification**: `implemented` boundary + `watch item`.
4. **Risk if ignored**: Narrative claims about "second core" could trigger premature refactors.
5. **Recommended action**: Keep function-based audit rule: only escalate if scripts start deciding merge/state semantics.
6. **Do not infer**: Commit frequency in scripts is not architecture proof.

### 7) Lifecycle vocabulary is strong enough for current phase
1. **Finding**: Lifecycle terms (proposal/mechanics/manual/routed/validator/hard guardrail) are defined and repeatedly reinforced.
2. **Evidence**: README "Lifecycle words"; project-state paused tasks and active decisions.
3. **Current classification**: `implemented`.
4. **Risk if ignored**: Contributors can still misread "mechanics" as activation.
5. **Recommended action**: Keep "open PR != implemented" and "proposal != activation" check in human PR review template.
6. **Do not infer**: No evidence yet requiring lifecycle policy engine.

### 8) Biggest real risk is status confusion, not missing infra
1. **Finding**: Repeated safeguards target confusion classes (open PR == implemented, archive == state, manual == validator).
2. **Evidence**: README "Do not confuse"; project-state paused tasks and decisions; documentation_topology authority table.
3. **Current classification**: `implemented` + `manual discipline`.
4. **Risk if ignored**: Historical notes and candidate materials may leak into accepted-state claims.
5. **Recommended action**: Keep monthly lightweight "status language sweep" (documentation-only PR).
6. **Do not infer**: This is not release hardening.

## 50-question checkpoint matrix (condensed)

### A. Mode and evaluation basis (Q1–Q3)
- Q1: Declared mode = GitHub-centered internal project OS (`implemented`).
- Q2: This audit evaluates current goal, not production ideal.
- Q3: README has clear plain-language problem statement (`implemented`).

### B. Source of truth and restart consistency (Q4–Q9)
- Q4: Primary SoT = GitHub main + project-state JSON; README is contract/navigation.
- Q5: No direct conflict found, but multi-file restart increases semantic drift risk (`manual discipline`).
- Q6: Authoritative = README + project-state + explicit operations docs; continuity = worklog/archive/vision.
- Q7: Worklog-as-second-brain risk exists if resume order skipped (`manual discipline risk`).
- Q8: README density high; some sections should be linked-out details (`reframe`).
- Q9: README currently acts as entrance map plus partial operating card.

### C. Manual vs automation boundaries (Q10–Q15)
- Q10: Manual-not-automation is explicitly stated in multiple core docs (`implemented`).
- Q11: No hard proof manual layer is treated as hard guardrail in code.
- Q12: Proposal/active confusion risk remains for registry entities (`watch`).
- Q13: Manual discipline can be misread as validator by new contributors (`watch`).
- Q14: Archive/checkpoint confusion explicitly documented as risk (`implemented mitigation`).
- Q15: "Open PR = implemented" risk explicitly called out (`implemented mitigation`).

### D. Lifecycle, enforcement, drift (Q16–Q25)
- Q16: Lifecycle words are codified textually; not machine-enforced by design.
- Q17: Lifecycle v1 is sufficient for stage; policy-layer push would be premature (`reject-for-now`).
- Q18: No demonstrated recurring forbidden transitions in evidence reviewed.
- Q19: Observability > enforcement at this stage (`keep now`).
- Q20: Drift audit should remain warning-only unless recurring measurable failure appears (`keep now`).
- Q21: Existing docs cite confusion incidents; fewer proven repeated state-corruption incidents.
- Q22: CI checks core repo checks + sync-check invariants subset (`implemented`).
- Q23: Hard gates are limited/repo-level; many controls advisory/manual (`implemented`).
- Q24: Branch protection is repo-flow control, not production security (`implemented framing`).
- Q25: False-confidence risk exists if CI interpreted as full-system guarantee (`watch`).

### E. Scripts/core boundaries (Q26–Q30)
- Q26: Scripts mainly edge automation in present docs (`keep now`).
- Q27: No concrete evidence of hidden project-authority logic in scripts from reviewed docs.
- Q28: Commit frequency is not accepted as architecture evidence in this audit.
- Q29: Go-core positioned as deterministic spine/contract layer, not runtime coordinator.
- Q30: No hard conflict proven; boundary tension is documented and monitored (`watch`).

### F. Tests/docs/roadmap semantics (Q31–Q40)
- Q31: Negative-case coverage not fully demonstrated in docs; treat as observability gap, not gate trigger (`reframe`).
- Q32: Some docs intentionally run ahead as protocol clarity artifacts.
- Q33: Behavior can outpace docs in fast mode switches/queue practice (`manual sync risk`).
- Q34: Several operations notes can be mistaken for roadmap if not status-tagged (`watch`).
- Q35: External recommendations already partly reclassified future-only/rejected-for-now in state docs.
- Q36: Any validator/gate promotion requires separate Sergey approval.
- Q37: Runtime/gate suggestions would change project mode if mixed into current audit (`reject-for-now`).
- Q38: This audit avoids "automate everything" substitution.
- Q39: Automation helps for repeatable syntax checks; harms when used to freeze evolving semantics.
- Q40: Keep manual for second-eyes, source reading, mode-boundary judgment (`keep now`).

### G. Agent Queue and sequencing (Q41–Q50)
- Q41: Potential overlap exists among advisory coordination roles; no urgent defect proven.
- Q42: Best next candidate should target one repeatable operation + one output + one bounded risk.
- Q43: `workflow_conductor_agent` is the primary overbreadth risk if treated as natural escalation.
- Q44: In several cases note/pattern/manual card is enough; no new agent required.
- Q45: Risk of accidental conductor-authority inflation is real (`watch item`).
- Q46: Given declared mode, Agent Shipyard still priority; paused book is not defect (`keep now`).
- Q47: Runtime-readiness audit must remain explicitly separate (`keep now`).
- Q48: "Baseline release" currently should mean semantic checkpoint only, not production release (`reframe`).
- Q49: Watch items: README density, status language drift, conductor scope creep, continuity-layer overreach.
- Q50: One small PR with max clarity: add a compact "authoritative vs continuity layers" quick-reference card and link it from restart-prompt.

## Recommendation classifications summary

- **Keep now**: warning-only advisory checks; manual discipline labeling; paused book boundary; non-runtime framing.
- **Reframe**: README density handling; baseline terminology (semantic checkpoint, not release gate); negative-case testing discussions as observability.
- **Future-only**: runtime coordinator, policy layer, storage/broker/DB, production observability/security hardening.
- **Reject-for-now**: validator promotion, hard guardrails, release-gate expansion without recurring-failure evidence.

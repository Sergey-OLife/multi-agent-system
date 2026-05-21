# README / documentation-topology boundary review — 2026-05-21

Status: review result note
Date: 2026-05-21
Scope: narrow README / documentation-topology boundary review
Mode: documentation-only

## 1. Why this note exists

`future_ship_map_review_2026-05-21.md` classified README overgrowth as `useful_now`.

The risk is not that README is currently broken. The risk is that README can slowly become the project's constitution, operating manual, roadmap, maturity checklist and protocol archive at the same time.

That would weaken the current documentation topology:

- README should remain the entrance map.
- Detailed rules should live in focused documents.
- Current state should live in project-state and worklog files.
- Future architecture should live in future-hypothesis or operations notes.

## 2. Current finding

README is still usable as an entrance map, but it is close to the density threshold where more detail would reduce clarity.

The most concrete problem is not length by itself. It is mixed responsibility:

- README introduces the project clearly.
- README also carries current workflow, architecture, second-eyes topology, agent status, archive rules, vision intake, lifecycle words, merge discipline, confusion warnings and next-work hints.
- Some static next-work hints became stale after recent PRs.

This confirms the documentation-topology rule: keep headline rules in README, move operational detail to focused documents, and link to them.

## 3. Boundary decision

README should keep:

- one-sentence project identity;
- what the project is and is not;
- start-here links;
- current mode and book pause status;
- short workflow summary;
- short architecture summary;
- high-risk boundary warnings;
- links to authoritative focused documents.

README should not become:

- full roadmap;
- full protocol archive;
- source of detailed lifecycle policy;
- complete agent registry;
- complete archive protocol;
- future runtime design document;
- state-sync ledger;
- replacement for project-state/current-state/roadmap.

## 4. Immediate README adjustment

This review supports a narrow README adjustment only:

1. Clarify that minimal repository branch protection is already active, while further branch-protection strengthening or production security tooling still requires separate decisions.
2. Replace the static `Next useful work` list with a pointer to project-state/current-state/roadmap and recent operations review notes.
3. Keep README as an entrance map instead of adding another detailed section.

## 5. What not to do now

Do not:

- rewrite README from scratch;
- delete README;
- turn README into a link-only index;
- move every boundary out of README;
- add new runtime readiness content;
- add policy layer;
- change scripts, Go code, workflows or branch protection;
- create a new roadmap system.

## 6. Recommended follow-up

After this note and README adjustment are merged, run a normal state sync if project-state/current-state/roadmap need to record the latest documentation review sequence.

No additional implementation follows automatically from this note.

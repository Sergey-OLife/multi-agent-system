# Documentation topology

Status: documentation map. This file does not change runtime behavior.

## Purpose

README is the entrance map. It must stay clear enough for fast orientation, but complete enough to prevent wrong turns.

When README starts getting too dense, expand through linked documents instead of turning it into a dump.

This file explains how repository documents relate to each other so continuity notes, proposals, archive entries and current state are not accidentally treated as the same layer.

## Authority layers

| Layer | Role | Authoritativeness |
|---|---|---|
| README | Entrance map and contract layer | High for mode, boundaries and navigation contracts |
| Project state | Current accepted state | Highest for accepted state and resume diagnostics |
| Worklog / roadmap | Continuity, sequencing and working intent | Derived from accepted state; not the state source by itself |
| Operations docs | Stable protocols and architecture rules | Operational; authoritative for their explicit scope |
| Vision intake | Proposal, hypothesis and idea capture | Non-authoritative unless linked to an accepted PR, project-state update or explicit approved decision |
| Archive | Historical record, corrections, open loops and strong formulas | Not project-state and not checkpoint unless explicitly marked |
| Checks overview | Advisory and gate semantics for repository checks | Operational; only explicit required check contexts are merge gates |
| Future hypotheses | Possible architecture directions | Future-only until separately approved |

If documents appear to conflict, project-state files and README contracts take priority until a later state-sync or correction PR changes that.

## Layers

- README: entrance map, current status, active boundaries, links to deeper maps.
- Project state: exact current version and source-of-truth status.
- Worklog: restart, roadmap, and current working point.
- Operations docs: stable protocols and architecture rules.
- Archive: semantic history, gaps, corrections, strong formulas and open loops.
- Vision maps: Sergey source ideas classified by status.
- Future hypotheses: useful but not implemented architecture.

## Growth rule

README may grow until clarity starts falling.

When it becomes too long or too mixed:

1. Keep the headline rule in README.
2. Move details to a focused document.
3. Link from README to that document.
4. Preserve the same status labels across documents.
5. Remove duplicated explanations after the linked document becomes stronger.

## Optimization rule

Do not optimize by deleting meaning.

Optimize by:

- merging overlapping documents;
- splitting mixed documents;
- marking implemented ideas as implemented elsewhere;
- moving future hypotheses out of current architecture;
- replacing repeated explanations with links;
- keeping one source of truth for each rule.

## Warning

A short README that hides important boundaries is bad.

A long README that becomes a warehouse is also bad.

The goal is an entrance map with links to the right rooms.

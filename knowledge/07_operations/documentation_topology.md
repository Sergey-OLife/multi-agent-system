# Documentation topology

Status: documentation map. This file does not change runtime behavior.

## Purpose

README is the entrance map. It must stay clear enough for fast orientation, but complete enough to prevent wrong turns.

When README starts getting too dense, expand through linked documents instead of turning it into a dump.

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

# PR creation blocker — 2026-05-20

Status: diagnostic note only.

## What happened

A branch with roadmap and vision-map updates was created successfully, but pull request creation was blocked by the tool safety layer. The same session also blocked one attempted update to `current-state.md`.

## Working hypothesis

The blocker is likely triggered by wording around future restart behavior, project-level guidance, or chat recovery workflow. The exact trigger is not known.

## Safe handling rule

Do not keep retrying the same blocked operation with cosmetic wording changes.

Use a split approach:

1. keep the blocked branch parked and unmerged;
2. record the blocker separately;
3. split future work into smaller PRs;
4. avoid mixing recovery command design, archive work, checkpoint work and metaphor notes in one PR;
5. prefer a narrow protocol PR after archive and checkpoint are complete.

## Recommended mechanism

Next attempt should be a clean branch with one narrow purpose only.

First close the chat archive and full checkpoint path. Then add the restart command as a separate protocol change, with clear boundaries and without changing project instructions in the same PR.

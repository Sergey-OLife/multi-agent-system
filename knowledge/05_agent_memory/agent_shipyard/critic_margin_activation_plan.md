# Critic margin activation plan

Status: plan only. No activation in this PR.

Use `critic_margin_agent` only before high-risk boundaries: registry sync, activation, route change, archive PR, state sync, workflow change, checkpoint, branch protection check, or retry after a failed PR.

Do not use it for ordinary writing, file reading, simple CI checks, or cosmetic edits.

Pass rule: name the checked assumption and confirm no approval gate is bypassed.

Block rule: stop if the operation class is unclear, the target object is missing, the tool cannot perform the real operation, a closed/open PR is treated as implemented, or final-head checks are missing.

Next state remains proposal. Actual activation requires a separate PR and explicit approval.

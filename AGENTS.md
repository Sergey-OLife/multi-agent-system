# Agent entry point

This file applies to the repository. It guides agents to existing authority; it does not replace project state, grant Git permissions, or activate a project mechanism.

## Restore context before work

1. Verify the repository root, branch, `HEAD`, remote, and worktree status. Preserve pre-existing changes.
2. Read `README.md` for project identity, mode, boundaries, and navigation.
3. Read `knowledge/00_manifest/project-state.json` and its human-readable mirror `knowledge/00_manifest/project-state.md` for accepted current state and resume diagnostics.
4. Then read `assistant_codex_worklog/current-state.md` and `assistant_codex_worklog/roadmap.md` for the current working path. Follow `knowledge/00_manifest/resume-order.md` when resuming a broader workflow.
5. Read only the operations documents relevant to the task. `knowledge/07_operations/documentation_topology.md` explains document roles; `knowledge/07_operations/checks_overview.md` explains check status and merge gates.

GitHub `main` records accepted merged project state. A local commit, open or closed-unmerged PR, chat claim, model report, archive entry, or Notion continuity page is not accepted state. Worklog and roadmap express continuity and sequencing, not independent state authority. Operations documents govern only their stated scope. If sources conflict, preserve the observed facts and the intended state separately; resolve the conflict through the repository's authority layers before a consequential change.

## Preserve status and architecture boundaries

Use the lifecycle terms in `README.md` precisely: `container`, `proposal`, `mechanics`, `manual discipline`, `routed`, `validator`, and `hard guardrail`. Never infer activation from a proposal or mechanics, a routed or runtime agent from an agent proposal, automation from manual discipline, or a blocking validator from an advisory check. A documentation note is not project-state; candidate book material is not accepted book content. Future architecture is not implemented architecture.

The repository is a GitHub-centered operating system for the book/project, not a deployed production multi-agent platform. Follow `knowledge/07_operations/repository_architecture_contract.md` for the Go, TypeScript/JavaScript, scripts, LLM, and approval boundaries. Before creating an agent, script, check, router, policy layer, registry authority, state mechanism, or runtime component, inspect what already exists. Do not create a second router, policy engine, source of truth, project-state layer, or workflow mechanism. Future runtime designs and proposed agents require their own decision and workflow before implementation or activation.

## Make bounded changes

Keep each change within the explicit task and its required verification. Treat unrelated findings as follow-up. Preserve private source material and secrets; do not commit raw books or private inbox contents. Do not change the book's meaning, agent logic, materials written in Sergey's name, semantic workflow stage, or disputed ethical, spiritual, marketing, or product framing without the applicable owner approval.

Use an isolated task branch or worktree when changes may overlap. Follow the Global Codex Owner Contract and `assistant_codex_worklog/working-protocol.md` with its applicable addenda for Git and approval gates. This file grants no autonomous push, PR creation, merge, direct `main` mutation, force push, or history rewrite. Do not edit policy and then use that edit to authorize the same task's previously unauthorized action.

## Validate and report accurately

Match validation to the changed surface. For documentation, inspect the final diff, referenced paths, authority and status claims, and relevant inexpensive checks. For code or state changes, run the applicable targeted tests and repository checks. `knowledge/07_operations/checks_overview.md` distinguishes required merge checks from advisory diagnostics and manual discipline; do not promote one layer by wording. Do not add or disable gates merely to obtain a pass.

Report process completion, validation, and outcome separately. A written file, passing local checks, local commit, or opened PR does not make a change implemented on `main`. Claim accepted project state only after the repository's merge and any required state sync are actually observed. State unresolved checks, review requirements, risks, and the next authorized action explicitly.

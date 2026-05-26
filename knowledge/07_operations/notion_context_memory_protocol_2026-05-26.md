# Notion Context Memory Protocol — 2026-05-26

Status: operations note / continuity protocol.
Boundary: documentation-only; not project-state, not roadmap, not checkpoint, not approval, not accepted book content, not runtime, not validator, not hard guardrail, not CI gate, not branch-protection change, not agent activation, not registry mutation.

## Purpose

This note records Sergey’s decision to use project-linked Notion pages as shared continuity memory for the project `Пишем книгу`.

The Notion memory layer is intended to help current and future chats recover semantic context when a working arc becomes dense.

Primary Notion memory page:

```text
https://www.notion.so/36c9b5f9df5181148ff5fe5d8e3c298d
```

Related Notion protocol page:

```text
https://www.notion.so/36c9b5f9df51813ab404c6262b1ea27d
```

Related auto-send clarification page:

```text
https://www.notion.so/36c9b5f9df5181768ecafaaab795cb94
```

## Rule

When a conversation arc reaches a context-critical state, the assistant should add a new dated block to the Notion memory layer without asking Sergey for a separate confirmation.

In an active chat with Notion tool access, Sergey should not have to manually process Notion-save requests. The assistant should send the delta to Notion and then briefly report what was saved.

This does not bypass GitHub workflow.

## Context-critical signals

A Notion memory update is appropriate when one or more of these accumulate:

- several related PRs, decisions, or semantic turns in one arc;
- a new book architecture insight that future chats must recover;
- a Sergey correction that changes the writing or agent workflow;
- a conflict between chapter-level work, whole-book architecture, agent design, and GitHub state;
- a planned topic switch, restart, archive, or new-chat boundary;
- context compression risk;
- a risk that the next chat will not understand why the current decision was made.

## What to add

Add only the delta:

- new decisions;
- new formulas;
- new open loops;
- new boundaries;
- important Sergey corrections;
- current next action;
- links to existing GitHub PRs or Notion pages when relevant.

Do not rewrite the whole Notion page unless Sergey explicitly asks.

## How future chats should use it

Future or existing chats in the project may open project-linked Notion memory pages to recover semantic context.

They may also append new dated blocks when their own arc becomes context-critical.

However, for GitHub-dependent work they must still read GitHub `main` as the source of truth before making factual project-state claims or performing PR operations.

## Project-linked Notion page scope

The continuity rule is not limited to the single page created by one chat.

The project Notion memory layer includes:

- the primary Notion memory page;
- child pages created under it for dated deltas, protocols, clarifications, and recovery notes;
- project Notion pages explicitly linked from the primary memory page or from GitHub operations notes;
- future Notion pages intentionally created as part of this continuity-memory structure.

Future chats may consult these project-linked Notion pages when they have Notion tool access and the page is relevant to context recovery.

Do not infer access to unrelated Notion material. The scope is project-linked continuity material, not every page in the workspace.

## Agent use of Notion memory

Manual/advisory project agents may use project-linked Notion memory pages through the active chat/tool context when their work requires semantic recovery.

Examples:

- `workflow_conductor_agent` may consult Notion memory when planning a dense book/product/agent arc;
- `conversation_archive_librarian` may consult it to avoid losing prior continuity notes;
- `chapter_rehydration_agent` may consult it as proposal/manual preparation context when reconstructing chapter intent;
- `agent_registry_librarian` may consult it for context, but not as registry authority.

This is context consultation only.

It does not make any agent:

- autonomous runtime;
- routed worker;
- validator;
- hard guardrail;
- project-state authority;
- registry mutation authority;
- approval authority;
- Notion background watcher.

Agents do not monitor Notion in the background. They can use it only when invoked inside an active chat/session with available Notion access.

## README / sensitive-file density use

Sergey’s additional direction:

```text
Notion memory can help keep README and other line-sensitive files lighter by storing long instructions in Notion and linking to them from GitHub docs.
```

This is allowed as a continuity and density-management pattern, but only with clear authority boundaries.

Appropriate use:

- keep README and other resume-sensitive files as short maps;
- place long explanatory guidance, reminders, working instructions, and recovery notes in Notion when they would otherwise overload GitHub docs;
- link from GitHub docs to the relevant Notion page when the instruction is useful for humans/chats but not required as machine-readable project-state;
- use Notion to preserve rich context that does not need to be parsed by CI, Go-core, TypeScript checks, or source-of-truth diagnostics.

Do not use Notion links to hide or externalize material that must remain in GitHub:

- project-state facts;
- parser-sensitive schema;
- required protocol addenda;
- accepted source cards;
- agent registry entries;
- workflow gates;
- code behavior;
- CI/check definitions;
- branch-protection facts;
- final accepted book files;
- anything that must be reviewable, diffable, and durable through PR workflow.

Working rule:

```text
GitHub keeps the authoritative map and reviewable facts.
Notion may keep the long human-readable memory and recovery context.
```

Therefore a GitHub file may link to a Notion instruction for extended context, but it must still state the operational boundary in GitHub clearly enough that the project does not depend on an external page for source-of-truth facts.

## Boundaries

The Notion memory layer is not:

- GitHub source of truth;
- project-state;
- roadmap;
- checkpoint;
- approval;
- accepted book text;
- agent activation;
- registry mutation;
- runtime;
- validator;
- hard guardrail;
- CI gate;
- branch protection;
- approval bypass;
- background automation;
- workspace access policy.

## Current related arc

This protocol was created after the Plotnikov book-architecture map arc.

Related PR at the time of creation:

- PR #299 — Add Plotnikov book architecture map.

Related current direction:

```text
Run the first limited extraction pass over the first 5–7 Plotnikov chapters, while preserving whole-book architecture and avoiding premature insertion of architecture-level thoughts into Chapter 1 prose.
```

## Short instruction for future chats

```text
Open the project-linked Notion memory pages for semantic recovery when relevant, but read GitHub main for technical truth. If this chat creates new important decisions, formulas, open loops, or architecture corrections and the arc becomes context-critical, append a dated delta block to the same Notion memory structure without asking Sergey again.
```

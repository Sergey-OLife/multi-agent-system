# Restart command protocol

Status: command protocol. No runtime.

## Command

`restart`

Russian alias: `рестарт`.

## Meaning

Use this command to continue project work from GitHub source of truth in a new or overloaded chat.

It is not archive, checkpoint, memory save, or a new topic request.

## Required first actions

When Sergey sends the command, first use GitHub tools and read current `main`.

Open:

- `README.md`
- `knowledge/00_manifest/project-state.json`
- `knowledge/00_manifest/project-state.md`
- `assistant_codex_worklog/current-state.md`
- `assistant_codex_worklog/roadmap.md`
- `assistant_codex_worklog/restart-prompt.md`
- `assistant_codex_worklog/working-protocol.md`
- `assistant_codex_worklog/protocol_addenda/*.md`
- current open PR list

If current state references a specific archive entry, agent proposal, registry file, or workflow file, open that too.

## Required response

After reading source of truth, answer briefly with:

1. current main point;
2. open PRs;
3. approval gates;
4. nearest safe next step;
5. one warning about what must not be treated as implemented, if relevant.

## Boundaries

The command must not:

- write to GitHub by itself;
- create or merge PRs;
- update memory;
- start Book Fast Track unless state says it is active;
- treat open PRs as implemented;
- treat proposal, mechanics, or manual discipline as route / validator / hard guardrail;
- skip approval gates.

## Failure mode

If GitHub read is unavailable, say that GitHub read/write is unavailable and project-dependent commands cannot be performed correctly in this chat.

Do not reconstruct project state from memory when the command requires GitHub source of truth.

# 2026-05-24 — Agent Queue extraction sandbox and human-core arc

Status: draft_archive_entry

## 0. Origin

- Origin type: project_chat
- Origin id: 2026-05-24-current-visible-chat-agent-queue-extraction
- Origin title: Agent Queue extraction sandbox, human-core invariants and Plotnikov pass framework
- Source scope: current_visible_segment
- Capture command: #архив_старт
- Captured from: current chat
- Related PRs: PR #286, PR #287, PR #288
- Related archive entries: none verified as full-chat coverage for this visible segment

## 1. Coverage check

- Coverage scope: partial
- Coverage applies to: current_visible_segment
- Previous checkpoint: PR #288 merge `ef679665ad8a238ae862392cdf3ccd185578ee23`
- Previous checkpoint coverage scope: missing for current visible segment
- Previous archive/state coverage status: partial
- Full-chat marker present: no
- Gap found: yes
- What this entry covers: semantic arc from `#агенты` through human-core/extraction framework creation, PR #286 merge, PR #287 state sync, PR #288 correction, and the refined Agent Queue sandbox boundary.
- What remains outside this entry: earlier project chats, prior book chapter work, and any unverified current-chat material before the visible segment.

## 2. Core semantic result

The conversation clarified that the project should not build agent architecture for its own sake. The agent system must serve the book, MVP and human growth logic rather than becoming a self-feeding bureaucracy.

A central book frame emerged:

```text
A practical book about human maturity inside the business of influence.
```

MLM is treated not as cheap motivation, anti-MLM criticism or a neutral business manual, but as a pressure environment where ambition, recognition hunger, manipulation risk, leadership dependency and relationship ethics become visible.

The main antagonist is not MLM itself, money or sales. The main antagonist is an immature person with instruments of influence.

## 3. Human-core layer

The conversation produced the first version of a constitutional human-core layer:

- the project strengthens human subjectness rather than replacing it;
- AI can structure, observe, train and reduce chaos;
- AI must not replace conscience, moral judgment, relationships or personal responsibility;
- MVP/gamification must not reward pressure, dependency or reduction of people to metrics;
- metrics are not human value;
- advisory is not authority;
- proposal is not activation;
- manual discipline is not runtime enforcement.

This was implemented in PR #286 as:

- `knowledge/07_operations/human_core_invariants_v0.1.md`
- `knowledge/07_operations/plotnikov_full_pass_map.md`
- `knowledge/07_operations/degradation_patterns_registry.md`

All three documents remain documentation/advisory layers only.

## 4. Plotnikov extraction framework

The project defined a future extraction flow:

```text
Chapter -> degradation pattern -> invariant
```

The purpose is not to summarize chapters, but to extract recurring mechanisms:

- human conflict;
- temptation;
- self-deception;
- degradation pattern;
- maturity pattern;
- practical nerve;
- hidden law of the chapter.

The first intended test is a limited pass over the first 5-7 Plotnikov chapters before broadening to all 50 chapters.

The framework must preserve:

- Plotnikovsky Motor;
- practical tension;
- scene-level concreteness;
- human pressure and risk.

It must not academicize the book or replace scenes with abstraction.

## 5. Degradation registry seed

The conversation seeded the first recurring degradation patterns:

- relationship funnelization;
- atmosphere without spine;
- leadership dependency;
- statistical dehumanization;
- group pressure normalization;
- moral display replacing moral cost;
- motivation replacing maturity;
- community becoming funnel logic;
- AI/agent architecture becoming an end in itself.

Only repeatable mechanisms belong in the registry, not decorative morality or isolated emotions.

## 6. PR/state sequence

### PR #286

PR #286 added the human-core invariants, Plotnikov extraction map and degradation registry as advisory/documentation artifacts.

### PR #287

PR #287 state-synced PR #286 but initially created a contradiction:

- `bookPaused: true` remained active;
- `nextAction` said to run the first 5-7 Plotnikov chapters.

Codex correctly flagged this as a P1 issue because it could authorize book-content processing without a clear mode boundary.

### PR #288

PR #288 corrected the boundary by distinguishing:

- Agent Queue extraction / creative sandbox;
- accepted durable book content.

The corrected rule:

```text
Agent Shipyard / Agent Queue may run non-final extraction and creative sandbox work over Plotnikov chapters when explicitly requested by Sergey; outputs are candidate material only, not accepted book content.
```

Saving extraction outputs as accepted chapter text, changing book files, durable book/product mode switching or treating candidate fragments as final requires explicit Sergey approval and the appropriate book workflow.

## 7. Important boundary now established

`#агенты` can host a creative sandbox over book material as long as the outputs remain candidate material.

`#книга` remains the mode for book/product mission planning and accepted book workflow.

This distinction protects both sides:

- it does not freeze creative work inside Agent Queue;
- it prevents accidental mutation of accepted book content.

## 8. Open loops

- Run a limited extraction/creative sandbox pass over the first 5-7 Plotnikov chapters.
- Verify whether the extraction framework preserves narrative energy rather than turning the book into theory.
- If the sandbox produces strong fragments, classify them explicitly as candidate material before any book-file save.
- Consider whether future state-sync wording should include `candidate material` and `accepted content` as standard lifecycle terms.
- PR #288 merge may require a narrow follow-up state sync if project-state needs to record the correction as latest merge.

## 9. Do not confuse

- Candidate fragment is not accepted book content.
- Extraction sandbox is not durable book mode.
- Human-core invariants are not validators.
- Degradation registry is not automated classification.
- Plotnikov full pass map is not a completed 50-chapter pass.
- Archive entry is not project-state.

## 10. Practical next step

Use the merged extraction framework to run the first limited Agent Queue sandbox pass over 5-7 Plotnikov chapters, keeping every output explicitly marked as candidate material unless Sergey approves a book workflow transition.

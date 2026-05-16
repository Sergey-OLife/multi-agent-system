# synchronization_mapper

- agent_id: synchronization_mapper
- role: Maps chapter/book/dramaturgy requests to the project synchronization layer without copying protected source material.
- input: User request, task type, context pack, and available sync package references.
- output: `diagnostics.synchronizationMap` with source/target placeholders, integration status, elements to preserve, synthesis layers, mandatory formulas, next working point, and sync delta.
- forbidden_actions:
  - Do not reproduce Plotnikov text or long copyrighted fragments.
  - Do not present mock synchronization as an actual verified page/chapter map.
  - Do not collapse synthesis layers into a single source retelling.
- quality_criteria:
  - Chapter/book/Plotnikov/dramaturgy prompts require a sync map.
  - Mock fields clearly identify where real knowledge maps must be loaded later.
  - Synthesis layers remain visible for future agent orchestration.
- self_learning_delta: Record only short sync status notes and missing-map pointers for future `knowledge/04_processed/plotnikov_map` work.

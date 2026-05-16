# Knowledge Base

This directory contains the project knowledge hierarchy used by agents before source cards are added. It stores structure, rules, processed knowledge, and agent memory without committing private raw books or copyrighted source files.

## Layers

- `00_manifest/` — registry, source priorities, and upload/loading rules for the knowledge base.
- `01_raw_private/` — private raw materials; do not commit files from this layer except `README_DO_NOT_COMMIT.md`.
- `02_project_rules/` — the Svod, MVP rules, update packages, synchronization packages, and agent specs that constrain project work.
- `03_source_books/` — structure and location cards for source books only; do not commit raw books here.
- `04_processed/` — processed source cards, summaries, extracted formulas, Plotnikov maps, and context packs.
- `05_agent_memory/` — delta-memory for agents, including context, Svod, MVP, sync, style, and mastery deltas.
- `06_work_inbox/` — incoming materials queued for classification and processing before they are promoted into the right layer.

## Copyright and privacy guardrails

- Do not commit books, PDFs, EPUBs, MOBI files, DJVU files, scans, or other raw copyrighted content.
- Keep private raw materials in `01_raw_private/` or external storage only.
- Use `03_source_books/` for structural placeholders and source-location cards, not raw source text.
- Use `04_processed/` for transformed project artifacts such as source cards, summaries, formulas, and context packs.

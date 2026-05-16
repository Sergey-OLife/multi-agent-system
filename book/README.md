# Book workflow

This directory contains only processed, independent working artifacts for the book production workflow. Raw source books are not stored here.

## Directories

- `book/00_manifest/` — workflow manifests, schemas, examples, and chapter status tracking files.
- `book/01_drafts/` — drafts of our book after agent processing.
- `book/02_reviewed/` — texts after editorial review, but not yet approved.
- `book/03_approved/` — only chapters explicitly approved by the user.
- `book/04_print_exports/` — HTML/PDF-ready assemblies and intermediate print versions.

## Raw source restriction

Raw Plotnikov text and other raw books must not be placed in this directory. Do not commit books, PDFs, EPUBs, DJVUs, MOBIs, scans, full-text uploads, long quotes, or close retellings here.

The expected workflow is manual chapter upload: the user provides one chapter from a private local copy, agents create independent processed artifacts, and only those artifacts are saved to GitHub.

# Source Location Override 01 — Socratic Block

Дата: 2026-05-17
Статус: registry_override_proposal
Контур: `socratic_lantern_agent`

## 1. Назначение

Этот файл фиксирует осторожный override для source-location данных сократического блока после targeted reading wave 01.

Он не коммитит raw sources, private Drive IDs или private Drive URLs.

## 2. Waltman/Codd canonical decision

source_id:

`waltman_codd_macfarr_moore_socratic_questioning`

Текущее решение:

- второй source_id не создавать;
- preferred canonical filename for targeted reading: `uoltman_skott_kodd_iii_trent_makfarr_linn_mur_bret_sokratovs.pdf`;
- alternate file: `Сократовский_диалог_Скотт_Уолтман,_Р_Трент_Кодд.pdf`;
- статус второго файла: `alternate_file`, не `archive_duplicate`.

Почему не `archive_duplicate`:

- нет полной постраничной сверки;
- файлы могут отличаться качеством OCR, структурой, рабочими листами или пригодностью для поиска;
- безопаснее сохранить alternate status.

## 3. Suggested location patch

```json
{
  "source_id": "waltman_codd_macfarr_moore_socratic_questioning",
  "raw_location": "uploaded_project_source",
  "drive_filename": "uoltman_skott_kodd_iii_trent_makfarr_linn_mur_bret_sokratovs.pdf",
  "alternate_files": [
    {
      "filename": "Сократовский_диалог_Скотт_Уолтман,_Р_Трент_Кодд.pdf",
      "status": "alternate_file",
      "note": "Same source family; keep until page-level verification."
    }
  ],
  "access_status": "targeted_reading_started",
  "usage_rule": "may_use_as_private_source_after_targeted_reading"
}
```

## 4. Status suggestions for related sources

Suggested status updates after targeted reading wave 01:

| source_id | suggested access_status | note |
|---|---|---|
| `waltman_codd_macfarr_moore_socratic_questioning` | `targeted_reading_started` | technical layer note exists |
| `farnsworth_socratic_method` | `targeted_reading_started` | cultural-philosophical note exists |
| `overholser_socratic_psychotherapy` | `targeted_reading_started` | anti-interrogation/pace note exists |
| `socratic_method_framework` | `needs_review_after_agent_proposal` | internal framework may need sync |
| `chapter_30_design_artifact` | `needs_sync_with_current_chapter` | design artifact, not final chapter |

## 5. Why this is an override, not direct registry rewrite

`source-locations.registry.json` currently uses a compact list of entries and has not yet defined `alternate_files` or `targeted_reading_started` as formal schema values.

This override prevents a premature schema mutation. It records the intended update without pretending that the registry schema has already been evolved.

## 6. Next action

Before editing `source-locations.registry.json` directly, decide whether to extend the registry schema with:

- `alternate_files`;
- `access_status: targeted_reading_started`;
- `access_status: needs_review_after_agent_proposal`;
- `access_status: needs_sync_with_current_chapter`.

Until then, this file is the working override for the Socratic block.

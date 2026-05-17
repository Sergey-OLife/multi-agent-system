# Source Location Template

metadata:
- source_id: `<source_id from knowledge/00_manifest/sources.registry.json>`
- raw_location: `private_google_drive | not_registered | private_user_computer`
- drive_filename: `<filename only; do not commit Drive file ID or private URL>`
- access_status: `available_private_file | private_project_doc_present_content_not_verified | placeholder_created_content_not_verified | not_found_in_private_folder`
- usage_rule: `<usage rule from source-locations.registry.json>`
- raw_text_committed: false
- drive_file_id_committed: false
- drive_url_committed: false

## Назначение

Этот файл связывает source card с приватной библиотекой пользователя без загрузки сырого материала в GitHub.

## Что разрешено

- Указывать имя файла или документа в приватной Google Drive библиотеке.
- Указывать статус доступа.
- Указывать правило использования.
- Использовать источник только после целевого чтения релевантного фрагмента.

## Что запрещено

- Коммитить PDF/EPUB/DJVU/MOBI/сканы/полные книги.
- Коммитить сырой текст источника.
- Коммитить приватные Drive file IDs или приватные Drive URLs.
- Делать вид, что источник прочитан, если доступен только source card или placeholder.
- Использовать отсутствующий материал как доказательство, ссылку или содержательную опору.

## Правила статусов

- `available_private_file` — файл есть в private Drive; его можно читать точечно, но нельзя коммитить сырой текст.
- `private_project_doc_present_content_not_verified` — внутренний проектный документ есть, но содержание ещё не проверено.
- `placeholder_created_content_not_verified` — создан пустой или непроверенный документ; использовать только как заготовку.
- `not_found_in_private_folder` — в указанной папке материала нет; агент обязан ограничиться source card.

## Особое правило для Плотникова

Полный Плотников может использоваться как карта навигации и дозировки: что объяснять сейчас, что оставить следующей главе, где поставить этический предохранитель.

Запрещено использовать полный текст Плотникова как сырьё для пересказа, близкого рерайта, копирования структуры, длинных цитат или авторской самопрезентации.

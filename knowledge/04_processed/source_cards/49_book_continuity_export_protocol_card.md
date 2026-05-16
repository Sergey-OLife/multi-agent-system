# Source Card: Протокол сохранения книги, архива и карты контекста

source_id: book_continuity_export_protocol_card
title: Протокол сохранения книги, архива и карты контекста
author: to_verify
version_or_edition: to_verify
language: ru_or_original / to_verify
source_type: workflow_protocol
copyright_status: copyrighted_or_proprietary / do_not_commit_raw_text
storage_location: private_user_library_or_local_source
priority_level: workflow_protocol
action: no_raw_text_in_repository
project_use: Описывает рабочий протокол периодического сохранения: обновлённый файл книги, архив чата, карта контекста проекта, текущий статус, список глав и принятых решений.
what_to_preserve:
- промежуточная версия книги
- дата и время генерации
- статус глав
- архив переписки
- карта контекста
- ключевые решения
- терминологические замены
- ручной триггер «Обновить»
what_not_to_copy:
- не смешивать архив чата с читательским текстом
- не обещать автоматическую фоновую работу вне возможностей текущего инструмента
- не считать промежуточную версию финальной книгой
synthesis_role: Основа для update_packager и будущих export/workflow tools.
related_agents:
- update_packager
- contextologist
- svod_guard
processed_status: initial_inventory_card_v0.1
last_updated: 2026-05-16

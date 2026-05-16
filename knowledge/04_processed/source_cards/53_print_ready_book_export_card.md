# Source Card: Протокол печатной сборки книги

source_id: print_ready_book_export_card
title: Протокол печатной сборки книги
author: to_verify
version_or_edition: to_verify
language: ru_or_original / to_verify
source_type: workflow_protocol
copyright_status: copyrighted_or_proprietary / do_not_commit_raw_text
storage_location: private_user_library_or_local_source
priority_level: workflow_protocol
action: no_raw_text_in_repository
project_use: Описывает сборку переработанных глав в единый HTML-документ для печати: титул, содержание, главы с новой страницы, CSS под А4, Times New Roman 12 pt, межстрочный 1.5, колонтитулы.
what_to_preserve:
- сбор только литературных глав
- хронологический порядок
- HTML со встроенным CSS
- титульную страницу
- автоматическое содержание
- главы с новой страницы
- готовность к печати/PDF
what_not_to_copy:
- не включать комментарии, анализ и служебные сообщения
- не добавлять от себя новые главы
- не смешивать архив и печатный текст
synthesis_role: Основа для будущего export tool или update_packager при подготовке промежуточной/печатной версии.
related_agents:
- update_packager
- contextologist
processed_status: initial_inventory_card_v0.1
last_updated: 2026-05-16

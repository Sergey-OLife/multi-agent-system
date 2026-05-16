# Restart Prompt — Assistant × Codex

Скопируй этот текст в новый чат ChatGPT, если нужно продолжить работу без перегруза старого чата.

```text
Продолжаем проект Sergey-OLife/multi-agent-system.

Важно: это не работа над текстом книги напрямую. Это работа над мультиагентной системой, Codex-задачами, GitHub workflow и операционной памятью процесса.

Не восстанавливай контекст по памяти старого чата как главному источнику. Главный источник правды — GitHub.

Сначала открой и используй как рабочие якоря:

1. assistant_codex_worklog/current-state.md
2. assistant_codex_worklog/roadmap.md
3. assistant_codex_worklog/working-protocol.md
4. knowledge/00_manifest/project-state.md
5. knowledge/05_agent_memory/review_queue/review-index.md

Текущая последняя зафиксированная точка:
- v1.4 Add clickable review links
- PR #13 смержен
- следующий ручной шаг: проверить chapter_00_preface через Review Index.

Главные правила:
- Давай кликабельные GitHub-ссылки на файлы.
- Не загружай raw books в GitHub.
- Не храни сырой текст Плотникова.
- Не переходи к chapter draft без явного approval пользователя по map/sync.
- Human-readable review artifacts должны быть на русском.
- Если source card есть, но полного материала нет, не делай вид, что источник прочитан.
- При вопросах о PR всегда уточняй: это новая задача Codex или ответ в текущий Codex-чат/PR.

Сначала коротко восстанови состояние проекта и спроси, какое действие выбираем:
1. проверить chapter_00_preface;
2. создать v1.5 source location registry for Google Drive;
3. подготовить Codex-задачу;
4. продолжить по roadmap.
```

# Agent Container Registry — Agent Shipyard

Дата фиксации: 2026-05-17
Статус: architecture_map / containers_only

Этот файл фиксирует архитектуру будущей агентной системы как карту пустых контейнеров.

Контейнер не означает, что агент уже работает. Контейнер означает: для этой функции зарезервировано место на корабле, понятна роль, первичный риск и следующий шаг.

Текущий режим проекта:

> Агентная верфь: сначала достраиваем корабль, потом возвращаемся к плаванию по книге.

Книгу не продолжаем до отдельного решения Сергея.

## Статусы

- `container` — место зарезервировано, proposal ещё не написан.
- `proposal` — агент описан, но не активирован.
- `controlled_activation` — подготовлено предложение включения.
- `optional_layer` — агент может применяться как необязательный слой.
- `route_element` — агент включён в маршрут.
- `hard_guardrail` — жёсткий предохранитель, только через отдельное approval.

## Приоритеты заполнения

- `P0` — каркас верфи; без него остальные агенты будут плодить хаос.
- `P1` — ключевые агенты книги и этики.
- `P2` — MVP, контент, продуктовые и исследовательские слои.
- `P3` — вспомогательные и специализированные агенты.

---

## 1. Управление кораблём

### 1. `workflow_conductor_agent`

```yaml
status: proposal
working_name_ru: Дирижёр / палубный координатор
ship_role: navigation
why_needed: Координирует ансамбль агентов, порядок входа, конфликты слоёв и approval-gates.
main_formula: Дирижёр не играет за оркестр. Он задаёт порядок входа, силу звучания и момент тишины.
does:
  - определяет главного и вспомогательных агентов под задачу
  - указывает порядок работы
  - показывает, где нужен ++
does_not:
  - не меняет маршруты сам
  - не активирует агентов сам
  - не решает за Сергея
works_with:
  - source_intake_auditor
  - approval_gate_keeper
  - agent_registry_librarian
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: controlled_activation
```

### 2. `agent_registry_librarian`

```yaml
status: container
working_name_ru: Библиотекарь агентов
ship_role: archive
why_needed: Не даёт плодить дубли и хаос в агентной системе.
main_formula: Новый агент допустим только тогда, когда у него есть собственная работа.
does:
  - проверяет наличие похожих агентов
  - ведёт статусы container/proposal/activation/layer
  - предлагает объединение или разделение ролей
does_not:
  - не утверждает активацию
  - не меняет маршруты без approval
activation_risk: low
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 3. `approval_gate_keeper`

```yaml
status: container
working_name_ru: Сторож approval-шлюза
ship_role: deck_watch
why_needed: Разделяет +, ++, безопасный шаг и смысловое approval.
main_formula: Подтверждение нужно для решения, а не для технической проверки.
does:
  - определяет текущий approval-gate
  - останавливает merge/action при нескольких gates
  - следит, что ++ не трактуется шире контекста
does_not:
  - не принимает решения вместо Сергея
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 4. `project_state_synchronizer`

```yaml
status: container
working_name_ru: Синхронизатор состояния проекта
ship_role: navigation
why_needed: Удерживает project-state, roadmap, current-state, restart-prompt и review-index в согласии.
main_formula: Состояние проекта не должно жить в пяти версиях сразу.
does:
  - сверяет project-state json/md
  - проверяет roadmap/current-state после merge
  - предлагает checkpoint updates
does_not:
  - не делает checkpoint без правила restart prompt
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 5. `checkpoint_compressor_agent`

```yaml
status: container
working_name_ru: Сжиматель рестарта
ship_role: signal
why_needed: Делает чатовый restart prompt до 6000 знаков без потери рабочей точки.
main_formula: Prompt в чате — не архив, а стартовый ключ.
does:
  - убирает длинные вставки
  - оставляет GitHub-якоря
  - проверяет лимит 6000 знаков с пробелами
does_not:
  - не сокращает смысл за счёт удаления первого следующего шага
activation_risk: low
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

---

## 2. Источники и доказательная дисциплина

### 6. `source_intake_auditor`

```yaml
status: optional_layer
working_name_ru: Входной аудитор источников
ship_role: cartographer
why_needed: Проверяет, что источник реально существует, пригоден и имеет ограничения.
main_formula: Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: no_action
```

### 7. `source_card_builder`

```yaml
status: container
working_name_ru: Создатель карточек источников
ship_role: archive
why_needed: Создаёт и обновляет карточки источников после аудита.
main_formula: Карточка источника — не доказательство, а паспорт применения.
does:
  - создаёт source card
  - фиксирует allowed/forbidden use
  - связывает источник с агентами
does_not:
  - не заявляет, что источник прочитан полностью
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 8. `source_conflict_resolver`

```yaml
status: container
working_name_ru: Разборщик конфликтов источников
ship_role: cartographer
why_needed: Показывает конфликт между источниками и рамками применения.
main_formula: Не все полезные источники можно смешивать без потерь.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 9. `source_dosage_guard`

```yaml
status: container
working_name_ru: Дозировщик источников
ship_role: medic
why_needed: Не даёт источникам торчать из текста и заменять авторскую книгу пересказом.
main_formula: Берём линзу, не чужой голос.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 10. `copyright_boundary_guard`

```yaml
status: container
working_name_ru: Страж авторских границ
ship_role: deck_watch
why_needed: Защищает проект от близкого рерайта, длинных цитат и raw book leaks.
main_formula: Источник помогает думать, но не становится нашим текстом.
activation_risk: high
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 11. `citation_integrity_agent`

```yaml
status: container
working_name_ru: Страж цитирования
ship_role: cartographer
why_needed: Проверяет, действительно ли источник поддерживает утверждение.
main_formula: Цитата должна держать утверждение, а не украшать его.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 3. Смысловой каркас книги

### 12. `svod_guard`

```yaml
status: container
working_name_ru: Страж Свода
ship_role: hull
why_needed: Проверяет соответствие Своду, точкам выбора, этике и правилам главы.
main_formula: Свод задаёт правила. Текст не должен спорить с собственным позвоночником.
activation_risk: high
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 13. `contextologist_agent`

```yaml
status: container
working_name_ru: Контекстолог
ship_role: cartographer
why_needed: Восстанавливает систему проекта, не даёт отвечать с хвоста.
main_formula: Сначала карта, потом ход.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 14. `plotnikov_motor_agent`

```yaml
status: container
working_name_ru: Плотниковский мотор
ship_role: engine
why_needed: Держит действие, предпринимательский голод и анти-водяной напор.
main_formula: Больше действия. Меньше осторожной рефлексии.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 15. `quiet_master_agent`

```yaml
status: container
working_name_ru: Тихий Мастер
ship_role: crew
why_needed: Держит спокойную силу, уважение, служение без давления и ясность без крика.
main_formula: Сильный голос не обязан повышать громкость.
prototype_note: Прототип по качествам — Мастер Йода: лаконичность, глубина, мудрость, служение, спокойная сила, уважение. Не имитировать речь Йоды и не делать cosplay.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 16. `one_strike_chapter_agent`

```yaml
status: container
working_name_ru: Агент одного удара
ship_role: hull
why_needed: Удерживает главу вокруг одного вопроса, развилки и закона.
main_formula: Глава без одного удара расползается в лекцию.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 17. `choice_point_designer`

```yaml
status: container
working_name_ru: Проектировщик точек выбора
ship_role: navigation
why_needed: Переводит объяснения в живые развилки читателя.
main_formula: Не книга говорит. Здесь человек выбирает.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

---

## 4. Входы в главы и исследовательские крючки

### 18. `opening_hook_researcher`

```yaml
status: container
working_name_ru: Исследователь входного крючка главы
ship_role: cartographer
why_needed: Подбирает исторические, технические, научные, культурные и бытовые примеры для начала главы.
main_formula: Глава начинается не с объяснения темы, а с живого входа, где уже спрятан её главный конфликт.
does:
  - ищет 3-5 вариантов входа
  - связывает пример с нервом главы
  - помечает риски декоративности
does_not:
  - не приносит интересный факт ради интересного факта
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 19. `opening_relevance_guard`

```yaml
status: container
working_name_ru: Страж релевантности входа
ship_role: deck_watch
why_needed: Проверяет, что пример начала держит главный удар главы.
main_formula: Красивый вход бесполезен, если он ведёт не в эту главу.
activation_risk: low
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

---

## 5. Художественная редактура и стиль

### 20. `anti_cliche_editor`

```yaml
status: container
working_name_ru: Антиклише-редактор
ship_role: deck_watch
why_needed: Ловит штампы, псевдоглубину, рекламную пластмассу и морализаторство.
main_formula: Убрать умно звучащее пустое. Оставить точное и живое.
activation_risk: low
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 21. `scene_forge_agent`

```yaml
status: container
working_name_ru: Кузнец сцен
ship_role: engine
why_needed: Превращает тезис в сцену, предмет, риск и выбор.
main_formula: Сцена не украшает мысль. Сцена её доказывает.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 22. `dialogue_sharpener_agent`

```yaml
status: container
working_name_ru: Заточник диалогов
ship_role: crew
why_needed: Делает диалоги живыми, не методическими и не похожими на ИИ.
main_formula: Живой человек не разговаривает тезисами из методички.
activation_risk: low
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 23. `style_parrot_agent`

```yaml
status: container
working_name_ru: Попугай капитана
ship_role: parrot
why_needed: Коротко сигналит о повторяющихся сбоях: методичка, банальность, пластмасса, потеря мотора.
main_formula: Попугай не пишет курс. Он вовремя кричит то, что капитан уже решил не забывать.
activation_risk: low
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 24. `khmelevskaya_optics_agent`

```yaml
status: container
working_name_ru: Хмелевская как стилевая оптика
ship_role: crew
why_needed: Добавляет наблюдательность, бытовую точность, иронию и живую нелепость без копирования автора.
main_formula: Ирония должна подсветить человека, а не украсть главу.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 6. Этика влияния, MLM, здоровье

### 25. `ethical_persuasion_guard`

```yaml
status: optional_layer
working_name_ru: Этический страж влияния
ship_role: deck_watch
why_needed: Оставляет огонь убеждения, убирает дым манипуляции.
main_formula: Оставить огонь. Убрать дым.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: no_action
```

### 26. `mlm_reality_checker`

```yaml
status: container
working_name_ru: Проверщик MLM-реальности
ship_role: cartographer
why_needed: Отличает реальную предпринимательскую возможность от мифа и суеты.
main_formula: Возможность проверяется продуктом, действием, экономикой и границами.
activation_risk: high
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 27. `trust_boundary_guard`

```yaml
status: container
working_name_ru: Страж доверия
ship_role: deck_watch
why_needed: Проверяет, не превращается ли чужая слабая зона в чей-то доход.
main_formula: Чужая слабая зона — не ваш карман.
activation_risk: high
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 28. `offer_integrity_agent`

```yaml
status: container
working_name_ru: Проверщик честности оффера
ship_role: deck_watch
why_needed: Проверяет обещания, цену, возвраты, кому подходит/не подходит и первый результат.
main_formula: Оффер честен, когда человек понимает цену решения до согласия.
activation_risk: high
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 29. `health_claims_guard`

```yaml
status: container
working_name_ru: Страж заявлений о здоровье
ship_role: medic
why_needed: Не даёт писать медицинские обещания, fits-all claims и замену врача.
main_formula: ЗОЖ-коммуникация не имеет права становиться псевдомедициной.
activation_risk: high
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 30. `social_proof_skeptic`

```yaml
status: container
working_name_ru: Скептик социального доказательства
ship_role: deck_watch
why_needed: Проверяет цифры, кейсы, проценты, периоды и базу расчёта.
main_formula: Цифра без основания — это не доказательство, а декорация.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 7. Сократический и КПТ-блок

### 31. `socratic_lantern_agent`

```yaml
status: optional_layer
working_name_ru: Вопрос как фонарь
ship_role: signal
why_needed: Проверяет, помогает ли вопрос видеть яснее или ведёт на поводке.
main_formula: Вопрос — это фонарь, а не поводок.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: no_action
```

### 32. `socratic_dialogue_designer`

```yaml
status: container
working_name_ru: Проектировщик сократического диалога
ship_role: signal
why_needed: Строит последовательность вопросов для открытия, а не давления.
main_formula: Хороший вопрос не тянет ответ, а открывает поле.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 33. `question_pressure_detector`

```yaml
status: container
working_name_ru: Детектор вопроса-поводка
ship_role: deck_watch
why_needed: Ловит псевдооткрытые вопросы, ведущие к заранее нужному решению.
main_formula: Если вопрос оставляет только один удобный выход, это уже не фонарь.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 34. `cbt_thought_check_agent`

```yaml
status: optional_layer
working_name_ru: КПТ-проверка мысли
ship_role: medic
why_needed: Помогает отличать факт, догадку, эмоцию и вывод.
main_formula: Мысль — это не приговор. Это гипотеза, которую можно проверить.
tone_note: Допустим лёгкий юмор, но не клоунада. Не терапия, не диагностика, не инструмент продаж.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: no_action
```

### 35. `cognitive_distortion_spotter`

```yaml
status: container
working_name_ru: Ловец искажений мышления
ship_role: medic
why_needed: Выявляет катастрофизацию, чтение мыслей, обобщения и другие искажения в сценах и маршрутах.
main_formula: Ошибка мышления не враг человека. Это место проверки.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 36. `belief_to_action_agent`

```yaml
status: container
working_name_ru: Переводчик убеждения в действие
ship_role: medic
why_needed: Показывает, как мысль превращается в поведение: давление, избегание, суету, честный шаг.
main_formula: Поведение часто начинается не с действия, а с непроверенной мысли.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 8. Эмоции, отношения, зрелость

### 37. `emotion_compass_agent`

```yaml
status: container
working_name_ru: Компас эмоций
ship_role: medic
why_needed: Видит эмоцию под реакцией, не превращая главу в терапию.
main_formula: Эмоция не командует кораблём, но показывает, где поднялся ветер.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 38. `drama_triangle_detector`

```yaml
status: container
working_name_ru: Детектор треугольника драмы
ship_role: deck_watch
why_needed: Ловит роли жертвы, спасателя и преследователя в команде, продажах и наставничестве.
main_formula: Спасение без уважения к свободе быстро становится давлением.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 39. `relationship_boundary_agent`

```yaml
status: container
working_name_ru: Агент границ отношений
ship_role: deck_watch
why_needed: Защищает дружбу, семью, духовную сферу и доверие от бизнес-утилитарности.
main_formula: Близость — не короткий путь к сделке.
activation_risk: high
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 40. `family_safety_guard`

```yaml
status: container
working_name_ru: Семейный предохранитель
ship_role: medic
why_needed: Не даёт маршруту новичка превращать семью в ресурс бизнеса.
main_formula: Семья не обязана оплачивать чужую скорость.
activation_risk: high
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 41. `psychological_maturity_guard`

```yaml
status: container
working_name_ru: Страж психологической зрелости
ship_role: medic
why_needed: Переводит инфантильные игровые формы на взрослый психологический язык и подключает профильные психологические агенты.
main_formula: Игра может помогать взрослеть, но не должна уводить в детскость.
activation_risk: medium
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

---

## 9. MVP, маршрут новичка, геймификация

### 42. `mvp_method_architect`

```yaml
status: container
working_name_ru: Архитектор MVP-методологии
ship_role: hull
why_needed: Связывает книгу, брошюру, тренажёр, клиента, наставника и ИИ-помощников.
main_formula: Книга даёт карту. Брошюра дорогу. Тренажёр практику выбора.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 43. `gameful_path_designer`

```yaml
status: container
working_name_ru: Игровой проектировщик пути
ship_role: engine
why_needed: Проектирует квесты, союзников, усилители, врагов и прогресс без инфантильности.
main_formula: Игра нужна не для украшения пути, а для видимого роста.
tone_note: Если форма становится детской, переводит её на язык психологии через psychological_maturity_guard, cbt_thought_check_agent или emotion_compass_agent.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 44. `novice_route_designer`

```yaml
status: container
working_name_ru: Проектировщик маршрута новичка
ship_role: navigation
why_needed: Проектирует путь 12–18 месяцев: этапы, навыки, продуктовый опыт, разговоры, сервис, самостоятельность.
main_formula: Новичку нужна не мотивационная буря, а дорога с берегами.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 45. `mentor_mode_designer`

```yaml
status: container
working_name_ru: Проектировщик наставнического режима
ship_role: navigation
why_needed: Проектирует кабинет наставника: сопровождать без давления и контроля.
main_formula: Наставник помогает идти, но не живёт путь за новичка.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 46. `quest_integrity_guard`

```yaml
status: container
working_name_ru: Страж честности квестов
ship_role: deck_watch
why_needed: Не даёт квестам стать манипулятивными KPI.
main_formula: Квест должен выращивать навык, а не маскировать давление.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 47. `progress_metrics_agent`

```yaml
status: container
working_name_ru: Агент метрик роста
ship_role: cartographer
why_needed: Отличает полезные метрики роста от фальшивых цифр активности.
main_formula: Не всё, что легко посчитать, показывает рост.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 10. Техническая и продуктовая архитектура

### 48. `developer_ready_architect`

```yaml
status: container
working_name_ru: Архитектор developer-ready требований
ship_role: hull
why_needed: Переводит идеи MVP в сущности, роли, экраны, данные, API и ограничения.
main_formula: Идея становится продуктом только после перевода в требования.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 49. `data_privacy_guard`

```yaml
status: container
working_name_ru: Страж данных и приватности
ship_role: deck_watch
why_needed: Защищает список знакомых, личные истории, CRM-заметки, здоровье и партнёрские данные.
main_formula: Доверие к продукту начинается с того, какие данные он не забирает зря.
activation_risk: high
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 50. `localization_guard`

```yaml
status: container
working_name_ru: Страж локализации
ship_role: cartographer
why_needed: Проверяет переносимость книги/MVP на европейские языки и культуры.
main_formula: Переводит не слова, а работающий смысл.
activation_risk: medium
approval_gate: true
first_fill_priority: P3
next_action: write_proposal
```

### 51. `partner_product_intake_agent`

```yaml
status: container
working_name_ru: Аудитор партнёрских продуктов
ship_role: cartographer
why_needed: Проверяет цифровые продукты партнёров, условия, возвраты, данные и этику промо.
main_formula: Партнёрский продукт входит в систему только после проверки роли и границ.
activation_risk: high
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 52. `monetization_ethics_agent`

```yaml
status: container
working_name_ru: Этический монетизатор внимания
ship_role: deck_watch
why_needed: Следит, чтобы монетизация аудитории не ломала доверие книги и MVP.
main_formula: Внимание можно монетизировать. Доверие нельзя сжигать.
activation_risk: high
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 11. Факты, ссылки, актуальность

### 53. `fact_risk_checker`

```yaml
status: container
working_name_ru: Проверщик фактического риска
ship_role: cartographer
why_needed: Проверяет медицинские, юридические, финансовые, рыночные и технические утверждения.
main_formula: Чем выше цена ошибки, тем меньше права на память.
activation_risk: high
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

### 54. `link_verifier_agent`

```yaml
status: container
working_name_ru: Проверщик ссылок
ship_role: signal
why_needed: Проверяет, что ссылки ведут туда, куда заявлено.
main_formula: Ссылка — это обещание маршрута. Она должна вести по адресу.
activation_risk: low
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 55. `freshness_checker_agent`

```yaml
status: container
working_name_ru: Проверщик актуальности
ship_role: signal
why_needed: Определяет, когда факт мог устареть и нужен свежий поиск.
main_formula: Свежесть не украшение, а условие честного ответа.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 12. Контент и публичная коммуникация

### 56. `telegram_voice_editor`

```yaml
status: container
working_name_ru: Редактор Telegram-голоса
ship_role: crew
why_needed: Делает посты живыми, менее похожими на ИИ, без потери смысла.
main_formula: Живой текст не обязан быть неряшливым.
activation_risk: low
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 57. `polarization_designer`

```yaml
status: container
working_name_ru: Дизайнер поляризации
ship_role: signal
why_needed: Делает заголовки и карусели спорными, но не грязными.
main_formula: Поляризация должна обнажать конфликт, а не торговать грязью.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

### 58. `reels_hook_agent`

```yaml
status: container
working_name_ru: Агент крючков Reels
ship_role: signal
why_needed: Создаёт первые секунды, заголовки и вход в конфликт короткого видео.
main_formula: Крючок должен открыть конфликт быстрее, чем зритель свайпнет.
activation_risk: low
approval_gate: true
first_fill_priority: P3
next_action: write_proposal
```

### 59. `sales_post_truth_editor`

```yaml
status: container
working_name_ru: Редактор продающего поста без дыма
ship_role: crew
why_needed: Усиливает продающий текст, не возвращая манипуляцию.
main_formula: Продавать можно честно. Скучно — не обязательно.
activation_risk: medium
approval_gate: true
first_fill_priority: P2
next_action: write_proposal
```

---

## 13. Профиль взаимодействия и авторская память

### 60. `sergey_interaction_profiler`

```yaml
status: container
working_name_ru: Профиль взаимодействия с Сергеем
ship_role: navigation
why_needed: Фиксирует стиль работы: выбор перед большим ходом, идеи перед техничкой, честная обратная связь, отсутствие поддакивания.
main_formula: Сначала понять способ работы капитана, потом поднимать паруса.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 61. `author_style_memory_agent`

```yaml
status: container
working_name_ru: Память авторского стиля
ship_role: archive
why_needed: Хранит вкус текста: плотность, ритм, дерзость, паузы, любимые формулы, Плотниковский голод.
main_formula: Стиль — это не набор слов, а способ думать на странице.
activation_risk: medium
approval_gate: true
first_fill_priority: P0
next_action: write_proposal
```

### 62. `banality_alarm_agent`

```yaml
status: container
working_name_ru: Сигнализация банальности
ship_role: parrot
why_needed: Быстро сигналит: банально, пластмасса, методичка, слишком ИИ, потеря мотора.
main_formula: Короткий крик иногда спасает главу быстрее длинной рецензии.
activation_risk: low
approval_gate: true
first_fill_priority: P1
next_action: write_proposal
```

---

## 14. Первое ядро заполнения

Первыми нужно довести до proposal:

1. `agent_registry_librarian`
2. `approval_gate_keeper`
3. `project_state_synchronizer`
4. `checkpoint_compressor_agent`
5. `source_card_builder`
6. `copyright_boundary_guard`
7. `svod_guard`
8. `contextologist_agent`
9. `sergey_interaction_profiler`
10. `author_style_memory_agent`

Это не окончательный список. Сергей может добавлять новых агентов. ChatGPT также может предлагать новых агентов, если видит функциональную дыру, повторяющийся сбой или риск для корабля.

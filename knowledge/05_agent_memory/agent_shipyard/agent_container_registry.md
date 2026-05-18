# Agent Container Registry — Agent Shipyard

Дата фиксации: 2026-05-17
Статус: architecture_map / containers_only / parser_safe_yaml

Этот файл фиксирует архитектуру будущей агентной системы как карту контейнеров и статусов.

Контейнер не означает, что агент уже работает. Контейнер означает: для этой функции зарезервировано место на корабле, понятна роль, первичный риск и следующий шаг.

Текущий режим проекта:

> Агентная верфь: сначала достраиваем корабль, потом возвращаемся к плаванию по книге.

Книгу не продолжаем до отдельного решения Сергея.

## YAML-safety rule

Все контейнеры ниже собраны в один parser-safe YAML-блок. Строковые значения обёрнуты в кавычки, чтобы двоеточия внутри русских описаний не ломали будущий tooling.

Контейнеры не активируют агентов и не меняют маршруты. Для перехода `container → proposal → controlled_activation → optional_layer` требуется отдельное решение.

```yaml
agent_container_registry:
  schema_version: "1.2"
  status: "architecture_map / containers_only / parser_safe_yaml"
  architecture_mode: "Agent Shipyard"
  current_project_mode: "Книга на паузе; сначала достраиваем агентную архитектуру."
  status_legend:
    container: "Место зарезервировано, proposal ещё не написан."
    proposal: "Агент описан, но не активирован."
    controlled_activation: "Подготовлено предложение включения."
    optional_layer: "Агент может применяться как необязательный слой."
    route_element: "Агент включён в конкретный маршрут."
    hard_guardrail: "Жёсткий предохранитель, только через отдельное approval."
  priorities:
    P0: "Каркас верфи; без него остальные агенты будут плодить хаос."
    P1: "Ключевые агенты книги и этики."
    P2: "MVP, контент, продуктовые и исследовательские слои."
    P3: "Вспомогательные и специализированные агенты."
  registry_rules:
    - "Реестр является status map. Если proposal создаётся в PR, статус соответствующего контейнера обновляется в том же PR."
    - "Proposal не означает activation. Для включения агента в работу нужен отдельный controlled activation или route/layer PR."
    - "Peer-to-peer signal не равен решению и не обходит approval Сергея."
  containers:
    - agent_id: "workflow_conductor_agent"
      working_name_ru: "Дирижёр / палубный координатор"
      group: "Управление кораблём"
      status: "proposal"
      ship_role: "navigation"
      why_needed: "Координирует ансамбль агентов: порядок входа, конфликты слоёв и approval-gates."
      main_formula: "Дирижёр не играет за оркестр. Он задаёт порядок входа, силу звучания и момент тишины."
      first_fill_priority: "P0"
      next_action: "controlled_activation"
      proposal_path: "knowledge/05_agent_memory/agent_proposals/workflow_conductor_agent.md"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "agent_registry_librarian"
      working_name_ru: "Библиотекарь агентов"
      group: "Управление кораблём"
      status: "proposal"
      ship_role: "archive"
      why_needed: "Не даёт плодить дубли и хаос в агентной системе."
      main_formula: "Новый агент допустим только тогда, когда у него есть собственная работа."
      first_fill_priority: "P0"
      next_action: "controlled_activation"
      proposal_path: "knowledge/05_agent_memory/agent_proposals/agent_registry_librarian.md"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "approval_gate_keeper"
      working_name_ru: "Сторож approval-шлюза"
      group: "Управление кораблём"
      status: "proposal"
      ship_role: "deck_watch"
      why_needed: "Разделяет +, ++, безопасный шаг и смысловое approval."
      main_formula: "Подтверждение нужно для решения, а не для технической проверки."
      first_fill_priority: "P0"
      next_action: "controlled_activation"
      proposal_path: "knowledge/05_agent_memory/agent_proposals/approval_gate_keeper.md"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "project_state_synchronizer"
      working_name_ru: "Синхронизатор состояния проекта"
      group: "Управление кораблём"
      status: "proposal"
      ship_role: "navigation"
      why_needed: "Удерживает project-state, roadmap, current-state, restart-prompt и review-index в согласии."
      main_formula: "Состояние проекта не должно жить в пяти версиях сразу."
      first_fill_priority: "P0"
      next_action: "controlled_activation"
      proposal_path: "knowledge/05_agent_memory/agent_proposals/project_state_synchronizer.md"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "checkpoint_compressor_agent"
      working_name_ru: "Сжиматель рестарта"
      group: "Управление кораблём"
      status: "proposal"
      ship_role: "signal"
      why_needed: "Делает чатовый restart prompt до 6000 знаков без потери рабочей точки."
      main_formula: "Prompt в чате — не архив, а стартовый ключ."
      first_fill_priority: "P0"
      next_action: "controlled_activation"
      proposal_path: "knowledge/05_agent_memory/agent_proposals/checkpoint_compressor_agent.md"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "source_intake_auditor"
      working_name_ru: "Входной аудитор источников"
      group: "Источники и доказательная дисциплина"
      status: "optional_layer"
      ship_role: "cartographer"
      why_needed: "Проверяет, что источник реально существует, пригоден и имеет ограничения."
      main_formula: "Источник не работает, пока не понятно, что это, где лежит, зачем нужен и чего из него нельзя брать."
      first_fill_priority: "P0"
      next_action: "no_action"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "source_card_builder"
      working_name_ru: "Создатель карточек источников"
      group: "Источники и доказательная дисциплина"
      status: "container"
      ship_role: "archive"
      why_needed: "Создаёт и обновляет карточки источников после аудита."
      main_formula: "Карточка источника — не доказательство, а паспорт применения."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "source_conflict_resolver"
      working_name_ru: "Разборщик конфликтов источников"
      group: "Источники и доказательная дисциплина"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Показывает конфликт между источниками и рамками применения."
      main_formula: "Не все полезные источники можно смешивать без потерь."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "source_dosage_guard"
      working_name_ru: "Дозировщик источников"
      group: "Источники и доказательная дисциплина"
      status: "container"
      ship_role: "medic"
      why_needed: "Не даёт источникам торчать из текста и заменять авторскую книгу пересказом."
      main_formula: "Берём линзу, не чужой голос."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "copyright_boundary_guard"
      working_name_ru: "Страж авторских границ"
      group: "Источники и доказательная дисциплина"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Защищает проект от близкого рерайта, длинных цитат и raw book leaks."
      main_formula: "Источник помогает думать, но не становится нашим текстом."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "citation_integrity_agent"
      working_name_ru: "Страж цитирования"
      group: "Источники и доказательная дисциплина"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Проверяет, действительно ли источник поддерживает утверждение."
      main_formula: "Цитата должна держать утверждение, а не украшать его."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "svod_guard"
      working_name_ru: "Страж Свода"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "hull"
      why_needed: "Проверяет соответствие Своду, точкам выбора, этике и правилам главы."
      main_formula: "Свод задаёт правила. Текст не должен спорить с собственным позвоночником."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "contextologist_agent"
      working_name_ru: "Контекстолог"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Восстанавливает систему проекта, не даёт отвечать с хвоста."
      main_formula: "Сначала карта, потом ход."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "plotnikov_motor_agent"
      working_name_ru: "Плотниковский мотор"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "engine"
      why_needed: "Держит действие, предпринимательский голод и анти-водяной напор."
      main_formula: "Больше действия. Меньше осторожной рефлексии."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "quiet_master_agent"
      working_name_ru: "Тихий Мастер"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "crew"
      why_needed: "Держит спокойную силу, уважение, служение без давления и ясность без крика."
      main_formula: "Сильный голос не обязан повышать громкость."
      notes:
        - "Прототип по качествам — Мастер Йода: лаконичность, глубина, мудрость, служение, спокойная сила, уважение."
        - "Не имитировать речь Йоды и не делать cosplay."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "one_strike_chapter_agent"
      working_name_ru: "Агент одного удара"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "hull"
      why_needed: "Удерживает главу вокруг одного вопроса, развилки и закона."
      main_formula: "Глава без одного удара расползается в лекцию."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "choice_point_designer"
      working_name_ru: "Проектировщик точек выбора"
      group: "Смысловой каркас книги"
      status: "container"
      ship_role: "navigation"
      why_needed: "Переводит объяснения в живые развилки читателя."
      main_formula: "Не книга говорит. Здесь человек выбирает."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "opening_hook_researcher"
      working_name_ru: "Исследователь входного крючка главы"
      group: "Входы в главы и исследовательские крючки"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Подбирает исторические, технические, научные, культурные и бытовые примеры для начала главы."
      main_formula: "Глава начинается не с объяснения темы, а с живого входа, где уже спрятан её главный конфликт."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "opening_relevance_guard"
      working_name_ru: "Страж релевантности входа"
      group: "Входы в главы и исследовательские крючки"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Проверяет, что пример начала держит главный удар главы."
      main_formula: "Красивый вход бесполезен, если он ведёт не в эту главу."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "anti_cliche_editor"
      working_name_ru: "Антиклише-редактор"
      group: "Художественная редактура и стиль"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Ловит штампы, псевдоглубину, рекламную пластмассу и морализаторство."
      main_formula: "Убрать умно звучащее пустое. Оставить точное и живое."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "scene_forge_agent"
      working_name_ru: "Кузнец сцен"
      group: "Художественная редактура и стиль"
      status: "container"
      ship_role: "engine"
      why_needed: "Превращает тезис в сцену, предмет, риск и выбор."
      main_formula: "Сцена не украшает мысль. Сцена её доказывает."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "dialogue_sharpener_agent"
      working_name_ru: "Заточник диалогов"
      group: "Художественная редактура и стиль"
      status: "container"
      ship_role: "crew"
      why_needed: "Делает диалоги живыми, не методическими и не похожими на ИИ."
      main_formula: "Живой человек не разговаривает тезисами из методички."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "style_parrot_agent"
      working_name_ru: "Попугай капитана"
      group: "Художественная редактура и стиль"
      status: "container"
      ship_role: "parrot"
      why_needed: "Коротко сигналит о повторяющихся сбоях: методичка, банальность, пластмасса, потеря мотора."
      main_formula: "Попугай не пишет курс. Он вовремя кричит то, что капитан уже решил не забывать."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "khmelevskaya_optics_agent"
      working_name_ru: "Хмелевская как стилевая оптика"
      group: "Художественная редактура и стиль"
      status: "container"
      ship_role: "crew"
      why_needed: "Добавляет наблюдательность, бытовую точность, иронию и живую нелепость без копирования автора."
      main_formula: "Ирония должна подсветить человека, а не украсть главу."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "ethical_persuasion_guard"
      working_name_ru: "Этический страж влияния"
      group: "Этика влияния, MLM, здоровье"
      status: "optional_layer"
      ship_role: "deck_watch"
      why_needed: "Оставляет огонь убеждения, убирает дым манипуляции."
      main_formula: "Оставить огонь. Убрать дым."
      first_fill_priority: "P0"
      next_action: "no_action"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "mlm_reality_checker"
      working_name_ru: "Проверщик MLM-реальности"
      group: "Этика влияния, MLM, здоровье"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Отличает реальную предпринимательскую возможность от мифа и суеты."
      main_formula: "Возможность проверяется продуктом, действием, экономикой и границами."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "trust_boundary_guard"
      working_name_ru: "Страж доверия"
      group: "Этика влияния, MLM, здоровье"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Проверяет, не превращается ли чужая слабая зона в чей-то доход."
      main_formula: "Чужая слабая зона — не ваш карман."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "offer_integrity_agent"
      working_name_ru: "Проверщик честности оффера"
      group: "Этика влияния, MLM, здоровье"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Проверяет обещания, цену, возвраты, кому подходит или не подходит и первый результат."
      main_formula: "Оффер честен, когда человек понимает цену решения до согласия."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "health_claims_guard"
      working_name_ru: "Страж заявлений о здоровье"
      group: "Этика влияния, MLM, здоровье"
      status: "container"
      ship_role: "medic"
      why_needed: "Не даёт писать медицинские обещания, fits-all claims и замену врача."
      main_formula: "ЗОЖ-коммуникация не имеет права становиться псевдомедициной."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "social_proof_skeptic"
      working_name_ru: "Скептик социального доказательства"
      group: "Этика влияния, MLM, здоровье"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Проверяет цифры, кейсы, проценты, периоды и базу расчёта."
      main_formula: "Цифра без основания — это не доказательство, а декорация."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "socratic_lantern_agent"
      working_name_ru: "Вопрос как фонарь"
      group: "Сократический и КПТ-блок"
      status: "optional_layer"
      ship_role: "signal"
      why_needed: "Проверяет, помогает ли вопрос видеть яснее или ведёт на поводке."
      main_formula: "Вопрос — это фонарь, а не поводок."
      first_fill_priority: "P0"
      next_action: "no_action"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "socratic_dialogue_designer"
      working_name_ru: "Проектировщик сократического диалога"
      group: "Сократический и КПТ-блок"
      status: "container"
      ship_role: "signal"
      why_needed: "Строит последовательность вопросов для открытия, а не давления."
      main_formula: "Хороший вопрос не тянет ответ, а открывает поле."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "question_pressure_detector"
      working_name_ru: "Детектор вопроса-поводка"
      group: "Сократический и КПТ-блок"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Ловит псевдооткрытые вопросы, ведущие к заранее нужному решению."
      main_formula: "Если вопрос оставляет только один удобный выход, это уже не фонарь."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "cbt_thought_check_agent"
      working_name_ru: "КПТ-проверка мысли"
      group: "Сократический и КПТ-блок"
      status: "optional_layer"
      ship_role: "medic"
      why_needed: "Помогает отличать факт, догадку, эмоцию и вывод."
      main_formula: "Мысль — это не приговор. Это гипотеза, которую можно проверить."
      notes:
        - "Допустим лёгкий юмор, но не клоунада."
        - "Не терапия, не диагностика, не инструмент продаж."
      first_fill_priority: "P0"
      next_action: "no_action"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "cognitive_distortion_spotter"
      working_name_ru: "Ловец искажений мышления"
      group: "Сократический и КПТ-блок"
      status: "container"
      ship_role: "medic"
      why_needed: "Выявляет катастрофизацию, чтение мыслей, обобщения и другие искажения в сценах и маршрутах."
      main_formula: "Ошибка мышления не враг человека. Это место проверки."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "belief_to_action_agent"
      working_name_ru: "Переводчик убеждения в действие"
      group: "Сократический и КПТ-блок"
      status: "container"
      ship_role: "medic"
      why_needed: "Показывает, как мысль превращается в поведение: давление, избегание, суету, честный шаг."
      main_formula: "Поведение часто начинается не с действия, а с непроверенной мысли."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "emotion_compass_agent"
      working_name_ru: "Компас эмоций"
      group: "Эмоции, отношения, зрелость"
      status: "container"
      ship_role: "medic"
      why_needed: "Видит эмоцию под реакцией, не превращая главу в терапию."
      main_formula: "Эмоция не командует кораблём, но показывает, где поднялся ветер."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "drama_triangle_detector"
      working_name_ru: "Детектор треугольника драмы"
      group: "Эмоции, отношения, зрелость"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Ловит роли жертвы, спасателя и преследователя в команде, продажах и наставничестве."
      main_formula: "Спасение без уважения к свободе быстро становится давлением."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "relationship_boundary_agent"
      working_name_ru: "Агент границ отношений"
      group: "Эмоции, отношения, зрелость"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Защищает дружбу, семью, духовную сферу и доверие от бизнес-утилитарности."
      main_formula: "Близость — не короткий путь к сделке."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "family_safety_guard"
      working_name_ru: "Семейный предохранитель"
      group: "Эмоции, отношения, зрелость"
      status: "container"
      ship_role: "medic"
      why_needed: "Не даёт маршруту новичка превращать семью в ресурс бизнеса."
      main_formula: "Семья не обязана оплачивать чужую скорость."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "psychological_maturity_guard"
      working_name_ru: "Страж психологической зрелости"
      group: "Эмоции, отношения, зрелость"
      status: "container"
      ship_role: "medic"
      why_needed: "Переводит инфантильные игровые формы на взрослый психологический язык и подключает профильные психологические агенты."
      main_formula: "Игра может помогать взрослеть, но не должна уводить в детскость."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "mvp_method_architect"
      working_name_ru: "Архитектор MVP-методологии"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "hull"
      why_needed: "Связывает книгу, брошюру, тренажёр, клиента, наставника и ИИ-помощников."
      main_formula: "Книга даёт карту. Брошюра дорогу. Тренажёр практику выбора."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "gameful_path_designer"
      working_name_ru: "Игровой проектировщик пути"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "engine"
      why_needed: "Проектирует квесты, союзников, усилители, врагов и прогресс без инфантильности."
      main_formula: "Игра нужна не для украшения пути, а для видимого роста."
      notes:
        - "Если форма становится детской, переводит её на язык психологии через psychological_maturity_guard, cbt_thought_check_agent или emotion_compass_agent."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "novice_route_designer"
      working_name_ru: "Проектировщик маршрута новичка"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "navigation"
      why_needed: "Проектирует путь 12–18 месяцев: этапы, навыки, продуктовый опыт, разговоры, сервис, самостоятельность."
      main_formula: "Новичку нужна не мотивационная буря, а дорога с берегами."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "mentor_mode_designer"
      working_name_ru: "Проектировщик наставнического режима"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "navigation"
      why_needed: "Проектирует кабинет наставника: сопровождать без давления и контроля."
      main_formula: "Наставник помогает идти, но не живёт путь за новичка."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "quest_integrity_guard"
      working_name_ru: "Страж честности квестов"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Не даёт квестам стать манипулятивными KPI."
      main_formula: "Квест должен выращивать навык, а не маскировать давление."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "progress_metrics_agent"
      working_name_ru: "Агент метрик роста"
      group: "MVP, маршрут новичка, геймификация"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Отличает полезные метрики роста от фальшивых цифр активности."
      main_formula: "Не всё, что легко посчитать, показывает рост."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "developer_ready_architect"
      working_name_ru: "Архитектор developer-ready требований"
      group: "Техническая и продуктовая архитектура"
      status: "container"
      ship_role: "hull"
      why_needed: "Переводит идеи MVP в сущности, роли, экраны, данные, API и ограничения."
      main_formula: "Идея становится продуктом только после перевода в требования."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "data_privacy_guard"
      working_name_ru: "Страж данных и приватности"
      group: "Техническая и продуктовая архитектура"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Защищает список знакомых, личные истории, CRM-заметки, здоровье и партнёрские данные."
      main_formula: "Доверие к продукту начинается с того, какие данные он не забирает зря."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "localization_guard"
      working_name_ru: "Страж локализации"
      group: "Техническая и продуктовая архитектура"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Проверяет переносимость книги и MVP на европейские языки и культуры."
      main_formula: "Переводит не слова, а работающий смысл."
      first_fill_priority: "P3"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "partner_product_intake_agent"
      working_name_ru: "Аудитор партнёрских продуктов"
      group: "Техническая и продуктовая архитектура"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Проверяет цифровые продукты партнёров, условия, возвраты, данные и этику промо."
      main_formula: "Партнёрский продукт входит в систему только после проверки роли и границ."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "monetization_ethics_agent"
      working_name_ru: "Этический монетизатор внимания"
      group: "Техническая и продуктовая архитектура"
      status: "container"
      ship_role: "deck_watch"
      why_needed: "Следит, чтобы монетизация аудитории не ломала доверие книги и MVP."
      main_formula: "Внимание можно монетизировать. Доверие нельзя сжигать."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "fact_risk_checker"
      working_name_ru: "Проверщик фактического риска"
      group: "Факты, ссылки, актуальность"
      status: "container"
      ship_role: "cartographer"
      why_needed: "Проверяет медицинские, юридические, финансовые, рыночные и технические утверждения."
      main_formula: "Чем выше цена ошибки, тем меньше права на память."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "high"
      approval_gate: true

    - agent_id: "link_verifier_agent"
      working_name_ru: "Проверщик ссылок"
      group: "Факты, ссылки, актуальность"
      status: "container"
      ship_role: "signal"
      why_needed: "Проверяет, что ссылки ведут туда, куда заявлено."
      main_formula: "Ссылка — это обещание маршрута. Она должна вести по адресу."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "freshness_checker_agent"
      working_name_ru: "Проверщик актуальности"
      group: "Факты, ссылки, актуальность"
      status: "container"
      ship_role: "signal"
      why_needed: "Определяет, когда факт мог устареть и нужен свежий поиск."
      main_formula: "Свежесть не украшение, а условие честного ответа."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "telegram_voice_editor"
      working_name_ru: "Редактор Telegram-голоса"
      group: "Контент и публичная коммуникация"
      status: "container"
      ship_role: "crew"
      why_needed: "Делает посты живыми, менее похожими на ИИ, без потери смысла."
      main_formula: "Живой текст не обязан быть неряшливым."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "polarization_designer"
      working_name_ru: "Дизайнер поляризации"
      group: "Контент и публичная коммуникация"
      status: "container"
      ship_role: "signal"
      why_needed: "Делает заголовки и карусели спорными, но не грязными."
      main_formula: "Поляризация должна обнажать конфликт, а не торговать грязью."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "reels_hook_agent"
      working_name_ru: "Агент крючков Reels"
      group: "Контент и публичная коммуникация"
      status: "container"
      ship_role: "signal"
      why_needed: "Создаёт первые секунды, заголовки и вход в конфликт короткого видео."
      main_formula: "Крючок должен открыть конфликт быстрее, чем зритель свайпнет."
      first_fill_priority: "P3"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "sales_post_truth_editor"
      working_name_ru: "Редактор продающего поста без дыма"
      group: "Контент и публичная коммуникация"
      status: "container"
      ship_role: "crew"
      why_needed: "Усиливает продающий текст, не возвращая манипуляцию."
      main_formula: "Продавать можно честно. Скучно — не обязательно."
      first_fill_priority: "P2"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "sergey_interaction_profiler"
      working_name_ru: "Профиль взаимодействия с Сергеем"
      group: "Профиль взаимодействия и авторская память"
      status: "container"
      ship_role: "navigation"
      why_needed: "Фиксирует стиль работы: выбор перед большим ходом, идеи перед техничкой, честная обратная связь, отсутствие поддакивания."
      main_formula: "Сначала понять способ работы капитана, потом поднимать паруса."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "author_style_memory_agent"
      working_name_ru: "Память авторского стиля"
      group: "Профиль взаимодействия и авторская память"
      status: "container"
      ship_role: "archive"
      why_needed: "Хранит вкус текста: плотность, ритм, дерзость, паузы, любимые формулы, Плотниковский голод."
      main_formula: "Стиль — это не набор слов, а способ думать на странице."
      first_fill_priority: "P0"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true

    - agent_id: "banality_alarm_agent"
      working_name_ru: "Сигнализация банальности"
      group: "Профиль взаимодействия и авторская память"
      status: "container"
      ship_role: "parrot"
      why_needed: "Быстро сигналит: банально, пластмасса, методичка, слишком ИИ, потеря мотора."
      main_formula: "Короткий крик иногда спасает главу быстрее длинной рецензии."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "low"
      approval_gate: true

    - agent_id: "materials_map_librarian"
      working_name_ru: "Библиотекарь карты материалов"
      group: "Материалы и исследовательская сеть"
      status: "container"
      ship_role: "archive"
      why_needed: "Ведёт карту связей между источниками, заметками, главами, агентами, MVP-модулями и рисками."
      main_formula: "Материал работает не один, а в сети связей."
      first_fill_priority: "P1"
      next_action: "write_proposal"
      activation_risk: "medium"
      approval_gate: true
```

## Первое ядро заполнения

Следующими нужно довести до proposal:

1. `checkpoint_compressor_agent`
2. `source_card_builder`
3. `copyright_boundary_guard`
4. `svod_guard`
5. `contextologist_agent`
6. `sergey_interaction_profiler`
7. `author_style_memory_agent`

`workflow_conductor_agent`, `agent_registry_librarian`, `approval_gate_keeper` и `project_state_synchronizer` уже переведены из `container` в `proposal`, но не активированы.

Этот список не окончательный. Сергей может добавлять новых агентов. ChatGPT также может предлагать новых агентов, если видит функциональную дыру, повторяющийся сбой или риск для корабля.

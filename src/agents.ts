import { loadProjectState } from "./project-state.js";
import { getSourceCardsByIds, getSourceIdsForTask, getSourceRegistryVersion } from "./source-registry.js";
import type { Agent, AgentId, AgentResult, ContextPack, RoutingContext, SvodCheckResult, SynchronizationMap, TaskType } from "./types.js";

const normalize = (value: string): string => value.toLocaleLowerCase("ru-RU");
const wordBoundary = "[^\\p{L}\\p{N}_]";

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasWord(text: string, word: string): boolean {
  return new RegExp(`(^|${wordBoundary})${escapeRegex(word)}(${wordBoundary}|$)`, "u").test(text);
}

function hasMvpSignal(text: string): boolean {
  return (
    text.includes("mvp") ||
    text.includes("приложен") ||
    text.includes("маршрут новичка") ||
    text.includes("продуктовая архитектура") ||
    text.includes("saas") ||
    text.includes("тренажёр") ||
    text.includes("тренажер")
  );
}

function hasSocialPostSignal(text: string): boolean {
  return (
    hasWord(text, "пост") ||
    hasWord(text, "поста") ||
    text.includes("пост для telegram") ||
    text.includes("telegram-пост") ||
    text.includes("телеграм-пост") ||
    text.includes("соцсет") ||
    text.includes("reels") ||
    text.includes("рилс") ||
    text.includes("карусель") ||
    hasWord(text, "публикация") ||
    text.includes("публикаци") ||
    hasWord(text, "комментар")
  );
}

function hasProjectResumeSignal(text: string): boolean {
  return (
    text.includes("resume project") ||
    text.includes("project resume") ||
    text.includes("восстанови проект") ||
    text.includes("восстановить проект") ||
    text.includes("восстановление проекта") ||
    text.includes("возобнови проект") ||
    text.includes("продолжить проект") ||
    text.includes("новый старт проекта")
  );
}

export function classifyTask(input: string): TaskType {
  const text = normalize(input);

  if (hasProjectResumeSignal(text)) {
    return "project_resume";
  }

  if (text.includes("глав") || text.includes("книг") || text.includes("драматург") || text.includes("плотников")) {
    return "chapter_editing";
  }

  if (hasMvpSignal(text)) {
    return "mvp_product";
  }

  if (text.includes("навык") || text.includes("мастерств") || text.includes("маршрут мастерства")) {
    return "skill_development";
  }

  if (hasSocialPostSignal(text)) {
    return "social_post";
  }

  return "general";
}

export function buildContextPack(taskType: TaskType): ContextPack {
  const relevantSourceIds = getSourceIdsForTask(taskType);
  const sourceCards = getSourceCardsByIds(relevantSourceIds);
  const common = {
    taskType,
    registryVersion: getSourceRegistryVersion(),
    relevantSourceIds,
    sourceCards,
    activeRules: [
      "книга не должна быть пересказом Плотникова",
      "читатель считается новичком",
      "служебный язык не должен попадать в читательский текст",
      "человек не должен превращаться в лид, ресурс, чек или функцию плана",
      "этика не должна съедать действие",
      "предпринимательский напор не должен съедать человека"
    ],
    sourcePriority: [
      "knowledge/00_manifest/source-priority.md",
      "knowledge/02_project_rules",
      "knowledge/04_processed",
      "knowledge/05_agent_memory"
    ],
    forbiddenLeaks: [
      "не переносить служебный язык в читательский текст",
      "не делать пересказ Плотникова",
      "не смешивать книгу, брошюру, MVP и внутренние документы"
    ],
    contextDelta: ["mock_context_pack_v0.3", `task_type:${taskType}`]
  };

  if (taskType === "chapter_editing") {
    return {
      ...common,
      relevantKnowledgeFolders: [
        "knowledge/02_project_rules/svod",
        "knowledge/02_project_rules/sync_packages",
        "knowledge/04_processed/plotnikov_map",
        "knowledge/05_agent_memory/context_delta"
      ],
      requiredAgents: [
        "svod_guard",
        "synchronization_mapper",
        "chapter_designer",
        "plotnikov_motor",
        "anti_cliche_editor"
      ]
    };
  }

  if (taskType === "mvp_product") {
    return {
      ...common,
      relevantKnowledgeFolders: [
        "knowledge/02_project_rules/mvp",
        "knowledge/05_agent_memory/mvp_delta",
        "knowledge/04_processed/context_packs"
      ],
      requiredAgents: ["svod_guard", "mvp_method_architect", "fact_risk_checker", "ethics_guard"],
      contextDelta: ["mock_context_pack_v0.3", "task_type:mvp_product", "scope:mvp_route_for_newcomer"]
    };
  }

  return {
    ...common,
    relevantKnowledgeFolders: ["knowledge/02_project_rules", "knowledge/05_agent_memory/context_delta"],
    requiredAgents: ["svod_guard", "fact_risk_checker", "ethics_guard"]
  };
}

function hasPlotnikovRetellingViolation(text: string): boolean {
  const mentionsPlotnikov = text.includes("плотников");
  const asksForRetelling = text.includes("перескаж") || text.includes("пересказ");
  const asksForUnsafeAdaptation = text.includes("адаптируй") && text.includes("как") && text.includes("глав");
  const chapterContext =
    text.includes("глав") ||
    text.includes("нашу") ||
    text.includes("нашей") ||
    text.includes("наша") ||
    text.includes("нашeй");

  return mentionsPlotnikov && chapterContext && (asksForRetelling || asksForUnsafeAdaptation);
}

function buildSvodCheck(input: string): SvodCheckResult {
  const text = normalize(input);
  const riskyFragments: string[] = [];
  const violatedRules: string[] = [];
  const requiredRewrites: string[] = [];
  const whatToRemove: string[] = [];

  if (hasPlotnikovRetellingViolation(text)) {
    violatedRules.push("книга не должна быть пересказом Плотникова");
    riskyFragments.push(input);
    requiredRewrites.push("Сформулировать самостоятельную главу: сохранить только разрешённые принципы и драматургическую функцию, без пересказа источника.");
    whatToRemove.push("прямой пересказ Плотникова под видом собственной главы");
  }

  return {
    status: violatedRules.length > 0 ? "needs_revision" : "passed",
    violatedRules,
    riskyFragments,
    requiredRewrites,
    whatToPreserve: [
      "уважение к читателю-новичку",
      "самостоятельную авторскую рамку проекта",
      "действие без манипуляции и обезличивания"
    ],
    whatToRemove,
    svodDelta: violatedRules.length > 0 ? ["svod_warning:plotnikov_retelling_requested"] : ["svod_passed:no_explicit_violations"]
  };
}

function hasSynchronizationSignal(input: string): boolean {
  const text = normalize(input);
  return text.includes("глав") || text.includes("книг") || text.includes("плотников") || text.includes("драматург");
}

function buildSynchronizationMap(context: RoutingContext): SynchronizationMap {
  const hasSignal = hasSynchronizationSignal(context.input) || context.taskType === "chapter_editing";

  return {
    sourceBook: hasSignal ? "Алексей Плотников — Разумный сетевой маркетинг" : "",
    sourceChapter: null,
    sourcePages: null,
    targetChapter: context.taskType === "chapter_editing" ? "mock_target_chapter" : null,
    integrationStatus: hasSignal ? "mock_sync_required" : "mock_sync_not_required",
    plotnikovElementsToPreserve: hasSignal
      ? ["структурную роль напряжения", "практическую ориентацию без пересказа", "ясность для новичка"]
      : [],
    synthesisLayers: hasSignal
      ? [
          "Каленч",
          "Гербер",
          "Бек",
          "McGonigal",
          "Сократовский подход",
          "защищённое пространство",
          "Усилитель идеи",
          "Хмелевская"
        ]
      : [],
    mandatoryFormulas: hasSignal
      ? ["не пересказывать источник", "отделять читательский текст от служебной карты", "сохранять человеческий масштаб"]
      : [],
    nextWorkingPoint: hasSignal
      ? "Требуется актуальная карта синхронизации из knowledge/02_project_rules/sync_packages или knowledge/04_processed/plotnikov_map."
      : "Синхронизация с картой Плотникова не требуется для текущего mock-маршрута.",
    syncDelta: hasSignal ? ["sync_required:plotnikov_map_pending"] : ["sync_not_required"]
  };
}

function collectMatches(text: string, phrases: string[]): string[] {
  return phrases.filter((phrase) => text.includes(phrase));
}

function countRegexMatches(text: string, regex: RegExp): number {
  return text.match(regex)?.length ?? 0;
}

function buildAntiClicheDiagnostics(input: string): Record<string, unknown> {
  const text = normalize(input);
  const tiredPhrases = collectMatches(text, [
    "в жизни так не работает",
    "она будет учить видеть человека",
    "человек важнее сделки",
    "не мотивационное выступление",
    "карта не идёт ногами",
    "карта не идет ногами",
    "скепсис не враг",
    "взрослый вход в любое дело",
    "рядом с деньгами всегда стоит человек"
  ]);
  const moralAbstractions = collectMatches(text, ["честность", "доверие", "совесть", "границы", "ответственность", "человек"]);
  const contrastPatternCount = countRegexMatches(text, /(^|[.!?\n]\s*)не\s+[^.!?\n]{1,100}\s+а\s+/giu);
  const marketingTerms = collectMatches(text, ["воронк", "лид", "конверси", "скрипт"]);
  const isReaderFacingChapter = text.includes("вступление") || text.includes("перед входом") || text.includes("глав");
  const registerRisks = marketingTerms
    .filter((term) => isReaderFacingChapter || term !== "скрипт")
    .map((term) => ({
      term,
      risk: "Сильная фраза может принести преждевременный маркетинговый регистр в читательский текст."
    }));
  const sceneReplacementSuggestions = [
    "Заменять абстрактную мораль на ситуацию: сообщение, звонок, список знакомых, отказ, молчание о рисках, разговор с близким.",
    "Проверять, есть ли рядом с ценностным словом конкретная цена выбора или действие.",
    "Сохранять силу формулы только там, где она не вытесняет живую сцену."
  ];
  const approvedReplacements = [
    {
      weak: "карта не идёт ногами",
      stronger: "Карта покажет маршрут, но не проживёт за вас неловкий разговор.",
      reason: "Сохраняет образ карты, но возвращает его в действие и цену."
    },
    {
      weak: "рядом с деньгами всегда стоит человек",
      stronger: "Где деньги появляются через отношения, там нельзя делать вид, что отношения — расходный материал.",
      reason: "Убирает лозунг и показывает деловой риск."
    }
  ];
  const riskyReplacements = [
    {
      phrase: "человек не обязан быть удобным для вашей воронки",
      risk: "Фраза точная и сильная, но для вступления может слишком рано втянуть читателя в маркетинговую лексику.",
      saferUse: "Оставить для внутреннего редакторского слоя или методической главы, а во вступлении заменить на бытовую сцену."
    }
  ];

  return {
    trainingCase: "chapter_00_preface_case_001",
    cleaned: true,
    detectedCliches: tiredPhrases,
    moralAbstractions,
    overusedContrastPattern: {
      detected: contrastPatternCount >= 2,
      count: contrastPatternCount,
      rule: "Повтор конструкции 'не это, а то' создаёт ясность, но при частом повторе превращает текст в проповедь."
    },
    sceneReplacementSuggestions,
    registerRisks,
    approvedReplacements,
    riskyReplacements,
    decisionRule: "Не всякая сильная фраза годится для текущей сцены.",
    recommendedAction:
      tiredPhrases.length > 0 || moralAbstractions.length >= 3 || contrastPatternCount >= 2 || registerRisks.length > 0
        ? "needs_targeted_revision"
        : "pass"
  };
}

function result(agentId: AgentId, message: string, diagnostics: Record<string, unknown> = {}): AgentResult {
  return {
    agentId,
    status: "ready",
    message,
    diagnostics
  };
}

export const agents: Record<AgentId, Agent> = {
  task_classifier: {
    id: "task_classifier",
    run(context) {
      context.taskType = classifyTask(context.input);
      context.diagnostics.classifier = { taskType: context.taskType };
      return result("task_classifier", `Task classified as ${context.taskType}.`, { taskType: context.taskType });
    }
  },
  fact_risk_checker: {
    id: "fact_risk_checker",
    run(context) {
      const text = normalize(context.input);
      const blocksDiabetesClaim = text.includes("лечит диабет") || (text.includes("диабет") && text.includes("лечит"));

      if (blocksDiabetesClaim) {
        context.riskLevel = "high";
        return {
          agentId: "fact_risk_checker",
          status: "blocked",
          message: "Blocked: unsupported medical treatment claim about diabetes.",
          diagnostics: { rule: "unsupported_medical_claim", matched: "лечит диабет" }
        };
      }

      context.diagnostics.factRisk = { checked: true };
      return result("fact_risk_checker", "No blocking factual risk found.", { checked: true });
    }
  },
  ethics_guard: {
    id: "ethics_guard",
    run(context) {
      const text = normalize(context.input);
      const blocksManipulativeScarcity =
        text.includes("последний шанс") ||
        (text.includes("если не купит сейчас") && (text.includes("упустит") || text.includes("потеряет")));

      if (blocksManipulativeScarcity) {
        context.riskLevel = "high";
        return {
          agentId: "ethics_guard",
          status: "blocked",
          message: "Blocked: manipulative urgency/scarcity framing.",
          diagnostics: { rule: "manipulative_scarcity", matched: "последний шанс" }
        };
      }

      context.diagnostics.ethics = { checked: true };
      return result("ethics_guard", "No blocking ethics issue found.", { checked: true });
    }
  },
  response_composer: {
    id: "response_composer",
    run(context) {
      context.finalText = composeResponse(context);
      return result("response_composer", "Response composed.", { finalTextLength: context.finalText.length });
    }
  },
  contextologist: {
    id: "contextologist",
    run(context) {
      const contextPack = buildContextPack(context.taskType);
      context.diagnostics.contextPack = contextPack;
      return result("contextologist", "Context requirements mapped.", { contextPack });
    }
  },
  svod_guard: {
    id: "svod_guard",
    run(context) {
      const svodCheck = buildSvodCheck(context.input);
      context.diagnostics.svodCheck = svodCheck;

      if (svodCheck.status === "needs_revision") {
        return {
          agentId: "svod_guard",
          status: "needs_revision",
          message: "SVOD check requires revision before ordinary ready output.",
          diagnostics: { svodCheck }
        };
      }

      if (svodCheck.status === "blocked") {
        return {
          agentId: "svod_guard",
          status: "blocked",
          message: "SVOD check blocked the request.",
          diagnostics: { svodCheck }
        };
      }

      return result("svod_guard", "SVOD consistency checked.", { svodCheck });
    }
  },
  synchronization_mapper: {
    id: "synchronization_mapper",
    run(context) {
      const synchronizationMap = buildSynchronizationMap(context);
      context.diagnostics.synchronizationMap = synchronizationMap;
      return result("synchronization_mapper", "Synchronization points mapped.", { synchronizationMap });
    }
  },
  update_packager: {
    id: "update_packager",
    run() {
      return result("update_packager", "Update package prepared.");
    }
  },
  chapter_designer: {
    id: "chapter_designer",
    run(context) {
      context.diagnostics.chapterDesign = { dramaturgyPass: true };
      return result("chapter_designer", "Chapter design pass completed.");
    }
  },
  plotnikov_motor: {
    id: "plotnikov_motor",
    run(context) {
      context.diagnostics.plotnikovMotor = { tensionAdded: true };
      return result("plotnikov_motor", "Dramaturgical engine pass completed.");
    }
  },
  anti_cliche_editor: {
    id: "anti_cliche_editor",
    run(context) {
      const antiCliche = buildAntiClicheDiagnostics(context.input);
      context.diagnostics.antiCliche = antiCliche;
      return result("anti_cliche_editor", "Anti-cliche diagnostics completed.", { antiCliche });
    }
  },
  mvp_method_architect: {
    id: "mvp_method_architect",
    run(context) {
      context.diagnostics.mvp = { routeDrafted: true };
      return result("mvp_method_architect", "MVP method architecture drafted.");
    }
  },
  mastery_tracker_agent: {
    id: "mastery_tracker_agent",
    run(context) {
      context.diagnostics.mastery = { progressionMapped: true };
      return result("mastery_tracker_agent", "Mastery route mapped.");
    }
  },
  project_resume_agent: {
    id: "project_resume_agent",
    run(context) {
      const projectResume = loadProjectState();
      context.diagnostics.projectResume = projectResume;
      return result("project_resume_agent", "Project resume protocol loaded.", { projectResume });
    }
  }
};

function composeResponse(context: RoutingContext): string {
  switch (context.taskType) {
    case "chapter_editing":
      return "Готов маршрут редактуры главы: уточнить контекст, проверить свод, синхронизировать события, усилить драматургию, убрать клише и собрать чистовую редакторскую выдачу.";
    case "social_post":
      return "Готов безопасный маршрут для социального поста: проверить фактические риски, этику, убрать клише и собрать финальный текст без неподтверждённых обещаний.";
    case "mvp_product":
      return "Готов MVP-маршрут: определить контекст новичка, проверить ограничения, собрать методическую архитектуру, оценить риски и подготовить следующий продуктовый шаг.";
    case "skill_development":
      return "Готов маршрут мастерства: разложить навык на уровни, определить практики, контрольные точки прогресса, риски и формат устойчивого развития.";
    case "project_resume":
      return "Готов протокол восстановления проекта: смотри diagnostics.projectResume для версии, последнего PR, активных решений, следующего действия и важных путей.";
    default:
      return "Готов базовый маршрут обработки запроса.";
  }
}

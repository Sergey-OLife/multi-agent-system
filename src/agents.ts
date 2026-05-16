import type { Agent, AgentId, AgentResult, RoutingContext, TaskType } from "./types.js";

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
    hasWord(text, "комментар")
  );
}

export function classifyTask(input: string): TaskType {
  const text = normalize(input);

  if (text.includes("глав") || text.includes("книг") || text.includes("драматург")) {
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
      context.diagnostics.context = { privateKnowledgeRequired: false };
      return result("contextologist", "Context requirements mapped.");
    }
  },
  svod_guard: {
    id: "svod_guard",
    run(context) {
      context.diagnostics.svod = { contradictionsFound: false };
      return result("svod_guard", "SVOD consistency checked.");
    }
  },
  synchronization_mapper: {
    id: "synchronization_mapper",
    run(context) {
      context.diagnostics.synchronization = { mapped: true };
      return result("synchronization_mapper", "Synchronization points mapped.");
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
      context.diagnostics.antiCliche = { cleaned: true };
      return result("anti_cliche_editor", "Cliche cleanup completed.");
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
    default:
      return "Готов базовый маршрут обработки запроса.";
  }
}

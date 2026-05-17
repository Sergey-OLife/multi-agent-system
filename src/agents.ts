import { buildAntiClicheDiagnostics, buildSvodCheck, buildSynchronizationMap } from "./diagnostics/index.js";
import { classifyTask, normalize } from "./engine/index.js";
import { buildContextPack } from "./orchestration/index.js";
import { loadProjectState } from "./project-state.js";
import type { Agent, AgentId, AgentResult, RoutingContext } from "./domain/index.js";

export { classifyTask } from "./engine/index.js";
export { buildContextPack } from "./orchestration/index.js";

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

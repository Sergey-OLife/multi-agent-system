import { agents, classifyTask } from "./agents.js";
import type { AgentId, AgentResult, FinalResult, FinalStatus, RiskLevel, RoutingContext, TaskType } from "./types.js";

export const routes: Partial<Record<TaskType, AgentId[]>> = {
  chapter_editing: [
    "task_classifier",
    "contextologist",
    "svod_guard",
    "synchronization_mapper",
    "chapter_designer",
    "plotnikov_motor",
    "anti_cliche_editor",
    "ethics_guard",
    "response_composer"
  ],
  social_post: ["task_classifier", "fact_risk_checker", "ethics_guard", "anti_cliche_editor", "response_composer"],
  mvp_product: [
    "task_classifier",
    "contextologist",
    "svod_guard",
    "mvp_method_architect",
    "fact_risk_checker",
    "ethics_guard",
    "response_composer"
  ],
  skill_development: [
    "task_classifier",
    "mastery_tracker_agent",
    "fact_risk_checker",
    "ethics_guard",
    "response_composer"
  ],
  general: ["task_classifier", "ethics_guard", "response_composer"]
};

export function routeRequest(input: string): FinalResult {
  const initialTaskType = classifyTask(input);
  const context: RoutingContext = {
    input,
    taskType: initialTaskType,
    riskLevel: defaultRiskLevel(initialTaskType),
    finalText: "",
    diagnostics: {}
  };

  const route = routes[initialTaskType] ?? routes.general ?? ["task_classifier", "response_composer"];
  const agentResults: AgentResult[] = [];
  const usedAgents: AgentId[] = [];
  const blockedBy: AgentId[] = [];
  const revisionWarnings: AgentResult[] = [];

  for (const agentId of route) {
    const agentResult = agents[agentId].run(context);
    agentResults.push(agentResult);
    usedAgents.push(agentId);

    if (agentResult.status === "blocked") {
      blockedBy.push(agentId);
      return {
        status: "blocked",
        taskType: context.taskType,
        riskLevel: context.riskLevel,
        usedAgents,
        blockedBy,
        finalText: "",
        diagnostics: {
          ...context.diagnostics,
          blockedReason: agentResult.message,
          blockedRule: agentResult.diagnostics
        },
        agentResults
      };
    }

    if (agentResult.status === "needs_revision") {
      revisionWarnings.push(agentResult);
    }
  }

  const finalStatus: FinalStatus = revisionWarnings.length > 0 ? "needs_revision" : "ready";

  return {
    status: finalStatus,
    taskType: context.taskType,
    riskLevel: context.riskLevel,
    usedAgents,
    blockedBy,
    finalText: context.finalText,
    diagnostics: {
      ...context.diagnostics,
      ...(revisionWarnings.length > 0
        ? { revisionWarnings: revisionWarnings.map((warning) => ({ agentId: warning.agentId, message: warning.message })) }
        : {})
    },
    agentResults
  };
}

function defaultRiskLevel(taskType: TaskType): RiskLevel {
  return taskType === "social_post" ? "medium" : "low";
}

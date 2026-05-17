import type { Agent, AgentId, AgentResult, FinalResult, FinalStatus, RiskLevel, RoutingContext, TaskType } from "../domain/types.js";
import { classifyTask } from "./classify-task.js";
import { routes } from "./routes.js";

export function routeRequest(input: string, agentRegistry: Record<AgentId, Agent>): FinalResult {
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
    const agentResult = agentRegistry[agentId].run(context);
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

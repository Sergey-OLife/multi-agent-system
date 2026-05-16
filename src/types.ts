export type TaskType =
  | "chapter_editing"
  | "social_post"
  | "native_comment"
  | "mvp_product"
  | "idea_stress_test"
  | "strategy"
  | "technical_specification"
  | "skill_development"
  | "general";

export type RiskLevel = "low" | "medium" | "high";
export type FinalStatus = "ready" | "needs_revision" | "blocked" | "completed";

export type AgentId =
  | "task_classifier"
  | "fact_risk_checker"
  | "ethics_guard"
  | "response_composer"
  | "contextologist"
  | "svod_guard"
  | "synchronization_mapper"
  | "update_packager"
  | "chapter_designer"
  | "plotnikov_motor"
  | "anti_cliche_editor"
  | "mvp_method_architect"
  | "mastery_tracker_agent";

export interface ContextPack {
  taskType: TaskType;
  relevantKnowledgeFolders: string[];
  activeRules: string[];
  sourcePriority: string[];
  requiredAgents: AgentId[];
  forbiddenLeaks: string[];
  contextDelta: string[];
}

export interface SvodCheckResult {
  status: "passed" | "needs_revision" | "blocked";
  violatedRules: string[];
  riskyFragments: string[];
  requiredRewrites: string[];
  whatToPreserve: string[];
  whatToRemove: string[];
  svodDelta: string[];
}

export interface SynchronizationMap {
  sourceBook: string;
  sourceChapter: string | null;
  sourcePages: string | null;
  targetChapter: string | null;
  integrationStatus: string;
  plotnikovElementsToPreserve: string[];
  synthesisLayers: string[];
  mandatoryFormulas: string[];
  nextWorkingPoint: string;
  syncDelta: string[];
}

export interface AgentResult {
  agentId: AgentId;
  status: FinalStatus;
  message: string;
  diagnostics?: Record<string, unknown>;
}

export interface FinalResult {
  status: FinalStatus;
  taskType: TaskType;
  riskLevel: RiskLevel;
  usedAgents: AgentId[];
  blockedBy: AgentId[];
  finalText: string;
  diagnostics: Record<string, unknown>;
  agentResults: AgentResult[];
}

export interface RoutingContext {
  input: string;
  taskType: TaskType;
  riskLevel: RiskLevel;
  finalText: string;
  diagnostics: Record<string, unknown>;
}

export interface Agent {
  id: AgentId;
  run(context: RoutingContext): AgentResult;
}

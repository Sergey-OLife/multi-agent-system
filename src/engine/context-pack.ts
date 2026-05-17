import { getSourceCardsByIds, getSourceIdsForTask, getSourceRegistryVersion } from "../source-registry.js";
import type { ContextPack, TaskType } from "../types.js";

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

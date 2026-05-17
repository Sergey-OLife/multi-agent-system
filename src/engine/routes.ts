import type { AgentId, TaskType } from "../domain/types.js";

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
  social_post: [
    "task_classifier",
    "contextologist",
    "fact_risk_checker",
    "ethics_guard",
    "anti_cliche_editor",
    "response_composer"
  ],
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
    "contextologist",
    "mastery_tracker_agent",
    "fact_risk_checker",
    "ethics_guard",
    "response_composer"
  ],
  project_resume: ["task_classifier", "project_resume_agent", "response_composer"],
  general: ["task_classifier", "ethics_guard", "response_composer"]
};

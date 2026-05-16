import registry from "../knowledge/00_manifest/sources.registry.json" with { type: "json" };
import type { SourceCardReference, TaskType } from "./types.js";

type SourceRegistryEntry = SourceCardReference;

interface SourceRegistry {
  version: string;
  sources: SourceRegistryEntry[];
}

const sourceRegistry = registry as SourceRegistry;

export const sourceIdsByTaskType: Partial<Record<TaskType, string[]>> = {
  chapter_editing: [
    "plotnikov_reasonable_network_marketing",
    "svod_project_card",
    "context_sources_map_card",
    "context_map_v14_card",
    "sync_packages_card",
    "materials_far_headlight_instruction_card",
    "frequency_language_card",
    "khmelevskaya_style_reference",
    "gerber_e_myth",
    "kalenc_best_you_can_be_mlm",
    "quiet_master_framework",
    "idea_amplifier_framework",
    "practical_mlm_ecology_framework",
    "protected_spaces_framework",
    "spiritual_sphere_business_boundary_card"
  ],
  mvp_product: [
    "mvp_project_card",
    "brochure_newcomer_route_card",
    "client_followup_medical_caution_card",
    "frequency_language_card",
    "svod_project_card",
    "practical_mlm_ecology_framework",
    "protected_spaces_framework",
    "spiritual_sphere_business_boundary_card",
    "thought_check_framework",
    "descartes_square_framework",
    "eisenhower_matrix_framework",
    "mcgonigal_superbetter"
  ],
  social_post: [
    "frequency_language_card",
    "idea_amplifier_framework",
    "idea_amplifier_instruction_card",
    "practical_mlm_ecology_framework",
    "protected_spaces_framework",
    "spiritual_sphere_business_boundary_card",
    "client_followup_medical_caution_card",
    "khmelevskaya_style_reference",
    "style_profile_card"
  ],
  skill_development: [
    "yarnell_first_year_network_marketing",
    "mcgonigal_superbetter",
    "canfield_hansen_hewitt_whole_life",
    "arkhangelsky_time_drive",
    "quest_chapter_framework",
    "thought_check_framework",
    "quiet_master_framework",
    "frequency_language_card"
  ]
};

const sourceCardsById = new Map(sourceRegistry.sources.map((sourceCard) => [sourceCard.source_id, sourceCard]));

export function getSourceRegistryVersion(): string {
  return sourceRegistry.version;
}

export function getAllRouteMappedSourceIds(): string[] {
  return Object.values(sourceIdsByTaskType).flatMap((sourceIds) => sourceIds ?? []);
}

export function getSourceIdsForTask(taskType: TaskType): string[] {
  return [...(sourceIdsByTaskType[taskType] ?? [])];
}

export function getSourceCardsByIds(sourceIds: string[]): SourceCardReference[] {
  return sourceIds.map((sourceId) => {
    const sourceCard = sourceCardsById.get(sourceId);

    if (!sourceCard) {
      throw new Error(`Source registry is missing route-mapped source_id: ${sourceId}`);
    }

    return {
      source_id: sourceCard.source_id,
      title: sourceCard.title,
      source_type: sourceCard.source_type,
      path: sourceCard.path,
      priority_level: sourceCard.priority_level,
      processed_status: sourceCard.processed_status
    };
  });
}

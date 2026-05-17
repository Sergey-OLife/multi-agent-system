import type { RoutingContext, SynchronizationMap } from "../domain/index.js";
import { normalize } from "../engine/index.js";

function hasSynchronizationSignal(input: string): boolean {
  const text = normalize(input);
  return text.includes("глав") || text.includes("книг") || text.includes("плотников") || text.includes("драматург");
}

export function buildSynchronizationMap(context: RoutingContext): SynchronizationMap {
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

import type { SvodCheckResult } from "../domain/index.js";
import { normalize } from "../engine/index.js";

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

export function buildSvodCheck(input: string): SvodCheckResult {
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

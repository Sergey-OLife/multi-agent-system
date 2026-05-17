import assert from "node:assert/strict";
import { test } from "node:test";
import { routeRequest } from "../src/index.js";

test("anti_cliche_editor detects tired phrases and moral abstractions in chapter text", () => {
  const result = routeRequest(
    "Глава: Вступление. В жизни так не работает. Она будет учить видеть человека. Человек важнее сделки. Скепсис не враг. Честность, доверие, совесть, границы и ответственность важны."
  );
  const antiCliche = result.diagnostics.antiCliche as {
    detectedCliches: string[];
    moralAbstractions: string[];
    recommendedAction: string;
  };

  assert.equal(result.taskType, "chapter_editing");
  assert.ok(result.usedAgents.includes("anti_cliche_editor"));
  assert.ok(antiCliche.detectedCliches.includes("в жизни так не работает"));
  assert.ok(antiCliche.detectedCliches.includes("человек важнее сделки"));
  assert.ok(antiCliche.moralAbstractions.includes("доверие"));
  assert.equal(antiCliche.recommendedAction, "needs_targeted_revision");
});

test("anti_cliche_editor flags repeated not-this-but-that contrast pattern", () => {
  const result = routeRequest(
    "Глава: Не мотивация, а маршрут. Не обещание, а карта. Не давление, а честный разговор."
  );
  const antiCliche = result.diagnostics.antiCliche as {
    overusedContrastPattern: { detected: boolean; count: number; rule: string };
  };

  assert.equal(result.taskType, "chapter_editing");
  assert.equal(antiCliche.overusedContrastPattern.detected, true);
  assert.ok(antiCliche.overusedContrastPattern.count >= 2);
  assert.ok(antiCliche.overusedContrastPattern.rule.includes("проповедь"));
});

test("anti_cliche_editor treats marketing vocabulary in preface as register risk", () => {
  const result = routeRequest(
    "Глава: Вступление. Человек не обязан быть удобным для вашей воронки. Скрипт не должен вырезать живого собеседника."
  );
  const antiCliche = result.diagnostics.antiCliche as {
    registerRisks: { term: string; risk: string }[];
    riskyReplacements: { phrase: string; risk: string; saferUse: string }[];
    decisionRule: string;
  };

  assert.equal(result.taskType, "chapter_editing");
  assert.ok(antiCliche.registerRisks.some((risk) => risk.term === "воронк"));
  assert.ok(antiCliche.riskyReplacements.some((risk) => risk.phrase.includes("воронки")));
  assert.equal(antiCliche.decisionRule, "Не всякая сильная фраза годится для текущей сцены.");
});

test("anti_cliche_editor keeps approved replacements separate from risky replacements", () => {
  const result = routeRequest("Глава: карта не идёт ногами. Рядом с деньгами всегда стоит человек.");
  const antiCliche = result.diagnostics.antiCliche as {
    approvedReplacements: { weak: string; stronger: string; reason: string }[];
    riskyReplacements: { phrase: string; risk: string; saferUse: string }[];
    sceneReplacementSuggestions: string[];
  };

  assert.equal(result.taskType, "chapter_editing");
  assert.ok(antiCliche.approvedReplacements.some((replacement) => replacement.weak === "карта не идёт ногами"));
  assert.ok(antiCliche.approvedReplacements.some((replacement) => replacement.stronger.includes("неловкий разговор")));
  assert.ok(antiCliche.riskyReplacements.some((replacement) => replacement.phrase.includes("воронки")));
  assert.ok(antiCliche.sceneReplacementSuggestions.some((suggestion) => suggestion.includes("сообщение")));
});

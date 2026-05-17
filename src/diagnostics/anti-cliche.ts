import { collectMatches, countRegexMatches, normalize } from "../engine/text-utils.js";

export function buildAntiClicheDiagnostics(input: string): Record<string, unknown> {
  const text = normalize(input);
  const tiredPhrases = collectMatches(text, [
    "в жизни так не работает",
    "она будет учить видеть человека",
    "человек важнее сделки",
    "не мотивационное выступление",
    "карта не идёт ногами",
    "карта не идет ногами",
    "скепсис не враг",
    "взрослый вход в любое дело",
    "рядом с деньгами всегда стоит человек"
  ]);
  const moralAbstractions = collectMatches(text, ["честность", "доверие", "совесть", "границы", "ответственность", "человек"]);
  const contrastPatternCount = countRegexMatches(text, /(^|[.!?\n]\s*)не\s+[^.!?\n]{1,100}\s+а\s+/giu);
  const marketingTerms = collectMatches(text, ["воронк", "лид", "конверси", "скрипт"]);
  const isReaderFacingChapter = text.includes("вступление") || text.includes("перед входом") || text.includes("глав");
  const registerRisks = marketingTerms
    .filter((term) => isReaderFacingChapter || term !== "скрипт")
    .map((term) => ({
      term,
      risk: "Сильная фраза может принести преждевременный маркетинговый регистр в читательский текст."
    }));
  const sceneReplacementSuggestions = [
    "Заменять абстрактную мораль на ситуацию: сообщение, звонок, список знакомых, отказ, молчание о рисках, разговор с близким.",
    "Проверять, есть ли рядом с ценностным словом конкретная цена выбора или действие.",
    "Сохранять силу формулы только там, где она не вытесняет живую сцену."
  ];
  const approvedReplacements = [
    {
      weak: "карта не идёт ногами",
      stronger: "Карта покажет маршрут, но не проживёт за вас неловкий разговор.",
      reason: "Сохраняет образ карты, но возвращает его в действие и цену."
    },
    {
      weak: "рядом с деньгами всегда стоит человек",
      stronger: "Где деньги появляются через отношения, там нельзя делать вид, что отношения — расходный материал.",
      reason: "Убирает лозунг и показывает деловой риск."
    }
  ];
  const riskyReplacements = [
    {
      phrase: "человек не обязан быть удобным для вашей воронки",
      risk: "Фраза точная и сильная, но для вступления может слишком рано втянуть читателя в маркетинговую лексику.",
      saferUse: "Оставить для внутреннего редакторского слоя или методической главы, а во вступлении заменить на бытовую сцену."
    }
  ];

  return {
    trainingCase: "chapter_00_preface_case_001",
    cleaned: true,
    detectedCliches: tiredPhrases,
    moralAbstractions,
    overusedContrastPattern: {
      detected: contrastPatternCount >= 2,
      count: contrastPatternCount,
      rule: "Повтор конструкции 'не это, а то' создаёт ясность, но при частом повторе превращает текст в проповедь."
    },
    sceneReplacementSuggestions,
    registerRisks,
    approvedReplacements,
    riskyReplacements,
    decisionRule: "Не всякая сильная фраза годится для текущей сцены.",
    recommendedAction:
      tiredPhrases.length > 0 || moralAbstractions.length >= 3 || contrastPatternCount >= 2 || registerRisks.length > 0
        ? "needs_targeted_revision"
        : "pass"
  };
}

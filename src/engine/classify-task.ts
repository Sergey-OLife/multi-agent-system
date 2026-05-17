import type { TaskType } from "../domain/types.js";
import { hasWord, normalize } from "./text-utils.js";

function hasMvpSignal(text: string): boolean {
  return (
    text.includes("mvp") ||
    text.includes("приложен") ||
    text.includes("маршрут новичка") ||
    text.includes("продуктовая архитектура") ||
    text.includes("saas") ||
    text.includes("тренажёр") ||
    text.includes("тренажер")
  );
}

function hasSocialPostSignal(text: string): boolean {
  return (
    hasWord(text, "пост") ||
    hasWord(text, "поста") ||
    text.includes("пост для telegram") ||
    text.includes("telegram-пост") ||
    text.includes("телеграм-пост") ||
    text.includes("соцсет") ||
    text.includes("reels") ||
    text.includes("рилс") ||
    text.includes("карусель") ||
    hasWord(text, "публикация") ||
    text.includes("публикаци") ||
    hasWord(text, "комментар")
  );
}

function hasProjectResumeSignal(text: string): boolean {
  return (
    text.includes("resume project") ||
    text.includes("project resume") ||
    text.includes("восстанови проект") ||
    text.includes("восстановить проект") ||
    text.includes("восстановление проекта") ||
    text.includes("возобнови проект") ||
    text.includes("продолжить проект") ||
    text.includes("новый старт проекта")
  );
}

export function classifyTask(input: string): TaskType {
  const text = normalize(input);

  if (hasProjectResumeSignal(text)) {
    return "project_resume";
  }

  if (text.includes("глав") || text.includes("книг") || text.includes("драматург") || text.includes("плотников")) {
    return "chapter_editing";
  }

  if (hasMvpSignal(text)) {
    return "mvp_product";
  }

  if (text.includes("навык") || text.includes("мастерств") || text.includes("маршрут мастерства")) {
    return "skill_development";
  }

  if (hasSocialPostSignal(text)) {
    return "social_post";
  }

  return "general";
}

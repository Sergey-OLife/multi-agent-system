export const normalize = (value: string): string => value.toLocaleLowerCase("ru-RU");

const wordBoundary = "[^\\p{L}\\p{N}_]";

export function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function hasWord(text: string, word: string): boolean {
  return new RegExp(`(^|${wordBoundary})${escapeRegex(word)}(${wordBoundary}|$)`, "u").test(text);
}

export function collectMatches(text: string, phrases: string[]): string[] {
  return phrases.filter((phrase) => text.includes(phrase));
}

export function countRegexMatches(text: string, regex: RegExp): number {
  return text.match(regex)?.length ?? 0;
}

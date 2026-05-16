import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export interface ProjectResumeDiagnostics {
  currentVersion: string;
  lastCompletedVersion: string;
  lastMergedPr: string;
  currentMilestone: string;
  completedVersions: string[];
  activeDecisions: string[];
  pausedTasks: string[];
  nextAction: string;
  manualChapterUpload: boolean;
  rawTextCommitted: boolean;
  importantPaths: string[];
}

export const projectStatePath = "knowledge/00_manifest/project-state.json";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireString(source: Record<string, unknown>, key: keyof ProjectResumeDiagnostics): string {
  const value = source[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Invalid project state: ${String(key)} must be a non-empty string.`);
  }

  return value;
}

function requireBoolean(source: Record<string, unknown>, key: keyof ProjectResumeDiagnostics): boolean {
  const value = source[key];

  if (typeof value !== "boolean") {
    throw new Error(`Invalid project state: ${String(key)} must be a boolean.`);
  }

  return value;
}

function requireStringArray(source: Record<string, unknown>, key: keyof ProjectResumeDiagnostics): string[] {
  const value = source[key];

  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
    throw new Error(`Invalid project state: ${String(key)} must be an array of strings.`);
  }

  return [...value];
}

export function parseProjectState(projectStateJson: string): ProjectResumeDiagnostics {
  const parsed: unknown = JSON.parse(projectStateJson);

  if (!isRecord(parsed)) {
    throw new Error("Invalid project state: root must be a JSON object.");
  }

  return {
    currentVersion: requireString(parsed, "currentVersion"),
    lastCompletedVersion: requireString(parsed, "lastCompletedVersion"),
    lastMergedPr: requireString(parsed, "lastMergedPr"),
    currentMilestone: requireString(parsed, "currentMilestone"),
    completedVersions: requireStringArray(parsed, "completedVersions"),
    activeDecisions: requireStringArray(parsed, "activeDecisions"),
    pausedTasks: requireStringArray(parsed, "pausedTasks"),
    nextAction: requireString(parsed, "nextAction"),
    manualChapterUpload: requireBoolean(parsed, "manualChapterUpload"),
    rawTextCommitted: requireBoolean(parsed, "rawTextCommitted"),
    importantPaths: requireStringArray(parsed, "importantPaths")
  };
}

function getProjectStateCandidatePaths(rootDir?: string): string[] {
  if (rootDir !== undefined) {
    return [join(rootDir, projectStatePath)];
  }

  const moduleDir = dirname(fileURLToPath(import.meta.url));

  return [
    join(moduleDir, "..", projectStatePath),
    join(moduleDir, "..", "..", projectStatePath)
  ];
}

export function resolveProjectStatePath(rootDir?: string): string {
  const candidatePaths = getProjectStateCandidatePaths(rootDir);
  const projectStateFile = candidatePaths.find((candidatePath) => existsSync(candidatePath));

  if (projectStateFile === undefined) {
    throw new Error(`Project state file not found. Tried: ${candidatePaths.join(", ")}`);
  }

  return projectStateFile;
}

export function loadProjectState(rootDir?: string): ProjectResumeDiagnostics {
  return parseProjectState(readFileSync(resolveProjectStatePath(rootDir), "utf8"));
}

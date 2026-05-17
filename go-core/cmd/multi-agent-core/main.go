package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strings"
)

const schemaVersion = "core-api.v1"

var allowedStatuses = map[string]bool{
	"ready":          true,
	"needs_revision": true,
	"blocked":        true,
	"error":          true,
}

type InputEnvelope struct {
	SchemaVersion string          `json:"schemaVersion"`
	Command       string          `json:"command"`
	Context       ContextEnvelope `json:"context"`
	Files         []InputFile     `json:"files"`
	Options       Options         `json:"options"`
}

type ContextEnvelope struct {
	CurrentMode     string        `json:"currentMode"`
	CurrentTask     string        `json:"currentTask"`
	LastMergedPr    string        `json:"lastMergedPr"`
	LastMergeCommit string        `json:"lastMergeCommit"`
	ApprovalState   ApprovalState `json:"approvalState"`
}

type ApprovalState struct {
	PlusReceived       bool    `json:"plusReceived"`
	DoublePlusReceived bool    `json:"doublePlusReceived"`
	ApprovedGate       *string `json:"approvedGate"`
}

type InputFile struct {
	Path    string `json:"path"`
	Kind    string `json:"kind"`
	Sha     string `json:"sha"`
	Content string `json:"content"`
}

type Options struct {
	Strict          bool `json:"strict"`
	IncludeWarnings bool `json:"includeWarnings"`
}

type OutputEnvelope struct {
	SchemaVersion   string       `json:"schemaVersion"`
	Command         string       `json:"command"`
	Status          string       `json:"status"`
	Summary         string       `json:"summary"`
	Diagnostics     []Diagnostic `json:"diagnostics"`
	RequiredUpdates []string     `json:"requiredUpdates"`
	BlockedActions  []string     `json:"blockedActions"`
	SafeNextStep    string       `json:"safeNextStep"`
}

type Diagnostic struct {
	Severity     string  `json:"severity"`
	Code         string  `json:"code"`
	File         *string `json:"file"`
	Message      string  `json:"message"`
	SuggestedFix string  `json:"suggestedFix"`
}

type ProjectState struct {
	LastMergedPr    string `json:"lastMergedPr"`
	LastMergeCommit string `json:"lastMergeCommit"`
	CurrentMode     string `json:"currentMode"`
	BookPaused      bool   `json:"bookPaused"`
	NextAction      string `json:"nextAction"`
}

func main() {
	if len(os.Args) < 2 {
		writeOutput(errorOutput("", "missing_command", "Missing command.", "Run multi-agent-core sync-check or registry-check."))
		os.Exit(1)
	}

	command := os.Args[1]
	inputBytes, readErr := io.ReadAll(os.Stdin)
	if readErr != nil {
		writeOutput(errorOutput(command, "stdin_read_failed", readErr.Error(), "Provide a readable JSON input envelope on stdin."))
		os.Exit(1)
	}

	var input InputEnvelope
	if err := json.Unmarshal(inputBytes, &input); err != nil {
		writeOutput(errorOutput(command, "invalid_json", err.Error(), "Provide a valid JSON input envelope."))
		os.Exit(1)
	}

	if command != input.Command {
		writeOutput(errorOutput(command, "command_mismatch", "CLI command does not match input command.", "Use the same command in argv and input.command."))
		os.Exit(1)
	}

	var output OutputEnvelope

	switch command {
	case "sync-check":
		output = runSyncCheck(input)
	case "registry-check":
		output = runRegistryCheck(input)
	default:
		writeOutput(errorOutput(command, "unsupported_command", "Unsupported Go-core command.", "Use sync-check or registry-check."))
		os.Exit(1)
	}

	writeOutput(output)

	if output.Status == "blocked" || output.Status == "error" {
		os.Exit(1)
	}
}

func runRegistryCheck(input InputEnvelope) OutputEnvelope {
	diagnostics := make([]Diagnostic, 0)
	requiredUpdates := make([]string, 0)

	if input.SchemaVersion != schemaVersion {
		return errorOutput(input.Command, "invalid_schema_version", "Invalid or missing schemaVersion.", "Provide schemaVersion: core-api.v1.")
	}

	registry := findFile(input.Files, "agent_container_registry", "knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md")

	if registry == nil {
		return errorOutput(input.Command, "missing_agent_registry", "Missing agent_container_registry input file.", "Pass agent_container_registry.md in files.")
	}

	if !strings.Contains(registry.Content, "agent_container_registry:") {
		diagnostics = append(diagnostics, diagnostic("medium", "registry_missing_yaml_root", registry.Path, "Registry YAML root was not found.", "Keep parser-safe YAML root in the registry file."))
		requiredUpdates = append(requiredUpdates, "Restore parser-safe YAML root in agent_container_registry.md.")
	}

	if !strings.Contains(registry.Content, "workflow_conductor_agent") {
		diagnostics = append(diagnostics, diagnostic("medium", "registry_missing_workflow_conductor", registry.Path, "workflow_conductor_agent container is missing.", "Restore workflow_conductor_agent container entry."))
		requiredUpdates = append(requiredUpdates, "Restore workflow_conductor_agent registry entry.")
	}

	status := "ready"
	summary := "Agent registry structure is available."
	safeNextStep := "Continue with the next planned shipyard step."

	if len(requiredUpdates) > 0 {
		status = "needs_revision"
		summary = "Registry structure issues were found."
		safeNextStep = "Repair registry structure before continuing." 
	}

	return OutputEnvelope{
		SchemaVersion:   schemaVersion,
		Command:         input.Command,
		Status:          status,
		Summary:         summary,
		Diagnostics:     diagnostics,
		RequiredUpdates: unique(requiredUpdates),
		BlockedActions:  []string{},
		SafeNextStep:    safeNextStep,
	}
}

func runSyncCheck(input InputEnvelope) OutputEnvelope {
	diagnostics := make([]Diagnostic, 0)
	requiredUpdates := make([]string, 0)
	blockedActions := make([]string, 0)

	if input.SchemaVersion != schemaVersion {
		return errorOutput(input.Command, "invalid_schema_version", "Invalid or missing schemaVersion.", "Provide schemaVersion: core-api.v1.")
	}

	projectStateFile := findFile(input.Files, "project_state_json", "knowledge/00_manifest/project-state.json")
	projectStateMd := findFile(input.Files, "project_state_md", "knowledge/00_manifest/project-state.md")
	currentState := findFile(input.Files, "current_state", "assistant_codex_worklog/current-state.md")
	roadmap := findFile(input.Files, "roadmap", "assistant_codex_worklog/roadmap.md")
	restartPrompt := findFile(input.Files, "restart_prompt", "assistant_codex_worklog/restart-prompt.md")
	registry := findFile(input.Files, "agent_container_registry", "knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md")

	if projectStateFile == nil {
		return errorOutput(input.Command, "missing_project_state_json", "Missing project-state.json input file.", "Pass knowledge/00_manifest/project-state.json in files.")
	}

	var projectState ProjectState
	if err := json.Unmarshal([]byte(projectStateFile.Content), &projectState); err != nil {
		return errorOutput(input.Command, "invalid_project_state_json", err.Error(), "Provide parseable project-state.json content.")
	}

	requireFile(&diagnostics, &requiredUpdates, projectStateMd, "missing_project_state_md", "knowledge/00_manifest/project-state.md", "project-state.md is required for sync-check mirror validation.")
	requireFile(&diagnostics, &requiredUpdates, currentState, "missing_current_state", "assistant_codex_worklog/current-state.md", "current-state.md is required for sync-check handoff validation.")
	requireFile(&diagnostics, &requiredUpdates, roadmap, "missing_roadmap", "assistant_codex_worklog/roadmap.md", "roadmap.md is required for sync-check handoff validation.")
	requireFile(&diagnostics, &requiredUpdates, restartPrompt, "missing_restart_prompt", "assistant_codex_worklog/restart-prompt.md", "restart-prompt.md is required for sync-check handoff validation.")

	checkTextContains(&diagnostics, &requiredUpdates, projectStateMd, "project_state_md_missing_last_pr", projectState.LastMergedPr, "project-state.md must mirror project-state.json lastMergedPr.")
	checkTextContains(&diagnostics, &requiredUpdates, projectStateMd, "project_state_md_missing_merge_commit", projectState.LastMergeCommit, "project-state.md must mirror project-state.json lastMergeCommit.")
	checkTextContains(&diagnostics, &requiredUpdates, currentState, "current_state_missing_last_pr", projectState.LastMergedPr, "current-state.md must mention the latest merged PR.")
	checkTextContains(&diagnostics, &requiredUpdates, roadmap, "roadmap_missing_last_pr", projectState.LastMergedPr, "roadmap.md must mention the latest merged PR.")
	checkTextContains(&diagnostics, &requiredUpdates, restartPrompt, "restart_prompt_missing_last_pr", projectState.LastMergedPr, "restart-prompt.md must mention the latest merged PR.")

	if input.Context.LastMergedPr != "" && input.Context.LastMergedPr != projectState.LastMergedPr {
		diagnostics = append(diagnostics, diagnostic("medium", "context_last_pr_mismatch", "context", fmt.Sprintf("Input context lastMergedPr %q does not match project-state.json %q.", input.Context.LastMergedPr, projectState.LastMergedPr), "Regenerate the input context from current project-state.json."))
		requiredUpdates = append(requiredUpdates, "Update sync-check context.lastMergedPr.")
	}

	if input.Context.LastMergeCommit != "" && input.Context.LastMergeCommit != projectState.LastMergeCommit {
		diagnostics = append(diagnostics, diagnostic("medium", "context_merge_commit_mismatch", "context", fmt.Sprintf("Input context lastMergeCommit %q does not match project-state.json %q.", input.Context.LastMergeCommit, projectState.LastMergeCommit), "Regenerate the input context from current project-state.json."))
		requiredUpdates = append(requiredUpdates, "Update sync-check context.lastMergeCommit.")
	}

	if strings.Contains(strings.ToLower(projectState.NextAction), "already completed") {
		diagnostics = append(diagnostics, diagnostic("medium", "next_action_self_marks_completed", projectStateFile.Path, "project-state.json nextAction appears to point to an already completed step.", "Replace nextAction with the next uncompleted step."))
		requiredUpdates = append(requiredUpdates, "Update project-state.json nextAction.")
	}

	if projectState.BookPaused && strings.Contains(strings.ToLower(projectState.CurrentMode), "book fast track") {
		diagnostics = append(diagnostics, diagnostic("high", "book_pause_mode_conflict", projectStateFile.Path, "bookPaused is true but currentMode points to Book Fast Track.", "Set currentMode to Agent Shipyard / Shipyard Modernization or unpause the book deliberately."))
		blockedActions = append(blockedActions, "Do not continue book work until project-state mode is clarified.")
	}

	if registry == nil {
		diagnostics = append(diagnostics, diagnostic("low", "registry_not_supplied", nil, "Agent container registry was not supplied; registry sync checks were skipped.", "Pass agent_container_registry.md for full sync-check coverage."))
	}

	status := "ready"
	summary := "Project state files are synchronized."
	safeNextStep := "Continue with the next planned modernization step."

	if len(requiredUpdates) > 0 {
		status = "needs_revision"
		summary = "Project state sync issues were found."
		safeNextStep = "Update the listed state/worklog files before continuing."
	}

	if len(blockedActions) > 0 {
		status = "blocked"
		summary = "Project state has blocking contradictions."
		safeNextStep = "Resolve blocking project-state contradictions before continuing."
	}

	return OutputEnvelope{
		SchemaVersion:   schemaVersion,
		Command:         input.Command,
		Status:          status,
		Summary:         summary,
		Diagnostics:     diagnostics,
		RequiredUpdates: unique(requiredUpdates),
		BlockedActions:  unique(blockedActions),
		SafeNextStep:    safeNextStep,
	}
}

func requireFile(diagnostics *[]Diagnostic, requiredUpdates *[]string, file *InputFile, code string, path string, message string) {
	if file != nil {
		return
	}

	*diagnostics = append(*diagnostics, diagnostic("medium", code, path, message, fmt.Sprintf("Pass %s in files before declaring sync ready.", path)))
	*requiredUpdates = append(*requiredUpdates, fmt.Sprintf("Provide %s.", path))
}

func checkTextContains(diagnostics *[]Diagnostic, requiredUpdates *[]string, file *InputFile, code string, expected string, message string) {
	if file == nil || expected == "" {
		return
	}

	if !strings.Contains(file.Content, expected) {
		*diagnostics = append(*diagnostics, diagnostic("medium", code, file.Path, message, fmt.Sprintf("Add or correct %q in %s.", expected, file.Path)))
		*requiredUpdates = append(*requiredUpdates, fmt.Sprintf("Update %s.", file.Path))
	}
}

func findFile(files []InputFile, kind string, path string) *InputFile {
	for index := range files {
		if files[index].Kind == kind || files[index].Path == path {
			return &files[index]
		}
	}

	return nil
}

func diagnostic(severity string, code string, file any, message string, suggestedFix string) Diagnostic {
	var fileValue *string
	if stringFile, ok := file.(string); ok {
		fileValue = &stringFile
	}

	return Diagnostic{Severity: severity, Code: code, File: fileValue, Message: message, SuggestedFix: suggestedFix}
}

func errorOutput(command string, code string, message string, suggestedFix string) OutputEnvelope {
	return OutputEnvelope{
		SchemaVersion:   schemaVersion,
		Command:         command,
		Status:          "error",
		Summary:         "Invalid input envelope.",
		Diagnostics:     []Diagnostic{diagnostic("high", code, nil, message, suggestedFix)},
		RequiredUpdates: []string{},
		BlockedActions:  []string{},
		SafeNextStep:    suggestedFix,
	}
}

func writeOutput(output OutputEnvelope) {
	if !allowedStatuses[output.Status] {
		output.Status = "error"
		output.Summary = "Invalid output status was normalized to error."
	}

	encoded, err := json.MarshalIndent(output, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to encode output: %v\n", err)
		os.Exit(1)
	}

	fmt.Println(string(encoded))
}

func unique(values []string) []string {
	seen := map[string]bool{}
	result := make([]string, 0, len(values))

	for _, value := range values {
		if seen[value] {
			continue
		}
		seen[value] = true
		result = append(result, value)
	}

	return result
}

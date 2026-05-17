package main

import "testing"

func TestRunSyncCheckReady(t *testing.T) {
	input := InputEnvelope{
		SchemaVersion: schemaVersion,
		Command:       "sync-check",
		Context: ContextEnvelope{
			LastMergedPr:    "PR #71 — Split TypeScript configs for build and test",
			LastMergeCommit: "c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
		},
		Files: []InputFile{
			{
				Path: "knowledge/00_manifest/project-state.json",
				Kind: "project_state_json",
				Content: `{
					"lastMergedPr":"PR #71 — Split TypeScript configs for build and test",
					"lastMergeCommit":"c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
					"currentMode":"Agent Shipyard / Shipyard Modernization",
					"bookPaused":true,
					"nextAction":"Create first minimal Go-core sync-check CLI"
				}`,
			},
			{
				Path:    "knowledge/00_manifest/project-state.md",
				Kind:    "project_state_md",
				Content: "lastMergedPr: PR #71 — Split TypeScript configs for build and test\nlastMergeCommit: c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
			},
			{
				Path:    "assistant_codex_worklog/current-state.md",
				Kind:    "current_state",
				Content: "PR #71 — Split TypeScript configs for build and test",
			},
			{
				Path:    "assistant_codex_worklog/roadmap.md",
				Kind:    "roadmap",
				Content: "PR #71 — Split TypeScript configs for build and test",
			},
			{
				Path:    "assistant_codex_worklog/restart-prompt.md",
				Kind:    "restart_prompt",
				Content: "PR #71 — Split TypeScript configs for build and test",
			},
		},
	}

	output := runSyncCheck(input)

	if output.Status != "ready" {
		t.Fatalf("expected ready, got %s: %#v", output.Status, output.Diagnostics)
	}
}

func TestRunSyncCheckRequiresHandoffFiles(t *testing.T) {
	input := InputEnvelope{
		SchemaVersion: schemaVersion,
		Command:       "sync-check",
		Files: []InputFile{
			{
				Path: "knowledge/00_manifest/project-state.json",
				Kind: "project_state_json",
				Content: `{
					"lastMergedPr":"PR #71 — Split TypeScript configs for build and test",
					"lastMergeCommit":"c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
					"currentMode":"Agent Shipyard / Shipyard Modernization",
					"bookPaused":true,
					"nextAction":"Create first minimal Go-core sync-check CLI"
				}`,
			},
		},
	}

	output := runSyncCheck(input)

	if output.Status != "needs_revision" {
		t.Fatalf("expected needs_revision, got %s", output.Status)
	}

	for _, code := range []string{"missing_project_state_md", "missing_current_state", "missing_roadmap", "missing_restart_prompt"} {
		if !hasDiagnostic(output.Diagnostics, code) {
			t.Fatalf("expected %s diagnostic, got %#v", code, output.Diagnostics)
		}
	}
}

func TestRunSyncCheckDetectsStaleRestartPrompt(t *testing.T) {
	input := InputEnvelope{
		SchemaVersion: schemaVersion,
		Command:       "sync-check",
		Context: ContextEnvelope{
			LastMergedPr:    "PR #70 — Sync state after import boundaries PR",
			LastMergeCommit: "102a82116bc81654cdaf54ea69fee082b40d2365",
		},
		Files: []InputFile{
			{
				Path: "knowledge/00_manifest/project-state.json",
				Kind: "project_state_json",
				Content: `{
					"lastMergedPr":"PR #71 — Split TypeScript configs for build and test",
					"lastMergeCommit":"c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
					"currentMode":"Agent Shipyard / Shipyard Modernization",
					"bookPaused":true,
					"nextAction":"Create first minimal Go-core sync-check CLI"
				}`,
			},
			{
				Path:    "knowledge/00_manifest/project-state.md",
				Kind:    "project_state_md",
				Content: "lastMergedPr: PR #71 — Split TypeScript configs for build and test\nlastMergeCommit: c2c9a7fdebaaf91483acfbf97cdcb7e6c9090ed9",
			},
			{
				Path:    "assistant_codex_worklog/current-state.md",
				Kind:    "current_state",
				Content: "PR #71 — Split TypeScript configs for build and test",
			},
			{
				Path:    "assistant_codex_worklog/roadmap.md",
				Kind:    "roadmap",
				Content: "PR #71 — Split TypeScript configs for build and test",
			},
			{
				Path:    "assistant_codex_worklog/restart-prompt.md",
				Kind:    "restart_prompt",
				Content: "PR #70 — Sync state after import boundaries PR",
			},
		},
	}

	output := runSyncCheck(input)

	if output.Status != "needs_revision" {
		t.Fatalf("expected needs_revision, got %s", output.Status)
	}

	if len(output.Diagnostics) == 0 {
		t.Fatalf("expected diagnostics")
	}

	if !hasDiagnostic(output.Diagnostics, "restart_prompt_missing_last_pr") {
		t.Fatalf("expected restart_prompt_missing_last_pr diagnostic, got %#v", output.Diagnostics)
	}
}

func TestRunSyncCheckRejectsInvalidSchema(t *testing.T) {
	output := runSyncCheck(InputEnvelope{Command: "sync-check"})

	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "invalid_schema_version") {
		t.Fatalf("expected invalid_schema_version diagnostic")
	}
}

func hasDiagnostic(diagnostics []Diagnostic, code string) bool {
	for _, diagnostic := range diagnostics {
		if diagnostic.Code == code {
			return true
		}
	}

	return false
}

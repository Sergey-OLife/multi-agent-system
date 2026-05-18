package main

import (
	"encoding/json"
	"os"
	"os/exec"
	"strings"
	"testing"
)

func TestSchemaPressureRejectsMalformedProjectStateJSON(t *testing.T) {
	input := InputEnvelope{
		SchemaVersion: schemaVersion,
		Command:       "sync-check",
		Files: []InputFile{
			{
				Path:    "knowledge/00_manifest/project-state.json",
				Kind:    "project_state_json",
				Content: `{"lastMergedPr":`,
			},
		},
	}

	output := runSyncCheck(input)

	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "invalid_project_state_json") {
		t.Fatalf("expected invalid_project_state_json diagnostic, got %#v", output.Diagnostics)
	}
}

func TestSchemaPressureRegistryCheckRejectsInvalidSchemaVersion(t *testing.T) {
	input := InputEnvelope{
		SchemaVersion: "core-api.v0",
		Command:       "registry-check",
		Files: []InputFile{
			{Path: "knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md", Kind: "agent_container_registry", Content: "agent_container_registry:\n"},
		},
	}

	output := runRegistryCheck(input)

	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "invalid_schema_version") {
		t.Fatalf("expected invalid_schema_version diagnostic, got %#v", output.Diagnostics)
	}
}

func TestSchemaPressureEnvelopeIgnoresExtraFields(t *testing.T) {
	payload := []byte(`{
		"schemaVersion":"core-api.v1",
		"command":"registry-check",
		"unexpectedTopLevel":"ignored",
		"files":[{
			"path":"knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md",
			"kind":"agent_container_registry",
			"content":"agent_container_registry:\n  containers:\n    - agent_id: \"workflow_conductor_agent\"\n",
			"unexpectedFileField":"ignored"
		}],
		"options":{"strict":true,"unexpectedOption":"ignored"}
	}`)

	var input InputEnvelope
	if err := json.Unmarshal(payload, &input); err != nil {
		t.Fatalf("expected extra fields to be ignored by envelope decode, got %v", err)
	}

	output := runRegistryCheck(input)

	if output.Status != "ready" {
		t.Fatalf("expected ready, got %s: %#v", output.Status, output.Diagnostics)
	}
}

func TestSchemaPressureCLIRejectsCommandMismatch(t *testing.T) {
	stdout, exitCode := runMainForSchemaPressureTest(t, "sync-check", `{"schemaVersion":"core-api.v1","command":"registry-check","files":[]}`)

	if exitCode == 0 {
		t.Fatalf("expected non-zero exit code for command mismatch")
	}

	output := decodeOutputEnvelope(t, stdout)
	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "command_mismatch") {
		t.Fatalf("expected command_mismatch diagnostic, got %#v", output.Diagnostics)
	}
}

func TestSchemaPressureCLIRejectsUnsupportedCommand(t *testing.T) {
	stdout, exitCode := runMainForSchemaPressureTest(t, "unknown-check", `{"schemaVersion":"core-api.v1","command":"unknown-check","files":[]}`)

	if exitCode == 0 {
		t.Fatalf("expected non-zero exit code for unsupported command")
	}

	output := decodeOutputEnvelope(t, stdout)
	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "unsupported_command") {
		t.Fatalf("expected unsupported_command diagnostic, got %#v", output.Diagnostics)
	}
}

func TestSchemaPressureCLIRejectsInvalidJSONEnvelope(t *testing.T) {
	stdout, exitCode := runMainForSchemaPressureTest(t, "sync-check", `{"schemaVersion":`)

	if exitCode == 0 {
		t.Fatalf("expected non-zero exit code for invalid JSON")
	}

	output := decodeOutputEnvelope(t, stdout)
	if output.Status != "error" {
		t.Fatalf("expected error, got %s", output.Status)
	}

	if !hasDiagnostic(output.Diagnostics, "invalid_json") {
		t.Fatalf("expected invalid_json diagnostic, got %#v", output.Diagnostics)
	}
}

func TestMainSchemaPressureHelperProcess(t *testing.T) {
	if os.Getenv("SCHEMA_PRESSURE_MAIN_HELPER") != "1" {
		return
	}

	main()
}

func runMainForSchemaPressureTest(t *testing.T, command string, stdin string) (string, int) {
	t.Helper()

	cmd := exec.Command(os.Args[0], "-test.run=TestMainSchemaPressureHelperProcess", "--", command)
	cmd.Env = append(os.Environ(), "SCHEMA_PRESSURE_MAIN_HELPER=1")
	cmd.Stdin = strings.NewReader(stdin)

	output, err := cmd.CombinedOutput()
	if err == nil {
		return string(output), 0
	}

	if exitErr, ok := err.(*exec.ExitError); ok {
		return string(output), exitErr.ExitCode()
	}

	t.Fatalf("failed to run helper process: %v\noutput: %s", err, string(output))
	return "", 1
}

func decodeOutputEnvelope(t *testing.T, stdout string) OutputEnvelope {
	t.Helper()

	var output OutputEnvelope
	if err := json.Unmarshal([]byte(stdout), &output); err != nil {
		t.Fatalf("expected JSON output envelope, got error %v and stdout %q", err, stdout)
	}

	return output
}

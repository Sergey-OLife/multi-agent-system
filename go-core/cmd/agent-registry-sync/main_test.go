package main

import (
	"strings"
	"testing"
)

func TestMutateRegistryProposalTransition(t *testing.T) {
	registry := sampleRegistry()

	updated, diff, err := mutateRegistry(registry, mutationRequest{
		AgentID:      "sergey_interaction_profiler",
		Status:       "proposal",
		NextAction:   "controlled_activation",
		ProposalPath: "knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md",
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if diff == "" {
		t.Fatal("expected diff output")
	}

	required := []string{
		`status: "proposal"`,
		`next_action: "controlled_activation"`,
		`proposal_path: "knowledge/05_agent_memory/agent_proposals/sergey_interaction_profiler.md"`,
	}

	for _, needle := range required {
		if !strings.Contains(updated, needle) {
			t.Fatalf("updated registry missing %q", needle)
		}
	}

	if strings.Count(updated, `agent_id: "sergey_interaction_profiler"`) != 1 {
		t.Fatal("agent duplication detected")
	}
}

func TestRejectInvalidTransition(t *testing.T) {
	_, _, err := mutateRegistry(sampleRegistry(), mutationRequest{
		AgentID: "sergey_interaction_profiler",
		Status:  "ready",
	})

	if err == nil {
		t.Fatal("expected invalid transition error")
	}

	if !strings.Contains(err.Error(), "not allowed") {
		t.Fatalf("unexpected error: %v", err)
	}
}

func TestRejectDuplicateAgentIDs(t *testing.T) {
	registry := sampleRegistry() + `
    - agent_id: "sergey_interaction_profiler"
      status: "container"
`

	_, _, err := mutateRegistry(registry, mutationRequest{
		AgentID: "sergey_interaction_profiler",
		Status:  "proposal",
	})

	if err == nil {
		t.Fatal("expected duplicate detection error")
	}

	if !strings.Contains(err.Error(), "appears") {
		t.Fatalf("unexpected error: %v", err)
	}
}

func sampleRegistry() string {
	return `# Registry

\`\`\`yaml
agent_container_registry:
  containers:
    - agent_id: "workflow_conductor_agent"
      status: "proposal"
      next_action: "controlled_activation"
      activation_risk: "medium"

    - agent_id: "sergey_interaction_profiler"
      status: "container"
      next_action: "write_proposal"
      activation_risk: "medium"
\`\`\`
`
}

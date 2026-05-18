package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"strings"
)

const defaultRegistryPath = "../knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md"

type mutationRequest struct {
	AgentID      string
	Status       string
	NextAction   string
	ProposalPath string
}

type agentBlock struct {
	Start int
	End   int
	Lines []string
}

func main() {
	registryPath := flag.String("registry", defaultRegistryPath, "path to agent_container_registry.md")
	agentID := flag.String("agent", "", "agent_id to update")
	status := flag.String("status", "", "new status")
	nextAction := flag.String("next-action", "", "new next_action")
	proposalPath := flag.String("proposal-path", "", "proposal_path to set")
	dryRun := flag.Bool("dry-run", false, "print diff without writing")
	flag.Parse()

	request := mutationRequest{
		AgentID:      strings.TrimSpace(*agentID),
		Status:       strings.TrimSpace(*status),
		NextAction:   strings.TrimSpace(*nextAction),
		ProposalPath: strings.TrimSpace(*proposalPath),
	}

	if request.AgentID == "" {
		exitWithError(errors.New("--agent is required"))
	}

	if request.Status == "" && request.NextAction == "" && request.ProposalPath == "" {
		exitWithError(errors.New("at least one mutation flag is required: --status, --next-action, or --proposal-path"))
	}

	contentBytes, err := os.ReadFile(*registryPath)
	if err != nil {
		exitWithError(fmt.Errorf("read registry: %w", err))
	}

	original := string(contentBytes)
	updated, diff, err := mutateRegistry(original, request)
	if err != nil {
		exitWithError(err)
	}

	if diff == "" {
		fmt.Println("No changes needed.")
		return
	}

	fmt.Print(diff)

	if *dryRun {
		return
	}

	if err := os.WriteFile(*registryPath, []byte(updated), 0o644); err != nil {
		exitWithError(fmt.Errorf("write registry: %w", err))
	}
}

func exitWithError(err error) {
	fmt.Fprintf(os.Stderr, "agent-registry-sync: %v\n", err)
	os.Exit(1)
}

func mutateRegistry(content string, request mutationRequest) (string, string, error) {
	if !strings.Contains(content, "agent_container_registry:") {
		return "", "", errors.New("registry YAML root agent_container_registry was not found")
	}

	lines := splitLines(content)
	block, err := findAgentBlock(lines, request.AgentID)
	if err != nil {
		return "", "", err
	}

	updatedBlock, err := mutateBlock(block.Lines, request)
	if err != nil {
		return "", "", err
	}

	if equalLines(block.Lines, updatedBlock) {
		return content, "", nil
	}

	updatedLines := append([]string{}, lines[:block.Start]...)
	updatedLines = append(updatedLines, updatedBlock...)
	updatedLines = append(updatedLines, lines[block.End:]...)

	updated := strings.Join(updatedLines, "\n")
	if strings.HasSuffix(content, "\n") {
		updated += "\n"
	}

	return updated, renderBlockDiff(block.Lines, updatedBlock, request.AgentID), nil
}

func splitLines(content string) []string {
	trimmed := strings.TrimSuffix(content, "\n")
	if trimmed == "" {
		return []string{}
	}
	return strings.Split(trimmed, "\n")
}

func findAgentBlock(lines []string, agentID string) (agentBlock, error) {
	needle := fmt.Sprintf("agent_id: \"%s\"", agentID)
	starts := []int{}

	for i, line := range lines {
		if strings.Contains(line, needle) {
			starts = append(starts, i)
		}
	}

	if len(starts) == 0 {
		return agentBlock{}, fmt.Errorf("agent %q not found", agentID)
	}
	if len(starts) > 1 {
		return agentBlock{}, fmt.Errorf("agent %q appears %d times; refusing ambiguous mutation", agentID, len(starts))
	}

	start := starts[0]
	end := len(lines)
	for i := start + 1; i < len(lines); i++ {
		trimmed := strings.TrimSpace(lines[i])
		if strings.HasPrefix(trimmed, "- agent_id: ") || trimmed == "```" {
			end = i
			break
		}
	}

	return agentBlock{Start: start, End: end, Lines: append([]string{}, lines[start:end]...)}, nil
}

func mutateBlock(lines []string, request mutationRequest) ([]string, error) {
	currentStatus, ok := valueForKey(lines, "status")
	if !ok {
		return nil, errors.New("target block has no status field")
	}

	updated := append([]string{}, lines...)

	if request.Status != "" {
		if err := validateStatusTransition(currentStatus, request.Status); err != nil {
			return nil, err
		}
		updated = setExistingKey(updated, "status", request.Status)
	}

	if request.NextAction != "" {
		updated = setExistingKey(updated, "next_action", request.NextAction)
	}

	if request.ProposalPath != "" {
		var changed bool
		updated, changed = setOptionalKey(updated, "proposal_path", request.ProposalPath, "      ", "activation_risk")
		if !changed {
			return nil, errors.New("failed to set proposal_path")
		}
	}

	return updated, nil
}

func validateStatusTransition(current string, next string) error {
	if current == next {
		return nil
	}

	allowed := map[string]map[string]bool{
		"container": {"proposal": true},
		"proposal":  {"controlled_activation": true},
	}

	if allowed[current][next] {
		return nil
	}

	return fmt.Errorf("status transition %q -> %q is not allowed in V1", current, next)
}

func valueForKey(lines []string, key string) (string, bool) {
	prefix := key + ":"
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, prefix) {
			return parseQuotedValue(trimmed[len(prefix):]), true
		}
	}
	return "", false
}

func parseQuotedValue(raw string) string {
	value := strings.TrimSpace(raw)
	value = strings.Trim(value, "\"")
	return value
}

func setExistingKey(lines []string, key string, value string) []string {
	prefix := key + ":"
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, prefix) {
			indent := line[:len(line)-len(strings.TrimLeft(line, " \t"))]
			lines[i] = fmt.Sprintf("%s%s: \"%s\"", indent, key, value)
			return lines
		}
	}
	return lines
}

func setOptionalKey(lines []string, key string, value string, indent string, beforeKey string) ([]string, bool) {
	if _, ok := valueForKey(lines, key); ok {
		return setExistingKey(lines, key, value), true
	}

	beforePrefix := beforeKey + ":"
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, beforePrefix) {
			inserted := fmt.Sprintf("%s%s: \"%s\"", indent, key, value)
			updated := append([]string{}, lines[:i]...)
			updated = append(updated, inserted)
			updated = append(updated, lines[i:]...)
			return updated, true
		}
	}

	return lines, false
}

func equalLines(a []string, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

func renderBlockDiff(before []string, after []string, agentID string) string {
	var builder strings.Builder
	builder.WriteString(fmt.Sprintf("--- agent %s before\n", agentID))
	builder.WriteString(fmt.Sprintf("+++ agent %s after\n", agentID))

	max := len(before)
	if len(after) > max {
		max = len(after)
	}

	for i := 0; i < max; i++ {
		var beforeLine string
		var afterLine string
		if i < len(before) {
			beforeLine = before[i]
		}
		if i < len(after) {
			afterLine = after[i]
		}

		if beforeLine == afterLine {
			continue
		}
		if beforeLine != "" {
			builder.WriteString("-" + beforeLine + "\n")
		}
		if afterLine != "" {
			builder.WriteString("+" + afterLine + "\n")
		}
	}

	return builder.String()
}

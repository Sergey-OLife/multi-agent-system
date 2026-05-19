package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"strings"
)

var errAgentNotFound = errors.New("agent not found")

type mutationRequest struct {
	AgentID           string
	Status            string
	NextAction        string
	ProposalPath      string
	InsertIfMissing   bool
	WorkingNameRU     string
	Group             string
	ShipRole          string
	WhyNeeded         string
	MainFormula       string
	FirstFillPriority string
	ActivationRisk    string
	ApprovalGate      bool
}

type agentBlock struct {
	Start int
	End   int
	Lines []string
}

func main() {
	registryPath := flag.String("registry", "", "required path to agent_container_registry.md")
	agentID := flag.String("agent", "", "agent_id to update")
	status := flag.String("status", "", "new status")
	nextAction := flag.String("next-action", "", "new next_action")
	proposalPath := flag.String("proposal-path", "", "proposal_path to set")
	insertIfMissing := flag.Bool("insert-if-missing", false, "insert a missing proposal/container block deterministically")
	workingNameRU := flag.String("working-name-ru", "", "working_name_ru for inserted agent")
	group := flag.String("group", "", "group for inserted agent")
	shipRole := flag.String("ship-role", "", "ship_role for inserted agent")
	whyNeeded := flag.String("why-needed", "", "why_needed for inserted agent")
	mainFormula := flag.String("main-formula", "", "main_formula for inserted agent")
	firstFillPriority := flag.String("first-fill-priority", "P0", "first_fill_priority for inserted agent")
	activationRisk := flag.String("activation-risk", "medium", "activation_risk for inserted agent")
	approvalGate := flag.Bool("approval-gate", true, "approval_gate for inserted agent")
	dryRun := flag.Bool("dry-run", false, "print diff without writing")
	flag.Parse()

	request := mutationRequest{
		AgentID:           strings.TrimSpace(*agentID),
		Status:            strings.TrimSpace(*status),
		NextAction:        strings.TrimSpace(*nextAction),
		ProposalPath:      strings.TrimSpace(*proposalPath),
		InsertIfMissing:   *insertIfMissing,
		WorkingNameRU:     strings.TrimSpace(*workingNameRU),
		Group:             strings.TrimSpace(*group),
		ShipRole:          strings.TrimSpace(*shipRole),
		WhyNeeded:         strings.TrimSpace(*whyNeeded),
		MainFormula:       strings.TrimSpace(*mainFormula),
		FirstFillPriority: strings.TrimSpace(*firstFillPriority),
		ActivationRisk:    strings.TrimSpace(*activationRisk),
		ApprovalGate:      *approvalGate,
	}

	if strings.TrimSpace(*registryPath) == "" {
		exitWithError(errors.New("--registry is required; V1 has no cwd-dependent default path"))
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
		if errors.Is(err, errAgentNotFound) && request.InsertIfMissing {
			return insertMissingAgentBlock(content, lines, request)
		}
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
		return agentBlock{}, fmt.Errorf("%w: agent %q not found", errAgentNotFound, agentID)
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

func insertMissingAgentBlock(content string, lines []string, request mutationRequest) (string, string, error) {
	if err := validateInsertRequest(request); err != nil {
		return "", "", err
	}

	insertAt, err := findContainerInsertPosition(lines)
	if err != nil {
		return "", "", err
	}

	newBlock := renderInsertedAgentBlock(request)
	updatedLines := append([]string{}, lines[:insertAt]...)
	updatedLines = append(updatedLines, newBlock...)
	updatedLines = append(updatedLines, lines[insertAt:]...)

	updated := strings.Join(updatedLines, "\n")
	if strings.HasSuffix(content, "\n") {
		updated += "\n"
	}

	return updated, renderInsertDiff(newBlock, request.AgentID), nil
}

func validateInsertRequest(request mutationRequest) error {
	if request.Status == "" {
		return errors.New("--status is required when --insert-if-missing is used")
	}
	if request.NextAction == "" {
		return errors.New("--next-action is required when --insert-if-missing is used")
	}
	if request.ProposalPath == "" {
		return errors.New("--proposal-path is required when --insert-if-missing is used")
	}
	if request.WorkingNameRU == "" {
		return errors.New("--working-name-ru is required when --insert-if-missing is used")
	}
	if request.Group == "" {
		return errors.New("--group is required when --insert-if-missing is used")
	}
	if request.ShipRole == "" {
		return errors.New("--ship-role is required when --insert-if-missing is used")
	}
	if request.WhyNeeded == "" {
		return errors.New("--why-needed is required when --insert-if-missing is used")
	}
	if request.MainFormula == "" {
		return errors.New("--main-formula is required when --insert-if-missing is used")
	}
	if request.FirstFillPriority == "" {
		return errors.New("--first-fill-priority is required when --insert-if-missing is used")
	}
	if request.ActivationRisk == "" {
		return errors.New("--activation-risk is required when --insert-if-missing is used")
	}
	if request.Status != "container" && request.Status != "proposal" {
		return fmt.Errorf("status %q is not allowed for missing-agent insertion", request.Status)
	}
	return nil
}

func findContainerInsertPosition(lines []string) (int, error) {
	containersSeen := false
	lastBlockEnd := -1

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed == "containers:" {
			containersSeen = true
			continue
		}
		if !containersSeen {
			continue
		}
		if strings.HasPrefix(trimmed, "- agent_id: ") {
			lastBlockEnd = i + 1
			for j := i + 1; j < len(lines); j++ {
				candidate := strings.TrimSpace(lines[j])
				if strings.HasPrefix(candidate, "- agent_id: ") || candidate == "```" {
					lastBlockEnd = j
					break
				}
				lastBlockEnd = j + 1
			}
		}
		if trimmed == "```" {
			if lastBlockEnd == -1 {
				return i, nil
			}
			return lastBlockEnd, nil
		}
	}

	return 0, errors.New("containers section closing fence was not found")
}

func renderInsertedAgentBlock(request mutationRequest) []string {
	return []string{
		"",
		fmt.Sprintf("    - agent_id: \"%s\"", request.AgentID),
		fmt.Sprintf("      working_name_ru: \"%s\"", escapeYAMLString(request.WorkingNameRU)),
		fmt.Sprintf("      group: \"%s\"", escapeYAMLString(request.Group)),
		fmt.Sprintf("      status: \"%s\"", request.Status),
		fmt.Sprintf("      ship_role: \"%s\"", escapeYAMLString(request.ShipRole)),
		fmt.Sprintf("      why_needed: \"%s\"", escapeYAMLString(request.WhyNeeded)),
		fmt.Sprintf("      main_formula: \"%s\"", escapeYAMLString(request.MainFormula)),
		fmt.Sprintf("      first_fill_priority: \"%s\"", escapeYAMLString(request.FirstFillPriority)),
		fmt.Sprintf("      next_action: \"%s\"", escapeYAMLString(request.NextAction)),
		fmt.Sprintf("      proposal_path: \"%s\"", escapeYAMLString(request.ProposalPath)),
		fmt.Sprintf("      activation_risk: \"%s\"", escapeYAMLString(request.ActivationRisk)),
		fmt.Sprintf("      approval_gate: %t", request.ApprovalGate),
	}
}

func escapeYAMLString(value string) string {
	value = strings.ReplaceAll(value, "\\", "\\\\")
	value = strings.ReplaceAll(value, "\"", "\\\"")
	return value
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

func renderInsertDiff(block []string, agentID string) string {
	var builder strings.Builder
	builder.WriteString(fmt.Sprintf("--- agent %s before\n", agentID))
	builder.WriteString(fmt.Sprintf("+++ agent %s after\n", agentID))
	for _, line := range block {
		if line == "" {
			continue
		}
		builder.WriteString("+" + line + "\n")
	}
	return builder.String()
}

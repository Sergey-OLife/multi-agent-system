package main

func addRequiredDiagnostic(diagnostics *[]Diagnostic, requiredUpdates *[]string, severity string, code string, file any, message string, suggestedFix string, requiredUpdate string) {
	*diagnostics = append(*diagnostics, diagnostic(severity, code, file, message, suggestedFix))
	*requiredUpdates = append(*requiredUpdates, requiredUpdate)
}

func addBlockedDiagnostic(diagnostics *[]Diagnostic, blockedActions *[]string, severity string, code string, file any, message string, suggestedFix string, blockedAction string) {
	*diagnostics = append(*diagnostics, diagnostic(severity, code, file, message, suggestedFix))
	*blockedActions = append(*blockedActions, blockedAction)
}

func validationStatus(requiredUpdates []string, blockedActions []string) string {
	if len(blockedActions) > 0 {
		return "blocked"
	}

	if len(requiredUpdates) > 0 {
		return "needs_revision"
	}

	return "ready"
}

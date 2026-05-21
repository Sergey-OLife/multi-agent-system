// Package lifecycle defines a small contract vocabulary for the highest-risk
// lifecycle status confusions in the project.
//
// This package is intentionally not workflow enforcement. It does not route,
// validate PRs, update state, run CI, or act as a hard guardrail. It only
// exposes pure checks that can be exercised by tests and future callers.
package lifecycle

import "fmt"

// EntityType identifies the project artifact being described.
type EntityType string

const (
	EntityAgent      EntityType = "agent"
	EntityArchive    EntityType = "archive"
	EntityState      EntityType = "state"
	EntityScript     EntityType = "script"
	EntitySourceCard EntityType = "source_card"
)

// Stage describes a lifecycle status word used in project artifacts.
type Stage string

const (
	StageProposal         Stage = "proposal"
	StageMechanics        Stage = "mechanics"
	StageManualDiscipline Stage = "manual_discipline"
	StageRouteAutomation  Stage = "route_automation"
	StageValidator        Stage = "validator"
	StageHardGuardrail    Stage = "hard_guardrail"
	StageRuntimeEnforce   Stage = "runtime_enforcement"
	StageCIEnforcement    Stage = "ci_enforcement"
	StageProjectState     Stage = "project_state"
	StageCheckpoint       Stage = "checkpoint"
	StageFullSource       Stage = "full_source"
	StageSourceReadProof  Stage = "source_read_proof"
)

// ScriptKind narrows script semantics when a script is used as an entity.
type ScriptKind string

const (
	ScriptKindUnspecified     ScriptKind = ""
	ScriptKindLocalDiagnostic ScriptKind = "local_diagnostic"
)

// Concept is a broader meaning that can be confused with a stage or entity.
type Concept string

const (
	ConceptValidator          Concept = "validator"
	ConceptHardGuardrail      Concept = "hard_guardrail"
	ConceptRouteAutomation    Concept = "route_automation"
	ConceptRuntimeEnforcement Concept = "runtime_enforcement"
	ConceptCIEnforcement      Concept = "ci_enforcement"
	ConceptProjectState       Concept = "project_state"
	ConceptCheckpoint         Concept = "checkpoint"
	ConceptFullSource         Concept = "full_source"
	ConceptSourceReadProof    Concept = "source_read_proof"
)

var allowedEntityStages = map[EntityType]map[Stage]bool{
	EntityAgent: {
		StageProposal:         true,
		StageManualDiscipline: true,
	},
	EntityArchive: {
		StageMechanics:        true,
		StageManualDiscipline: true,
	},
	EntityState: {},
	EntityScript: {
		StageMechanics:        true,
		StageManualDiscipline: true,
	},
	EntitySourceCard: {
		StageProposal:  true,
		StageMechanics: true,
	},
}

var forbiddenEntityStages = map[EntityType]map[Stage]bool{
	EntityArchive: {
		StageProjectState:   true,
		StageCheckpoint:     true,
		StageValidator:      true,
		StageHardGuardrail:  true,
	},
	EntityState: {
		StageProposal:       true,
		StageHardGuardrail:  true,
		StageRuntimeEnforce: true,
	},
	EntityScript: {
		StageValidator:      true,
		StageCIEnforcement:  true,
		StageHardGuardrail:  true,
	},
	EntitySourceCard: {
		StageFullSource:      true,
		StageSourceReadProof: true,
		StageHardGuardrail:   true,
	},
}

var forbiddenStageConfusions = map[Stage]map[Concept]bool{
	StageProposal: {
		ConceptValidator:     true,
		ConceptHardGuardrail: true,
	},
	StageManualDiscipline: {
		ConceptRouteAutomation: true,
		ConceptValidator:       true,
		ConceptHardGuardrail:   true,
	},
}

// AllowedEntityStage reports whether an entity/stage pair is explicitly allowed
// by the v1 contract vocabulary.
func AllowedEntityStage(entity EntityType, stage Stage) (bool, error) {
	if entity == "" {
		return false, fmt.Errorf("entity type is required")
	}
	if stage == "" {
		return false, fmt.Errorf("stage is required")
	}

	allowedStages, known := allowedEntityStages[entity]
	if !known {
		return false, fmt.Errorf("unknown entity type %q", entity)
	}
	if isForbiddenEntityStage(entity, stage) {
		return false, nil
	}
	return allowedStages[stage], nil
}

// ForbiddenEntityStage reports whether an entity/stage pair is explicitly
// forbidden by the v1 contract vocabulary.
func ForbiddenEntityStage(entity EntityType, stage Stage) (bool, error) {
	if entity == "" {
		return false, fmt.Errorf("entity type is required")
	}
	if stage == "" {
		return false, fmt.Errorf("stage is required")
	}
	if _, known := allowedEntityStages[entity]; !known {
		return false, fmt.Errorf("unknown entity type %q", entity)
	}
	return isForbiddenEntityStage(entity, stage), nil
}

// ConfusionError returns an error when a lifecycle stage is being confused with
// a stronger concept that v1 explicitly forbids.
func ConfusionError(stage Stage, concept Concept) error {
	if stage == "" {
		return fmt.Errorf("stage is required")
	}
	if concept == "" {
		return fmt.Errorf("concept is required")
	}
	if forbiddenStageConfusions[stage][concept] {
		return fmt.Errorf("%s must not be treated as %s", stage, concept)
	}
	return nil
}

// IsConfusedWith reports whether ConfusionError would reject the pair.
func IsConfusedWith(stage Stage, concept Concept) bool {
	return forbiddenStageConfusions[stage][concept]
}

// ScriptCanBeLocalDiagnostic reports whether the script kind is an explicitly
// accepted local diagnostic kind. This does not make the script a validator or
// CI enforcement.
func ScriptCanBeLocalDiagnostic(kind ScriptKind) bool {
	return kind == ScriptKindLocalDiagnostic
}

func isForbiddenEntityStage(entity EntityType, stage Stage) bool {
	return forbiddenEntityStages[entity][stage]
}

package lifecycle

import "testing"

func TestAllowedPairs(t *testing.T) {
	pairs := []struct {
		entity EntityType
		stage  Stage
	}{
		{EntityAgent, StageProposal},
		{EntityAgent, StageManualDiscipline},
		{EntityArchive, StageMechanics},
		{EntityArchive, StageManualDiscipline},
		{EntityScript, StageMechanics},
		{EntityScript, StageManualDiscipline},
		{EntitySourceCard, StageProposal},
		{EntitySourceCard, StageMechanics},
	}
	for _, pair := range pairs {
		ok, err := AllowedEntityStage(pair.entity, pair.stage)
		if err != nil || !ok {
			t.Errorf("pair should be allowed: %s %s", pair.entity, pair.stage)
		}
	}
}

func TestForbiddenPairs(t *testing.T) {
	pairs := []struct {
		entity EntityType
		stage  Stage
	}{
		{EntityArchive, StageProjectState},
		{EntityArchive, StageCheckpoint},
		{EntityState, StageProposal},
		{EntityState, StageHardGuardrail},
		{EntityState, StageRuntimeEnforce},
		{EntityScript, StageValidator},
		{EntityScript, StageCIEnforcement},
		{EntitySourceCard, StageFullSource},
		{EntitySourceCard, StageSourceReadProof},
	}
	for _, pair := range pairs {
		ok, err := ForbiddenEntityStage(pair.entity, pair.stage)
		if err != nil || !ok {
			t.Errorf("pair should be forbidden: %s %s", pair.entity, pair.stage)
		}
	}
}

func TestConfusions(t *testing.T) {
	pairs := []struct {
		stage   Stage
		concept Concept
	}{
		{StageProposal, ConceptValidator},
		{StageProposal, ConceptHardGuardrail},
		{StageManualDiscipline, ConceptRouteAutomation},
		{StageManualDiscipline, ConceptValidator},
		{StageManualDiscipline, ConceptHardGuardrail},
	}
	for _, pair := range pairs {
		if ConfusionError(pair.stage, pair.concept) == nil {
			t.Errorf("confusion should be reported: %s %s", pair.stage, pair.concept)
		}
	}
}

func TestInputs(t *testing.T) {
	if _, err := AllowedEntityStage("", StageProposal); err == nil {
		t.Errorf("empty entity should return an error")
	}
	if _, err := AllowedEntityStage(EntityType("unknown"), StageProposal); err == nil {
		t.Errorf("unknown entity should return an error")
	}
	if err := ConfusionError(StageProposal, ""); err == nil {
		t.Errorf("empty concept should return an error")
	}
}

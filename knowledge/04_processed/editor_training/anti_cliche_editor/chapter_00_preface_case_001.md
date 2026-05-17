# Anti-Cliche Editor Training Case 001

metadata:
- case_id: chapter_00_preface_case_001
- target_agent: anti_cliche_editor
- source_artifact: book/01_drafts/chapter_00_preface.md
- review_material: user-provided mature editor review of preface draft
- status: training_case
- created_at: 2026-05-17

## Purpose

This case trains `anti_cliche_editor` to distinguish between ordinary cliches, correct-but-declarative ethics, strong scene-based replacements, and stylish but risky replacements.

The goal is not to make the chapter louder. The goal is to make the text more precise without importing the wrong register.

## Core diagnosis

The draft has a strong ethical position, but parts of it sound like a correct ethical manifesto. The weakness is not the idea. The weakness is that some sentences explain values too directly instead of showing the moment where the value is tested.

Typical risk words:
- honesty
- person
- trust
- boundary
- responsibility
- conscience

These words are not forbidden. They become weak when they appear without scene, price, or action.

## Four-state classification

### 1. Tired cliche

A phrase may be true and still too worn.

Examples:
- `В жизни так не работает`
- `Скепсис не враг`
- `Человек важнее сделки`
- `Карта не идёт ногами`

Required action: replace or sharpen through a concrete situation.

### 2. Correct declaration

The sentence is ethically right but still abstract.

Example pattern:
- the text talks about trust, boundaries, honesty, responsibility, or the person in direct moral language;
- the reader can agree without seeing themselves in a specific moment.

Required action: move from moral statement to tested scene.

### 3. Strong scene replacement

A strong replacement gives the reader object, situation, and price.

Good examples:
- `Карта покажет маршрут, но не проживёт за вас неловкий разговор.`
- `Где деньги появляются через отношения, там нельзя делать вид, что отношения — расходный материал.`

Why they work:
- the abstract idea becomes an action;
- the sentence contains cost or consequence;
- the reader can recognize a real moment.

### 4. Stylish danger

A phrase can be sharper and still wrong for the current scene.

Example:
- `человек не обязан быть удобным для вашей воронки`

Verdict:
- strong: yes;
- precise: yes;
- safe for a reader-facing preface: questionable.

Risk: it imports marketing language too early and may push the reader into business vocabulary before the ethical frame is stable.

Required action: mark as `register_risk`, not as automatically approved.

## Main rule

Not every strong sentence belongs to the current scene.

A weak editor asks: did the phrase become sharper?

A mature editor asks: did the phrase become sharper without bringing a false register, excess aggression, decorative cleverness, or premature business language?

## Specific checks for `anti_cliche_editor`

1. Detect tired phrases.
2. Detect moral abstractions that need a scene.
3. Detect repeated contrast structure: `not this, but that`.
4. Detect marketing terms in reader-facing chapter openings: funnel, lead, conversion, script.
5. Separate approved replacements from risky replacements.
6. Prefer scene, action, and price over elegant aphorism.
7. Preserve `Тихий Мастер`: strength without shouting, precision without pose, ethics without sermon.

## Recommended output fields

- `detectedCliches`
- `moralAbstractions`
- `overusedContrastPattern`
- `sceneReplacementSuggestions`
- `registerRisks`
- `approvedReplacements`
- `riskyReplacements`
- `decisionRule`
- `recommendedAction`

## Do not do

- Do not turn every line into a punchline.
- Do not replace one cliche with a more expensive cliche.
- Do not insert marketing vocabulary into an opening chapter unless the scene requires it.
- Do not mistake polarization for maturity.
- Do not remove ethical language completely; anchor it in action instead.

## Short formula

Cliche -> declaration -> scene -> register check -> only then replacement.

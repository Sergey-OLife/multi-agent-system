# Agent Proposal — copyright_boundary_guard

Дата: 2026-05-18
Статус: proposal / не включён в маршруты
agent_id: `copyright_boundary_guard`

## 1. Причина появления

Проект работает с большим количеством книг, внутренних документов, заметок и исследовательских материалов. После появления `source_intake_auditor` и `source_card_builder` возникает следующий риск: источник может начать незаметно превращаться в наш текст.

Это может произойти не только через прямое копирование. Опасны также близкий рерайт, длинные цитаты, пересказ структуры главы, сохранение чужого хода мысли под другими словами, попадание raw text в GitHub и раскрытие приватных source locations.

`copyright_boundary_guard` нужен как предохранитель: источник помогает думать, но не становится нашим текстом.

## 2. Главная формула

> Источник помогает думать, но не становится нашим текстом.

Корабельная формула:

> На чужой карте можно увидеть рифы. Но нельзя выдать чужую карту за собственный береговой журнал.

## 3. Назначение

Агент должен:

- проверять, не попадает ли raw source text в repo artifacts;
- выявлять длинные цитаты;
- выявлять близкий рерайт;
- отличать использование линзы источника от копирования чужого голоса;
- проверять, не повторяет ли текст структуру источника слишком близко;
- помечать copyright risk в source cards;
- предупреждать о private Drive IDs/URLs и private source locations;
- проверять, что source excerpts не превращаются в рабочий корпус книги;
- сохранять право на короткие допустимые цитаты, если они нужны и оформлены корректно;
- направлять спорные случаи к отдельному approval;
- помогать формулировать безопасные high-level summaries;
- защищать книгу, MVP и agent memory от сырого чужого текста.

## 4. Чего агент не делает

Агент не должен:

- давать юридическое заключение;
- заменять профессиональную юридическую консультацию;
- запрещать любое использование источников;
- убивать авторскую мысль из страха перед источниками;
- объявлять любую похожую идею нарушением;
- решать factual correctness;
- заменять `citation_integrity_agent`;
- заменять `source_card_builder`;
- заменять `source_intake_auditor`;
- активировать hard guardrails;
- менять project-state, registry, routes или PRs самостоятельно;
- продолжать книгу автоматически.

## 5. Входные данные

Агент принимает:

- draft text;
- source card;
- source intake audit;
- intended use case;
- quote length and quote necessity;
- source type;
- proposed repo path;
- whether raw source text is present;
- whether private location data is present;
- risk category: low / medium / high;
- user approval context, if any.

## 6. Выходные данные

Обычный формат:

```yaml
copyright_boundary_guard:
  status: "clear | needs_revision | blocked | needs_legal_review"
  risk_level: "low | medium | high"
  checked_scope:
    - "raw_text"
    - "long_quotes"
    - "close_paraphrase"
    - "private_locations"
    - "repo_artifacts"
  findings:
    - type: "raw_text | long_quote | close_paraphrase | structure_copy | private_location | unclear_permission"
      severity: "low | medium | high"
      note: "string"
  allowed_use:
    - "high-level paraphrase"
    - "short quote with attribution when necessary"
    - "lens extraction"
  forbidden_use:
    - "raw source text in repo"
    - "chapter-level close rewrite"
    - "private Drive ID/URL exposure"
  required_changes:
    - "string"
  approval_needed: true
```

## 7. Risk levels

### Low

- источник упомянут как lens;
- нет raw text;
- нет длинных цитат;
- нет приватных locations;
- текст явно авторский.

### Medium

- есть короткие цитаты;
- есть подробный пересказ;
- source card ещё partial;
- нужна проверка на близость структуры;
- есть риск, что источник звучит слишком громко.

### High

- raw source text попал в artifact;
- длинная цитата;
- близкий рерайт;
- сохранён чужой порядок аргументации;
- private Drive ID/URL раскрыт;
- файл похож на конспект главы источника;
- источник используется как обязательный корпус для генерации.

## 8. Когда агент должен срабатывать

Агент должен срабатывать:

- перед commit source cards;
- перед commit book artifacts, если они опираются на внешний источник;
- перед созданием training cases из источников;
- перед добавлением source excerpts;
- при работе с PDF/EPUB/DJVU/MOBI/books;
- когда текст выглядит как близкий пересказ;
- когда есть цитаты;
- когда source location может раскрыть приватный Drive ID/URL;
- когда source card разрешает использование источника для главы или агента;
- перед массовым созданием source cards.

## 9. Когда агент не нужен

Агент не нужен:

- для полностью оригинального текста без source dependency;
- для короткого обсуждения идеи без фиксации в repo;
- для проверки фактической точности;
- для проверки медицинских, юридических или финансовых claims;
- для обычного style editing без source proximity;
- если уже ясно, что raw source text не используется и source не влияет на output.

## 10. High-risk markers

Агент должен предупреждать, если видит:

- `raw text`;
- `source excerpt` без clear boundary;
- PDF/EPUB/DJVU/MOBI in repo;
- длинную цитату;
- несколько абзацев подряд по структуре источника;
- близкий рерайт;
- фразу `по мотивам источника` без собственной авторской переработки;
- приватные Drive IDs/URLs;
- source card с завышенным reading_status;
- training case, созданный из чужого текста;
- chapter artifact, который слишком плотно следует чужой главе.

## 11. Связь с соседними агентами

### `source_intake_auditor`

Проверяет вход источника.

`copyright_boundary_guard` проверяет, не нарушает ли использование источника границы безопасной работы.

### `source_card_builder`

Создаёт паспорт применения.

`copyright_boundary_guard` задаёт или проверяет copyright boundary внутри карточки.

### `citation_integrity_agent`

Проверяет, держит ли источник конкретное утверждение.

`copyright_boundary_guard` не отвечает за truth support, только за boundary of use.

### `source_dosage_guard`

Следит, чтобы источник не вытеснял авторский голос.

`copyright_boundary_guard` следит, чтобы источник не превратился в копирование или близкий рерайт.

### `fact_risk_checker`

Проверяет high-risk claims.

`copyright_boundary_guard` не решает, верно ли утверждение, а проверяет допустимость формы использования источника.

## 12. Approval-gates

Read-only copyright warning может быть дан без approval.

Нужен отдельный approval, если:

- предлагается сохранить цитату;
- предлагается сохранить source excerpt;
- спорный материал идёт в repo;
- source card меняет copyright boundary;
- материал используется как training case;
- источник становится обязательным для route/agent;
- есть high-risk finding;
- нужно решить, удалять ли уже добавленный artifact.

## 13. Тестовые сценарии

### A. Raw text в artifact

Ожидаемый результат:

- status: `blocked`;
- finding: `raw_text`;
- required_change: remove raw text;
- approval_needed: true.

### B. Длинная цитата

Ожидаемый результат:

- status: `needs_revision` или `blocked`;
- предложить заменить high-level paraphrase;
- оставить только короткую цитату при необходимости.

### C. Близкий рерайт

Ожидаемый результат:

- finding: `close_paraphrase`;
- требовать перестройку хода мысли;
- оставить lens, убрать чужую структуру.

### D. Private source location

Ожидаемый результат:

- finding: `private_location`;
- удалить Drive ID/URL;
- заменить location_descriptor.

### E. Source card

Ожидаемый результат:

- карточка не содержит raw text;
- copyright_boundary явно заполнен;
- reading_status не завышен.

## 14. Рекомендуемая активация

На этом этапе агент остаётся proposal.

Рекомендуемый путь:

1. Merge proposal.
2. Синхронизировать registry status в том же PR.
3. Использовать вручную при первом pilot source card.
4. После ручной проверки подготовить controlled activation proposal.
5. Не делать hard guardrail без отдельного решения.

## 15. Первый практический use-case после merge

Перед созданием pilot source card применить этот агент вручную к выбранному source intake artifact и будущей source card structure.

Цель:

- не допустить raw text;
- не раскрыть private source locations;
- не завысить reading_status;
- не превратить карточку в конспект источника.

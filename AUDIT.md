# Conversion audit — teaching-and-teacher-education

Produced by the Learning Resource Kit converter (`apply/convert.mjs`) from the single-file original (previous revision in git history).

## Findings

- Custom properties prefixed with --lr-: 26 (gold-soft, accent2, accent3, paper2, paper3, panel2, panel3, accent, paper, navy2, panel, line2, muted, serif, navy, line, body, gold, good, warn, sans, maxw, ink, dim, bad, r).
- Inline style attributes converted to classes: 63 occurrences, 12 distinct declarations.
- Inline script blocks moved to src/page.js: 1; shared collapsible script replaced by the kit: 1.
- No <main> landmark in the original; content between the top nav and the footer wrapped in <main>.
- Buttons given an explicit type: 5; tables given a <tbody>: 2; <th> given a scope: 4; raw ampersands encoded: 2; top navigation given an accessible name.
- Sections with ids: 11 (learning, effective, hlp, culturally, teachered, math, science, curriculum, theoryquiz, assessment, glossary).

## What changed for the reader

- Executive Shell header, KPI strip (sections, reading time, sections opened, quiz, statements) and footer.
- Collapsible sections are keyboard-operable with saved progress; deep links still open their section.
- A five-question quiz at the end records xAPI 1.0.3 statements in the browser only.
- A print stylesheet expands every section.
- Strict content-security policy: no inline script or style, no network calls.

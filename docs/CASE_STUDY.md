# Case Study — Teaching, Teacher Education & Curriculum

**Repository:** [teaching-and-teacher-education](https://github.com/Freddricklogan/teaching-and-teacher-education) · **Live demo:** [freddricklogan.github.io/teaching-and-teacher-education](https://freddricklogan.github.io/teaching-and-teacher-education/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Teacher candidates in a preparation programme, the instructional coaches and mentor teachers who develop them, curriculum directors who adopt materials for a district, and the faculty who teach all of the above. I work in educational technology and instructional design at Illinois Tech and have designed courses across disciplines; the gap I see is the same at every level: people can name the learning theory in a seminar and cannot see it in a lesson.

## 2. The problem, as a scenario

A second-year teacher runs a lively group task, calls it constructivist, and is puzzled that students finish with the same misconception they started with. Her coach watches and sees a discussion with no elicitation of thinking, no check for understanding, and a task that never required anyone to revise a belief. Down the hall, the mathematics department adopts a programme praised for "fluency" that drills procedures nobody understands, and the curriculum map lists the topics covered without a single piece of evidence that learning transferred. Everyone involved is fluent in the vocabulary. The link from theory to move, and from move to design, was never made explicit.

## 3. What it costs to leave it alone

Novices who learn to imitate the surface of good teaching without its mechanism, professional development that changes talk but not practice, and curricula that cover without building. I will not put a figure on it — the cost lands on students in ways that do not price cleanly and on districts in adoption budgets that vary by orders of magnitude. What is certain is that the moves are learnable, the practice-based literature says how, and the connection can be taught in a page that asks the reader to make it.

## 4. The approach, and the alternative I rejected

I wrote an eleven-section resource that makes the connection the reader's job. It grounds teaching in five learning traditions and their classroom implications, then names the high-leverage practices — eliciting thinking, explaining and modelling, leading discussions, checking understanding, culturally responsive teaching — in an explorer that shows what each looks like in a room, not only what it is called. A scored self-check presents five classroom activities and asks which theory each reflects, with immediate feedback on why. Around them sit Shulman's pedagogical content knowledge, Ladson-Billings and the inclusive-teaching tradition, practice-based teacher education after Ball, Forzani and Grossman, the field's own frameworks for mathematics and science, curriculum as intended, enacted, hidden and assessed with backward design at scale, and assessment for and of learning. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was a methods textbook chapter list: theory, then practices, then disciplines, each self-contained. That is what candidates already have, and it produces the fluent-but-blind teacher in the scenario.

## 5. What the code does today

Real: the authored content across eleven sections with an executive summary and glossary; two working widgets — the high-leverage practice explorer and the scored learning-theory self-check — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: nothing. The scenarios in the self-check are composites written for teaching; the disciplinary sections cite NCTM and the NRC framework rather than reproducing them.

Worth knowing: reading time is words at 230 per minute and includes the self-check's rendered items; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 63 inline style attributes replaced by 12 classes, 26 custom properties namespaced, 5 buttons typed, 2 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; the fifth practice tab activates culturally responsive teaching, two self-check answers score 1 of 5 with the running message updated; Expand all opens 11 of 11 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a preparation programme it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin in the content-security policy — and a second reader for the questions if it counts toward a credential. Days of integration; the content does not change.

## 8. Limits and next steps

Two widgets; five self-check items; mathematics and science only among the disciplines; no video of the practices. Next: literacy and social-studies sections, a rehearsal planner that exports a one-page approximation of practice, more self-check items drawn by the reader, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I connect learning theory to observable teaching moves and curriculum decisions, and package the teaching to a standard an institution can adopt.
**Consulting client:** the frame I use to review a curriculum adoption or a coaching programme — theory, move, design, evidence.
**Engineer:** read `src/page.js` for the self-check's DOM-built items and scoring, and `tests/kit.test.js` for the kit mounted against this page's real markup.

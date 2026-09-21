/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Teaching, Teacher Education & Curriculum',
  tagline: 'A graduate-level guide to the craft of teaching, how teachers are prepared and developed, and how curriculum is designed: learning theories, high-leverage practices, culturally responsive teaching, practice-based teacher education, mathematics and science education, curriculum design and assessment, with a practice explorer and a scored theory self-check.',
  repo: 'https://github.com/Freddricklogan/teaching-and-teacher-education',
  pagesUrl: 'https://freddricklogan.github.io/teaching-and-teacher-education/',
  quizTitle: 'Five questions on teaching and curriculum',
  quiz: [
    {
      id: 'pck',
      prompt: 'What does Shulman’s pedagogical content knowledge add to knowing a subject?',
      options: ['Classroom-management routines', 'Knowing how to represent the subject — the analogies, examples and predictable misconceptions — so it becomes comprehensible', 'Familiarity with the state standards', 'A repertoire of assessment formats'],
      answer: 1,
      explanation: 'PCK is the amalgam of content and pedagogy unique to teachers: not just the subject, but the representations that make it learnable and the misconceptions students bring. It sits alongside content knowledge and general pedagogical knowledge.'
    },
    {
      id: 'zpd',
      prompt: 'A teacher sets a task just beyond what students can do alone, has them work in pairs with prompts, then fades the support. Which tradition is that?',
      options: ['Behaviorism', 'Cognitivism', 'Social constructivism', 'Connectivism'],
      answer: 2,
      explanation: 'Working in Vygotsky’s Zone of Proximal Development with scaffolding that is gradually withdrawn is the social-constructivist signature; behaviorism would reinforce practice, cognitivism would manage load with worked examples.'
    },
    {
      id: 'crp',
      prompt: 'Which are Ladson-Billings’ three pillars of culturally relevant pedagogy?',
      options: ['Rigour, relevance, relationships', 'Academic success, cultural competence, sociopolitical consciousness', 'Knowledge, skills, dispositions', 'Content, process, product'],
      answer: 1,
      explanation: 'High expectations for academic success, students affirmed in their own culture while accessing others, and using knowledge to critique and act on inequity; later work extends the frame toward culturally sustaining pedagogy.'
    },
    {
      id: 'fluency',
      prompt: 'How does the resource describe the relationship between conceptual understanding and procedural fluency in mathematics?',
      options: ['Rivals: schools must choose one', 'Partners: fluency built on understanding transfers, fluency without it is brittle', 'Sequential: fluency first, understanding later', 'Unrelated: they are assessed separately'],
      answer: 1,
      explanation: 'NCTM’s Principles to Actions frames the two as partners. Conceptual understanding is knowing why a procedure works; procedural fluency carries it out accurately, efficiently and flexibly, and only fluency built on understanding transfers.'
    },
    {
      id: 'ubd',
      prompt: 'In what order does backward design (Wiggins and McTighe) proceed?',
      options: ['Plan activities, then write objectives, then assess', 'Identify desired results, determine acceptable evidence, then plan learning experiences', 'Choose a textbook, map its chapters, then test', 'Assess prior knowledge, teach, then set goals'],
      answer: 1,
      explanation: 'Understanding by Design starts from enduring understandings, decides what evidence would show them, and only then plans instruction — at curriculum scale it keeps every unit accountable to transfer goals rather than coverage.'
    }
  ]
};

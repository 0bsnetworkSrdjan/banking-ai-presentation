// ─── Language configuration ────────────────────────────────────────────────
// Derived from ---META--- in src/content/slides new.md

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'sr', label: 'SR' },
]

export const DEFAULT_LANG = 'en'

// ─── Slides (UniCredit masterclass — content from slides new.md) ───────────

export const slides = [
  {
    id: 'xK9mP2wQ4r',
    layout: 'title',
    section: 'Introduction',
    tone: 'section-b',
    style: 'tinted',
    animation: 'blur-in',
    anim_duration: 1.1,
    anim_stagger: 0.22,
    no_translate: true,
    title: '"You are performing a dream."',
    subtitle: '— Anthropic',
  },
  {
    id: 'pL4hW9nX2q',
    layout: 'title',
    section: 'Introduction',
    tone: 'section-b',
    style: 'tinted',
    animation: 'blur-in',
    anim_duration: 1.1,
    anim_stagger: 0.22,
    title: {
      en: '"You are ++performing++ a dream."',
      sr: '"You are ++performing++ a dream."',
    },
    subtitle: {
      en: '— Anthropic',
      sr: '— Anthropic',
    },
    quoteVariants: {
      sr: ['"Izvodiš / sprovodiš u delo san."', '"Igraš / glumiš san."'],
    },
  },
  {
    id: 'rT5kN8mJ1w',
    layout: 'title',
    section: 'Introduction',
    tone: 'section-a',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'AI Demystified',
    subtitle:
      'Masterclass on AI in Banking for UniCredit Srbija\n\nFrom buzzwords to real world business.\nPractical guide to Generative AI & LLMs for decision-makers',
  },
  {
    id: 'bV2gK6sY9q',
    layout: 'two-col',
    section: 'Introduction',
    title: 'Your guides today',
    tone: 'section-a',
    animation: 'fade-up',
    intro:
      'Blockstruct GmbH, member of AI Factory Austria AI:AT hub\n\nAI Applications for Business. Zero Bullshit.\n\nEuropean Tech. Team in Austria, Serbia, UK, Montenegro, Croatia.',
    left: {
      title: 'Srđan Kuprešanin',
      subtitle: 'Founder & CEO',
      body:
        'Mergers & Acquisitions advisory, Management Consulting, Cutting-edge Tech Architecture Design, Development and Implementation',
    },
    right: {
      title: 'Nikola Zrnić',
      subtitle: 'AI Solutions Engineer',
      body: 'Electrotechnical engineering, Full stack software solutions development, AI applications.',
    },
  },
  {
    id: 'nH8cF3pR7s',
    layout: 'two-col-split-right',
    section: 'Introduction',
    kicker: 'member of EU-wide AI technology ecosystem',
    title: 'AI Factory Austria AI:AT Hub',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      body:
        'Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €1.5B+ pan-European commitment to AI research, infrastructure and applications.',
      sections: [
        {
          heading: 'Led jointly by:',
          bullets: ['AIT — Austrian Institute of Technology', 'ACA — Advanced Computing Austria'],
        },
        {
          heading: 'Academic partners:',
          body:
            'TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator',
        },
      ],
      link: { label: 'www.ai-at.eu', href: 'http://www.ai-at.eu' },
    },
    rightTop: {
      stats: [
        { number: '19', label: 'AI factories across Europe' },
        { number: '€2.6B+', label: 'EU commitment' },
      ],
    },
    rightBottom: {
      title: 'Blockstruct at AI:AT',
      body:
        "One of the hub's business members, working at the intersection of AI research and real-world enterprise deployment. Today's masterclass was developed within this ecosystem framing.",
    },
  },
  {
    id: 'wC5pM8jQ2x',
    layout: 'icon-grid',
    section: 'Introduction',
    kicker: 'What you will leave with',
    title: 'About This Masterclass',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.1,
    intro:
      "By the end of this workshop, you won't be AI engineers. You'll be AI-literate decision-makers — which is frankly more useful.",
    iconItems: [
      {
        icon: 'brain',
        label: 'Understand the Technology',
        body: 'What LLMs actually are, how they learn, and what they genuinely can (and cannot) do.',
      },
      {
        icon: 'layers',
        label: 'Design Better Applications',
        body: 'Identify where AI creates real value in your workflows, starting with sales and client relationships.',
      },
      {
        icon: 'help-circle',
        label: 'Ask Better Questions',
        body: 'Have a mental framework to evaluate AI proposals, pilots / POC projects, and vendor claims.',
      },
      {
        icon: 'gift',
        label: 'Bonus',
        body: 'Brainstorm, identify and start developing 2–3 "low hanging fruit" wins for your first POC projects.',
      },
    ],
  },
  {
    id: 'kJ7nB4qW1v',
    layout: 'title',
    section: 'Introduction',
    kicker: 'UniCredit Srbija · The Opportunity',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'The Window Is Open.',
    subtitle:
      "While the Group focuses on its most significant strategic move in years, country offices have the freedom — and the moment — to define their own AI agenda.\n\nUniCredit Srbija has an opportunity to position itself as one of the Group's AI Centers of Excellence.",
  },
  {
    id: 'hQ3mK7vN5p',
    layout: 'toc',
    section: 'Introduction',
    kicker: 'Twelve Modules',
    title: "Today's Journey",
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.07,
    tocItems: [
      '1. **What Is This Thing?**',
      '2. **AI vs Human Intelligence** (Lizards and the Four Personalities — building the mental model for understanding LLMs)',
      '3. **Vectors in Multidimensional Space — Excuse Me?** (How AI encodes information and meaning)',
      '4. **The Frozen Chef** (Training, parameters, and teaching AI your stuff)',
      '5. **What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)',
      '6. **Why Does AI Lie?** (Hallucinations and the split brain analogy)',
      '7. **Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)',
      '8. **AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)',
      '9. **Safe Application of AI** (Cybersecurity implications, prompt injection)',
      '10. **The Big Picture** (Where we are, where we\'re going, and what stays human)',
      '11. **Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)',
      '12. **PoC Design Elaboration in Groups**',
    ],
  },
  {
    id: 'yF6kD4nM9h',
    layout: 'title',
    section: 'Module 1',
    chapter: '01',
    kicker: 'Module 1',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'What Is This Thing?',
    subtitle: 'Setting the mental model, and dispelling a few myths',
  },
  {
    id: 'cT8vB2pR5m',
    layout: 'four-quad',
    section: 'Module 2',
    chapter: '02',
    pre_title:
      'Neuroscientist. TED Talk Icon. Stroke Survivor. And, unexpectedly, one of the best frameworks for understanding human and artificial intelligence.',
    title: 'The Four Personalities (Dr. Jill Bolte Taylor)',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.09,
    quads: {
      topLeft: {
        title: 'Left Thinking',
        body:
          'Serial. Analytical. Logical. Language. Patterns and details. Details about Details. Categorization, Linear Reasoning, Beginnings, Developments and Endings. Planning, Problem Solving. Productivity, Structure, Predictions.',
        badge: 'Home of AI',
      },
      bottomLeft: {
        title: 'Left Emotional',
        body:
          'Comparative. Defining, Separating, Self-Protecting. Emotional Pain & Trauma. Learned Behaviours. Rewards & Losses, Reinforcement. Judgement, Reactivity, Blame. Anxiety, Wishes, Hopes, Urges.',
      },
      topRight: {
        title: 'Right Thinking',
        body:
          'Peaceful, Open, Holistic, Big Picture-Oriented, Expansive, Interconnecting, Meaning-assigning, "Transcendent", Wise.',
      },
      bottomRight: {
        title: 'Right Emotional',
        body:
          'Present, Sensory, Empathetic, Experiential (in the moment). Empathy, Joy, Compassion, Connection, Intuition.',
      },
    },
  },
  {
    id: 'qW3sN7gH1z',
    layout: 'single',
    section: 'Module 2',
    chapter: '02',
    kicker: 'The Core Mechanism',
    title: 'LLMs Are Serial Processors on Steroids',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: 'They do one thing, extraordinarily well:',
    blockquote: 'Predict the most likely next token, given everything they have received.',
    body2:
      'Everything LLMs do emerges from that one process — answering questions, writing poetry, interpreting a contract, drafting a sales pitch — performed at massive scale.\n\nThe world\'s most sophisticated autocomplete; one that has read every fiction and non-fiction book, research paper, forum discussion, manual, contract, and every other piece of text ever written, transcribed, or published and digitised on the internet.',
    body3: '***Not magic. Not remotely human. Still, genuinely remarkable when applied carefully.***',
  },
  {
    id: 'jP9mK6fL2w',
    layout: 'title',
    section: 'Module 3',
    chapter: '03',
    kicker: 'Module 3',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'Vectors in Multidimensional Space — Excuse Me?',
    subtitle: 'How AI encodes knowledge and meaning, illustrated.',
  },
]

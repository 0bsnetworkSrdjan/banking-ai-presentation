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
      '**What Is This Thing?** (the story of assembly robots)',
      '**AI vs Human Intelligence** (Lizards and the Four Personalities — building the mental model for understanding LLMs)',
      '**Vectors in Multidimensional Space — Excuse Me?** (How AI encodes information and meaning)',
      '**The Frozen Chef** (Training, parameters, and teaching AI your stuff)',
      '**What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)',
      '**Why Does AI Lie?** (Hallucinations and the split brain analogy)',
      '**Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)',
      '**AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)',
      '**Safe Application of AI** (Cybersecurity implications, prompt injection)',
      '**The Big Picture** (Where we are, where we\'re going, and what stays human)',
      '**Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)',
      '**PoC Design Elaboration in Groups**',
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
    id: 'm7nK4pQ9wR',
    layout: 'two-col',
    section: 'Module 1',
    chapter: '01',
    title: 'What is this thing - robot for text assembly.',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.1,
    left: {
      icon: 'robot-arm',
      title: 'Factory assembly robots',
      body:
        'We are used to seeing industrial robots and understand them intuitively, because they are basically computer-controlled arms.\n\nWe have arms. Are they brain-controlled robots?\n\nAn industrial robot arm can do a lot of damage if allowed to act randomly.',
    },
    right: {
      icon: 'text-stream',
      title: 'Text assembly robots',
      body:
        'We usually understand less about our text generating robots, but take a moment to listen to your own internal monologue.\n\nSimilarly to an industrial robot, a text assembly robot can do a lot of damage if allowed to act randomly.',
    },
  },
  {
    id: 'pR2vL8kN4m',
    layout: 'title',
    section: 'Module 2',
    chapter: '02',
    kicker: 'Module 2',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'AI vs Human Intelligence',
    subtitle:
      'Lizards, the four personalities, and a mental model for understanding LLMs',
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
    id: 'hK3nP9qW5x',
    layout: 'bullets-only',
    section: 'Module 2',
    chapter: '02',
    kicker: 'Human cognition',
    title: 'Human Thinking is a self-building reflective fluid of loops and branches',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.1,
    bullets: [
      'Human cognition = parallel, embodied, adaptive',
      'Multiple brain regions collaborate (analytical, emotional, sensory, intuitive)',
      'Continuous input: vision, sound, movement, touch, internal state',
      'Thought is recursive → we reflect, question, adjust in real time',
      'Decisions shaped by context + memory + emotion + feedback loops',
      'Brain constantly updates its model of reality',
    ],
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
  {
    id: 'kW8nR3pL9v',
    layout: 'title',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Module 7',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'Talk to AI Like a Pro',
    subtitle: 'Prompt & context engineering, iterative improvement',
  },
  {
    id: 'm4tQ7nJ2x',
    layout: 'toc',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Techniques',
    title: 'Prompt Engineering',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.06,
    tocItems: [
      '**Clear and specific instructions** — Precisely define the task to reduce ambiguity and improve output quality.',
      '**Role prompting (persona assignment)** — Instruct the model to adopt a specific role to shape tone and expertise.',
      '**Few-shot prompting** — Provide examples to guide the model toward the desired pattern or format.',
      '**Zero-shot prompting** — Give only the instruction and rely on the model’s general knowledge to perform the task.',
      '**Chain-of-thought prompting** — Encourage step-by-step reasoning for more accurate handling of complex problems.',
      '**Instruction decomposition** — Break complex tasks into smaller, explicit steps within the prompt.',
      '**Output format specification** — Explicitly define how the response should be structured (e.g., JSON, table).',
      '**Self-consistency prompting** — Generate multiple reasoning paths and select the most consistent answer.',
      '**Meta-prompting (prompt refinement loop)** — Ask the model to clarify your intent with questions and then generate an optimized version of your prompt.',
      '**Critique and refine (self-reflection prompting)** — Instruct the model to review and improve its own output.',
    ],
  },
  {
    id: 'n8xK2pQ5wR',
    layout: 'two-col',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Context',
    title: 'From Prompt Engineering → Context Engineering',
    intro:
      '**👉 Shift:** from “write a good prompt” → “design the environment the AI operates in”',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.1,
    left: {
      title: 'Prompt Engineering',
      body:
        '**Prompt Engineering** = asking better questions\n\nCrafting instructions to guide the model\n\nWorks for one-off tasks',
    },
    right: {
      title: 'Context Engineering',
      body:
        '**Context Engineering** = designing the full input system\n\nCombine: instructions + data + memory + tools\n\nMakes outputs reliable, repeatable, automatable',
    },
  },
  {
    id: 'v3nL9mT4jH',
    layout: 'toc',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Context',
    title: 'What “Context” Actually Includes',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.06,
    tocItems: [
      '**Instructions** — Task, role, constraints',
      '**Business Data** — Customer data, transactions, documents',
      '**Memory / State** — Previous steps, conversation, workflow status',
      '**Tools & Actions** — APIs, databases, internal systems',
      '**Guardrails** — Policies, compliance rules, validation',
      '**👉 Output quality** = function of all context, not just the prompt',
    ],
  },
  {
    id: 'b6wR8kP2nY',
    layout: 'two-col',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Example',
    title: 'Banking Example (Before vs After)',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.1,
    left: {
      title: 'Prompt Engineering mindset',
      body:
        '**“Summarize this loan application”**\n\n→ Inconsistent, missing context, not auditable',
    },
    right: {
      title: 'Context Engineering approach',
      body:
        '**Inject:** customer profile, credit policy, risk thresholds\n\n**Track:** workflow state (application stage)\n\n**Connect:** scoring API + document extraction\n\n**Enforce:** compliance rules (e.g., KYC, risk flags)',
      bullets: [
        '**👉 Result:** Consistent decisions',
        'Traceable reasoning',
        'Ready for automation at scale',
      ],
    },
  },
]

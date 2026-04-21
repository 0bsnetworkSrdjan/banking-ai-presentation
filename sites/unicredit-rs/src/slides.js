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
    intro_variant: 'guides',
    intro:
      'Blockstruct GmbH, member of AI Factory Austria AI:AT hub\nAI Applications for Business. Zero Bullshit.\nEuropean Tech. Team in Austria, Serbia, UK, Montenegro, Croatia.\nClients in Austria, UK, Croatia, USA. We have worked for banks and governments. Cybersecurity tested.',
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
        'Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €2.6B+ pan-European commitment to AI research, infrastructure and applications.',
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
        "One of the hub's business members, working at the intersection of AI research and real-world enterprise deployment. Today's masterclass was developed within this ecosystem framing.\n\nAccess to European network of supercomputers — some of the highest performance computing in the world. Direct access and involvement with the entire network of European research institutes and universities, as well as companies.",
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
    kicker: 'UniCredit Bank Srbija · The Opportunity',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'The Window Is Open.',
    subtitle:
      "While the Group focuses on its most significant strategic move in years, country offices have the opportunity to contribute to the definition of the Group's AI Application Agenda.\n\nUniCredit Bank Srbija could position itself as one of the Group's AI Centers of Excellence.",
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
      '**The Frozen Chef** (Training, parameters, a snapshot in time and that is it)',
      '**What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)',
      '**Why Does AI Lie?** (Hallucinations and the split brain analogy)',
      '**Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)',
      '**AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)',
      '**Safe Application of AI** (Cybersecurity implications, prompt injection)',
      '**The Big Picture** (Where we are, where we\'re going, and what stays human)',
      '**Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)',
      '**PoC Design Elaboration in Groups**',
    ],
    /* Cumulative item counts after each reveal step (groups: 1–3, 4–5, 6–7, 8, 9, 10, 11–12) */
    tocRevealSteps: [3, 5, 7, 8, 9, 10, 12],
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
    layout: 'two-col',
    section: 'Module 2',
    chapter: '02',
    kicker: 'The Core Mechanism',
    title: 'LLMs Are Serial Processors on Steroids',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      title: 'One mechanism',
      body: `They do one thing, extraordinarily well:

***Predict the most likely next token, given everything they have received.***

Everything LLMs do emerges from that one process — answering questions, writing poetry, interpreting a contract, drafting a sales pitch — performed at massive scale.`,
    },
    right: {
      title: 'At global scale',
      body: `The world's most sophisticated autocomplete; one that has read every fiction and non-fiction book, research paper, forum discussion, manual, contract, and every other piece of text ever written, transcribed, or published and digitised on the internet.

***Not magic. Not remotely human. Still, genuinely remarkable when applied carefully.***`,
    },
  },
  {
    id: 'zK2nL8pQ5w',
    layout: 'title',
    section: 'Module 2',
    chapter: '02',
    tone: 'section-b',
    style: 'tinted',
    animation: 'blur-in',
    anim_duration: 1.1,
    anim_stagger: 0.22,
    title: 'So, how can we make the best use of these serial text processors?',
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
    id: 'vS3bX7qN9k',
    layout: 'vector-space',
    section: 'Module 3',
    chapter: '03',
    tone: 'section-b',
    style: 'dark',
    kicker: 'Module 3',
    title: 'Banking Vector Space',
    subtitle: 'How related financial concepts cluster in multidimensional space.',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
  },
  {
    id: 'gH8kP3nL9w',
    layout: 'title',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Module 4',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'The Frozen Chef',
    subtitle: 'Training, Parameters & Why Models Stop Learning',
  },
  {
    id: 'vK2nQ9wR4m',
    layout: 'single',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Building blocks',
    title: 'Building the Brain',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `A model starts as pure noise.

Billions of numerical values — called parameters — organised into layers
Each layer transforms input: characters → words → concepts → reasoning
At the start of training, every parameter is randomly initialised
The architecture is a human design choice — training only changes the numbers inside it

***A kitchen full of equipment. A chef who has never eaten a single meal.***`,
  },
  {
    id: 'bL5xP7hJ8n',
    layout: 'single',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Training',
    title: 'Training — Learning by Predicting',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `One deceptively simple task, repeated trillions of times:

Show the model text → ask it to predict the next word
Measure the error → send it backwards through the layers (backpropagation)
Nudge every parameter slightly toward a better answer
Repeat — across books, articles, code, science, law, and much of the internet

The result? Not memorisation — but distilled understanding, compressed into billions of numbers.`,
  },
  {
    id: 'nN4kP8wR2x',
    layout: 'embed',
    section: 'Module 4',
    chapter: '04',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    embedSrc: '/neural-network.html',
    embedTitle: 'Neural network: how an LLM is built',
  },
  {
    id: 'cM3wT6nK2y',
    layout: 'single',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Refinement',
    title: 'From Raw Model to Useful Assistant',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: 'A pre-trained model is powerful but impractical. Refinement makes it deployable:',
    bodyComparison: {
      leftHeading: 'Technique',
      rightHeading: 'What it does',
      rows: [
        { left: '**Instruction fine-tuning**', right: 'Teaches it to behave like an assistant' },
        { left: '**RLHF**', right: 'Human raters guide it toward helpful, safe responses' },
        {
          left: '**System instructions**',
          right: 'Deployers set rules and persona — without retraining',
        },
        { left: '**Alignment & safety testing**', right: 'Red-teaming, benchmarks, sign-off' },
        { left: '**When this is done**', right: 'The model is frozen.' },
      ],
    },
  },
  {
    id: 'dN8jR4qV5z',
    layout: 'single',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Deployment',
    title: 'The Frozen Chef',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `After deployment: the model does not learn. Not even a little.

❌ Unaware of anything after its training cut-off
❌ Cannot learn from user corrections or feedback
❌ Does not improve with usage
❌ Holds no memory between conversations

This is intentional — a model that silently updated from live interactions would be nearly impossible to audit, certify, or govern.

***The intelligence is real. The knowledge has an expiry date.***`,
  },
  {
    id: 'pQ7wN4kL9x',
    layout: 'title',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Module 5',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'What AI Knows — and How to Add More',
    subtitle: 'Embeddings, RAG, fine-tuning',
  },
  {
    id: 'rK2mT8hJ3v',
    layout: 'two-col',
    section: 'Module 5',
    chapter: '05',
    kicker: 'The gap',
    title: 'The Knowledge Problem',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      body: `A frozen model only knows what it learned during training.
In banking, that's rarely enough:

❌ No knowledge of your internal documents, policies, or data
❌ No awareness of events after its training cut-off
❌ No understanding of your specific products, clients, or processes`,
    },
    right: {
      body: `So how do we close the gap?

Two distinct problems — two distinct solutions:`,
      bodyComparison: {
        leftHeading: 'Problem',
        rightHeading: 'Solution',
        rows: [
          { left: '**What it knows**', right: 'Embeddings + RAG' },
          { left: '**How it behaves**', right: 'Fine-tuning' },
        ],
      },
    },
  },
  {
    id: 'sL3nU9jK4w',
    layout: 'two-col',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Meaning',
    title: 'Embeddings — How AI Understands Meaning',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      title: 'From text to vectors',
      body:
        'Before we can feed a model new knowledge, it needs to be able to find it.\n\nEvery piece of text — a policy document, a client note, a regulation — gets converted into a vector: a list of numbers representing its meaning.',
      bullets: [
        'Similar meanings → similar vectors → stored close together in a vector database',
        'When a user asks a question, the question is also converted to a vector — and the database finds the most semantically relevant content',
      ],
    },
    right: {
      title: 'Why it matters',
      body: `***Not a keyword search. A meaning search.***

This is what makes it possible to ask "What is our policy on early loan repayment?" and retrieve the right paragraph — even if it never uses those exact words.`,
    },
  },
  {
    id: 'tM4oV0kL5x',
    layout: 'two-col',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Retrieval',
    title: 'RAG — Giving the Model What It Needs, Just in Time',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      title: 'How it works',
      body: '**RAG** = Retrieval-Augmented Generation',
      bullets: [
        'User asks a question',
        'System searches the vector database for relevant content',
        'That content is inserted into the context alongside the question',
        'The model answers — grounded in your documents, not just its training',
      ],
    },
    right: {
      title: 'What you gain',
      body: `✅ Answers based on current, internal knowledge
✅ Responses that can cite their source
✅ No retraining required — update the database, not the model

The model's brain stays frozen. You just hand it the right documents before it speaks.`,
    },
  },
  {
    id: 'uN5pW1mM6y',
    layout: 'two-col',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Behaviour',
    title: 'Fine-Tuning — Changing How It Behaves',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      title: 'Concept',
      body: `RAG adds knowledge. Fine-tuning shapes behaviour.

Fine-tuning means continuing the training process on a curated, domain-specific dataset — adjusting the model's parameters for a specific purpose.`,
    },
    right: {
      title: 'Typical use cases',
      body: `**Tone & style** — Always respond formally, in German
**Domain fluency** — Deeply familiar with credit risk terminology
**Task specialisation** — Trained specifically on loan assessment workflows
**Reducing hallucination** — Reinforced on verified, accurate domain content

**Important:** Fine-tuning is expensive, requires expertise, and needs to be redone when the model updates. It is not a substitute for RAG — most organisations use both.`,
    },
  },
  {
    id: 'vO6qX2nN7z',
    layout: 'single',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Summary',
    title: 'Putting It Together',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    bodyDataTable: {
      columns: ['Method', 'Adds', 'Best for', 'Requires retraining?'],
      rows: [
        ['**RAG**', 'Current, specific knowledge', 'Policies, documents, live data', '❌ No'],
        [
          '**Fine-tuning**',
          'Behaviour, tone, domain fluency',
          'Style, specialisation, task focus',
          '✅ Yes',
        ],
        ['**System instructions**', 'Rules & persona', 'Guardrails, context setting', '❌ No'],
      ],
    },
    body2: `A well-deployed AI in banking is not just a frozen model — it's a frozen model with the right documents in hand, the right instructions on the desk, and the right behaviour trained in.`,
  },
  {
    id: 'fL7xQ3nK8w',
    layout: 'title',
    section: 'Module 6',
    chapter: '06',
    kicker: 'Module 6',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'Why Does AI Lie?',
    subtitle: 'Hallucinations and the split brain analogy',
  },
  {
    id: 'dR9mP2vH5n',
    layout: 'two-col',
    section: 'Module 6',
    chapter: '06',
    kicker: 'Split-brain research · Sperry & Gazzaniga',
    title: 'Split-Brain Research: The “Interpreter” Effect',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.1,
    left: {
      title: 'Setup & key experiment',
      bullets: [
        '**Setup (corpus callosotomy)** — The hemispheres are disconnected → no shared information between sides.',
        '**Roles** — **Right:** perception & action (no speech). **Left:** language, reasoning, explanation.',
        '**Key experiment** — A stimulus reaches only the right hemisphere (or the left hand): the patient acts correctly, but when asked *why*, the left hemisphere has no access to the true cause.',
      ],
    },
    right: {
      title: 'Interpretation & bridge',
      bullets: [
        '**The interpreter** — The left hemisphere rarely says “I don’t know.” It invents a coherent story (e.g. “to clean the chicken coop”) — Gazzaniga’s **interpreter**.',
        '**Human reasoning** — Often post-hoc storytelling: the brain favours coherence when information is missing; “rational” explanations can be narrative, not direct access to reality.',
        '**Bridge to AI** — We don’t always know why we act — but unlike LLMs we integrate across systems and can update over time.',
      ],
    },
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
    title: 'Prompt Engineering (1/2)',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.06,
    tocSpacious: true,
    tocItems: [
      '**Clear and specific instructions** — Precisely define the task to reduce ambiguity and improve output quality.',
      '**Role prompting (persona assignment)** — Instruct the model to adopt a specific role to shape tone and expertise.',
      '**Few-shot prompting** — Provide examples to guide the model toward the desired pattern or format.',
      '**Zero-shot prompting** — Give only the instruction and rely on the model’s general knowledge to perform the task.',
      '**Chain-of-thought prompting** — Encourage step-by-step reasoning for more accurate handling of complex problems.',
    ],
  },
  {
    id: 'zK4nW8pL2q',
    layout: 'toc',
    section: 'Module 7',
    chapter: '07',
    kicker: 'Techniques',
    title: 'Prompt Engineering (2/2)',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.06,
    tocSpacious: true,
    tocStart: 6,
    tocItems: [
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
      '**👉 Shift:** from “write a good prompt” → “design good operating environment”',
    tone: 'section-a',
    animation: 'stagger',
    anim_stagger: 0.1,
    twoColLowerLarge: true,
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
    tocLarge: true,
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
  {
    id: 'm8pQ2wR9k',
    layout: 'title',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Module 8',
    tone: 'section-b',
    style: 'dark',
    animation: 'blur-in',
    anim_duration: 0.9,
    anim_stagger: 0.18,
    title: 'Agents & Tools — AI That Can Act',
    subtitle: 'AI That Acts, Not Just Answers — Tools, MCP, Skills, Agents',
  },
  {
    id: 'm8b1K3nL8x',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Agents',
    title: 'Beyond Answering — AI That Does',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `**So far:** a model that reads, reasons, and responds.
**Next:** a model that can **act**.

**Standard LLM Chat:** Input in -> text out. That's all that happens.

**An agent** starts from the same model, but is also given:`,
    pointsGridClass: 'points--triple-equal',
    bullets: [
      '**A goal** — Not just a question: something concrete to work toward.',
      '**Tools** — Capabilities it can **choose** to invoke when they help.',
      '**Multi-step chains** — Plan, execute, and revise — reasoning across several steps.',
    ],
    blockquote: `***The difference between a brilliant advisor who can only talk — and one who can also pick up the phone, pull the file, and send the email.***`,
  },
  {
    id: 'm8b2L4mP9y',
    layout: 'two-col',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Definitions',
    title: 'What Are Tools?',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    twoColRatio: '1-2',
    left: {
      body: `Tools are functions the model can choose to call.

The model doesn't execute them itself — it decides when and why to use them, and receives the result back into its context.`,
    },
    right: {
      bodyComparison: {
        leftHeading: 'Tool type',
        rightHeading: 'Example in banking',
        rows: [
          { left: '**Search / RAG**', right: 'Retrieve relevant policy or client documents' },
          { left: '**Database query**', right: "Look up a client's transaction history" },
          { left: '**API call**', right: 'Check current exchange rates or market data' },
          { left: '**Calculator / code**', right: 'Run a precise financial calculation' },
          { left: '**Write / send**', right: 'Draft an email, fill a form, log a case note' },
          { left: '**Trigger workflow**', right: 'Initiate a compliance check or approval process' },
        ],
      },
      body2: `***Tools turn language into action.***`,
    },
  },
  {
    id: 'm8b3M5nQ1z',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Orchestration',
    title: 'How an Agent Thinks',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `A simple example: "Summarise the credit risk for client X before tomorrow's meeting"
The agent doesn't just answer — it works:

🔍 Retrieves the client's file from the document store (RAG)
📊 Queries the database for recent transaction patterns
🧮 Runs a risk scoring calculation
🌐 Checks current market conditions via API
🧠 Reasons across all retrieved information
✍️ Produces a structured briefing — ready for the meeting

Each step informs the next. The model decides the sequence.`,
  },
  {
    id: 'm8b4N6pR2v',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Governance',
    title: 'Guardrails — Why Control Matters',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: 'More capability = more responsibility. Agents operating in banking contexts must be carefully constrained:',
    bodyComparison: {
      leftHeading: 'Control',
      rightHeading: 'What it means',
      rows: [
        {
          left: '**Human-in-the-loop**',
          right: 'Certain actions require approval before execution.',
        },
        {
          left: '**Tool boundaries**',
          right: 'The agent can only access what it is explicitly permitted to.',
        },
        {
          left: '**Audit trails**',
          right: 'Every tool call and decision step should be logged.',
        },
        {
          left: '**Failure handling**',
          right: 'What happens when a tool returns unexpected results?',
        },
      ],
    },
    body2: `An agent with access to client data, communication channels, and workflow systems is not a chatbot. It requires governance like any other operational system.

The question is never just "can it do this?" — but "should it do this autonomously?"`,
  },
  {
    id: 'm8b5O7qS3w',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Arc',
    title: 'The Full Picture',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    bodyInnerClass: 'slide-content__inner--body-diagram-stack',
    body: 'How everything connects:',
    flowTimeline: {
      layout: 'horizontal',
      steps: [
        { kind: 'text', label: 'User request' },
        { kind: 'agent', label: '[ Agent / Orchestrator ]' },
        { kind: 'text', label: 'Reasons about the goal' },
        {
          kind: 'tools',
          title: 'Tools available',
          items: [
            'RAG (your documents)',
            'Database queries',
            'APIs & live data',
            'Calculations & code',
            'Workflow triggers',
          ],
        },
        { kind: 'text', label: 'Synthesises results' },
        { kind: 'text', label: 'Response or Action' },
        { kind: 'review', label: 'Human review — where required' },
      ],
    },
    body2: `The frozen chef, handed the right recipes, the right ingredients, and a fully equipped kitchen — with a supervisor in the room for the dishes that matter.`,
  },
  {
    id: 'mcp1X2kN9w',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'MCP',
    title: 'The Problem Before MCP',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `**MCP — Giving Agents a Standard Language**

Every tool connection was built by hand.
As agents became more capable, teams wanted to connect them to more systems:

CRM platforms
Internal databases
Document stores
Calendar, email, communication tools
Core banking systems

The problem: every integration was custom-built. Different syntax, different authentication, different error handling — for every model, for every tool, for every vendor.

Imagine every appliance in the kitchen needing its own unique, incompatible power socket.`,
  },
  {
    id: 'mcp2Y3lP8x',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'MCP',
    title: 'What MCP Is',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `MCP = Model Context Protocol
An open standard, introduced by Anthropic in 2024, that defines a single, universal way for AI models to connect to external tools and data sources.
Think of it as USB for AI agents:

**Without MCP** | **With MCP**
Custom integration per tool | One standard connection method
Rebuild for every model update | Tool works with any MCP-compatible model
Fragile, expensive to maintain | Plug in, and it works
Siloed by vendor | Interoperable across platforms

***Build the tool once. Any compatible agent can use it.***`,
  },
  {
    id: 'mcp3Z4mQ7y',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'MCP',
    title: 'Where MCP Sits in the Architecture',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `MCP is the connective layer between the agent and the outside world:
[ Agent / Orchestrator ]
         ↓
   [ MCP Interface ]
         ↓
┌────────────────────────────────┐
│  MCP Servers (tools/systems):  │
│  • Internal document store     │
│  • Core banking API            │
│  • CRM / client data           │
│  • Compliance & risk systems   │
│  • Email & calendar            │
│  • Market data feeds           │
└────────────────────────────────┘

Each system exposes itself as an MCP server. The agent speaks to all of them through the same standard interface — it doesn't need to know the specifics of each system underneath.`,
  },
  {
    id: 'mcp4A5nR6z',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'MCP',
    title: 'Why It Matters for Banking',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `MCP turns AI integration from a bespoke engineering project into an infrastructure decision.

✅ Faster deployment — connect new systems without rebuilding agent logic
✅ Vendor flexibility — swap the underlying model without rewiring all your tools
✅ Auditability — a standardised layer is easier to monitor and govern
✅ Ecosystem momentum — MCP is being adopted rapidly across platforms, tools, and vendors

In the same way that REST APIs standardised how web services talk to each other — MCP is standardising how AI agents talk to the world.

For bank leadership, the strategic implication is clear: institutions that build their integrations on open standards now will not be locked into a single vendor's ecosystem later.`,
  },
]

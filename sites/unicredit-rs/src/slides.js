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
    id: 'cM3wT6nK2y',
    layout: 'single',
    section: 'Module 4',
    chapter: '04',
    kicker: 'Refinement',
    title: 'From Raw Model to Useful Assistant',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `A pre-trained model is powerful but impractical. Refinement makes it deployable:

**Instruction fine-tuning** — Teaches it to behave like an assistant

**RLHF** — Human raters guide it toward helpful, safe responses

**System instructions** — Deployers set rules and persona — without retraining

**Alignment & safety testing** — Red-teaming, benchmarks, sign-off

When this is done — the model is frozen.`,
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
    layout: 'single',
    section: 'Module 5',
    chapter: '05',
    kicker: 'The gap',
    title: 'The Knowledge Problem',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `A frozen model only knows what it learned during training.
In banking, that's rarely enough:

❌ No knowledge of your internal documents, policies, or data
❌ No awareness of events after its training cut-off
❌ No understanding of your specific products, clients, or processes

So how do we close the gap?

Two distinct problems — two distinct solutions:

**Problem** | **Solution**
**What it knows** | Embeddings + RAG
**How it behaves** | Fine-tuning`,
  },
  {
    id: 'sL3nU9jK4w',
    layout: 'single',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Meaning',
    title: 'Embeddings — How AI Understands Meaning',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `Before we can feed a model new knowledge, it needs to be able to find it.

Every piece of text — a policy document, a client note, a regulation — gets converted into a vector: a list of numbers representing its meaning
Similar meanings → similar vectors → stored close together in a vector database
When a user asks a question, the question is also converted to a vector — and the database finds the most semantically relevant content

***Not a keyword search. A meaning search.***

This is what makes it possible to ask "What is our policy on early loan repayment?" and retrieve the right paragraph — even if it never uses those exact words.`,
  },
  {
    id: 'tM4oV0kL5x',
    layout: 'single',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Retrieval',
    title: 'RAG — Giving the Model What It Needs, Just in Time',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `RAG = Retrieval-Augmented Generation
The process in practice:

User asks a question
System searches the vector database for relevant content
That content is inserted into the context alongside the question
The model answers — grounded in your documents, not just its training

What this enables:

✅ Answers based on current, internal knowledge
✅ Responses that can cite their source
✅ No retraining required — update the database, not the model

The model's brain stays frozen. You just hand it the right documents before it speaks.`,
  },
  {
    id: 'uN5pW1mM6y',
    layout: 'single',
    section: 'Module 5',
    chapter: '05',
    kicker: 'Behaviour',
    title: 'Fine-Tuning — Changing How It Behaves',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `RAG adds knowledge. Fine-tuning shapes behaviour.
Fine-tuning means continuing the training process on a curated, domain-specific dataset — adjusting the model's parameters for a specific purpose.

**Use case** — **Example**
**Tone & style** — Always respond formally, in German
**Domain fluency** — Deeply familiar with credit risk terminology
**Task specialisation** — Trained specifically on loan assessment workflows
**Reducing hallucination** — Reinforced on verified, accurate domain content

**Important:** Fine-tuning is expensive, requires expertise, and needs to be redone when the model updates. It is not a substitute for RAG — most organisations use both.`,
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
    body: `**Method** — **Adds** — **Best for** — **Requires retraining?**
**RAG** — Current, specific knowledge — Policies, documents, live data — ❌ No
**Fine-tuning** — Behaviour, tone, domain fluency — Style, specialisation, task focus — ✅ Yes
**System instructions** — Rules & persona — Guardrails, context setting — ❌ No

A well-deployed AI in banking is not just a frozen model — it's a frozen model with the right documents in hand, the right instructions on the desk, and the right behaviour trained in.`,
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
    kicker: 'Split-brain research',
    title: 'Split-Brain Research (Sperry & Gazzaniga): The “Interpreter” Effect',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.1,
    left: {
      title: 'Setup & key experiment',
      body:
        '**Setup (corpus callosotomy patients)**\n\nConnection between hemispheres is cut → no information sharing\n\nRight hemisphere = perception & action (no speech)\n\nLeft hemisphere = language, reasoning, explanation\n\n**Key experiment**\n\nObject seen only by right hemisphere (or placed in left hand)\n\nPatient acts correctly (e.g., selects object)\n\nBut when asked why → left hemisphere has no access to the cause',
    },
    right: {
      title: 'Interpretation & bridge',
      body:
        '**What happens next**\n\nLeft hemisphere does not say “I don’t know”\n\nIt confidently invents a logical explanation (“to clean the chicken coop”)\n\n👉 This is called the “interpreter” (Gazzaniga)\n\n**Implication (bridge to our story)**\n\nHuman reasoning is partly post-hoc storytelling\n\nThe brain prioritizes coherence over truth when information is missing\n\nOur “rational explanation” is often a constructed narrative, not direct access to reality\n\n**👉 Bridge:**\n\nEven humans don’t fully “know” why they act →\nBut unlike LLMs, we integrate across systems and update over time',
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
    layout: 'two-col',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Agents',
    title: 'Beyond Answering — AI That Does',
    intro:
      '***Evolution:*** **so far** — a model that reads, reasons, and responds.\n**Next** — one that can act.',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    left: {
      title: 'LLM alone',
      body:
        '**Input → text.** One turn at a time. No tools, no side effects.\n\nLike a brilliant advisor who can only talk — not pull the file or send the update.',
    },
    right: {
      title: 'LLM + agent',
      body: 'Same model — set up to **pursue a goal**, not just finish an answer.',
      bullets: [
        '**Goal** — not only a single question',
        '**Tools** — APIs, data, documents; the model chooses when to call them',
        '**Multi-step** — plan, act, read results, keep reasoning',
        '**👉 Contrast:** can pick up the phone, pull the file, and send the email — not only describe how.',
      ],
    },
  },
  {
    id: 'm8b2L4mP9y',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Definitions',
    title: 'What Are Tools?',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    bodyInnerClass: 'slide-content__inner--body-vert-balanced',
    body: `Tools are functions the model can choose to call.
The model doesn't execute them itself — it decides when and why to use them, and receives the result back into its context.

**Tool type** — **Example in banking**
**Search / RAG** — Retrieve relevant policy or client documents
**Database query** — Look up a client's transaction history
**API call** — Check current exchange rates or market data
**Calculator / code** — Run a precise financial calculation
**Write / send** — Draft an email, fill a form, log a case note
**Trigger workflow** — Initiate a compliance check or approval process

***Tools turn language into action.***`,
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
    bodyInnerClass: 'slide-content__inner--body-vert-balanced',
    body: `**MCP — Giving Agents a Standard Language**

Every tool connection was built by hand.
As agents became more capable, teams wanted to connect them to more systems:

**CRM platforms
Internal databases
Document stores
Calendar, email, communication tools
Core banking systems**

***The problem: every integration was custom-built. Different syntax, different authentication, different error handling — for every model, for every tool, for every vendor.***`,
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
    body: `**MCP = Model Context Protocol**
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
    bodySurface: 'mcp-connect',
    bodyDiagram: 'mcp-stack',
    body: `MCP is the connective layer between the agent and the outside world:`,
    mcpStack: {
      agentLabel: 'Agent / Orchestrator',
      layerLabel: 'MCP Interface',
      serversTitle: 'MCP Servers (tools/systems)',
      servers: [
        'Internal document store',
        'Core banking API',
        'CRM / client data',
        'Compliance & risk systems',
        'Email & calendar',
        'Market data feeds',
      ],
    },
    bodyAfter: `***Each system exposes itself as an MCP server. The agent speaks to all of them through the same standard interface — it doesn't need to know the specifics of each system underneath.***`,
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

✅ **Faster deployment** — connect new systems without rebuilding agent logic
✅ **Vendor flexibility** — swap the underlying model without rewiring all your tools
✅ **Auditability** — a standardised layer is easier to monitor and govern
✅ **Ecosystem momentum** — MCP is being adopted rapidly across platforms, tools, and vendors

In the same way that REST APIs standardised how web services talk to each other — MCP is standardising how AI agents talk to the world.

***For bank leadership, the strategic implication is clear: institutions that build their integrations on open standards now will not be locked into a single vendor's ecosystem later.***`,
  },
  {
    id: 'm8skA1b2c3',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Skills',
    title: 'Skills — Packaged, reusable procedures',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `**Agent Skills** are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows.

    In every serious bank, there are standardized procedures — for example, a procedure for loan approval. These procedures are written, tested, and aligned with regulations.

When a new associate arrives, they don't reinvent the procedure — they apply the existing one. A Skill is exactly that, but for a ***packaged procedure***, ***tailored to a specific task***, which the AI can "take off the shelf" and apply.`,
  },
  {
    id: 'm8skD4e5f6',
    layout: 'single',
    section: 'Module 8',
    chapter: '08',
    kicker: 'Skills',
    title: 'Inside a Skill file',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.12,
    body: `A Skill file is essentially a Markdown document — like a detailed work manual you give to an AI agent before it starts its task. The agent "reads" it, and from that moment on, knows exactly how to proceed.

Here is what a summary of a Credit Assessment Skill looks like:`,
    bullets: [
      {
        heading: 'Overview',
        body: 'The AI agent reads this first. It clearly states the purpose and, just as importantly, ++what is NOT its purpose++ (e.g., it does not make the final decision).',
      },
      {
        heading: 'When to Use',
        body: 'The agent must know ++when to invoke this specific skill versus another++. Without this, it might try to process mortgage loans using the same rules as consumer loans.',
      },
      {
        heading: 'Required Tools',
        body: 'A list of all ++MCP++ connections that the agent is allowed to use within this skill. The agent ++cannot call a tool that isn\'t on this list++.',
      },
      {
        heading: 'Step-by-Step Procedure',
        body: 'The core of the file. Every step has clear ++IF/THEN rules++ — the agent does not improvise; it applies policy literally. You\'ll notice ++"STOP"++ written in several places — these are ++hard stops++ that the agent is not allowed to bypass.',
      },
      {
        heading: 'What the Agent Must NOT Do',
        body: 'Negative rules are just as important as positive ones. This is the section where you define ++the boundaries of autonomy++.',
      },
      {
        heading: 'Audit and Compliance',
        body: 'Every skill in a regulated industry must have this. ++Every call, every result, every decision++ — everything is logged.',
      },
      {
        heading: 'Skill Metadata',
        body: 'Version, owner, revision date. This is crucial because skills change when regulations or internal policies change — you need to know ++which version was active++ at the time of a specific decision.',
      },
    ],
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
    body: `**More capability = more responsibility.**
Agents operating in banking contexts must be carefully constrained:

Human-in-the-loop — certain actions require approval before execution
***Tool boundaries*** — the agent can only access what it is explicitly permitted to
***Audit trails*** — every tool call and decision step should be logged
***Failure handling*** — what happens when a tool returns unexpected results?

An agent with access to client data, communication channels, and workflow systems is not a chatbot. It requires governance like any other operational system.

***The question is never just "can it do this?" — but "should it do this autonomously?"***`,
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

***Each step informs the next. The model decides the sequence.***`,
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
    bodyDiagram: 'flow-timeline',
    body: `**How everything connects:**`,
    flowTimeline: {
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
        { kind: 'review', label: '[ Human review — where required ]' },
      ],
    },
    bodyAfter: `***The frozen chef, handed the right recipes, the right ingredients, and a fully equipped kitchen — with a supervisor in the room for the dishes that matter.***`,
  },
  {
    id: 'm8tWF4nP2x',
    layout: 'timeline',
    section: 'Module 8',
    chapter: '08',
    hideSectionChip: true,
    kicker: 'Example',
    title: 'Agentic Workflow — Tools, MCP & Skills',
    tone: 'section-b',
    animation: 'stagger',
    anim_stagger: 0.07,
    timelineSteps: [
      {
        emoji: '📥',
        label: {
          en: '**Agent Receives the Request**',
          sr: '**Agent prima zahtev**',
        },
        body: {
          en: 'An email arrives. The agent reads it: “Client requesting a limit increase.” It immediately knows the next step.',
          sr: 'Email stigne. Agent ga pročita: „Klijent traži povećanje limita.“ Odmah zna šta sledi.',
        },
      },
      {
        emoji: '🔗',
        label: {
          en: '**Agent Utilizes Tools**',
          sr: '**Agent koristi alatke**',
        },
        body: {
          en: 'Via MCP, the agent simultaneously queries: core banking (balance, payment history), credit bureau (external score), and CRM (client profile). Done in seconds.',
          sr: 'Preko MCP-a agent istovremeno povlači: core banking (stanje, istorija plaćanja), kreditni biro (eksterni skor) i CRM (profil klijenta). Gotovo za nekoliko sekundi.',
        },
      },
      {
        emoji: '🧠',
        label: {
          en: '**Agent Applies Skills**',
          sr: '**Agent primenjuje veštine**',
        },
        body: {
          en: 'The “Credit Assessment Skill” activates — your internal credit policy. Every criterion is evaluated: standing, limits, eligibility.',
          sr: 'Aktivira se „Credit Assessment Skill“ — vaša interna kreditna politika. Svaki kriterijum se procenjuje: odnos, limiti, podobnost.',
        },
      },
      {
        emoji: '👤',
        label: {
          en: '**Agent Makes a Recommendation**',
          sr: '**Agent daje preporuku**',
        },
        body: {
          en: 'If approval is needed, a summary goes to the credit officer — all relevant data, a clear recommendation, and full rationale. Officer accepts or declines.',
          sr: 'Ako je potrebno odobrenje, sažetak ide kreditnom službeniku — svi relevantni podaci, jasna preporuka i potpuno obrazloženje. Službenik prihvata ili odbija.',
        },
        badge: {
          en: 'HUMAN IN THE LOOP',
          sr: 'ČOVEK U PETLJI',
        },
        highlight: true,
      },
      {
        emoji: '✅',
        label: {
          en: '**The Result**',
          sr: '**Rezultat**',
        },
        body: {
          en: 'Client receives a response in 2–4 minutes. Everything logged. Full audit trail. Nothing falls through the cracks.',
          sr: 'Klijent dobija odgovor za 2–4 minuta. Sve je evidentirano. Kompletan revizijski trag. Ništa ne propada iz vida.',
        },
      },
    ],
  },
]

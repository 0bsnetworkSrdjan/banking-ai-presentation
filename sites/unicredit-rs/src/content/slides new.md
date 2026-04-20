---META---

# Global presentation configuration.

# Edit languages to control which languages are offered in the selector.

# The first entry in the list is the default language.

# When you ask the agent to "update slides", it translates all text fields

# into every language listed here. Content is always authored in English.

# NOTE: Serbian (sr) translations must always use Latin script, never Cyrillic.

languages: en, sr
default: en
---META---

)

  to adjust the ratio — not required by default.

  STAT BULLETS IN [right-top] BLOCKS
  ─────────────────────────────────────
  When a [right-top] block contains bullets formatted as
  "NUMBER — description" (e.g. "19 — AI factories across Europe"),
  the build agent must render each bullet as a large stat highlight:
    - The number portion: font-size ~2.4rem, font-weight 700, display block
    - The description portion: font-size ~0.8rem, font-weight 400,
      opacity 0.75, display block, margin-top 0.15rem
    - Each stat is a self-contained vertical unit, centered in the glass
    - Multiple stats sit side by side (flex row, justify: space-around)
      if two or more are present, or stacked if there is only one
  Use the "NUMBER — description" bullet format consistently to trigger
  this rendering. Do not use this format for non-stat bullets.

### COLUMN SUB-HEADINGS

  ─────────────────────────

### inside any column block ([left], [right], [right-top], [right-bottom])

  renders as a small inline section label within the column body:
    font-size: 0.7rem
    font-weight: 700
    letter-spacing: 0.08em
    text-transform: uppercase
    opacity: 0.60
    margin-top: 1rem
    margin-bottom: 0.3rem
  These are not glass headers. They sit in the content flow to visually
  divide the column into named sub-sections.

  SPECIAL RENDERING: TRANSLATION VARIANTS IN TITLE SLIDES
  ─────────────────────────────────────────────────────────
  Some title-layout slides carry additional # headings inside a
  [langcode] override block (e.g. [sr]). This is a deliberate pattern
  used when the slide itself is a quote that stays in the original
  language, and the translated version should show the original quote
  plus a set of translation variant lines below it styled as quotes.

  Within a [langcode] block for a layout: title slide, the content
  order is:
    # "Original quote (unchanged, with any inline HTML preserved)"
    ## — Attribution (unchanged)
    [blank line]
    # "First translation variant."
    # "Second translation variant."
    ... (as many as needed)

  The second and subsequent # lines in a [langcode] block for a
  layout: title slide are "secondary quote lines" — not additional h1
  elements. Rendering rule:

- Render the first # and ## (original quote + attribution) as normal.
- Below the attribution, render each secondary # line as a centered
quote-style line, styled as follows:
font-size: ~1.1rem (smaller than the main h1, but still prominent)
font-weight: 500
font-style: italic
text-align: center
opacity: 0.82
margin-top: 1rem per line
quotation marks included as authored (do not add or remove them)
- The English version of the same slide has only one # line and must
render identically to a standard title slide.
  KEY SLIDES
  ──────────
  Certain slides are marked with a  comment
  directly above the ---SLIDE--- divider. These are high-impact,
  structurally significant moments in the presentation — treat them
  with extra visual weight and animation care. Key slides share:
- style: tinted (blue glass, white text)
- animation: blur-in with longer duration (anim_duration: 1.1)
and generous stagger (anim_stagger: 0.22)
- Minimal content — only the essential elements, no kicker or
section chip cluttering the visual field
All key slides should feel visually and rhythmically consistent
with each other across the full presentation.
  MODULE TITLE SLIDES
  ────────────────────
  Slides that open a new module are marked with a 
  comment directly above the ---SLIDE--- divider. These are section
  openers — less philosophical than key slides, less strategic than
  hero slides. Module title slides share:
- layout: title, style: dark, tone: section-b
- animation: blur-in with anim_duration: 0.9, anim_stagger: 0.18
- kicker: module number (e.g. "Module 1")
- h1: the module title
- subtitle: a short descriptive line
All module title slides should feel rhythmically consistent — a
reliable visual signal that a new section of content is beginning.
  LAYOUT: four-quad
  ──────────────────
  Glass structure: header glass + 2×2 grid of four equal glass boxes.
  Quadrant markers (each on its own line): [top-left], [bottom-left],
  [top-right], [bottom-right].
  Within each quadrant:
- # Heading → quadrant title (rendered prominently, ~1rem, bold)
- paragraph → quadrant body text (flowing descriptive text, ~0.82rem)
- **[Badge label]** on its own line → small accent pill badge rendered
below the body text (primary blue bg, white text, 0.7rem, uppercase)
  Grid layout:
- Left column: [top-left] above [bottom-left], each flex: 1
- Right column: [top-right] above [bottom-right], each flex: 1
- All four boxes share equal height (grid rows: 1fr 1fr)
- Gap between boxes: ~0.6rem (tighter than the header-to-body gap)
  Left-brain vs right-brain visual differentiation:
- [top-left] and [bottom-left] (left brain): glass has a subtle cool
blue-left border (2px, rgba(100,110,250,0.35)) to signal analytical/AI
- [top-right] and [bottom-right] (right brain): glass has a subtle warm
green-left border (2px, rgba(80,135,100,0.35)) to signal human/holistic
- Both sets use the default white frosted glass background
  pre_title field rendering:
- Renders inside the header glass above the h1
- font-size: ~0.85rem, font-style: italic, opacity: 0.72
- If kicker is also present: kicker → pre_title → h1 (top to bottom)
  INLINE EMPHASIS PANEL (> in single layout)
  ────────────────────────────────────────────
  When layout is "single" and the body contains a > blockquote, render
  it as a contained emphasis panel within the body glass — not a
  full-screen pull-quote. Styling:
- Background: rgba(100, 110, 250, 0.07) (very faint primary blue)
- Left border: 3px solid var(--color-primary)
- Border radius: 6px
- Padding: 0.8rem 1rem
- Text: font-size ~1.05rem, font-weight 500, color inherit
- Margin: 0.75rem 0 above and below, within the body text flow
The emphasis panel is an .animated element and participates in the
stagger sequence.
  STRESSED TEXT (***text*** in body)
  ────────────────────────────────────
  ***text*** (bold+italic in CommonMark) within any body paragraph
  receives additional accent styling:
- color: var(--color-primary)
- font-weight: 700, font-style: italic
Use for a single closing statement or key phrase. Do not apply to
entire paragraphs — only to a phrase or sentence within them.
  HERO SLIDES
  ───────────
  Certain slides are marked with a  comment
  directly above the ---SLIDE--- divider. Hero slides carry the same
  visual weight as key slides but serve a different purpose: they are
  strategic, aspirational moments directed at the audience — calls to
  action, opportunity framings, or pivotal transitions between sections.
  Hero slides share:
- style: dark (dark frosted glass, white text) — grounded and
authoritative, distinct from the philosophical intensity of tinted
key slides
- animation: blur-in with anim_duration: 0.9 and anim_stagger: 0.18
- Sparse content — a kicker, a short bold h1, a supporting subtitle,
and optionally an orange divider with a single tagline line below
- tone: section-b (cool mint background, recedes behind dark glass)
All hero slides should feel visually and rhythmically consistent
with each other across the full presentation.
================================================================ -->


## ---SLIDE---
id: xK9mP2wQ4r
layout: title
section: Introduction
tone: section-b
style: tinted
animation: blur-in
anim_duration: 1.1
anim_stagger: 0.22
no_translate: true

# "You are performing a dream."

## — Anthropic



## ---SLIDE---
id: pL4hW9nX2q
layout: title
section: Introduction
tone: section-b
style: tinted
animation: blur-in
anim_duration: 1.1
anim_stagger: 0.22

# "You are ++performing++ a dream."

## — Anthropic

[sr]

# "You are ++performing++ a dream."

## — Anthropic

# "Izvodiš / sprovodiš u delo san."

# "Igraš / glumiš san."



## ---SLIDE---
id: rT5kN8mJ1w
layout: title
section: Introduction
tone: section-a
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# AI Demystified

## Masterclass on AI in Banking for UniCredit Srbija

---

From buzzwords to real world business.  
Practical guide to Generative AI & LLMs for decision-makers



## ---SLIDE---
id: bV2gK6sY9q
layout: two-col
section: Introduction
title: Your guides today
tone: section-a
animation: fade-up

Blockstruct GmbH, member of AI Factory Austria AI:AT hub  
AI Applications for Business. Zero Bullshit.  
European Tech. Team in Austria, Serbia, UK, Montenegro, Croatia.

[left]

# Srđan Kuprešanin

## Founder & CEO

Mergers & Acquisitions advisory, Management Consulting, Cutting-edge Tech Architecture Design, Development and Implementation

[right]

# Nikola Zrnić

## AI Solutions Engineer

Electrotechnical engineering, Full stack software solutions development, AI applications.



## ---SLIDE---
id: nH8cF3pR7s
layout: two-col-split-right
section: Introduction
kicker: member of EU-wide AI technology ecosystem
title: AI Factory Austria AI:AT Hub
tone: section-a
animation: stagger
anim_stagger: 0.12

[left]
Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €1.5B+ pan-European commitment to AI research, infrastructure and applications.

### Led jointly by:

- AIT — Austrian Institute of Technology
- ACA — Advanced Computing Austria

### Academic partners:

TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator

[www.ai-at.eu](http://www.ai-at.eu)

[right-top]

- 19 — AI factories across Europe
- €2.6B+ — EU commitment

[right-bottom]

## Blockstruct at AI:AT

One of the hub's business members, working at the intersection of AI research and real-world enterprise deployment. Today's masterclass was developed within this ecosystem framing.



## ---SLIDE---
id: wC5pM8jQ2x
layout: icon-grid
section: Introduction
kicker: What you will leave with
title: About This Masterclass
tone: section-a
animation: stagger
anim_stagger: 0.10

By the end of this workshop, you won't be AI engineers. You'll be AI-literate decision-makers — which is frankly more useful.

- [brain]: **Understand the Technology** | What LLMs actually are, how they learn, and what they genuinely can (and cannot) do.
- [layers]: **Design Better Applications** | Identify where AI creates real value in *your workflows*, starting with sales and client relationships.
- [help-circle]: **Ask Better Questions** | Have a mental framework to evaluate AI proposals, pilots / POC projects, and vendor claims.
- [gift]: *Bonus* | Brainstorm, identify and start developing 2–3 "low hanging fruit" wins for your first POC projects.



## ---SLIDE---
id: kJ7nB4qW1v
layout: title
section: Introduction
kicker: UniCredit Srbija · The Opportunity
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# The Window Is Open.

## While the Group focuses on its most significant strategic move in years, country offices have the freedom — and the moment — to define their own AI agenda.

---

UniCredit Srbija has an opportunity to position itself as one of the Group's AI Centers of Excellence.



## ---SLIDE---
id: hQ3mK7vN5p
layout: toc
section: Introduction
kicker: Twelve Modules
title: Today's Journey
tone: section-a
animation: stagger
anim_stagger: 0.07

**What Is This Thing?** (the story of assembly robots)
**AI vs Human Intelligence** (Lizards and the Four Personalities — building the mental model for understanding LLMs)
**Vectors in Multidimensional Space — Excuse Me?** (How AI encodes information and meaning)
**The Frozen Chef** (Training, parameters, a snapshot in time and that is it)
**What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)
**Why Does AI Lie?** (Hallucinations and the split brain analogy)
**Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)
**AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)
**Safe Application of AI** (Cybersecurity implications, prompt injection)
**The Big Picture** (Where we are, where we're going, and what stays human)
**Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)
**PoC Design Elaboration in Groups**



## ---SLIDE---
id: yF6kD4nM9h
layout: title
section: Module 1
chapter: "01"
kicker: Module 1
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# What Is This Thing?

## Setting the mental model, and dispelling a few myths



## ---SLIDE---
id: m7nK4pQ9wR
layout: two-col
section: Module 1
chapter: "01"
title: What is this thing - robot for text assembly.
tone: section-a
animation: stagger
anim_stagger: 0.10

[left]
icon: robot-arm

# Factory assembly robots

We are used to seeing industrial robots and understand them intuitively, because they are basically computer-controlled arms.

We have arms. Are they brain-controlled robots?

An industrial robot arm can do a lot of damage if allowed to act randomly.

[right]
icon: text-stream

# Text assembly robots

We usually understand less about our text generating robots, but take a moment to listen to your own internal monologue.

Similarly to an industrial robot, a text assembly robot can do a lot of damage if allowed to act randomly.



## ---SLIDE---
id: pR2vL8kN4m
layout: title
section: Module 2
chapter: "02"
kicker: Module 2
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# AI vs Human Intelligence

## Lizards, the four personalities, and a mental model for understanding LLMs



## ---SLIDE---
id: cT8vB2pR5m
layout: four-quad
section: Module 2
chapter: "02"
pre_title: Neuroscientist. TED Talk Icon. Stroke Survivor. And, unexpectedly, one of the best frameworks for understanding human and artificial intelligence.
title: The Four Personalities (Dr. Jill Bolte Taylor)
tone: section-b
animation: stagger
anim_stagger: 0.09

[top-left]

# Left Thinking

Serial. Analytical. Logical. Language. Patterns and details. Details about Details. Categorization, Linear Reasoning, Beginnings, Developments and Endings. Planning, Problem Solving. Productivity, Structure, Predictions.

**[Home of AI]**

[bottom-left]

# Left Emotional

Comparative. Defining, Separating, Self-Protecting. Emotional Pain & Trauma. Learned Behaviours. Rewards & Losses, Reinforcement. Judgement, Reactivity, Blame. Anxiety, Wishes, Hopes, Urges.

[top-right]

# Right Thinking

Peaceful, Open, Holistic, Big Picture-Oriented, Expansive, Interconnecting, Meaning-assigning, "Transcendent", Wise.

[bottom-right]

# Right Emotional

Present, Sensory, Empathetic, Experiential (in the moment). Empathy, Joy, Compassion, Connection, Intuition.



## ---SLIDE---
id: hK3nP9qW5x
layout: bullets-only
section: Module 2
chapter: "02"
kicker: Human cognition
title: Human Thinking is a self-building reflective fluid of loops and branches
tone: section-b
animation: stagger
anim_stagger: 0.10

- Human cognition = parallel, embodied, adaptive
- Multiple brain regions collaborate (analytical, emotional, sensory, intuitive)
- Continuous input: vision, sound, movement, touch, internal state
- Thought is recursive → we reflect, question, adjust in real time
- Decisions shaped by context + memory + emotion + feedback loops
- Brain constantly updates its model of reality



## ---SLIDE---
id: qW3sN7gH1z
layout: single
section: Module 2
chapter: "02"
kicker: The Core Mechanism
title: LLMs Are Serial Processors on Steroids
tone: section-b
animation: stagger
anim_stagger: 0.12

They do one thing, extraordinarily well:

> Predict the most likely next token, given everything they have received.

Everything LLMs do emerges from that one process — answering questions, writing poetry, interpreting a contract, drafting a sales pitch — performed at massive scale.

The world's most sophisticated autocomplete; one that has read every fiction and non-fiction book, research paper, forum discussion, manual, contract, and every other piece of text ever written, transcribed, or published and digitised on the internet.

***Not magic. Not remotely human. Still, genuinely remarkable when applied carefully.***



## ---SLIDE---
id: jP9mK6fL2w
layout: title
section: Module 3
chapter: "03"
kicker: Module 3
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# Vectors in Multidimensional Space — Excuse Me?

## How AI encodes knowledge and meaning, illustrated.



## ---SLIDE---
id: gH8kP3nL9w
layout: title
section: Module 4
chapter: "04"
kicker: Module 4
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# The Frozen Chef

## Training, Parameters & Why Models Stop Learning



## ---SLIDE---
id: vK2nQ9wR4m
layout: single
section: Module 4
chapter: "04"
kicker: Building blocks
title: Building the Brain
tone: section-b
animation: stagger
anim_stagger: 0.12

A model starts as pure noise.

Billions of numerical values — called parameters — organised into layers
Each layer transforms input: characters → words → concepts → reasoning
At the start of training, every parameter is randomly initialised
The architecture is a human design choice — training only changes the numbers inside it

***A kitchen full of equipment. A chef who has never eaten a single meal.***



## ---SLIDE---
id: bL5xP7hJ8n
layout: single
section: Module 4
chapter: "04"
kicker: Training
title: Training — Learning by Predicting
tone: section-b
animation: stagger
anim_stagger: 0.12

One deceptively simple task, repeated trillions of times:

Show the model text → ask it to predict the next word
Measure the error → send it backwards through the layers (backpropagation)
Nudge every parameter slightly toward a better answer
Repeat — across books, articles, code, science, law, and much of the internet

The result? Not memorisation — but distilled understanding, compressed into billions of numbers.



## ---SLIDE---
id: cM3wT6nK2y
layout: single
section: Module 4
chapter: "04"
kicker: Refinement
title: From Raw Model to Useful Assistant
tone: section-b
animation: stagger
anim_stagger: 0.12

A pre-trained model is powerful but impractical. Refinement makes it deployable:

**Instruction fine-tuning** — Teaches it to behave like an assistant

**RLHF** — Human raters guide it toward helpful, safe responses

**System instructions** — Deployers set rules and persona — without retraining

**Alignment & safety testing** — Red-teaming, benchmarks, sign-off

When this is done — the model is frozen.



## ---SLIDE---
id: dN8jR4qV5z
layout: single
section: Module 4
chapter: "04"
kicker: Deployment
title: The Frozen Chef
tone: section-b
animation: stagger
anim_stagger: 0.12

After deployment: the model does not learn. Not even a little.

❌ Unaware of anything after its training cut-off
❌ Cannot learn from user corrections or feedback
❌ Does not improve with usage
❌ Holds no memory between conversations

This is intentional — a model that silently updated from live interactions would be nearly impossible to audit, certify, or govern.

***The intelligence is real. The knowledge has an expiry date.***



## ---SLIDE---
id: pQ7wN4kL9x
layout: title
section: Module 5
chapter: "05"
kicker: Module 5
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# What AI Knows — and How to Add More

## Embeddings, RAG, fine-tuning



## ---SLIDE---
id: rK2mT8hJ3v
layout: single
section: Module 5
chapter: "05"
kicker: The gap
title: The Knowledge Problem
tone: section-b
animation: stagger
anim_stagger: 0.12

A frozen model only knows what it learned during training.
In banking, that's rarely enough:

❌ No knowledge of your internal documents, policies, or data
❌ No awareness of events after its training cut-off
❌ No understanding of your specific products, clients, or processes

So how do we close the gap?

Two distinct problems — two distinct solutions:

**Problem** | **Solution**
**What it knows** | Embeddings + RAG
**How it behaves** | Fine-tuning



## ---SLIDE---
id: sL3nU9jK4w
layout: single
section: Module 5
chapter: "05"
kicker: Meaning
title: Embeddings — How AI Understands Meaning
tone: section-b
animation: stagger
anim_stagger: 0.12

Before we can feed a model new knowledge, it needs to be able to find it.

Every piece of text — a policy document, a client note, a regulation — gets converted into a vector: a list of numbers representing its meaning
Similar meanings → similar vectors → stored close together in a vector database
When a user asks a question, the question is also converted to a vector — and the database finds the most semantically relevant content

***Not a keyword search. A meaning search.***

This is what makes it possible to ask "What is our policy on early loan repayment?" and retrieve the right paragraph — even if it never uses those exact words.



## ---SLIDE---
id: tM4oV0kL5x
layout: single
section: Module 5
chapter: "05"
kicker: Retrieval
title: RAG — Giving the Model What It Needs, Just in Time
tone: section-b
animation: stagger
anim_stagger: 0.12

RAG = Retrieval-Augmented Generation
The process in practice:

User asks a question
System searches the vector database for relevant content
That content is inserted into the context alongside the question
The model answers — grounded in your documents, not just its training

What this enables:

✅ Answers based on current, internal knowledge
✅ Responses that can cite their source
✅ No retraining required — update the database, not the model

The model's brain stays frozen. You just hand it the right documents before it speaks.



## ---SLIDE---
id: uN5pW1mM6y
layout: single
section: Module 5
chapter: "05"
kicker: Behaviour
title: Fine-Tuning — Changing How It Behaves
tone: section-b
animation: stagger
anim_stagger: 0.12

RAG adds knowledge. Fine-tuning shapes behaviour.
Fine-tuning means continuing the training process on a curated, domain-specific dataset — adjusting the model's parameters for a specific purpose.

**Use case** — **Example**
**Tone & style** — Always respond formally, in German
**Domain fluency** — Deeply familiar with credit risk terminology
**Task specialisation** — Trained specifically on loan assessment workflows
**Reducing hallucination** — Reinforced on verified, accurate domain content

**Important:** Fine-tuning is expensive, requires expertise, and needs to be redone when the model updates. It is not a substitute for RAG — most organisations use both.



## ---SLIDE---
id: vO6qX2nN7z
layout: single
section: Module 5
chapter: "05"
kicker: Summary
title: Putting It Together
tone: section-b
animation: stagger
anim_stagger: 0.12

**Method** — **Adds** — **Best for** — **Requires retraining?**
**RAG** — Current, specific knowledge — Policies, documents, live data — ❌ No
**Fine-tuning** — Behaviour, tone, domain fluency — Style, specialisation, task focus — ✅ Yes
**System instructions** — Rules & persona — Guardrails, context setting — ❌ No

A well-deployed AI in banking is not just a frozen model — it's a frozen model with the right documents in hand, the right instructions on the desk, and the right behaviour trained in.



## ---SLIDE---
id: fL7xQ3nK8w
layout: title
section: Module 6
chapter: "06"
kicker: Module 6
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# Why Does AI Lie?

## Hallucinations and the split brain analogy



## ---SLIDE---
id: dR9mP2vH5n
layout: two-col
section: Module 6
chapter: "06"
kicker: Split-brain research
title: Split-Brain Research (Sperry & Gazzaniga): The “Interpreter” Effect
tone: section-b
animation: stagger
anim_stagger: 0.10

[left]

# Setup & key experiment

**Setup (corpus callosotomy patients)**

Connection between hemispheres is cut → no information sharing

Right hemisphere = perception & action (no speech)

Left hemisphere = language, reasoning, explanation

**Key experiment**

Object seen only by right hemisphere (or placed in left hand)

Patient acts correctly (e.g., selects object)

But when asked why → left hemisphere has no access to the cause

[right]

# Interpretation & bridge

**What happens next**

Left hemisphere does not say “I don’t know”

It confidently invents a logical explanation (“to clean the chicken coop”)

👉 This is called the “interpreter” (Gazzaniga)

**Implication (bridge to our story)**

Human reasoning is partly post-hoc storytelling

The brain prioritizes coherence over truth when information is missing

Our “rational explanation” is often a constructed narrative, not direct access to reality

**👉 Bridge:**

Even humans don’t fully “know” why they act →
But unlike LLMs, we integrate across systems and update over time



## ---SLIDE---
id: kW8nR3pL9v
layout: title
section: Module 7
chapter: "07"
kicker: Module 7
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# Talk to AI Like a Pro

## Prompt & context engineering, iterative improvement



## ---SLIDE---
id: m4tQ7nJ2x
layout: toc
section: Module 7
chapter: "07"
kicker: Techniques
title: Prompt Engineering
tone: section-a
animation: stagger
anim_stagger: 0.06

**Clear and specific instructions** — Precisely define the task to reduce ambiguity and improve output quality.
**Role prompting (persona assignment)** — Instruct the model to adopt a specific role to shape tone and expertise.
**Few-shot prompting** — Provide examples to guide the model toward the desired pattern or format.
**Zero-shot prompting** — Give only the instruction and rely on the model’s general knowledge to perform the task.
**Chain-of-thought prompting** — Encourage step-by-step reasoning for more accurate handling of complex problems.
**Instruction decomposition** — Break complex tasks into smaller, explicit steps within the prompt.
**Output format specification** — Explicitly define how the response should be structured (e.g., JSON, table).
**Self-consistency prompting** — Generate multiple reasoning paths and select the most consistent answer.
**Meta-prompting (prompt refinement loop)** — Ask the model to clarify your intent with questions and then generate an optimized version of your prompt.
**Critique and refine (self-reflection prompting)** — Instruct the model to review and improve its own output.



## ---SLIDE---
id: n8xK2pQ5wR
layout: two-col
section: Module 7
chapter: "07"
kicker: Context
title: From Prompt Engineering → Context Engineering
tone: section-a
animation: stagger
anim_stagger: 0.10

**👉 Shift:** from "write a good prompt" → "design the environment the AI operates in"

[left]

# Prompt Engineering

**Prompt Engineering** = asking better questions

Crafting instructions to guide the model

Works for one-off tasks

[right]

# Context Engineering

**Context Engineering** = designing the full input system

Combine: instructions + data + memory + tools

Makes outputs reliable, repeatable, automatable



## ---SLIDE---
id: v3nL9mT4jH
layout: toc
section: Module 7
chapter: "07"
kicker: Context
title: What "Context" Actually Includes
tone: section-a
animation: stagger
anim_stagger: 0.06

**Instructions** — Task, role, constraints
**Business Data** — Customer data, transactions, documents
**Memory / State** — Previous steps, conversation, workflow status
**Tools & Actions** — APIs, databases, internal systems
**Guardrails** — Policies, compliance rules, validation
**👉 Output quality** = function of all context, not just the prompt



## ---SLIDE---
id: b6wR8kP2nY
layout: two-col
section: Module 7
chapter: "07"
kicker: Example
title: Banking Example (Before vs After)
tone: section-a
animation: stagger
anim_stagger: 0.10

[left]

# Prompt Engineering mindset

**"Summarize this loan application"**

→ Inconsistent, missing context, not auditable

[right]

# Context Engineering approach

**Inject:** customer profile, credit policy, risk thresholds

**Track:** workflow state (application stage)

**Connect:** scoring API + document extraction

**Enforce:** compliance rules (e.g., KYC, risk flags)

- **👉 Result:** Consistent decisions
- Traceable reasoning
- Ready for automation at scale



## ---SLIDE---
id: m8pQ2wR9k
layout: title
section: Module 8
chapter: "08"
kicker: Module 8
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# Agents & Tools — AI That Can Act

## AI That Acts, Not Just Answers — Tools, MCP, Skills, Agents



## ---SLIDE---
id: m8b1K3nL8x
layout: single
section: Module 8
chapter: "08"
kicker: Agents
title: Beyond Answering — AI That Does
tone: section-b
animation: stagger
anim_stagger: 0.12

So far: a model that reads, reasons, and responds.
Next: a model that can act.
A standard LLM takes input → produces text. That's it.
An agent is an LLM given:

A goal rather than just a question
A set of tools it can decide to use
The ability to chain multiple steps together — reasoning as it goes

The difference between a brilliant advisor who can only talk — and one who can also pick up the phone, pull the file, and send the email.



## ---SLIDE---
id: m8b2L4mP9y
layout: single
section: Module 8
chapter: "08"
kicker: Definitions
title: What Are Tools?
tone: section-b
animation: stagger
anim_stagger: 0.12

Tools are functions the model can choose to call.
The model doesn't execute them itself — it decides when and why to use them, and receives the result back into its context.

**Tool type** — **Example in banking**
**Search / RAG** — Retrieve relevant policy or client documents
**Database query** — Look up a client's transaction history
**API call** — Check current exchange rates or market data
**Calculator / code** — Run a precise financial calculation
**Write / send** — Draft an email, fill a form, log a case note
**Trigger workflow** — Initiate a compliance check or approval process

***Tools turn language into action.***



## ---SLIDE---
id: m8b3M5nQ1z
layout: single
section: Module 8
chapter: "08"
kicker: Orchestration
title: How an Agent Thinks
tone: section-b
animation: stagger
anim_stagger: 0.12

A simple example: "Summarise the credit risk for client X before tomorrow's meeting"
The agent doesn't just answer — it works:

🔍 Retrieves the client's file from the document store (RAG)
📊 Queries the database for recent transaction patterns
🧮 Runs a risk scoring calculation
🌐 Checks current market conditions via API
🧠 Reasons across all retrieved information
✍️ Produces a structured briefing — ready for the meeting

Each step informs the next. The model decides the sequence.



## ---SLIDE---
id: m8b4N6pR2v
layout: single
section: Module 8
chapter: "08"
kicker: Governance
title: Guardrails — Why Control Matters
tone: section-b
animation: stagger
anim_stagger: 0.12

More capability = more responsibility.
Agents operating in banking contexts must be carefully constrained:

Human-in-the-loop — certain actions require approval before execution
Tool boundaries — the agent can only access what it is explicitly permitted to
Audit trails — every tool call and decision step should be logged
Failure handling — what happens when a tool returns unexpected results?

An agent with access to client data, communication channels, and workflow systems is not a chatbot. It requires governance like any other operational system.

The question is never just "can it do this?" — but "should it do this autonomously?"



## ---SLIDE---
id: m8b5O7qS3w
layout: single
section: Module 8
chapter: "08"
kicker: Arc
title: The Full Picture
bodyClass: lead--flowchart
tone: section-b
animation: stagger
anim_stagger: 0.12

How everything connects:
User request
      ↓
  [ Agent / Orchestrator ]
      ↓
  Reasons about the goal
      ↓
 ┌─────────────────────────────┐
 │  Tools available:           │
 │  • RAG (your documents)     │
 │  • Database queries         │
 │  • APIs & live data         │
 │  • Calculations & code      │
 │  • Workflow triggers        │
 └─────────────────────────────┘
      ↓
  Synthesises results
      ↓
  Response or Action
      ↓
 [ Human review — where required ]

The frozen chef, handed the right recipes, the right ingredients, and a fully equipped kitchen — with a supervisor in the room for the dishes that matter.



## ---SLIDE---
id: mcp1X2kN9w
layout: single
section: Module 8
chapter: "08"
kicker: MCP
title: The Problem Before MCP
tone: section-b
animation: stagger
anim_stagger: 0.12

**MCP — Giving Agents a Standard Language**

Every tool connection was built by hand.
As agents became more capable, teams wanted to connect them to more systems:

CRM platforms
Internal databases
Document stores
Calendar, email, communication tools
Core banking systems

The problem: every integration was custom-built. Different syntax, different authentication, different error handling — for every model, for every tool, for every vendor.

Imagine every appliance in the kitchen needing its own unique, incompatible power socket.



## ---SLIDE---
id: mcp2Y3lP8x
layout: single
section: Module 8
chapter: "08"
kicker: MCP
title: What MCP Is
tone: section-b
animation: stagger
anim_stagger: 0.12

MCP = Model Context Protocol
An open standard, introduced by Anthropic in 2024, that defines a single, universal way for AI models to connect to external tools and data sources.
Think of it as USB for AI agents:

**Without MCP** | **With MCP**
Custom integration per tool | One standard connection method
Rebuild for every model update | Tool works with any MCP-compatible model
Fragile, expensive to maintain | Plug in, and it works
Siloed by vendor | Interoperable across platforms

***Build the tool once. Any compatible agent can use it.***



## ---SLIDE---
id: mcp3Z4mQ7y
layout: single
section: Module 8
chapter: "08"
kicker: MCP
title: Where MCP Sits in the Architecture
tone: section-b
animation: stagger
anim_stagger: 0.12

MCP is the connective layer between the agent and the outside world:
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

Each system exposes itself as an MCP server. The agent speaks to all of them through the same standard interface — it doesn't need to know the specifics of each system underneath.



## ---SLIDE---
id: mcp4A5nR6z
layout: single
section: Module 8
chapter: "08"
kicker: MCP
title: Why It Matters for Banking
tone: section-b
animation: stagger
anim_stagger: 0.12

MCP turns AI integration from a bespoke engineering project into an infrastructure decision.

✅ Faster deployment — connect new systems without rebuilding agent logic
✅ Vendor flexibility — swap the underlying model without rewiring all your tools
✅ Auditability — a standardised layer is easier to monitor and govern
✅ Ecosystem momentum — MCP is being adopted rapidly across platforms, tools, and vendors

In the same way that REST APIs standardised how web services talk to each other — MCP is standardising how AI agents talk to the world.

For bank leadership, the strategic implication is clear: institutions that build their integrations on open standards now will not be locked into a single vendor's ecosystem later.

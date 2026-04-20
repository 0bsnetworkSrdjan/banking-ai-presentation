---META---
# Global presentation configuration.
# Edit languages to control which languages are offered in the selector.
# The first entry in the list is the default language.
# When you ask the agent to "update slides", it translates all text fields
# into every language listed here. Content is always authored in English.

languages: en, sr
default: en
---META---

<!-- ================================================================
  SLIDES CONTENT — UniCredit Presentation
  ================================================================

  HOW TO USE
  ──────────
  Edit this file. When ready, tell the agent "update slides"
  and it will rewrite slides.js automatically.

  Each slide starts with ---SLIDE--- on its own line.
  Below that is a YAML frontmatter block (between --- markers)
  for the slide's metadata, followed by the content in markdown.

  FRONTMATTER FIELDS
  ──────────────────
  layout   (required)
    title        Big centred title card — section openers, cover slide
    single       One card: heading + body + bullets (standard workhorse)
    two-col      Two cards side by side — compare, contrast, parallel points
    image-text   Image card left + text+bullets card right
    quote        Large centred pull-quote with optional attribution
    bullets-only Title + wide full-width bullet grid, no body paragraph

  section  (required)
    Label shown in the top bar and the section chip on the card.
    Examples: "Introduction", "Context", "Solution", "Roadmap"

  chapter  (optional)
    Chapter number string. Shown in the section chip alongside section.
    Examples: "01", "02", "03"

  kicker   (optional)
    Small all-caps label printed above the title.
    Use for dates, subtitles, or short context labels.
    Example: "April 2026 · Belgrade"

    NOTE: If BOTH kicker and title are omitted, no header glass box is rendered.
    The content glass box(es) will expand vertically to fill the full slide area.
    The section chip (if section/chapter are set) moves inside the content box.

  tone     (required)
    Controls the page background tint behind the card.
    section-a   warm sand/cream tones — intro, context, background slides
    section-b   cool mint/green tones — solution, roadmap, technical slides

  style    (optional, default: "default")
    Controls the glass card's colour treatment.
    default      white frosted glass, dark text  ← standard
    dark         dark frosted glass, white text  ← good for title/impact slides
    tinted       primary-blue tinted glass, white text  ← highlight slides
    ghost        near-transparent glass, dark text  ← let background dominate

  image    (image-text layout only)
    Filename of the image, e.g. platform-diagram.png
    Place the file in: sites/unicredit-rs/public/img/

  animation  (optional, default: "fade-up")
    Controls how content elements animate in when the slide becomes active.
    fade-up      opacity + rise 24px + blur clear  ← default
    fade-in      pure opacity fade, no movement
    rise         dramatic slide up 56px, no blur
    blur-in      stays in place, heavy blur → sharp, slight scale
    stagger      each element comes in one at a time with longer gaps
    instant      content appears immediately, no animation

  anim_duration  (optional, default: 0.5)
    Seconds each animated element takes. Example: 0.9 for slower reveals.

  anim_stagger   (optional, default: 0.07)
    Seconds of delay between each successive element. Example: 0.18 for
    very sequential staggered reveals.

  CONTENT BODY (after the closing ---)
  ──────────────────────────────────────
  # Heading     → slide title (h1)
  ## Subtitle   → subtitle below title (title layout only)
  paragraph     → lead body text
  - item        → bullet list
  > text        → pull-quote text (quote layout only)
  — attribution → attribution line after quote (quote layout only)

  For two-col and image-text layouts, split the body into two
  named blocks using [left] and [right] on their own lines.
  Each block can have its own heading, body, and bullet list.

  EDITING TRANSLATIONS
  ─────────────────────
  Auto-translated text can be overridden per slide by adding a
  language block at the end of the slide body.

  Use [langcode] on its own line to start an override block.
  The block uses the same syntax as the English body.
  The agent will use these verbatim and will never re-translate them.
  Only override the fields that need correcting — missing fields
  will still be auto-translated.

  Example — override only the German title and bullets:

    [de]
    # Geschäftskontext & Ziele (manuell korrigiert)

    - Korrigierter Punkt eins
    - Korrigierter Punkt zwei

  You can override any text field: title, body, bullets,
  kicker, subtitle, quote, attribution, and column content.

  STYLE TUNING GUIDE
  ──────────────────
  To make glass more frosted/whiter:  raise the rgba alpha values
  in .slide-glass background, and raise the blur value in index.css
  To make glass darker:               use style: dark in frontmatter
  To add transparency:                use style: ghost in frontmatter
  ================================================================ -->


<!-- ═══════════════════════════════════════════
     LAYOUT: title
     Large centred title card.
     Good for cover slide and section openers.
     style: dark gives white text on dark glass.
     ═══════════════════════════════════════════ -->

---SLIDE---
layout: title
section: Introduction
kicker: April 2026 · Belgrade
tone: section-a
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# AI Enablement for Banking Teams
## A practical framework for introducing AI into daily workflows


<!-- ═══════════════════════════════════════════
     LAYOUT: single
     Standard workhorse slide.
     One glass card: kicker + title + body + bullets.
     section-chip shows section + chapter number.
     ═══════════════════════════════════════════ -->

---SLIDE---
layout: single
section: Context
chapter: "01"
kicker: Why We're Here
tone: section-a
animation: fade-up
---
# Business Context & Goals

The banking sector faces unprecedented disruption from fintech players, changing customer expectations, and regulatory shifts.

- Accelerate digital product delivery by 40%
- Reduce time-to-market from 18 months to 6
- Improve NPS from 42 to 65 by end of 2026

<!-- Translation override example.
     Add a [langcode] block to correct any auto-translated field.
     Only the fields you write here are overridden — everything else is still auto-translated.
     Remove this comment block and the [de] section below once you understand the pattern. -->

[de]
# Geschäftskontext & Ziele

Der Bankensektor sieht sich mit beispielloser Disruption durch Fintech-Akteure konfrontiert.

- Digitale Produktbereitstellung um 40 % beschleunigen
- Time-to-Market von 18 auf 6 Monate reduzieren
- NPS bis Ende 2026 von 42 auf 65 steigern


<!-- ═══════════════════════════════════════════
     LAYOUT: two-col
     Two glass cards side by side.
     Use [left] and [right] to assign content.
     Each side can have its own heading, body,
     and bullet list independently.
     ═══════════════════════════════════════════ -->

---SLIDE---
layout: two-col
section: Solution
chapter: "02"
kicker: Our Approach
title: Challenge vs Solution
tone: section-b
animation: stagger
---
[left]
# What We're Solving
The legacy stack creates a 14-month average delivery cycle. Teams spend 60% of time on integration, not innovation.

- Fragmented tooling across 12+ systems
- Manual compliance checks at every gate
- Slow deployment pipelines

[right]
# How We Solve It
A modular platform layer that standardises integration, automates compliance, and decouples deployment from release.

- Unified API gateway
- Automated governance hooks
- Feature-flag driven releases


<!-- ═══════════════════════════════════════════
     LAYOUT: quote
     Large centred pull-quote.
     Use > for the quote text.
     Follow with — attribution on the next line.
     style: dark recommended for impact.
     ═══════════════════════════════════════════ -->

---SLIDE---
layout: quote
section: Vision
tone: section-a
style: dark
animation: rise
anim_duration: 0.8
anim_stagger: 0.22
---
> Banking is not something you go to — it is something you do.
— Brett King, Bank 4.0


<!-- ═══════════════════════════════════════════
     LAYOUT: image-text
     Image card on the left, text card on the right.
     Set image: filename.png in frontmatter.
     Place the image file in public/img/
     Only [right] block is needed in the body.
     ═══════════════════════════════════════════ -->

---SLIDE---
layout: image-text
section: Solution
chapter: "03"
kicker: In Practice
title: Platform Architecture
tone: section-b
image: platform-diagram.png
animation: fade-in
---
[right]
End-to-end flow from customer request to fulfilment in under 200ms, with full audit trail at every step.

- Event sourcing at every layer
- Kafka-based async messaging
- Observability built in from day one
- Zero-downtime deployment


<!-- ================================================================
  CARRIED OVER FROM PPTX — AI Demystified UniCredit Workshop v2
  Sections follow the original workshop structure exactly.
  Existing slides above are preserved unchanged.
  ================================================================ -->


<!-- ─── INTRODUCTION ─────────────────────────────────────────────── -->

---SLIDE---
layout: title
section: Introduction
kicker: April 2026 · Belgrade
tone: section-a
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# AI Demystified
## A Half-Day Workshop for UniCredit Leadership — From buzzwords to business power


---SLIDE---
layout: single
section: Introduction
kicker: Your Guide Today
tone: section-a
animation: fade-up
---
# Srdjan Kupresanin — Founder & CEO, Blockstruct GmbH

Blockstruct builds production-ready AI solutions for government, enterprise and banking clients. International team across Austria, UK, Spain, Croatia, Serbia, Montenegro.

- Croatian Ministry of Health — national medicine shortage prevention platform, government-grade, countrywide deployment
- Raiffeisen Bank International — world's first Euro-backed stable token on a public blockchain, independently evaluated by Croatian State Cloud & Citadelo cybersecurity
- VERBUND & SMATRICS / EnBW — AI-powered ESG reporting, digital operations & cybersecurity for Austria's largest energy company
- 100+ stakeholders in production · Tens of thousands of documents processed, payments automated, decisions supported — daily
- Member of AI Factory Austria AI:AT Hub · www.ai-at.eu


---SLIDE---
layout: two-col
section: Introduction
kicker: Our Ecosystem
title: AI Factory Austria — AI:AT Hub
tone: section-a
animation: fade-up
---
[left]
# What Is AI:AT?
Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €1.5B+ pan-European commitment to AI infrastructure.

- 67 member organisations
- 28 companies
- 5 sectors covered
- Led jointly by AIT and Advanced Computing Austria

[right]
# Academic Partners
TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator

Blockstruct is one of the hub's business members, working at the intersection of AI research and real-world enterprise deployment. This workshop was developed within that ecosystem.


---SLIDE---
layout: single
section: Introduction
kicker: Why This Moment Matters
tone: section-a
style: tinted
animation: stagger
anim_stagger: 0.15
---
# Full Disclosure: This Slide Deck Was Prepared by an AI

Every bullet point was written by AI with human guidance. Not a single sentence typed by hand. Here is what that means for you.

- The Reality — previous revolutions replaced physical labour. This one replaces cognitive labour: analysis, summaries, classification, first drafts. The question is not whether this changes everything. It already has.
- The Choice — in 1811, textile workers smashed weaving machines rather than adapt. It did not end well. We face the same fork: resist and be bypassed, or learn the machinery and use it. This is the space race of our time.
- The Real Question — if AI handles the cognitive load, what is left for humans? Everything that makes us human: genuine judgment, empathy, trust-building, leadership. The goal is not job preservation — it is becoming the best possible versions of ourselves.


---SLIDE---
layout: bullets-only
section: Introduction
kicker: What You Will Leave With
title: About This Workshop
tone: section-a
animation: fade-up
---
- Understand the technology — what LLMs actually are, how they learn, and what they genuinely can and cannot do
- Design better applications — identify where AI creates real value in your workflows, especially in sales and client relationships
- Ask better questions — leave with a mental framework to evaluate AI proposals, pilots, and vendor claims


---SLIDE---
layout: single
section: Introduction
kicker: Our Agenda
title: Today's Journey
tone: section-a
animation: stagger
anim_stagger: 0.12
---
Eight modules across a half day — no coding required.

- Module 1 (15 min) — What IS This Thing? LLMs, the four intelligences, setting the mental model
- Module 2 (20 min) — What's a Vector? How AI encodes meaning — illustrated with medieval hierarchy
- Module 3 (20 min) — The Frozen Chef. Training, parameters, labelling, and teaching AI your vocabulary
- Module 4 (25 min) — What AI Knows & How to Add More. RAG, tools, embeddings, fine-tuning
- Module 5 (15 min) — Why AI Lies to Your Face. Hallucinations and how to prevent them
- Module 6 (25 min) — Talking to AI Like a Pro. Prompt & context engineering
- Module 7 (20 min) — AI That Does Things. Agents, MCP, skills — AI that acts, not just answers
- Module 8 (10 min) — The Big Picture. Where we are, where we are going, and what stays human


<!-- ─── MODULE 1: WHAT IS THIS THING? ─────────────────────────────── -->

---SLIDE---
layout: title
section: Module 1
chapter: "01"
kicker: Module 1 · 15 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# What IS This Thing?
## Setting the mental model — and dispelling a few myths


---SLIDE---
layout: two-col
section: Module 1
chapter: "01"
kicker: The Framework
title: The Four Types of Intelligence
tone: section-b
animation: stagger
anim_stagger: 0.12
---
[left]
# Left Brain — Where AI Lives
Dr. Jill Bolte Taylor's four-intelligence framework — neuroscientist, TED Talk icon, stroke survivor — is one of the best mental models for understanding where AI sits.

- Left Thinking → serial, logical, language-based. Pattern recognition, analysis, linear reasoning. AI lives here.
- Left Emotional → habit, reward, routine behaviour. Reinforcement learning is actively exploring this territory.

[right]
# Right Brain — Distinctly Human
The right hemisphere handles holistic, contextual, and empathic processing — the parts of intelligence AI has not yet reached.

- Right Thinking → holistic, contextual, spatial. The big-picture perspective. Not yet touched by AI.
- Right Emotional → empathy, intuition, present-moment connection. Not yet touched by AI.


---SLIDE---
layout: single
section: Module 1
chapter: "01"
kicker: The Core Mechanism
title: LLMs Are Left-Brain Serial Processors — On Steroids
tone: section-b
animation: fade-up
---
They do one thing, and they do it extraordinarily well: predict the most useful next token, given everything they have seen.

- "Token" ≈ word (or part of a word). That is literally it. The rest — writing poetry, explaining a contract, drafting a sales pitch — emerges from doing that one thing at massive scale.
- Trained on billions of examples: every book, research paper, forum post, and legal filing ever published.
- Think of it as the world's most sophisticated autocomplete — one that has read everything. Not magic. Not human. But genuinely remarkable.


<!-- ─── MODULE 2: WHAT'S A VECTOR? ────────────────────────────────── -->

---SLIDE---
layout: title
section: Module 2
chapter: "02"
kicker: Module 2 · 20 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# Excuse Me, What's a Vector?
## How AI encodes meaning — illustrated with medieval hierarchy


---SLIDE---
layout: two-col
section: Module 2
chapter: "02"
kicker: An Analogy
title: Who Has the Most Power?
tone: section-b
animation: stagger
---
[left]
# Three Characters, One Kingdom
The King: highest political power, controls the treasury, commands armies — but physically rather unimpressive.

The Peasant: no political power, no wealth — but surprisingly sturdy and capable.

The Horse: zero political power, owns nothing — but fastest and strongest of all three.

[right]
# The Insight
The answer is: it depends entirely on which dimension of power you are measuring.

- Political power: King 10/10, Peasant 1/10, Horse 0/10
- Physical power: King 3/10, Peasant 6/10, Horse 9/10
- Economic power: King 9/10, Peasant 1/10, Horse 0/10

This is the foundation of how AI encodes meaning. Different dimensions, different values, same entity.


---SLIDE---
layout: single
section: Module 2
chapter: "02"
kicker: The Technical Reality
title: Enter the Vector — Nuance, Encoded as Numbers
tone: section-b
animation: fade-up
---
A vector is simply a list of numbers that locates something in a multi-dimensional space. Each dimension captures one aspect of meaning.

- AI uses 1,536 dimensions instead of 4 — but the principle is identical to the King/Peasant/Horse example
- "Client complaint" and "customer dissatisfaction" end up very close together in vector space
- "Basel III" and "Beyoncé" do not
- This is how AI understands nuance, finds similar documents, and connects ideas across your entire knowledge base
- It is not reading — it is geometry


---SLIDE---
layout: two-col
section: Module 2
chapter: "02"
kicker: Vectors in Action
title: The Power of Precise Instructions
tone: section-b
animation: fade-up
---
[left]
# The Prompt
"Explain why it rains. You are a leading meteorologist. Your audience is a 10-year-old who has never heard the word 'evaporation' before."

Two instructions embedded: domain expertise (meteorologist) and communication style (age 10).

[right]
# The Result
"You know how puddles disappear after a sunny day? The sun is so warm it turns the water into tiny invisible bits that float up into the sky. When lots of those tiny bits get together way up high, they make a cloud. And when the cloud gets too full? It rains — like a very full glass spilling over."

No jargon. Right tone. Accurate content. Same model. Completely different instruction.


<!-- ─── MODULE 3: THE FROZEN CHEF ─────────────────────────────────── -->

---SLIDE---
layout: title
section: Module 3
chapter: "03"
kicker: Module 3 · 20 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# The Frozen Chef
## Training, parameters, labelling — and teaching AI your vocabulary


---SLIDE---
layout: single
section: Module 3
chapter: "03"
kicker: How LLMs Learn
title: A Brief History of Eating the Internet
tone: section-b
animation: stagger
anim_stagger: 0.12
---
Three stages — from raw data to the models you use today.

- Step 1: Ingest everything — books, articles, Wikipedia, scientific papers, Reddit arguments, legal filings, customer service transcripts. All of it. Multiple times.
- Step 2: Compress the patterns — trillions of examples of 'what word comes after what' are compressed into billions of numerical parameters. Not stored as text — as weights.
- Step 3: Freeze the result — training ends. The parameters are locked. The model now carries a statistical snapshot of human language and knowledge as of that moment.
- The chef is brilliant. But the kitchen closed when training ended. No new ingredients after the cutoff date.


---SLIDE---
layout: single
section: Module 3
chapter: "03"
kicker: The Human Layer
title: Labelling — The Assembly Line Behind the Curtain
tone: section-b
animation: fade-up
---
A raw LLM trained only on internet text will helpfully explain how to do terrible things. Labelling — specifically RLHF — is how we fix that.

- Human raters — thousands of people evaluate pairs of AI responses: which is more helpful, more accurate, more appropriate?
- Reward model — a separate model learns from human preferences, building an automated sense of quality
- Fine-tune on reward — the LLM is updated to produce outputs that score well on the reward model. Repeated many times.
- RLHF (Reinforcement Learning from Human Feedback) is why modern LLMs are useful rather than unhinged.


---SLIDE---
layout: single
section: Module 3
chapter: "03"
kicker: Teaching AI Your World
title: Can We Teach AI to Understand Our Business?
tone: section-b
animation: stagger
anim_stagger: 0.12
---
Yes. Three complementary approaches — all of which Blockstruct deploys for banking clients.

- Iterative prompting & instruction — show the AI examples of what 'correct' looks like for your context. No code required; any business analyst can do this. Example: teaching AI to categorise incoming client emails into routing buckets.
- RAG + custom knowledge bases — feed the AI your product sheets, policies, client history. Output is grounded in your data, not the internet. Example: AI that answers 'What are the current terms for our SME credit line?' — accurately.
- Fine-tuning (when it is worth it) — re-train the model on your specific data and preferred outputs. More powerful, more expensive, harder to update. Example: a credit risk classification model that uses UniCredit-specific language.


<!-- ─── COFFEE BREAK ───────────────────────────────────────────────── -->

---SLIDE---
layout: quote
section: Break
tone: section-a
style: dark
animation: rise
anim_duration: 0.8
anim_stagger: 0.22
---
> The AI will not be taking a break. But unlike the AI, you have a corpus callosum. You will need it for the second half.
— 15 minutes · Back soon


<!-- ─── MODULE 4: WHAT AI KNOWS ───────────────────────────────────── -->

---SLIDE---
layout: title
section: Module 4
chapter: "04"
kicker: Module 4 · 25 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# What AI Knows (And How to Give It More)
## RAG, tools, embeddings, fine-tuning — the full knowledge toolkit


---SLIDE---
layout: two-col
section: Module 4
chapter: "04"
kicker: A Fundamental Distinction
title: Two Flavours of Knowledge
tone: section-b
animation: stagger
---
[left]
# Parametric — Baked In
Everything the model learned during training. Frozen at the cutoff date.

- Incredibly broad, staggeringly deep
- Has a knowledge cutoff — cannot reference recent events
- Cannot be updated without full retraining
- Cannot reference private or proprietary data

[right]
# Contextual — Looked Up
Fetched at runtime and injected into the conversation.

- Documents retrieved in real time via RAG
- Live data via tools (APIs, databases)
- Client records, policies, product sheets
- Always current — no cutoff issue
- Keeps your data inside your environment


---SLIDE---
layout: single
section: Module 4
chapter: "04"
kicker: Retrieval-Augmented Generation
title: RAG — The Library Card
tone: section-b
animation: fade-up
---
AI that looks things up before answering. The user asks → AI searches your documents → relevant chunks retrieved → answer grounded in your data.

- AI relationship assistant that cites your actual client history, not a hallucinated version of it
- Compliance Q&A that pulls from current DORA, GDPR, AI Act documentation — with source citations
- Sales support: 'What products are available for an Austrian SME with €5M turnover?' — answered from your product catalogue
- Every answer is traceable and auditable — a critical requirement in regulated banking environments


---SLIDE---
layout: two-col
section: Module 4
chapter: "04"
kicker: Extending AI Capability
title: Tools, Embedding, and Fine-Tuning
tone: section-b
animation: fade-up
---
[left]
# Tools — AI With Hands
Beyond text in / text out. AI can call APIs, query databases, read emails, run calculations, and trigger workflows.

The difference between an AI that tells you a client's credit limit and one that actually pulls it from your CRM in real time.

[right]
# Embedding vs Fine-Tuning
Embedding (Knowledge) — giving someone a much better map of your territory. Use when your AI needs to understand and search your documents: client files, product knowledge bases, policy libraries.

Fine-tuning (Behaviour) — years of specialist training in a specific discipline. Use when off-the-shelf behaviour does not fit: a model that writes in UniCredit's exact tone, or classifies documents using internal taxonomy.


<!-- ─── MODULE 5: WHY AI LIES ──────────────────────────────────────── -->

---SLIDE---
layout: title
section: Module 5
chapter: "05"
kicker: Module 5 · 15 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# Why AI Lies to Your Face
## Hallucinations, the split brain, and why confident is not the same as correct


---SLIDE---
layout: single
section: Module 5
chapter: "05"
kicker: The Neuroscience Parallel
title: The Most Interesting Brain Surgery You Will Hear About Today
tone: section-b
animation: stagger
anim_stagger: 0.12
---
In the 1960s, surgeons treated severe epilepsy by severing the corpus callosum — the bridge connecting the brain's two hemispheres.

- What happened — the right hemisphere could see and control the left hand. The left hemisphere — the verbal one — had no access to this information.
- The remarkable part — when asked why the left hand was doing something, the left hemisphere did not say 'I don't know.' It invented a confident, plausible, completely made-up explanation.
- Sound familiar? This is exactly what LLMs do. When they lack the right information, they do not say 'I don't know.' They generate the most statistically plausible answer — even if it is wrong.
- This is not a bug that will be patched. It is architecturally inherent to how LLMs work.


---SLIDE---
layout: two-col
section: Module 5
chapter: "05"
kicker: Prevention Strategies
title: Hallucinations in Banking — and How We Prevent Them
tone: section-b
animation: stagger
---
[left]
# The Stakes
Wrong regulatory citation, fabricated client history, incorrect product terms — all delivered with complete confidence.

RAG grounding — force the AI to retrieve and cite sources. If it cannot find a source, it says so. Answers are traceable and auditable.

Structured outputs — constrain the answer format. A response with 'Confidence: 87% | Source: Product Manual p.12' is much harder to hallucinate convincingly.

[right]
# Design Principles
Human-in-the-loop — for high-stakes outputs such as credit decisions and compliance advice, AI drafts and a human approves. Not a workaround. A design principle.

Eval & testing — build test sets of known-correct answers. Run them regularly. Measure hallucination rates. Treat it like any other quality metric.


<!-- ─── MODULE 6: TALKING TO AI LIKE A PRO ────────────────────────── -->

---SLIDE---
layout: title
section: Module 6
chapter: "06"
kicker: Module 6 · 25 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# Talking to AI Like a Pro
## Prompt engineering, context engineering, and the art of the well-placed nudge


---SLIDE---
layout: two-col
section: Module 6
chapter: "06"
kicker: Prompt Engineering
title: The Brief That Actually Gets the Job Done
tone: section-b
animation: stagger
---
[left]
# The Vague Prompt
"Summarise this client meeting."

Result: a generic 3-line paragraph that misses the point, invents a next step, and does not match your format.

You would not tell a new analyst 'make this better.' You would give context, objectives, constraints, and examples. Prompt engineering is exactly that — applied to AI.

[right]
# The Engineered Prompt
"You are a senior relationship manager at UniCredit. Summarise this client meeting in 5 bullet points: client concerns raised, products discussed, commitments made, risks noted, and next actions with dates. Tone: professional, concise. Output in English."

Result: structured, accurate, immediately usable. Same model. Completely different output.


---SLIDE---
layout: single
section: Module 6
chapter: "06"
kicker: The Next Frontier
title: Context Engineering — Designing the Entire Office
tone: section-b
animation: stagger
anim_stagger: 0.15
---
Prompt engineering is writing a good brief. Context engineering is designing the entire office. Everything the AI sees shapes its response.

- System instructions — role, tone, output format, constraints, what to refuse. Defined once, applied always.
- Conversation history — everything said so far; what the AI remembers in this session.
- Retrieved documents — your RAG output; the specific chunks fetched for this question.
- User message — the actual prompt; just the top layer of a much richer stack.
- Examples — demonstrating the desired output format through few-shot learning.
- The teams that master context engineering will produce AI outputs that feel custom-built — because they are.


<!-- ─── MODULE 7: AI THAT DOES THINGS ─────────────────────────────── -->

---SLIDE---
layout: title
section: Module 7
chapter: "07"
kicker: Module 7 · 20 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# AI That Does Things
## Agents, tools, MCP, skills — when AI stops answering and starts acting


---SLIDE---
layout: single
section: Module 7
chapter: "07"
kicker: The Evolution
title: From Chatbot to Agent
tone: section-b
animation: stagger
anim_stagger: 0.15
---
Three generations of AI interaction — each a step change in what is possible.

- Chatbot (2022) — you ask, it answers. One question, one response, no memory.
- Assistant (2023) — you give context, it helps. Remembers the session, uses your documents, follows your style.
- Agent (2025+) — you give a goal, it figures out the steps. Plans, uses tools, calls sub-agents, delivers a result.
- Banking agent example: receive a client onboarding request → check KYC database → retrieve product eligibility rules → draft welcome email → route to relationship manager for approval.


---SLIDE---
layout: two-col
section: Module 7
chapter: "07"
kicker: The Infrastructure of Action
title: Tools, MCP, and Skills
tone: section-b
animation: fade-up
---
[left]
# MCP — Model Context Protocol
The USB port of AI. One standard protocol that lets any AI model connect to any tool: your CRM, email, document store, databases, calendar.

Connected today at UniCredit via Google Cloud: Google Workspace, BigQuery, Cloud Storage — all MCP-ready.

Blockstruct builds MCP connectors to your existing systems.

[right]
# Skills — Reusable AI Capabilities
Think of Skills as apps, but for AI. A Skill bundles a prompt, tools, context, and behaviour into a deployable package. Once built, reusable by anyone in the organisation.

- Client meeting summariser
- Credit application pre-screener
- Regulatory Q&A assistant
- Sales pitch personaliser


<!-- ─── MODULE 8: THE BIG PICTURE ─────────────────────────────────── -->

---SLIDE---
layout: title
section: Module 8
chapter: "08"
kicker: Module 8 · 10 min
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# The Big Picture
## Where LLMs fit in the map of intelligence — and what remains distinctly human


---SLIDE---
layout: two-col
section: Module 8
chapter: "08"
kicker: Revisiting the Framework
title: Back to the Brain — Where Is AI Right Now?
tone: section-b
animation: stagger
---
[left]
# Where AI Is Today
Left Thinking — serial logic, pattern recognition, language. LLMs operate fully in this quadrant.

Left Emotional — reward, habit, refinement of behaviour. Reinforcement learning is actively learning this territory.

Right Thinking — holistic reasoning, creative connection, contextual leaps. Not yet within AI's reach.

[right]
# What Remains Yours
Right Emotional — empathy, presence, genuine human connection and intuition.

This is not temporary. The architecture of current AI systems does not touch this quadrant.

Your judgment, relationships, and context remain your competitive moat — and the reason AI works best as an amplifier, not a replacement.


---SLIDE---
layout: single
section: Module 8
chapter: "08"
kicker: An Honest Forecast
title: Where Is This Going?
tone: section-b
animation: fade-up
---
What is coming — with realistic timelines.

- 12–18 months — agents that reliably execute multi-step banking workflows; memory so AI remembers your clients across sessions; multimodal reading of contracts, charts, and scanned documents together
- 2–3 years — better reasoning under uncertainty, reducing hallucinations further; smaller, cheaper, on-premise deployable models; regulatory clarity as AI Act compliance tooling matures
- Ongoing — the boundary between 'AI assistant' and 'AI colleague' continues to blur; the professionals who thrive will know how to ask the right questions; your judgment, relationships, and context remain your competitive moat


<!-- ─── FROM UNDERSTANDING TO APPLICATION ─────────────────────────── -->

---SLIDE---
layout: title
section: Application
tone: section-a
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# From Understanding to Application
## Your role as an AI-literate leader at UniCredit


---SLIDE---
layout: two-col
section: Application
kicker: Your New Role
title: You Are the Architect. AI Is the Contractor.
tone: section-a
animation: stagger
---
[left]
# Identify & Evaluate
Which processes are document-heavy, rule-based, and high-volume? Those are prime candidates. Which involve genuine human judgment and relationship trust? Protect those.

Ask: 'How do you know?' Demand citations. Request confidence levels. Never accept a confident AI output at face value without understanding its grounding.

[right]
# Design & Measure
The best outcomes come from AI + human, not AI instead of human. Your job is to design the handoff points — where does AI draft, where do you review and decide?

Define success metrics in measurable terms: time saved per relationship manager, accuracy of document classification, conversion rates on AI-assisted pitches.


---SLIDE---
layout: bullets-only
section: Application
kicker: Starting Points
title: The Questions Worth Asking Right Now
tone: section-a
animation: stagger
anim_stagger: 0.15
---
- "Where does our sales team spend 60% of their time that is not actually selling?" — meeting prep, reporting, email drafting, CRM updates — all prime for AI augmentation
- "What does our best relationship manager know that is not written down anywhere?" — tacit knowledge can be made explicit, embedded, and made available to the whole team
- "At which point in our client journey does friction most cost us a deal?" — document collection, waiting for approvals, delayed responses — AI can eliminate most of this
- "What would a second-opinion AI layer in our credit or compliance process be worth?" — not replacing the decision, augmenting it with rapid, consistent, auditable analysis
- "Which of our clients are most at risk of churn, and why don't we know sooner?" — AI pattern recognition on communication data, transaction data, and CRM notes can surface early signals


---SLIDE---
layout: single
section: Application
kicker: What Happens Next
title: Next Steps
tone: section-a
animation: fade-up
---
A clear four-stage path from workshop to working AI.

- This week — Workshop output session. Each participant identifies one concrete AI application opportunity in their area. 60-minute structured discussion to surface and prioritise ideas.
- 2–3 weeks — Priority use case design. Blockstruct works with your teams to design the 2–3 highest-value pilots: objectives, data requirements, success metrics, compliance checkpoints.
- 6–10 weeks — Pilot build & deploy. We build on your Google Cloud / Gemini environment. A working prototype — not a PowerPoint. Tested with real users from your teams.
- Ongoing — Measure, iterate, expand. Every Blockstruct engagement is built for supervisory readiness and data sovereignty from day one.


---SLIDE---
layout: title
section: Application
tone: section-a
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
---
# Thank You.
## Questions, challenges, and scepticism all welcome.

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
Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €2.6B+ pan-European commitment to AI research, infrastructure and applications.

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

Access to European network of supercomputers — some of the highest performance computing in the world. Direct access and involvement with the entire network of European research institutes and universities, as well as companies.

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
kicker: UniCredit Bank Srbija · The Opportunity
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

# The Window Is Open.

## While the Group focuses on its most significant strategic move in years, country offices have the opportunity to contribute to the definition of the Group's AI Application Agenda.

---

UniCredit Bank Srbija could position itself as one of the Group's AI Centers of Excellence.

## ---SLIDE---

id: hQ3mK7vN5p
layout: toc
section: Introduction
kicker: Twelve Modules
title: Today's Journey
tone: section-a
animation: stagger
anim_stagger: 0.07

1. **What Is This Thing?**
2. **AI vs Human Intelligence** (Lizards and the Four Personalities — building the mental model for understanding LLMs)
3. **Vectors in Multidimensional Space — Excuse Me?** (How AI encodes information and meaning)
4. **The Frozen Chef** (Training, parameters, and teaching AI your stuff)
5. **What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)
6. **Why Does AI Lie?** (Hallucinations and the split brain analogy)
7. **Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)
8. **AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)
9. **Safe Application of AI** (Cybersecurity implications, prompt injection)
10. **The Big Picture** (Where we are, where we're going, and what stays human)
11. **Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)
12. **PoC Design Elaboration in Groups**

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
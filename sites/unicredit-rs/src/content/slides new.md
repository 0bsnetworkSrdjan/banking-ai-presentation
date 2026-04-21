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
<!--
================================================================================
AGENT INSTRUCTIONS — READ BEFORE EDITING THIS FILE
================================================================================

SOURCE OF TRUTH
  This file was regenerated from src/slides.js (see scripts/export-slides-from-js.mjs).
  If you edit slide content here, mirror the same changes in slides.js (or re-run
  the export script after editing JS) so the app and this document stay aligned.

PROTECTED SLIDES — DO NOT EDIT TEXT/LAYOUT/FIELDS CASUALLY
  The following slides tie into interactive 3D or embedded HTML. Do not rewrite,
  translate, reformat, or "simplify" their blocks unless you are deliberately
  updating src/slides.js and the related implementation together:
  • vS3bX7qN9k — 3D scene (Three.js) — visual layout lives in VectorSpaceSlide.jsx + baked data
  • nN4kP8wR2x — Embedded interactive canvas — content in public/neural-network.html

  For those ids: preserve wording, punctuation, and structure exactly unless you
  are performing a coordinated change in code + content.

BATCH MARKERS
  Slides are grouped into 5 batches (comments only) to make large edits safer.
================================================================================
-->


<!-- ═══ BATCH 1 of 5: Introduction + Module 1 ═══ -->


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

[sr]
section: Uvod

# AI demistifikovan
## Masterclass o veštačkoj inteligenciji u bankarstvu za UniCredit Srbija

---

Od pomodarskih fraza do stvarnog poslovanja.
Praktičan vodič kroz generativni AI i LLM za donosioce odluka

## ---SLIDE---

id: bV2gK6sY9q
layout: two-col
section: Introduction
title: Your guides today
tone: section-a
animation: fade-up
intro_variant: guides

Blockstruct GmbH, member of AI Factory Austria AI:AT hub
AI Applications for Business. Zero Bullshit.
European Tech. Team in Austria, Serbia, UK, Montenegro, Croatia.
Clients in Austria, UK, Croatia, USA. We have worked for banks and governments. Cybersecurity tested.

[left]
# Srđan Kuprešanin
## Founder & CEO

Mergers & Acquisitions advisory, Management Consulting, Cutting-edge Tech Architecture Design, Development and Implementation

[right]
# Nikola Zrnić
## AI Solutions Engineer

Electrotechnical engineering, Full stack software solutions development, AI applications.

[sr]
section: Uvod
title: Vaši vodiči danas

Blockstruct GmbH, član AI Factory Austria AI:AT hub-a
AI aplikacije za poslovanje. Bez blefa.
Evropska tehnologija. Tim u Austriji, Srbiji, UK, Crnoj Gori, Hrvatskoj.
Klijenti u Austriji, UK, Hrvatskoj, SAD. Radili smo za banke i državne institucije. Testirano sa aspekta sajber bezbednosti.

[left]
# Srđan Kuprešanin
## Osnivač i direktor

Savetovanje za spajanja i akvizicije, menadžment konsalting, dizajn najsavremenije tehnološke arhitekture, razvoj i implementacija

[right]
# Nikola Zrnić
## Inženjer AI rešenja

Elektrotehnički inženjering, razvoj full-stack softverskih rešenja, AI aplikacije.

## ---SLIDE---

id: nH8cF3pR7s
layout: two-col-split-right
section: Introduction
kicker: member of EU-wide AI technology ecosystem
title: "AI Factory Austria AI:AT Hub"
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

[sr]
section: Uvod
kicker: član EU ekosistema AI tehnologije
title: "AI Factory Austria AI:AT Hub"

[left]

Deo evropske inicijative AI Factories, koju finansira European High Performance Computing Joint Undertaking (EuroHPC JU) — paneuropska posvećenost AI istraživanjima, infrastrukturi i aplikacijama u vrednosti većoj od 2,6 milijardi evra.

### Zajednički vode:
- AIT — Austrian Institute of Technology
- ACA — Advanced Computing Austria

### Akademski partneri:
TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator

[www.ai-at.eu](http://www.ai-at.eu)

[right-top]
- 19 — AI fabrika širom Evrope
- €2.6B+ — Posvećenost EU

[right-bottom]
## Blockstruct at AI:AT

Jedan od poslovnih članova hab-a, koji radi na preseku AI istraživanja i stvarne primene u preduzećima. Ova masterclass je razvijena upravo u okviru ovog ekosistema.

Pristup evropskoj mreži superkompjutera — jednih od najmoćnijih na svetu. Direktan pristup i saradnja sa celom mrežom evropskih istraživačkih instituta i univerziteta, kao i sa kompanijama.

## ---SLIDE---

id: wC5pM8jQ2x
layout: icon-grid
section: Introduction
kicker: What you will leave with
title: About This Masterclass
tone: section-a
animation: stagger
anim_stagger: 0.1

By the end of this workshop, you won't be AI engineers. You'll be AI-literate decision-makers — which is frankly more useful.

- [brain]: **Understand the Technology** | What LLMs actually are, how they learn, and what they genuinely can (and cannot) do.
- [layers]: **Design Better Applications** | Identify where AI creates real value in your workflows, starting with sales and client relationships.
- [help-circle]: **Ask Better Questions** | Have a mental framework to evaluate AI proposals, pilots / POC projects, and vendor claims.
- [gift]: **Bonus** | Brainstorm, identify and start developing 2–3 "low hanging fruit" wins for your first POC projects.

[sr]
section: Uvod
kicker: Šta ćete poneti sa sobom
title: O ovoj masterclass radionici

Do kraja ove radionice nećete biti AI inženjeri. Bićete donosioci odluka koji razumeju AI — što je, iskreno, još i korisnije.

- [brain]: **Razumete tehnologiju** | Šta su zapravo LLM modeli, kako uče i šta stvarno mogu (a šta ne mogu) da urade.
- [layers]: **Dizajnirate bolje aplikacije** | Prepoznate gde AI stvara stvarnu vrednost u vašim procesima, počev od prodaje i odnosa sa klijentima.
- [help-circle]: **Postavljate bolja pitanja** | Imate mentalni okvir za procenu AI predloga, pilot / POC projekata i tvrdnji dobavljača.
- [gift]: **Bonus** | Zajedno osmislite, prepoznate i započnete razvoj 2–3 „nisko viseće voćke“ kao vaše prve POC projekte.

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

[sr]
section: Uvod
kicker: UniCredit Bank Srbija · Prilika

# Prozor je otvoren.
## Dok se Grupa fokusira na svoj najznačajniji strateški potez u poslednjih nekoliko godina, nacionalne kancelarije imaju priliku da doprinesu definisanju Grupine Agende za primenu AI.

---

UniCredit Bank Srbija može se pozicionirati kao jedan od Grupinih Centara izvrsnosti za AI.

## ---SLIDE---

id: hQ3mK7vN5p
layout: toc
section: Introduction
kicker: Twelve Modules
title: "Today's Journey"
tone: section-a
animation: stagger
anim_stagger: 0.07
tocRevealSteps: [3,5,7,8,9,10,12]

1. **What Is This Thing?** (the story of assembly robots)
2. **AI vs Human Intelligence** (Lizards and the Four Personalities — building the mental model for understanding LLMs)
3. **Vectors in Multidimensional Space — Excuse Me?** (How AI encodes information and meaning)
4. **The Frozen Chef** (Training, parameters, a snapshot in time and that is it)
5. **What AI Knows & How to Add More** (Embeddings, RAG, fine-tuning)
6. **Why Does AI Lie?** (Hallucinations and the split brain analogy)
7. **Talk to AI Like a Pro** (Prompt & context engineering, iterative improvement)
8. **AI That Acts, Not Just Answers** (Tools, MCP, Skills, Agents)
9. **Safe Application of AI** (Cybersecurity implications, prompt injection)
10. **The Big Picture** (Where we are, where we're going, and what stays human)
11. **Brainstorming: AI @ UniCredit Srbija** (Your candidates for AI applications)
12. **PoC Design Elaboration in Groups**

[sr]
section: Uvod
kicker: Dvanaest modula
title: "Današnje putovanje"

1. **Šta je ovo zapravo?** (priča o robotima za sklapanje)
2. **AI vs ljudska inteligencija** (Gušteri i četiri ličnosti — gradimo mentalni model za razumevanje LLM-ova)
3. **Vektori u višedimenzionalnom prostoru — Molim?** (Kako AI kodira informacije i značenje)
4. **Zaleđeni kuvar** (Trening, parametri, snimak u vremenu i tu se staje)
5. **Šta AI zna i kako mu dodati još** (Embedinzi, RAG, fino podešavanje)
6. **Zašto AI laže?** (Halucinacije i analogija sa podeljenim mozgom)
7. **Razgovarajte sa AI-jem kao profesionalac** (Prompt & kontekst inženjering, iterativno unapređenje)
8. **AI koji dela, a ne samo odgovara** (Alati, MCP, Skills, agenti)
9. **Bezbedna primena AI** (Implikacije po sajber bezbednost, prompt injection)
10. **Šira slika** (Gde smo, kuda idemo i šta ostaje ljudsko)
11. **Brainstorming: AI @ UniCredit Srbija** (Vaši kandidati za AI primene)
12. **Razrada dizajna PoC-a u grupama**

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

[sr]
section: Modul 1
kicker: Modul 1

# Šta je ovo zapravo?
## Postavljamo mentalni model i razbijamo nekoliko mitova

## ---SLIDE---

id: m7nK4pQ9wR
layout: two-col
section: Module 1
chapter: "01"
title: What is this thing - robot for text assembly.
tone: section-a
animation: stagger
anim_stagger: 0.1

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

[sr]
section: Modul 1
title: Šta je ovo zapravo - robot za sklapanje teksta.

[left]
icon: robot-arm
# Fabrički roboti za sklapanje

Naviknuti smo da viđamo industrijske robote i intuitivno ih razumemo, jer su to u suštini kompjuterski kontrolisane ruke.

Imamo ruke. Jesu li to mozgom kontrolisani roboti?

Industrijska robotska ruka može da napravi veliku štetu ako joj se dozvoli da deluje nasumično.

[right]
icon: text-stream
# Roboti za sklapanje teksta

Obično manje razumemo naše robote za generisanje teksta, ali zastanite na trenutak i oslušnite sopstveni unutrašnji monolog.

Slično industrijskom robotu, robot za sklapanje teksta može da napravi veliku štetu ako mu se dozvoli da deluje nasumično.

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

[sr]
section: Modul 2
kicker: Modul 2

# AI vs ljudska inteligencija
## Gušteri, četiri ličnosti i mentalni model za razumevanje LLM-ova


<!-- ═══ BATCH 2 of 5: Module 2 ═══ -->


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

[sr]
section: Modul 2
pre_title: Neuronaučnica. Ikona TED predavanja. Preživela je moždani udar. I, neočekivano, autor jednog od najboljih okvira za razumevanje ljudske i veštačke inteligencije.
title: Četiri ličnosti (Dr. Jill Bolte Taylor)

[top-left]
# Leva misaona

Serijska. Analitička. Logička. Jezik. Obrasci i detalji. Detalji o detaljima. Kategorizacija, linearno rezonovanje, počeci, razvoji i završeci. Planiranje, rešavanje problema. Produktivnost, struktura, predviđanja.

**[Dom AI-ja]**

[bottom-left]
# Leva emocionalna

Uporedna. Definiše, razdvaja, štiti sebe. Emocionalni bol i traume. Naučena ponašanja. Nagrade i gubici, pojačavanje. Osuđivanje, reaktivnost, okrivljavanje. Anksioznost, želje, nade, porivi.

[top-right]
# Desna misaona

Mirna, otvorena, holistička, usmerena na širu sliku, ekspanzivna, povezujuća, daje smisao, „transcendentna“, mudra.

[bottom-right]
# Desna emocionalna

Prisutna, čulna, empatična, iskustvena (u trenutku). Empatija, radost, saosećanje, povezanost, intuicija.

## ---SLIDE---

id: hK3nP9qW5x
layout: bullets-only
section: Module 2
chapter: "02"
kicker: Human cognition
title: Human Thinking is a self-improving reflective fluid
tone: section-b
animation: stagger
anim_stagger: 0.1
pointsGridClass: points--grid-3x2
bodyInnerClass: slide-content__inner--bullets-3x2

- Human cognition = parallel, embodied, adaptive
- Multiple brain regions collaborate (analytical, emotional, sensory, intuitive)
- Continuous input: vision, sound, movement, touch, internal state
- Thought is recursive → we reflect, question, adjust in real time
- Decisions shaped by context + memory + emotion + feedback loops
- Brain constantly updates its model of reality

[sr]
section: Modul 2
kicker: Ljudska kognicija
title: Ljudsko mišljenje je samopoboljšavajući refleksivni fluid

- Ljudska kognicija = paralelna, utelovljena, prilagodljiva
- Više regiona mozga sarađuje (analitički, emocionalni, čulni, intuitivni)
- Neprekidan ulaz: vid, zvuk, pokret, dodir, unutrašnje stanje
- Mišljenje je rekurzivno → razmišljamo, preispitujemo, prilagođavamo u realnom vremenu
- Odluke oblikuju kontekst + sećanje + emocija + povratne petlje
- Mozak neprekidno ažurira svoj model stvarnosti

## ---SLIDE---

id: qW3sN7gH1z
layout: two-col
section: Module 2
chapter: "02"
kicker: The Core Mechanism
title: LLMs Are Serial Processors on Steroids
tone: section-b
animation: stagger
anim_stagger: 0.12
twoColPaneClass: slide-two-pane--serial-processors

[left]
# One mechanism

They do one thing, extraordinarily well:

***Predict the most likely next token, given everything they have received.***

Everything LLMs do emerges from that one process — answering questions, writing poetry, interpreting a contract, drafting a sales pitch — performed at massive scale.

[right]
# At global scale

The world's most sophisticated autocomplete; one that has read every fiction and non-fiction book, research paper, forum discussion, manual, contract, and every other piece of text ever written, transcribed, or published and digitised on the internet.

***Not magic. Not remotely human. Still, genuinely remarkable when applied carefully.***

[sr]
section: Modul 2
kicker: Ključni mehanizam
title: LLM-ovi su serijski procesori na steroidima

[left]
# Jedan mehanizam

Rade jednu stvar, i to izuzetno dobro:

***Predviđaju najverovatniji sledeći token, na osnovu svega što su primili.***

Sve što LLM radi proizlazi iz tog jednog procesa — odgovaranje na pitanja, pisanje poezije, tumačenje ugovora, priprema prodajnog nastupa — sprovedenog u ogromnom obimu.

[right]
# U globalnim razmerama

Najsofisticiraniji autocomplete na svetu; onaj koji je pročitao svaku beletristiku i stručnu knjigu, naučni rad, diskusiju na forumu, priručnik, ugovor i svaki drugi tekst koji je ikada napisan, transkribovan ili objavljen i digitalizovan na internetu.

***Nije magija. Ni izbliza nije ljudski. Pa ipak, zaista izvanredno kada se pažljivo koristi.***

## ---SLIDE---

id: zK2nL8pQ5w
layout: title
section: Module 2
chapter: "02"
tone: section-b
style: tinted
animation: blur-in
anim_duration: 1.1
anim_stagger: 0.22

# So, how can we make the best use of these serial text processors?

[sr]
section: Modul 2

# Pa, kako da najbolje iskoristimo ove serijske procesore teksta?

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

[sr]
section: Modul 3
kicker: Modul 3

# Vektori u višedimenzionalnom prostoru — Molim?
## Kako AI kodira znanje i značenje, ilustrovano.

## ---SLIDE---

id: vS3bX7qN9k
layout: vector-space
section: Module 3
chapter: "03"
kicker: Module 3
title: Banking Vector Space
subtitle: How related financial concepts cluster in multidimensional space.
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18

<!-- Visual/interactive layer is implemented in code (VectorSpaceSlide.jsx or iframe src). -->
<!-- Text above is duplicated in frontmatter for readability; keep in sync with slides.js. -->

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

[sr]
section: Modul 4
kicker: Modul 4

# Zaleđeni kuvar
## Trening, parametri i zašto modeli prestaju da uče

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

[sr]
section: Modul 4
kicker: Gradivni blokovi
title: Gradimo mozak

Model počinje kao čisti šum.

Milijarde numeričkih vrednosti — nazvanih parametri — organizovane u slojeve
Svaki sloj transformiše ulaz: karakteri → reči → koncepti → rezonovanje
Na početku treninga svaki parametar je nasumično inicijalizovan
Arhitektura je ljudski dizajnerski izbor — trening menja samo brojeve unutar nje

***Kuhinja puna opreme. Kuvar koji nikada nije pojeo nijedan obrok.***

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

[sr]
section: Modul 4
kicker: Trening
title: Trening — učenje kroz predviđanje

Jedan naizgled jednostavan zadatak, ponavljan bilionima puta:

Pokažeš modelu tekst → zatražiš da predvidi sledeću reč
Izmeriš grešku → pošalješ je unazad kroz slojeve (backpropagation)
Svaki parametar lagano pomeriš ka boljem odgovoru
Ponoviš — kroz knjige, članke, kod, nauku, pravo i veći deo interneta

Rezultat? Ne memorisanje — već destilovano razumevanje, sažeto u milijarde brojeva.

## ---SLIDE---

id: nN4kP8wR2x
layout: embed
section: Module 4
chapter: "04"
tone: section-b
style: dark
animation: blur-in
anim_duration: 0.9
anim_stagger: 0.18
embedSrc: /neural-network.html
embedTitle: "Neural network: how an LLM is built"

<!-- Visual/interactive layer is implemented in code (VectorSpaceSlide.jsx or iframe src). -->
<!-- Text above is duplicated in frontmatter for readability; keep in sync with slides.js. -->

Interactive: /neural-network.html
iframe title: Neural network: how an LLM is built

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

```bodyComparison
{
  "leftHeading": "Technique",
  "rightHeading": "What it does",
  "rows": [
    {
      "left": "**Instruction fine-tuning**",
      "right": "Teaches it to behave like an assistant"
    },
    {
      "left": "**RLHF**",
      "right": "Human raters guide it toward helpful, safe responses"
    },
    {
      "left": "**System instructions**",
      "right": "Deployers set rules and persona — without retraining"
    },
    {
      "left": "**Alignment & safety testing**",
      "right": "Red-teaming, benchmarks, sign-off"
    },
    {
      "left": "**When this is done**",
      "right": "The model is frozen."
    }
  ]
}
```

[sr]
section: Modul 4
kicker: Rafiniranje
title: Od sirovog modela do korisnog asistenta

Prethodno istreniran model je moćan, ali neupotrebljiv u praksi. Rafiniranje ga čini primenljivim:

```bodyComparison
{
  "leftHeading": "Tehnika",
  "rightHeading": "Šta radi",
  "rows": [
    {
      "left": "**Fino podešavanje po instrukcijama**",
      "right": "Uči ga da se ponaša kao asistent"
    },
    {
      "left": "**RLHF**",
      "right": "Ljudski ocenjivači ga usmeravaju ka korisnim i bezbednim odgovorima"
    },
    {
      "left": "**Sistemska uputstva**",
      "right": "Oni koji ga primenjuju postavljaju pravila i ličnost — bez ponovnog treniranja"
    },
    {
      "left": "**Alignment i bezbednosno testiranje**",
      "right": "Red-teaming, benchmarks, odobravanje"
    },
    {
      "left": "**Kada je ovo završeno**",
      "right": "Model je zamrznut."
    }
  ]
}
```


<!-- ═══ BATCH 3 of 5: Modules 3–5 ═══ -->


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

[sr]
section: Modul 4
kicker: Primena
title: Zaleđeni kuvar

Nakon primene: model ne uči. Ni najmanje.

❌ Ne zna ništa što se desilo posle prestanka treninga
❌ Ne može da uči iz korisničkih ispravki ili povratnih informacija
❌ Ne poboljšava se upotrebom
❌ Ne pamti ništa između razgovora

Ovo je namerno — model koji bi se tiho ažurirao iz aktivnih interakcija bilo bi gotovo nemoguće revidirati, sertifikovati ili nadzirati.

***Inteligencija je stvarna. Znanje ima rok trajanja.***

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

[sr]
section: Modul 5
kicker: Modul 5

# Šta AI zna — i kako mu dodati još
## Embedinzi, RAG, fino podešavanje

## ---SLIDE---

id: rK2mT8hJ3v
layout: two-col
section: Module 5
chapter: "05"
kicker: The gap
title: The Knowledge Problem
tone: section-b
animation: stagger
anim_stagger: 0.12

[left]

A frozen model only knows what it learned during training.
In banking, that's rarely enough:

❌ No knowledge of your internal documents, policies, or data
❌ No awareness of events after its training cut-off
❌ No understanding of your specific products, clients, or processes

[right]

So how do we close the gap?

Two distinct problems — two distinct solutions:

```bodyComparison
{
  "leftHeading": "Problem",
  "rightHeading": "Solution",
  "rows": [
    {
      "left": "**What it knows**",
      "right": "Embeddings + RAG"
    },
    {
      "left": "**How it behaves**",
      "right": "Fine-tuning"
    }
  ]
}
```

[sr]
section: Modul 5
kicker: Jaz
title: Problem znanja

[left]

Zamrznuti model zna samo ono što je naučio tokom treninga.
U bankarstvu, to retko kad je dovoljno:

❌ Ne poznaje vaše interne dokumente, politike ili podatke
❌ Ne zna ništa o događajima posle prestanka treninga
❌ Ne razume vaše specifične proizvode, klijente ili procese

[right]

Pa kako da premostimo jaz?

Dva različita problema — dva različita rešenja:

```bodyComparison
{
  "leftHeading": "Problem",
  "rightHeading": "Rešenje",
  "rows": [
    {
      "left": "**Šta zna**",
      "right": "Embedinzi + RAG"
    },
    {
      "left": "**Kako se ponaša**",
      "right": "Fino podešavanje"
    }
  ]
}
```

## ---SLIDE---

id: sL3nU9jK4w
layout: two-col
section: Module 5
chapter: "05"
kicker: Meaning
title: Embeddings — How AI Understands Meaning
tone: section-b
animation: stagger
anim_stagger: 0.12

[left]
# From text to vectors

Before we can feed a model new knowledge, it needs to be able to find it.

Every piece of text — a policy document, a client note, a regulation — gets converted into a vector: a list of numbers representing its meaning.

- Similar meanings → similar vectors → stored close together in a vector database
- When a user asks a question, the question is also converted to a vector — and the database finds the most semantically relevant content

[right]
# Why it matters

***Not a keyword search. A meaning search.***

This is what makes it possible to ask "What is our policy on early loan repayment?" and retrieve the right paragraph — even if it never uses those exact words.

[sr]
section: Modul 5
kicker: Značenje
title: Embedinzi — kako AI razume značenje

[left]
# Od teksta do vektora

Pre nego što modelu damo novo znanje, on mora biti u stanju da ga pronađe.

Svaki deo teksta — dokument o politikama, beleška o klijentu, propis — pretvara se u vektor: niz brojeva koji predstavlja njegovo značenje.

- Slična značenja → slični vektori → smešteni blizu jedni drugih u vektorskoj bazi
- Kada korisnik postavi pitanje, i pitanje se pretvara u vektor — a baza pronalazi semantički najrelevantniji sadržaj

[right]
# Zašto je to važno

***Ne pretraga po ključnim rečima. Pretraga po značenju.***

To je ono što omogućava da pitate „Koja je naša politika o prevremenoj otplati kredita?“ i dobijete pravi pasus — čak i ako ne sadrži baš te reči.

## ---SLIDE---

id: tM4oV0kL5x
layout: two-col
section: Module 5
chapter: "05"
kicker: Retrieval
title: RAG — Giving the Model What It Needs, Just in Time
tone: section-b
animation: stagger
anim_stagger: 0.12

[left]
# How it works

**RAG** = Retrieval-Augmented Generation

- User asks a question
- System searches the vector database for relevant content
- That content is inserted into the context alongside the question
- The model answers — grounded in your documents, not just its training

[right]
# What you gain

✅ Answers based on current, internal knowledge
✅ Responses that can cite their source
✅ No retraining required — update the database, not the model

The model's brain stays frozen. You just hand it the right documents before it speaks.

[sr]
section: Modul 5
kicker: Pronalaženje
title: RAG — dajemo modelu ono što mu treba, tačno na vreme

[left]
# Kako radi

**RAG** = Retrieval-Augmented Generation (generisanje potpomognuto pronalaženjem)

- Korisnik postavlja pitanje
- Sistem pretražuje vektorsku bazu za relevantan sadržaj
- Taj sadržaj se ubacuje u kontekst zajedno sa pitanjem
- Model odgovara — oslonjen na vaše dokumente, a ne samo na svoj trening

[right]
# Šta dobijate

✅ Odgovore zasnovane na trenutnom, internom znanju
✅ Odgovore koji mogu da navedu izvor
✅ Nema potrebe za ponovnim treniranjem — ažurirate bazu, a ne model

Mozak modela ostaje zamrznut. Jednostavno mu uručite prave dokumente pre nego što progovori.

## ---SLIDE---

id: uN5pW1mM6y
layout: two-col
section: Module 5
chapter: "05"
kicker: Behaviour
title: Fine-Tuning — Changing How It Behaves
tone: section-b
animation: stagger
anim_stagger: 0.12

[left]
# Concept

RAG adds knowledge. Fine-tuning shapes behaviour.

Fine-tuning means continuing the training process on a curated, domain-specific dataset — adjusting the model's parameters for a specific purpose.

[right]
# Typical use cases

**Tone & style** — Always respond formally, in German
**Domain fluency** — Deeply familiar with credit risk terminology
**Task specialisation** — Trained specifically on loan assessment workflows
**Reducing hallucination** — Reinforced on verified, accurate domain content

**Important:** Fine-tuning is expensive, requires expertise, and needs to be redone when the model updates. It is not a substitute for RAG — most organisations use both.

[sr]
section: Modul 5
kicker: Ponašanje
title: Fino podešavanje — menjamo kako se ponaša

[left]
# Koncept

RAG dodaje znanje. Fino podešavanje oblikuje ponašanje.

Fino podešavanje znači nastavak procesa treniranja na pažljivo odabranom skupu podataka specifičnom za datu oblast — prilagođavanje parametara modela za određenu namenu.

[right]
# Tipični slučajevi upotrebe

**Ton i stil** — uvek odgovara formalno, na nemačkom
**Vladanje oblašću** — duboko poznaje terminologiju kreditnog rizika
**Specijalizacija zadatka** — istreniran specifično za procese procene kredita
**Smanjenje halucinacija** — ojačan verifikovanim, tačnim sadržajem iz oblasti

**Važno:** Fino podešavanje je skupo, zahteva ekspertizu i mora se ponoviti kada model bude ažuriran. Nije zamena za RAG — većina organizacija koristi oboje.

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


```bodyDataTable
{
  "columns": [
    "Method",
    "Adds",
    "Best for",
    "Requires retraining?"
  ],
  "rows": [
    [
      "**RAG**",
      "Current, specific knowledge",
      "Policies, documents, live data",
      "❌ No"
    ],
    [
      "**Fine-tuning**",
      "Behaviour, tone, domain fluency",
      "Style, specialisation, task focus",
      "✅ Yes"
    ],
    [
      "**System instructions**",
      "Rules & persona",
      "Guardrails, context setting",
      "❌ No"
    ]
  ]
}
```

A well-deployed AI in banking is not just a frozen model — it's a frozen model with the right documents in hand, the right instructions on the desk, and the right behaviour trained in.

[sr]
section: Modul 5
kicker: Rezime
title: Spajamo sve u celinu


```bodyDataTable
{
  "columns": [
    "Metoda",
    "Dodaje",
    "Najbolja za",
    "Zahteva ponovno treniranje?"
  ],
  "rows": [
    [
      "**RAG**",
      "Aktuelno, specifično znanje",
      "Politike, dokumenta, podaci u realnom vremenu",
      "❌ Ne"
    ],
    [
      "**Fino podešavanje**",
      "Ponašanje, ton, vladanje oblašću",
      "Stil, specijalizacija, fokus na zadatak",
      "✅ Da"
    ],
    [
      "**Sistemska uputstva**",
      "Pravila i ličnost",
      "Ograde ponašanja, postavka konteksta",
      "❌ Ne"
    ]
  ]
}
```

Dobro implementiran AI u bankarstvu nije samo zamrznuti model — to je zamrznuti model sa pravim dokumentima u ruci, pravim uputstvima na stolu i pravim ponašanjem koje je uvežbano.

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

[sr]
section: Modul 6
kicker: Modul 6

# Zašto AI laže?
## Halucinacije i analogija sa podeljenim mozgom

## ---SLIDE---

id: dR9mP2vH5n
layout: two-col
section: Module 6
chapter: "06"
kicker: "Split-brain research · Sperry & Gazzaniga"
title: "Split-Brain Research: The “Interpreter” Effect"
tone: section-b
animation: stagger
anim_stagger: 0.1

[left]
# Setup & key experiment

- **Setup (corpus callosotomy)** — The hemispheres are disconnected → no shared information between sides.
- **Roles** — **Right:** perception & action (no speech). **Left:** language, reasoning, explanation.
- **Key experiment** — A stimulus reaches only the right hemisphere (or the left hand): the patient acts correctly, but when asked *why*, the left hemisphere has no access to the true cause.

[right]
# Interpretation & bridge

- **The interpreter** — The left hemisphere rarely says “I don’t know.” It invents a coherent story (e.g. “to clean the chicken coop”) — Gazzaniga’s **interpreter**.
- **Human reasoning** — Often post-hoc storytelling: the brain favours coherence when information is missing; “rational” explanations can be narrative, not direct access to reality.
- **Bridge to AI** — We don’t always know why we act — but unlike LLMs we integrate across systems and can update over time.

[sr]
section: Modul 6
kicker: "Istraživanje podeljenog mozga · Sperry & Gazzaniga"
title: "Istraživanje podeljenog mozga: efekat „tumača“"

[left]
# Postavka i ključni eksperiment

- **Postavka (corpus callosotomy)** — Hemisfere su razdvojene → nema razmene informacija između strana.
- **Uloge** — **Desna:** percepcija i radnja (bez govora). **Leva:** jezik, rezonovanje, objašnjavanje.
- **Ključni eksperiment** — Stimulans dopire samo do desne hemisfere (ili leve ruke): pacijent postupa ispravno, ali kada se upita *zašto*, leva hemisfera nema pristup stvarnom razlogu.

[right]
# Tumačenje i most

- **Tumač** — Leva hemisfera retko kaže „ne znam“. Ona izmišlja koherentnu priču (npr. „da očistim kokošinjac“) — Gazzanigin **tumač**.
- **Ljudsko rezonovanje** — Često naknadno pričanje priča: mozak daje prednost koherentnosti kada nedostaju informacije; „racionalna“ objašnjenja mogu biti narativ, a ne neposredan pristup stvarnosti.
- **Most ka AI-ju** — Ne znamo uvek zašto delamo — ali za razliku od LLM-ova, mi integrišemo informacije kroz različite sisteme i možemo da se menjamo vremenom.

## ---SLIDE---

id: hL9mQ4nK2x
layout: two-col
section: Module 6
chapter: "06"
kicker: Hallucinations
title: Some more reasons to lie.
tone: section-b
animation: stagger
anim_stagger: 0.1

[left]
# Patterns & grounding

- **LLMs don’t know what they don’t know.** — Without retrieval or tools, answers come from internal patterns, not live verification — confident tone doesn’t mean correct facts.
- **Objective mismatch** — Training is next-token *prediction*, not truth. If something *sounds* right from statistical patterns, the model may output it even when it’s false.

[right]
# Prompts & behaviour

- **Pressure to be helpful** — Instruction tuning and RLHF reward complete answers and discourage “I don’t know” too often — that can tip the model toward fabrication instead of uncertainty.
- **Prompt ambiguity** — Vague or underspecified questions force the model to guess intent; plausible but wrong interpretations are a major hallucination driver.

[sr]
section: Modul 6
kicker: Halucinacije
title: Još nekoliko razloga za laganje.

[left]
# Obrasci i oslonac

- **LLM-ovi ne znaju šta ne znaju.** — Bez pronalaženja ili alata, odgovori dolaze iz internih obrazaca, a ne iz aktuelne provere — samouveren ton ne znači i tačne činjenice.
- **Neslaganje u cilju** — Trening je *predviđanje* sledećeg tokena, a ne istine. Ako nešto *zvuči* tačno na osnovu statističkih obrazaca, model to može izgovoriti čak i kada je netačno.

[right]
# Promptovi i ponašanje

- **Pritisak da bude koristan** — Fino podešavanje po instrukcijama i RLHF nagrađuju potpune odgovore i obeshrabruju preterano „ne znam“ — to može navesti model na izmišljanje umesto priznavanja nesigurnosti.
- **Nejasnoća prompta** — Nejasna ili nedovoljno precizirana pitanja teraju model da pogađa nameru; verovatna ali pogrešna tumačenja su glavni pokretač halucinacija.

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

[sr]
section: Modul 7
kicker: Modul 7

# Razgovarajte sa AI-jem kao profesionalac
## Prompt i kontekst inženjering, iterativno unapređenje


<!-- ═══ BATCH 4 of 5: Module 6–7 ═══ -->


## ---SLIDE---

id: m4tQ7nJ2x
layout: toc
section: Module 7
chapter: "07"
kicker: Techniques
title: Prompt Engineering (1/2)
tone: section-a
animation: stagger
anim_stagger: 0.06
tocSpacious: true

1. **Clear and specific instructions** — Precisely define the task to reduce ambiguity and improve output quality.
2. **Role prompting (persona assignment)** — Instruct the model to adopt a specific role to shape tone and expertise.
3. **Few-shot prompting** — Provide examples to guide the model toward the desired pattern or format.
4. **Zero-shot prompting** — Give only the instruction and rely on the model’s general knowledge to perform the task.
5. **Chain-of-thought prompting** — Encourage step-by-step reasoning for more accurate handling of complex problems.

[sr]
section: Modul 7
kicker: Tehnike
title: Prompt inženjering (1/2)

1. **Jasna i konkretna uputstva** — Precizno definišite zadatak kako biste smanjili nejasnoće i poboljšali kvalitet izlaza.
2. **Prompt kroz ulogu (dodeljivanje personaliteta)** — Dajte modelu određenu ulogu da biste oblikovali ton i ekspertizu.
3. **Prompt s par primera (few-shot)** — Dajte primere kako biste model usmerili ka željenom obrascu ili formatu.
4. **Prompt bez primera (zero-shot)** — Dajte samo uputstvo i oslonite se na opšte znanje modela da obavi zadatak.
5. **Prompt lancem razmišljanja (chain-of-thought)** — Podstičite rezonovanje korak po korak za tačnije rešavanje složenih problema.

## ---SLIDE---

id: zK4nW8pL2q
layout: toc
section: Module 7
chapter: "07"
kicker: Techniques
title: Prompt Engineering (2/2)
tone: section-a
animation: stagger
anim_stagger: 0.06
tocStart: 6
tocSpacious: true

6. **Instruction decomposition** — Break complex tasks into smaller, explicit steps within the prompt.
7. **Output format specification** — Explicitly define how the response should be structured (e.g., JSON, table).
8. **Self-consistency prompting** — Generate multiple reasoning paths and select the most consistent answer.
9. **Meta-prompting (prompt refinement loop)** — Ask the model to clarify your intent with questions and then generate an optimized version of your prompt.
10. **Critique and refine (self-reflection prompting)** — Instruct the model to review and improve its own output.

[sr]
section: Modul 7
kicker: Tehnike
title: Prompt inženjering (2/2)

6. **Razlaganje instrukcija** — Podelite složene zadatke na manje, eksplicitne korake unutar prompta.
7. **Specifikacija izlaznog formata** — Eksplicitno definišite kako odgovor treba da bude strukturiran (npr. JSON, tabela).
8. **Prompt samo-konzistentnosti** — Generišite više putanja rezonovanja i izaberite najkonzistentniji odgovor.
9. **Meta-prompting (petlja rafinisanja prompta)** — Tražite od modela da pitanjima razjasni vašu nameru, a zatim generiše optimizovanu verziju vašeg prompta.
10. **Kritika i poboljšanje (prompt samo-refleksije)** — Uputite model da pregleda i unapredi sopstveni izlaz.

## ---SLIDE---

id: n8xK2pQ5wR
layout: two-col
section: Module 7
chapter: "07"
kicker: Context
title: From Prompt Engineering → Context Engineering
tone: section-a
animation: stagger
anim_stagger: 0.1
twoColLowerLarge: true

**👉 Shift:** from “write a good prompt” → “design good operating environment”

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

[sr]
section: Modul 7
kicker: Kontekst
title: Od prompt inženjeringa → ka kontekst inženjeringu

**👉 Pomak:** od „napiši dobar prompt“ → ka „dizajniraj dobro radno okruženje“

[left]
# Prompt inženjering

**Prompt inženjering** = postavljanje boljih pitanja

Oblikovanje uputstava kojima se vodi model

Radi za jednokratne zadatke

[right]
# Kontekst inženjering

**Kontekst inženjering** = dizajniranje celokupnog ulaznog sistema

Kombinuje: uputstva + podatke + memoriju + alate

Čini izlaze pouzdanim, ponovljivim, pogodnim za automatizaciju

## ---SLIDE---

id: v3nL9mT4jH
layout: toc
section: Module 7
chapter: "07"
kicker: Context
title: What “Context” Actually Includes
tone: section-a
animation: stagger
anim_stagger: 0.06
tocLarge: true

1. **Instructions** — Task, role, constraints
2. **Business Data** — Customer data, transactions, documents
3. **Memory / State** — Previous steps, conversation, workflow status
4. **Tools & Actions** — APIs, databases, internal systems
5. **Guardrails** — Policies, compliance rules, validation
6. **👉 Output quality** = function of all context, not just the prompt

[sr]
section: Modul 7
kicker: Kontekst
title: Šta „kontekst“ zapravo obuhvata

1. **Uputstva** — Zadatak, uloga, ograničenja
2. **Poslovni podaci** — Podaci o klijentima, transakcije, dokumenta
3. **Memorija / stanje** — Prethodni koraci, razgovor, status radnog toka
4. **Alati i radnje** — API-jevi, baze podataka, interni sistemi
5. **Ograde** — Politike, pravila usklađenosti, validacija
6. **👉 Kvalitet izlaza** = funkcija celokupnog konteksta, a ne samo prompta

## ---SLIDE---

id: b6wR8kP2nY
layout: two-col
section: Module 7
chapter: "07"
kicker: Example
title: Banking Example (Before vs After)
tone: section-a
animation: stagger
anim_stagger: 0.1

[left]
# Prompt Engineering mindset

**“Summarize this loan application”**

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

[sr]
section: Modul 7
kicker: Primer
title: Bankarski primer (Pre i posle)

[left]
# Pristup prompt inženjeringa

**„Sažmi ovaj zahtev za kredit“**

→ Nekonzistentno, bez konteksta, ne može se revidirati

[right]
# Pristup kontekst inženjeringa

**Ubacite:** profil klijenta, politiku kredita, pragove rizika

**Pratite:** stanje radnog toka (fazu zahteva)

**Povežite:** API za skorovanje + ekstrakciju dokumenata

**Sprovedite:** pravila usklađenosti (npr. KYC, oznake rizika)

- **👉 Rezultat:** Konzistentne odluke
- Rezonovanje koje se može pratiti
- Spremno za automatizaciju u velikim razmerama

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

[sr]
section: Modul 8
kicker: Modul 8

# Agenti i alati — AI koji može da dela
## AI koji dela, a ne samo odgovara — alati, MCP, Skills, agenti

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
pointsGridClass: points--triple-equal

**So far:** a model that reads, reasons, and responds.
**Next:** a model that can **act**.

**Standard LLM Chat:** Input in -> text out. That's all that happens.

**An agent** starts from the same model, but is also given:

- **A goal** — Not just a question: something concrete to work toward.
- **Tools** — Capabilities it can **choose** to invoke when they help.
- **Multi-step chains** — Plan, execute, and revise — reasoning across several steps.

> ***The difference between a brilliant advisor who can only talk — and one who can also pick up the phone, pull the file, and send the email.***

[sr]
section: Modul 8
kicker: Agenti
title: Više od odgovaranja — AI koji dela

**Do sada:** model koji čita, rezonuje i odgovara.
**Sledeće:** model koji može da **dela**.

**Standardni LLM chat:** Ulaz unutra -> tekst napolju. To je sve što se dešava.

**Agent** kreće od istog modela, ali dobija i:

- **Cilj** — Ne samo pitanje: nešto konkretno ka čemu treba raditi.
- **Alate** — Mogućnosti koje može **da izabere** i pozove kada mu pomažu.
- **Višeslojne lance** — Planiraj, izvrši i revidiraj — rezonovanje kroz više koraka.

> ***Razlika između briljantnog savetnika koji samo može da priča — i onog koji može i da podigne slušalicu, izvuče dosije i pošalje mejl.***

## ---SLIDE---

id: m8b2L4mP9y
layout: two-col
section: Module 8
chapter: "08"
kicker: Definitions
title: "What Are Tools?"
tone: section-b
animation: stagger
anim_stagger: 0.12
twoColRatio: 1-2

[left]

Tools are functions the model can choose to call.

The model doesn't execute them itself — it decides when and why to use them, and receives the result back into its context.

[right]

```bodyComparison
{
  "leftHeading": "Tool type",
  "rightHeading": "Example in banking",
  "rows": [
    {
      "left": "**Search / RAG**",
      "right": "Retrieve relevant policy or client documents"
    },
    {
      "left": "**Database query**",
      "right": "Look up a client's transaction history"
    },
    {
      "left": "**API call**",
      "right": "Check current exchange rates or market data"
    },
    {
      "left": "**Calculator / code**",
      "right": "Run a precise financial calculation"
    },
    {
      "left": "**Write / send**",
      "right": "Draft an email, fill a form, log a case note"
    },
    {
      "left": "**Trigger workflow**",
      "right": "Initiate a compliance check or approval process"
    }
  ]
}
```

***Tools turn language into action.***

[sr]
section: Modul 8
kicker: Definicije
title: "Šta su alati?"

[left]

Alati su funkcije koje model može da izabere da pozove.

Model ih ne izvršava sam — on odlučuje kada i zašto da ih koristi, a rezultat dobija nazad u svoj kontekst.

[right]

```bodyComparison
{
  "leftHeading": "Tip alata",
  "rightHeading": "Primer u bankarstvu",
  "rows": [
    {
      "left": "**Pretraga / RAG**",
      "right": "Pronalazi relevantne politike ili dokumente o klijentima"
    },
    {
      "left": "**Upit u bazu podataka**",
      "right": "Pregleda istoriju transakcija klijenta"
    },
    {
      "left": "**API poziv**",
      "right": "Proverava aktuelne kurseve ili tržišne podatke"
    },
    {
      "left": "**Kalkulator / kod**",
      "right": "Sprovodi preciznu finansijsku kalkulaciju"
    },
    {
      "left": "**Pisanje / slanje**",
      "right": "Sastavlja mejl, popunjava formu, evidentira belešku o slučaju"
    },
    {
      "left": "**Pokretanje radnog toka**",
      "right": "Pokreće proveru usklađenosti ili proces odobravanja"
    }
  ]
}
```

***Alati pretvaraju jezik u radnju.***

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

[sr]
section: Modul 8
kicker: Orkestracija
title: Kako agent razmišlja

Jednostavan primer: „Sažmi kreditni rizik za klijenta X pre sutrašnjeg sastanka“
Agent ne samo da odgovara — on radi:

🔍 Pronalazi dosije klijenta iz baze dokumenata (RAG)
📊 Pretražuje bazu za skorašnje obrasce transakcija
🧮 Pokreće kalkulaciju skora rizika
🌐 Proverava aktuelne tržišne uslove putem API-ja
🧠 Rezonuje na osnovu svih pronađenih informacija
✍️ Priprema strukturiran brifing — spreman za sastanak

Svaki korak informiše naredni. Model odlučuje o redosledu.

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

More capability = more responsibility. Agents operating in banking contexts must be carefully constrained:

```bodyComparison
{
  "leftHeading": "Control",
  "rightHeading": "What it means",
  "rows": [
    {
      "left": "**Human-in-the-loop**",
      "right": "Certain actions require approval before execution."
    },
    {
      "left": "**Tool boundaries**",
      "right": "The agent can only access what it is explicitly permitted to."
    },
    {
      "left": "**Audit trails**",
      "right": "Every tool call and decision step should be logged."
    },
    {
      "left": "**Failure handling**",
      "right": "What happens when a tool returns unexpected results?"
    }
  ]
}
```

An agent with access to client data, communication channels, and workflow systems is not a chatbot. It requires governance like any other operational system.

The question is never just "can it do this?" — but "should it do this autonomously?"

[sr]
section: Modul 8
kicker: Upravljanje
title: Ograde — zašto je kontrola važna

Više mogućnosti = više odgovornosti. Agenti koji rade u bankarskom kontekstu moraju biti pažljivo ograničeni:

```bodyComparison
{
  "leftHeading": "Kontrola",
  "rightHeading": "Šta to znači",
  "rows": [
    {
      "left": "**Čovek u petlji**",
      "right": "Određene radnje zahtevaju odobrenje pre izvršenja."
    },
    {
      "left": "**Granice alata**",
      "right": "Agent može da pristupi samo onome što mu je eksplicitno dozvoljeno."
    },
    {
      "left": "**Revizioni tragovi**",
      "right": "Svaki poziv alata i korak u odluci treba da budu zabeleženi."
    },
    {
      "left": "**Rukovanje greškama**",
      "right": "Šta se dešava kada alat vrati neočekivane rezultate?"
    }
  ]
}
```

Agent sa pristupom podacima klijenata, komunikacionim kanalima i sistemima radnih tokova nije chatbot. Zahteva upravljanje kao i svaki drugi operativni sistem.

Pitanje nikada nije samo „da li ovo može da uradi?“ — već „da li treba ovo da radi samostalno?“

## ---SLIDE---

id: m8b5O7qS3w
layout: single
section: Module 8
chapter: "08"
kicker: Arc
title: To summarize Agents
tone: section-b
animation: stagger
anim_stagger: 0.12
bodyInnerClass: slide-content__inner--body-diagram-stack

How everything connects:

```flowTimeline
{
  "rows": [
    [
      {
        "kind": "text",
        "label": "User request"
      },
      {
        "kind": "agent",
        "label": "[ Agent / Orchestrator ]"
      },
      {
        "kind": "text",
        "label": "Reasons about the goal"
      }
    ],
    [
      {
        "kind": "tools",
        "title": "Tools available",
        "items": [
          "RAG (your documents)",
          "Database queries",
          "APIs & live data",
          "Calculations & code",
          "Workflow triggers"
        ]
      },
      {
        "kind": "text",
        "label": "Synthesises results"
      },
      {
        "kind": "text",
        "label": "Response or Action"
      },
      {
        "kind": "review",
        "label": "Human review — where required"
      }
    ]
  ]
}
```

The frozen chef, handed the right recipes, the right ingredients, and a fully equipped kitchen — with a supervisor in the room for the dishes that matter.

[sr]
section: Modul 8
kicker: Luk
title: Rezime o agentima

Kako se sve povezuje:

```flowTimeline
{
  "rows": [
    [
      {
        "kind": "text",
        "label": "Zahtev korisnika"
      },
      {
        "kind": "agent",
        "label": "[ Agent / orkestrator ]"
      },
      {
        "kind": "text",
        "label": "Rezonuje o cilju"
      }
    ],
    [
      {
        "kind": "tools",
        "title": "Dostupni alati",
        "items": [
          "RAG (vaši dokumenti)",
          "Upiti u bazu podataka",
          "API-jevi i podaci u realnom vremenu",
          "Kalkulacije i kod",
          "Pokretači radnih tokova"
        ]
      },
      {
        "kind": "text",
        "label": "Sintetiše rezultate"
      },
      {
        "kind": "text",
        "label": "Odgovor ili radnja"
      },
      {
        "kind": "review",
        "label": "Ljudska provera — tamo gde je potrebna"
      }
    ]
  ]
}
```

Zaleđeni kuvar, kome su predati pravi recepti, pravi sastojci i potpuno opremljena kuhinja — uz nadzornika u prostoriji za jela koja su važna.


<!-- ═══ BATCH 5 of 5: Module 8 (tools, MCP, skills, timeline) ═══ -->


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

[sr]
section: Modul 8
kicker: MCP
title: Problem pre MCP-a

**MCP — dajemo agentima standardni jezik**

Svaka konekcija ka alatu bila je ručno napravljena.
Kako su agenti postajali sposobniji, timovi su hteli da ih povežu sa više sistema:

CRM platforme
Interne baze podataka
Skladišta dokumenata
Kalendari, mejlovi, alati za komunikaciju
Sistemi osnovnog bankarstva

Problem: svaka integracija bila je posebno izrađena. Drugačija sintaksa, drugačija autentifikacija, drugačije rukovanje greškama — za svaki model, za svaki alat, za svakog dobavljača.

Zamislite da svaki uređaj u kuhinji mora imati svoju jedinstvenu, nekompatibilnu utičnicu.

## ---SLIDE---

id: mcp2Y3lP8x
layout: single
section: Module 8
chapter: "08"
kicker: MCP
title: "What is MCP?"
tone: section-b
animation: stagger
anim_stagger: 0.12

An open standard, introduced by Anthropic in 2024, that defines a single, universal way for AI models to connect to external tools and data sources.

```bodyComparison
{
  "leftHeading": "Without MCP",
  "rightHeading": "With MCP",
  "rows": [
    {
      "left": "Custom integration per tool",
      "right": "One standard connection method"
    },
    {
      "left": "Rebuild for every model update",
      "right": "Tool works with any MCP-compatible model"
    },
    {
      "left": "Fragile, expensive to maintain",
      "right": "Plug in, and it works"
    },
    {
      "left": "Siloed by vendor",
      "right": "Interoperable across platforms"
    }
  ]
}
```

***Build the tool once. Any compatible agent can use it.***

[sr]
section: Modul 8
kicker: MCP
title: "Šta je MCP?"

Otvoreni standard, koji je Anthropic predstavio 2024. godine, a koji definiše jedinstven, univerzalan način na koji AI modeli komuniciraju sa eksternim alatima i izvorima podataka.

```bodyComparison
{
  "leftHeading": "Bez MCP-a",
  "rightHeading": "Sa MCP-om",
  "rows": [
    {
      "left": "Posebna integracija za svaki alat",
      "right": "Jedan standardan način povezivanja"
    },
    {
      "left": "Ponovna izrada za svako ažuriranje modela",
      "right": "Alat radi sa bilo kojim MCP-kompatibilnim modelom"
    },
    {
      "left": "Krhko, skupo za održavanje",
      "right": "Priključite i radi"
    },
    {
      "left": "Izolovano po dobavljaču",
      "right": "Interoperabilno kroz platforme"
    }
  ]
}
```

***Napravite alat jednom. Bilo koji kompatibilan agent može ga koristiti.***

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
bodySurface: mcp-connect

MCP is the connective layer between the agent and the outside world:

```mcpStack
{
  "agentLabel": "Agent / Orchestrator",
  "layerLabel": "MCP Interface",
  "serversTitle": "MCP Servers (tools/systems)",
  "servers": [
    "Internal document store",
    "Core banking API",
    "CRM / client data",
    "Compliance & risk systems",
    "Email & calendar",
    "Market data feeds"
  ]
}
```

Each system exposes itself as an MCP server. The agent speaks to all of them through the same standard interface — it doesn't need to know the specifics of each system underneath.

[sr]
section: Modul 8
kicker: MCP
title: Gde se MCP nalazi u arhitekturi

MCP je povezni sloj između agenta i spoljnog sveta:

```mcpStack
{
  "agentLabel": "Agent / orkestrator",
  "layerLabel": "MCP interfejs",
  "serversTitle": "MCP serveri (alati/sistemi)",
  "servers": [
    "Interno skladište dokumenata",
    "API osnovnog bankarstva",
    "CRM / podaci o klijentima",
    "Sistemi usklađenosti i rizika",
    "Mejl i kalendar",
    "Tokovi tržišnih podataka"
  ]
}
```

Svaki sistem se izlaže kao MCP server. Agent sa svima njima komunicira kroz isti standardni interfejs — ne mora da poznaje specifičnosti svakog sistema u pozadini.

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

[sr]
section: Modul 8
kicker: MCP
title: Zašto je to važno za bankarstvo

MCP pretvara integraciju AI-ja iz posebno izrađenog inženjerskog projekta u odluku o infrastrukturi.

✅ Brže uvođenje — povežite nove sisteme bez prepravki logike agenta
✅ Fleksibilnost prema dobavljačima — zamenite osnovni model bez prevezivanja svih alata
✅ Mogućnost revizije — standardizovani sloj je lakše pratiti i kontrolisati
✅ Zamah ekosistema — MCP se brzo usvaja kroz platforme, alate i dobavljače

Na isti način na koji su REST API-ji standardizovali komunikaciju veb servisa — MCP standardizuje kako AI agenti komuniciraju sa svetom.

Za rukovodstvo banke, strateška posledica je jasna: institucije koje sada grade svoje integracije na otvorenim standardima neće kasnije biti zaključane u ekosistem jednog dobavljača.

## ---SLIDE---

id: m8skA1b2c3
layout: single
section: Module 8
chapter: "08"
kicker: Skills
title: Skills — Packaged, reusable procedures
tone: section-b
animation: stagger
anim_stagger: 0.12

**Agent Skills** are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows.

    In every serious bank, there are standardized procedures — for example, a procedure for loan approval. These procedures are written, tested, and aligned with regulations.

When a new associate arrives, they don't reinvent the procedure — they apply the existing one. A Skill is exactly that, but for a ***packaged procedure***, ***tailored to a specific task***, which the AI can "take off the shelf" and apply.

[sr]
section: Modul 8
kicker: Veštine
title: Veštine — upakovane, ponovo upotrebljive procedure

**Veštine agenata** su lagani, otvoreni format za proširenje mogućnosti AI agenta specijalizovanim znanjem i radnim tokovima.

    U svakoj ozbiljnoj banci postoje standardizovane procedure — na primer, procedura za odobravanje kredita. Te procedure su napisane, testirane i usklađene sa propisima.

Kada novi saradnik dođe, ne izmišlja proceduru iznova — primenjuje postojeću. Veština je upravo to, ali u obliku ***upakovane procedure***, ***prilagođene određenom zadatku***, koju AI može da „uzme s police“ i primeni.

## ---SLIDE---

id: m8skD4e5f6
layout: single
section: Module 8
chapter: "08"
kicker: Skills
title: Inside a Skill file (1/4)
tone: section-b
animation: stagger
anim_stagger: 0.12
pointsCardModifier: points--skill-file-split

A Skill file is essentially a Markdown document — like a detailed work manual you give to an AI agent before it starts its task. The agent "reads" it, and from that moment on, knows exactly how to proceed.

Here is what a summary of a Credit Assessment Skill looks like — each section, one slide at a time:


- **Overview**
  The AI agent reads this first. It clearly states the purpose and, just as importantly, ++what is NOT its purpose++ (e.g., it does not make the final decision).

[sr]
section: Modul 8
kicker: Veštine
title: Unutar fajla veštine (1/4)

Fajl veštine je u suštini Markdown dokument — poput detaljnog radnog priručnika koji dajete AI agentu pre nego što počne svoj zadatak. Agent ga „čita“ i od tog trenutka tačno zna kako da postupa.

Evo kako izgleda sažetak veštine procene kredita — svaki odeljak, po jedan slajd:


- **Pregled**
  AI agent ovo prvo čita. Jasno navodi svrhu i, što je jednako važno, ++šta NIJE njegova svrha++ (npr. ne donosi konačnu odluku).

## ---SLIDE---

id: m8skD4e5g1
layout: single
section: Module 8
chapter: "08"
kicker: Skills
title: Inside a Skill file (2/4)
tone: section-b
animation: stagger
anim_stagger: 0.12
pointsCardModifier: points--skill-file-split points--skill-file-split--pair



- **When to Use**
  The agent must know ++when to invoke this specific skill versus another++. Without this, it might try to process mortgage loans using the same rules as consumer loans.

- **Required Tools**
  A list of all ++MCP++ connections that the agent is allowed to use within this skill. The agent ++cannot call a tool that isn't on this list++.

[sr]
section: Modul 8
kicker: Veštine
title: Unutar fajla veštine (2/4)



- **Kada se koristi**
  Agent mora da zna ++kada da pokrene baš ovu veštinu, a kada neku drugu++. Bez toga, mogao bi da pokuša da obrađuje hipotekarne kredite po istim pravilima kao potrošačke.

- **Potrebni alati**
  Spisak svih ++MCP++ veza koje agentu smeju da se koriste u okviru ove veštine. Agent ++ne može da pozove alat koji nije na tom spisku++.

## ---SLIDE---

id: m8skD4e5g2
layout: single
section: Module 8
chapter: "08"
kicker: Skills
title: Inside a Skill file (3/4)
tone: section-b
animation: stagger
anim_stagger: 0.12
pointsCardModifier: points--skill-file-split points--skill-file-split--pair



- **Step-by-Step Procedure**
  The core of the file. Every step has clear ++IF/THEN rules++ — the agent does not improvise; it applies policy literally. You'll notice ++"STOP"++ written in several places — these are ++hard stops++ that the agent is not allowed to bypass.

- **What the Agent Must NOT Do**
  Negative rules are just as important as positive ones. This is the section where you define ++the boundaries of autonomy++.

[sr]
section: Modul 8
kicker: Veštine
title: Unutar fajla veštine (3/4)



- **Procedura korak po korak**
  Srž fajla. Svaki korak ima jasna ++AKO/ONDA pravila++ — agent ne improvizuje; doslovno primenjuje politiku. Na nekoliko mesta ćete primetiti ++„STOP“++ — to su ++čvrste prepreke++ koje agent ne sme da zaobiđe.

- **Šta agent NE sme da radi**
  Negativna pravila su jednako važna kao i pozitivna. Ovo je odeljak u kojem se definišu ++granice autonomije++.

## ---SLIDE---

id: m8skD4e5g3
layout: single
section: Module 8
chapter: "08"
kicker: Skills
title: Inside a Skill file (4/4)
tone: section-b
animation: stagger
anim_stagger: 0.12
pointsCardModifier: points--skill-file-split points--skill-file-split--pair



- **Audit and Compliance**
  Every skill in a regulated industry must have this. ++Every call, every result, every decision++ — everything is logged.

- **Skill Metadata**
  Version, owner, revision date. This is crucial because skills change when regulations or internal policies change — you need to know ++which version was active++ at the time of a specific decision.

[sr]
section: Modul 8
kicker: Veštine
title: Unutar fajla veštine (4/4)



- **Revizija i usklađenost**
  Svaka veština u regulisanoj industriji mora ovo da ima. ++Svaki poziv, svaki rezultat, svaka odluka++ — sve se beleži.

- **Metapodaci veštine**
  Verzija, vlasnik, datum izmene. Ovo je ključno jer se veštine menjaju kada se menjaju propisi ili interne politike — morate znati ++koja je verzija bila aktivna++ u trenutku donošenja određene odluke.

## ---SLIDE---

id: m8tWF4nP2x
layout: timeline
section: Module 8
chapter: "08"
kicker: Example
title: "Agentic Workflow — Tools, MCP & Skills"
tone: section-b
animation: stagger
anim_stagger: 0.07
hideSectionChip: true

```timelineSteps
[
  {
    "emoji": "📥",
    "label": {
      "en": "**Agent Receives the Request**",
      "sr": "**Agent prima zahtev**"
    },
    "body": {
      "en": "An email arrives. The agent reads it: “Client requesting a limit increase.” It immediately knows the next step.",
      "sr": "Email stigne. Agent ga pročita: „Klijent traži povećanje limita.“ Odmah zna šta sledi."
    }
  },
  {
    "emoji": "🔗",
    "label": {
      "en": "**Agent Utilizes Tools**",
      "sr": "**Agent koristi alatke**"
    },
    "body": {
      "en": "Via MCP, the agent simultaneously queries: core banking (balance, payment history), credit bureau (external score), and CRM (client profile). Done in seconds.",
      "sr": "Preko MCP-a agent istovremeno povlači: core banking (stanje, istorija plaćanja), kreditni biro (eksterni skor) i CRM (profil klijenta). Gotovo za nekoliko sekundi."
    }
  },
  {
    "emoji": "🧠",
    "label": {
      "en": "**Agent Applies Skills**",
      "sr": "**Agent primenjuje veštine**"
    },
    "body": {
      "en": "The “Credit Assessment Skill” activates — your internal credit policy. Every criterion is evaluated: standing, limits, eligibility.",
      "sr": "Aktivira se „Credit Assessment Skill“ — vaša interna kreditna politika. Svaki kriterijum se procenjuje: odnos, limiti, podobnost."
    }
  },
  {
    "emoji": "👤",
    "label": {
      "en": "**Agent Makes a Recommendation**",
      "sr": "**Agent daje preporuku**"
    },
    "body": {
      "en": "If approval is needed, a summary goes to the credit officer — all relevant data, a clear recommendation, and full rationale. Officer accepts or declines.",
      "sr": "Ako je potrebno odobrenje, sažetak ide kreditnom službeniku — svi relevantni podaci, jasna preporuka i potpuno obrazloženje. Službenik prihvata ili odbija."
    },
    "badge": {
      "en": "HUMAN IN THE LOOP",
      "sr": "ČOVEK U PETLJI"
    },
    "highlight": true
  },
  {
    "emoji": "✅",
    "label": {
      "en": "**The Result**",
      "sr": "**Rezultat**"
    },
    "body": {
      "en": "Client receives a response in 2–4 minutes. Everything logged. Full audit trail. Nothing falls through the cracks.",
      "sr": "Klijent dobija odgovor za 2–4 minuta. Sve je evidentirano. Kompletan revizijski trag. Ništa ne propada iz vida."
    }
  }
]
```

[sr]
section: Modul 8
kicker: Primer
title: "Agentski radni tok — alati, MCP i veštine"

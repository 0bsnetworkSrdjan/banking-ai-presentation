# Module 8 — Agents & Tools (chapter 08)

Source: `sites/unicredit-rs/src/slides.js` (all slides with `section: 'Module 8'`).

---

## Contents

1. [Title — Agents & Tools](#1-title--agents--tools)
2. [Beyond Answering — AI That Does](#2-beyond-answering--ai-that-does)
3. [What Are Tools?](#3-what-are-tools)
4. [The Problem Before MCP](#4-the-problem-before-mcp)
5. [What MCP Is](#5-what-mcp-is)
6. [Where MCP Sits in the Architecture](#6-where-mcp-sits-in-the-architecture)
7. [Why It Matters for Banking](#7-why-it-matters-for-banking)
8. [Skills — Packaged, reusable procedures](#8-skills--packaged-reusable-procedures)
9. [Inside a Skill file](#9-inside-a-skill-file)
10. [Guardrails — Why Control Matters](#10-guardrails--why-control-matters)
11. [How an Agent Thinks](#11-how-an-agent-thinks)
12. [The Full Picture](#12-the-full-picture)
13. [Agentic Workflow — Tools, MCP & Skills](#13-agentic-workflow--tools-mcp--skills)

---

## 1. Title — Agents & Tools

| Field    | Value |
| -------- | ----- |
| **id**   | `m8pQ2wR9k` |
| **layout** | `title` |
| **kicker** | Module 8 |

**Title:** Agents & Tools — AI That Can Act

**Subtitle:** AI That Acts, Not Just Answers — Tools, MCP, Skills, Agents

---

## 2. Beyond Answering — AI That Does

| Field    | Value |
| -------- | ----- |
| **id**   | `m8b1K3nL8x` |
| **layout** | `two-col` |
| **kicker** | Agents |

**Intro**

***Evolution:*** **so far** — a model that reads, reasons, and responds.  
**Next** — one that can act.

### LLM alone

**Input → text.** One turn at a time. No tools, no side effects.

Like a brilliant advisor who can only talk — not pull the file or send the update.

### LLM + agent

Same model — set up to **pursue a goal**, not just finish an answer.

- **Goal** — not only a single question
- **Tools** — APIs, data, documents; the model chooses when to call them
- **Multi-step** — plan, act, read results, keep reasoning
- **👉 Contrast:** can pick up the phone, pull the file, and send the email — not only describe how.

---

## 3. What Are Tools?

| Field    | Value |
| -------- | ----- |
| **id**   | `m8b2L4mP9y` |
| **layout** | `single` |
| **kicker** | Definitions |

**Title:** What Are Tools?

Tools are functions the model can choose to call.  
The model doesn't execute them itself — it decides when and why to use them, and receives the result back into its context.

| **Tool type** | **Example in banking** |
| ------------- | ---------------------- |
| **Search / RAG** | Retrieve relevant policy or client documents |
| **Database query** | Look up a client's transaction history |
| **API call** | Check current exchange rates or market data |
| **Calculator / code** | Run a precise financial calculation |
| **Write / send** | Draft an email, fill a form, log a case note |
| **Trigger workflow** | Initiate a compliance check or approval process |

***Tools turn language into action.***

---

## 4. The Problem Before MCP

| Field    | Value |
| -------- | ----- |
| **id**   | `mcp1X2kN9w` |
| **layout** | `single` |
| **kicker** | MCP |

**Title:** The Problem Before MCP

**MCP — Giving Agents a Standard Language**

Every tool connection was built by hand.  
As agents became more capable, teams wanted to connect them to more systems:

- CRM platforms
- Internal databases
- Document stores
- Calendar, email, communication tools
- Core banking systems

***The problem: every integration was custom-built. Different syntax, different authentication, different error handling — for every model, for every tool, for every vendor.***

---

## 5. What MCP Is

| Field    | Value |
| -------- | ----- |
| **id**   | `mcp2Y3lP8x` |
| **layout** | `single` |
| **kicker** | MCP |

**Title:** What MCP Is

**MCP = Model Context Protocol**  
An open standard, introduced by Anthropic in 2024, that defines a single, universal way for AI models to connect to external tools and data sources.

Think of it as USB for AI agents:

| **Without MCP** | **With MCP** |
| --------------- | ------------ |
| Custom integration per tool | One standard connection method |
| Rebuild for every model update | Tool works with any MCP-compatible model |
| Fragile, expensive to maintain | Plug in, and it works |
| Siloed by vendor | Interoperable across platforms |

***Build the tool once. Any compatible agent can use it.***

---

## 6. Where MCP Sits in the Architecture

| Field    | Value |
| -------- | ----- |
| **id**   | `mcp3Z4mQ7y` |
| **layout** | `single` (diagram: `mcp-stack`, surface: `mcp-connect`) |
| **kicker** | MCP |

**Title:** Where MCP Sits in the Architecture

MCP is the connective layer between the agent and the outside world:

```
[ Agent / Orchestrator ]
           ↓
    [ MCP Interface ]
           ↓
┌──────────────────────────────────────┐
│  MCP Servers (tools/systems)         │
│  • Internal document store           │
│  • Core banking API                  │
│  • CRM / client data                 │
│  • Compliance & risk systems         │
│  • Email & calendar                  │
│  • Market data feeds                 │
└──────────────────────────────────────┘
```

Each system exposes itself as an MCP server. The agent speaks to all of them through the same standard interface — it doesn't need to know the specifics of each system underneath.

---

## 7. Why It Matters for Banking

| Field    | Value |
| -------- | ----- |
| **id**   | `mcp4A5nR6z` |
| **layout** | `single` |
| **kicker** | MCP |

**Title:** Why It Matters for Banking

MCP turns AI integration from a bespoke engineering project into an infrastructure decision.

- ✅ **Faster deployment** — connect new systems without rebuilding agent logic
- ✅ **Vendor flexibility** — swap the underlying model without rewiring all your tools
- ✅ **Auditability** — a standardised layer is easier to monitor and govern
- ✅ **Ecosystem momentum** — MCP is being adopted rapidly across platforms, tools, and vendors

In the same way that REST APIs standardised how web services talk to each other — MCP is standardising how AI agents talk to the world.

***For bank leadership, the strategic implication is clear: institutions that build their integrations on open standards now will not be locked into a single vendor's ecosystem later.***

---

## 8. Skills — Packaged, reusable procedures

| Field    | Value |
| -------- | ----- |
| **id**   | `m8skA1b2c3` |
| **layout** | `single` |
| **kicker** | Skills |

**Title:** Skills — Packaged, reusable procedures

**Agent Skills** are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows.

In every serious bank, there are standardized procedures — for example, a procedure for loan approval. These procedures are written, tested, and aligned with regulations.

When a new associate arrives, they don't reinvent the procedure — they apply the existing one. A Skill is exactly that, but for a ***packaged procedure***, ***tailored to a specific task***, which the AI can "take off the shelf" and apply.

---

## 9. Inside a Skill file

| Field    | Value |
| -------- | ----- |
| **id**   | `m8skD4e5f6` |
| **layout** | `single` |
| **kicker** | Skills |

**Title:** Inside a Skill file

A Skill file is essentially a Markdown document — like a detailed work manual you give to an AI agent before it starts its task. The agent "reads" it, and from that moment on, knows exactly how to proceed.

Here is what a summary of a Credit Assessment Skill looks like:

| Section | Summary |
| ------- | ------- |
| **Overview** | The AI agent reads this first. It clearly states the purpose and, just as importantly, ++what is NOT its purpose++ (e.g., it does not make the final decision). |
| **When to Use** | The agent must know ++when to invoke this specific skill versus another++. Without this, it might try to process mortgage loans using the same rules as consumer loans. |
| **Required Tools** | A list of all ++MCP++ connections that the agent is allowed to use within this skill. The agent ++cannot call a tool that isn't on this list++. |
| **Step-by-Step Procedure** | The core of the file. Every step has clear ++IF/THEN rules++ — the agent does not improvise; it applies policy literally. You'll notice ++"STOP"++ written in several places — these are ++hard stops++ that the agent is not allowed to bypass. |
| **What the Agent Must NOT Do** | Negative rules are just as important as positive ones. This is the section where you define ++the boundaries of autonomy++. |
| **Audit and Compliance** | Every skill in a regulated industry must have this. ++Every call, every result, every decision++ — everything is logged. |
| **Skill Metadata** | Version, owner, revision date. This is crucial because skills change when regulations or internal policies change — you need to know ++which version was active++ at the time of a specific decision. |

---

## 10. Guardrails — Why Control Matters

| Field    | Value |
| -------- | ----- |
| **id**   | `m8b4N6pR2v` |
| **layout** | `single` |
| **kicker** | Governance |

**Title:** Guardrails — Why Control Matters

**More capability = more responsibility.**  
Agents operating in banking contexts must be carefully constrained:

- Human-in-the-loop — certain actions require approval before execution
- ***Tool boundaries*** — the agent can only access what it is explicitly permitted to
- ***Audit trails*** — every tool call and decision step should be logged
- ***Failure handling*** — what happens when a tool returns unexpected results?

An agent with access to client data, communication channels, and workflow systems is not a chatbot. It requires governance like any other operational system.

***The question is never just "can it do this?" — but "should it do this autonomously?"***

---

## 11. How an Agent Thinks

| Field    | Value |
| -------- | ----- |
| **id**   | `m8b3M5nQ1z` |
| **layout** | `single` |
| **kicker** | Orchestration |

**Title:** How an Agent Thinks

A simple example: "Summarise the credit risk for client X before tomorrow's meeting"  
The agent doesn't just answer — it works:

- 🔍 Retrieves the client's file from the document store (RAG)
- 📊 Queries the database for recent transaction patterns
- 🧮 Runs a risk scoring calculation
- 🌐 Checks current market conditions via API
- 🧠 Reasons across all retrieved information
- ✍️ Produces a structured briefing — ready for the meeting

***Each step informs the next. The model decides the sequence.***

---

## 12. The Full Picture

| Field    | Value |
| -------- | ----- |
| **id**   | `m8b5O7qS3w` |
| **layout** | `single` (diagram: `flow-timeline`) |
| **kicker** | Arc |

**Title:** The Full Picture

**How everything connects:**

1. User request  
2. **[ Agent / Orchestrator ]**  
3. Reasons about the goal  
4. **Tools available:** RAG (your documents), Database queries, APIs & live data, Calculations & code, Workflow triggers  
5. Synthesises results  
6. Response or Action  
7. **[ Human review — where required ]**

Closing line:

> The frozen chef, handed the right recipes, the right ingredients, and a fully equipped kitchen — with a supervisor in the room for the dishes that matter.

---

## 13. Agentic Workflow — Tools, MCP & Skills

| Field    | Value |
| -------- | ----- |
| **id**   | `m8tWF4nP2x` |
| **layout** | `timeline` |
| **kicker** | Example |
| **title** | Agentic Workflow — Tools, MCP & Skills |

### Step 1 — 📥 Agent Receives the Request

| Field | English | Serbian (Latin) |
| ----- | ------- | ----------------- |
| **Label** | **Agent Receives the Request** | **Agent prima zahtev** |
| **Body** | An email arrives. The agent reads it: “Client requesting a limit increase.” It immediately knows the next step. | Email stigne. Agent ga pročita: „Klijent traži povećanje limita.“ Odmah zna šta sledi. |

### Step 2 — 🔗 Agent Utilizes Tools

| Field | English | Serbian (Latin) |
| ----- | ------- | ----------------- |
| **Label** | **Agent Utilizes Tools** | **Agent koristi alatke** |
| **Body** | Via MCP, the agent simultaneously queries: core banking (balance, payment history), credit bureau (external score), and CRM (client profile). Done in seconds. | Preko MCP-a agent istovremeno povlači: core banking (stanje, istorija plaćanja), kreditni biro (eksterni skor) i CRM (profil klijenta). Gotovo za nekoliko sekundi. |

### Step 3 — 🧠 Agent Applies Skills

| Field | English | Serbian (Latin) |
| ----- | ------- | ----------------- |
| **Label** | **Agent Applies Skills** | **Agent primenjuje veštine** |
| **Body** | The “Credit Assessment Skill” activates — your internal credit policy. Every criterion is evaluated: standing, limits, eligibility. | Aktivira se „Credit Assessment Skill“ — vaša interna kreditna politika. Svaki kriterijum se procenjuje: odnos, limiti, podobnost. |

### Step 4 — 👤 Agent Makes a Recommendation (highlight)

| Field | English | Serbian (Latin) |
| ----- | ------- | ----------------- |
| **Label** | **Agent Makes a Recommendation** | **Agent daje preporuku** |
| **Body** | If approval is needed, a summary goes to the credit officer — all relevant data, a clear recommendation, and full rationale. Officer accepts or declines. | Ako je potrebno odobrenje, sažetak ide kreditnom službeniku — svi relevantni podaci, jasna preporuka i potpuno obrazloženje. Službenik prihvata ili odbija. |
| **Badge** | HUMAN IN THE LOOP | ČOVEK U PETLJI |

### Step 5 — ✅ The Result

| Field | English | Serbian (Latin) |
| ----- | ------- | ----------------- |
| **Label** | **The Result** | **Rezultat** |
| **Body** | Client receives a response in 2–4 minutes. Everything logged. Full audit trail. Nothing falls through the cracks. | Klijent dobija odgovor za 2–4 minuta. Sve je evidentirano. Kompletan revizijski trag. Ništa ne propada iz vida. |

// ─── Language configuration ────────────────────────────────────────────────
// Defined in the ---META--- block of src/content/slides.md.
// Each { code, label } entry adds a button to the language selector.

export const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "sr", label: "SR" },
  { code: "it", label: "IT" },
]

export const DEFAULT_LANG = "en"

// ─── Slides ────────────────────────────────────────────────────────────────
// Translatable text fields are objects keyed by language code.
// Non-translatable fields (id, layout, tone, style, animation, image, chapter)
// are plain values shared across all languages.
// The t() helper in i18n.js resolves the right value at render time.

export const slides = [
{
    id: "rS7okREjHt",
    layout: "title",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "April 2026 · Belgrade",
      de: "April 2026 · Belgrad",
      sr: "April 2026 · Beograd",
      it: "Aprile 2026 · Belgrado"
    },
    title: {
      en: "AI Enablement for Banking Teams",
      de: "KI-Befähigung für Bankteams",
      sr: "AI osnaživanje bankarskih timova",
      it: "Abilitazione all'AI per i team bancari"
    },
    subtitle: {
      en: "A practical framework for introducing AI into daily workflows",
      de: "Ein praxisnaher Rahmen für die Einführung von KI in tägliche Arbeitsabläufe",
      sr: "Praktičan okvir za uvođenje AI-ja u svakodnevne tokove rada",
      it: "Un framework pratico per introdurre l'AI nei flussi di lavoro quotidiani"
    },
    tone: "section-a",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "vGIwUp7nYU",
    layout: "single",
    section: {
      en: "Context",
      de: "Kontext",
      sr: "Kontekst",
      it: "Contesto"
    },
    chapter: "01",
    kicker: {
      en: "Why We're Here",
      de: "Warum wir hier sind",
      sr: "Zašto smo ovde",
      it: "Perché siamo qui"
    },
    title: {
      en: "Business Context & Goals",
      de: "Geschäftskontext & Ziele",
      sr: "Poslovni kontekst i ciljevi",
      it: "Contesto aziendale e obiettivi"
    },
    body: {
      en: "The banking sector faces unprecedented disruption from fintech players, changing customer expectations, and regulatory shifts.",
      de: "Der Bankensektor sieht sich mit beispielloser Disruption durch Fintech-Akteure konfrontiert.",
      sr: "Bankarski sektor se suočava sa neviđenim poremećajima usled fintech aktera, promenjenih očekivanja klijenata i regulatornih promena.",
      it: "Il settore bancario affronta una discontinuità senza precedenti causata dai player fintech, dall'evoluzione delle aspettative dei clienti e dai cambiamenti normativi."
    },
    bullets: {
      en: ["Accelerate digital product delivery by 40%", "Reduce time-to-market from 18 months to 6", "Improve NPS from 42 to 65 by end of 2026"],
      de: ["Digitale Produktbereitstellung um 40 % beschleunigen", "Time-to-Market von 18 auf 6 Monate reduzieren", "NPS bis Ende 2026 von 42 auf 65 steigern"],
      sr: ["Ubrzati isporuku digitalnih proizvoda za 40%", "Smanjiti vreme izlaska na tržište sa 18 meseci na 6", "Povećati NPS sa 42 na 65 do kraja 2026."],
      it: ["Accelerare del 40% il rilascio dei prodotti digitali", "Ridurre il time-to-market da 18 mesi a 6", "Portare l'NPS da 42 a 65 entro la fine del 2026"]
    },
    tone: "section-a",
    animation: "fade-up"
  },
{
    id: "y8dFsfAf3c",
    layout: "two-col",
    section: {
      en: "Solution",
      de: "Lösung",
      sr: "Rešenje",
      it: "Soluzione"
    },
    chapter: "02",
    kicker: {
      en: "Our Approach",
      de: "Unser Ansatz",
      sr: "Naš pristup",
      it: "Il nostro approccio"
    },
    title: {
      en: "Challenge vs Solution",
      de: "Herausforderung vs. Lösung",
      sr: "Izazov naspram rešenja",
      it: "Sfida vs soluzione"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "What We're Solving",
        de: "Was wir lösen",
        sr: "Šta rešavamo",
        it: "Che cosa stiamo risolvendo"
      },
      body: {
        en: "The legacy stack creates a 14-month average delivery cycle. Teams spend 60% of time on integration, not innovation.",
        de: "Der Legacy-Stack verursacht einen durchschnittlichen Lieferzyklus von 14 Monaten. Teams verbringen 60 % ihrer Zeit mit Integration statt mit Innovation.",
        sr: "Nasleđeni tehnološki stek stvara prosečan ciklus isporuke od 14 meseci. Timovi troše 60% vremena na integraciju, a ne na inovaciju.",
        it: "Lo stack legacy genera un ciclo medio di delivery di 14 mesi. I team dedicano il 60% del tempo all'integrazione, non all'innovazione."
      },
      bullets: {
        en: ["Fragmented tooling across 12+ systems", "Manual compliance checks at every gate", "Slow deployment pipelines"],
        de: ["Fragmentierte Tool-Landschaft über mehr als 12 Systeme", "Manuelle Compliance-Prüfungen an jedem Gate", "Langsame Deployment-Pipelines"],
        sr: ["Fragmentisani alati kroz više od 12 sistema", "Ručne provere usklađenosti na svakoj kontrolnoj tački", "Spori deployment pipeline-i"],
        it: ["Tool frammentati su oltre 12 sistemi", "Controlli di compliance manuali a ogni passaggio", "Pipeline di deployment lente"]
      }
    },
    right: {
      title: {
        en: "How We Solve It",
        de: "Wie wir es lösen",
        sr: "Kako to rešavamo",
        it: "Come lo risolviamo"
      },
      body: {
        en: "A modular platform layer that standardises integration, automates compliance, and decouples deployment from release.",
        de: "Eine modulare Plattformschicht, die Integration standardisiert, Compliance automatisiert und Deployment vom Release entkoppelt.",
        sr: "Modularni platformski sloj koji standardizuje integraciju, automatizuje usklađenost i razdvaja deployment od release-a.",
        it: "Un layer di piattaforma modulare che standardizza l'integrazione, automatizza la compliance e separa il deployment dal rilascio."
      },
      bullets: {
        en: ["Unified API gateway", "Automated governance hooks", "Feature-flag driven releases"],
        de: ["Einheitliches API-Gateway", "Automatisierte Governance-Hooks", "Feature-Flag-gesteuerte Releases"],
        sr: ["Jedinstveni API gateway", "Automatizovani governance hook-ovi", "Release-i vođeni feature flag-ovima"],
        it: ["Gateway API unificato", "Hook di governance automatizzati", "Release guidate da feature flag"]
      }
    }
  },
{
    id: "EP7ulh2S3d",
    layout: "quote",
    section: {
      en: "Vision",
      de: "Vision",
      sr: "Vizija",
      it: "Visione"
    },
    quote: {
      en: "Banking is not something you go to — it is something you do.",
      de: "Banking ist kein Ort, den man aufsucht — es ist etwas, das man tut.",
      sr: "Bankarstvo nije nešto u šta odlazite — to je nešto što radite.",
      it: "Il banking non è un luogo dove si va: è qualcosa che si fa."
    },
    attribution: {
      en: "— Brett King, Bank 4.0",
      de: "— Brett King, Bank 4.0",
      sr: "— Brett King, Bank 4.0",
      it: "— Brett King, Bank 4.0"
    },
    tone: "section-a",
    style: "dark",
    animation: "rise",
    anim_duration: 0.8,
    anim_stagger: 0.22
  },
{
    id: "zIKCRDQdQZ",
    layout: "image-text",
    section: {
      en: "Solution",
      de: "Lösung",
      sr: "Rešenje",
      it: "Soluzione"
    },
    chapter: "03",
    kicker: {
      en: "In Practice",
      de: "In der Praxis",
      sr: "U praksi",
      it: "Nella pratica"
    },
    title: {
      en: "Platform Architecture",
      de: "Plattformarchitektur",
      sr: "Arhitektura platforme",
      it: "Architettura di piattaforma"
    },
    tone: "section-b",
    image: "platform-diagram.png",
    animation: "fade-in",
    right: {
      body: {
        en: "End-to-end flow from customer request to fulfilment in under 200ms, with full audit trail at every step.",
        de: "Durchgängiger Ablauf von der Kundenanfrage bis zur Erfüllung in unter 200 ms, mit vollständiger Nachvollziehbarkeit bei jedem Schritt.",
        sr: "End-to-end tok od zahteva klijenta do realizacije za manje od 200 ms, uz potpun audit trail na svakom koraku.",
        it: "Flusso end-to-end dalla richiesta del cliente all'esecuzione in meno di 200 ms, con audit trail completo in ogni fase."
      },
      bullets: {
        en: ["Event sourcing at every layer", "Kafka-based async messaging", "Observability built in from day one", "Zero-downtime deployment"],
        de: ["Event Sourcing auf jeder Ebene", "Kafka-basiertes asynchrones Messaging", "Observability von Anfang an integriert", "Deployment ohne Ausfallzeiten"],
        sr: ["Event sourcing na svakom sloju", "Asinhrona razmena poruka zasnovana na Kafka-i", "Observability ugrađen od prvog dana", "Deployment bez zastoja"],
        it: ["Event sourcing a ogni livello", "Messaggistica asincrona basata su Kafka", "Osservabilità integrata fin dal primo giorno", "Deployment senza downtime"]
      }
    }
  },
{
    id: "CdOKB9wChT",
    layout: "title",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "April 2026 · Belgrade",
      de: "April 2026 · Belgrad",
      sr: "April 2026 · Beograd",
      it: "Aprile 2026 · Belgrado"
    },
    title: {
      en: "AI Demystified",
      de: "KI entmystifiziert",
      sr: "AI Demystified",
      it: "AI demistificata"
    },
    subtitle: {
      en: "A Half-Day Workshop for UniCredit Leadership — From buzzwords to business power",
      de: "Ein Halbtages-Workshop für die UniCredit-Führungsebene — von Buzzwords zu geschäftlicher Wirksamkeit",
      sr: "Poludnevna radionica za rukovodstvo UniCredit-a — od buzzword-a do poslovne snage",
      it: "Un workshop di mezza giornata per il management di UniCredit: dalle buzzword al potere di business"
    },
    tone: "section-a",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "eahH0SEtC1",
    layout: "single",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "Your Guide Today",
      de: "Ihr Guide heute",
      sr: "Vaš vodič danas",
      it: "La vostra guida di oggi"
    },
    title: {
      en: "Srdjan Kupresanin — Founder & CEO, Blockstruct GmbH",
      de: "Srdjan Kupresanin — Gründer & CEO, Blockstruct GmbH",
      sr: "Srdjan Kupresanin — Osnivač i CEO, Blockstruct GmbH",
      it: "Srdjan Kupresanin — Founder & CEO, Blockstruct GmbH"
    },
    body: {
      en: "Blockstruct builds production-ready AI solutions for government, enterprise and banking clients. International team across Austria, UK, Spain, Croatia, Serbia, Montenegro.",
      de: "Blockstruct entwickelt produktionsreife KI-Lösungen für Behörden, Unternehmen und Bankkunden. Internationales Team in Österreich, Großbritannien, Spanien, Kroatien, Serbien und Montenegro.",
      sr: "Blockstruct razvija AI rešenja spremna za produkciju za klijente iz javnog sektora, enterprise okruženja i bankarstva. Međunarodni tim prisutan u Austriji, UK, Španiji, Hrvatskoj, Srbiji i Crnoj Gori.",
      it: "Blockstruct realizza soluzioni AI pronte per la produzione per clienti del settore pubblico, enterprise e bancario. Team internazionale distribuito tra Austria, Regno Unito, Spagna, Croazia, Serbia e Montenegro."
    },
    bullets: {
      en: ["Croatian Ministry of Health — national medicine shortage prevention platform, government-grade, countrywide deployment", "Raiffeisen Bank International — world's first Euro-backed stable token on a public blockchain, independently evaluated by Croatian State Cloud & Citadelo cybersecurity", "VERBUND & SMATRICS / EnBW — AI-powered ESG reporting, digital operations & cybersecurity for Austria's largest energy company", "100+ stakeholders in production · Tens of thousands of documents processed, payments automated, decisions supported — daily", "Member of AI Factory Austria AI:AT Hub · www.ai-at.eu"],
      de: ["Kroatisches Gesundheitsministerium — nationale Plattform zur Prävention von Arzneimittelengpässen, government-grade, landesweiter Einsatz", "Raiffeisen Bank International — weltweit erster eurogedeckter Stable Token auf einer öffentlichen Blockchain, unabhängig bewertet von der Croatian State Cloud & Citadelo Cybersecurity", "VERBUND & SMATRICS / EnBW — KI-gestütztes ESG-Reporting, digitale Betriebsprozesse & Cybersicherheit für Österreichs größtes Energieunternehmen", "Über 100 Stakeholder in Produktion · Zehntausende verarbeitete Dokumente, automatisierte Zahlungen, täglich unterstützte Entscheidungen", "Mitglied von AI Factory Austria AI:AT Hub · www.ai-at.eu"],
      sr: ["Croatian Ministry of Health — nacionalna platforma za prevenciju nestašice lekova, government-grade rešenje, implementirano na nivou cele države", "Raiffeisen Bank International — prvi stable token na svetu vezan za evro na javnom blockchain-u, nezavisno evaluiran od strane Croatian State Cloud-a i Citadelo cybersecurity", "VERBUND & SMATRICS / EnBW — AI-pokretano ESG izveštavanje, digitalne operacije i sajber bezbednost za najveću energetsku kompaniju u Austriji", "100+ stakeholder-a u produkciji · desetine hiljada obrađenih dokumenata, automatizovana plaćanja, podržano donošenje odluka — svakodnevno", "Član AI Factory Austria AI:AT Hub-a · www.ai-at.eu"],
      it: ["Ministero della Salute croato — piattaforma nazionale per la prevenzione delle carenze di farmaci, di livello governativo, implementata su scala nazionale", "Raiffeisen Bank International — il primo stable token al mondo garantito in euro su una blockchain pubblica, valutato in modo indipendente da Croatian State Cloud & Citadelo cybersecurity", "VERBUND & SMATRICS / EnBW — reporting ESG basato sull'AI, operazioni digitali e cybersecurity per la più grande azienda energetica austriaca", "Oltre 100 stakeholder in produzione · Decine di migliaia di documenti elaborati, pagamenti automatizzati, decisioni supportate — ogni giorno", "Membro di AI Factory Austria AI:AT Hub · www.ai-at.eu"]
    },
    tone: "section-a",
    animation: "fade-up"
  },
{
    id: "jYaiAJ0klX",
    layout: "two-col",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "Our Ecosystem",
      de: "Unser Ökosystem",
      sr: "Naš ekosistem",
      it: "Il nostro ecosistema"
    },
    title: {
      en: "AI Factory Austria — AI:AT Hub",
      de: "AI Factory Austria — AI:AT Hub",
      sr: "AI Factory Austria — AI:AT Hub",
      it: "AI Factory Austria — AI:AT Hub"
    },
    tone: "section-a",
    animation: "fade-up",
    left: {
      title: {
        en: "What Is AI:AT?",
        de: "Was ist AI:AT?",
        sr: "Šta je AI:AT?",
        it: "Che cos'è AI:AT?"
      },
      body: {
        en: "Part of the European AI Factories initiative, funded by the European High Performance Computing Joint Undertaking (EuroHPC JU) — a €1.5B+ pan-European commitment to AI infrastructure.",
        de: "Teil der European AI Factories Initiative, finanziert vom European High Performance Computing Joint Undertaking (EuroHPC JU) — ein paneuropäisches Engagement von mehr als 1,5 Mrd. € für KI-Infrastruktur.",
        sr: "Deo evropske inicijative AI Factories, finansirane kroz European High Performance Computing Joint Undertaking (EuroHPC JU) — panevropsko opredeljenje za AI infrastrukturu vredno više od 1,5 milijardi evra.",
        it: "Fa parte dell'iniziativa europea AI Factories, finanziata dalla European High Performance Computing Joint Undertaking (EuroHPC JU): un impegno paneuropeo da oltre 1,5 miliardi di euro per l'infrastruttura AI."
      },
      bullets: {
        en: ["67 member organisations", "28 companies", "5 sectors covered", "Led jointly by AIT and Advanced Computing Austria"],
        de: ["67 Mitgliedsorganisationen", "28 Unternehmen", "5 abgedeckte Sektoren", "Gemeinsam geführt von AIT und Advanced Computing Austria"],
        sr: ["67 organizacija članica", "28 kompanija", "5 pokrivenih sektora", "Zajednički vode AIT i Advanced Computing Austria"],
        it: ["67 organizzazioni membri", "28 aziende", "5 settori coperti", "Guidata congiuntamente da AIT e Advanced Computing Austria"]
      }
    },
    right: {
      title: {
        en: "Academic Partners",
        de: "Akademische Partner",
        sr: "Akademski partneri",
        it: "Partner accademici"
      },
      body: {
        en: "TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator\n\nBlockstruct is one of the hub's business members, working at the intersection of AI research and real-world enterprise deployment. This workshop was developed within that ecosystem.",
        de: "TU Wien · Universität Wien · BOKU University · TU Graz · JKU Linz · ISTA · Österreichische Akademie der Wissenschaften · INiTS Vienna High-Tech Incubator\n\nBlockstruct ist eines der Wirtschaftsmitglieder des Hubs und arbeitet an der Schnittstelle von KI-Forschung und realer Enterprise-Implementierung. Dieser Workshop wurde in diesem Ökosystem entwickelt.",
        sr: "TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator\n\nBlockstruct je jedan od poslovnih članova huba i radi na preseku AI istraživanja i realne enterprise primene. Ova radionica je razvijena u okviru tog ekosistema.",
        it: "TU Wien · University of Vienna · BOKU University · TU Graz · JKU Linz · ISTA · Austrian Academy of Sciences · INiTS Vienna High-Tech Incubator\n\nBlockstruct è uno dei membri industriali dell'hub e opera all'intersezione tra ricerca sull'AI e implementazione enterprise nel mondo reale. Questo workshop è stato sviluppato all'interno di questo ecosistema."
      }
    }
  },
{
    id: "A9QYXKxka4",
    layout: "single",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "Why This Moment Matters",
      de: "Warum dieser Moment wichtig ist",
      sr: "Zašto je ovaj trenutak važan",
      it: "Perché questo momento conta"
    },
    title: {
      en: "Full Disclosure: This Slide Deck Was Prepared by an AI",
      de: "Volle Offenlegung: Dieses Folienset wurde von einer KI erstellt",
      sr: "Potpuno otvoreno: ovu prezentaciju pripremio je AI",
      it: "Piena trasparenza: questa presentazione è stata preparata da un'AI"
    },
    body: {
      en: "Every bullet point was written by AI with human guidance. Not a single sentence typed by hand. Here is what that means for you.",
      de: "Jeder Stichpunkt wurde mit menschlicher Anleitung von einer KI geschrieben. Kein einziger Satz wurde von Hand getippt. Was das für Sie bedeutet:",
      sr: "Svaka bullet tačka napisana je uz pomoć AI-ja i ljudskog usmeravanja. Nijedna rečenica nije otkucana ručno. Evo šta to znači za vas.",
      it: "Ogni bullet point è stato scritto dall'AI con guida umana. Non una singola frase è stata digitata a mano. Ecco cosa significa per voi."
    },
    bullets: {
      en: ["The Reality — previous revolutions replaced physical labour. This one replaces cognitive labour: analysis, summaries, classification, first drafts. The question is not whether this changes everything. It already has.", "The Choice — in 1811, textile workers smashed weaving machines rather than adapt. It did not end well. We face the same fork: resist and be bypassed, or learn the machinery and use it. This is the space race of our time.", "The Real Question — if AI handles the cognitive load, what is left for humans? Everything that makes us human: genuine judgment, empathy, trust-building, leadership. The goal is not job preservation — it is becoming the best possible versions of ourselves."],
      de: ["Die Realität — frühere Revolutionen ersetzten körperliche Arbeit. Diese ersetzt kognitive Arbeit: Analyse, Zusammenfassungen, Klassifikation, erste Entwürfe. Die Frage ist nicht, ob das alles verändert. Das hat es bereits.", "Die Wahl — 1811 zerschlugen Textilarbeiter Webmaschinen, statt sich anzupassen. Es ging nicht gut aus. Wir stehen vor derselben Weggabelung: widerstehen und übergangen werden oder die Maschine verstehen und nutzen. Das ist das Wettrennen unserer Zeit.", "Die eigentliche Frage — wenn KI die kognitive Last übernimmt, was bleibt dann für Menschen? Alles, was uns menschlich macht: echtes Urteilsvermögen, Empathie, Vertrauensaufbau, Führung. Es geht nicht um den Erhalt von Jobs, sondern darum, die bestmögliche Version unserer selbst zu werden."],
      sr: ["Realnost — prethodne revolucije zamenjivale su fizički rad. Ova zamenjuje kognitivni rad: analizu, sažetke, klasifikaciju, prve nacrte. Pitanje nije da li ovo menja sve. Već jeste.", "Izbor — 1811. godine tekstilni radnici razbijali su razboje umesto da se prilagode. Nije se dobro završilo. Danas smo pred istim račvanjem: ili ćete pružati otpor i biti zaobiđeni, ili ćete naučiti kako mašina radi i koristiti je. Ovo je svemirska trka našeg vremena.", "Pravo pitanje — ako AI preuzima kognitivni teret, šta ostaje ljudima? Sve ono što nas čini ljudima: istinsko prosuđivanje, empatija, izgradnja poverenja, liderstvo. Cilj nije očuvanje radnih mesta — cilj je da postanemo najbolja moguća verzija sebe."],
      it: ["La realtà — le rivoluzioni precedenti hanno sostituito il lavoro fisico. Questa sostituisce il lavoro cognitivo: analisi, sintesi, classificazione, prime bozze. La domanda non è se questo cambierà tutto. Lo ha già fatto.", "La scelta — nel 1811 i lavoratori tessili distrussero i telai invece di adattarsi. Non finì bene. Oggi ci troviamo davanti allo stesso bivio: resistere ed essere aggirati, oppure imparare a usare gli strumenti. Questa è la corsa allo spazio del nostro tempo.", "La vera domanda — se l'AI si occupa del carico cognitivo, cosa resta agli esseri umani? Tutto ciò che ci rende umani: giudizio autentico, empatia, costruzione della fiducia, leadership. L'obiettivo non è preservare i posti di lavoro: è diventare la migliore versione possibile di noi stessi."]
    },
    tone: "section-a",
    style: "tinted",
    animation: "stagger",
    anim_stagger: 0.15
  },
{
    id: "LAECfOC0jP",
    layout: "bullets-only",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "What You Will Leave With",
      de: "Womit Sie aus diesem Workshop gehen",
      sr: "Sa čim ćete otići",
      it: "Cosa vi porterete via"
    },
    title: {
      en: "About This Workshop",
      de: "Über diesen Workshop",
      sr: "O ovoj radionici",
      it: "Cosa offre questo workshop"
    },
    bullets: {
      en: ["Understand the technology — what LLMs actually are, how they learn, and what they genuinely can and cannot do", "Design better applications — identify where AI creates real value in your workflows, especially in sales and client relationships", "Ask better questions — leave with a mental framework to evaluate AI proposals, pilots, and vendor claims"],
      de: ["Die Technologie verstehen — was LLMs tatsächlich sind, wie sie lernen und was sie wirklich können und nicht können", "Bessere Anwendungen entwerfen — erkennen, wo KI in Ihren Arbeitsabläufen echten Mehrwert schafft, besonders im Vertrieb und in Kundenbeziehungen", "Bessere Fragen stellen — mit einem mentalen Rahmen nach Hause gehen, um KI-Vorschläge, Piloten und Anbieter-Claims zu bewerten"],
      sr: ["Razumećete tehnologiju — šta LLM-ovi zaista jesu, kako uče i šta zaista mogu, a šta ne mogu da urade", "Dizajniraćete bolje primene — prepoznaćete gde AI donosi stvarnu vrednost u vašim tokovima rada, posebno u prodaji i odnosima sa klijentima", "Postavljaćete bolja pitanja — otići ćete sa mentalnim okvirom za procenu AI predloga, pilot-projekata i tvrdnji dobavljača"],
      it: ["Comprendere la tecnologia — cosa sono davvero gli LLM, come apprendono e cosa possono e non possono fare realmente", "Progettare applicazioni migliori — individuare dove l'AI crea valore concreto nei vostri flussi di lavoro, soprattutto nelle vendite e nelle relazioni con i clienti", "Fare domande migliori — uscire con un framework mentale per valutare proposte AI, pilot e promesse dei fornitori"]
    },
    tone: "section-a",
    animation: "fade-up"
  },
{
    id: "RovuPsAXMW",
    layout: "single",
    section: {
      en: "Introduction",
      de: "Einführung",
      sr: "Uvod",
      it: "Introduzione"
    },
    kicker: {
      en: "Our Agenda",
      de: "Unsere Agenda",
      sr: "Naša agenda",
      it: "La nostra agenda"
    },
    title: {
      en: "Today's Journey",
      de: "Unsere Reise heute",
      sr: "Današnje putovanje",
      it: "Il percorso di oggi"
    },
    body: {
      en: "Eight modules across a half day — no coding required.",
      de: "Acht Module über einen halben Tag — ganz ohne Programmierung.",
      sr: "Osam modula tokom pola dana — bez potrebe za kodiranjem.",
      it: "Otto moduli in mezza giornata, senza bisogno di programmare."
    },
    bullets: {
      en: ["Module 1 (15 min) — What IS This Thing? LLMs, the four intelligences, setting the mental model", "Module 2 (20 min) — What's a Vector? How AI encodes meaning — illustrated with medieval hierarchy", "Module 3 (20 min) — The Frozen Chef. Training, parameters, labelling, and teaching AI your vocabulary", "Module 4 (25 min) — What AI Knows & How to Add More. RAG, tools, embeddings, fine-tuning", "Module 5 (15 min) — Why AI Lies to Your Face. Hallucinations and how to prevent them", "Module 6 (25 min) — Talking to AI Like a Pro. Prompt & context engineering", "Module 7 (20 min) — AI That Does Things. Agents, MCP, skills — AI that acts, not just answers", "Module 8 (10 min) — The Big Picture. Where we are, where we are going, and what stays human"],
      de: ["Modul 1 (15 Min.) — Was IST dieses Ding? LLMs, die vier Intelligenzen und das mentale Modell", "Modul 2 (20 Min.) — Was ist ein Vektor? Wie KI Bedeutung codiert — illustriert mit mittelalterlicher Hierarchie", "Modul 3 (20 Min.) — Der gefrorene Koch. Training, Parameter, Labeling und wie man KI die eigene Fachsprache beibringt", "Modul 4 (25 Min.) — Was KI weiß & wie man ihr mehr gibt. RAG, Tools, Embeddings, Fine-Tuning", "Modul 5 (15 Min.) — Warum KI Ihnen ins Gesicht lügt. Halluzinationen und wie man sie verhindert", "Modul 6 (25 Min.) — Mit KI sprechen wie ein Profi. Prompt- & Kontext-Engineering", "Modul 7 (20 Min.) — KI, die Dinge tut. Agents, MCP, Skills — KI, die handelt statt nur zu antworten", "Modul 8 (10 Min.) — Das große Bild. Wo wir stehen, wohin wir gehen und was menschlich bleibt"],
      sr: ["Modul 1 (15 min) — Šta JE ovo? LLM-ovi, četiri inteligencije, postavljanje mentalnog modela", "Modul 2 (20 min) — Šta je vektor? Kako AI kodira značenje — ilustrovano srednjovekovnom hijerarhijom", "Modul 3 (20 min) — Zamrznuti kuvar. Trening, parametri, označavanje i učenje AI-ja vašem rečniku", "Modul 4 (25 min) — Šta AI zna i kako da mu damo više. RAG, alati, embedding-i, fine-tuning", "Modul 5 (15 min) — Zašto vas AI laže u lice. Halucinacije i kako da ih sprečite", "Modul 6 (25 min) — Kako razgovarati sa AI-jem kao profesionalac. Prompt i context engineering", "Modul 7 (20 min) — AI koji radi stvari. Agenti, MCP, skills — AI koji deluje, a ne samo odgovara", "Modul 8 (10 min) — Šira slika. Gde smo, kuda idemo i šta ostaje ljudsko"],
      it: ["Modulo 1 (15 min) — Che COS'È questa cosa? LLM, le quattro intelligenze, impostare il modello mentale", "Modulo 2 (20 min) — Cos'è un vettore? Come l'AI codifica il significato, illustrato con una gerarchia medievale", "Modulo 3 (20 min) — Lo Chef Congelato. Addestramento, parametri, etichettatura e come insegnare all'AI il vostro vocabolario", "Modulo 4 (25 min) — Cosa sa l'AI e come aggiungerle altro. RAG, tool, embedding, fine-tuning", "Modulo 5 (15 min) — Perché l'AI vi mente in faccia. Allucinazioni e come prevenirle", "Modulo 6 (25 min) — Parlare con l'AI da professionisti. Prompt e context engineering", "Modulo 7 (20 min) — AI che fa cose. Agenti, MCP, skill: AI che agisce, non solo risponde", "Modulo 8 (10 min) — Il quadro d'insieme. Dove siamo, dove stiamo andando e cosa resta umano"]
    },
    tone: "section-a",
    animation: "stagger",
    anim_stagger: 0.12
  },
{
    id: "ibXYzbLUbx",
    layout: "title",
    section: {
      en: "Module 1",
      de: "Modul 1",
      sr: "Modul 1",
      it: "Modulo 1"
    },
    chapter: "01",
    kicker: {
      en: "Module 1 · 15 min",
      de: "Modul 1 · 15 Min.",
      sr: "Modul 1 · 15 min",
      it: "Modulo 1 · 15 min"
    },
    title: {
      en: "What IS This Thing?",
      de: "Was IST dieses Ding?",
      sr: "Šta JE ovo?",
      it: "Che COS'È questa cosa?"
    },
    subtitle: {
      en: "Setting the mental model — and dispelling a few myths",
      de: "Das mentale Modell setzen — und ein paar Mythen ausräumen",
      sr: "Postavljanje mentalnog modela — i razbijanje nekoliko mitova",
      it: "Impostare il modello mentale e sfatare qualche mito"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "pHRjedwJMB",
    layout: "two-col",
    section: {
      en: "Module 1",
      de: "Modul 1",
      sr: "Modul 1",
      it: "Modulo 1"
    },
    chapter: "01",
    kicker: {
      en: "The Framework",
      de: "Der Rahmen",
      sr: "Okvir",
      it: "Il framework"
    },
    title: {
      en: "The Four Types of Intelligence",
      de: "Die vier Arten von Intelligenz",
      sr: "Četiri tipa inteligencije",
      it: "I quattro tipi di intelligenza"
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.12,
    left: {
      title: {
        en: "Left Brain — Where AI Lives",
        de: "Linkes Gehirn — wo KI lebt",
        sr: "Leva hemisfera — gde AI živi",
        it: "Emisfero sinistro — dove vive l'AI"
      },
      body: {
        en: "Dr. Jill Bolte Taylor's four-intelligence framework — neuroscientist, TED Talk icon, stroke survivor — is one of the best mental models for understanding where AI sits.",
        de: "Dr. Jill Bolte Taylors Framework der vier Intelligenzen — Neurowissenschaftlerin, TED-Talk-Ikone, Schlaganfallüberlebende — ist eines der besten mentalen Modelle, um zu verstehen, wo KI einzuordnen ist.",
        sr: "Okvir četiri inteligencije dr Jill Bolte Taylor — neuronaučnica, TED Talk ikona, osoba koja je preživela moždani udar — jedan je od najboljih mentalnih modela za razumevanje mesta AI-ja.",
        it: "Il framework delle quattro intelligenze della Dr.ssa Jill Bolte Taylor — neuroscienziata, icona TED Talk, sopravvissuta a un ictus — è uno dei migliori modelli mentali per capire dove si colloca l'AI."
      },
      bullets: {
        en: ["Left Thinking → serial, logical, language-based. Pattern recognition, analysis, linear reasoning. AI lives here.", "Left Emotional → habit, reward, routine behaviour. Reinforcement learning is actively exploring this territory."],
        de: ["Linkes Denken → seriell, logisch, sprachbasiert. Mustererkennung, Analyse, lineares Denken. Hier lebt KI.", "Linke Emotionalität → Gewohnheit, Belohnung, Routineverhalten. Reinforcement Learning erkundet dieses Gebiet aktiv."],
        sr: ["Levo mišljenje → serijsko, logičko, zasnovano na jeziku. Prepoznavanje obrazaca, analiza, linearno rasuđivanje. Tu živi AI.", "Leva emocionalnost → navika, nagrada, rutinsko ponašanje. Reinforcement learning aktivno istražuje ovu teritoriju."],
        it: ["Pensiero sinistro → seriale, logico, basato sul linguaggio. Riconoscimento di pattern, analisi, ragionamento lineare. È qui che vive l'AI.", "Emotività sinistra → abitudine, ricompensa, comportamento routinario. Il reinforcement learning sta esplorando attivamente questo territorio."]
      }
    },
    right: {
      title: {
        en: "Right Brain — Distinctly Human",
        de: "Rechtes Gehirn — unverwechselbar menschlich",
        sr: "Desna hemisfera — izrazito ljudska",
        it: "Emisfero destro — distintamente umano"
      },
      body: {
        en: "The right hemisphere handles holistic, contextual, and empathic processing — the parts of intelligence AI has not yet reached.",
        de: "Die rechte Hemisphäre verarbeitet ganzheitlich, kontextuell und empathisch — genau die Teile von Intelligenz, die KI bisher nicht erreicht hat.",
        sr: "Desna hemisfera obrađuje holističko, kontekstualno i empatično procesiranje — delove inteligencije do kojih AI još nije stigao.",
        it: "L'emisfero destro gestisce elaborazione olistica, contestuale ed empatica: le componenti dell'intelligenza che l'AI non ha ancora raggiunto."
      },
      bullets: {
        en: ["Right Thinking → holistic, contextual, spatial. The big-picture perspective. Not yet touched by AI.", "Right Emotional → empathy, intuition, present-moment connection. Not yet touched by AI."],
        de: ["Rechtes Denken → ganzheitlich, kontextuell, räumlich. Die Perspektive auf das große Ganze. Von KI noch nicht erreicht.", "Rechte Emotionalität → Empathie, Intuition, Präsenz im Moment. Von KI noch nicht erreicht."],
        sr: ["Desno mišljenje → holističko, kontekstualno, prostorno. Perspektiva šire slike. AI ovo još nije dotakao.", "Desna emocionalnost → empatija, intuicija, povezanost sa sadašnjim trenutkom. AI ovo još nije dotakao."],
        it: ["Pensiero destro → olistico, contestuale, spaziale. La prospettiva d'insieme. Non ancora toccata dall'AI.", "Emotività destra → empatia, intuizione, connessione con il momento presente. Non ancora toccata dall'AI."]
      }
    }
  },
{
    id: "bQdBkdFwTo",
    layout: "single",
    section: {
      en: "Module 1",
      de: "Modul 1",
      sr: "Modul 1",
      it: "Modulo 1"
    },
    chapter: "01",
    kicker: {
      en: "The Core Mechanism",
      de: "Der Kernmechanismus",
      sr: "Osnovni mehanizam",
      it: "Il meccanismo di base"
    },
    title: {
      en: "LLMs Are Left-Brain Serial Processors — On Steroids",
      de: "LLMs sind linkshemisphärische serielle Prozessoren — auf Steroiden",
      sr: "LLM-ovi su serijski procesori leve hemisfere — na steroidima",
      it: "Gli LLM sono processori seriali dell'emisfero sinistro, portati all'estremo"
    },
    body: {
      en: "They do one thing, and they do it extraordinarily well: predict the most useful next token, given everything they have seen.",
      de: "Sie tun eine Sache, und die tun sie außergewöhnlich gut: das nützlichste nächste Token vorherzusagen, gegeben alles, was sie bisher gesehen haben.",
      sr: "Rade jednu stvar, i rade je izuzetno dobro: predviđaju najkorisniji sledeći token, na osnovu svega što su do tada videli.",
      it: "Fanno una sola cosa, e la fanno in modo straordinario: prevedere il token successivo più utile, dato tutto ciò che hanno visto."
    },
    bullets: {
      en: ["\"Token\" ≈ word (or part of a word). That is literally it. The rest — writing poetry, explaining a contract, drafting a sales pitch — emerges from doing that one thing at massive scale.", "Trained on billions of examples: every book, research paper, forum post, and legal filing ever published.", "Think of it as the world's most sophisticated autocomplete — one that has read everything. Not magic. Not human. But genuinely remarkable."],
      de: ["„Token“ ≈ Wort (oder Teil eines Wortes). Das ist buchstäblich alles. Alles andere — Gedichte schreiben, einen Vertrag erklären, einen Sales-Pitch entwerfen — entsteht daraus, dass diese eine Sache in riesigem Maßstab getan wird.", "Trainiert auf Milliarden von Beispielen: jedes jemals veröffentlichte Buch, Forschungspaper, Forenpost und juristische Dokument.", "Man kann es sich als die ausgefeilteste Autovervollständigung der Welt vorstellen — eine, die alles gelesen hat. Nicht magisch. Nicht menschlich. Aber wirklich bemerkenswert."],
      sr: ["\"Token\" ≈ reč (ili deo reči). I to je doslovno sve. Sve ostalo — pisanje poezije, objašnjavanje ugovora, sastavljanje prodajnog pitch-a — proizlazi iz toga što tu jednu stvar rade u ogromnoj razmeri.", "Trenirani na milijardama primera: svakoj objavljenoj knjizi, naučnom radu, forumskom postu i pravnom podnesku.", "Zamislite to kao najsofisticiraniji autocomplete na svetu — onaj koji je pročitao sve. Nije magija. Nije čovek. Ali jeste zaista izuzetno."],
      it: ["\"Token\" ≈ parola (o parte di una parola). È letteralmente tutto qui. Il resto — scrivere poesia, spiegare un contratto, abbozzare una proposta commerciale — emerge dal fare quell'unica cosa su scala enorme.", "Addestrati su miliardi di esempi: ogni libro, paper di ricerca, post di forum e documento legale mai pubblicato.", "Pensateli come il sistema di completamento automatico più sofisticato al mondo, uno che ha letto tutto. Non è magia. Non è umano. Ma è davvero notevole."]
    },
    tone: "section-b",
    animation: "fade-up"
  },
{
    id: "4XXq4taYuA",
    layout: "title",
    section: {
      en: "Module 2",
      de: "Modul 2",
      sr: "Modul 2",
      it: "Modulo 2"
    },
    chapter: "02",
    kicker: {
      en: "Module 2 · 20 min",
      de: "Modul 2 · 20 Min.",
      sr: "Modul 2 · 20 min",
      it: "Modulo 2 · 20 min"
    },
    title: {
      en: "Excuse Me, What's a Vector?",
      de: "Entschuldigen Sie, was ist ein Vektor?",
      sr: "Izvinite, šta je vektor?",
      it: "Scusate, che cos'è un vettore?"
    },
    subtitle: {
      en: "How AI encodes meaning — illustrated with medieval hierarchy",
      de: "Wie KI Bedeutung codiert — illustriert anhand mittelalterlicher Hierarchie",
      sr: "Kako AI kodira značenje — ilustrovano srednjovekovnom hijerarhijom",
      it: "Come l'AI codifica il significato, illustrato con una gerarchia medievale"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "RvdpB3OlfW",
    layout: "two-col",
    section: {
      en: "Module 2",
      de: "Modul 2",
      sr: "Modul 2",
      it: "Modulo 2"
    },
    chapter: "02",
    kicker: {
      en: "An Analogy",
      de: "Eine Analogie",
      sr: "Analogija",
      it: "Un'analogia"
    },
    title: {
      en: "Who Has the Most Power?",
      de: "Wer hat die meiste Macht?",
      sr: "Ko ima najviše moći?",
      it: "Chi ha più potere?"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "Three Characters, One Kingdom",
        de: "Drei Figuren, ein Königreich",
        sr: "Tri lika, jedno kraljevstvo",
        it: "Tre personaggi, un regno"
      },
      body: {
        en: "The King: highest political power, controls the treasury, commands armies — but physically rather unimpressive.\n\nThe Peasant: no political power, no wealth — but surprisingly sturdy and capable.\n\nThe Horse: zero political power, owns nothing — but fastest and strongest of all three.",
        de: "Der König: höchste politische Macht, kontrolliert die Schatzkammer, kommandiert Armeen — aber körperlich eher unimposant.\n\nDer Bauer: keine politische Macht, kein Vermögen — aber überraschend robust und fähig.\n\nDas Pferd: null politische Macht, besitzt nichts — aber das schnellste und stärkste von allen dreien.",
        sr: "Kralj: najveća politička moć, kontroliše riznicu, komanduje vojskama — ali fizički prilično neimpresivan.\n\nSeljak: nema političku moć, nema bogatstvo — ali je iznenađujuće čvrst i sposoban.\n\nKonj: nula političke moći, ne poseduje ništa — ali je najbrži i najjači od sve trojice.",
        it: "Il Re: massimo potere politico, controlla il tesoro, comanda gli eserciti, ma fisicamente è piuttosto poco impressionante.\n\nIl Contadino: nessun potere politico, nessuna ricchezza, ma sorprendentemente robusto e capace.\n\nIl Cavallo: zero potere politico, non possiede nulla, ma è il più veloce e il più forte di tutti e tre."
      }
    },
    right: {
      title: {
        en: "The Insight",
        de: "Die Erkenntnis",
        sr: "Suština",
        it: "L'intuizione"
      },
      body: {
        en: "The answer is: it depends entirely on which dimension of power you are measuring.\n\nThis is the foundation of how AI encodes meaning. Different dimensions, different values, same entity.",
        de: "Die Antwort lautet: Es hängt vollständig davon ab, welche Dimension von Macht Sie messen.\n\nDas ist die Grundlage dafür, wie KI Bedeutung codiert. Unterschiedliche Dimensionen, unterschiedliche Werte, dieselbe Entität.",
        sr: "Odgovor glasi: u potpunosti zavisi od toga koju dimenziju moći merite.",
        it: "La risposta è: dipende interamente da quale dimensione del potere si misura.\n\nQuesto è il fondamento di come l'AI codifica il significato. Dimensioni diverse, valori diversi, stessa entità."
      },
      bullets: {
        en: ["Political power: King 10/10, Peasant 1/10, Horse 0/10", "Physical power: King 3/10, Peasant 6/10, Horse 9/10", "Economic power: King 9/10, Peasant 1/10, Horse 0/10"],
        de: ["Politische Macht: König 10/10, Bauer 1/10, Pferd 0/10", "Körperliche Macht: König 3/10, Bauer 6/10, Pferd 9/10", "Wirtschaftliche Macht: König 9/10, Bauer 1/10, Pferd 0/10"],
        sr: ["Politička moć: Kralj 10/10, Seljak 1/10, Konj 0/10", "Fizička moć: Kralj 3/10, Seljak 6/10, Konj 9/10", "Ekonomska moć: Kralj 9/10, Seljak 1/10, Konj 0/10"],
        it: ["Potere politico: Re 10/10, Contadino 1/10, Cavallo 0/10", "Potere fisico: Re 3/10, Contadino 6/10, Cavallo 9/10", "Potere economico: Re 9/10, Contadino 1/10, Cavallo 0/10"]
      }
    }
  },
{
    id: "CBEkMYUFQK",
    layout: "single",
    section: {
      en: "Module 2",
      de: "Modul 2",
      sr: "Modul 2",
      it: "Modulo 2"
    },
    chapter: "02",
    kicker: {
      en: "The Technical Reality",
      de: "Die technische Realität",
      sr: "Tehnička realnost",
      it: "La realtà tecnica"
    },
    title: {
      en: "Enter the Vector — Nuance, Encoded as Numbers",
      de: "Der Vektor — Nuance, als Zahlen codiert",
      sr: "Upoznajte vektor — nijanse kodirane brojevima",
      it: "Ecco il vettore: la sfumatura codificata in numeri"
    },
    body: {
      en: "A vector is simply a list of numbers that locates something in a multi-dimensional space. Each dimension captures one aspect of meaning.",
      de: "Ein Vektor ist einfach eine Liste von Zahlen, die etwas in einem mehrdimensionalen Raum verortet. Jede Dimension erfasst einen Aspekt von Bedeutung.",
      sr: "Vektor je jednostavno lista brojeva koja nešto pozicionira u višedimenzionalnom prostoru. Svaka dimenzija hvata jedan aspekt značenja.",
      it: "Un vettore è semplicemente un elenco di numeri che colloca qualcosa in uno spazio multidimensionale. Ogni dimensione cattura un aspetto del significato."
    },
    bullets: {
      en: ["AI uses 1,536 dimensions instead of 4 — but the principle is identical to the King/Peasant/Horse example", "\"Client complaint\" and \"customer dissatisfaction\" end up very close together in vector space", "\"Basel III\" and \"Beyoncé\" do not", "This is how AI understands nuance, finds similar documents, and connects ideas across your entire knowledge base", "It is not reading — it is geometry"],
      de: ["KI nutzt 1.536 Dimensionen statt 4 — aber das Prinzip ist identisch mit dem Beispiel König/Bauer/Pferd", "„Kundenbeschwerde“ und „Unzufriedenheit des Kunden“ liegen im Vektorraum sehr nah beieinander", "„Basel III“ und „Beyoncé“ nicht", "So versteht KI Nuancen, findet ähnliche Dokumente und verbindet Ideen über Ihre gesamte Wissensbasis hinweg", "Es ist kein Lesen — es ist Geometrie"],
      sr: ["AI koristi 1.536 dimenzija umesto 4 — ali princip je identičan primeru sa Kraljem, Seljakom i Konjem", "\"Client complaint\" i \"customer dissatisfaction\" završavaju veoma blizu jedno drugom u vektorskom prostoru", "\"Basel III\" i \"Beyoncé\" ne završavaju", "Tako AI razume nijanse, pronalazi slične dokumente i povezuje ideje kroz celokupnu bazu vašeg znanja", "To nije čitanje — to je geometrija"],
      it: ["L'AI usa 1.536 dimensioni invece di 4, ma il principio è identico all'esempio Re/Contadino/Cavallo", "\"Client complaint\" e \"customer dissatisfaction\" finiscono molto vicini nello spazio vettoriale", "\"Basel III\" e \"Beyoncé\" no", "È così che l'AI comprende le sfumature, trova documenti simili e collega idee in tutta la vostra base di conoscenza", "Non sta leggendo: è geometria"]
    },
    tone: "section-b",
    animation: "fade-up"
  },
{
    id: "XjCEbsaH2E",
    layout: "two-col",
    section: {
      en: "Module 2",
      de: "Modul 2",
      sr: "Modul 2",
      it: "Modulo 2"
    },
    chapter: "02",
    kicker: {
      en: "Vectors in Action",
      de: "Vektoren in Aktion",
      sr: "Vektori u praksi",
      it: "I vettori in azione"
    },
    title: {
      en: "The Power of Precise Instructions",
      de: "Die Kraft präziser Anweisungen",
      sr: "Moć preciznih instrukcija",
      it: "Il potere di istruzioni precise"
    },
    tone: "section-b",
    animation: "fade-up",
    left: {
      title: {
        en: "The Prompt",
        de: "Der Prompt",
        sr: "Prompt",
        it: "Il prompt"
      },
      body: {
        en: "\"Explain why it rains. You are a leading meteorologist. Your audience is a 10-year-old who has never heard the word 'evaporation' before.\"\n\nTwo instructions embedded: domain expertise (meteorologist) and communication style (age 10).",
        de: "„Erkläre, warum es regnet. Du bist ein führender Meteorologe. Dein Publikum ist ein 10-jähriges Kind, das das Wort ,Verdunstung‘ noch nie gehört hat.“\n\nZwei eingebettete Anweisungen: Fachkompetenz (Meteorologe) und Kommunikationsstil (10 Jahre alt).",
        sr: "\"Objasni zašto pada kiša. Ti si vrhunski meteorolog. Tvoja publika je desetogodišnje dete koje nikada ranije nije čulo reč 'isparavanje'.\"\n\nU prompt su ugrađene dve instrukcije: stručnost u domenu (meteorolog) i stil komunikacije (dete od 10 godina).",
        it: "\"Spiega perché piove. Sei un meteorologo di primo piano. Il tuo pubblico è un bambino di 10 anni che non ha mai sentito la parola 'evaporazione'.\"\n\nSono incorporate due istruzioni: competenza di dominio (meteorologo) e stile di comunicazione (10 anni)."
      }
    },
    right: {
      title: {
        en: "The Result",
        de: "Das Ergebnis",
        sr: "Rezultat",
        it: "Il risultato"
      },
      body: {
        en: "\"You know how puddles disappear after a sunny day? The sun is so warm it turns the water into tiny invisible bits that float up into the sky. When lots of those tiny bits get together way up high, they make a cloud. And when the cloud gets too full? It rains — like a very full glass spilling over.\"\n\nNo jargon. Right tone. Accurate content. Same model. Completely different instruction.",
        de: "„Du weißt doch, wie Pfützen nach einem sonnigen Tag verschwinden? Die Sonne ist so warm, dass sie das Wasser in winzige unsichtbare Teilchen verwandelt, die in den Himmel aufsteigen. Wenn sich viele dieser winzigen Teilchen weit oben sammeln, bilden sie eine Wolke. Und wenn die Wolke zu voll wird? Dann regnet es — wie ein sehr volles Glas, das überläuft.“\n\nKein Jargon. Richtiger Ton. Präziser Inhalt. Dasselbe Modell. Vollkommen andere Anweisung.",
        sr: "\"Znaš kako lokve nestanu posle sunčanog dana? Sunce je toliko toplo da pretvara vodu u sitne nevidljive delove koji odlaze gore u nebo. Kada se mnogo tih sitnih delova skupi visoko gore, nastane oblak. A kada oblak postane prepun? Počne da pada kiša — kao kada se veoma puna čaša prelije.\"\n\nBez žargona. Pravi ton. Tačan sadržaj. Isti model. Potpuno drugačija instrukcija.",
        it: "\"Sai come le pozzanghere spariscono dopo una giornata di sole? Il sole è così caldo che trasforma l'acqua in minuscoli pezzetti invisibili che salgono nel cielo. Quando tanti di quei minuscoli pezzetti si riuniscono molto in alto, formano una nuvola. E quando la nuvola si riempie troppo? Piove, come un bicchiere troppo pieno che trabocca.\"\n\nNiente gergo. Tono giusto. Contenuto accurato. Stesso modello. Istruzione completamente diversa."
      }
    }
  },
{
    id: "30R2iOj3jZ",
    layout: "title",
    section: {
      en: "Module 3",
      de: "Modul 3",
      sr: "Modul 3",
      it: "Modulo 3"
    },
    chapter: "03",
    kicker: {
      en: "Module 3 · 20 min",
      de: "Modul 3 · 20 Min.",
      sr: "Modul 3 · 20 min",
      it: "Modulo 3 · 20 min"
    },
    title: {
      en: "The Frozen Chef",
      de: "Der gefrorene Koch",
      sr: "Zamrznuti kuvar",
      it: "Lo Chef Congelato"
    },
    subtitle: {
      en: "Training, parameters, labelling — and teaching AI your vocabulary",
      de: "Training, Parameter, Labeling — und wie man KI Ihren Wortschatz beibringt",
      sr: "Trening, parametri, označavanje — i učenje AI-ja vašem rečniku",
      it: "Addestramento, parametri, etichettatura e come insegnare all'AI il vostro vocabolario"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "pH7ZrWCeTk",
    layout: "single",
    section: {
      en: "Module 3",
      de: "Modul 3",
      sr: "Modul 3",
      it: "Modulo 3"
    },
    chapter: "03",
    kicker: {
      en: "How LLMs Learn",
      de: "Wie LLMs lernen",
      sr: "Kako LLM-ovi uče",
      it: "Come apprendono gli LLM"
    },
    title: {
      en: "A Brief History of Eating the Internet",
      de: "Eine kurze Geschichte des Internet-Verschlingens",
      sr: "Kratka istorija gutanja interneta",
      it: "Una breve storia del divorare Internet"
    },
    body: {
      en: "Three stages — from raw data to the models you use today.",
      de: "Drei Phasen — von Rohdaten zu den Modellen, die Sie heute verwenden.",
      sr: "Tri faze — od sirovih podataka do modela koje danas koristite.",
      it: "Tre fasi: dai dati grezzi ai modelli che usate oggi."
    },
    bullets: {
      en: ["Step 1: Ingest everything — books, articles, Wikipedia, scientific papers, Reddit arguments, legal filings, customer service transcripts. All of it. Multiple times.", "Step 2: Compress the patterns — trillions of examples of 'what word comes after what' are compressed into billions of numerical parameters. Not stored as text — as weights.", "Step 3: Freeze the result — training ends. The parameters are locked. The model now carries a statistical snapshot of human language and knowledge as of that moment.", "The chef is brilliant. But the kitchen closed when training ended. No new ingredients after the cutoff date."],
      de: ["Schritt 1: Alles aufnehmen — Bücher, Artikel, Wikipedia, wissenschaftliche Paper, Reddit-Debatten, juristische Schriftsätze, Transkripte aus dem Kundenservice. Alles. Mehrfach.", "Schritt 2: Muster komprimieren — Billionen Beispiele dafür, welches Wort auf welches folgt, werden in Milliarden numerischer Parameter komprimiert. Nicht als Text gespeichert — als Gewichte.", "Schritt 3: Das Ergebnis einfrieren — das Training endet. Die Parameter werden fixiert. Das Modell trägt nun eine statistische Momentaufnahme menschlicher Sprache und menschlichen Wissens dieses Zeitpunkts in sich.", "Der Koch ist brillant. Aber die Küche schloss, als das Training endete. Nach dem Cutoff-Datum kommen keine neuen Zutaten mehr hinzu."],
      sr: ["Korak 1: Unesite sve — knjige, članke, Wikipediju, naučne radove, rasprave na Reddit-u, pravne podneske, transkripte korisničke podrške. Sve. Više puta.", "Korak 2: Kompresujte obrasce — trilioni primera tipa \"koja reč dolazi posle koje\" kompresuju se u milijarde numeričkih parametara. Ne čuvaju se kao tekst — već kao težine.", "Korak 3: Zamrznite rezultat — trening se završava. Parametri se zaključavaju. Model sada nosi statistički snimak ljudskog jezika i znanja iz tog trenutka.", "Kuvar je briljantan. Ali kuhinja je zatvorena kada se trening završi. Nema novih sastojaka posle cutoff datuma."],
      it: ["Fase 1: ingerire tutto — libri, articoli, Wikipedia, paper scientifici, discussioni su Reddit, documenti legali, trascrizioni del customer service. Tutto. Più volte.", "Fase 2: comprimere i pattern — trilioni di esempi di \"quale parola viene dopo quale\" vengono compressi in miliardi di parametri numerici. Non memorizzati come testo, ma come pesi.", "Fase 3: congelare il risultato — l'addestramento termina. I parametri vengono bloccati. Il modello ora contiene una fotografia statistica del linguaggio e della conoscenza umana di quel momento.", "Lo chef è brillante. Ma la cucina ha chiuso quando l'addestramento è finito. Nessun nuovo ingrediente dopo la data di cutoff."]
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.12
  },
{
    id: "OHpfy6bRtz",
    layout: "single",
    section: {
      en: "Module 3",
      de: "Modul 3",
      sr: "Modul 3",
      it: "Modulo 3"
    },
    chapter: "03",
    kicker: {
      en: "The Human Layer",
      de: "Die menschliche Ebene",
      sr: "Ljudski sloj",
      it: "Il livello umano"
    },
    title: {
      en: "Labelling — The Assembly Line Behind the Curtain",
      de: "Labeling — Das Fließband hinter dem Vorhang",
      sr: "Označavanje — proizvodna traka iza zavese",
      it: "Etichettatura: la catena di montaggio dietro le quinte"
    },
    body: {
      en: "A raw LLM trained only on internet text will helpfully explain how to do terrible things. Labelling — specifically RLHF — is how we fix that.",
      de: "Ein rohes LLM, das nur auf Internettext trainiert wurde, erklärt Ihnen bereitwillig, wie man schreckliche Dinge tut. Labeling — genauer RLHF — ist die Methode, mit der wir das beheben.",
      sr: "Sirovi LLM treniran samo na tekstovima sa interneta rado će vam objasniti kako da uradite strašne stvari. Označavanje — konkretno RLHF — način je na koji to ispravljamo.",
      it: "Un LLM grezzo addestrato solo su testi presi da Internet spiegherà volentieri come fare cose terribili. L'etichettatura, nello specifico il RLHF, è il modo in cui correggiamo questo problema."
    },
    bullets: {
      en: ["Human raters — thousands of people evaluate pairs of AI responses: which is more helpful, more accurate, more appropriate?", "Reward model — a separate model learns from human preferences, building an automated sense of quality", "Fine-tune on reward — the LLM is updated to produce outputs that score well on the reward model. Repeated many times.", "RLHF (Reinforcement Learning from Human Feedback) is why modern LLMs are useful rather than unhinged."],
      de: ["Menschliche Bewerter — Tausende Menschen vergleichen Paare von KI-Antworten: Welche ist hilfreicher, genauer, angemessener?", "Reward-Modell — ein separates Modell lernt aus menschlichen Präferenzen und baut ein automatisiertes Qualitätsverständnis auf", "Fine-Tuning auf Belohnung — das LLM wird so aktualisiert, dass es Ausgaben erzeugt, die im Reward-Modell gut abschneiden. Viele Male wiederholt.", "RLHF (Reinforcement Learning from Human Feedback) ist der Grund, warum moderne LLMs nützlich statt unberechenbar sind."],
      sr: ["Ljudski evaluatori — hiljade ljudi procenjuje parove AI odgovora: koji je korisniji, tačniji, primereniji?", "Reward model — poseban model uči iz ljudskih preferencija i gradi automatizovani osećaj za kvalitet", "Fine-tuning na osnovu nagrade — LLM se ažurira tako da proizvodi izlaze koji postižu dobar rezultat na reward modelu. Ponavlja se mnogo puta.", "RLHF (Reinforcement Learning from Human Feedback) je razlog zašto su savremeni LLM-ovi korisni, umesto potpuno nepredvidivi."],
      it: ["Valutatori umani — migliaia di persone confrontano coppie di risposte dell'AI: quale è più utile, più accurata, più appropriata?", "Reward model — un modello separato apprende dalle preferenze umane, costruendo un senso automatizzato della qualità", "Fine-tuning sul reward — l'LLM viene aggiornato per produrre output che ottengono punteggi elevati sul reward model. Operazione ripetuta molte volte.", "RLHF (Reinforcement Learning from Human Feedback) è il motivo per cui gli LLM moderni sono utili invece che ingestibili."]
    },
    tone: "section-b",
    animation: "fade-up"
  },
{
    id: "GyCsWlyFWf",
    layout: "single",
    section: {
      en: "Module 3",
      de: "Modul 3",
      sr: "Modul 3",
      it: "Modulo 3"
    },
    chapter: "03",
    kicker: {
      en: "Teaching AI Your World",
      de: "KI Ihre Welt lehren",
      sr: "Učenje AI-ja vašem svetu",
      it: "Insegnare all'AI il vostro mondo"
    },
    title: {
      en: "Can We Teach AI to Understand Our Business?",
      de: "Können wir KI beibringen, unser Geschäft zu verstehen?",
      sr: "Možemo li naučiti AI da razume naše poslovanje?",
      it: "Possiamo insegnare all'AI a capire il nostro business?"
    },
    body: {
      en: "Yes. Three complementary approaches — all of which Blockstruct deploys for banking clients.",
      de: "Ja. Drei komplementäre Ansätze — und alle drei setzt Blockstruct für Bankkunden ein.",
      sr: "Da. Tri komplementarna pristupa — i sva tri Blockstruct primenjuje za bankarske klijente.",
      it: "Sì. Tre approcci complementari, tutti già implementati da Blockstruct per clienti bancari."
    },
    bullets: {
      en: ["Iterative prompting & instruction — show the AI examples of what 'correct' looks like for your context. No code required; any business analyst can do this. Example: teaching AI to categorise incoming client emails into routing buckets.", "RAG + custom knowledge bases — feed the AI your product sheets, policies, client history. Output is grounded in your data, not the internet. Example: AI that answers 'What are the current terms for our SME credit line?' — accurately.", "Fine-tuning (when it is worth it) — re-train the model on your specific data and preferred outputs. More powerful, more expensive, harder to update. Example: a credit risk classification model that uses UniCredit-specific language."],
      de: ["Iteratives Prompting und Instruktion — zeigen Sie der KI Beispiele dafür, wie „korrekt“ in Ihrem Kontext aussieht. Kein Code erforderlich; das kann jeder Business-Analyst. Beispiel: einer KI beibringen, eingehende Kunden-E-Mails in Routing-Kategorien einzuordnen.", "RAG + benutzerdefinierte Wissensbasen — füttern Sie die KI mit Ihren Produktblättern, Richtlinien und Ihrer Kundenhistorie. Der Output stützt sich auf Ihre Daten, nicht auf das Internet. Beispiel: eine KI, die präzise beantwortet: „Was sind die aktuellen Konditionen für unsere SME-Kreditlinie?“", "Fine-Tuning (wenn es sich lohnt) — trainieren Sie das Modell zusätzlich auf Ihren spezifischen Daten und gewünschten Outputs. Leistungsfähiger, teurer, schwerer zu aktualisieren. Beispiel: ein Modell zur Klassifizierung von Kreditrisiken, das UniCredit-spezifische Sprache verwendet."],
      sr: ["Iterativni prompting i instrukcije — pokažite AI-ju primere kako izgleda \"ispravno\" u vašem kontekstu. Nije potreban kod; to može da radi svaki poslovni analitičar. Primer: učenje AI-ja da kategorizuje dolazne imejlove klijenata u grupe za usmeravanje.", "RAG + prilagođene baze znanja — dajte AI-ju vaše produktne listove, politike, istoriju klijenata. Izlaz se zasniva na vašim podacima, a ne na internetu. Primer: AI koji tačno odgovara na pitanje \"Koji su trenutno uslovi za našu SME kreditnu liniju?\"", "Fine-tuning (kada vredi) — dodatno trenirajte model na vašim specifičnim podacima i željenim izlazima. Moćnije, skuplje, teže za ažuriranje. Primer: model za klasifikaciju kreditnog rizika koji koristi jezik specifičan za UniCredit."],
      it: ["Prompting e istruzioni iterative — mostrare all'AI esempi di ciò che è \"corretto\" nel vostro contesto. Nessun codice richiesto; qualsiasi business analyst può farlo. Esempio: insegnare all'AI a categorizzare le email in arrivo dei clienti in bucket di instradamento.", "RAG + basi di conoscenza personalizzate — fornire all'AI schede prodotto, policy, storico clienti. L'output si basa sui vostri dati, non su Internet. Esempio: un'AI che risponde a \"Quali sono le condizioni attuali della nostra linea di credito per le PMI?\" in modo accurato.", "Fine-tuning (quando ne vale la pena) — riaddestrare il modello sui vostri dati specifici e sugli output preferiti. Più potente, più costoso, più difficile da aggiornare. Esempio: un modello di classificazione del rischio di credito che usa il linguaggio specifico di UniCredit."]
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.12
  },
{
    id: "SOmq39Nhij",
    layout: "quote",
    section: {
      en: "Break",
      de: "Pause",
      sr: "Pauza",
      it: "Pausa"
    },
    quote: {
      en: "The AI will not be taking a break. But unlike the AI, you have a corpus callosum. You will need it for the second half.",
      de: "Die KI wird keine Pause machen. Aber anders als die KI haben Sie ein Corpus Callosum. Sie werden es für die zweite Hälfte brauchen.",
      sr: "AI neće praviti pauzu. Ali za razliku od AI-ja, vi imate corpus callosum. Trebaće vam za drugo poluvreme.",
      it: "L'AI non farà una pausa. Ma, a differenza dell'AI, voi avete un corpo calloso. Vi servirà per la seconda metà."
    },
    attribution: {
      en: "— 15 minutes · Back soon",
      de: "— 15 Minuten · Bis gleich",
      sr: "— 15 minuta · Vraćamo se uskoro",
      it: "— 15 minuti · A tra poco"
    },
    tone: "section-a",
    style: "dark",
    animation: "rise",
    anim_duration: 0.8,
    anim_stagger: 0.22
  },
{
    id: "IaSp7BiuTm",
    layout: "title",
    section: {
      en: "Module 4",
      de: "Modul 4",
      sr: "Modul 4",
      it: "Modulo 4"
    },
    chapter: "04",
    kicker: {
      en: "Module 4 · 25 min",
      de: "Modul 4 · 25 Min.",
      sr: "Modul 4 · 25 min",
      it: "Modulo 4 · 25 min"
    },
    title: {
      en: "What AI Knows (And How to Give It More)",
      de: "Was KI weiß (und wie man ihr mehr gibt)",
      sr: "Šta AI zna (i kako da mu damo više)",
      it: "Che cosa sa l'AI (e come darle di più)"
    },
    subtitle: {
      en: "RAG, tools, embeddings, fine-tuning — the full knowledge toolkit",
      de: "RAG, Tools, Embeddings, Fine-Tuning — das komplette Wissens-Toolkit",
      sr: "RAG, alati, embedding-i, fine-tuning — kompletan alat za znanje",
      it: "RAG, tool, embedding, fine-tuning: l'intero toolkit della conoscenza"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "Mhd7rR7iox",
    layout: "two-col",
    section: {
      en: "Module 4",
      de: "Modul 4",
      sr: "Modul 4",
      it: "Modulo 4"
    },
    chapter: "04",
    kicker: {
      en: "A Fundamental Distinction",
      de: "Eine grundlegende Unterscheidung",
      sr: "Fundamentalna razlika",
      it: "Una distinzione fondamentale"
    },
    title: {
      en: "Two Flavours of Knowledge",
      de: "Zwei Wissensformen",
      sr: "Dva oblika znanja",
      it: "Due forme di conoscenza"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "Parametric — Baked In",
        de: "Parametrisch — eingebrannt",
        sr: "Parametarsko — ugrađeno",
        it: "Parametrica — incorporata"
      },
      body: {
        en: "Everything the model learned during training. Frozen at the cutoff date.",
        de: "Alles, was das Modell während des Trainings gelernt hat. Eingefroren am Cutoff-Datum.",
        sr: "Sve što je model naučio tokom treninga. Zamrznuto na cutoff datum.",
        it: "Tutto ciò che il modello ha appreso durante l'addestramento. Congelato alla data di cutoff."
      },
      bullets: {
        en: ["Incredibly broad, staggeringly deep", "Has a knowledge cutoff — cannot reference recent events", "Cannot be updated without full retraining", "Cannot reference private or proprietary data"],
        de: ["Unglaublich breit, erstaunlich tief", "Hat einen Wissens-Cutoff — kann sich nicht auf jüngste Ereignisse beziehen", "Kann ohne vollständiges Retraining nicht aktualisiert werden", "Kann sich nicht auf private oder proprietäre Daten beziehen"],
        sr: ["Neverovatno široko, zapanjujuće duboko", "Ima knowledge cutoff — ne može da referencira skorije događaje", "Ne može da se ažurira bez potpunog ponovnog treniranja", "Ne može da referencira privatne ili vlasničke podatke"],
        it: ["Incredibilmente ampia, straordinariamente profonda", "Ha una knowledge cutoff: non può fare riferimento a eventi recenti", "Non può essere aggiornata senza un retraining completo", "Non può fare riferimento a dati privati o proprietari"]
      }
    },
    right: {
      title: {
        en: "Contextual — Looked Up",
        de: "Kontextuell — nachgeschlagen",
        sr: "Kontekstualno — dohvaćeno",
        it: "Contestuale — recuperata al momento"
      },
      body: {
        en: "Fetched at runtime and injected into the conversation.",
        de: "Wird zur Laufzeit abgerufen und in die Unterhaltung eingespeist.",
        sr: "Dohvata se u runtime-u i ubacuje u razgovor.",
        it: "Recuperata in runtime e inserita nella conversazione."
      },
      bullets: {
        en: ["Documents retrieved in real time via RAG", "Live data via tools (APIs, databases)", "Client records, policies, product sheets", "Always current — no cutoff issue", "Keeps your data inside your environment"],
        de: ["Dokumente, die in Echtzeit per RAG abgerufen werden", "Live-Daten über Tools (APIs, Datenbanken)", "Kundendaten, Richtlinien, Produktblätter", "Immer aktuell — kein Cutoff-Problem", "Behält Ihre Daten in Ihrer Umgebung"],
        sr: ["Dokumenti dohvaćeni u realnom vremenu putem RAG-a", "Živi podaci putem alata (API-ja, baza podataka)", "Evidencije o klijentima, politike, produktni listovi", "Uvek aktuelno — nema problem cutoff datuma", "Vaši podaci ostaju u vašem okruženju"],
        it: ["Documenti recuperati in tempo reale tramite RAG", "Dati live tramite tool (API, database)", "Record cliente, policy, schede prodotto", "Sempre aggiornata: nessun problema di cutoff", "Mantiene i vostri dati all'interno del vostro ambiente"]
      }
    }
  },
{
    id: "QYmdiLkRY1",
    layout: "single",
    section: {
      en: "Module 4",
      de: "Modul 4",
      sr: "Modul 4",
      it: "Modulo 4"
    },
    chapter: "04",
    kicker: {
      en: "Retrieval-Augmented Generation",
      de: "Retrieval-Augmented Generation",
      sr: "Retrieval-Augmented Generation",
      it: "Retrieval-Augmented Generation"
    },
    title: {
      en: "RAG — The Library Card",
      de: "RAG — Der Bibliotheksausweis",
      sr: "RAG — bibliotečka članska karta",
      it: "RAG — La tessera della biblioteca"
    },
    body: {
      en: "AI that looks things up before answering. The user asks → AI searches your documents → relevant chunks retrieved → answer grounded in your data.",
      de: "KI, die vor dem Antworten Dinge nachschlägt. Der Nutzer fragt → KI durchsucht Ihre Dokumente → relevante Abschnitte werden abgerufen → die Antwort wird in Ihren Daten verankert.",
      sr: "AI koji pre odgovora proverava činjenice. Korisnik pita → AI pretražuje vaše dokumente → relevantni delovi se dohvaćaju → odgovor se zasniva na vašim podacima.",
      it: "AI che cerca le informazioni prima di rispondere. L'utente chiede → l'AI cerca nei vostri documenti → recupera i passaggi rilevanti → la risposta si fonda sui vostri dati."
    },
    bullets: {
      en: ["AI relationship assistant that cites your actual client history, not a hallucinated version of it", "Compliance Q&A that pulls from current DORA, GDPR, AI Act documentation — with source citations", "Sales support: 'What products are available for an Austrian SME with €5M turnover?' — answered from your product catalogue", "Every answer is traceable and auditable — a critical requirement in regulated banking environments"],
      de: ["KI-Beziehungsassistent, der Ihre tatsächliche Kundenhistorie zitiert und keine halluzinierte Version davon", "Compliance-Q&A, das aktuelle DORA-, DSGVO- und AI-Act-Dokumentation heranzieht — mit Quellenangaben", "Vertriebsunterstützung: „Welche Produkte stehen einem österreichischen SME mit 5 Mio. EUR Umsatz zur Verfügung?“ — beantwortet aus Ihrem Produktkatalog", "Jede Antwort ist nachvollziehbar und auditierbar — eine kritische Anforderung in regulierten Bankumgebungen"],
      sr: ["AI asistent za odnose sa klijentima koji citira stvarnu istoriju vaših klijenata, a ne izmišljenu verziju", "Compliance Q&A koji povlači aktuelnu dokumentaciju o DORA, GDPR i AI Act-u — uz citiranje izvora", "Podrška prodaji: \"Koji proizvodi su dostupni za austrijski SME sa prometom od 5 miliona evra?\" — odgovoreno na osnovu vašeg kataloga proizvoda", "Svaki odgovor je sledljiv i podložan reviziji — ključni zahtev u regulisanim bankarskim okruženjima"],
      it: ["Assistente per la relazione con il cliente che cita il vostro storico clienti reale, non una versione allucinata", "Q&A sulla compliance che attinge alla documentazione aggiornata di DORA, GDPR e AI Act, con citazione delle fonti", "Supporto alle vendite: \"Quali prodotti sono disponibili per una PMI austriaca con 5 milioni di euro di fatturato?\" — risposta tratta dal vostro catalogo prodotti", "Ogni risposta è tracciabile e verificabile: un requisito critico negli ambienti bancari regolamentati"]
    },
    tone: "section-b",
    animation: "fade-up"
  },
{
    id: "PqpCKPY6Fu",
    layout: "two-col",
    section: {
      en: "Module 4",
      de: "Modul 4",
      sr: "Modul 4",
      it: "Modulo 4"
    },
    chapter: "04",
    kicker: {
      en: "Extending AI Capability",
      de: "KI-Fähigkeiten erweitern",
      sr: "Proširivanje AI mogućnosti",
      it: "Estendere le capacità dell'AI"
    },
    title: {
      en: "Tools, Embedding, and Fine-Tuning",
      de: "Tools, Embeddings und Fine-Tuning",
      sr: "Tools, Embedding i Fine-Tuning",
      it: "Tool, embedding e fine-tuning"
    },
    tone: "section-b",
    animation: "fade-up",
    left: {
      title: {
        en: "Tools — AI With Hands",
        de: "Tools — KI mit Händen",
        sr: "Tools — AI sa rukama",
        it: "Tool — AI con le mani"
      },
      body: {
        en: "Beyond text in / text out. AI can call APIs, query databases, read emails, run calculations, and trigger workflows.\n\nThe difference between an AI that tells you a client's credit limit and one that actually pulls it from your CRM in real time.",
        de: "Mehr als Text rein / Text raus. KI kann APIs aufrufen, Datenbanken abfragen, E-Mails lesen, Berechnungen ausführen und Workflows auslösen.\n\nDer Unterschied zwischen einer KI, die Ihnen das Kreditlimit eines Kunden nennt, und einer, die es in Echtzeit tatsächlich aus Ihrem CRM zieht.",
        sr: "Više od text in / text out pristupa. AI može da poziva API-je, upituje baze podataka, čita imejlove, radi proračune i pokreće workflow-e.\n\nTo je razlika između AI-ja koji vam kaže koliki je kreditni limit klijenta i onog koji ga zaista povlači iz vašeg CRM-a u realnom vremenu.",
        it: "Oltre il testo in input / testo in output. L'AI può chiamare API, interrogare database, leggere email, eseguire calcoli e attivare workflow.\n\nÈ la differenza tra un'AI che vi dice il limite di credito di un cliente e una che lo recupera davvero dal vostro CRM in tempo reale."
      }
    },
    right: {
      title: {
        en: "Embedding vs Fine-Tuning",
        de: "Embedding vs. Fine-Tuning",
        sr: "Embedding vs Fine-Tuning",
        it: "Embedding vs fine-tuning"
      },
      body: {
        en: "Embedding (Knowledge) — giving someone a much better map of your territory. Use when your AI needs to understand and search your documents: client files, product knowledge bases, policy libraries.\n\nFine-tuning (Behaviour) — years of specialist training in a specific discipline. Use when off-the-shelf behaviour does not fit: a model that writes in UniCredit's exact tone, or classifies documents using internal taxonomy.",
        de: "Embedding (Wissen) — so, als gäbe man jemandem eine viel bessere Karte Ihres Territoriums. Verwenden Sie es, wenn Ihre KI Ihre Dokumente verstehen und durchsuchen muss: Kundendateien, Produktwissensbasen, Richtlinienbibliotheken.\n\nFine-Tuning (Verhalten) — Jahre spezialisierter Ausbildung in einer bestimmten Disziplin. Verwenden Sie es, wenn das Standardverhalten nicht passt: ein Modell, das exakt im Ton von UniCredit schreibt oder Dokumente anhand interner Taxonomien klassifiziert.",
        sr: "Embedding (Knowledge) — kao da nekome date mnogo bolju mapu vaše teritorije. Koristite ga kada vaš AI treba da razume i pretražuje vaše dokumente: dosijee klijenata, baze znanja o proizvodima, biblioteke politika.\n\nFine-tuning (Behaviour) — godine specijalističke obuke u određenoj disciplini. Koristite ga kada gotov model ne odgovara vašim potrebama: model koji piše tačno u tonu UniCredit-a ili klasifikuje dokumente prema internoj taksonomiji.",
        it: "Embedding (Conoscenza) — dare a qualcuno una mappa molto migliore del vostro territorio. Si usa quando la vostra AI deve comprendere e cercare nei vostri documenti: dossier cliente, knowledge base di prodotto, librerie di policy.\n\nFine-tuning (Comportamento) — anni di formazione specialistica in una disciplina specifica. Si usa quando il comportamento standard non basta: un modello che scrive con l'esatto tono di UniCredit o che classifica documenti usando una tassonomia interna."
      }
    }
  },
{
    id: "ffxEosHklw",
    layout: "title",
    section: {
      en: "Module 5",
      de: "Modul 5",
      sr: "Modul 5",
      it: "Modulo 5"
    },
    chapter: "05",
    kicker: {
      en: "Module 5 · 15 min",
      de: "Modul 5 · 15 Min.",
      sr: "Modul 5 · 15 min",
      it: "Modulo 5 · 15 min"
    },
    title: {
      en: "Why AI Lies to Your Face",
      de: "Warum KI Ihnen ins Gesicht lügt",
      sr: "Zašto vam AI laže u lice",
      it: "Perché l’IA vi mente in faccia"
    },
    subtitle: {
      en: "Hallucinations, the split brain, and why confident is not the same as correct",
      de: "Halluzinationen, das geteilte Gehirn und warum selbstbewusst nicht gleich korrekt ist",
      sr: "Halucinacije, podeljeni mozak i zašto samouvereno nije isto što i tačno",
      it: "Allucinazioni, il cervello diviso e perché sembrare sicuri non equivale a essere corretti"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "srb0GTmkR2",
    layout: "single",
    section: {
      en: "Module 5",
      de: "Modul 5",
      sr: "Modul 5",
      it: "Modulo 5"
    },
    chapter: "05",
    kicker: {
      en: "The Neuroscience Parallel",
      de: "Die neurowissenschaftliche Parallele",
      sr: "Paralela iz neuronauke",
      it: "Il parallelo neuroscientifico"
    },
    title: {
      en: "The Most Interesting Brain Surgery You Will Hear About Today",
      de: "Die interessanteste Gehirnoperation, von der Sie heute hören werden",
      sr: "Najzanimljivija operacija mozga o kojoj ćete danas čuti",
      it: "Il più interessante intervento al cervello di cui sentirete parlare oggi"
    },
    body: {
      en: "In the 1960s, surgeons treated severe epilepsy by severing the corpus callosum — the bridge connecting the brain's two hemispheres.",
      de: "In den 1960er-Jahren behandelten Chirurgen schwere Epilepsie, indem sie das Corpus Callosum durchtrennten — die Brücke zwischen den beiden Gehirnhälften.",
      sr: "Šezdesetih godina prošlog veka hirurzi su tešku epilepsiju lečili presecanjem corpus callosuma — mosta koji povezuje dve hemisfere mozga.",
      it: "Negli anni ’60, i chirurghi trattavano le forme gravi di epilessia recidendo il corpo calloso, il ponte che collega i due emisferi cerebrali."
    },
    bullets: {
      en: ["What happened — the right hemisphere could see and control the left hand. The left hemisphere — the verbal one — had no access to this information.", "The remarkable part — when asked why the left hand was doing something, the left hemisphere did not say 'I don't know.' It invented a confident, plausible, completely made-up explanation.", "Sound familiar? This is exactly what LLMs do. When they lack the right information, they do not say 'I don't know.' They generate the most statistically plausible answer — even if it is wrong.", "This is not a bug that will be patched. It is architecturally inherent to how LLMs work."],
      de: ["Was geschah — die rechte Hemisphäre konnte die linke Hand sehen und steuern. Die linke Hemisphäre — die verbale — hatte keinen Zugang zu dieser Information.", "Der bemerkenswerte Teil — als man fragte, warum die linke Hand etwas tue, sagte die linke Hemisphäre nicht: „Ich weiß es nicht.“ Sie erfand eine selbstsichere, plausible, völlig ausgedachte Erklärung.", "Kommt Ihnen das bekannt vor? Genau das tun LLMs. Wenn ihnen die richtige Information fehlt, sagen sie nicht: „Ich weiß es nicht.“ Sie erzeugen die statistisch plausibelste Antwort — auch wenn sie falsch ist.", "Das ist kein Bug, der gepatcht werden wird. Es ist der Architektur von LLMs inhärent."],
      sr: ["Šta se desilo — desna hemisfera je mogla da vidi i kontroliše levu ruku. Leva hemisfera — ona zadužena za govor — nije imala pristup toj informaciji.", "Najzanimljiviji deo — kada su je pitali zašto leva ruka nešto radi, leva hemisfera nije rekla 'ne znam'. Izmislila je samouvereno, uverljivo, potpuno izmišljeno objašnjenje.", "Zvuči poznato? Upravo to rade LLM-ovi. Kada nemaju pravu informaciju, ne kažu 'ne znam'. Generišu statistički najverovatniji odgovor — čak i kada je pogrešan.", "Ovo nije bag koji će biti ispravljen. To je arhitektonski ugrađeno u način na koji LLM-ovi funkcionišu."],
      it: ["Che cosa accadde: l’emisfero destro poteva vedere e controllare la mano sinistra. L’emisfero sinistro, quello verbale, non aveva accesso a queste informazioni.", "La parte straordinaria: quando gli veniva chiesto perché la mano sinistra stesse facendo qualcosa, l’emisfero sinistro non diceva «Non lo so». Inventava una spiegazione sicura di sé, plausibile e completamente falsa.", "Vi suona familiare? È esattamente ciò che fanno gli LLM. Quando non hanno l’informazione giusta, non dicono «Non lo so». Generano la risposta statisticamente più plausibile, anche se è sbagliata.", "Non è un bug che verrà corretto con una patch. È una caratteristica intrinseca dell’architettura con cui funzionano gli LLM."]
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.12
  },
{
    id: "wkQbD7Z10g",
    layout: "two-col",
    section: {
      en: "Module 5",
      de: "Modul 5",
      sr: "Modul 5",
      it: "Modulo 5"
    },
    chapter: "05",
    kicker: {
      en: "Prevention Strategies",
      de: "Präventionsstrategien",
      sr: "Strategije prevencije",
      it: "Strategie di prevenzione"
    },
    title: {
      en: "Hallucinations in Banking — and How We Prevent Them",
      de: "Halluzinationen im Banking — und wie wir sie verhindern",
      sr: "Halucinacije u bankarstvu — i kako ih sprečavamo",
      it: "Le allucinazioni nel banking e come le preveniamo"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "The Stakes",
        de: "Worum es geht",
        sr: "Šta je na kocki",
        it: "La posta in gioco"
      },
      body: {
        en: "Wrong regulatory citation, fabricated client history, incorrect product terms — all delivered with complete confidence.\n\nRAG grounding — force the AI to retrieve and cite sources. If it cannot find a source, it says so. Answers are traceable and auditable.\n\nStructured outputs — constrain the answer format. A response with 'Confidence: 87% | Source: Product Manual p.12' is much harder to hallucinate convincingly.",
        de: "Falsches regulatorisches Zitat, erfundene Kundenhistorie, inkorrekte Produktkonditionen — alles mit völliger Sicherheit vorgetragen.\n\nRAG-Grounding — zwingen Sie die KI dazu, Quellen abzurufen und zu zitieren. Wenn sie keine Quelle findet, sagt sie das. Antworten sind nachvollziehbar und auditierbar.\n\nStrukturierte Outputs — beschränken Sie das Antwortformat. Eine Antwort wie „Konfidenz: 87 % | Quelle: Produkthandbuch S. 12“ ist deutlich schwerer überzeugend zu halluzinieren.",
        sr: "Pogrešan regulatorni citat, izmišljena istorija klijenta, netačni uslovi proizvoda — sve isporučeno sa potpunim samopouzdanjem.\n\nRAG grounding — primorajte AI da pronađe i navede izvore. Ako ne može da pronađe izvor, to i kaže. Odgovori su sledljivi i podobni za reviziju.\n\nStrukturisani izlazi — ograničite format odgovora. Odgovor tipa 'Pouzdanost: 87% | Izvor: Priručnik za proizvod str. 12' mnogo je teže ubedljivo halucinirati.",
        it: "Una citazione normativa errata, uno storico cliente inventato, condizioni di prodotto scorrette: tutto presentato con assoluta sicurezza.\n\nAncoraggio con RAG: costringere l’IA a recuperare e citare le fonti. Se non trova una fonte, lo dice. Le risposte sono tracciabili e verificabili.\n\nOutput strutturati: vincolare il formato della risposta. Una risposta con «Livello di confidenza: 87% | Fonte: Manuale di prodotto p. 12» è molto più difficile da allucinare in modo convincente."
      }
    },
    right: {
      title: {
        en: "Design Principles",
        de: "Designprinzipien",
        sr: "Principi dizajna",
        it: "Principi di progettazione"
      },
      body: {
        en: "Human-in-the-loop — for high-stakes outputs such as credit decisions and compliance advice, AI drafts and a human approves. Not a workaround. A design principle.\n\nEval & testing — build test sets of known-correct answers. Run them regularly. Measure hallucination rates. Treat it like any other quality metric.",
        de: "Human-in-the-loop — bei risikoreichen Outputs wie Kreditentscheidungen und Compliance-Empfehlungen erstellt die KI einen Entwurf und ein Mensch genehmigt ihn. Kein Workaround. Ein Designprinzip.\n\nEvaluation und Testing — bauen Sie Testsets mit bekannten korrekten Antworten. Führen Sie sie regelmäßig aus. Messen Sie Halluzinationsraten. Behandeln Sie das wie jede andere Qualitätsmetrik.",
        sr: "Human-in-the-loop — za visokorizične izlaze, kao što su kreditne odluke i saveti u vezi sa usklađenošću, AI priprema nacrt, a čovek odobrava. To nije zaobilazno rešenje. To je princip dizajna.\n\nEvaluacija i testiranje — napravite skupove testova sa poznato tačnim odgovorima. Pokrećite ih redovno. Merite stope halucinacija. Tretirajte to kao bilo koju drugu metriku kvaliteta.",
        it: "Human-in-the-loop: per output ad alto rischio, come decisioni sul credito e consulenza di compliance, l’IA prepara una bozza e un essere umano approva. Non è un ripiego. È un principio di progettazione.\n\nValutazione e test: costruire set di test con risposte note come corrette. Eseguirli regolarmente. Misurare i tassi di allucinazione. Trattarlo come qualsiasi altra metrica di qualità."
      }
    }
  },
{
    id: "LNtqiUQdLm",
    layout: "title",
    section: {
      en: "Module 6",
      de: "Modul 6",
      sr: "Modul 6",
      it: "Modulo 6"
    },
    chapter: "06",
    kicker: {
      en: "Module 6 · 25 min",
      de: "Modul 6 · 25 Min.",
      sr: "Modul 6 · 25 min",
      it: "Modulo 6 · 25 min"
    },
    title: {
      en: "Talking to AI Like a Pro",
      de: "Mit KI sprechen wie ein Profi",
      sr: "Kako razgovarati sa AI kao profesionalac",
      it: "Parlare con l’IA da professionisti"
    },
    subtitle: {
      en: "Prompt engineering, context engineering, and the art of the well-placed nudge",
      de: "Prompt Engineering, Context Engineering und die Kunst des gut platzierten Anstoßes",
      sr: "Prompt engineering, context engineering i veština pravovremenog usmeravanja",
      it: "Prompt engineering, context engineering e l’arte della spinta ben dosata"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "sh9hQGiWPh",
    layout: "two-col",
    section: {
      en: "Module 6",
      de: "Modul 6",
      sr: "Modul 6",
      it: "Modulo 6"
    },
    chapter: "06",
    kicker: {
      en: "Prompt Engineering",
      de: "Prompt Engineering",
      sr: "Prompt Engineering",
      it: "Prompt Engineering"
    },
    title: {
      en: "The Brief That Actually Gets the Job Done",
      de: "Das Briefing, das den Job wirklich erledigt",
      sr: "Brief koji zaista donosi rezultat",
      it: "Il brief che porta davvero a termine il lavoro"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "The Vague Prompt",
        de: "Der vage Prompt",
        sr: "Nejasan prompt",
        it: "Il prompt vago"
      },
      body: {
        en: "\"Summarise this client meeting.\"\n\nResult: a generic 3-line paragraph that misses the point, invents a next step, and does not match your format.\n\nYou would not tell a new analyst 'make this better.' You would give context, objectives, constraints, and examples. Prompt engineering is exactly that — applied to AI.",
        de: "„Fasse dieses Kundengespräch zusammen.“\n\nErgebnis: ein generischer Absatz mit drei Zeilen, der den Punkt verfehlt, den nächsten Schritt erfindet und nicht Ihrem Format entspricht.\n\nEinem neuen Analysten würden Sie nicht sagen: „Mach das besser.“ Sie würden Kontext, Ziele, Einschränkungen und Beispiele geben. Genau das ist Prompt Engineering — angewendet auf KI.",
        sr: "\"Sažmi ovaj sastanak sa klijentom.\"\n\nRezultat: generički pasus od tri reda koji promašuje poentu, izmišlja sledeći korak i ne prati vaš format.\n\nNovom analitičaru ne biste rekli 'učini ovo boljim'. Dali biste mu kontekst, ciljeve, ograničenja i primere. Prompt engineering je upravo to — primenjeno na AI.",
        it: "«Riassumi questo incontro con il cliente.»\n\nRisultato: un generico paragrafo di tre righe che manca il punto, inventa un passo successivo e non rispetta il vostro formato.\n\nNon direste a un nuovo analista «migliora questa cosa». Gli dareste contesto, obiettivi, vincoli ed esempi. Il prompt engineering è esattamente questo, applicato all’IA."
      }
    },
    right: {
      title: {
        en: "The Engineered Prompt",
        de: "Der konstruierte Prompt",
        sr: "Dizajniran prompt",
        it: "Il prompt progettato"
      },
      body: {
        en: "\"You are a senior relationship manager at UniCredit. Summarise this client meeting in 5 bullet points: client concerns raised, products discussed, commitments made, risks noted, and next actions with dates. Tone: professional, concise. Output in English.\"\n\nResult: structured, accurate, immediately usable. Same model. Completely different output.",
        de: "„Sie sind Senior Relationship Manager bei UniCredit. Fassen Sie dieses Kundengespräch in 5 Bullet Points zusammen: geäußerte Kundensorgen, besprochene Produkte, eingegangene Verpflichtungen, identifizierte Risiken und nächste Schritte mit Daten. Ton: professionell, prägnant. Ausgabe auf Englisch.“\n\nErgebnis: strukturiert, präzise, sofort nutzbar. Dasselbe Modell. Vollkommen anderer Output.",
        sr: "\"Vi ste senior relationship manager u UniCredit-u. Sažmite ovaj sastanak sa klijentom u 5 stavki: istaknute brige klijenta, diskutovani proizvodi, preuzete obaveze, uočeni rizici i sledeće aktivnosti sa datumima. Ton: profesionalan, sažet. Izlaz na engleskom.\"\n\nRezultat: strukturisano, tačno, odmah upotrebljivo. Isti model. Potpuno drugačiji izlaz.",
        it: "«Sei un senior relationship manager di UniCredit. Riassumi questo incontro con il cliente in 5 punti elenco: preoccupazioni espresse dal cliente, prodotti discussi, impegni presi, rischi rilevati e azioni successive con date. Tono: professionale, conciso. Output in inglese.»\n\nRisultato: strutturato, accurato, immediatamente utilizzabile. Stesso modello. Output completamente diverso."
      }
    }
  },
{
    id: "f7BHsr6H31",
    layout: "single",
    section: {
      en: "Module 6",
      de: "Modul 6",
      sr: "Modul 6",
      it: "Modulo 6"
    },
    chapter: "06",
    kicker: {
      en: "The Next Frontier",
      de: "Die nächste Grenze",
      sr: "Sledeća granica",
      it: "La prossima frontiera"
    },
    title: {
      en: "Context Engineering — Designing the Entire Office",
      de: "Context Engineering — Das ganze Büro gestalten",
      sr: "Context Engineering — dizajniranje cele kancelarije",
      it: "Context engineering: progettare l’intero ufficio"
    },
    body: {
      en: "Prompt engineering is writing a good brief. Context engineering is designing the entire office. Everything the AI sees shapes its response.",
      de: "Prompt Engineering ist das Schreiben eines guten Briefings. Context Engineering ist das Gestalten des ganzen Büros. Alles, was die KI sieht, formt ihre Antwort.",
      sr: "Prompt engineering je pisanje dobrog briefa. Context engineering je dizajniranje cele kancelarije. Sve što AI vidi oblikuje njegov odgovor.",
      it: "Il prompt engineering significa scrivere un buon brief. Il context engineering significa progettare l’intero ufficio. Tutto ciò che l’IA vede modella la sua risposta."
    },
    bullets: {
      en: ["System instructions — role, tone, output format, constraints, what to refuse. Defined once, applied always.", "Conversation history — everything said so far; what the AI remembers in this session.", "Retrieved documents — your RAG output; the specific chunks fetched for this question.", "User message — the actual prompt; just the top layer of a much richer stack.", "Examples — demonstrating the desired output format through few-shot learning.", "The teams that master context engineering will produce AI outputs that feel custom-built — because they are."],
      de: ["Systemanweisungen — Rolle, Ton, Ausgabeformat, Einschränkungen, was abzulehnen ist. Einmal definiert, immer angewendet.", "Gesprächshistorie — alles, was bisher gesagt wurde; was die KI in dieser Sitzung erinnert.", "Abgerufene Dokumente — Ihr RAG-Output; die konkreten Abschnitte, die für diese Frage geholt wurden.", "Nutzernachricht — der eigentliche Prompt; nur die oberste Schicht eines viel reicheren Stacks.", "Beispiele — das gewünschte Ausgabeformat durch Few-Shot-Learning demonstrieren.", "Teams, die Context Engineering beherrschen, werden KI-Outputs erzeugen, die maßgeschneidert wirken — weil sie es sind."],
      sr: ["Sistemska uputstva — uloga, ton, format izlaza, ograničenja, šta treba odbiti. Definisano jednom, primenjuje se uvek.", "Istorija razgovora — sve što je do sada rečeno; ono što AI pamti u ovoj sesiji.", "Preuzeti dokumenti — vaš RAG izlaz; konkretni delovi dokumenata dohvaćeni za ovo pitanje.", "Korisnička poruka — stvarni prompt; samo gornji sloj mnogo bogatijeg sklopa.", "Primeri — prikaz željenog formata izlaza kroz few-shot učenje.", "Timovi koji ovladaju context engineeringom proizvodiće AI izlaze koji deluju kao da su pravljeni po meri — jer to i jesu."],
      it: ["Istruzioni di sistema: ruolo, tono, formato dell’output, vincoli, ciò che va rifiutato. Definite una volta, applicate sempre.", "Cronologia della conversazione: tutto ciò che è stato detto finora; ciò che l’IA ricorda in questa sessione.", "Documenti recuperati: l’output del vostro RAG; gli specifici estratti recuperati per questa domanda.", "Messaggio dell’utente: il prompt vero e proprio; solo lo strato superiore di una struttura molto più ricca.", "Esempi: mostrare il formato di output desiderato tramite few-shot learning.", "I team che padroneggeranno il context engineering produrranno output dell’IA che sembreranno costruiti su misura, perché lo saranno davvero."]
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.15
  },
{
    id: "iywkin5AbY",
    layout: "title",
    section: {
      en: "Module 7",
      de: "Modul 7",
      sr: "Modul 7",
      it: "Modulo 7"
    },
    chapter: "07",
    kicker: {
      en: "Module 7 · 20 min",
      de: "Modul 7 · 20 Min.",
      sr: "Modul 7 · 20 min",
      it: "Modulo 7 · 20 min"
    },
    title: {
      en: "AI That Does Things",
      de: "KI, die Dinge tut",
      sr: "AI koji obavlja zadatke",
      it: "L’IA che fa cose"
    },
    subtitle: {
      en: "Agents, tools, MCP, skills — when AI stops answering and starts acting",
      de: "Agents, Tools, MCP, Skills — wenn KI aufhört zu antworten und anfängt zu handeln",
      sr: "Agenti, alati, MCP, skills — kada AI prestane samo da odgovara i počne da deluje",
      it: "Agenti, tool, MCP, skill: quando l’IA smette di rispondere e comincia ad agire"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "H4kznOalsO",
    layout: "single",
    section: {
      en: "Module 7",
      de: "Modul 7",
      sr: "Modul 7",
      it: "Modulo 7"
    },
    chapter: "07",
    kicker: {
      en: "The Evolution",
      de: "Die Evolution",
      sr: "Evolucija",
      it: "L’evoluzione"
    },
    title: {
      en: "From Chatbot to Agent",
      de: "Vom Chatbot zum Agenten",
      sr: "Od chatbota do agenta",
      it: "Dal chatbot all’agente"
    },
    body: {
      en: "Three generations of AI interaction — each a step change in what is possible.",
      de: "Drei Generationen der KI-Interaktion — jede ein Sprung darin, was möglich ist.",
      sr: "Tri generacije AI interakcije — svaka predstavlja skok u onome što je moguće.",
      it: "Tre generazioni di interazione con l’IA: ognuna rappresenta un salto di livello in ciò che è possibile."
    },
    bullets: {
      en: ["Chatbot (2022) — you ask, it answers. One question, one response, no memory.", "Assistant (2023) — you give context, it helps. Remembers the session, uses your documents, follows your style.", "Agent (2025+) — you give a goal, it figures out the steps. Plans, uses tools, calls sub-agents, delivers a result.", "Banking agent example: receive a client onboarding request → check KYC database → retrieve product eligibility rules → draft welcome email → route to relationship manager for approval."],
      de: ["Chatbot (2022) — Sie fragen, er antwortet. Eine Frage, eine Antwort, kein Gedächtnis.", "Assistant (2023) — Sie geben Kontext, er hilft. Er erinnert sich an die Sitzung, nutzt Ihre Dokumente und folgt Ihrem Stil.", "Agent (2025+) — Sie geben ein Ziel, er erarbeitet die Schritte. Plant, nutzt Tools, ruft Sub-Agents auf, liefert ein Ergebnis.", "Beispiel für einen Banking-Agenten: Anfrage für Kunden-Onboarding erhalten → KYC-Datenbank prüfen → Regeln zur Produktberechtigung abrufen → Willkommens-E-Mail entwerfen → an den Relationship Manager zur Freigabe weiterleiten."],
      sr: ["Chatbot (2022) — vi pitate, on odgovara. Jedno pitanje, jedan odgovor, bez memorije.", "Assistant (2023) — dajete kontekst, on pomaže. Pamti sesiju, koristi vaše dokumente, prati vaš stil.", "Agent (2025+) — dajete cilj, on sam razrađuje korake. Planira, koristi alate, poziva sub-agente, isporučuje rezultat.", "Primer bankarskog agenta: primi zahtev za onboarding klijenta → proveri KYC bazu → preuzme pravila podobnosti proizvoda → sastavi imejl dobrodošlice → prosledi relationship manageru na odobrenje."],
      it: ["Chatbot (2022): voi chiedete, lui risponde. Una domanda, una risposta, nessuna memoria.", "Assistant (2023): voi fornite contesto, lui vi aiuta. Ricorda la sessione, usa i vostri documenti, segue il vostro stile.", "Agent (2025+): voi date un obiettivo, lui capisce i passaggi necessari. Pianifica, usa strumenti, chiama sub-agenti, consegna un risultato.", "Esempio di agente bancario: riceve una richiesta di onboarding cliente → controlla il database KYC → recupera le regole di eleggibilità dei prodotti → redige l’email di benvenuto → la inoltra al relationship manager per approvazione."]
    },
    tone: "section-b",
    animation: "stagger",
    anim_stagger: 0.15
  },
{
    id: "1w7wMMsNw6",
    layout: "two-col",
    section: {
      en: "Module 7",
      de: "Modul 7",
      sr: "Modul 7",
      it: "Modulo 7"
    },
    chapter: "07",
    kicker: {
      en: "The Infrastructure of Action",
      de: "Die Infrastruktur des Handelns",
      sr: "Infrastruktura delovanja",
      it: "L’infrastruttura dell’azione"
    },
    title: {
      en: "Tools, MCP, and Skills",
      de: "Tools, MCP und Skills",
      sr: "Alati, MCP i Skills",
      it: "Tool, MCP e Skill"
    },
    tone: "section-b",
    animation: "fade-up",
    left: {
      title: {
        en: "MCP — Model Context Protocol",
        de: "MCP — Model Context Protocol",
        sr: "MCP — Model Context Protocol",
        it: "MCP — Model Context Protocol"
      },
      body: {
        en: "The USB port of AI. One standard protocol that lets any AI model connect to any tool: your CRM, email, document store, databases, calendar.\n\nConnected today at UniCredit via Google Cloud: Google Workspace, BigQuery, Cloud Storage — all MCP-ready.\n\nBlockstruct builds MCP connectors to your existing systems.",
        de: "Der USB-Port der KI. Ein Standardprotokoll, das es jedem KI-Modell erlaubt, sich mit jedem Tool zu verbinden: Ihrem CRM, E-Mail, Dokumentenspeicher, Datenbanken, Kalender.\n\nHeute bei UniCredit über Google Cloud verbunden: Google Workspace, BigQuery, Cloud Storage — alles MCP-ready.\n\nBlockstruct baut MCP-Connectoren für Ihre bestehenden Systeme.",
        sr: "USB priključak za AI. Jedan standardni protokol koji omogućava da se bilo koji AI model poveže sa bilo kojim alatom: vašim CRM-om, imejlom, skladištem dokumenata, bazama podataka, kalendarom.\n\nDanas je u UniCredit-u preko Google Cloud-a povezano: Google Workspace, BigQuery, Cloud Storage — sve spremno za MCP.\n\nBlockstruct gradi MCP konektore za vaše postojeće sisteme.",
        it: "La porta USB dell’IA. Un protocollo standard che consente a qualsiasi modello di IA di collegarsi a qualsiasi strumento: il vostro CRM, l’email, l’archivio documentale, i database, il calendario.\n\nOggi connessi in UniCredit tramite Google Cloud: Google Workspace, BigQuery, Cloud Storage, tutti pronti per MCP.\n\nBlockstruct costruisce connettori MCP per i vostri sistemi esistenti."
      }
    },
    right: {
      title: {
        en: "Skills — Reusable AI Capabilities",
        de: "Skills — Wiederverwendbare KI-Fähigkeiten",
        sr: "Skills — ponovo upotrebljive AI sposobnosti",
        it: "Skill — capacità riutilizzabili dell’IA"
      },
      body: {
        en: "Think of Skills as apps, but for AI. A Skill bundles a prompt, tools, context, and behaviour into a deployable package. Once built, reusable by anyone in the organisation.",
        de: "Stellen Sie sich Skills wie Apps vor, aber für KI. Ein Skill bündelt Prompt, Tools, Kontext und Verhalten in einem ausrollbaren Paket. Einmal gebaut, kann er von jedem in der Organisation wiederverwendet werden.",
        sr: "Posmatrajte Skills kao aplikacije, ali za AI. Skill objedinjuje prompt, alate, kontekst i ponašanje u paket spreman za primenu. Kada se jednom izgradi, svako u organizaciji može ponovo da ga koristi.",
        it: "Pensate alle Skill come ad app, ma per l’IA. Una Skill raggruppa prompt, strumenti, contesto e comportamento in un pacchetto distribuibile. Una volta costruita, può essere riutilizzata da chiunque nell’organizzazione."
      },
      bullets: {
        en: ["Client meeting summariser", "Credit application pre-screener", "Regulatory Q&A assistant", "Sales pitch personaliser"],
        de: ["Zusammenfassung von Kundengesprächen", "Vorprüfung von Kreditanträgen", "Assistent für regulatorische Fragen und Antworten", "Personalisierung von Sales Pitches"],
        sr: ["Sažimanje sastanaka sa klijentima", "Predselekcija kreditnih prijava", "Asistent za regulatorna pitanja i odgovore", "Personalizacija prodajnih ponuda"],
        it: ["Riassuntore di incontri con i clienti", "Pre-screening delle richieste di credito", "Assistente Q&A normativo", "Personalizzatore di sales pitch"]
      }
    }
  },
{
    id: "tliiQ2WZJ8",
    layout: "title",
    section: {
      en: "Module 8",
      de: "Modul 8",
      sr: "Modul 8",
      it: "Modulo 8"
    },
    chapter: "08",
    kicker: {
      en: "Module 8 · 10 min",
      de: "Modul 8 · 10 Min.",
      sr: "Modul 8 · 10 min",
      it: "Modulo 8 · 10 min"
    },
    title: {
      en: "The Big Picture",
      de: "Das große Bild",
      sr: "Šira slika",
      it: "Il quadro d’insieme"
    },
    subtitle: {
      en: "Where LLMs fit in the map of intelligence — and what remains distinctly human",
      de: "Wo LLMs in die Landkarte der Intelligenz passen — und was unverwechselbar menschlich bleibt",
      sr: "Gde se LLM-ovi uklapaju na mapi inteligencije — i šta ostaje izrazito ljudsko",
      it: "Dove si collocano gli LLM nella mappa dell’intelligenza e che cosa resta distintamente umano"
    },
    tone: "section-b",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "Ep3QR7XNwD",
    layout: "two-col",
    section: {
      en: "Module 8",
      de: "Modul 8",
      sr: "Modul 8",
      it: "Modulo 8"
    },
    chapter: "08",
    kicker: {
      en: "Revisiting the Framework",
      de: "Zurück zum Framework",
      sr: "Povratak na okvir",
      it: "Rivedere il framework"
    },
    title: {
      en: "Back to the Brain — Where Is AI Right Now?",
      de: "Zurück zum Gehirn — Wo steht KI heute?",
      sr: "Nazad ka mozgu — gde je AI danas?",
      it: "Torniamo al cervello: dove si trova l’IA in questo momento?"
    },
    tone: "section-b",
    animation: "stagger",
    left: {
      title: {
        en: "Where AI Is Today",
        de: "Wo KI heute ist",
        sr: "Gde je AI danas",
        it: "Dove si trova oggi l’IA"
      },
      body: {
        en: "Left Thinking — serial logic, pattern recognition, language. LLMs operate fully in this quadrant.\n\nLeft Emotional — reward, habit, refinement of behaviour. Reinforcement learning is actively learning this territory.\n\nRight Thinking — holistic reasoning, creative connection, contextual leaps. Not yet within AI's reach.",
        de: "Linkes Denken — serielle Logik, Mustererkennung, Sprache. LLMs operieren vollständig in diesem Quadranten.\n\nLinke Emotionalität — Belohnung, Gewohnheit, Verfeinerung von Verhalten. Reinforcement Learning erschließt dieses Gebiet aktiv.\n\nRechtes Denken — ganzheitliches Denken, kreative Verknüpfungen, kontextuelle Sprünge. Noch außerhalb der Reichweite von KI.",
        sr: "Levo mišljenje — sekvencijalna logika, prepoznavanje obrazaca, jezik. LLM-ovi u potpunosti funkcionišu u ovom kvadrantu.\n\nLevo emocionalno — nagrada, navika, usavršavanje ponašanja. Reinforcement learning aktivno uči ovu teritoriju.\n\nDesno mišljenje — holističko rasuđivanje, kreativno povezivanje, kontekstualni skokovi. Još nije u domašaju AI-ja.",
        it: "Pensiero sinistro: logica seriale, riconoscimento di pattern, linguaggio. Gli LLM operano pienamente in questo quadrante.\n\nEmotività sinistra: ricompensa, abitudine, affinamento del comportamento. Il reinforcement learning sta imparando attivamente questo territorio.\n\nPensiero destro: ragionamento olistico, connessioni creative, salti contestuali. Non è ancora alla portata dell’IA."
      }
    },
    right: {
      title: {
        en: "What Remains Yours",
        de: "Was Ihnen bleibt",
        sr: "Šta ostaje vaše",
        it: "Ciò che resta vostro"
      },
      body: {
        en: "Right Emotional — empathy, presence, genuine human connection and intuition.\n\nThis is not temporary. The architecture of current AI systems does not touch this quadrant.\n\nYour judgment, relationships, and context remain your competitive moat — and the reason AI works best as an amplifier, not a replacement.",
        de: "Rechte Emotionalität — Empathie, Präsenz, echte menschliche Verbindung und Intuition.\n\nDas ist nicht vorübergehend. Die Architektur heutiger KI-Systeme berührt diesen Quadranten nicht.\n\nIhr Urteilsvermögen, Ihre Beziehungen und Ihr Kontext bleiben Ihr Wettbewerbsvorteil — und der Grund, warum KI am besten als Verstärker funktioniert, nicht als Ersatz.",
        sr: "Desno emocionalno — empatija, prisutnost, autentična ljudska povezanost i intuicija.\n\nOvo nije privremeno. Arhitektura današnjih AI sistema ne dotiče ovaj kvadrant.\n\nVaša procena, odnosi i kontekst ostaju vaša konkurentska prednost — i razlog zbog kog AI najbolje funkcioniše kao pojačivač, a ne zamena.",
        it: "Emotività destra: empatia, presenza, connessione umana autentica e intuizione.\n\nNon è una situazione temporanea. L’architettura degli attuali sistemi di IA non tocca questo quadrante.\n\nIl vostro giudizio, le vostre relazioni e il vostro contesto restano il vostro vantaggio competitivo, ed è il motivo per cui l’IA funziona al meglio come amplificatore, non come sostituto."
      }
    }
  },
{
    id: "YR0UtNHSKa",
    layout: "single",
    section: {
      en: "Module 8",
      de: "Modul 8",
      sr: "Modul 8",
      it: "Modulo 8"
    },
    chapter: "08",
    kicker: {
      en: "An Honest Forecast",
      de: "Eine ehrliche Prognose",
      sr: "Iskrena prognoza",
      it: "Una previsione onesta"
    },
    title: {
      en: "Where Is This Going?",
      de: "Wohin geht das?",
      sr: "Kuda ovo vodi?",
      it: "Dove sta andando tutto questo?"
    },
    body: {
      en: "What is coming — with realistic timelines.",
      de: "Was kommt — mit realistischen Zeithorizonten.",
      sr: "Šta dolazi — uz realne vremenske okvire.",
      it: "Che cosa ci aspetta, con tempistiche realistiche."
    },
    bullets: {
      en: ["12–18 months — agents that reliably execute multi-step banking workflows; memory so AI remembers your clients across sessions; multimodal reading of contracts, charts, and scanned documents together", "2–3 years — better reasoning under uncertainty, reducing hallucinations further; smaller, cheaper, on-premise deployable models; regulatory clarity as AI Act compliance tooling matures", "Ongoing — the boundary between 'AI assistant' and 'AI colleague' continues to blur; the professionals who thrive will know how to ask the right questions; your judgment, relationships, and context remain your competitive moat"],
      de: ["12–18 Monate — Agenten, die mehrstufige Bank-Workflows zuverlässig ausführen; Gedächtnis, damit KI sich über Sitzungen hinweg an Ihre Kunden erinnert; multimodales Lesen von Verträgen, Diagrammen und gescannten Dokumenten zusammen", "2–3 Jahre — besseres Denken unter Unsicherheit, mit weiter sinkenden Halluzinationen; kleinere, günstigere, on-premise einsetzbare Modelle; regulatorische Klarheit, während AI-Act-Compliance-Tooling reift", "Fortlaufend — die Grenze zwischen „KI-Assistent“ und „KI-Kollege“ verschwimmt weiter; erfolgreiche Fachkräfte werden wissen, wie man die richtigen Fragen stellt; Ihr Urteilsvermögen, Ihre Beziehungen und Ihr Kontext bleiben Ihr Wettbewerbsvorteil"],
      sr: ["12–18 meseci — agenti koji pouzdano izvršavaju višekoračne bankarske tokove rada; memorija zahvaljujući kojoj AI pamti vaše klijente kroz više sesija; multimodalno čitanje ugovora, grafikona i skeniranih dokumenata zajedno", "2–3 godine — bolje rasuđivanje u uslovima neizvesnosti, uz dalje smanjenje halucinacija; manji, jeftiniji modeli koji se mogu implementirati on-premise; regulatorna jasnoća kako alati za usklađenost sa AI Act-om sazrevaju", "Kontinuirano — granica između 'AI asistenta' i 'AI kolege' nastavlja da se briše; profesionalci koji će napredovati znaće kako da postavljaju prava pitanja; vaša procena, odnosi i kontekst ostaju vaša konkurentska prednost"],
      it: ["12-18 mesi: agenti in grado di eseguire in modo affidabile workflow bancari multi-step; memoria, così che l’IA ricordi i vostri clienti tra una sessione e l’altra; lettura multimodale di contratti, grafici e documenti scansionati insieme.", "2-3 anni: migliore ragionamento in condizioni di incertezza, con ulteriore riduzione delle allucinazioni; modelli più piccoli, meno costosi e distribuibili on-premise; maggiore chiarezza normativa man mano che maturano gli strumenti di compliance per l’AI Act.", "In corso: il confine tra «assistente IA» e «collega IA» continuerà a sfumare; i professionisti che avranno successo sapranno porre le domande giuste; il vostro giudizio, le vostre relazioni e il vostro contesto resteranno il vostro vantaggio competitivo."]
    },
    tone: "section-b",
    animation: "fade-up"
  },
{
    id: "6BcHTTaNy2",
    layout: "title",
    section: {
      en: "Application",
      de: "Anwendung",
      sr: "Primena",
      it: "Applicazione"
    },
    title: {
      en: "From Understanding to Application",
      de: "Vom Verständnis zur Anwendung",
      sr: "Od razumevanja do primene",
      it: "Dalla comprensione all’applicazione"
    },
    subtitle: {
      en: "Your role as an AI-literate leader at UniCredit",
      de: "Ihre Rolle als KI-kompetente Führungskraft bei UniCredit",
      sr: "Vaša uloga kao AI-pismenog lidera u UniCredit-u",
      it: "Il vostro ruolo come leader competenti in materia di IA in UniCredit"
    },
    tone: "section-a",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  },
{
    id: "eazNNdAgMC",
    layout: "two-col",
    section: {
      en: "Application",
      de: "Anwendung",
      sr: "Primena",
      it: "Applicazione"
    },
    kicker: {
      en: "Your New Role",
      de: "Ihre neue Rolle",
      sr: "Vaša nova uloga",
      it: "Il vostro nuovo ruolo"
    },
    title: {
      en: "You Are the Architect. AI Is the Contractor.",
      de: "Sie sind der Architekt. KI ist der Auftragnehmer.",
      sr: "Vi ste arhitekta. AI je izvođač.",
      it: "Voi siete l’architetto. L’IA è l’appaltatore."
    },
    tone: "section-a",
    animation: "stagger",
    left: {
      title: {
        en: "Identify & Evaluate",
        de: "Identifizieren & bewerten",
        sr: "Identifikujte i procenite",
        it: "Identificare e valutare"
      },
      body: {
        en: "Which processes are document-heavy, rule-based, and high-volume? Those are prime candidates. Which involve genuine human judgment and relationship trust? Protect those.\n\nAsk: 'How do you know?' Demand citations. Request confidence levels. Never accept a confident AI output at face value without understanding its grounding.",
        de: "Welche Prozesse sind dokumentenlastig, regelbasiert und volumenstark? Das sind Top-Kandidaten. Welche erfordern echtes menschliches Urteilsvermögen und Beziehungsvertrauen? Diese müssen geschützt werden.\n\nFragen Sie: „Woher wissen Sie das?“ Verlangen Sie Zitate. Fragen Sie nach Konfidenzniveaus. Akzeptieren Sie niemals einen selbstsicheren KI-Output ungeprüft, ohne seine Verankerung zu verstehen.",
        sr: "Koji procesi su opterećeni dokumentima, zasnovani na pravilima i velikog obima? To su glavni kandidati. Koji podrazumevaju istinsku ljudsku procenu i poverenje u odnosu? Njih zaštitite.\n\nPitajte: 'Kako to znaš?' Tražite citate. Zahtevajte nivoe pouzdanosti. Nikada ne prihvatajte samouveren AI izlaz zdravo za gotovo bez razumevanja na čemu je zasnovan.",
        it: "Quali processi sono ad alta intensità documentale, basati su regole e ad alto volume? Sono candidati ideali. Quali invece implicano vero giudizio umano e fiducia relazionale? Quelli vanno protetti.\n\nChiedete: «Come lo sai?». Pretendete citazioni. Richiedete livelli di confidenza. Non accettate mai un output dell’IA sicuro di sé senza capirne il fondamento."
      }
    },
    right: {
      title: {
        en: "Design & Measure",
        de: "Gestalten & messen",
        sr: "Dizajnirajte i merite",
        it: "Progettare e misurare"
      },
      body: {
        en: "The best outcomes come from AI + human, not AI instead of human. Your job is to design the handoff points — where does AI draft, where do you review and decide?\n\nDefine success metrics in measurable terms: time saved per relationship manager, accuracy of document classification, conversion rates on AI-assisted pitches.",
        de: "Die besten Ergebnisse entstehen aus KI + Mensch, nicht aus KI statt Mensch. Ihre Aufgabe ist es, die Übergabepunkte zu gestalten — wo erstellt KI einen Entwurf, wo prüfen und entscheiden Sie?\n\nDefinieren Sie Erfolg messbar: eingesparte Zeit pro Relationship Manager, Genauigkeit der Dokumentenklassifikation, Konversionsraten bei KI-gestützten Sales Pitches.",
        sr: "Najbolji rezultati dolaze iz kombinacije AI-ja i čoveka, a ne iz AI-ja umesto čoveka. Vaš posao je da dizajnirate tačke primopredaje — gde AI priprema nacrt, a gde vi pregledate i odlučujete?\n\nDefinišite metrike uspeha na merljiv način: ušteda vremena po relationship manageru, tačnost klasifikacije dokumenata, stope konverzije kod prodajnih ponuda uz podršku AI-ja.",
        it: "I risultati migliori nascono da IA + umano, non da IA al posto dell’umano. Il vostro compito è progettare i punti di passaggio: dove l’IA prepara una bozza e dove intervenite voi per rivedere e decidere?\n\nDefinite metriche di successo misurabili: tempo risparmiato per relationship manager, accuratezza della classificazione documentale, tassi di conversione delle presentazioni commerciali assistite dall’IA."
      }
    }
  },
{
    id: "xvRG5sXfrk",
    layout: "bullets-only",
    section: {
      en: "Application",
      de: "Anwendung",
      sr: "Primena",
      it: "Applicazione"
    },
    kicker: {
      en: "Starting Points",
      de: "Ausgangspunkte",
      sr: "Početne tačke",
      it: "Punti di partenza"
    },
    title: {
      en: "The Questions Worth Asking Right Now",
      de: "Die Fragen, die es sich jetzt zu stellen lohnt",
      sr: "Pitanja koja vredi postaviti odmah",
      it: "Le domande che vale la pena porsi adesso"
    },
    bullets: {
      en: ["\"Where does our sales team spend 60% of their time that is not actually selling?\" — meeting prep, reporting, email drafting, CRM updates — all prime for AI augmentation", "\"What does our best relationship manager know that is not written down anywhere?\" — tacit knowledge can be made explicit, embedded, and made available to the whole team", "\"At which point in our client journey does friction most cost us a deal?\" — document collection, waiting for approvals, delayed responses — AI can eliminate most of this", "\"What would a second-opinion AI layer in our credit or compliance process be worth?\" — not replacing the decision, augmenting it with rapid, consistent, auditable analysis", "\"Which of our clients are most at risk of churn, and why don't we know sooner?\" — AI pattern recognition on communication data, transaction data, and CRM notes can surface early signals"],
      de: ["„Womit verbringt unser Vertriebsteam 60 % seiner Zeit, ohne tatsächlich zu verkaufen?“ — Meeting-Vorbereitung, Reporting, E-Mail-Entwürfe, CRM-Updates — alles erstklassige Kandidaten für KI-Unterstützung", "„Was weiß unser bester Relationship Manager, das nirgendwo aufgeschrieben ist?“ — implizites Wissen kann explizit gemacht, eingebettet und dem gesamten Team zugänglich gemacht werden", "„An welchem Punkt in unserer Customer Journey kostet uns Reibung am meisten Deals?“ — Dokumentensammlung, Warten auf Freigaben, verzögerte Antworten — KI kann den Großteil davon eliminieren", "„Was wäre eine Second-Opinion-KI-Schicht in unserem Kredit- oder Compliance-Prozess wert?“ — nicht um die Entscheidung zu ersetzen, sondern um sie mit schneller, konsistenter, auditierbarer Analyse zu ergänzen", "„Welche unserer Kunden sind am stärksten churn-gefährdet, und warum wissen wir das nicht früher?“ — KI-Mustererkennung in Kommunikationsdaten, Transaktionsdaten und CRM-Notizen kann frühe Signale sichtbar machen"],
      sr: ["\"Na šta naš prodajni tim troši 60% vremena, a da to nije stvarna prodaja?\" — priprema sastanaka, izveštavanje, sastavljanje imejlova, ažuriranje CRM-a — sve su to idealne oblasti za unapređenje uz AI", "\"Šta naš najbolji relationship manager zna, a nigde nije zapisano?\" — prećutno znanje može da se učini eksplicitnim, ugradi i učini dostupnim celom timu", "\"U kom trenutku na našem putu klijenta trenje nas najviše košta posla?\" — prikupljanje dokumenata, čekanje odobrenja, odloženi odgovori — AI može da eliminiše većinu toga", "\"Koliko bi vredeo sloj AI-ja za drugo mišljenje u našem kreditnom ili compliance procesu?\" — ne da zameni odluku, već da je dopuni brzom, doslednom i proverljivom analizom", "\"Koji su naši klijenti pod najvećim rizikom od odliva i zašto to ne znamo ranije?\" — AI prepoznavanje obrazaca u komunikacionim podacima, transakcionim podacima i CRM beleškama može rano da otkrije signale"],
      it: ["«In cosa il nostro team vendite impiega il 60% del proprio tempo senza vendere davvero?» Preparazione delle riunioni, reporting, stesura di email, aggiornamenti CRM: tutti ambiti ideali per il potenziamento con l’IA.", "«Che cosa sa il nostro miglior relationship manager che non è scritto da nessuna parte?» La conoscenza tacita può essere resa esplicita, incorporata e resa disponibile a tutto il team.", "«In quale punto del percorso del cliente l’attrito ci costa più spesso un accordo?» Raccolta documenti, attesa delle approvazioni, risposte tardive: l’IA può eliminare gran parte di questi ostacoli.", "«Quanto varrebbe un livello di IA come secondo parere nel nostro processo di credito o compliance?» Non per sostituire la decisione, ma per rafforzarla con un’analisi rapida, coerente e verificabile.", "«Quali dei nostri clienti sono più a rischio di churn e perché non lo sappiamo prima?» Il riconoscimento di pattern da parte dell’IA su dati di comunicazione, dati transazionali e note CRM può far emergere segnali precoci."]
    },
    tone: "section-a",
    animation: "stagger",
    anim_stagger: 0.15
  },
{
    id: "fSkUqv20DL",
    layout: "single",
    section: {
      en: "Application",
      de: "Anwendung",
      sr: "Primena",
      it: "Applicazione"
    },
    kicker: {
      en: "What Happens Next",
      de: "Was als Nächstes passiert",
      sr: "Šta sledi",
      it: "Cosa succede dopo"
    },
    title: {
      en: "Next Steps",
      de: "Nächste Schritte",
      sr: "Sledeći koraci",
      it: "Passi successivi"
    },
    body: {
      en: "A clear four-stage path from workshop to working AI.",
      de: "Ein klarer Vier-Stufen-Pfad vom Workshop zur funktionierenden KI.",
      sr: "Jasan put u četiri faze od radionice do funkcionalnog AI rešenja.",
      it: "Un percorso chiaro in quattro fasi, dal workshop a un’IA funzionante."
    },
    bullets: {
      en: ["This week — Workshop output session. Each participant identifies one concrete AI application opportunity in their area. 60-minute structured discussion to surface and prioritise ideas.", "2–3 weeks — Priority use case design. Blockstruct works with your teams to design the 2–3 highest-value pilots: objectives, data requirements, success metrics, compliance checkpoints.", "6–10 weeks — Pilot build & deploy. We build on your Google Cloud / Gemini environment. A working prototype — not a PowerPoint. Tested with real users from your teams.", "Ongoing — Measure, iterate, expand. Every Blockstruct engagement is built for supervisory readiness and data sovereignty from day one."],
      de: ["Diese Woche — Workshop-Output-Session. Jeder Teilnehmer identifiziert eine konkrete KI-Anwendungsmöglichkeit im eigenen Bereich. Strukturierte 60-Minuten-Diskussion, um Ideen sichtbar zu machen und zu priorisieren.", "In 2–3 Wochen — Design priorisierter Use Cases. Blockstruct arbeitet mit Ihren Teams an den 2–3 wertvollsten Piloten: Ziele, Datenanforderungen, Erfolgsmetriken, Compliance-Checkpoints.", "In 6–10 Wochen — Pilot bauen und ausrollen. Wir bauen in Ihrer Google-Cloud-/Gemini-Umgebung. Ein funktionierender Prototyp — kein PowerPoint. Getestet mit echten Nutzern aus Ihren Teams.", "Fortlaufend — messen, iterieren, ausweiten. Jedes Blockstruct-Engagement wird von Tag eins an auf aufsichtsrechtliche Bereitschaft und Datensouveränität ausgelegt."],
      sr: ["Ove nedelje — sesija za zaključke radionice. Svaki učesnik identifikuje jednu konkretnu priliku za primenu AI-ja u svojoj oblasti. Strukturisana 60-minutna diskusija kako bi se ideje iznele i prioritizovale.", "Za 2–3 nedelje — dizajn prioritetnih use case-ova. Blockstruct radi sa vašim timovima na osmišljavanju 2–3 pilota najveće vrednosti: ciljevi, zahtevi za podacima, metrike uspeha, kontrolne tačke usklađenosti.", "Za 6–10 nedelja — izrada i implementacija pilota. Gradimo na vašem Google Cloud / Gemini okruženju. Funkcionalan prototip — ne PowerPoint. Testiran sa stvarnim korisnicima iz vaših timova.", "Kontinuirano — merite, iterirajte, širite. Svaki Blockstruct angažman projektovan je za regulatornu spremnost i suverenitet podataka od prvog dana."],
      it: ["Questa settimana: sessione di output del workshop. Ogni partecipante individua una concreta opportunità di applicazione dell’IA nella propria area. Discussione strutturata di 60 minuti per far emergere e dare priorità alle idee.", "2-3 settimane: progettazione dei casi d’uso prioritari. Blockstruct lavora con i vostri team per progettare i 2-3 pilot a maggior valore: obiettivi, requisiti dati, metriche di successo, checkpoint di compliance.", "6-10 settimane: sviluppo e deployment del pilot. Costruiamo sul vostro ambiente Google Cloud / Gemini. Un prototipo funzionante, non una presentazione PowerPoint. Testato con utenti reali dei vostri team.", "Continuativo: misurare, iterare, ampliare. Ogni ingaggio di Blockstruct è costruito fin dal primo giorno per la prontezza alla supervisione e la sovranità del dato."]
    },
    tone: "section-a",
    animation: "fade-up"
  },
{
    id: "YDBfiTztaJ",
    layout: "title",
    section: {
      en: "Application",
      de: "Anwendung",
      sr: "Primena",
      it: "Applicazione"
    },
    title: {
      en: "Thank You.",
      de: "Danke.",
      sr: "Hvala.",
      it: "Grazie."
    },
    subtitle: {
      en: "Questions, challenges, and scepticism all welcome.",
      de: "Fragen, Herausforderungen und Skepsis sind alle willkommen.",
      sr: "Pitanja, izazovi i skepticizam su dobrodošli.",
      it: "Domande, sfide e scetticismo sono tutti benvenuti."
    },
    tone: "section-a",
    style: "dark",
    animation: "blur-in",
    anim_duration: 0.9,
    anim_stagger: 0.18
  }
]

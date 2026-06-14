export const myProjects = [
  {
    id: 1,
    title: "Sakhi — Maternal Care Assistant",
    description:
      "An AI-powered maternal care assistant designed to support pregnant women with accessible health guidance, symptom awareness, and nutrition recommendations through a conversational interface.",
    subDescription: [
      "Built a Symptom Checker module that helps users describe pregnancy-related symptoms and receive safe next-step guidance, including when to seek medical attention.",
      "Developed a RAG-based Nutrition Advisor using LangChain and a Chroma vector store, providing context-aware dietary recommendations during pregnancy.",
      "Designed a Streamlit frontend and FastAPI backend with a modular architecture, keeping each AI capability independently developed and deployable.",
      "Integrated HuggingFace sentence transformers for embeddings and Ollama for local LLM inference, ensuring privacy-friendly on-device processing.",
    ],
    href: "https://github.com/winterbeer/Sakhi--Maternal-Care-Assistant",
    logo: "",
    image: "/assets/projects/sakhi-1.jpg",
    screenshots: [
      "/assets/projects/sakhi-1.jpg",
      "/assets/projects/sakhi-2.jpg",
      "/assets/projects/sakhi-3.jpg",
    ],
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 3, name: "RAG", path: "/assets/logos/rag.svg" },
      { id: 4, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 5, name: "HuggingFace", path: "/assets/logos/huggingface.svg" },
    ],
  },
  {
    id: 2,
    title: "Ideal Customer Profile Generator",
    description:
      "A multi-agent system that generates Ideal Customer Profiles from a plain-English product description — with routing, parallel specialists, a critic loop, and self-refinement. Built on n8n and Groq.",
    subDescription: [
      "Router agent classifies input (B2B/B2C, complexity, industry) and generates adaptive instructions for four downstream specialist agents running in parallel.",
      "Four specialist agents — Demographic, Behavioral, Psychological, and Problem/JTBD — each produce a focused analysis, which a Synthesizer merges into a single coherent ICP.",
      "Critic agent scores the output on consistency, specificity, and actionability; if score < 7, a Refinement agent rewrites using the critic's exact feedback.",
      "Final output is a formatted HTML report with the full ICP and an audit trail — downloadable and print-to-PDF ready.",
    ],
    href: "https://github.com/winterbeer/Ideal-Customer-Profile",
    logo: "",
    image: "/assets/projects/ICP-1.jpg",
    tags: [
      {
        id: 1,
        name: "n8n",
        path: "/assets/logos/n8n.svg",
      },
      {
        id: 2,
        name: "Groq",
        path: "/assets/logos/groq.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
    ],
  },
  {
    id: 3,
    title: "CRM Service Dashboard Automation",
    description:
      "A TypeScript-based Excel Office Script that automates the full CRM data pipeline for a service operations team — transforming raw ticket data into role-specific dashboards, engineer analytics, and weekly summaries with zero manual effort.",
    subDescription: [
      "<strong>Zero manual work.</strong> Runs every Monday automatically — reads raw CRM data, computes everything, and delivers ready dashboards.",
      "<strong>Role-specific views.</strong> Three dashboards, each answering a different manager's question from the same data source.",
      "<strong>Smart delay ownership.</strong> Classifies every stuck ticket as HCA's fault or the customer's — based on stage rules, not just timestamps.",
      "<strong>Self-archiving.</strong> Snapshots 7 days of history automatically so no data is ever lost or overwritten.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/crm-dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 2,
        name: "Excel",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Company Brain",
    description:
      "A production-grade AI assistant built for a machinery company — answers product queries, fetches live prices from Google Sheets, and remembers every conversation. A full agentic system deployed internally.",
    subDescription: [
      "<strong>Tool-use, not RAG.</strong> Structured catalog = exact answers. The agent calls live APIs directly — no embedding drift, no stale chunks.",
      "<strong>Persistent memory.</strong> Conversations survive page refresh, server restart, even machine reboot — full state stored in PostgreSQL via LangGraph checkpointer.",
      "<strong>Live pricing.</strong> 241-row Google Sheet queried on every request — fuzzy model matching handles typos, case mismatches, and non-breaking hyphens.",
      "<strong>Production-hardened.</strong> JWT admin auth, Docker Compose orchestration, pre-push secret scanning, and isolated thread state per conversation.",
    ],
    href: "",
    logo: "",
    featured: true,
    image: "/assets/projects/company-brain.jpg",
    tags: [
      { id: 1, name: "LangGraph", path: "/assets/logos/langgraph.svg" },
      { id: 2, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 3, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 5, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 6, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 7, name: "Python", path: "/assets/logos/python.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kumudsharma1710",
    icon: "/assets/socials/linkedIn.svg",
  },

];

export const experiences = [
  {
    title: "Independent Builder",
    job: "B.Tech CSE, 2022–26",
    date: "",
    contents: [
      "Didn't wait for a course. Started asking — <strong>who actually needs this?</strong>",
      "Built Sakhi, a RAG-based maternal care assistant, as a college project. Chose maternal health for its impact — then picked the stack to match.",
      "LangChain, HuggingFace embeddings, Chroma vector store — each chosen for a reason, not because they were trending.",
      "Principle I locked in early: <strong style='color:#c084fc'>define the human problem before touching a framework.</strong>",
    ],
  },
  {
    title: "AI Research Intern",
    job: "Startup (Remote)",
    date: "Jul – Oct 2025",
    contents: [
      "First real production constraints — messy data, no safety net, fast deadlines.",
      "Built and iterated on AI features where <strong>clarity mattered more than cleverness.</strong>",
      "Learned that models don't handle edge cases you haven't thought about. That's your job.",
      "Took away one rule: <strong style='color:#c084fc'>ask what breaks this before shipping it.</strong>",
    ],
  },
  {
    title: "AI & Automation Engineer",
    job: "HCA (Full-time)",
    date: "Dec 2025 – Present",
    contents: [
      "Joined full-time 7 months before graduating — the problems were too interesting to wait.",
      "Built Company Brain: a production AI assistant for a 242-machine catalog. <strong style='color:#c084fc'>Chose tool-calling over RAG</strong> — structured data deserves structured tools, not vector search.",
      "Conversation memory backed by PostgreSQL via LangGraph — survives restarts, reboots, anything short of a volume wipe.",
      "Built CRM dashboards by mapping each manager's actual question first. Same raw data, three different answers — <strong style='color:#c084fc'>because I asked before I built.</strong>",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

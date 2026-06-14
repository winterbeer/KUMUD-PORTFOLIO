import { motion } from "motion/react";

const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
  viewport: { once: true, margin: "-50px" },
});

const principles = [
  {
    number: "01",
    title: "Decompose before you build",
    body: "You never jump to code. For ICP generation: you broke it into Router → 4 parallel specialists → Synthesizer → Critic → Refinement loop. For the CRM: you mapped each manager's actual question before writing a query. The architecture always comes from the problem, not before it.",
  },
  {
    number: "02",
    title: "The data tells you the architecture",
    body: "You looked at a 242-machine structured catalog and chose tool-calling over RAG — because you asked \"what shape is this data?\" first. Most engineers default to what's trending. You default to what fits. That's a senior instinct.",
  },
  {
    number: "03",
    title: "Resilience is designed in, not added on",
    body: "The CRM has a 7-day rolling archive. Company Brain has a pre-push secret scanner. The ICP has a critic loop that rewrites if score < 7. You don't patch failure modes after shipping — you design them out before.",
  },
];

const exploring = [
  { icon: "🧪", label: "LLM Evaluation", sub: "LangSmith · Ragas" },
  { icon: "🗄️", label: "Vector Search", sub: "pgvector · Pinecone" },
  { icon: "☁️", label: "Agent Deployment", sub: "Fly.io · Railway · Docker" },
];

const skills = [
  { category: "Languages", items: ["Python", "C"] },
  { category: "AI / Agents", items: ["LangChain", "LangGraph", "RAG", "Tool-use Agents", "LLMOps"] },
  { category: "Automation", items: ["n8n", "Excel Office Scripts", "Workflow Design"] },
  { category: "Infrastructure", items: ["FastAPI", "Docker", "PostgreSQL", "SQL", "Git"] },
];

export default function Testimonial() {
  return (
    <div className="c-space section-spacing">

      {/* ── How I Approach Problems ── */}
      <motion.h2 className="text-heading" {...fadeUp(0)}>
        How I Approach Problems
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.15)}
            whileHover={{ scale: 1.02, borderColor: "rgba(192,132,252,0.35)" }}
            className="relative flex flex-col border border-white/10 rounded-2xl p-8 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden cursor-default transition-colors duration-300"
          >
            <div className="pointer-events-none absolute -top-8 -right-8 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl" />
            <motion.span
              className="text-8xl font-bold select-none mb-6"
              style={{ color: "rgba(192,132,252,0.12)", lineHeight: 1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.25, ease }}
              viewport={{ once: true }}
            >
              {p.number}
            </motion.span>
            <p className="text-lg font-semibold text-white mb-4">{p.title}</p>
            <p className="text-base text-neutral-400 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Currently Exploring ── */}
      <motion.h2 className="text-heading mt-24" {...fadeUp(0)}>
        Currently Exploring
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {exploring.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ x: 6, borderColor: "rgba(192,132,252,0.35)" }}
            className="flex items-center gap-6 border border-white/10 rounded-2xl px-8 py-7 bg-gradient-to-r from-white/[0.06] to-transparent cursor-default transition-colors duration-300"
          >
            <span className="text-4xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-white font-semibold text-lg">{item.label}</p>
              <p className="text-sm text-neutral-500 mt-1">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Skills ── */}
      <motion.h2 className="text-heading mt-24" {...fadeUp(0)}>
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.12, ease }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02, borderColor: "rgba(192,132,252,0.35)" }}
            className="flex flex-col border border-white/10 rounded-2xl p-8 bg-gradient-to-b from-white/[0.06] to-transparent transition-colors duration-300 cursor-default"
          >
            <p className="text-sm font-bold tracking-widest uppercase text-lavender mb-6">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ y: [0, -5, 0, -3, 0] }}
                  transition={{
                    opacity: { duration: 0.3, delay: i * 0.08 + j * 0.06 },
                    scale:   { duration: 0.3, delay: i * 0.08 + j * 0.06 },
                    y: { duration: 3 + j * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 + j * 0.8 },
                  }}
                  viewport={{ once: true }}
                  className="text-sm px-4 py-2 rounded-full border border-white/15 text-neutral-200 bg-white/5 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

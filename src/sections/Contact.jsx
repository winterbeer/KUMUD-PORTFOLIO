import { Particles } from "../components/Particles";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center c-space section-spacing text-center"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <motion.p
        className="text-lg text-lavender font-medium tracking-widest uppercase mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in touch
      </motion.p>

      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Let&apos;s build something <br className="hidden md:block" />
        <span className="text-lavender">worth building.</span>
      </motion.h2>

      <motion.p
        className="text-neutral-400 text-lg max-w-xl mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Open to full-time roles, freelance projects, and interesting problems.
        If you have one, reach out.
      </motion.p>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-white/10 rounded-2xl px-8 py-7 bg-white/[0.04]">
          <div className="text-left">
            <p className="text-white font-semibold text-xl">Kumud Sharma</p>
            <p className="text-neutral-400 text-sm mt-1">AI &amp; Automation Engineer</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/winterbeer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <img src="assets/logos/github.svg" className="w-5 h-5" alt="GitHub" />
              winterbeer
            </a>
            <a
              href="https://www.linkedin.com/in/kumudsharma1710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <img src="assets/socials/linkedIn.svg" className="w-5 h-5" alt="LinkedIn" />
              kumudsharma1710
            </a>
            <a
              href="mailto:kumud7887@gmail.com"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <img src="assets/copy.svg" className="w-5 h-5" alt="Email" />
              kumud7887@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills, education, languages } from "@/lib/data";

const skillPillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
            05
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
            / Skills
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-display-md mb-12">
            The <span className="italic text-amber-accent">tools</span> I reach for.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-ink-line rounded-2xl bg-ink-soft/30 backdrop-blur-sm overflow-hidden">
            {/* Terminal-style header */}
            <div className="px-5 py-3 border-b border-ink-line flex items-center gap-2 bg-ink/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-amber-accent/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <span className="ml-3 font-mono text-xs text-cream-muted">
                ~ / stack.json
              </span>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <div className="font-mono text-xs uppercase tracking-widest text-amber-accent mb-4">
                    → {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={skillPillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{
                          scale: 1.06,
                          borderColor: "#F5A623",
                          color: "#F5A623",
                          boxShadow: "0 0 20px -6px rgba(245,166,35,0.3)",
                        }}
                        className="px-3 py-1.5 bg-ink border border-ink-line rounded font-mono text-sm text-cream cursor-default transition-shadow"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education & Languages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.2}>
            <div className="p-6 border border-ink-line rounded-xl glow-hover">
              <div className="font-mono text-xs uppercase tracking-widest text-amber-accent mb-3">
                / Education
              </div>
              <h4 className="font-display text-xl text-cream mb-1">{education.degree}</h4>
              <p className="text-sm text-cream-muted">{education.school}</p>
              <p className="text-sm text-cream-muted font-mono mt-1">
                {education.period} · CGPA {education.cgpa}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-6 border border-ink-line rounded-xl glow-hover">
              <div className="font-mono text-xs uppercase tracking-widest text-amber-accent mb-3">
                / Languages
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-ink border border-ink-line rounded font-mono text-sm text-cream"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

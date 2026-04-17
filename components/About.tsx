"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { about } from "@/lib/data";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  return (
    <section className="relative px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
              02
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
              / About
            </span>
          </div>
          <h2 className="font-display text-display-md">
            The <span className="italic text-amber-accent">short</span> version.
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal delay={0.15}>
            <p className="text-xl md:text-2xl leading-relaxed text-cream font-light">
              {about.body}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {about.keywords.map((kw, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={pillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.08, borderColor: "#F5A623", color: "#F5A623" }}
                transition={{ duration: 0.2 }}
                className="px-3 py-1.5 border border-ink-line rounded-full font-mono text-xs uppercase tracking-wider text-cream-muted cursor-default"
              >
                {kw}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

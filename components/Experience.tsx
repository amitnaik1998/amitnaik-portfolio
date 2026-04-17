"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
            04
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
            / Experience
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-display-md mb-16">
            Where I&apos;ve <span className="italic text-amber-accent">shipped</span>.
          </h2>
        </Reveal>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <JobCard job={job} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job, index }: { job: (typeof experience)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="group border border-ink-line rounded-2xl overflow-hidden bg-ink-soft/30 backdrop-blur-sm glow-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
      >
        <div className="flex-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-display text-2xl md:text-3xl text-cream">
              {job.company}
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-cream-muted">
              {job.location}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-accent">
              {job.titles[0]}
            </span>
            {job.titles.length > 1 && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                ← {job.titles.slice(1).join(" ← ")}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-xs uppercase tracking-widest text-cream-muted">
            {job.period}
          </span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4 text-cream-muted" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8">
              <div className="hairline mb-6" />
              <p className="text-cream-muted leading-relaxed max-w-3xl">{job.blurb}</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {job.projects.map((project, pi) => (
                  <div
                    key={pi}
                    className="p-5 rounded-xl bg-ink/50 border border-ink-line"
                  >
                    <h4 className="font-mono text-xs uppercase tracking-widest text-amber-accent mb-3">
                      {project.name}
                    </h4>
                    <ul className="space-y-2">
                      {project.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm text-cream-muted leading-relaxed flex gap-2"
                        >
                          <span className="text-amber-accent shrink-0">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

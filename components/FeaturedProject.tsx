"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { featuredProject } from "@/lib/data";

const stackPillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FeaturedProject() {
  return (
    <section id="work" className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden">
      {/* Floating accent orb */}
      <div className="gradient-orb w-[350px] h-[350px] bg-amber-accent top-1/3 -left-40 animate-float opacity-[0.08]" style={{ animationDelay: "-2s" }} />

      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
            03
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
            / Featured work
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-cream-muted">
                  Case study
                </span>
                <span className="h-px w-8 bg-ink-line" />
                <span className="font-mono text-xs uppercase tracking-widest text-cream-muted">
                  2024 — Present
                </span>
              </div>
              <h3 className="font-display text-display-lg leading-none">
                {featuredProject.name}
                <span className="text-amber-accent">.</span>
              </h3>
              <p className="mt-2 text-lg text-cream-muted">{featuredProject.subtitle}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-cream leading-relaxed">
                {featuredProject.description}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-amber-accent">
                Role: {featuredProject.role}
              </p>
            </Reveal>

            {/* Staggered highlights */}
            <ul className="mt-10 space-y-5">
              {featuredProject.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-4 group"
                >
                  <span className="font-mono text-xs text-amber-accent mt-1.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-cream-muted group-hover:text-cream transition-colors leading-relaxed">
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Staggered stack pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {featuredProject.stack.map((tech, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={stackPillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: "#F5A623",
                    color: "#F5A623",
                  }}
                  className="px-3 py-1 bg-ink-soft border border-ink-line rounded font-mono text-xs text-cream-muted cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-amber-accent hover:text-amber-glow group"
              >
                Visit gtr.trade
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* Right: phone mockup */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="relative sticky top-32">
                <PhoneMockup />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ rotate: -4, y: 20, opacity: 0 }}
      whileInView={{ rotate: -4, y: 0, opacity: 1 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[3rem] bg-gradient-to-br from-ink-soft to-ink p-3 border border-ink-line shadow-[0_40px_80px_-20px_rgba(245,166,35,0.25)]"
    >
      {/* Screen */}
      <div className="relative w-full h-full rounded-[2.3rem] bg-ink overflow-hidden border border-ink-line">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-full z-10 border border-ink-line" />

        {/* REPLACE THIS DIV with your actual screenshot:
            <Image src="/gtr-screenshot.png" alt="GTR.Trade app" fill className="object-cover" />
        */}
        <div className="absolute inset-0 p-5 pt-12 flex flex-col gap-3">
          {/* Mock header */}
          <div className="flex items-center justify-between">
            <div className="font-display text-xl text-cream">
              GTR<span className="text-amber-accent">.</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-ink-soft border border-ink-line" />
          </div>

          {/* Balance card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 p-4 rounded-2xl bg-gradient-to-br from-amber-accent/10 to-transparent border border-amber-accent/20"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-cream-muted">
              Portfolio
            </div>
            <div className="mt-1 font-display text-2xl text-cream tabular-nums">
              $12,847.20
            </div>
            <div className="mt-1 flex items-center gap-1 font-mono text-xs text-green-400 tabular-nums">
              <span>▲</span> +4.82% · 24h
            </div>
          </motion.div>

          {/* Mock trade rows */}
          {[
            { sym: "SOL-PERP", px: "234.18", ch: "+2.4%", up: true },
            { sym: "ETH-PERP", px: "3,892.50", ch: "-0.8%", up: false },
            { sym: "GOLD-RWA", px: "2,641.00", ch: "+0.3%", up: true },
            { sym: "BTC-PERP", px: "98,240.00", ch: "+1.1%", up: true },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-ink-soft/50 border border-ink-line"
            >
              <div>
                <div className="font-mono text-[11px] text-cream">{row.sym}</div>
                <div className="font-mono text-[9px] text-cream-muted mt-0.5">Perp · 1h</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[11px] text-cream tabular-nums">
                  ${row.px}
                </div>
                <div
                  className={`font-mono text-[9px] tabular-nums ${
                    row.up ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {row.ch}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="mt-auto text-center">
            <div className="font-mono text-[9px] text-cream-dim uppercase tracking-widest">
              Representative mock — swap with real screenshot
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

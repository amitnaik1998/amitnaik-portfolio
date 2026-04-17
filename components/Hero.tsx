"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal, metrics } from "@/lib/data";
import CountUp from "./CountUp";

const letterVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.2 + i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const firstName = "AMIT";
  const lastName = "NAIK";
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const firstNameX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lastNameX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-12 pb-8 px-6 md:px-12 overflow-hidden"
    >
      {/* Floating gradient orbs — pushed to edges, lower opacity */}
      <div className="gradient-orb w-[400px] h-[400px] bg-amber-accent top-[10%] -right-52 animate-float opacity-[0.08]" />
      <div className="gradient-orb w-[250px] h-[250px] bg-amber-deep bottom-[10%] -left-32 animate-float opacity-[0.06]" style={{ animationDelay: "-3s" }} />

      {/* Top bar: meta info */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 text-xs font-mono uppercase tracking-widest text-cream-muted">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          <span>{personal.available}</span>
        </motion.div>
        <motion.a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1.5 border border-ink-line rounded-full text-cream hover:text-amber-accent hover:border-amber-accent transition-colors"
        >
          LinkedIn
          <ArrowUpRight className="w-3 h-3" />
        </motion.a>
      </div>

      {/* Center: two-column hero */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="flex-1 flex flex-col justify-center py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-baseline gap-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
            01
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
            / Full Stack Engineer · React Native · Web3
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left: name */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-display-xl leading-none" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}>
              <motion.span style={{ x: firstNameX }} className="block overflow-visible">
                <span className="inline-flex">
                  {firstName.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
              <motion.span style={{ x: lastNameX }} className="block overflow-visible">
                <span className="inline-flex">
                  {lastName.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i + firstName.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block italic text-amber-accent"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block ml-4 md:ml-8 w-8 md:w-24 h-[0.08em] bg-cream align-middle origin-left"
                />
              </motion.span>
            </h1>
          </div>

          {/* Right: tagline + CTAs */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {/* Vertical accent line + tagline */}
              <div className="lg:border-l lg:border-ink-line lg:pl-8">
                <p className="text-lg md:text-xl text-cream-muted leading-relaxed">
                  {personal.tagline}{" "}
                  <span className="text-cream">
                    Five years of real-world shipping — mobile, web, backend, and everything in between.
                  </span>
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
                >
                  <a
                    href="#work"
                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-amber-accent text-ink font-mono text-sm uppercase tracking-wider rounded-full hover:bg-amber-glow transition-colors"
                  >
                    See the work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="group flex items-center justify-center gap-2 px-6 py-3 border border-ink-line text-cream font-mono text-sm uppercase tracking-wider rounded-full hover:border-cream transition-colors"
                  >
                    Get in touch
                  </a>
                </motion.div>

                {/* Small detail — role + year */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim"
                >
                  Lead Full Stack Developer · RLC Labs · 2024—Present
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom: metrics bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-8 border-t border-ink-line"
      >
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`px-0 md:px-8 ${
              i !== 0 ? "md:border-l md:border-ink-line" : ""
            }`}
          >
            <div className="font-display text-display-md text-amber-accent">
              <CountUp end={metric.value} suffix={metric.suffix} duration={2} />
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-cream">
              {metric.label}
            </div>
            <div className="mt-1 text-sm text-cream-muted">{metric.detail}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

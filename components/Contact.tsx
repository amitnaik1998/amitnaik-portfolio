"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import Reveal from "./Reveal";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-accent">
            06
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">
            / Contact
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-display-lg leading-[0.95] mb-12">
            Let&apos;s build
            <br />
            something{" "}
            <span className="italic text-amber-accent">good</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyableContactItem
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={personal.email}
            />
            <CopyableContactItem
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={personal.phone}
            />
            <ContactItem
              icon={<MapPin className="w-4 h-4" />}
              label="Location"
              value={personal.location}
            />
          </div>
        </Reveal>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-ink-line text-xs font-mono uppercase tracking-widest text-cream-dim">
        <span>© {new Date().getFullYear()} · {personal.name}</span>
      </div>
    </section>
  );
}

function CopyableEmail({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-4 font-display text-3xl md:text-5xl text-cream hover:text-amber-accent transition-colors break-all text-left cursor-pointer"
    >
      <span className="underline decoration-cream-dim underline-offset-8 decoration-1 group-hover:decoration-amber-accent">
        {value}
      </span>
      <motion.span
        className="shrink-0"
        animate={copied ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {copied ? (
          <Check className="w-8 h-8 md:w-12 md:h-12 text-green-400" />
        ) : (
          <Copy className="w-8 h-8 md:w-12 md:h-12" />
        )}
      </motion.span>
    </button>
  );
}

function CopyableContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="text-left w-full cursor-pointer">
      <div className="p-5 border border-ink-line rounded-xl glow-hover">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-muted">
            {icon}
            {label}
          </div>
          <motion.div
            animate={copied ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-cream-dim" />
            )}
          </motion.div>
        </div>
        <div className="mt-2 text-cream text-sm break-all">
          {copied ? "Copied!" : value}
        </div>
      </div>
    </button>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="p-5 border border-ink-line rounded-xl glow-hover">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-muted">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-cream text-sm break-all">{value}</div>
    </div>
  );
}

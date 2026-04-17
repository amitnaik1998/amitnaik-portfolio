"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-ink-soft/80 backdrop-blur-xl border border-ink-line">
            <a
              href="#top"
              className="px-4 py-1.5 text-sm font-mono uppercase tracking-wider text-cream hover:text-amber-accent transition-colors"
            >
              AN.
            </a>
            <div className="w-px h-4 bg-ink-line mx-1" />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-cream-muted hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-ink-line mx-1" />
            <a
              href={`mailto:${personal.email}`}
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-amber-accent text-ink rounded-full hover:bg-amber-glow transition-colors"
            >
              Hire me
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

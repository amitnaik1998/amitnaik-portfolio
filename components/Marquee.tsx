"use client";

import { marqueeKeywords } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeKeywords, ...marqueeKeywords];
  // Offset the second row for visual variety
  const row2 = [...marqueeKeywords.slice(10), ...marqueeKeywords.slice(0, 10), ...marqueeKeywords.slice(10), ...marqueeKeywords.slice(0, 10)];

  return (
    <div className="marquee-container overflow-hidden py-5 border-y border-ink-line space-y-4">
      {/* Row 1 — left scroll */}
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <div key={i} className="flex items-center mx-5">
            <span className="font-mono text-sm uppercase tracking-widest text-cream-muted">
              {word}
            </span>
            <span className="ml-10 text-amber-accent">◆</span>
          </div>
        ))}
      </div>

      {/* Row 2 — right scroll (reversed, slightly different speed) */}
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {row2.map((word, i) => (
          <div key={i} className="flex items-center mx-5">
            <span className="font-mono text-xs uppercase tracking-widest text-cream-dim">
              {word}
            </span>
            <span className="ml-10 text-amber-accent/40">◇</span>
          </div>
        ))}
      </div>
    </div>
  );
}

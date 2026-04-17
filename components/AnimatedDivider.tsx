"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="px-6 md:px-12">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="divider-animated max-w-6xl mx-auto"
      />
    </div>
  );
}

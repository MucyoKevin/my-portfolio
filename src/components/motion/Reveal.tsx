"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Fade-and-rise when scrolled into view.
 *
 * Children stay server-rendered — only this wrapper ships as client JS.
 * `whileInView` uses IntersectionObserver with root: null, and the spec clips
 * the intersection rect by every ancestor's overflow, so this works correctly
 * inside the site's internally-scrolled content pane with no root plumbing.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

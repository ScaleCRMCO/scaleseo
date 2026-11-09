"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// Giant, very faint Scale SEO mark behind the hero. It sinks down with you as
// you scroll through the hero ("gravity") and rises again on the way back up.
export default function HeroMark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Tied directly to scroll position: still at the top, sinks as you scroll
  // down, rises again as you scroll back up. No idle float, no overshoot.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drop = useSpring(useTransform(scrollYProgress, [0, 1], [0, 520]), { stiffness: 120, damping: 30, mass: 0.6, restDelta: 0.5 });
  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.svg viewBox="0 0 366 366" fill="none" stroke="currentColor" style={reduce ? undefined : { y: drop }}>
        <circle cx="183" cy="183" r="164" strokeWidth="36" />
        <path d="M101 139 H224.5 V262" strokeWidth="38" />
      </motion.svg>
    </div>
  );
}

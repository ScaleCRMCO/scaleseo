"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// Giant, very faint Scale SEO mark behind the hero. It floats gently, and as
// you scroll through the hero it sinks down with you ("gravity"), drifting a
// little further than the page so it appears to follow.
export default function HeroMark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drop = useSpring(useTransform(scrollYProgress, [0, 1], [0, 520]), { stiffness: 60, damping: 20, mass: 0.8 });
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 8]);
  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.svg
        viewBox="0 0 366 366"
        fill="none"
        stroke="currentColor"
        style={reduce ? undefined : { y: drop, rotate: tilt }}
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="183" cy="183" r="164" strokeWidth="36" />
        <path d="M101 139 H224.5 V262" strokeWidth="38" />
      </motion.svg>
    </div>
  );
}

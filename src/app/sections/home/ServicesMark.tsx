"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import styles from "./ServicesGrid.module.css";

// Scale SEO mark (ring + corner arrow) that draws itself as the services
// section scrolls through the viewport: the ring sweeps round, then the
// arrow draws in and settles from a quarter turn.
export default function ServicesMark({ className, slow = false }: { className?: string; slow?: boolean } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    // slow: draw over the element's whole pass through the viewport
    offset: slow ? ["start end", "end center"] : ["start end", "center center"],
  });

  const ring = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const ringRotate = useTransform(scrollYProgress, [0, 0.7], [-120, 0]);
  const arrow = useTransform(scrollYProgress, [0.45, 1], [0, 1]);
  const arrowRotate = useTransform(scrollYProgress, [0.45, 1], [-90, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div ref={ref} className={`${styles.markCell} ${className ?? ""}`} aria-hidden="true">
      <motion.svg className={styles.mark} viewBox="0 0 366 366" fill="none" stroke="currentColor" style={reduce ? undefined : { scale }}>
        <motion.circle
          cx="183"
          cy="183"
          r="164"
          strokeWidth="36"
          style={reduce ? undefined : { pathLength: ring, rotate: ringRotate, originX: "50%", originY: "50%" }}
        />
        <motion.path
          d="M101 139 H224.5 V262"
          strokeWidth="38"
          strokeLinejoin="miter"
          style={reduce ? undefined : { pathLength: arrow, rotate: arrowRotate, originX: "50%", originY: "50%" }}
        />
      </motion.svg>
    </div>
  );
}

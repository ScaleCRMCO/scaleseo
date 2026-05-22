"use client";

import { useEffect, useRef } from "react";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: number;
  animate?: boolean;
};

export default function Logo({ size = 28, animate = true }: LogoProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;

    // Trigger spin-in on mount
    el.classList.add(styles.spinIn);

    // Re-trigger spin-in when scrolling back into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove(styles.spinIn);
            // Force reflow so animation can replay
            void el.offsetWidth;
            el.classList.add(styles.spinIn);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
      aria-label="Scale SEO"
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
      {/* Inner dashed ring */}
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
        strokeDasharray="1,3"
      />
      {/* 4-point compass star — fills with accent */}
      <path
        d="M 50,10 L 54,46 L 90,50 L 54,54 L 50,90 L 46,54 L 10,50 L 46,46 Z"
        fill="var(--accent)"
        stroke="var(--accent)"
        strokeWidth="0.3"
        strokeLinejoin="round"
      />
      {/* Diagonal cross points */}
      <path
        d="M 78,22 L 53,47 M 22,78 L 47,53 M 78,78 L 53,53 M 22,22 L 47,47"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      {/* Center dot */}
      <circle cx="50" cy="50" r="1.8" fill="var(--bg)" />
      {/* North tick */}
      <line
        x1="50"
        y1="2"
        x2="50"
        y2="6"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

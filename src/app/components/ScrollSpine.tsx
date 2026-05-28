"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollSpine.module.css";

export default function ScrollSpine() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced-motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);
      setVisible(scrollTop > window.innerHeight * 0.6);
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Spine geometry
  const LINE_TOP = 0;
  const LINE_HEIGHT = 100; // percentage units in the SVG viewBox
  const tipY = LINE_TOP + progress * LINE_HEIGHT;
  const dashOffset = (1 - progress) * LINE_HEIGHT;
  const compassRotation = progress * 540; // 1.5 full turns over the page

  return (
    <div
      className={`${styles.spine} ${visible ? styles.visible : ""}`}
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 10 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Faint full-length track */}
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="100"
          className={styles.track}
          vectorEffect="non-scaling-stroke"
        />
        {/* Drawn orange progress line */}
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="100"
          className={styles.drawn}
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: LINE_HEIGHT,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>

      {/* Traveling compass at the tip */}
      <div
        className={styles.compass}
        style={{
          top: `${tipY}%`,
          transform: `transl(-50%, -50%) rotate(${compassRotation}deg)`,
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M 50,10 L 54,46 L 90,50 L 54,54 L 50,90 L 46,54 L 10,50 L 46,46 Z"
            fill="var(--accent)"
          />
          <circle cx="50" cy="50" r="3" fill="var(--bg)" />
        </svg>
      </div>
    </div>
  );
}

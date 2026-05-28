"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollSpine.module.css";

const SECTIONS = 6;

export default function ScrollSpine() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const easedRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tick = () => {
      // Ease the eased value toward the target (momentum/lag)
      easedRef.current += (targetRef.current - easedRef.current) * 0.08;
      if (Math.abs(targetRef.current - easedRef.current) < 0.0002) {
        easedRef.current = targetRef.current;
      }
      setProgress(easedRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = docHeight > 0 ? scrollTop / docHeight : 0;
      setVisible(scrollTop > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const LINE_HEIGHT = 100;
  const tipY = progress * LINE_HEIGHT;
  const dashOffset = (1 - progress) * LINE_HEIGHT;

  // Needle-lock: compass rotates faster near section boundaries, settles between
  const sectionProgress = progress * SECTIONS;
  const intoSection = sectionProgress - Math.floor(sectionProgress);
  // ease-out curve makes it "snap" then settle within each section
  const settle = 1 - Math.pow(1 - intoSection, 3);
  const compassRotation =
    Math.floor(sectionProgress) * 90 + settle * 90 + progress * 180;

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
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="100"
          className={styles.track}
          vectorEffect="non-scaling-stroke"
        />
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

      {/* Section marker dots */}
      <div className={styles.markers}>
        {Array.from({ length: SECTIONS + 1 }).map((_, i) => {
          const markerPos = (i / SECTIONS) * 100;
          const filled = progress * 100 >= markerPos - 0.5;
          return (
            <span
              key={i}
              className={`${styles.marker} ${filled ? styles.markerFilled : ""}`}
              style={{ top: `${markerPos}%` }}
            />
          );
        })}
      </div>

      {/* Traveling compass with glow */}
      <div className={styles.compass} style={{ top: `${tipY}%` }}>
        <span className={styles.glow} />
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `rotate(${compassRotation}deg)` }}
        >
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

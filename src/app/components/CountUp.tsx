"use client";
import { useEffect, useRef, useState } from "react";

// Counts from `from` to `to` once the number scrolls into view.
export default function CountUp({ from = 0, to, prefix = "", suffix = "", duration = 1600, final }: { from?: number; to: number; prefix?: string; suffix?: string; duration?: number; final?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(from);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to, duration]);
  // `final` swaps in a formatted end value (e.g. "$1M+" after counting to 1000K)
  return <span ref={ref}>{final && n === to ? final : `${prefix}${n.toLocaleString("en-CA")}${suffix}`}</span>;
}

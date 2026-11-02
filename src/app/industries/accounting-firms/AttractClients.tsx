"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import s from "./AttractClients.module.css";

const items = [
  {
    title: "Get Found for the Right Services",
    body: "Your firm should appear when potential clients search for the accounting services you want to grow, whether that’s corporate tax, bookkeeping, or business advisory.",
  },
  {
    title: "Make a Strong First Impression",
    body: "Your website should clearly explain what your firm does, who it works with, and why clients choose you. Simple navigation, helpful information, and clear contact options make a difference.",
  },
  {
    title: "Demonstrate Your Expertise",
    body: "Useful articles, detailed service pages, and genuine team profiles help potential clients understand your experience before they make an enquiry.",
  },
  {
    title: "Build Trust Before the First Conversation",
    body: "Consistent business information, client reviews, professional credentials, and clear service descriptions help prospective clients feel confident choosing your firm.",
  },
  {
    title: "Connect Your Marketing Efforts",
    body: "SEO, website development, Google Ads, and AI search optimization should support the same business goals, helping your firm reach the right audience across different search platforms.",
  },
];

/* Each step arranges up to nine Scale SEO marks (ring + corner arrow) into a
   different shape: [x, y, scale, rotate] per mark; missing marks fade out. */
type P = [number, number, number, number];
const U = 400; // grid unit
const shapes: P[][] = [
  // 1 — one large mark: a single, clear result
  [[0, 0, 2.2, 0]],
  // 2 — two marks facing each other: the first impression
  [[-U * 0.62, 0, 1.15, 0], [U * 0.62, 0, 1.15, 180]],
  // 3 — three marks stacked: depth of expertise
  [[0, -U, 0.9, 0], [0, 0, 0.9, 0], [0, U, 0.9, 0]],
  // 4 — four marks turned inward: a closed, trusted circle
  [[-U / 2, -U / 2, 0.9, 180], [U / 2, -U / 2, 0.9, 270], [-U / 2, U / 2, 0.9, 90], [U / 2, U / 2, 0.9, 0]],
  // 5 — a 3×3 network: connected channels
  [-1, 0, 1].flatMap((r) => [-1, 0, 1].map((c) => [c * U * 0.72, r * U * 0.72, 0.6, 0] as P)),
];

function Shape({ step, instant = false }: { step: number; instant?: boolean }) {
  const reduce = useReducedMotion();
  const shape = shapes[step];
  return (
    <svg className={s.shape} viewBox="-640 -640 1280 1280" fill="none" stroke="currentColor" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => {
        const p = shape[i] ?? [0, 0, 0.2, 0];
        return (
          <motion.g
            key={i}
            initial={false}
            animate={{ x: p[0], y: p[1], scale: p[2], rotate: p[3], opacity: shape[i] ? 1 : 0 }}
            transition={instant || reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 18, delay: i * 0.025 }}
          >
            <circle r="164" strokeWidth="36" />
            <path d="M-82 -44 H41.5 V79" strokeWidth="38" strokeLinejoin="miter" />
          </motion.g>
        );
      })}
    </svg>
  );
}

export default function AttractClients() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length))));
  });

  return (
    <section className={s.section}>
      <div className={s.intro}>
        <h2 className={s.title}>What Helps Accounting Firms Attract Clients Online?</h2>
        <p className={s.lead}>
          A strong online presence isn&rsquo;t just about ranking higher on
          Google. It&rsquo;s about helping the right people find your firm,
          understand your expertise, and feel confident getting in touch.
        </p>
      </div>

      {/* Desktop: pinned panel — each scroll step reveals the next point */}
      <div ref={ref} className={s.track} style={{ height: `${items.length * 100}vh` }}>
        <div className={s.sticky}>
          <div className={s.rule} />
          <span className={s.num}>{step + 1}</span>
          <div className={s.shapeWrap}>
            <Shape step={step} />
          </div>
          <div className={s.copy}>
            {items.map((it, i) => (
              <div key={it.title} className={s.copyItem} data-active={i === step} aria-hidden={i !== step}>
                <h3 className={s.itemTitle}>{it.title}</h3>
                <p className={s.itemBody}>{it.body}</p>
              </div>
            ))}
          </div>
          <div className={s.dots} aria-hidden="true">
            {items.map((it, i) => (
              <span key={it.title} data-active={i === step} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: plain list with each point's shape as an icon */}
      <ol className={s.list}>
        {items.map((it, i) => (
          <li key={it.title}>
            <div className={s.listIcon}>
              <Shape step={i} instant />
            </div>
            <span className={s.listNum}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={s.itemTitle}>{it.title}</h3>
            <p className={s.itemBody}>{it.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

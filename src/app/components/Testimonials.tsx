"use client";
import { useRef } from "react";
import { testimonials as all } from "./testimonials";
import styles from "./Testimonials.module.css";

// Placeholder entries only appear in local development (see testimonials.ts)
const items = all.filter(
  (t) => !t.placeholder || process.env.NODE_ENV !== "production"
);

const tones = [styles.toneTint, styles.toneWhite, styles.toneNavy];

// Testimonials: heading block left, horizontally scrolling quote boxes right
// with round arrow buttons.
export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  if (!items.length) return null;
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-label="Client testimonials">
      <div className={styles.intro}>
        <span className={styles.label}>Testimonials</span>
        <h2 className={styles.heading}>What Clients Say</h2>
        <p className={styles.lead}>
          Clients rate 5 stars on Google, reflecting their trust and
          satisfaction with the work.
        </p>
      </div>

      <div className={styles.slider}>
        {items.length > 2 && (
          <button className={`${styles.arrow} ${styles.prev}`} onClick={() => scroll(-1)} aria-label="Previous testimonial">
            <span aria-hidden="true">&lsaquo;</span>
          </button>
        )}
        <div className={styles.track} ref={track}>
          {items.map((t, i) => (
            <figure key={t.name} className={`${styles.card} ${tones[i % tones.length]}`}>
              <span className={styles.stars} aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={styles.cite}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      {items.length > 2 && (
          <button className={`${styles.arrow} ${styles.next}`} onClick={() => scroll(1)} aria-label="Next testimonial">
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        )}
    </section>
  );
}

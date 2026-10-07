"use client";
import { useState } from "react";
import { testimonials as all } from "./testimonials";
import styles from "./Testimonials.module.css";

// Placeholder entries only appear in local development (see testimonials.ts)
const items = all.filter(
  (t) => !t.placeholder || process.env.NODE_ENV !== "production"
);

// Reusable testimonials slider: large centred quote, attribution, arrows and
// progress bars. Drop <Testimonials /> into any page.
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  if (!items.length) return null;
  const many = items.length > 1;
  const go = (step: number) =>
    setIndex((i) => (i + step + items.length) % items.length);
  const t = items[index];

  return (
    <section className={styles.section} aria-label="Client testimonials">
      <div className={styles.label}>Client Testimonials</div>

      <div className={styles.stage}>
        {many && (
          <button className={styles.arrow} onClick={() => go(-1)} aria-label="Previous testimonial">
            <span aria-hidden="true">←</span>
          </button>
        )}

        <figure key={index} className={styles.slide}>
          {t.source && (
            <div className={styles.source}>
              <span className={styles.stars} aria-label="5 out of 5 stars">★★★★★</span>
              {t.source}
            </div>
          )}
          <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className={styles.cite}>
            <strong>{t.name}</strong>, {t.role}
          </figcaption>
        </figure>

        {many && (
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => go(1)}
            aria-label="Next testimonial"
          >
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>

      {many && (
        <div className={styles.bars}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.bar} ${i === index ? styles.barActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </section>
  );
}

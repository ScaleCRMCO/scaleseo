"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

const needTags = [
  "SEO",
  "Google Ads",
  "Web Development",
  "AI Search (GEO)",
  "Not sure yet",
];

export default function Contact({ asPageHeading = false }: { asPageHeading?: boolean } = {}) {
  // On /contact this section is the page's main content, so its heading is the H1
  const Heading = asPageHeading ? "h1" : "h2";
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [need, setNeed] = useState<string>("Not sure yet");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("Sending...");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.need = need;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks — I'll reply within 24 hours.");
        form.reset();
        router.push("/thank-you");
      } else {
        throw new Error("Request failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Email team@scaleseo.co directly.");
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.grid}>
        {/* LEFT — booking link + contact methods */}
        <div className={styles.left}>
          <Heading className={styles.headline}>
            Ready to Improve Your <em>Organic Search Visibility?</em>
          </Heading>

          {/* Hand-drawn mailbox sketch filling the open left column. Plain
              strokes roughened by the turbulence filter defined inline. */}
          <div className={styles.sketchWrap} aria-hidden="true">
            <svg className={styles.sketch} viewBox="0 0 260 205" overflow="visible">
              <filter id="contact-sketch">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" />
                <feDisplacementMap in="SourceGraphic" scale="5" />
              </filter>
              <g filter="url(#contact-sketch)">
                {/* mailbox body */}
                <path d="M40 150V92c0-24 18-40 42-40h70" />
                <path d="M40 150h112" />
                {/* door, swung open */}
                <path d="M152 150V86c0-20 12-34 28-34s28 14 28 34v64z" />
                <path d="M152 150l30 30h50l-24-30" />
                {/* flag */}
                <path d="M96 52V10h26v16H96" />
                {/* post */}
                <path d="M84 150v42h22v-42" />
                {/* letter peeking out */}
                <path d="M176 112l30-26" />
                <path d="M174 86v18" />
                {/* flower */}
                <path d="M214 46c-8-6-4-18 6-16 0-10 14-10 14 0 10-2 14 10 6 16 6 8-4 16-12 10-8 6-18-2-14-10z" />
                <path d="M222 56l-10 26" />
                {/* motion marks */}
                <path d="M222 102h12M220 118l12 6" />
              </g>
            </svg>
          </div>

          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookCard}
          >
            <span className={styles.bookIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                <line x1="8" y1="3" x2="8" y2="6.5" strokeLinecap="round" />
                <line x1="16" y1="3" x2="16" y2="6.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className={styles.bookText}>
              <span className={styles.bookLabel}>Book a Strategy Call</span>
              <span className={styles.bookSub}>30 minutes · pick a time that works</span>
            </span>
            <span className={styles.bookArrow} aria-hidden="true">→</span>
          </a>

          <ul className={styles.methods}>
            <li className={styles.method}>
              <span className={styles.methodIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 6.5l8.5 7 8.5-7" />
                </svg>
              </span>
              <span className={styles.methodBody}>
                <span className={styles.methodLabel}>Send an Email</span>
                <a href="mailto:team@scaleseo.co" className={styles.methodValue}>
                  team@scaleseo.co
                </a>
              </span>
              <span className={styles.methodArrow} aria-hidden="true">↗</span>
            </li>
            <li className={styles.method}>
              <span className={styles.methodIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6.5 3.5c.6 1.4 1.4 2.7 2.5 3.8-1 1-1.3 1.8-.8 2.7.9 1.7 2.3 3.1 4 4 .9.5 1.7.2 2.7-.8 1.1 1.1 2.4 1.9 3.8 2.5.4 2.9-.5 4.8-3 5.3-6.5-1-11.5-6-12.5-12.5-.5-2.5 1.4-3.4 3.3-5z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={styles.methodBody}>
                <span className={styles.methodLabel}>Call</span>
                <a href="tel:+14038751110" className={styles.methodValue}>
                  (403) 875-1110
                </a>
              </span>
              <span className={styles.methodArrow} aria-hidden="true">↗</span>
            </li>
          </ul>

        </div>

        {/* RIGHT — dark form card */}
        <div className={styles.right} data-contact-form>
          <h3 className={styles.formHeadline}>Your Details</h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="business">Business Name</label>
                <input type="text" id="business" name="business" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="website">Current Website</label>
                <input type="url" id="website" name="website" placeholder="https://" />
              </div>
            </div>

            <div className={styles.group}>
              <label>What do you need?</label>
              <div className={styles.tagRow}>
                {needTags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className={`${styles.tag} ${need === tag ? styles.tagActive : ""}`}
                    onClick={() => setNeed(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <label htmlFor="message">Tell me a bit more</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="What is the biggest challenge you're trying to solve right now?"
              />
            </div>

            <button type="submit" className={styles.submit} disabled={status === "sending"}>
              <span>Send it through</span>
              <span>→</span>
            </button>

            <div
              className={`${styles.status} ${
                status === "success"
                  ? styles.success
                  : status === "error"
                  ? styles.error
                  : ""
              }`}
            >
              {message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

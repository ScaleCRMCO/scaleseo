"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

const needTags = [
  "SEO",
  "Google Ads",
  "Web Development",
  "AI Search (GEO)",
  "Not sure yet",
];

export default function Contact() {
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
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Now booking · 1 spot Q3 2026
          </div>
          <h2 className={styles.headline}>
            Let&rsquo;s see if we&rsquo;re <em>a fit.</em>
          </h2>
          <p className={styles.lede}>
            The fastest way to get a straight answer is a 30-minute call. If
            you&rsquo;d rather put it in writing first, the form on the right
            goes straight to me.
          </p>

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
              <span className={styles.bookLabel}>Book a call</span>
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
                <span className={styles.methodLabel}>Email</span>
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
            <li className={styles.method}>
              <span className={styles.methodIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.9 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <span className={styles.methodBody}>
                <span className={styles.methodLabel}>Based in</span>
                <span className={styles.methodValue}>Calgary, Alberta</span>
              </span>
            </li>
          </ul>

          <p className={styles.footNote}>
            Working with established businesses across Canada — not limited to
            Calgary.{" "}
            <Link href="/about" className={styles.footLink}>
              More about Scale SEO →
            </Link>
          </p>
        </div>

        {/* RIGHT — dark form card */}
        <div className={styles.right}>
          <div className={styles.eyebrowDark}>Get in touch</div>
          <h3 className={styles.formHeadline}>Or put it in writing.</h3>

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
                placeholder="Where are you stuck, where do you want to be in 12 months, anything else I should know..."
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

"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./ContactSection.module.css";

type Status = "idle" | "sending" | "error";

const needTags = ["SEO", "Google Ads", "Web Development", "AI Search (GEO)", "Not sure yet"];

const points = [
  "Work directly with Corbin, no account managers",
  "Month-to-month, no long-term contracts",
  "You own your website, content, and data",
];

// Closing contact section (new brand): blue band with heading + points on
// the left, a large translucent navy logo mark in the middle, and a white
// form card on the right. Posts to /api/contact like the other forms.
export default function ContactSection({
  heading = "Ready to Improve Your Organic Search Visibility?",
  lead = "Tell me about your business and where you want to grow. You\u2019ll hear back from me directly, usually within 24 hours.",
  cta,
  points: pointsOverride,
}: {
  heading?: string;
  lead?: string;
  cta?: { href: string; label: string };
  points?: string[];
} = {}) {
  const pointList = pointsOverride ?? points;
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [need, setNeed] = useState("Not sure yet");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.need = need;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.left}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.lead}>{lead}</p>
        <ul className={styles.points}>
          {pointList.map((p) => (
            <li key={p}>
              <span aria-hidden="true">✓</span>
              {p}
            </li>
          ))}
        </ul>
        {cta && (
          <a href={cta.href} target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
            {cta.label}
          </a>
        )}
      </div>

      <svg className={styles.mark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="183" cy="183" r="164" strokeWidth="36" />
        <path d="M101 139 H224.5 V262" strokeWidth="38" />
      </svg>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Enter your details and I&rsquo;ll be in touch.</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name*" aria-label="Your name" required />
          <input type="email" name="email" placeholder="Email*" aria-label="Email" required />
          <input type="text" name="business" placeholder="Business Name*" aria-label="Business name" required />
          <input type="url" name="website" placeholder="Current Website" aria-label="Current website" />
          <fieldset className={styles.need}>
            <legend>What do you need?</legend>
            <div className={styles.tags}>
              {needTags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className={`${styles.tag} ${need === tag ? styles.tagActive : ""}`}
                  aria-pressed={need === tag}
                  onClick={() => setNeed(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </fieldset>
          <textarea
            name="message"
            required
            aria-label="Tell me a bit more"
            placeholder="Tell me a bit more*"
          />
          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Enquiry"}
          </button>
          {status === "error" && (
            <p className={styles.error} role="alert">
              Something went wrong. Email team@scaleseo.co directly.
            </p>
          )}
          <p className={styles.legal}>
            By submitting this form, you confirm that you have read and agree to
            the <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </section>
  );
}

"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type Status = "idle" | "sending" | "error";

const needTags = ["SEO", "Google Ads", "Web Development", "AI Search (GEO)", "Not sure yet"];

// Underlined-field form on navy. Posts to /api/contact (same fields as the
// old ContactCta form) and sends the visitor to /thank-you on success.
export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [need, setNeed] = useState("Not sure yet");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    delete data.consent;
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.required}>Fields marked with * are required.</p>

      <label className={styles.field}>
        <span>Name*</span>
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label className={styles.field}>
        <span>Email*</span>
        <input type="email" name="email" placeholder="Your email" required />
      </label>
      <label className={styles.field}>
        <span>Business Name*</span>
        <input type="text" name="business" placeholder="Your business" required />
      </label>
      <label className={styles.field}>
        <span>Current Website</span>
        <input type="url" name="website" placeholder="https://" />
      </label>

      <fieldset className={styles.field}>
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

      <label className={`${styles.field} ${styles.fieldTall}`}>
        <span>Tell me a bit more*</span>
        <textarea
          name="message"
          required
          placeholder="What is the biggest challenge you're trying to solve right now?"
        />
      </label>

      <div className={styles.submitRow}>
        <label className={styles.consent}>
          <input type="checkbox" name="consent" required />
          <span>
            I have read and agree to the{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </span>
        </label>
        <button type="submit" className={styles.send} disabled={status === "sending"}>
          <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M1 1.5h7.5V9" />
          </svg>
          <span>{status === "sending" ? "Sending…" : "Send"}</span>
        </button>
      </div>
      {status === "error" && (
        <p className={styles.error} role="alert">
          Something went wrong. Email team@scaleseo.co directly.
        </p>
      )}
    </form>
  );
}

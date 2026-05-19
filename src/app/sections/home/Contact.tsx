"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("Sending...");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

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
      } else {
        throw new Error("Request failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Email hello@scaleseo.co directly.");
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.eyebrow}>
        <span className={styles.dot} />
        Now booking · 1 spot Q3 2026
      </div>
      <h2 className={styles.headline}>
        Let&rsquo;s see if we&rsquo;re <em>a fit.</em>
      </h2>

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
            <label htmlFor="industry">Industry</label>
            <select id="industry" name="industry" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option value="trade-contractor">Trade Contractor</option>
              <option value="accounting">Accounting / Advisory</option>
              <option value="other">Other Service Business</option>
            </select>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="website">Current Website (if any)</label>
          <input type="url" id="website" name="website" placeholder="https://" />
        </div>

        <div className={styles.group}>
          <label htmlFor="message">What are you trying to solve?</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Where are you stuck, where do you want to be in 12 months, anything else I should know..."
          />
        </div>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          <span>Send enquiry</span>
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
    </section>
  );
}

import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What services do you offer?",
    a: "SEO — technical, on-page, and local — web development and design, and AI search optimization (GEO), which is getting your business cited by tools like ChatGPT, Perplexity, and Google's AI Overviews. Everything is scoped to what your business actually needs, not a fixed package.",
  },
  {
    q: "How do you charge for your services?",
    a: "Work is structured as a monthly retainer, scoped to your business rather than a generic tier. Every engagement starts with a free audit and a conversation, so what you're quoted reflects real scope — and there are no lock-in contracts.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Accounting firms and other professional & financial service businesses across Canada — established companies with the sales capacity to handle a real increase in inbound leads. I keep the roster small on purpose.",
  },
  {
    q: "How long does it take to see results?",
    a: "SEO compounds. Most clients start seeing meaningful ranking movement in 3–6 months, with the largest gains building from there. I'll give you a realistic timeline specific to your site during the initial audit, not a generic promise.",
  },
  {
    q: "What makes your approach different?",
    a: "You work directly with me — every audit, call, and piece of content, not an account manager or a junior handing it off. No black-hat shortcuts, no vanity reports, and a roster kept intentionally small so the work gets the attention it needs.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className={styles.section} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-label reveal-up">Frequently Asked Questions</div>
      <h2 className={`${styles.heading} reveal-up`}>
        Common questions about <em>working together.</em>
      </h2>

      <div className={styles.list}>
        {faqs.map((item) => (
          <details key={item.q} className={`${styles.item} reveal-up`}>
            <summary className={styles.question}>
              <span>{item.q}</span>
              <span className={styles.toggle} aria-hidden="true">+</span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

import styles from "./ServicesFaq.module.css";

const faqs = [
  {
    q: "How much does SEO cost in Calgary?",
    a: "Work is scoped to your business as a monthly retainer, not a fixed package — pricing depends on your current site, competition, and goals. Every engagement starts with a free audit so the number you're quoted reflects real scope, not a generic tier.",
  },
  {
    q: "How long until I see results from SEO?",
    a: "SEO compounds rather than spikes. Most clients see meaningful ranking movement in 3–6 months, with the largest gains building from there. You'll get a realistic timeline specific to your site during the initial audit.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Work is month-to-month with no lock-in contracts. If the work isn't earning its keep, you're free to walk — that's by design, not a loophole.",
  },
  {
    q: "Can you manage Google Ads and SEO together?",
    a: "Yes — that's the point of a single specialist. Paid and organic data inform each other: ad copy that converts becomes on-page copy, and keywords that drive paid leads get prioritized organically.",
  },
  {
    q: "What is AI Search Optimization (GEO) and do I need it?",
    a: "GEO structures your content so tools like ChatGPT, Perplexity, and Google AI Overviews can read, understand, and cite it accurately. If your buyers research with AI assistants — and most now do — it's worth having alongside traditional SEO, not instead of it.",
  },
];

export default function ServicesFaq() {
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
    <section className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.inner}>
        <div className={`index ${styles.eyebrow}`}>Common Questions</div>
        <h2 className={`${styles.heading} reveal-up`}>
          Answered before you <em>ask.</em>
        </h2>

        <div className={styles.list}>
          {faqs.map((item) => (
            <div key={item.q} className={`${styles.item} reveal-up`}>
              <div className={styles.question}>{item.q}</div>
              <p className={styles.answer}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

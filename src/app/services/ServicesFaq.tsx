import styles from "./ServicesFaq.module.css";

const faqs = [
  {
    q: "How are SEO services priced?",
    a: "Our engagements are bespoke and structured as monthly retainers rather than fixed, off-the-shelf packages. Pricing is determined individually based on your website's current authority, competitive landscape, and commercial objectives. Clients who move forward with a monthly SEO retainer receive a base-level audit at no cost; standalone or one-off audits are quoted separately based on scope.",
  },
  {
    q: "What is the typical timeline for seeing measurable results?",
    a: "SEO is a compounding investment rather than an immediate spike. While initial organic movements and technical corrections are often visible within 3 to 6 months, the most significant revenue-driving gains develop over a sustained period. We establish a realistic, data-backed timeline specific to your domain during our initial evaluation.",
  },
  {
    q: "Do you require long-term contractual commitments?",
    a: "No. To maintain complete accountability, all services are provided on a flexible, month-to-month basis with no long-term contract lock-ins. We believe our strategic value should justify the partnership each month. You retain full ownership of your platforms, assets, and data at all times.",
  },
  {
    q: "Can Google Ads and organic SEO be managed collectively?",
    a: "Yes. Managing paid search and organic SEO under a unified strategy ensures both channels inform and strengthen each other. High-converting copy from your Google Ads campaigns directly influences our on-page SEO optimization, while high-intent keyword data from organic search allows us to eliminate waste and refine target parameters within your paid campaigns.",
  },
  {
    q: "What is Generative Engine Optimization (GEO), and is it necessary for my firm?",
    a: "Generative Engine Optimization (GEO) involves structuring your digital content so that modern AI platforms—such as ChatGPT, Perplexity, and Google AI Overviews—can accurately read, synthesize, and cite your firm as an authority. For professional service firms whose clients utilize AI assistants for vendor research, GEO serves as an essential complement to traditional search engine optimization.",
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
          Frequently Asked Questions
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

import styles from "./AiPlatforms.module.css";

// AI platforms section: Scale SEO hub with the AI search platforms orbiting
// it (left), and four points with small icons in a 2x2 grid (right).

const platforms = [
  { name: "ChatGPT", src: "/images/ai-chatgpt.svg", x: 50, y: 6 },
  { name: "Claude", src: "/images/ai-claude.svg", x: 92, y: 46 },
  { name: "Gemini", src: "/images/ai-gemini.svg", x: 58, y: 92 },
  { name: "Perplexity", src: "/images/ai-perplexity.svg", x: 8, y: 58 },
];

const Icon = ({ d }: { d: string }) => (
  <span className={styles.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  </span>
);

const points = [
  {
    title: "Visibility Across Major AI Platforms",
    body: "We focus on the AI search platforms your customers may use, helping your website provide clear, accurate information that can be discovered and referenced.",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
  {
    title: "Content Built Around Real Customer Questions",
    body: "We improve service pages and supporting content to answer the questions potential customers ask when researching your industry, services, and competitors.",
    icon: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
  },
  {
    title: "Stronger Website & Brand Foundations",
    body: "We improve technical SEO, structured data, internal linking, and business information to help search engines understand your company and its services.",
    icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  },
  {
    title: "Clear Strategy & Ongoing Improvements",
    body: "We review relevant search opportunities, identify content gaps, and make practical improvements that support long-term visibility across traditional and AI-powered search.",
    icon: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  },
];

export default function AiPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Helping Your Business Get Found Across AI Search</h2>
        <div className={styles.intro}>
          <p>
            More customers are using AI tools to research businesses, compare
            services, and find answers before making a decision.
          </p>
          <p>
            Our AI search optimization services focus on improving how your
            business is understood and discovered across platforms such as
            ChatGPT, Google AI Overviews, Gemini, Perplexity, and other
            AI-powered search tools.
          </p>
        </div>
      </div>

      <div className={styles.body}>
        {/* Hub diagram */}
        <div className={styles.diagram} aria-label="AI search platforms: ChatGPT, Claude, Gemini and Perplexity">
          <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="50" cy="50" r="44" className={styles.orbit} />
            {platforms.map((p) => (
              <line key={p.name} x1="50" y1="50" x2={p.x} y2={p.y} className={styles.line} />
            ))}
          </svg>
          <div className={styles.hub}>
            <svg viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx="183" cy="183" r="164" strokeWidth="36" />
              <path d="M101 139 H224.5 V262" strokeWidth="38" />
            </svg>
            <span>Scale SEO</span>
          </div>
          {platforms.map((p, i) => (
            <div key={p.name} className={styles.node} style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${i * 0.6}s` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt="" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>

        {/* Four points */}
        <div className={styles.points}>
          {points.map((p) => (
            <div key={p.title} className={styles.point}>
              <Icon d={p.icon} />
              <h3 className={styles.pointTitle}>{p.title}</h3>
              <p className={styles.pointBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

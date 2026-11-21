import type { Metadata } from "next";
import { Hero, Intro, Services, Cases, Help, Founder, Industries, Process, Why, Reviews, Faq, Blog, Cta } from "./sections/v3/Sections";
import { faqs } from "./sections/home/FAQ";
import v3 from "./sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "Scale SEO | Calgary SEO Agency for Accounting Firms" },
  description:
    "Calgary SEO services for professional service and B2B businesses. Work directly with an SEO specialist on a month-to-month campaign with no long-term contracts.",
  alternates: { canonical: "/" },
};

// Homepage-only schema — links to the global #website and #organization
// nodes defined in layout.tsx.
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://scaleseo.co/#webpage",
  url: "https://scaleseo.co/",
  name: "Scale SEO | Calgary SEO Agency for Accounting Firms",
  description:
    "Scale SEO is a Calgary SEO company providing ongoing SEO services for professional service and B2B businesses across Canada. Campaigns combine technical SEO, content, local SEO and website improvements to grow organic visibility and qualified traffic.",
  isPartOf: {
    "@id": "https://scaleseo.co/#website",
  },
  about: {
    "@id": "https://scaleseo.co/#organization",
  },
  publisher: {
    "@id": "https://scaleseo.co/#organization",
  },
  inLanguage: "en-CA",
};

const accountingCases = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA \u00b7 Calgary, Canada",
    services: "SEO / Website Development / Content Strategy / Google Ads",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 395, prefix: "+", suffix: "%" },
    metricLabel: "Google Search Impressions",
    metricNote: "+205% organic clicks over the same comparison",
    summary:
      "We redeveloped Jensen CPA\u2019s website and improved its search presence for corporate tax, bookkeeping, and fractional CFO services. Through technical SEO, dedicated service pages, and accounting-focused content, the firm recorded nearly five times as many Google Search impressions and three times as many organic clicks when comparing the first and latest 30-day periods. Results measured June\u2013November 2026.",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants \u2014 Brisbane, Australia",
    services: "SEO / Technical SEO / Content Strategy",
    image: "/images/empire-accountants-cover.webp",
    metric: { from: 5, to: 1, prefix: "Page " },
    metricLabel: "Up from page 5",
    summary:
      "Empire Accountants wanted to attract more business clients through Google Search. We improved the firm\u2019s accounting service pages, strengthened internal linking, developed supporting content, and implemented technical and local SEO improvements. Targeted accounting searches moved from approximately page five to page one of Google, helping the firm strengthen its online presence in Brisbane.",
  },
];

export default function Home() {
  return (
    <main className={`home ${v3.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Hero />
      <Intro />
      <Services />
      <Cases cases={accountingCases} />
      <Help />
      <Founder />
      <Industries />
      <Process />
      <Why />
      <Reviews />
      <Faq faqs={faqs} />
      <Blog />
      <Cta />
    </main>
  );
}

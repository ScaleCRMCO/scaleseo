import type { Metadata } from "next";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import Differently, { whyPoints } from "./sections/home/Differently";
import ServicesGrid from "./sections/home/ServicesGrid";
import CaseStudy from "./sections/home/CaseStudy";
import CampaignAreas from "./sections/home/CampaignAreas";
import IndustriesTeaser from "./sections/home/IndustriesTeaser";
import Process from "./sections/home/Process";
import BlogTeaser from "./sections/home/BlogTeaser";
import FAQ from "./sections/home/FAQ";
import HomeCta from "./sections/home/HomeCta";
import RevealOnScroll from "./components/RevealOnScroll";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: { absolute: "Calgary SEO Company | Founder-Led SEO Services | Scale SEO" },
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
  name: "Calgary SEO Company | Founder-Led SEO Services | Scale SEO",
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
    client: "Jensen CPA \u2014 Calgary, Canada",
    services: "SEO / Website Development / Content Strategy / Google Ads",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 227, prefix: "+", suffix: "%" },
    metricLabel: "Search Impressions",
    summary:
      "Jensen CPA wanted to improve its visibility for corporate tax, bookkeeping, and fractional CFO services in Calgary. We improved the firm\u2019s website, developed dedicated service pages, strengthened its technical SEO, and built a content strategy around business accounting topics. The campaign helped increase Google Search visibility and establish stronger rankings for relevant accounting services.",
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
    <main className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Hero />
      <Differently />
      <ServicesGrid />
      <About />
      <CaseStudy
        label="Scale SEO Client Work"
        heading="SEO Results From Real Accounting Firms"
        aside="We work with accounting firms to improve their search visibility, strengthen their websites, and attract more of the clients they want to serve. Here’s a look at some of our work."
        cards={accountingCases}
      />
      <CampaignAreas />
      <IndustriesTeaser />
      <Process />
      <Differently
        id="why-label"
        label="Why Accounting Firms Choose Scale SEO"
        points={whyPoints}
        more={false}
        wide
      />
      <Testimonials />
      <FAQ />
      <BlogTeaser />
      <HomeCta />
      <RevealOnScroll />
    </main>
  );
}

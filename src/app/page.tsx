import type { Metadata } from "next";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
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

export default function Home() {
  return (
    <main className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Hero />
      <ServicesGrid />
      <About />
      <CaseStudy />
      <CampaignAreas />
      <IndustriesTeaser />
      <Process />
      <Testimonials />
      <FAQ />
      <BlogTeaser />
      <HomeCta />
      <RevealOnScroll />
    </main>
  );
}

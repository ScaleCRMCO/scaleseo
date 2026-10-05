import type { Metadata } from "next";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import ServicesGrid from "./sections/home/ServicesGrid";
import Comparison from "./sections/home/Comparison";
import CaseStudy from "./sections/home/CaseStudy";
import CampaignAreas from "./sections/home/CampaignAreas";
import IndustriesTeaser from "./sections/home/IndustriesTeaser";
import Process from "./sections/home/Process";
import BlogTeaser from "./sections/home/BlogTeaser";
import FAQ from "./sections/home/FAQ";
import Contact from "./components/ContactCta";
import RevealOnScroll from "./components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Calgary SEO Services | Scale SEO",
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
  name: "Calgary SEO Services for Growing Businesses | Scale SEO",
  description:
    "Scale SEO provides Calgary SEO services for professional service and B2B businesses. Founder-led SEO campaigns combine technical SEO, content, local SEO and website improvements to grow organic visibility and qualified traffic.",
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
      <Comparison />
      <About />
      <CaseStudy />
      <CampaignAreas />
      <IndustriesTeaser />
      <Process />
      <FAQ />
      <BlogTeaser />
      <Contact />
      <RevealOnScroll />
    </main>
  );
}

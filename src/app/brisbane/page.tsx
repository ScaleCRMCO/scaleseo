import type { Metadata } from "next";
import BrisbaneHero from "./sections/BrisbaneHero";
import BrisbaneServices from "./sections/BrisbaneServices";
import BrisbaneForWhom from "./sections/BrisbaneForWhom";
import BrisbanePrinciples from "./sections/BrisbanePrinciples";
import BrisbaneProcess from "./sections/BrisbaneProcess";
import BrisbaneCTA from "./sections/BrisbaneCTA";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata: Metadata = {
  title: "SEO for Brisbane Businesses | Scale SEO — Corbin Jensen",
  description:
    "Specialist SEO for accounting firms and trade contractors in Brisbane, QLD. On-page SEO, local SEO, and Google Business Profile management — done by one specialist, not an agency.",
  alternates: {
    canonical: "https://scaleseo.co/brisbane",
  },
  openGraph: {
    title: "SEO for Brisbane Businesses | Scale SEO",
    description:
      "Specialist SEO for accounting firms and trade contractors in Brisbane. Few clients. Real revenue.",
    url: "https://scaleseo.co/brisbane",
    locale: "en_AU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Scale SEO",
  url: "https://scaleseo.co/brisbane",
  telephone: "+61492251241",
  email: "team@scaleseo.co",
  founder: { "@type": "Person", name: "Corbin Jensen" },
  description:
    "Specialist SEO freelancer serving accounting firms and trade contractors in Brisbane, Queensland. Services include on-page SEO, local SEO, technical SEO, and Google Business Profile management.",
  areaServed: {
    "@type": "City",
    name: "Brisbane",
    containedInPlace: {
      "@type": "State",
      name: "Queensland",
      containedInPlace: { "@type": "Country", name: "Australia" },
    },
  },
  serviceType: [
    "SEO",
    "Local SEO",
    "On-Page SEO",
    "Technical SEO",
    "Google Business Profile Management",
  ],
  sameAs: [
    "https://www.linkedin.com/in/corbin-jensen-9a9b77127/",
    "https://maps.app.goo.gl/Lbyio2SoqzhDjttT8",
  ],
};

export default function BrisbanePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrisbaneHero />
      <BrisbaneServices />
      <BrisbaneForWhom />
      <BrisbanePrinciples />
      <BrisbaneProcess />
      <BrisbaneCTA />
      <RevealOnScroll />
    </>
  );
}

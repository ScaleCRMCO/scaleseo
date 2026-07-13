import Hero from "./sections/home/Hero";
import Marquee from "./sections/home/Marquee";
import CaseStudy from "./sections/home/CaseStudy";
import Services from "./sections/home/Services";
import ForWhom from "./sections/home/ForWhom";
import Process from "./sections/home/Process";
import About from "./sections/home/About";
import Contact from "./sections/home/Contact";
import Interstitial from "./sections/home/Interstitial";
import RevealOnScroll from "./components/RevealOnScroll";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Scale SEO",
  description:
    "Independent SEO specialist helping established Canadian businesses — accounting firms and other premium service industries — turn organic search into revenue. One specialist, working directly with each client.",
  url: "https://scaleseo.co",
  email: "team@scaleseo.co",
  telephone: "+14038751110",
  founder: {
    "@type": "Person",
    name: "Corbin Jensen",
    jobTitle: "SEO Specialist",
    url: "https://scaleseo.co/about",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "State", name: "Alberta" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "Search Engine Optimization",
    "Local SEO",
    "Technical SEO",
    "AI Search Optimization",
  ],
  sameAs: [
    "https://www.linkedin.com/in/corbin-jensen-9a9b77127/",
    "https://www.instagram.com/scaleseo.co/",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <CaseStudy />
      <Interstitial eyebrow="Why work this way">
        I keep a <strong>small roster on purpose</strong> — every client gets
        the person actually doing the work, <em>not a rotating team</em>.
      </Interstitial>
      <ForWhom />
      <Services />
      <Interstitial eyebrow="How I measure it">
        Rankings are a means, not the goal. <strong>Calls, leads, revenue</strong> —
        that&rsquo;s <em>what gets reported</em>, every month.
      </Interstitial>
      <Process />
      <About />
      <Contact />
      <RevealOnScroll />
    </main>
  );
}

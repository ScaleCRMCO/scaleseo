import Hero from "./sections/home/Hero";
import Marquee from "./sections/home/Marquee";
import CaseStudy from "./sections/home/CaseStudy";
import Services from "./sections/home/Services";
import IndustriesTeaser from "./sections/home/IndustriesTeaser";
import Process from "./sections/home/Process";
import About from "./sections/home/About";
import BlogTeaser from "./sections/home/BlogTeaser";
import Contact from "./sections/home/Contact";
import Interstitial from "./sections/home/Interstitial";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <CaseStudy />
      <Interstitial eyebrow="Why work this way">
        I keep a <strong>small roster on purpose</strong> — every client gets
        the person actually doing the work, <em>not a rotating team</em>.
      </Interstitial>
      <Services />
      <IndustriesTeaser />
      <Process />
      <About />
      <BlogTeaser />
      <Contact />
      <RevealOnScroll />
    </main>
  );
}

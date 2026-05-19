import Hero from "./sections/home/Hero";
import Marquee from "./sections/home/Marquee";
import CaseStudy from "./sections/home/CaseStudy";
import Services from "./sections/home/Services";
import ForWhom from "./sections/home/ForWhom";
import Process from "./sections/home/Process";
import About from "./sections/home/About";
import Contact from "./sections/home/Contact";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <CaseStudy />
      <Services />
      <ForWhom />
      <Process />
      <About />
      <Contact />
      <RevealOnScroll />
    </main>
  );
}

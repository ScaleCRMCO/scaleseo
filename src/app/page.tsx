import type { Metadata } from "next";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import Services from "./sections/home/Services";
import CaseStudy from "./sections/home/CaseStudy";
import Marquee from "./sections/home/Marquee";
import IndustriesTeaser from "./sections/home/IndustriesTeaser";
import Process from "./sections/home/Process";
import BlogTeaser from "./sections/home/BlogTeaser";
import FAQ from "./sections/home/FAQ";
import Contact from "./sections/home/Contact";
import RevealOnScroll from "./components/RevealOnScroll";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CaseStudy />
      <Marquee />
      <IndustriesTeaser />
      <Process />
      <FAQ />
      <BlogTeaser />
      <Contact />
      <RevealOnScroll />
    </main>
  );
}

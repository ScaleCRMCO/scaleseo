import AboutHero from "./sections/AboutHero";
import AboutLayout from "./sections/AboutLayout";
import AboutCTA from "./sections/AboutCTA";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "About Corbin Jensen — Scale SEO",
  description:
    "Corbin Jensen is an independent SEO specialist based in Calgary, Alberta, working with a small number of established Canadian businesses. No agency, no account managers — just the work.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutLayout />
      <AboutCTA />
      <RevealOnScroll />
    </main>
  );
}

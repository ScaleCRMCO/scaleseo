import AboutHero from "./sections/AboutHero";
import StorySection from "./sections/StorySection";
import WorkSection from "./sections/WorkSection";
import PrinciplesSection from "./sections/PrinciplesSection";
import NumbersSection from "./sections/NumbersSection";
import OffTheClockSection from "./sections/OffTheClockSection";
import PlanSection from "./sections/PlanSection";
import AboutCTA from "./sections/AboutCTA";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "About — Corbin Jensen | Scale SEO",
  description:
    "Canadian by birth, Australian by address. Corbin Jensen runs Scale SEO, a specialist freelancer practice serving trade contractors and accounting firms across Canada and Australia.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <WorkSection />
      <PrinciplesSection />
      <NumbersSection />
      <OffTheClockSection />
      <PlanSection />
      <AboutCTA />
      <RevealOnScroll />
    </main>
  );
}

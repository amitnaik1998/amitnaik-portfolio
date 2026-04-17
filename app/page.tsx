import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedDivider from "@/components/AnimatedDivider";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <AnimatedDivider />
      <FeaturedProject />
      <AnimatedDivider />
      <Experience />
      <AnimatedDivider />
      <Skills />
      <AnimatedDivider />
      <Contact />
    </main>
  );
}

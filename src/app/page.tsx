import Header from "@/components/shared/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Research from "@/components/sections/research";
import Contact from "@/components/sections/contact";
import Footer from "@/components/shared/footer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import SmoothScroll from "@/components/ui/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <SectionWrapper id="about" >
            <About />
          </SectionWrapper>
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
          <Projects />
          <Research />
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

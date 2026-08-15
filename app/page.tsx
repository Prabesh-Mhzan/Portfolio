import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsPreview from "@/components/ProjectsPreview";
import Certifications from "@/components/Certifications";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <ProjectsPreview />
      <Certifications />
      <BlogPreview />
      <Contact />
    </main>
  );
}

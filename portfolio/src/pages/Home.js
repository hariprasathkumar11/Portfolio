import { useEffect, useRef, useState } from "react";
import Hero       from "../components/Hero";
import About      from "../components/About";
import Skills     from "../components/Skills";
import Experience from "../components/Experience";
import Projects   from "../components/Projects";
import Contact    from "../components/Contact";

const SECTIONS = ["about", "skills", "experience", "projects", "contact"];

export default function Home({ setActiveSection }) {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            const label = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
            setActiveSection(label);
          }
        });
      },
      { threshold: 0.2 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Also observe home
    const homeEl = document.getElementById("home");
    if (homeEl) observer.observe(homeEl);

    return () => observer.disconnect();
  }, [setActiveSection]);

  const isVisible = (id) => visibleSections.has(id);

  return (
    <main>
      <Hero />
      <About      visible={isVisible("about")} />
      <Skills     visible={isVisible("skills")} />
      <Experience visible={isVisible("experience")} />
      <Projects   visible={isVisible("projects")} />
      <Contact    visible={isVisible("contact")} />
    </main>
  );
}

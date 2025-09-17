"use client";

// Sections
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TechnologySection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsSection } from "@/components/sections/self-projects";

// Components
import { Navigation } from "@/components/navigation";
import Plasma from "@/components/Plasma";
import { useState } from "react";

export default function Home() {
  const SECTIONS = [
    { key: "about", label: "About", component: <AboutSection /> },
    { key: "resume", label: "Resume", component: <ResumeSection /> },
    { key: "portfolio", label: "Portfolio", component: <PortfolioSection /> },
    { key: "projects", label: "Projects", component: <ProjectsSection /> },
    { key: "contact", label: "Contact", component: <ContactSection /> },
  ];
  const [activeSection, setActiveSection] = useState(SECTIONS[0].key);
  return (
    <main className="min-h-screen">
      <div className="absolute w-full h-full z-2">
        <Plasma
          color="#AD3088"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={SECTIONS}
      />
      <div className="grid grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="col-span-1">
          <HeroSection />
        </div>
        <div className="col-span-2 overflow-auto max-h-screen">
          {SECTIONS.find((s) => s.key === activeSection)?.component}
        </div>
      </div>
    </main>
  );
}

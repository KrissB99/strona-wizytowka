"use client";

import { useState } from "react";

// Sections
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsSection } from "@/components/sections/self-projects";

// Components
import { Navigation } from "@/components/navigation";
import Plasma from "@/components/react-bits/Plasma";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const SECTIONS = [
    { key: "about", label: t("nav.about"), component: <AboutSection /> },
    { key: "resume", label: t("nav.resume"), component: <ResumeSection /> },
    {
      key: "portfolio",
      label: t("nav.portfolio"),
      component: <PortfolioSection />,
    },
    {
      key: "projects",
      label: t("nav.projects"),
      component: <ProjectsSection />,
    },
    { key: "contact", label: t("nav.contact"), component: <ContactSection /> },
  ];
  const [activeSection, setActiveSection] = useState("about");
  return (
    <main className="min-h-screen bg-[#f1ede8] dark:bg-black">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={SECTIONS}
      />
      <div className="absolute w-full h-full z-2">
        <Plasma
          color={theme === "light" ? "#8B5ED4" : "#FEFEDF"}
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="col-span-1">
          <HeroSection />
        </div>
        <div className="col-span-2 h-screen overflow-auto">
          {SECTIONS.find((s) => s.key === activeSection)?.component}
        </div>
      </div>
    </main>
  );
}

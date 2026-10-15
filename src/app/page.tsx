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
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import { TechnologySection } from "@/components/sections/skills-section";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const [activeSection, setActiveSection] = useState("about");

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

  return (
    <main className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={SECTIONS}
      />
      <div className="absolute w-full h-full z-2">
        <AnimatedGradient
          config={
            theme === "light"
              ? {
                preset: "custom",
                color1: "#faf8f5",
                color2: "#f1e4ea",
                color3: "#e9e2da",
                speed: 4,
              }
              : {
                preset: "custom",
                color1: "#141211",
                color2: "#2a1c22",
                color3: "#1f1b19",
                speed: 4,
              }
          }
          noise={{ opacity: 0.06 }}
        />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3">
        <div className="col-span-1">
          <HeroSection />
        </div>
        <div className="hidden lg:block col-span-2 h-screen overflow-auto">
          {SECTIONS.find((s) => s.key === activeSection)?.component}
        </div>
      </div>
      <div className="lg:hidden">
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <TechnologySection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}

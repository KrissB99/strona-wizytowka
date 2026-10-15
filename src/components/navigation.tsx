"use client";
import React, { useState, JSX } from "react";

// Icons
import { Menu, X } from "lucide-react";

// Components
import { Button } from "@/components/shadcn/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "./language-toggle";

import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  sections: { key: string; label: string; component: JSX.Element }[];
}

export function Navigation({
  activeSection,
  setActiveSection,
  sections,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16 bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none px-6 md:px-12">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              className="flex space-x-2"
              initial={{ y: 5 }}
              animate={{ y: 0 }}
              transition={{ type: "spring" }}
            >
              {sections.map((section, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="link"
                    onClick={() => setActiveSection(section.key)}
                    className={`text-sm font-medium transition-colors hover:text-foreground ${activeSection === section.key
                        ? "text-primary underline underline-offset-8 decoration-1"
                        : "text-muted-foreground"
                      }`}
                  >
                    {section.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-xl border border-border rounded-2xl">
              {sections.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSection(item.key);
                    scrollToSection(item.key);
                  }}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${activeSection === item.key
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

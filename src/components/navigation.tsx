import React, { useState, useEffect, JSX } from "react";
import { Button } from "@/components/shadcn/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "./language-toggle";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-100">
      <div className="mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-2">
              {sections.map((section, index) => (
                <Button
                  variant="link"
                  key={index}
                  onClick={() => setActiveSection(section.key)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section.key
                      ? "text-primary underline underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.label}
                </Button>
              ))}
            </div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/20 dark:bg-black/20 backdrop-blur-3xl border-t border-border rounded-2xl">
              {sections.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(item.key)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.key
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

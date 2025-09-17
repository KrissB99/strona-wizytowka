"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </Button>
  );
}

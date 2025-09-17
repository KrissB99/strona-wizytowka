"use client";

import { useLanguage } from "@/contexts/language-context";
import { useEffect, useState } from "react";

export function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [clientLang, setClientLang] = useState("en");

  // Prevent hydration mismatch by setting the language after mount
  useEffect(() => {
    setClientLang(language);
  }, [language]);

  return <html lang={clientLang}>{children}</html>;
}

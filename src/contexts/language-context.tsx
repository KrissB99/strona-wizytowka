"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pl";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.name": "John Doe",
    "hero.title": "Frontend Developer",
    "hero.tagline":
      "Building modern web experiences with cutting-edge technologies",
    "hero.cta": "View My Work",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I'm a passionate Frontend Developer with expertise in Full-Stack Development and AI integration. I love creating intuitive, performant web applications that solve real-world problems.",
    "about.skills":
      "My expertise includes modern JavaScript frameworks, responsive design, backend development, and AI-powered solutions.",

    // Resume Section
    "resume.title": "Resume",
    "resume.education": "Education",
    "resume.experience": "Experience",
    "resume.skills": "Technical Skills",
    "resume.education.degree": "Bachelor of Computer Science",
    "resume.education.university": "University of Technology",
    "resume.education.year": "2018 - 2022",
    "resume.experience.senior": "Senior Frontend Developer",
    "resume.experience.senior.company": "Tech Solutions Inc.",
    "resume.experience.senior.period": "2022 - Present",
    "resume.experience.senior.desc":
      "Leading frontend development projects, mentoring junior developers, and implementing AI-powered features.",
    "resume.experience.junior": "Junior Full-Stack Developer",
    "resume.experience.junior.company": "Digital Agency",
    "resume.experience.junior.period": "2020 - 2022",
    "resume.experience.junior.desc":
      "Developed responsive web applications using React, Node.js, and modern development practices.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.dentist.title": "Modern Dental Clinic Website",
    "portfolio.dentist.desc":
      "A professional website for a dental clinic featuring appointment booking, service showcase, and patient testimonials.",
    "portfolio.dentist.tech": "React, Next.js, TypeScript, Tailwind CSS",
    "portfolio.psychologist.title": "Psychology Practice Website",
    "portfolio.psychologist.desc":
      "A calming and professional website for a psychology practice with online consultation booking and resource library.",
    "portfolio.psychologist.tech":
      "React, Next.js, Framer Motion, Tailwind CSS",
    "portfolio.viewProject": "View Project",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "I'm always interested in new opportunities and collaborations. Let's discuss your next project!",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.social": "Connect with me",
  },
  pl: {
    // Navigation
    "nav.home": "Strona główna",
    "nav.about": "O mnie",
    "nav.resume": "CV",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.greeting": "Cześć, jestem",
    "hero.name": "Jan Kowalski",
    "hero.title": "Frontend Developer",
    "hero.tagline":
      "Tworzę nowoczesne aplikacje webowe z wykorzystaniem najnowszych technologii",
    "hero.cta": "Zobacz moje prace",

    // About Section
    "about.title": "O mnie",
    "about.description":
      "Jestem pasjonatem Frontend Development z doświadczeniem w Full-Stack Development i integracji AI. Uwielbiam tworzyć intuicyjne, wydajne aplikacje webowe, które rozwiązują rzeczywiste problemy.",
    "about.skills":
      "Moja ekspertyza obejmuje nowoczesne frameworki JavaScript, responsive design, backend development i rozwiązania oparte na AI.",

    // Resume Section
    "resume.title": "CV",
    "resume.education": "Wykształcenie",
    "resume.experience": "Doświadczenie",
    "resume.skills": "Umiejętności techniczne",
    "resume.education.degree": "Licencjat Informatyki",
    "resume.education.university": "Politechnika",
    "resume.education.year": "2018 - 2022",
    "resume.experience.senior": "Senior Frontend Developer",
    "resume.experience.senior.company": "Tech Solutions Inc.",
    "resume.experience.senior.period": "2022 - Obecnie",
    "resume.experience.senior.desc":
      "Prowadzenie projektów frontend, mentoring młodszych programistów i implementacja funkcji opartych na AI.",
    "resume.experience.junior": "Junior Full-Stack Developer",
    "resume.experience.junior.company": "Agencja Cyfrowa",
    "resume.experience.junior.period": "2020 - 2022",
    "resume.experience.junior.desc":
      "Tworzenie responsywnych aplikacji webowych z wykorzystaniem React, Node.js i nowoczesnych praktyk programistycznych.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.dentist.title": "Strona nowoczesnej kliniki dentystycznej",
    "portfolio.dentist.desc":
      "Profesjonalna strona internetowa dla kliniki dentystycznej z funkcją rezerwacji wizyt, prezentacją usług i opiniami pacjentów.",
    "portfolio.dentist.tech": "React, Next.js, TypeScript, Tailwind CSS",
    "portfolio.psychologist.title": "Strona gabinetu psychologicznego",
    "portfolio.psychologist.desc":
      "Spokojna i profesjonalna strona dla gabinetu psychologicznego z możliwością rezerwacji konsultacji online i biblioteką zasobów.",
    "portfolio.psychologist.tech":
      "React, Next.js, Framer Motion, Tailwind CSS",
    "portfolio.viewProject": "Zobacz projekt",

    // Contact Section
    "contact.title": "Skontaktuj się",
    "contact.description":
      "Zawsze jestem zainteresowany nowymi możliwościami i współpracą. Porozmawiajmy o Twoim następnym projekcie!",
    "contact.form.name": "Imię",
    "contact.form.email": "Email",
    "contact.form.message": "Wiadomość",
    "contact.form.send": "Wyślij wiadomość",
    "contact.social": "Połącz się ze mną",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pl" : "en"));
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

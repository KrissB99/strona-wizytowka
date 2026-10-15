"use client";

import type React from "react";
import Image from "next/image";

// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";

// Icons
import {
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Layers,
  Languages,
} from "lucide-react";

// Internal
import { useLanguage } from "@/contexts/language-context";
import { Headline2 } from "../text";

/** "YYYY-MM" → "Jul 2024" / "lip 2024" */
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pl: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
};

type Entry = {
  title: string;
  org: string;
  logo?: string;
  location: string;
  start: string;
  end?: string;
};

type Experience = Entry & { bullets: string[]; technologies: string[] };
type Education = Entry & { description: string };

const cardClass =
  "transition-shadow hover:shadow-md bg-card/70 backdrop-blur-xl border border-border hover:bg-card";

function OrgLogo({ src, name }: { src?: string; name: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={48}
        height={48}
        className="rounded-lg object-cover border border-border bg-card"
      />
    );
  }
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden="true"
      className="w-12 h-12 rounded-lg border border-border bg-secondary text-secondary-foreground grid place-items-center text-sm font-semibold"
    >
      {initials}
    </div>
  );
}

function SectionHeading({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center mb-6 mt-12 first:mt-0 ml-6 md:ml-0">
      <Icon className="h-5 w-5 text-primary mr-2" />
      <h3 className="font-display text-2xl text-foreground">{text}</h3>
    </div>
  );
}

export function ResumeSection() {
  const { t, language } = useLanguage();

  const fmt = (ym: string) => {
    const [y, m] = ym.split("-").map(Number);
    return `${MONTHS[language][m - 1]} ${y}`;
  };
  const period = (e: Entry) =>
    `${fmt(e.start)} – ${e.end ? fmt(e.end) : t("resume.present")}`;

  const experiences: Experience[] = [
    {
      title: t("resume.appcraft.title"),
      org: t("resume.appcraft.company"),
      location: t("resume.remotePoland"),
      start: "2024-07",
      bullets: [1, 2, 3, 4].map((i) => t(`resume.appcraft.b${i}`)),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Branding"],
    },
    {
      title: t("resume.tt.title"),
      org: "Transition Technologies",
      location: t("resume.tt.location"),
      start: "2025-11",
      end: "2026-01",
      bullets: [1, 2, 3].map((i) => t(`resume.tt.b${i}`)),
      technologies: ["Angular", "TypeScript", "WCAG"],
    },
    {
      title: t("resume.nokia.title"),
      org: "Nokia",
      logo: "/logos/nokia.png",
      location: t("resume.nokia.location"),
      start: "2022-01",
      bullets: [1, 2, 3, 4, 5].map((i) => t(`resume.nokia.b${i}`)),
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Zustand",
        "Tailwind CSS",
        "shadcn/ui",
        "Python",
        "REST API",
        "Docker",
      ],
    },
    {
      title: t("resume.unclassified.title"),
      org: "Unclassified",
      logo: "/logos/unclassified_logo.jpeg",
      location: t("resume.unclassified.location"),
      start: "2023-05",
      end: "2023-11",
      bullets: [1, 2, 3].map((i) => t(`resume.unclassified.b${i}`)),
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "AI", "Jira", "Agile"],
    },
  ];

  const education: Education[] = [
    {
      title: t("resume.pl.degree"),
      org: t("resume.pl.school"),
      logo: "/logos/politechnila-lubelska.jpg",
      location: t("resume.pl.location"),
      start: "2022-10",
      end: "2024-06",
      description: t("resume.pl.description"),
    },
    {
      title: t("resume.denmark.degree"),
      org: t("resume.denmark.school"),
      logo: "/logos/sdu.png",
      location: t("resume.denmark.location"),
      start: "2021-03",
      end: "2021-07",
      description: t("resume.denmark.description"),
    },
    {
      title: t("resume.wat.degree"),
      org: t("resume.wat.school"),
      logo: "/logos/wat.png",
      location: t("resume.wat.location"),
      start: "2018-09",
      end: "2022-06",
      description: t("resume.wat.description"),
    },
  ];

  // Core skills (highlighted on the CV) render filled; the rest as outline.
  const skillGroups: { label: string; core: string[]; other: string[] }[] = [
    {
      label: t("resume.skills.frontend"),
      core: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+"],
      other: ["Angular", "Zustand", "HTML5", "CSS3", "REST APIs"],
    },
    {
      label: t("resume.skills.styling"),
      core: ["Tailwind CSS", "UI/UX"],
      other: ["shadcn/ui", "Material UI", "DaisyUI", "Framer Motion", "Accessibility", "Branding", "SEO"],
    },
    {
      label: t("resume.skills.backend"),
      core: ["Python", "REST API development"],
      other: ["Django", "Flask", "SQLAlchemy", "ORM", "SQL", "PL/SQL", "MariaDB", "Pandas", "NumPy"],
    },
    {
      label: t("resume.skills.devops"),
      core: ["CI/CD", "Vercel"],
      other: ["Cypress", "Pytest", "Docker", "Docker Compose", "Git", "GitLab", "Linux", "WSL"],
    },
    {
      label: t("resume.skills.ai"),
      core: [],
      other: ["TensorFlow", "Keras", "AI-powered features", "Automation"],
    },
    {
      label: t("resume.skills.ways"),
      core: [],
      other: ["Agile", "Scrum", "Jira", "Requirements gathering"],
    },
  ];

  const languages = [
    { name: t("resume.lang.polish"), level: t("resume.lang.native") },
    { name: t("resume.lang.english"), level: t("resume.lang.c1") },
  ];

  const Meta = ({ e }: { e: Entry }) => (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
      <span className="font-medium text-primary">{e.org}</span>
      <span className="flex items-center">
        <MapPin className="h-3 w-3 mr-1 shrink-0" />
        {e.location}
      </span>
      <span className="flex items-center tabular-nums">
        <Calendar className="h-3 w-3 mr-1 shrink-0" />
        {period(e)}
      </span>
    </div>
  );

  return (
    <section
      id="resume"
      className="lg:relative lg:h-screen lg:py-12 lg:pt-auto lg:z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto md:py-12">
        <div className="text-center mb-12">
          <Headline2 text={t("resume.title")} />
        </div>

        {/* Experience */}
        <SectionHeading icon={Briefcase} text={t("resume.experience")} />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.org + exp.start} className={cardClass}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <OrgLogo src={exp.logo} name={exp.org} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <Meta e={exp} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 mb-4 text-pretty marker:text-primary">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <SectionHeading icon={GraduationCap} text={t("resume.education")} />
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.org + edu.start} className={cardClass}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <OrgLogo src={edu.logo} name={edu.org} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{edu.title}</CardTitle>
                    <Meta e={edu} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-pretty italic">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <SectionHeading icon={Layers} text={t("resume.skillset")} />
        <Card className={cardClass}>
          <CardContent className="p-6 space-y-5">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.core.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                  {g.other.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Languages */}
        <SectionHeading icon={Languages} text={t("resume.languages")} />
        <Card className={cardClass}>
          <CardContent className="p-6">
            <dl className="divide-y divide-border">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between py-2 first:pt-0 last:pb-0">
                  <dt className="font-medium text-foreground">{l.name}</dt>
                  <dd className="text-muted-foreground">{l.level}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

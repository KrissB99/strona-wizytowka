import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Headline2 } from "../text";

export function ResumeSection() {
  const { t } = useLanguage();
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Nokia",
      location: "Remote",
      period: "2022 - Ongoing",
      logo: "/logos/nokia.png",
      description: t("resume.nokiaDesc"),
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Python",
        "SQLALchemy",
        "TailwindCSS",
        "Docker",
        "Git",
        "API",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "unclassified",
      location: "Remote",
      period: "2021 - 2022",
      logo: "/logos/unclassified_logo.jpeg",
      description: t("resume.unclassifiedDesc"),
      technologies: [
        "React.js",
        "Python",
        "TailwindCSS",
        "Material UI",
        "Jira",
        "API",
      ],
    },
  ];

  const education = [
    {
      degree: t("resume.pl.title"),
      school: t("resume.politechnika.lubelska"),
      logo: "/logos/politechnila-lubelska.jpg",
      location: t("resume.pl.location"),
      period: "2022 - 2024",
      description: t("resume.pl.description"),
      spec: t("resume.pl.spec"),
      field: t("resume.pl.field"),
    },
    {
      degree: t("resume.denmark.title"),
      school: t("resume.politechnika.lubelska"),
      logo: "/logos/sdu.png",
      location: t("resume.denmark.location"),
      period: "2022 - 2024",
      description: t("resume.denmark.description"),
      spec: "",
      field: t("resume.denmark.field"),
    },
    {
      degree: t("resume.wat.title"),
      school: t("resume.wat"),
      logo: "/logos/wat.png",
      location: t("resume.wat.location"),
      period: "2018 - 2021",
      description: t("resume.wat.description"),
      spec: t("resume.wat.spec"),
      field: t("resume.wat.field"),
    },
  ];

  const skills = [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Alpine.js",
    "Python",
    "SQLAlchemy",
    "Docker",
    "Docker compose",
    "Git",
    "Tailwind CSS",
    "API",
    "Framer-motion",
    "Shadcn UI",
    "AI Integration",
    "UI/UX Design",
    "Daisy UI",
    "Material UI",
    "OOP",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Jira",
    "ORM",
    "Mac OS",
    "Linux",
    "Windows",
  ];

  return (
    <section
      id="resume"
      className="md:relative md:h-screen py-12 md:pt-auto md:z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto py-12">
        <div className="text-center">
          <Headline2 text={t("resume.title")} />
        </div>
        {/* Experience */}
        <div className="flex items-center mb-6">
          <Briefcase className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("resume.experience")}
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/80 hover:dark:bg-black/80"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover border border-border"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-violet-700 dark:text-violet-400">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="space-y-1 text-gray-700 list-none dark:text-gray-50 mb-3 text-pretty">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="flex items-center mb-6 mt-12">
          <GraduationCap className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("resume.education")}
          </h3>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/80 hover:dark:bg-black/80"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.school} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover border border-border"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-violet-700 dark:text-violet-400">
                        {edu.school}
                      </span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-gray-700 list-none dark:text-gray-50">
                  <li>{edu.description}</li>
                  <li>
                    <span className="font-bold">{t("resume.field")}: </span>
                    {edu.field}{" "}
                    {edu.spec.length > 0 ? `(spec. ${edu.spec})` : ""}
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="flex items-center mb-6 mt-12">
          <GraduationCap className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("resume.skillset")}
          </h3>
        </div>
        <div className="space-y-6">
          <Card className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/80 hover:dark:bg-black/80">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#479a89]/40 hover:bg-[#479a89]/80 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

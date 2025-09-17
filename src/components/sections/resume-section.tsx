import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

export function ResumeSection() {
  const experiences = [
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Baileo",
      location: "Remote",
      period: "2024 - 2025",
      logo: "/logos/baileo.png",
      description:
        "Lead frontend development for enterprise applications, mentoring junior developers and implementing AI-powered features.",
      technologies: [
        "Elixir",
        "TailwindCSS",
        "Petal",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Nokia",
      location: "Remote",
      period: "2022 - Ongoing",
      logo: "/logos/nokia.png",
      description:
        "Built scalable web applications from concept to deployment, working closely with design and product teams.",
      technologies: [
        "React.js",
        "Next.js",
        "Python",
        "SQLALchemy",
        "TailwindCSS",
        "Docker",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "unclassified",
      location: "Remote",
      period: "2021 - 2022",
      logo: "",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
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
      degree: "Master of Science in Computer Science",
      school: "Lublin University of Technology",
      img: "/master-diploma.JPG",
      location: "Lublin, Poland",
      period: "2022 - 2024",
      description:
        "Graduated Magna Cum Laude with focus on Software Engineering and AI.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Warsaw University of Technology",
      img: "/master-diploma.JPG",
      location: "Warszawa, Poland",
      period: "2018 - 2021",
      description:
        "Graduated Magna Cum Laude with focus on Software Engineering and AI.",
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
    "Git",
    "Tailwind CSS",
    "API",
    "Framer-motion",
    "Shadcn UI",
    "AI Integration",
    "UI/UX Design",
    "Daisy UI",
    "Material UI",
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and technical expertise
          </p>
        </div>

        {/* Experience */}
        <div className="flex items-center mb-6">
          <Briefcase className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold text-foreground">
            Work Experience
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
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
                      <span className="font-medium text-primary">
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
                <p className="text-muted-foreground mb-4 text-pretty">
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
          <h3 className="text-xl font-semibold text-foreground">Education</h3>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">{edu.school}</span>
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
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="flex items-center mb-6 mt-12">
          <GraduationCap className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold text-foreground">Skill set</h3>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
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

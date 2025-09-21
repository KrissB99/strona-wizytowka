"use client";

import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/shadcn/button";
import { Badge } from "@/components/shadcn/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

// Icons
import { ExternalLink } from "lucide-react";

// Internal
import { useLanguage } from "@/contexts/language-context";
import { Headline2, Paragraph } from "../text";

export function PortfolioSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: t("portfolio.dentist.title"),
      description: t("portfolio.dentist.desc"),
      image: "/img/dentistry.png",
      liveUrl: "https://western-somatology.vercel.app",
      category: t("portfolio.dentist.category"),
    },
    // {
    //   title: t("portfolio.psychologist.title"),
    //   description:
    //     "Professional website for a psychology practice with secure patient portal, therapy session booking, and mental health resources. Emphasizes trust and confidentiality through design.",
    //   image:
    //     "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    //   liveUrl: "#",
    //   category: "Healthcare",
    // },
  ];

  return (
    <section
      id="portfolio"
      className="lg:relative lg:h-screen py-12 lg:pt-auto lg:z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16 pt-0">
          <Headline2 text={t("portfolio.title")} />
          <Paragraph text={t("portfolio.description")} />
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-24"> */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden pt-0 bg-white/50 dark:bg-black/10 backdrop-blur-3xl border-0 dark:border dark:border-border/50 hover:bg-white/40 hover:dark:bg-black/40 mx-4 md:w-[60%] lg:w-[50%]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("portfolio.viewProject")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

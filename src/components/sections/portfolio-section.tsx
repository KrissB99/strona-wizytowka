import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import { Badge } from "@/components/shadcn/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export function PortfolioSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Stomatologia Zachodnia",
      description:
        "Modern, responsive website for a dental practice featuring online appointment booking, service information, and patient testimonials. Built with focus on accessibility and SEO optimization.",
      image: "/dentistry.png",
      liveUrl: "#",
      category: "Healthcare",
    },
    {
      title: "Nostrum Psychology Center",
      description:
        "Professional website for a psychology practice with secure patient portal, therapy session booking, and mental health resources. Emphasizes trust and confidentiality through design.",
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
      liveUrl: "#",
      category: "Healthcare",
    },
  ];

  return (
    <section id="portfolio" className="h-screen pt-auto z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16 pt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden pt-0 bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/40 hover:dark:bg-black/40"
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
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Click to visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

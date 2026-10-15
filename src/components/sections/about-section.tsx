// Components
import { Card, CardContent } from "@/components/shadcn/card";
import { motion } from "framer-motion";

// Contexts
import { useLanguage } from "@/contexts/language-context";

// Icons
import { Code, Database, Brain, Zap } from "lucide-react";
import { Headline2, Headline3, Paragraph } from "../text";

export function AboutSection() {
  const { t } = useLanguage();
  const skills = [
    {
      icon: Code,
      title: t("about.skill1"),
      description: t("about.skill1Desc"),
    },
    {
      icon: Database,
      title: t("about.skill2"),
      description: t("about.skill2Desc"),
    },
    {
      icon: Brain,
      title: t("about.skill3"),
      description: t("about.skill3Desc"),
    },
    {
      icon: Zap,
      title: t("about.skill4"),
      description: t("about.skill4Desc"),
    },
  ];

  return (
    <section
      id="about"
      className="lg:relative lg:h-screen py-12 lg:pt-auto lg:z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <Headline2 text={t("about.title")} />
          <Paragraph text={t("about.description")} className="text-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(122, 46, 77, 0.10)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group"
            >
              <Card className="transition-all duration-300 bg-card/70 backdrop-blur-xl border border-border hover:bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Headline3 text={skill.title} />
                  <Paragraph text={skill.description} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

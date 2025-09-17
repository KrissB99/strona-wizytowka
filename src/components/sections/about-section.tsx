"use client";

import { Card, CardContent } from "@/components/shadcn/card";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Code, Database, Brain, Zap } from "lucide-react";

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
    <section id="about" className="h-screen pt-auto z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto text-pretty">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(80, 0, 200, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group"
            >
              <Card className="transition-all duration-300 bg-white/20 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/40 hover:dark:bg-black/40">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/40 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-black/60 dark:text-white/70 text-pretty">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

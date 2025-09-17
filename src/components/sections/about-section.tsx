"use client";

import { Card, CardContent } from "@/components/shadcn/card";
import { motion } from "framer-motion";
import { Code, Database, Brain, Zap } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Expert in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.",
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description:
        "Proficient in Node.js, databases, APIs, and cloud deployment platforms.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Experience with AI APIs, machine learning models, and intelligent user interfaces.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Focused on creating fast, accessible, and SEO-optimized web applications.",
    },
  ];

  return (
    <section id="about" className="h-screen pt-auto z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I&#39;m a passionate Frontend Developer with over 5 years of
            experience building modern web applications. I specialize in
            creating user-friendly interfaces while leveraging full-stack
            technologies and AI to deliver innovative solutions.
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
              <Card className="transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/40 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
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

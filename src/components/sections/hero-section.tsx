"use client";

import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import BlurText from "@/components/react-bits/BlurText";

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-99">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/Me.png"
              alt="Krysia Banaszewska"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <BlurText
            text="Hi, I'm Krysia Banaszewska"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-6xl font-bold text-balance mb-6"
          />

          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
            Frontend Developer with Full-Stack & AI Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in React, Next.js, and AI-powered applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={scrollToPortfolio} size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

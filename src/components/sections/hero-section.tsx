"use client";

import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { Github, Linkedin, Mail } from "lucide-react";
import BlurText from "@/components/react-bits/BlurText";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-12 flex items-center justify-center"
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
            text={t("hero.greeting") + " " + "Krysia Banaszewska"}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl sm:text-4xl font-bold mb-6 mx-auto"
          />

          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
            {t("hero.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("hero.tagline")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="group">
            {t("hero.cta")}
          </Button>
          <div className="flex gap-4">
            <Link
              href="https://github.com/KrissB99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/krystyna-banaszewska/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="mailto:krysia@banaszewski.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

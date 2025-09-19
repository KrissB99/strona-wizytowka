"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import { Button } from "@/components/shadcn/button";
import BlurText from "@/components/react-bits/BlurText";

// Icons
import { Github, Linkedin, Mail } from "lucide-react";

// Internal
import { useLanguage } from "@/contexts/language-context";
import { Headline3, Paragraph } from "../text";
import { caprasimoBoldFont, MontserratFont } from "@/lib/fonts";

export function HeroSection() {
  const { t } = useLanguage();

  const SOCIALS = [
    { icon: Github, label: "GitHub", href: "https://github.com/KrissB99" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krystyna-banaszewska/",
    },
    { icon: Mail, label: "Email", href: "mailto:krysia@banaszewski.pl" },
  ];
  return (
    <section
      id="hero"
      className="relative md:min-h-screen pt-24 md:pt-12 flex md:items-center md:justify-center"
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
            text={t("hero.greeting")}
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-4xl sm:text-3xl md:text-4xl mx-auto text-balace ${MontserratFont.className}`}
          />
          <BlurText
            text={"Krystyna Banaszewska"}
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-5xl sm:text-4xl md:text-6xl font-bold mb-6 mx-auto text-balace text-violet-600 dark:text-violet-400 ${caprasimoBoldFont.className}`}
          />
          <Headline3
            text={t("hero.frontendDeveloper")}
            className="text-3xl text-[#479a89] tracking-wide"
          />
          <Headline3
            text={t("hero.frontendDeveloper2")}
            className="text-xl text-[#479a89]"
          />
          <Paragraph
            text={t("hero.tagline")}
            className="text-md text-muted-foreground mt-6"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Button variant="outline" size="icon">
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

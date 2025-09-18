"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Headline2, Paragraph } from "../text";
import { useLanguage } from "@/contexts/language-context";

export function ContactSection() {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krysia@banaszewski.pl",
      href: "mailto:krysia@banaszewski.pl",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+48 505-368-902",
      href: "tel:+505368902",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Płońsk/Warszawa, Poland",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/johndoe",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johndoe",
    },
  ];

  return (
    <section id="contact" className="py-20 pt-auto z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Headline2 text={t("contact.title")} />
          <Paragraph text={t("contact.description")} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/40 hover:dark:bg-black/40">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/40 hover:dark:bg-black/40">
            <CardHeader>
              <CardTitle>Let&#39;s Build Something Amazing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm text-pretty">
                I&#39;m always excited to work on new projects and collaborate
                with talented individuals. Whether you need a complete web
                application or want to enhance your existing platform, I&#39;m
                here to help turn your vision into reality.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-border/50 hover:bg-white/40 hover:dark:bg-black/40">
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

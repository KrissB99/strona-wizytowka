import type React from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { fraunces, inter } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import "./globals.css";
import { HtmlWrapper } from "@/components/html-wrapper";

export const metadata: Metadata = {
  title: "Krystyna Banaszewska - Frontend Developer",
  description:
    "Frontend developer (React, Next.js, TypeScript) with 4+ years of commercial experience building business-critical web apps, and a full-stack Python background.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <HtmlWrapper>
        <body
          className={`font-sans ${inter.variable} ${fraunces.variable} ${GeistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </ThemeProvider>
        </body>
      </HtmlWrapper>
    </LanguageProvider>
  );
}

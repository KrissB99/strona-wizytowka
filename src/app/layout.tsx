import type React from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
  display: "swap",
});
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import "./globals.css";
import { HtmlWrapper } from "@/components/html-wrapper";

export const metadata: Metadata = {
  title: "Krystyna Banaszewska - Frontend Developer",
  description:
    "Professional Frontend Developer with Full-Stack and AI expertise. Building modern web applications with cutting-edge technologies.",
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
          className={`font-sans ${inter.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}
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

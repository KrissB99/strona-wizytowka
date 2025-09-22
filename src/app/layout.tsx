import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import "./globals.css";
import { HtmlWrapper } from "@/components/html-wrapper";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Krystyna Banaszewska - Frontend Developer",
  description:
    "Professional Frontend Developer with Full-Stack and AI expertise. Building modern web applications with cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <HtmlWrapper>
        <Head>
          <meta
            name="google-site-verification"
            content="p-LVZq0QyLMojWfS9bL_QAFzArXgDMrYsv30JDL6rVQ"
          />
        </Head>
        <body
          className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
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

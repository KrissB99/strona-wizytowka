import { Fraunces, Inter } from "next/font/google";

// Display / headings — editorial serif with optical sizing
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

// Body / UI text
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

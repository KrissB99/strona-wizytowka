"use client";

import LogoLoop from "@/components/react-bits/LogoLoop";
import { useTheme } from "@/contexts/theme-context";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export function TechnologySection() {
  const { theme } = useTheme();
  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={theme === "light" ? "#ffffff" : ""}
        ariaLabel="Technology partners"
      />
    </div>
  );
}

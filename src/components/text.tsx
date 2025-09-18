"use client";

import {
  caprasimoBoldFont,
  MontserratBoldFont,
  MontserratFont,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Headline2({ text }: { text: string }) {
  return (
    <h2
      className={`text-3xl sm:text-4xl font-bold text-violet-500 mb-4 ${caprasimoBoldFont.className}`}
    >
      {text}
    </h2>
  );
}

export function Headline3({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        `text-md font-semibold text-foreground mb-1 ${MontserratBoldFont.className}`,
        className
      )}
    >
      {text}
    </h3>
  );
}

export function Paragraph({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        `text-sm text-black/70 dark:text-white/70 max-w-3xl mx-auto text-pretty ${MontserratFont.className}`,
        className
      )}
    >
      {text}
    </p>
  );
}

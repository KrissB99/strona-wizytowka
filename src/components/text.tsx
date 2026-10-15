"use client";

import { cn } from "@/lib/utils";

export function Headline2({ text }: { text: string }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
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
        "font-sans text-md font-semibold tracking-normal text-foreground mb-1",
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
        "font-sans text-sm leading-relaxed text-muted-foreground max-w-3xl mx-auto text-pretty",
        className
      )}
    >
      {text}
    </p>
  );
}

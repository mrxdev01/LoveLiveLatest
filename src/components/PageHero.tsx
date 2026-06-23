import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal px-4 pb-16 pt-36 text-cream sm:px-6 sm:pb-20 sm:pt-44 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.18),transparent_55%)]" />
      <div className="mx-auto max-w-5xl text-center animate-fade-up">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

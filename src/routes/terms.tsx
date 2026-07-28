import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { pageMeta } from "@/lib/site-meta";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title: "Terms of Service — Destot",
      description: "The terms that govern use of the Destot.dev website and services.",
      path: "/terms",
    }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="These terms describe the general conditions for using Destot.dev and Destot services." />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Acceptance</h2>
          <p className="mt-3">By using the Destot.dev website you agree to these terms. Service-specific agreements govern paid engagements and take precedence where they conflict.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Use of the site</h2>
          <p className="mt-3">You agree not to misuse the site, attempt to disrupt service, or use it for unlawful purposes. The site is provided on an "as is" basis without warranties beyond those required by applicable law.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Acceptable use of email services</h2>
          <p className="mt-3">Destot email infrastructure may not be used for spam, phishing, malware distribution, or any content that violates applicable law or recipient consent. We reserve the right to suspend services for material violations.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p className="mt-3">All content on the site is owned by Destot or its licensors. You may not copy, modify, or redistribute it without permission.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
          <p className="mt-3">To the maximum extent permitted by law, Destot is not liable for indirect or consequential damages arising from use of the site.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">Questions about these terms: <a className="text-brand" href="mailto:devesh@destot.dev">devesh@destot.dev</a>.</p>
        </section>
      </article>
    </SiteLayout>
  );
}

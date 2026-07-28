import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { pageMeta } from "@/lib/site-meta";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy — Destot",
      description: "How Destot collects, uses, and protects information about visitors and customers.",
      path: "/privacy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="This page is maintained by Destot to answer common privacy questions about Destot.dev." />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Overview</h2>
          <p className="mt-3">Destot ("we", "us") operates the Destot.dev website and email infrastructure services. This policy explains what we collect, how we use it, and the choices you have. This is a general summary, not a legal contract.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Contact information you submit through forms (name, work email, company, phone, message).</li>
            <li>Basic technical data required to serve the website reliably.</li>
            <li>Service usage data required to operate email infrastructure on your behalf.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
          <p className="mt-3">We use submitted contact information solely to respond to inquiries and operate the services you have requested. We do not sell personal data.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Security</h2>
          <p className="mt-3">We apply reasonable technical and organizational measures to protect information under our control, including access controls and encrypted transport.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
          <p className="mt-3">You may contact us at <a className="text-brand" href="mailto:devesh@destot.dev">devesh@destot.dev</a> to request access, correction, or deletion of information we hold about you.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Updates</h2>
          <p className="mt-3">We may update this policy from time to time. Material changes will be reflected on this page.</p>
        </section>
      </article>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { pageMeta } from "@/lib/site-meta";
import { Compass, Handshake, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About — Destot",
      description:
        "Destot builds and operates email infrastructure for modern businesses — from OTP APIs to custom mail servers — based in Bengaluru, India.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Email is critical infrastructure. We treat it that way."
        description="Destot exists because business email is still one of the hardest things to get right — and getting it wrong quietly costs you customers."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 prose prose-invert">
        <p className="text-lg text-muted-foreground">
          We work with startups, SaaS teams, agencies, e-commerce operators, and
          enterprises that need email to just work. That means proper authentication,
          the right sending architecture, careful reputation management, and someone
          on call when things go sideways.
        </p>
        <p className="mt-6 text-lg text-muted-foreground">
          Instead of another self-serve API bolted onto shared infrastructure, we
          combine developer-friendly APIs with managed operations — so your team ships
          product while ours keeps the mail moving.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3">
        {[
          { icon: Compass, t: "Clarity over hype", d: "No inbox-placement guarantees, no vanity metrics — real numbers, real trade-offs." },
          { icon: Wrench, t: "Craft over shortcuts", d: "We do DNS, DKIM, and warm-up properly the first time so you don't inherit debt." },
          { icon: Handshake, t: "Partnership over vendor", d: "You get a team that owns the outcome, not just an SLA to point at." },
        ].map((v) => (
          <Card key={v.t} className="glass-panel p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{v.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="text-xl font-semibold">Where we are</h2>
          <p className="mt-3 text-muted-foreground">
            Destot is based in Bengaluru, India, and works with teams globally. For
            enquiries, reach out at{" "}
            <a href="mailto:devesh@destot.dev" className="text-brand hover:underline">
              devesh@destot.dev
            </a>.
          </p>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

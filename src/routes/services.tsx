import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site-meta";
import { KeyRound, Send, Server, Mail, Shield, LineChart, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta({
      title: "Services — Destot Email Infrastructure",
      description:
        "OTP APIs, transactional email, custom mail servers, business inboxes, DNS setup, deliverability, migrations, and managed support from Destot.",
      path: "/services",
    }),
  component: Services,
});

const services = [
  { to: "/email-otp", icon: KeyRound, title: "Email OTP & Authentication", who: "SaaS, fintech, marketplaces", outcomes: ["Reliable code delivery", "Rate limiting & abuse controls", "Webhook-driven verification"], details: "Send and verify one-time codes with configurable length, expiration, and templates. Built-in rate limiting per recipient and IP, plus webhooks for delivery, verification, and failure events." },
  { to: "/transactional-email", icon: Send, title: "Transactional Email", who: "SaaS, e-commerce, product teams", outcomes: ["Receipts, alerts, notifications", "Template management", "Delivery analytics"], details: "REST and SMTP endpoints for receipts, password resets, onboarding, and product notifications. Template versioning, per-message metadata, and delivery/open/complaint analytics." },
  { to: "/custom-mail-server", icon: Server, title: "Custom Mail Server", who: "Enterprise, agencies, regulated industries", outcomes: ["Dedicated infrastructure", "Managed operations", "Migration support"], details: "Dedicated SMTP/IMAP deployments on your domain, with anti-spam, backups, monitoring, and 24/7 managed operations. Migration from Exchange, Google Workspace, or Zoho supported." },
  { to: "/contact", icon: Mail, title: "Business Inboxes", who: "Teams that need company mail", outcomes: ["Company mailboxes", "Aliases & routing", "Secure authentication"], details: "Reliable inboxes on your domain with alias support, group routing, MFA, and clean IMAP/SMTP endpoints for any client." },
  { to: "/contact", icon: Shield, title: "Domain Setup & Authentication", who: "Every sending domain", outcomes: ["SPF, DKIM, DMARC aligned", "MX & BIMI ready", "Reputation-safe rollout"], details: "Full DNS configuration for authentication, including alignment across sending vendors and phased DMARC enforcement." },
  { to: "/contact", icon: LineChart, title: "Bulk & Automated Sending", who: "Marketing ops, product notifications", outcomes: ["Warmed IPs", "Segmented streams", "Suppression handling"], details: "Bulk and automated email programs with IP warm-up plans, list hygiene, and traffic separation across marketing and transactional streams." },
  { to: "/contact", icon: LineChart, title: "Deliverability Analytics", who: "Teams sending at volume", outcomes: ["Bounce & complaint tracking", "Reputation monitoring", "Dashboards & alerts"], details: "Real-time analytics across delivery, opens, bounces, complaints, and blacklists — with alerting when signals degrade." },
  { to: "/contact", icon: Users, title: "Migration & Managed Support", who: "Teams switching providers", outcomes: ["Zero-downtime cutover", "IP warm-up", "Ongoing operations"], details: "Migrations from your current provider with staged cutover, warm-up, and post-migration deliverability monitoring — plus ongoing managed support after go-live." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Managed email infrastructure, from OTP to enterprise mail"
        description="Every service is delivered with proper authentication, monitoring, and support. Pick a starting point, or bundle what you need."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} className="glass-panel p-6 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">{s.title}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.details}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand">Who it's for</p>
                <p className="mt-1 text-sm">{s.who}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand">Outcomes</p>
                <ul className="mt-1 space-y-1">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" size="sm">
                <Link to={s.to}>Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Card>
        ))}
      </section>
      <CTASection />
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pageMeta } from "@/lib/site-meta";
import {
  ArrowRight, Shield, Zap, Server, Globe, Activity, CheckCircle2,
  Mail, KeyRound, Send, Boxes, LineChart, LifeBuoy, ShoppingBag,
  Building2, Briefcase, Rocket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Destot — Managed Email Infrastructure for Modern Businesses",
      description:
        "Destot delivers reliable email infrastructure: OTP APIs, transactional email, custom mail servers, and managed business inboxes with SPF/DKIM/DMARC done right.",
      path: "/",
    }),
  component: Home,
});

const services = [
  { icon: KeyRound, title: "Email OTP & Auth APIs", desc: "Send and verify one-time passcodes with rate limiting, expiration, and webhooks." },
  { icon: Send, title: "Transactional Email", desc: "Receipts, alerts, resets, and onboarding messages with high deliverability." },
  { icon: Server, title: "Custom Mail Servers", desc: "Dedicated SMTP/IMAP infrastructure on your domain, deployed and managed." },
  { icon: Mail, title: "Business Inboxes", desc: "Company mailboxes with clean routing, aliases, and secure authentication." },
  { icon: Shield, title: "Domain & DNS Setup", desc: "SPF, DKIM, DMARC, MX and BIMI configured properly the first time." },
  { icon: LineChart, title: "Delivery Analytics", desc: "Track opens, bounces, complaints, and reputation across sending domains." },
];

const steps = [
  { n: "01", title: "Assess", desc: "We audit your domains, DNS, current provider, and volume patterns." },
  { n: "02", title: "Configure", desc: "SPF, DKIM, DMARC, dedicated IPs, warm-up plans, and templates set up correctly." },
  { n: "03", title: "Migrate / Integrate", desc: "Cutover with zero-downtime routing, or drop-in REST APIs for your app." },
  { n: "04", title: "Monitor", desc: "24/7 monitoring, reputation checks, and rapid response when signals shift." },
];

const useCases = [
  { icon: Rocket, tag: "SaaS", title: "Auth & product email at scale", desc: "OTP for sign-in, transactional flows for onboarding, notifications and receipts." },
  { icon: ShoppingBag, tag: "E-commerce", title: "Order lifecycle emails", desc: "Confirmations, shipping updates, and post-purchase flows with strong deliverability." },
  { icon: Briefcase, tag: "Agencies", title: "Multi-client mail infrastructure", desc: "Isolated sending domains, per-client analytics, and clean reputation management." },
  { icon: Building2, tag: "Enterprise", title: "Custom mail servers & compliance", desc: "Dedicated deployments, audit trails, and managed operations with SLAs." },
];

const plans = [
  { name: "Starter", price: "Configurable", desc: "For early teams sending OTPs and transactional email.", features: ["Shared sending IPs", "SPF/DKIM/DMARC setup", "REST API + webhooks", "Email support"], cta: "Contact Sales" },
  { name: "Growth", price: "Configurable", desc: "For scaling SaaS and e-commerce with higher volume.", features: ["Dedicated IP options", "Advanced analytics", "Template management", "Priority support"], cta: "Contact Sales", featured: true },
  { name: "Custom", price: "Contact us", desc: "Custom mail servers, migrations, and managed operations.", features: ["Dedicated mail servers", "Custom SLAs", "Compliance support", "Named engineer"], cta: "Talk to an Expert" },
];

const faqs = [
  { q: "Do you guarantee inbox placement?", a: "No provider can honestly guarantee 100% inbox placement — deliverability depends on content, recipient providers, and sender reputation. We focus on the fundamentals: proper authentication, warmed IPs, clean lists, and continuous monitoring so your mail lands where it should." },
  { q: "Can you migrate us from another provider?", a: "Yes. We plan a staged cutover, warm up new sending infrastructure, keep your existing provider live during the transition, and monitor deliverability closely across the switch." },
  { q: "Do you support dedicated IPs and custom domains?", a: "Yes. Growth and Custom plans support dedicated IPs with warm-up schedules, plus multiple sending subdomains for isolating traffic by product surface." },
  { q: "What about compliance and data residency?", a: "We help configure retention, logging, and regional routing where relevant. For enterprise deployments we align infrastructure to your compliance requirements." },
  { q: "How is pricing determined?", a: "Pricing is configurable based on volume, dedicated infrastructure, support tier, and any managed services included. Contact us for a tailored quote." },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="outline" className="border-brand/40 text-brand bg-brand/5">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand animate-pulse-dot" />
                Managed Email Infrastructure
              </Badge>
              <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                Email infrastructure built for{" "}
                <span className="text-gradient-brand">reliability, scale, and control.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Destot handles the hard parts of business email — OTP and authentication
                APIs, transactional delivery, custom mail servers, and managed inboxes —
                so your team ships product instead of debugging DNS.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-to-r from-brand to-brand-glow text-brand-foreground hover:opacity-90 shadow-glow">
                  <Link to="/contact">Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {[
                  { icon: Activity, label: "High deliverability" },
                  { icon: Globe, label: "Custom domains" },
                  { icon: Shield, label: "Secure infra" },
                  { icon: LifeBuoy, label: "Managed support" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-muted-foreground">
                    <Icon className="h-4 w-4 text-brand" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product visual */}
            <div className="relative">
              <div className="glass-panel rounded-2xl p-5 sm:p-6 shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse-dot" />
                    <span className="text-sm font-medium">API status</span>
                    <span className="text-xs text-muted-foreground">All systems operational</span>
                  </div>
                  <span className="text-xs text-muted-foreground">us-east · 128ms</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { k: "Delivered", v: "1.24M", d: "last 24h" },
                    { k: "Bounce", v: "0.28%", d: "vs 0.42%" },
                    { k: "Complaint", v: "0.02%", d: "target ≤ 0.1%" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl border border-border bg-card/40 p-3">
                      <p className="text-xs text-muted-foreground">{s.k}</p>
                      <p className="mt-1 text-xl font-semibold">{s.v}</p>
                      <p className="text-[10px] text-muted-foreground">{s.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-3">Inbox health · destot.dev</p>
                  <div className="space-y-2">
                    {[
                      { l: "SPF", v: "Pass" },
                      { l: "DKIM", v: "Pass" },
                      { l: "DMARC", v: "Pass · reject" },
                    ].map((r) => (
                      <div key={r.l} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{r.l}</span>
                        <span className="inline-flex items-center gap-1.5 text-success">
                          <CheckCircle2 className="h-3.5 w-3.5" /> {r.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-xs font-medium text-muted-foreground mb-3">Authentication activity</p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between"><span>otp.send</span><span className="text-success">200 · 84ms</span></div>
                    <div className="flex justify-between"><span>otp.verify</span><span className="text-success">200 · 42ms</span></div>
                    <div className="flex justify-between"><span>otp.verify</span><span className="text-destructive">401 · invalid_code</span></div>
                    <div className="flex justify-between"><span>otp.send</span><span className="text-success">200 · 91ms</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Everything you need for business email
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete stack — authentication, transactional delivery, custom mail
            servers, and the operations to keep them healthy.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="glass-panel p-6 hover:border-brand/40 transition-colors">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand">How it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            From audit to always-on, in four steps
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="glass-panel rounded-xl p-6">
              <p className="text-sm font-mono text-brand">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developer / API */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand">For developers</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              A clean REST API for email OTP
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drop-in endpoints for sending and verifying one-time codes, with rate
              limiting, expiration, template control, and webhooks. Works with any
              stack — Node, Python, Go, Ruby, PHP.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Configurable code length, expiration, and retry policies",
                "Per-recipient and per-IP rate limiting out of the box",
                "Delivery, verification, and failure webhooks",
                "Template overrides and localized content",
              ].map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/email-otp">Read the OTP guide <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border pb-3 text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-2 font-mono">POST /v1/otp/send</span>
            </div>
            <pre className="mt-4 overflow-x-auto text-[12px] leading-relaxed font-mono text-muted-foreground">
{`curl https://api.destot.dev/v1/otp/send \\
  -H "Authorization: Bearer $DESTOT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "channel": "email",
    "length": 6,
    "expires_in": 300,
    "template": "signin-default"
  }'

# Response
{
  "id": "otp_01HZR9Y8...",
  "status": "sent",
  "expires_at": "2026-07-28T18:02:15Z",
  "channel": "email"
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-widest text-brand">Reliability</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              The fundamentals, done properly
            </h2>
            <p className="mt-4 text-muted-foreground">
              Deliverability is a discipline. We configure authentication,
              handle retries, monitor bounces and complaints, and keep your sending
              reputation healthy across every domain.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Shield, t: "SPF, DKIM, DMARC", d: "Properly aligned authentication across sending subdomains and vendors." },
              { icon: Zap, t: "Smart retries", d: "Backoff-aware retry logic that respects recipient signals and rate limits." },
              { icon: Activity, t: "Bounce & complaint handling", d: "Automatic suppression, categorization, and feedback-loop processing." },
              { icon: LineChart, t: "Continuous monitoring", d: "Reputation, blacklists, and delivery trends watched 24/7 with alerts." },
            ].map((f) => (
              <div key={f.t} className="glass-panel rounded-xl p-5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <f.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand">Who we work with</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for teams that take email seriously
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <Card key={u.title} className="glass-panel p-6">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <u.icon className="h-4 w-4" />
                </div>
                <Badge variant="secondary" className="bg-secondary/60">{u.tag}</Badge>
              </div>
              <h3 className="mt-4 font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Configurable plans, priced to your volume
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every deployment is different. Plans below show scope — final pricing is
            tailored to your volume, infrastructure, and support needs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`glass-panel p-6 ${p.featured ? "border-brand/60 shadow-glow" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.featured && <Badge className="bg-brand text-brand-foreground">Popular</Badge>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-6 text-2xl font-semibold">{p.price}</p>
              <p className="text-xs text-muted-foreground">Configurable — contact for quote</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full" variant={p.featured ? "default" : "outline"}>
                <Link to="/contact">{p.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="ghost">
            <Link to="/pricing">See full pricing details <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Common questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

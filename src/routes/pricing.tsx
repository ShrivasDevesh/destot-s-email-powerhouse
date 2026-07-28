import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pageMeta } from "@/lib/site-meta";
import { CheckCircle2, Minus } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta({
      title: "Pricing — Destot",
      description:
        "Configurable pricing for OTP APIs, transactional email, and custom mail servers. Three packages: Launch, Scale, and Enterprise.",
      path: "/pricing",
    }),
  component: Pricing,
});

const plans = [
  { name: "Launch", desc: "For early teams starting with OTP and transactional email.", features: ["Shared sending IPs", "REST + SMTP APIs", "SPF/DKIM/DMARC setup", "Standard templates", "Email support"], },
  { name: "Scale", desc: "For growing SaaS and e-commerce with higher volume and multiple sending streams.", features: ["Dedicated IP options", "Multiple sending domains", "Advanced analytics", "Template management", "Priority support"], featured: true },
  { name: "Enterprise", desc: "Custom mail servers, migrations, compliance, and named engineering support.", features: ["Dedicated mail servers", "Custom SLAs", "Regional deployments", "Compliance support", "Named engineer"] },
];

const compare: { row: string; values: (string | boolean)[] }[] = [
  { row: "REST + SMTP APIs", values: [true, true, true] },
  { row: "OTP send & verify", values: [true, true, true] },
  { row: "SPF / DKIM / DMARC setup", values: [true, true, true] },
  { row: "Dedicated sending IPs", values: [false, true, true] },
  { row: "Multiple sending domains", values: ["1", "up to 10", "unlimited"] },
  { row: "Custom mail server", values: [false, false, true] },
  { row: "Migration support", values: [false, "included", "included"] },
  { row: "Analytics dashboards", values: ["standard", "advanced", "advanced + export"] },
  { row: "Support", values: ["email", "priority", "named engineer"] },
  { row: "SLA", values: [false, "standard", "custom"] },
];

const faqs = [
  { q: "Why don't you list fixed prices?", a: "Email infrastructure pricing depends on volume, dedicated IPs, mail-server deployments, and support tier. We quote based on your actual needs so you aren't paying for capacity you don't use." },
  { q: "Can I try before I commit?", a: "Yes — we run a scoped pilot for most engagements, including OTP or a single transactional stream, so you can validate deliverability and integration." },
  { q: "Do you charge per email?", a: "Volume-based pricing is available for high-throughput sending. Custom mail servers are typically priced on a monthly subscription with capacity included." },
  { q: "Is there a long-term contract?", a: "No. Month-to-month is available on all plans. Enterprise agreements can include committed terms for pricing stability." },
];

function Pricing() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Pricing"
        title="Configurable pricing, tailored to your volume and deployment"
        description="Three packages that scale from your first OTP to a fully managed mail server. Every quote is tailored — no fake numbers, no bait-and-switch."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={`glass-panel p-8 flex flex-col ${p.featured ? "border-brand/60 shadow-glow" : ""}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              {p.featured && <Badge className="bg-brand text-brand-foreground">Popular</Badge>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <p className="mt-6 text-3xl font-semibold">Contact us</p>
            <p className="text-xs text-muted-foreground">Configurable — quoted to your scope</p>
            <ul className="mt-6 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className={p.featured ? "w-full bg-gradient-to-r from-brand to-brand-glow text-brand-foreground" : "w-full"} variant={p.featured ? "default" : "outline"}>
                <Link to="/contact">Get a quote</Link>
              </Button>
            </div>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold tracking-tight">Compare plans</h2>
        <div className="mt-6 glass-panel rounded-2xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground border-b border-border">
              <tr>
                <th className="p-4 font-medium">Feature</th>
                {plans.map((p) => (
                  <th key={p.name} className="p-4 font-medium">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.row} className="border-b border-border/50 last:border-0">
                  <td className="p-4">{r.row}</td>
                  {r.values.map((v, i) => (
                    <td key={i} className="p-4">
                      {typeof v === "boolean" ? (
                        v ? <CheckCircle2 className="h-4 w-4 text-brand" /> : <Minus className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <span>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-center">Pricing FAQ</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`p-${i}`}>
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

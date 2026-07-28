import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { pageMeta } from "@/lib/site-meta";
import { Receipt, Bell, KeyRound, UserPlus, Package, LineChart } from "lucide-react";

export const Route = createFileRoute("/transactional-email")({
  head: () =>
    pageMeta({
      title: "Transactional Email — Destot",
      description:
        "Send receipts, alerts, password resets, onboarding, and product notifications with high deliverability, templates, APIs, webhooks, and analytics.",
      path: "/transactional-email",
    }),
  component: Transactional,
});

const messageTypes = [
  { icon: Receipt, t: "Receipts & invoices", d: "Order confirmations, payment receipts, and invoicing with attachment support." },
  { icon: KeyRound, t: "Password resets", d: "Time-boxed reset links with per-recipient rate limits and audit logging." },
  { icon: UserPlus, t: "Onboarding flows", d: "Welcome sequences and activation nudges tied to product events." },
  { icon: Bell, t: "Alerts & notifications", d: "Real-time product notifications routed by preference and channel." },
  { icon: Package, t: "Shipping updates", d: "Lifecycle emails for e-commerce with carrier and tracking metadata." },
  { icon: LineChart, t: "Deliverability analytics", d: "Delivery, open, bounce, complaint, and click analytics per stream." },
];

function Transactional() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Transactional Email"
        title="Product email your customers can rely on"
        description="A dedicated pipeline for the mail that has to arrive — receipts, resets, alerts, and onboarding — with the deliverability discipline required."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {messageTypes.map((m) => (
          <Card key={m.t} className="glass-panel p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
              <m.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{m.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-panel rounded-2xl p-5">
          <p className="text-xs font-medium text-muted-foreground mb-3 font-mono">POST /v1/email/send</p>
          <pre className="overflow-x-auto text-[12px] leading-relaxed font-mono text-muted-foreground">
{`POST /v1/email/send
Authorization: Bearer $DESTOT_API_KEY
Content-Type: application/json

{
  "from": "receipts@yourdomain.com",
  "to": "customer@example.com",
  "subject": "Your order #A-10241 is confirmed",
  "template": "order-confirmation",
  "variables": {
    "customer_name": "Alex",
    "total": "$128.40",
    "items": [{ "name": "Merino Tee", "qty": 2 }]
  },
  "metadata": { "order_id": "A-10241" }
}

// 202 Accepted
{
  "id": "msg_01HZR9Y9F2K",
  "status": "queued"
}`}
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Deliverability by design</h2>
          <p className="mt-4 text-muted-foreground">
            Transactional mail lives on its own reputation. We isolate it from
            marketing traffic, keep authentication aligned across every sending
            subdomain, and monitor recipient signals continuously.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Isolated sending streams for transactional vs. marketing",
              "SPF/DKIM/DMARC alignment across all sending vendors",
              "Suppression lists tied to bounce and complaint events",
              "Warmed IPs and phased rollouts when volume grows",
            ].map((f) => (
              <li key={f} className="text-muted-foreground">• {f}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Templates & webhooks</h2>
          <p className="mt-4 text-muted-foreground">
            Manage HTML and text templates centrally with variables, partials, and
            localization. Every message emits webhook events for delivered, opened,
            bounced, complained, and clicked — so you can drive retries and downstream
            workflows.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Versioned templates with preview and test-send",
              "Locale-aware content and fallback logic",
              "Signed webhooks with retries and replay protection",
              "Per-message metadata for downstream joins",
            ].map((f) => (
              <li key={f} className="text-muted-foreground">• {f}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { pageMeta } from "@/lib/site-meta";
import { CheckCircle2, Zap, Shield, Bell, Code2, LineChart } from "lucide-react";

export const Route = createFileRoute("/email-otp")({
  head: () =>
    pageMeta({
      title: "Email OTP API — Destot",
      description:
        "Send and verify one-time passcodes over email with rate limiting, expiration, retries, templates, webhooks, and analytics.",
      path: "/email-otp",
    }),
  component: OTP,
});

const features = [
  { icon: Zap, t: "Fast send & verify", d: "Endpoints tuned for low latency across regions with automatic retries on transient failures." },
  { icon: Shield, t: "Rate limiting", d: "Per-recipient and per-IP throttles, plus abuse controls to stop enumeration and brute-force." },
  { icon: Bell, t: "Webhooks", d: "Delivery, verification, and failure events pushed to your backend in real time." },
  { icon: Code2, t: "Templates", d: "Managed default templates, plus per-app template overrides with variables and localization." },
  { icon: LineChart, t: "Analytics", d: "Send volume, verification rate, latency, and failure reasons per app and per template." },
  { icon: Shield, t: "Security", d: "Codes are one-time, time-boxed, and stored hashed. Failed attempts are rate-limited and logged." },
];

function OTP() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Email OTP API"
        title="One-time passcodes over email, done right"
        description="A drop-in API for sign-in, transaction confirmation, and step-up auth. Configurable expiry, retries, and templates with real-time webhooks."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.t} className="glass-panel p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-5">
          <p className="text-xs font-medium text-muted-foreground mb-3 font-mono">POST /v1/otp/send</p>
          <pre className="overflow-x-auto text-[12px] leading-relaxed font-mono text-muted-foreground">
{`POST /v1/otp/send
Authorization: Bearer $DESTOT_API_KEY
Content-Type: application/json

{
  "to": "user@example.com",
  "channel": "email",
  "length": 6,
  "expires_in": 300,
  "template": "signin-default",
  "metadata": { "user_id": "u_123" }
}

// 200 OK
{
  "id": "otp_01HZR9Y8ABC",
  "status": "sent",
  "expires_at": "2026-07-28T18:02:15Z"
}`}
          </pre>
        </div>
        <div className="glass-panel rounded-2xl p-5">
          <p className="text-xs font-medium text-muted-foreground mb-3 font-mono">POST /v1/otp/verify</p>
          <pre className="overflow-x-auto text-[12px] leading-relaxed font-mono text-muted-foreground">
{`POST /v1/otp/verify
Authorization: Bearer $DESTOT_API_KEY
Content-Type: application/json

{
  "id": "otp_01HZR9Y8ABC",
  "code": "482910"
}

// 200 OK
{
  "id": "otp_01HZR9Y8ABC",
  "status": "verified",
  "verified_at": "2026-07-28T17:59:41Z"
}

// 401 Unauthorized
{ "error": "invalid_code", "attempts_left": 2 }`}
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Integration in four steps</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "Create an API key", d: "Provision a scoped key for your environment." },
            { n: "2", t: "Configure templates", d: "Use defaults or upload branded HTML/text templates." },
            { n: "3", t: "Wire send + verify", d: "Call /otp/send at request, /otp/verify at submit." },
            { n: "4", t: "Handle webhooks", d: "Subscribe to delivery and verification events." },
          ].map((s) => (
            <li key={s.n} className="glass-panel rounded-xl p-6">
              <p className="text-sm font-mono text-brand">Step {s.n}</p>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold tracking-tight">Security by default</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Codes are hashed at rest; the raw value is never stored or logged.",
            "Configurable expiration and single-use enforcement per code.",
            "Rate limits per recipient, IP, and app to block enumeration.",
            "Signed webhooks with replay protection.",
            "Audit logs for send, verify, and failure events.",
            "Locale-aware templates for global user bases.",
          ].map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTASection title="Ship OTP-based sign-in this sprint" description="Get an API key, plug in send and verify, and let us handle deliverability." />
    </SiteLayout>
  );
}

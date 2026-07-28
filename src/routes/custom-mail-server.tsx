import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Card } from "@/components/ui/card";
import { pageMeta } from "@/lib/site-meta";
import { Server, Shield, Database, Activity, HardDrive, GitBranch } from "lucide-react";

export const Route = createFileRoute("/custom-mail-server")({
  head: () =>
    pageMeta({
      title: "Custom Mail Server — Destot",
      description:
        "Dedicated SMTP/IMAP mail servers on your domain with DNS setup, migration, monitoring, backups, anti-spam, security, and managed maintenance.",
      path: "/custom-mail-server",
    }),
  component: MailServer,
});

const capabilities = [
  { icon: Server, t: "Dedicated deployment", d: "SMTP, IMAP, and submission services deployed on infrastructure isolated to your organization." },
  { icon: Shield, t: "Anti-spam & security", d: "Inbound filtering, TLS-only transport, DKIM signing, DMARC alignment, and rate controls." },
  { icon: Database, t: "Mailboxes on your domain", d: "Company inboxes, aliases, groups, and per-mailbox quotas managed centrally." },
  { icon: GitBranch, t: "Migration", d: "IMAP sync from Exchange, Google Workspace, Zoho, or any provider — with zero-downtime cutover." },
  { icon: Activity, t: "Monitoring", d: "24/7 monitoring for queue depth, reputation, DNS drift, TLS certificates, and blacklists." },
  { icon: HardDrive, t: "Backups", d: "Encrypted, versioned mailbox backups with configurable retention and point-in-time restore." },
];

function MailServer() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Custom Mail Server"
        title="Your own mail server, deployed and managed"
        description="Dedicated SMTP/IMAP infrastructure on your domain — the reliability of enterprise mail without an in-house ops team."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <Card key={c.t} className="glass-panel p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Deployment options</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>• Managed dedicated instance in a Destot-operated region</li>
            <li>• Deployment into your cloud account (AWS, GCP, Azure) with our operators</li>
            <li>• Hybrid mode: outbound SMTP relay via Destot with mailboxes on your existing IMAP</li>
            <li>• Regional deployments to satisfy data residency requirements</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">DNS & authentication</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>• MX, SPF, DKIM, and DMARC records configured and validated</li>
            <li>• Per-subdomain sending policies with alignment across vendors</li>
            <li>• Phased DMARC enforcement from none → quarantine → reject</li>
            <li>• Automated TLS certificate renewal for submission and IMAP</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Migration path</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "Discovery", d: "Inventory mailboxes, aliases, forwarders, DNS, and mail flow." },
            { n: "2", t: "Provision", d: "Stand up new mail server, seed users, configure DNS." },
            { n: "3", t: "Sync", d: "IMAP sync of existing mail, folders, and flags with delta catch-up." },
            { n: "4", t: "Cutover", d: "MX switch, monitoring, and rollback plan ready if needed." },
          ].map((s) => (
            <li key={s.n} className="glass-panel rounded-xl p-6">
              <p className="text-sm font-mono text-brand">Step {s.n}</p>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

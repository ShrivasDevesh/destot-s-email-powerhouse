import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { pageMeta } from "@/lib/site-meta";
import { CheckCircle2, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact — Destot",
      description:
        "Talk to Destot about OTP APIs, transactional email, or a custom mail server. Based in Bengaluru — reach us at devesh@destot.dev.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  volume: z.string().min(1, "Select monthly volume"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const services = [
  "Email OTP & Authentication",
  "Transactional Email",
  "Custom Mail Server",
  "Business Inboxes",
  "Migration & Managed Support",
  "Not sure yet",
];
const volumes = ["Under 10k / month", "10k–100k / month", "100k–1M / month", "1M+ / month", "Not sure"];

// Architected so a backend endpoint (e.g. POST /api/leads) can replace this later.
async function submitLead(data: FormData) {
  const stored = JSON.parse(localStorage.getItem("destot_leads") || "[]");
  stored.push({ ...data, submittedAt: new Date().toISOString() });
  localStorage.setItem("destot_leads", JSON.stringify(stored));
  await new Promise((r) => setTimeout(r, 500));
}

function Contact() {
  const [values, setValues] = useState<FormData>({
    name: "", email: "", company: "", phone: "", service: "", volume: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setValues((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const iss of parsed.error.issues) {
        const key = iss.path[0] as keyof FormData;
        if (!errs[key]) errs[key] = iss.message;
      }
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      await submitLead(parsed.data);
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Talk to an email infrastructure expert"
        description="Tell us what you're building and where you want to get to. We'll follow up within one business day."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="glass-panel p-6 sm:p-8">
            {success ? (
              <div className="text-center py-10">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/15 text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">Message received</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thanks{values.name ? `, ${values.name.split(" ")[0]}` : ""}. We'll
                  reply to <span className="text-foreground">{values.email}</span>{" "}
                  within one business day.
                </p>
                <Button
                  className="mt-8"
                  variant="outline"
                  onClick={() => {
                    setSuccess(false);
                    setValues({ name: "", email: "", company: "", phone: "", service: "", volume: "", message: "" });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" id="name" error={errors.name}>
                    <Input id="name" value={values.name} onChange={(e) => setField("name", e.target.value)} aria-invalid={!!errors.name} />
                  </Field>
                  <Field label="Work email" id="email" error={errors.email}>
                    <Input id="email" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={!!errors.email} />
                  </Field>
                  <Field label="Company" id="company" error={errors.company}>
                    <Input id="company" value={values.company} onChange={(e) => setField("company", e.target.value)} aria-invalid={!!errors.company} />
                  </Field>
                  <Field label="Phone (optional)" id="phone" error={errors.phone}>
                    <Input id="phone" value={values.phone} onChange={(e) => setField("phone", e.target.value)} />
                  </Field>
                  <Field label="Service needed" id="service" error={errors.service}>
                    <Select value={values.service} onValueChange={(v) => setField("service", v)}>
                      <SelectTrigger id="service" aria-invalid={!!errors.service}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Monthly email volume" id="volume" error={errors.volume}>
                    <Select value={values.volume} onValueChange={(v) => setField("volume", v)}>
                      <SelectTrigger id="volume" aria-invalid={!!errors.volume}>
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        {volumes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field label="Message" id="message" error={errors.message}>
                  <Textarea id="message" rows={5} value={values.message} onChange={(e) => setField("message", e.target.value)} aria-invalid={!!errors.message} placeholder="Tell us about your current setup, goals, and timeline." />
                </Field>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-brand to-brand-glow text-brand-foreground hover:opacity-90 shadow-glow"
                >
                  {submitting ? "Sending…" : "Send message"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  We'll only use this to reply about your inquiry.
                </p>
              </form>
            )}
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="glass-panel p-6">
            <h3 className="font-semibold">Direct email</h3>
            <a href="mailto:devesh@destot.dev" className="mt-2 flex items-center gap-2 text-brand hover:underline">
              <Mail className="h-4 w-4" /> devesh@destot.dev
            </a>
          </Card>
          <Card className="glass-panel p-6">
            <h3 className="font-semibold">Location</h3>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" /> Bengaluru, India
            </p>
          </Card>
          <Card className="glass-panel p-6">
            <h3 className="font-semibold">Response time</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We aim to reply within one business day, IST.
            </p>
          </Card>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, id, error, children,
}: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}

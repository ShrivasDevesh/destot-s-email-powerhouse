import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/email-otp", label: "Email OTP API" },
      { to: "/transactional-email", label: "Transactional Email" },
      { to: "/custom-mail-server", label: "Custom Mail Server" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow">
              <Mail className="h-4 w-4 text-brand-foreground" />
            </span>
            <span className="text-lg font-semibold">Destot</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Reliable email infrastructure for modern businesses — OTP, transactional
            delivery, and custom mail servers, managed end-to-end.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <a href="mailto:devesh@destot.dev" className="hover:text-foreground">
              devesh@destot.dev
            </a>
            <span className="mx-2">·</span>
            Bengaluru, India
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Destot. All rights reserved.</p>
          <p>Destot.dev — Email infrastructure, managed.</p>
        </div>
      </div>
    </footer>
  );
}

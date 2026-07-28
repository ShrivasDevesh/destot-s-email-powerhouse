import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/email-otp", label: "Email OTP" },
  { to: "/transactional-email", label: "Transactional" },
  { to: "/custom-mail-server", label: "Mail Server" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow shadow-glow">
            <Mail className="h-4 w-4 text-brand-foreground" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Destot</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-brand to-brand-glow text-brand-foreground hover:opacity-90 shadow-glow">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="mt-8 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-foreground hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="outline" onClick={() => setOpen(false)}>
                  <Link to="/contact">Talk to an Expert</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-brand to-brand-glow text-brand-foreground"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to modernize your email infrastructure?",
  description = "Talk to an email infrastructure expert about OTP, transactional delivery, or a custom mail server tailored to your stack.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="glass-panel rounded-3xl px-8 py-14 sm:px-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-60" aria-hidden />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand to-brand-glow text-brand-foreground hover:opacity-90 shadow-glow"
            >
              <Link to="/contact">
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

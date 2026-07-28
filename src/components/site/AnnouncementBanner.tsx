import { Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="w-full border-b border-border/60 bg-gradient-to-r from-brand/10 via-transparent to-brand-glow/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-brand shrink-0" />
        <span>Managed email infrastructure for growing teams.</span>
      </div>
    </div>
  );
}

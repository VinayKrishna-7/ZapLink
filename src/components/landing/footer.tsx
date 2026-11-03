import * as React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60 bg-background py-5 text-sm text-foreground/80 font-medium mt-auto">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-black text-white border border-neutral-800">
            <Zap className="h-3 w-3 fill-current text-white" />
          </div>
          <span>
            ZapLink &bull; Fast URL Shortener & Analytics
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <Link href="/report" className="hover:text-foreground transition-colors">
            Report Abuse
          </Link>
        </div>
      </div>
    </footer>
  );
}

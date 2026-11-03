import * as React from "react";
import Link from "next/link";
import { Zap, Github } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 py-8 text-xs text-muted-foreground mt-auto">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary text-primary-foreground">
            <Zap className="h-3 w-3 fill-current" />
          </div>
          <span>
            ZapLink &bull; Built by <strong className="font-semibold text-foreground">Vinay Krishna</strong> &bull; MIT License
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <Link href="/report" className="hover:text-foreground transition-colors">
            Report Abuse
          </Link>
          <a
            href="https://github.com/VinayKrishna-7/ZapLink"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

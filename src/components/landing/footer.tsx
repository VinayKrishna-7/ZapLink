import * as React from "react";
import Link from "next/link";
import { Zap, Github } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 py-12 text-xs text-muted-foreground">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Zap className="h-3.5 w-3.5 fill-current" />
              </div>
              <span className="font-bold text-sm tracking-tight text-foreground">
                ZapLink
              </span>
            </Link>
            <p className="max-w-xs text-xs text-muted-foreground leading-relaxed">
              An open-source URL shortener with real-time analytics, custom slugs, and instant QR codes.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/VinayKrishna-7/ZapLink"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">
              Product
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-foreground transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Developers & Support */}
          <div>
            <p className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">
              Resources
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  REST API Docs
                </Link>
              </li>
              <li>
                <Link href="/api/health" className="hover:text-foreground transition-colors">
                  System Health
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-foreground transition-colors">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border/40 pt-6 text-[11px] text-muted-foreground gap-2">
          <p>
            Built by <span className="font-medium text-foreground">Vinay Krishna</span>. Open-source under the MIT License.
          </p>
          <p>
            Hosted on Render with Next.js 15 & Prisma.
          </p>
        </div>
      </div>
    </footer>
  );
}

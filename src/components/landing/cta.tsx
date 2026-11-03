import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandingCta() {
  return (
    <section className="py-16 md:py-20 border-t border-border/60">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Get Started
          </p>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Ready to shorten and track your links?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
            Create an account to start creating custom aliases, generating QR codes, and viewing real-time analytics.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/sign-up">
              <Button size="lg" className="gap-2 font-semibold text-sm h-11 px-6 shadow-sm">
                <span>Create Free Account</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="font-semibold text-sm h-11 px-5">
                <span>Read API Docs</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

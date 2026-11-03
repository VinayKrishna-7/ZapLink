import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandingCta() {
  return (
    <section className="py-12 md:py-16 border-t border-border/50">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground">
          Ready to shorten your links?
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
          Create a free account to customize your slugs, generate QR codes, and monitor click metrics.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/sign-up">
            <Button size="sm" className="gap-1.5 font-semibold text-xs h-9 px-5">
              <span>Create Account</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="sm" className="font-semibold text-xs h-9 px-4">
              <span>Read Docs</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

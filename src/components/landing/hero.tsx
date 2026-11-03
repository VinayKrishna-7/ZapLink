"use client";

import * as React from "react";
import { ArrowRight, ShieldCheck, BarChart3, QrCode } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function LandingHero() {
  const { data: session } = useSession();

  return (
    <section className="relative pt-6 pb-8 md:pt-10 md:pb-12">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-foreground leading-[1.12]">
          Simple, fast URL shortening <br className="hidden sm:inline" />
          with built-in analytics.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
          Turn long links into clean URLs. Create custom slugs, set password protection,
          generate instant QR codes, and view real-time click metrics from a clean personal dashboard.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {session ? (
            <Link href="/dashboard" prefetch={true}>
              <Button size="default" className="gap-2 font-semibold text-sm h-10 px-6 shadow-sm rounded-xl">
                <span>Go to Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/sign-up" prefetch={true}>
                <Button size="default" className="gap-2 font-semibold text-sm h-10 px-6 shadow-sm rounded-xl">
                  <span>Get Started Free</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sign-in" prefetch={true}>
                <Button variant="outline" size="default" className="font-semibold text-sm h-10 px-5 rounded-xl border-border hover:bg-muted/60">
                  <span>Sign In</span>
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Value Props Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-colors hover:border-foreground/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm sm:text-base mb-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Custom Slugs & Expiry</span>
              </div>
              <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal">
                Personalized aliases, password locks, and automatic link expiration for secure sharing.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-colors hover:border-foreground/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm sm:text-base mb-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <span>Real-Time Analytics</span>
              </div>
              <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal">
                Track clicks, referrers, devices, operating systems, and top geographic locations live.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-colors hover:border-foreground/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm sm:text-base mb-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                  <QrCode className="h-4 w-4" />
                </div>
                <span>Instant QR Codes</span>
              </div>
              <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal">
                Export high-resolution PNG or vector SVG codes instantly with custom style presets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="container mx-auto max-w-5xl px-4 text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-foreground leading-[1.08]">
          Simple, fast URL shortening <br className="hidden sm:inline" />
          with built-in analytics.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-foreground/85 leading-relaxed font-medium">
          Turn long links into clean URLs. Create custom slugs, set password protection,
          generate instant QR codes, and view real-time click metrics from a clean personal dashboard.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {session ? (
            <Link href="/dashboard" prefetch={true}>
              <Button size="lg" className="gap-2.5 font-bold text-base h-12 px-8 shadow-md rounded-xl">
                <span>Go to Dashboard</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/sign-up" prefetch={true}>
                <Button size="lg" className="gap-2.5 font-bold text-base h-12 px-8 shadow-md rounded-xl">
                  <span>Get Started Free</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sign-in" prefetch={true}>
                <Button variant="outline" size="lg" className="font-bold text-base h-12 px-7 rounded-xl border-border hover:bg-muted/60">
                  <span>Sign In</span>
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Value Props Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-left">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-colors hover:border-primary/40 hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-foreground font-bold text-base sm:text-lg mb-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span>Custom Slugs & Expiry</span>
              </div>
              <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed font-normal">
                Personalized aliases, password locks, and automatic link expiration for secure sharing.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-colors hover:border-primary/40 hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-foreground font-bold text-base sm:text-lg mb-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span>Real-Time Analytics</span>
              </div>
              <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed font-normal">
                Track clicks, referrers, devices, operating systems, and top geographic locations live.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-colors hover:border-primary/40 hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-foreground font-bold text-base sm:text-lg mb-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <QrCode className="h-5 w-5" />
                </div>
                <span>Instant QR Codes</span>
              </div>
              <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed font-normal">
                Export high-resolution PNG or vector SVG codes instantly with custom style presets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

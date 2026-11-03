"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BarChart3, QrCode, Github, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function LandingHero() {
  const { data: session } = useSession();

  return (
    <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 border-b border-border/40">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Release / Announcement Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground mb-6"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>ZapLink v1.0 &bull; Open-source link shortener</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15]"
        >
          Simple, fast URL shortening <br className="hidden sm:inline" />
          with built-in analytics.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed font-normal"
        >
          Turn long links into clean URLs. Create custom slugs, set password protection,
          generate instant QR codes, and view real-time click metrics from a clean personal dashboard.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {session ? (
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 font-semibold text-sm h-11 px-6 shadow-sm">
                <span>Go to Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/sign-up">
                <Button size="lg" className="gap-2 font-semibold text-sm h-11 px-6 shadow-sm">
                  <span>Get Started Free</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" size="lg" className="font-semibold text-sm h-11 px-5">
                  <span>Sign In</span>
                </Button>
              </Link>
            </>
          )}

          <a
            href="https://github.com/VinayKrishna-7/ZapLink"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2 text-sm h-11 px-5 text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Button>
          </a>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
        >
          <div className="rounded-xl border border-border/80 bg-card p-4 transition-colors hover:border-border">
            <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm mb-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>Custom Slugs & Expiry</span>
            </div>
            <p className="text-xs text-muted-foreground leading-normal pl-9">
              Personalized aliases, password locks, and automatic link expiration.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-card p-4 transition-colors hover:border-border">
            <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm mb-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="h-4 w-4" />
              </div>
              <span>Real-Time Analytics</span>
            </div>
            <p className="text-xs text-muted-foreground leading-normal pl-9">
              Track clicks, referrers, devices, operating systems, and top countries.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-card p-4 transition-colors hover:border-border">
            <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm mb-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <QrCode className="h-4 w-4" />
              </div>
              <span>Instant QR Codes</span>
            </div>
            <p className="text-xs text-muted-foreground leading-normal pl-9">
              Export high-resolution PNG or vector SVG codes with a single click.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

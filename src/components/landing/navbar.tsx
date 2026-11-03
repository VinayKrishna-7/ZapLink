"use client";

import * as React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../shared/theme-toggle";
import { useSession } from "next-auth/react";

export function LandingNavbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black border border-neutral-800 shadow-sm group-hover:opacity-90 transition-opacity">
              <Zap className="h-4.5 w-4.5 fill-[#E11D48] text-[#E11D48]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-foreground">
              ZapLink
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm sm:text-[15px] text-foreground/80 font-semibold">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/report" className="hover:text-foreground transition-colors">
              Report Abuse
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {session ? (
            <Link href="/dashboard">
              <Button size="sm" className="gap-1.5 font-medium text-xs">
                <span>Dashboard</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" className="font-medium text-xs">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm" className="font-medium text-xs">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

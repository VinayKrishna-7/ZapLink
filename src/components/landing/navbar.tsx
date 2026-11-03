"use client";

import * as React from "react";
import Link from "next/link";
import { Zap, ArrowRight, Github } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../shared/theme-toggle";
import { useSession } from "next-auth/react";

export function LandingNavbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:opacity-90 transition-opacity">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <span className="font-bold text-base tracking-tight text-foreground">
              ZapLink
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#analytics" className="hover:text-foreground transition-colors">
              Analytics
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#developers" className="hover:text-foreground transition-colors">
              API
            </a>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/VinayKrishna-7/ZapLink"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="h-4 w-4" />
          </a>

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

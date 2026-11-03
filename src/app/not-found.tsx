"use client";

import Link from "next/link";
import { Zap, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden bg-background text-foreground">
      <div className="w-full max-w-md text-center animate-fade-in">
        <div className="flex justify-center mb-8">
          <Link href="/" prefetch={true} className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-black border border-border/80 dark:border-neutral-800 shadow-sm transition-colors">
              <Zap className="h-6 w-6 fill-[#E11D48] text-[#E11D48]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-foreground">
              ZapLink
            </span>
          </Link>
        </div>

        <Card className="p-8 shadow-2xl border-border bg-card">
          <span className="font-mono text-6xl font-extrabold text-foreground">404</span>
          <CardTitle className="text-xl font-bold mt-4">Page or Short Link Not Found</CardTitle>
          <CardDescription className="text-xs mt-2 leading-relaxed">
            The link you followed may have expired, been deleted, or does not exist on ZapLink.
          </CardDescription>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" prefetch={true} className="w-full">
              <Button className="w-full gap-2 text-xs font-semibold">
                <Home className="h-4 w-4" />
                <span>ZapLink Home</span>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

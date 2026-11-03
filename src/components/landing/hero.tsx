"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link2, Copy, Check, QrCode, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LandingHero() {
  const { data: session } = useSession();
  const router = useRouter();

  const [inputUrl, setInputUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [createdLink, setCreatedLink] = React.useState<{
    shortUrl: string;
    shortCode: string;
    destinationUrl: string;
  } | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setCreatedLink(null);

    const cleanUrl = inputUrl.trim();
    if (!cleanUrl) return;

    if (!session) {
      // Direct guest to sign-up to claim their link
      router.push(`/sign-up?url=${encodeURIComponent(cleanUrl)}`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/v1/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destinationUrl: cleanUrl }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error?.message || "Failed to create short link");
      }

      setCreatedLink({
        shortUrl: data.data.shortUrl,
        shortCode: data.data.shortCode,
        destinationUrl: data.data.destinationUrl,
      });
      setInputUrl("");
    } catch (err: unknown) {
      setErrorMsg((err as Error).message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!createdLink) return;
    navigator.clipboard.writeText(createdLink.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-14 pb-12 md:pt-20 md:pb-16 border-b border-border/40">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        {/* Minimal pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-5"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>ZapLink &bull; Open-source URL Shortener</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.2]"
        >
          Short links with real-time analytics.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          Create clean short links, track click counts and referrers, and export instant QR codes.
        </motion.p>

        {/* Quick URL Shortener Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl"
        >
          <form
            onSubmit={handleShorten}
            className="flex flex-col sm:flex-row gap-2 rounded-xl border border-border bg-card p-1.5 shadow-sm"
          >
            <div className="relative flex-1 flex items-center">
              <Link2 className="absolute left-3.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="url"
                placeholder="Paste long URL (e.g. https://example.com/very-long-link)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="pl-9 pr-3 border-0 bg-transparent shadow-none focus-visible:ring-0 text-xs sm:text-sm h-10 w-full"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="h-10 px-5 text-xs font-semibold shrink-0"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span>Shorten URL</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </>
              )}
            </Button>
          </form>

          {/* Guest helper notice */}
          {!session && (
            <p className="mt-2 text-[11px] text-muted-foreground">
              Sign in or create an account to customize slugs and track link analytics.
            </p>
          )}

          {/* Error Message */}
          {errorMsg && (
            <p className="mt-2.5 text-xs text-destructive text-left pl-1">
              {errorMsg}
            </p>
          )}

          {/* Success Shortened Result Card */}
          {createdLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3.5 text-left"
            >
              <div className="overflow-hidden">
                <p className="text-[11px] font-medium text-muted-foreground truncate">
                  Original: {createdLink.destinationUrl}
                </p>
                <a
                  href={createdLink.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-semibold text-sm text-primary hover:underline flex items-center gap-1 mt-0.5"
                >
                  <span>{createdLink.shortUrl}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  className="h-8 text-xs font-medium gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
                <Link href="/dashboard">
                  <Button size="sm" className="h-8 text-xs font-medium">
                    Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Simple 3-pill feature row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Custom slugs & UTM builder
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Instant QR codes (PNG & SVG)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Live click tracking
          </span>
        </div>
      </div>
    </section>
  );
}

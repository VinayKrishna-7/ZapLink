import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function LandingPricing() {
  const tiers = [
    {
      name: "Self-Hosted",
      price: "$0",
      description: "Run ZapLink on your own server or locally with Docker.",
      features: [
        "100% open source under MIT",
        "Unlimited links & analytics",
        "SQLite & PostgreSQL support",
        "Full data ownership",
      ],
      cta: "GitHub Repo",
      href: "https://github.com/VinayKrishna-7/ZapLink",
      isExternal: true,
      highlighted: false,
    },
    {
      name: "Cloud Instance",
      price: "$0",
      description: "Hosted directly on Render for quick link creation.",
      features: [
        "Web dashboard access",
        "Real-time click & geo stats",
        "Custom slugs & UTMs",
        "Instant QR codes (PNG/SVG)",
      ],
      cta: "Create Free Account",
      href: "/sign-up",
      isExternal: false,
      highlighted: true,
    },
    {
      name: "Supporter",
      price: "$5",
      description: "Support ongoing open-source maintenance & features.",
      features: [
        "Support project maintenance",
        "Priority GitHub issues",
        "Direct feature input",
        "Backer credit in README",
      ],
      cta: "Get Started",
      href: "/sign-up",
      isExternal: false,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Simple & Transparent
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            100% open source. Self-host for free or use the cloud demo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between p-5 rounded-xl border transition-colors ${
                tier.highlighted
                  ? "border-primary bg-card shadow-sm"
                  : "border-border/80 bg-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-foreground">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Free
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-muted-foreground mt-1.5 min-h-[28px]">
                  {tier.description}
                </p>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-[11px] text-muted-foreground">/forever</span>
                </div>

                <div className="mt-4 space-y-2 border-t border-border/60 pt-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[11px] text-foreground">
                      <Check className="h-3 w-3 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-2">
                {tier.isExternal ? (
                  <a href={tier.href} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs font-semibold h-9">
                      {tier.cta}
                    </Button>
                  </a>
                ) : (
                  <Link href={tier.href} className="w-full">
                    <Button
                      variant={tier.highlighted ? "default" : "outline"}
                      className="w-full text-xs font-semibold h-9"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

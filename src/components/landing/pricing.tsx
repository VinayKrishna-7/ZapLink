import * as React from "react";
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export function LandingPricing() {
  const tiers = [
    {
      name: "Self-Hosted",
      price: "$0",
      period: "forever",
      description: "Run ZapLink on your own machine, VPS, or Docker container.",
      features: [
        "100% open-source under MIT",
        "Unlimited links & click tracking",
        "SQLite & PostgreSQL compatible",
        "Docker & Node.js deployment",
        "Full control over your data",
      ],
      cta: "View Source on GitHub",
      href: "https://github.com/VinayKrishna-7/ZapLink",
      isExternal: true,
      highlighted: false,
    },
    {
      name: "Cloud Instance",
      price: "$0",
      period: "free tier",
      description: "Hosted directly on Render for quick testing and link management.",
      features: [
        "Full web dashboard access",
        "Real-time click & geo analytics",
        "Custom slugs & UTM builder",
        "Password & expiration rules",
        "Instant SVG/PNG QR codes",
        "REST API key management",
      ],
      cta: "Create Free Account",
      href: "/sign-up",
      isExternal: false,
      highlighted: true,
    },
    {
      name: "Supporter",
      price: "$5",
      period: "optional / mo",
      description: "Support ongoing open-source maintenance and feature updates.",
      features: [
        "Everything in Cloud & Self-Hosted",
        "Support project maintenance",
        "Priority GitHub issue review",
        "Feature request input",
        "Backer recognition in README",
      ],
      cta: "Get Started",
      href: "/sign-up",
      isExternal: false,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Simple, honest, and open source
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Self-host it for free, or use the hosted cloud demo. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between p-6 transition-colors ${
                tier.highlighted
                  ? "border-primary bg-card shadow-sm"
                  : "border-border/80 bg-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mt-2 min-h-[32px]">
                  {tier.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-xs text-muted-foreground">/{tier.period}</span>
                </div>

                <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-foreground font-normal">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-3">
                {tier.isExternal ? (
                  <a href={tier.href} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs font-semibold h-10">
                      {tier.cta}
                    </Button>
                  </a>
                ) : (
                  <Link href={tier.href} className="w-full">
                    <Button
                      variant={tier.highlighted ? "default" : "outline"}
                      className="w-full text-xs font-semibold h-10"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

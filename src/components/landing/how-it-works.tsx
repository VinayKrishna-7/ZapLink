import * as React from "react";
import { Link2, Sliders, Share2 } from "lucide-react";

export function LandingHowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Link2,
      title: "Paste your destination URL",
      description:
        "Input any long URL, marketing link, documentation article, or project repository.",
    },
    {
      number: "2",
      icon: Sliders,
      title: "Customize & brand",
      description:
        "Assign a custom alias, add campaign UTM tags, or set optional password and expiration rules.",
    },
    {
      number: "3",
      icon: Share2,
      title: "Share and monitor",
      description:
        "Distribute your link or QR code, then monitor visits, referral sources, and device statistics in your dashboard.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Workflow
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            How ZapLink works
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Create, customize, and track your links in three straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-border/80 bg-card hover:border-border transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-muted text-[11px] font-mono font-bold text-muted-foreground mb-3">
                  {step.number}
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

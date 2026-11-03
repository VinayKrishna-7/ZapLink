import * as React from "react";
import { Link2, Sliders, Share2 } from "lucide-react";

export function LandingHowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Link2,
      title: "Paste URL",
      description: "Enter any destination link you want to shorten.",
    },
    {
      number: "2",
      icon: Sliders,
      title: "Customize",
      description: "Set custom slugs, UTM campaign tags, or passwords.",
    },
    {
      number: "3",
      icon: Share2,
      title: "Share & Track",
      description: "Distribute your short link or QR code and monitor visits.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Three simple steps to shorten and manage links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-border/70 bg-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-semibold text-foreground mb-1">
                  {step.number}. {step.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
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

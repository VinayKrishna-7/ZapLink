import * as React from "react";
import {
  Link2,
  Sliders,
  BarChart3,
  QrCode,
  Clock,
  Code2,
  Tag,
  ShieldCheck,
} from "lucide-react";

export function LandingFeatures() {
  const features = [
    {
      icon: Link2,
      title: "Fast Short Links",
      description: "Direct HTTP 301/302 redirects with minimal latency.",
    },
    {
      icon: Sliders,
      title: "Custom Slugs & UTMs",
      description: "Choose your own slug and append campaign tracking parameters.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track clicks, referrers, devices, and countries live.",
    },
    {
      icon: QrCode,
      title: "QR Code Export",
      description: "Download high-resolution PNG and vector SVG QR codes.",
    },
    {
      icon: Clock,
      title: "Passwords & Expiry",
      description: "Set expiration dates or lock links with a password.",
    },
    {
      icon: Code2,
      title: "REST API",
      description: "Create and manage short links programmatically with API keys.",
    },
    {
      icon: Tag,
      title: "Tags & Organization",
      description: "Organize and filter your links with color-coded tags.",
    },
    {
      icon: ShieldCheck,
      title: "Safe URL Guard",
      description: "Automated checks against loop redirects and invalid protocols.",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Core Features
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Everything you need to create, manage, and track your links.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-border/70 bg-card hover:border-border transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-xs font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
import { Card } from "../ui/card";

export function LandingFeatures() {
  const features = [
    {
      icon: Link2,
      title: "Fast Short Links",
      description:
        "Instant HTTP 301/302 redirects with minimal latency and clean short code generation.",
    },
    {
      icon: Sliders,
      title: "Custom Slugs & UTMs",
      description:
        "Choose your own branded slug and append UTM campaign tags for newsletter and social tracking.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Inspect click counts, unique visitors, referral sources, devices, browsers, and countries.",
    },
    {
      icon: QrCode,
      title: "Downloadable QR Codes",
      description:
        "Generate instant QR codes for any shortened URL and export them as PNG or SVG files.",
    },
    {
      icon: Clock,
      title: "Passwords & Expiration",
      description:
        "Set automatic expiry dates for temporary links or protect private destinations with a password.",
    },
    {
      icon: Code2,
      title: "REST API Access",
      description:
        "Create, retrieve, and delete short links programmatically using hashed API keys and standard JSON.",
    },
    {
      icon: Tag,
      title: "Tags & Organization",
      description:
        "Group links by campaign, project, or category using color-coded tags in your personal dashboard.",
    },
    {
      icon: ShieldCheck,
      title: "URL Safety Validation",
      description:
        "Automatic validation against loop redirects, malformed protocols, and suspicious destination patterns.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Everything you need in a modern link shortener
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Thoughtfully built for creators, marketers, and developers who want full control over their URLs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="p-5 border-border/80 bg-card hover:border-border transition-colors group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { Terminal, Code2, ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CopyButton } from "../shared/copy-button";

export function LandingApiSection() {
  const [activeTab, setActiveTab] = React.useState<"curl" | "typescript" | "python">("curl");

  const codeSnippets = {
    curl: `curl -X POST https://zaplink-g4ui.onrender.com/api/v1/links \\
  -H "Authorization: Bearer zl_live_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "destinationUrl": "https://example.com/blog/release-notes",
    "customAlias": "release-v1",
    "utmSource": "newsletter",
    "utmCampaign": "launch"
  }'`,
    typescript: `import axios from 'axios';

const response = await axios.post(
  'https://zaplink-g4ui.onrender.com/api/v1/links',
  {
    destinationUrl: 'https://example.com/blog/release-notes',
    customAlias: 'release-v1',
    utmSource: 'newsletter',
  },
  {
    headers: {
      Authorization: \`Bearer \${process.env.ZAPLINK_API_KEY}\`,
    },
  }
);

console.log(response.data.shortUrl);
// => "https://zaplink-g4ui.onrender.com/release-v1"`,
    python: `import requests

url = "https://zaplink-g4ui.onrender.com/api/v1/links"
headers = {
    "Authorization": "Bearer zl_live_YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "destinationUrl": "https://example.com/blog/release-notes",
    "customAlias": "release-v1"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json()["data"]["shortUrl"])`,
  };

  return (
    <section id="developers" className="py-16 md:py-24 bg-muted/20 border-t border-border/60">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Info & CTA */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" />
              <span>Developer API</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Integrate link shortening into your stack
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Automate short link creation directly from your backend services, CI/CD pipelines,
              or scripts using standard REST requests.
            </p>

            <ul className="space-y-2.5 text-xs text-foreground font-medium">
              <li className="flex items-center gap-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span>Simple JSON request & response format</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span>Secure SHA-256 hashed API key management</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span>Standard HTTP status codes & rate limiting headers</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link href="/docs">
                <Button variant="outline" className="gap-2 text-xs font-semibold h-9 px-4">
                  <span>View Documentation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-border bg-slate-950 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="h-3 w-3" />
                    api/v1/links
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 rounded-md bg-slate-950 p-1 text-[11px] font-mono">
                  {(["curl", "typescript", "python"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`rounded px-2 py-0.5 capitalize transition-all ${
                        activeTab === tab
                          ? "bg-primary text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Body */}
              <div className="relative p-4 sm:p-5">
                <div className="absolute right-3 top-3">
                  <CopyButton text={codeSnippets[activeTab]} size="iconSm" variant="glass" />
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-slate-200">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

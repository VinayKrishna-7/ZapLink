"use client";

import * as React from "react";
import { Terminal, Code2, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CopyButton } from "../shared/copy-button";

export function LandingApiSection() {
  const [activeTab, setActiveTab] = React.useState<"curl" | "typescript" | "python">("curl");

  const codeSnippets = {
    curl: `curl -X POST https://zaplink-g4ui.onrender.com/api/v1/links \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"destinationUrl": "https://example.com/article", "customAlias": "my-link"}'`,
    typescript: `import axios from 'axios';

const res = await axios.post(
  'https://zaplink-g4ui.onrender.com/api/v1/links',
  { destinationUrl: 'https://example.com/article', customAlias: 'my-link' },
  { headers: { Authorization: \`Bearer \${process.env.ZAPLINK_API_KEY}\` } }
);
console.log(res.data.shortUrl);`,
    python: `import requests

res = requests.post(
    "https://zaplink-g4ui.onrender.com/api/v1/links",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={"destinationUrl": "https://example.com/article", "customAlias": "my-link"}
)
print(res.json()["data"]["shortUrl"])`,
  };

  return (
    <section id="developers" className="py-12 md:py-16 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-1">
              <Code2 className="h-3.5 w-3.5" />
              <span>Developer API</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Programmatic link shortening
            </h2>
          </div>
          <Link href="/docs">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs font-semibold">
              <span>View Docs</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>

        {/* Code Box */}
        <div className="overflow-hidden rounded-xl border border-border bg-slate-950 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2">
            <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5" />
              POST /api/v1/links
            </span>

            <div className="flex items-center gap-1 rounded bg-slate-950 p-0.5 text-[11px] font-mono">
              {(["curl", "typescript", "python"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded px-2 py-0.5 capitalize transition-colors ${
                    activeTab === tab
                      ? "bg-white/20 text-white font-semibold border border-white/20 shadow-sm"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="relative p-4">
            <div className="absolute right-3 top-3">
              <CopyButton text={codeSnippets[activeTab]} size="iconSm" variant="glass" />
            </div>
            <pre className="overflow-x-auto font-mono text-xs text-slate-200 leading-relaxed pr-8">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

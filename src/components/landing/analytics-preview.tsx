"use client";

import * as React from "react";
import { ClicksChart } from "../analytics/clicks-chart";
import { DeviceChart } from "../analytics/device-chart";
import { BrowserChart } from "../analytics/browser-chart";
import { GeoList } from "../analytics/geo-list";
import { KpiCard } from "../analytics/kpi-card";
import { Link2, MousePointerClick, Users, TrendingUp } from "lucide-react";

export function LandingAnalyticsPreview() {
  const sampleTimeSeries = React.useMemo(() => {
    const data = [];
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const clicks = Math.floor(Math.sin(i * 0.4) * 400) + 3800 + Math.floor(Math.random() * 500);
      data.push({
        date: d.toISOString().split("T")[0],
        clicks,
        uniqueVisitors: Math.floor(clicks * 0.78),
      });
    }
    return data;
  }, []);

  return (
    <section id="analytics" className="py-12 md:py-16 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-lg mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Analytics Overview
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Live visitor stats, click timelines, and audience breakdowns.
          </p>
        </div>

        {/* Dashboard Preview Shell */}
        <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm space-y-4">
          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KpiCard
              title="Total Clicks"
              value={128492}
              change={18.4}
              icon={MousePointerClick}
              iconColor="text-indigo-400 bg-indigo-500/10"
            />
            <KpiCard
              title="Unique Visitors"
              value={42801}
              change={14.2}
              icon={Users}
              iconColor="text-cyan-400 bg-cyan-500/10"
            />
            <KpiCard
              title="Active Links"
              value={142}
              change={8.5}
              icon={Link2}
              iconColor="text-emerald-400 bg-emerald-500/10"
            />
            <KpiCard
              title="Avg CTR"
              value={32}
              suffix="%"
              change={4.1}
              icon={TrendingUp}
              iconColor="text-amber-400 bg-amber-500/10"
            />
          </div>

          {/* Clicks Chart */}
          <ClicksChart data={sampleTimeSeries} />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <DeviceChart
              data={[
                { name: "Desktop", value: 65, percentage: 65 },
                { name: "Mobile", value: 30, percentage: 30 },
                { name: "Tablet", value: 5, percentage: 5 },
              ]}
            />
            <BrowserChart
              data={[
                { name: "Chrome", value: 60, percentage: 60 },
                { name: "Safari", value: 22, percentage: 22 },
                { name: "Firefox", value: 10, percentage: 10 },
                { name: "Edge", value: 8, percentage: 8 },
              ]}
            />
            <GeoList
              data={[
                { country: "United States", countryCode: "US", clicks: 57821, percentage: 45 },
                { country: "United Kingdom", countryCode: "GB", clicks: 19273, percentage: 15 },
                { country: "Germany", countryCode: "DE", clicks: 15419, percentage: 12 },
                { country: "Canada", countryCode: "CA", clicks: 10279, percentage: 8 },
                { country: "India", countryCode: "IN", clicks: 8994, percentage: 7 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

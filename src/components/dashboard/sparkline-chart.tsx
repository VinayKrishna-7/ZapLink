"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SparklineChartProps {
  data: { date: string; clicks: number }[];
}

export function SparklineChart({ data }: SparklineChartProps) {
  return (
    <div className="h-32 sm:h-36 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
          <defs>
            <linearGradient id="dashboardSparkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.25} />
              <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="currentColor" opacity={0.5} fontSize={10} tickLine={false} />
          <YAxis stroke="currentColor" opacity={0.5} fontSize={10} tickLine={false} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              borderRadius: "0.5rem",
              color: "hsl(var(--foreground))",
              fontSize: "11px",
              padding: "6px 10px",
            }}
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="currentColor"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#dashboardSparkGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SparklineChart;

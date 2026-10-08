import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { redis } from "@/lib/redis/client";
import { recordClickEvent } from "@/lib/analytics/collector";
import { RESERVED_WORDS } from "@/lib/shortcode/generator";

interface Params {
  params: Promise<{ shortCode: string }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const { shortCode } = await params;

  // Ignore reserved words and next.js internal assets
  if (RESERVED_WORDS.has(shortCode.toLowerCase()) || shortCode.startsWith("_")) {
    return NextResponse.next();
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    let linkData: {
      id: string;
      destinationUrl: string;
      status: string;
      expiresAt: string | null;
      hasPassword?: boolean;
    } | null = null;

    // Check cache
    try {
      const cached = await redis.get(`link:${shortCode}`);
      if (cached) {
        linkData = JSON.parse(cached);
      }
    } catch {
      // cache miss
    }

    // Query database on cache miss
    if (!linkData) {
      const dbLink = await prisma.link.findFirst({
        where: {
          OR: [{ shortCode }, { customAlias: shortCode }],
        },
      });

      if (dbLink) {
        linkData = {
          id: dbLink.id,
          destinationUrl: dbLink.destinationUrl,
          status: dbLink.status,
          expiresAt: dbLink.expiresAt ? dbLink.expiresAt.toISOString() : null,
          hasPassword: !!dbLink.passwordHash,
        };

        // Cache for subsequent visits
        redis.set(`link:${shortCode}`, JSON.stringify(linkData), "EX", 3600 * 24).catch(() => {});
      }
    }

    if (!linkData) {
      return NextResponse.redirect(`${appUrl}/not-found?code=${encodeURIComponent(shortCode)}`, 307);
    }

    if (linkData.status === "DISABLED") {
      return NextResponse.redirect(`${appUrl}/link-disabled?code=${encodeURIComponent(shortCode)}`, 307);
    }

    if (
      linkData.status === "EXPIRED" ||
      (linkData.expiresAt && new Date(linkData.expiresAt).getTime() < Date.now())
    ) {
      return NextResponse.redirect(`${appUrl}/link-expired?code=${encodeURIComponent(shortCode)}`, 307);
    }

    if (linkData.hasPassword) {
      return NextResponse.redirect(`${appUrl}/unlock?code=${encodeURIComponent(shortCode)}`, 307);
    }

    const userAgent = request.headers.get("user-agent") || undefined;
    const referrer = request.headers.get("referer") || undefined;
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || undefined;
    const country = request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "United States";
    const countryCode = request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "US";
    const region = request.headers.get("x-vercel-ip-country-region") || undefined;
    const city = request.headers.get("x-vercel-ip-city") || undefined;

    // Log click event asynchronously
    recordClickEvent({
      linkId: linkData.id,
      userAgent,
      referrer,
      ip,
      country,
      countryCode,
      region,
      city,
    }).catch((err) => console.error("[CLICK_RECORD_ERR]", err));

    return NextResponse.redirect(linkData.destinationUrl, {
      status: 307,
      headers: {
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("[REDIRECT_ENGINE_ERROR]", error);
    return NextResponse.redirect(`${appUrl}/`, 307);
  }
}

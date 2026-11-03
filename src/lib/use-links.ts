"use client";

import * as React from "react";
import { LinkItem } from "@/types";

let memoryCache: LinkItem[] | null = null;
let lastFetchedAt = 0;
let inflightPromise: Promise<LinkItem[]> | null = null;
const listeners = new Set<(links: LinkItem[]) => void>();

function notify(links: LinkItem[]) {
  listeners.forEach((listener) => {
    try {
      listener(links);
    } catch (err) {
      console.error("Error notifying links listener:", err);
    }
  });
}

/**
 * Fetch links with caching & deduplication
 */
export async function fetchLinksCached(force = false): Promise<LinkItem[]> {
  const now = Date.now();
  // Return cached immediately if recent (<15s) and not forced
  if (!force && memoryCache && now - lastFetchedAt < 15000) {
    return memoryCache;
  }

  if (inflightPromise) {
    return inflightPromise;
  }

  inflightPromise = (async (): Promise<LinkItem[]> => {
    try {
      const res = await fetch("/api/v1/links?limit=100", { cache: "no-store" });
      const json = await res.json();
      if (res.ok && Array.isArray(json.data)) {
        const data: LinkItem[] = json.data;
        memoryCache = data;
        lastFetchedAt = Date.now();
        notify(data);
        return data;
      }
      return memoryCache ?? [];
    } catch (err) {
      console.error("Failed to fetch links:", err);
      return memoryCache ?? [];
    } finally {
      inflightPromise = null;
    }
  })();

  return inflightPromise;
}

/**
 * Invalidate cache and re-fetch in the background or immediately
 */
export async function invalidateLinksCache(): Promise<LinkItem[]> {
  return fetchLinksCached(true);
}

/**
 * Optimistically update the cached links without waiting for server round-trip
 */
export function updateLinksLocally(updater: (prev: LinkItem[]) => LinkItem[]) {
  if (memoryCache) {
    memoryCache = updater(memoryCache);
    notify(memoryCache);
  }
}

/**
 * Stale-while-revalidate React hook for links.
 * Returns cached links immediately (0ms latency), background-syncing when needed.
 */
export function useLinks() {
  const [links, setLinks] = React.useState<LinkItem[]>(() => memoryCache ?? []);
  const [isLoading, setIsLoading] = React.useState<boolean>(() => memoryCache === null);

  React.useEffect(() => {
    let isMounted = true;

    const listener = (newLinks: LinkItem[]) => {
      if (isMounted) {
        setLinks(newLinks);
        setIsLoading(false);
      }
    };

    listeners.add(listener);

    const isStale = Date.now() - lastFetchedAt > 15000;
    if (memoryCache === null || isStale) {
      if (memoryCache === null) {
        setIsLoading(true);
      }
      fetchLinksCached(isStale && memoryCache !== null).then((fetched) => {
        if (isMounted) {
          setLinks(fetched);
          setIsLoading(false);
        }
      });
    }

    return () => {
      isMounted = false;
      listeners.delete(listener);
    };
  }, []);

  const refresh = React.useCallback(async () => {
    setIsLoading(true);
    const updated = await invalidateLinksCache();
    setLinks(updated);
    setIsLoading(false);
  }, []);

  return {
    links,
    isLoading,
    refresh,
  };
}

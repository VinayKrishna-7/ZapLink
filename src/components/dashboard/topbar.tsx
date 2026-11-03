"use client";

import * as React from "react";
import {
  Search,
  Menu,
  User as UserIcon,
  LogOut,
  Settings,
  Shield,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "../shared/theme-toggle";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TopbarProps {
  onOpenCommandPalette: () => void;
  onOpenCreateModal?: () => void;
  onToggleMobileSidebar?: () => void;
}

export function Topbar({
  onOpenCommandPalette,
  onToggleMobileSidebar,
}: TopbarProps) {
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-border/80 bg-background px-4 sm:px-6">
      {/* Left: Mobile hamburger & Search trigger */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden rounded-xl border border-border p-2 text-muted-foreground hover:bg-muted"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Global Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="flex h-10 w-48 sm:w-72 items-center justify-between rounded-xl border border-border/80 bg-muted/40 px-3 text-xs text-muted-foreground transition-all hover:bg-muted hover:border-primary/40 group"
        >
          <div className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
            <span>Search or command...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right: Clean Theme Toggle & User Profile Feature */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Interactive User Profile Menu */}
        <div className="relative pl-2 border-l border-border/80" ref={menuRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-xl p-1 hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="User profile menu"
            aria-expanded={profileOpen}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/10 text-foreground font-bold text-xs border border-border shadow-sm">
              {session?.user?.name?.[0] || session?.user?.email?.[0] || <UserIcon className="h-4 w-4" />}
            </div>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 hidden sm:block",
                profileOpen && "rotate-180"
              )}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-border bg-card p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
              {/* User Identity Header */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/10 text-foreground font-bold text-sm border border-border shadow-sm">
                  {session?.user?.name?.[0] || session?.user?.email?.[0] || "U"}
                </div>
                <div className="overflow-hidden">
                  <p className="truncate text-xs font-bold text-foreground">
                    {session?.user?.name || "User"}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {session?.user?.email}
                  </p>
                </div>
              </div>

              <div className="my-1.5 h-px bg-border/60" />

              {/* Quick Links */}
              <div className="space-y-0.5">
                <Link
                  href="/dashboard/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <Settings className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Account Settings</span>
                </Link>

                {session?.user?.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-amber-500 hover:bg-amber-500/10 transition-colors"
                  >
                    <Shield className="h-3.5 w-3.5" />
                    <span>Admin Control</span>
                  </Link>
                )}
              </div>

              <div className="my-1.5 h-px bg-border/60" />

              {/* Sign Out Action */}
              <button
                onClick={() => {
                  setProfileOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-500/10 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

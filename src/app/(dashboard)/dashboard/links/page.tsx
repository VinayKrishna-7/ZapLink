"use client";

import * as React from "react";
import { LinkTable } from "@/components/links/link-table";
import { CreateLinkModal } from "@/components/links/create-link-modal";
import { Button } from "@/components/ui/button";
import { Sparkles, Link2 } from "lucide-react";
import { useLinks } from "@/lib/use-links";

export default function LinksPage() {
  const { links, isLoading, refresh: fetchLinks } = useLinks();
  const [createModalOpen, setCreateModalOpen] = React.useState(false);

  return (
    <div className="w-full space-y-4 animate-fade-in pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-foreground" />
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
              Link Management
            </h1>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Search, filter, categorize with tags, edit parameters, and generate QR codes.
          </p>
        </div>

        <Button
          variant="default"
          onClick={() => setCreateModalOpen(true)}
          className="gap-1.5 self-start sm:self-auto font-semibold text-xs shadow-sm h-9"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Create Link</span>
        </Button>
      </div>

      {/* Link Table - Full Width */}
      <div className="w-full">
        <LinkTable
          links={links}
          isLoading={isLoading}
          onRefresh={fetchLinks}
          onCreateLink={() => setCreateModalOpen(true)}
        />
      </div>

      <CreateLinkModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onSuccess={fetchLinks}
      />
    </div>
  );
}

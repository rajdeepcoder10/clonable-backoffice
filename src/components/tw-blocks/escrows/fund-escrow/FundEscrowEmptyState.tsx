"use client";

import { Card, CardContent } from "@/components/ui/card";

interface FundEscrowEmptyStateProps {
  onLoadEscrow: () => void;
}

export function FundEscrowEmptyState({ onLoadEscrow }: FundEscrowEmptyStateProps) {
  return (
    <Card className="border-border/60 border-dashed">
      <CardContent className="pt-12 pb-12">
        <div className="text-center space-y-4">
          <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No Escrow Selected
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Select an escrow from the sidebar to view its details
              and funding progress.
            </p>
            <button
              onClick={onLoadEscrow}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              aria-label="Load an escrow to fund"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Load Escrow
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
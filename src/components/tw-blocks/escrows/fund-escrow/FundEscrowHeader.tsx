"use client";

import { WalletButton } from "@/components/tw-blocks/wallet-kit/WalletButtons";
import Image from "next/image";

export function FundEscrowHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Image
                src="/favicon.ico"
                alt="Trustless Work"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Escrow Management
              </p>
              <h1 className="text-lg sm:text-xl font-semibold text-foreground">
                Fund Escrow
              </h1>
            </div>
          </div>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}
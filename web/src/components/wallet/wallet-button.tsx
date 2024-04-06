"use client";

import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";

export function WalletButton() {
  return (
    <div className="pl-2.5">
      <UnifiedWalletButton buttonClassName="!rounded-full !py-2.5" />
    </div>
  );
}

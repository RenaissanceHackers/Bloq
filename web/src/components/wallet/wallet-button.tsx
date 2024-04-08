"use client";

import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";

export function WalletButton() {
  return (
    <div className="flex justify-end">
      <UnifiedWalletButton buttonClassName="!rounded-full !py-2.5 !flex !w-fit " />
    </div>
  );
}

"use client";

import React from "react";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "next-themes";
import { TRPCReactProvider } from "~/trpc/react";
import { TooltipProvider } from "~/components/ui/tooltip";
import { WalletConnectProvider } from "~/components/wallet/wallet-connection-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <TRPCReactProvider>
      <WalletConnectProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </WalletConnectProvider>
    </TRPCReactProvider>
  );
}

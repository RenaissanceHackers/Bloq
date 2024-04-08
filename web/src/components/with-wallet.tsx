"use client";

import React from "react";

import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

export function CreateWithWallet({ children }: { children: React.ReactNode }) {
  const { connected, publicKey } = useWallet();

  const { mutate } = api.user.create.useMutation();

  const twitter = "";
  const create = React.useCallback(
    (address: string) => {
      mutate({ address, twitter });
    },
    [mutate],
  );

  React.useEffect(() => {
    if (connected && publicKey) {
      const address = publicKey?.toString();
      create(address);
    }
  }, [connected, create, publicKey]);
  return <div vaul-drawer-wrapper="">{children}</div>;
}

"use client";

import React from "react";

import { Editor } from "./editor";
import { useWallet } from "@jup-ag/wallet-adapter";

export function EditorProvider() {
  const { connected } = useWallet();
  return (
    <div className="flex h-full flex-col items-center">
      {connected ? (
        <Editor />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          Please connect wallet
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";

import { useWallet } from "@jup-ag/wallet-adapter";

import { useAtom } from "jotai";
import { draftTaskAtom, exploreTaskAtom } from "~/context/atom";
import { HardBox } from "./hard-box";
import { HardViewBox } from "../owner/hard-view";

export function AcceptedList() {
  const { publicKey, connected } = useWallet();
  const [explore] = useAtom(exploreTaskAtom);
  const [draft] = useAtom(draftTaskAtom);

  const submitted = explore.filter((item) => item.accepted === true);
  const completed = explore.filter(
    (item) => item.accepted === true && item.claim === true,
  );

  if (!publicKey) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        please connect wallet
      </div>
    );
  }

  return (
    <>
      {connected ? (
        <div className="grid flex-1 flex-grow gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-semibold capitalize">Draft</span>
              <span className="hrink-0 relative flex overflow-hidden rounded-full bg-white px-2 font-normal ">
                {draft?.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 transition-all duration-300">
              {draft?.map((item, index) => <HardBox key={index} {...item} />)}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-semibold capitalize">Submitted</span>
              <span className="rounded-full bg-white px-2 font-normal">
                {submitted?.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {submitted?.map((item, index) => (
                <HardViewBox key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-normal capitalize">Completed</span>
              <span className="rounded-full bg-white px-2 font-normal">
                {completed?.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {submitted?.map((item, index) => (
                <HardViewBox key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-1 items-center justify-center">
          please connect wallet
        </div>
      )}
    </>
  );
}

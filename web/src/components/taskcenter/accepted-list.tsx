"use client";

import React from "react";

import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";
import { TaskCenterAcceptedBox } from "./accepted-box";
import { TaskCenterCompletedBox } from "./completed-box";
import { TaskCenterSubmittedBox } from "./submitted-box";

export function AcceptedList() {
  const { publicKey, connected } = useWallet();

  if (!publicKey) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        please connect wallet
      </div>
    );
  }

  const draftList = api.accepted.draft.useQuery(
    { address: publicKey.toString() },
    { enabled: !!publicKey, refetchInterval: 1000 },
  ).data;

  const submitted = api.accepted.submitted.useQuery(
    { address: publicKey.toString() },
    { enabled: !!publicKey,refetchInterval: 1000 },
  ).data;
  const completed = api.accepted.completed.useQuery(
    { address: publicKey.toString() },
    { enabled: !!publicKey ,refetchInterval: 1000},
  ).data;

  return (
    <>
      {connected ? (
        <div className="grid flex-1 flex-grow gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-semibold capitalize">Draft</span>
              <span className="rounded-full bg-white px-2 font-normal">
                {draftList?.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 transition-all duration-300">
              {draftList?.map((item, index) => (
                <TaskCenterAcceptedBox key={index} {...item.task} />
              ))}
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
                <TaskCenterSubmittedBox key={index} {...item.task} />
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
                <TaskCenterCompletedBox key={index} {...item.task} />
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

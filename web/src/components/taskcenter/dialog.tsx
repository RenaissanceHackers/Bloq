"use wallet";

import React from "react";
import { type TaskProps } from "~/types";
import { Button } from "../ui/button";
import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

export function DialogBox(props: TaskProps) {
  const { mutate } = api.accepted.accept.useMutation();

  const { publicKey } = useWallet();

  const create = React.useCallback(() => {
    mutate({
      address: publicKey ? publicKey?.toString() : "",
      taskId: props.id,
    });
  }, [mutate, props.id, publicKey]);

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <span className="font-bold leading-none tracking-tight">
        1. Task Informations
      </span>
      <div className="flex flex-col space-y-1.5">
        <span className="flex items-start justify-start pl-0.5 font-semibold">
          {props.title}
        </span>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Description:</span>
            {props.description}
          </p>
        </div>
      </div>
      <span className="font-bold leading-none tracking-tight">
        2. Requirements
      </span>
      <div className="my-0.5 flex items-center gap-4">
        <span className="text-lg font-bold">{props.tokenAmount}</span>
        <span>Contribution points</span>
      </div>
      <span className="font-bold leading-none tracking-tight">3. Reward</span>

      <div className="flex w-fit items-center gap-2 rounded-full dark:bg-[#886b44]  bg-[#FDEDD3] px-2.5 py-1">
        <span>{props.contribution}</span>
        <span>Point</span>
      </div>
      <div className="my-0.5 flex flex-col space-y-1.5 pl-0.5">
        <span className="text-sm font-medium leading-none text-foreground/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          The top ten are allocated this share based on the quality of content,
          with specific distribution rules available for more information here.
        </span>
      </div>
      <Button
        className="w-full bg-green-500 text-lg font-semibold hover:bg-green-600"
        onClick={() => create()}
      >
        Accept
      </Button>
    </div>
  );
}

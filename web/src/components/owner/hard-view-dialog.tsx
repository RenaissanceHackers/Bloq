"use wallet";

import React from "react";

import { Button } from "../ui/button";
import { Icons } from "../icons";

import { AlertDialogCancel } from "../ui/alert-dialog";
import type { TaskProps } from "~/context/atom";

export function HardViewDialogBox(props: TaskProps) {
  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <span className="font-bold leading-none tracking-tight">
        1. Task Informations for {props.title}
      </span>
      <div className="flex flex-col space-y-1.5">
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Description:</span>
            {props.descriptionDetail}
          </p>
        </div>
      </div>
      <span className="font-bold leading-none tracking-tight">
        2. Requirements
      </span>
      <div className="my-0.5 flex items-center gap-4">
        <span>Contribution points:</span>
        <span className="text-lg font-bold text-green-500">
          {props.tokenAmount?.toLowerCase()}
        </span>
      </div>
      <span className="font-bold leading-none tracking-tight">3. Reward</span>

      <div className="flex items-center gap-2 text-sm font-normal text-white group-hover:text-gray-50">
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.point className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span>{props.contribution}</span>
            <span className="capitalize">Point</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.ren className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span className="">{props.pointAmount?.toLocaleString()}</span>
            <span className="uppercase">${props.tokenName}</span>
          </div>
        </div>
      </div>
      <div className="my-0.5 flex flex-col space-y-1.5 pl-0.5">
        <span className="text-sm font-medium leading-none text-foreground/50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          The top ten are allocated this share based on the quality of content,
          with specific distribution rules available for more information here.
        </span>
      </div>
      <div className="flex w-full items-center gap-4">
        <AlertDialogCancel className="w-full px-0">
          <Button className="h-10 w-full py-3 text-lg font-semibold">
            Cancel
          </Button>
        </AlertDialogCancel>
      </div>
    </div>
  );
}

"use client";

import { TaskCreate } from "./create";
import { draftTaskAtom } from "~/context/atom";
import { useAtom } from "jotai";

import { HardOwnerBox } from "./hard-owner-box";

export function OwnerDraft() {
  const [draft] = useAtom(draftTaskAtom);

  return (
    <div className="col-span-1 w-full space-y-4">
      <div className="flex items-center space-x-1">
        <span className="font-normal capitalize">Draft</span>
        <span className="rounded-full bg-white px-2 font-normal dark:bg-[#111113]">
          {draft.length}
        </span>
      </div>
      <TaskCreate />
      <div className="grid grid-cols-1 gap-4">
        {draft.map((item, index) => (
          <HardOwnerBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

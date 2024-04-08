"use client";

import { useAtom } from "jotai";
import { exploreTaskAtom } from "~/context/atom";
import { HardViewBox } from "./hard-view";

export async function InProgress() {
  const [explore] = useAtom(exploreTaskAtom);
  const progress = explore.filter((item) => item.progress === true);
  return (
    <div className="col-span-2 space-y-4">
      <div className="flex items-center space-x-1">
        <span className="font-normal capitalize">In Progress</span>
        <span className="rounded-full bg-white px-2 font-normal">
          {progress.length}
        </span>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {progress.map((item, index) => (
          <HardViewBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

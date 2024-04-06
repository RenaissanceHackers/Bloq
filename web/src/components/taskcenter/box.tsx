import Image from "next/image";

import { Icons } from "../icons";
import { Separator } from "../ui/separator";

export function TaskCenterBox() {
  const ren = 20000;
  return (
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-2 pt-3 shadow transition-all duration-500 hover:scale-[1.03] hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="relative h-8 w-8">
            <Image className="rounded-full" alt="avatar" src="/test.jpg" fill />
          </div>
          <div className="font-semibold">Renzo Protocol</div>
        </div>
        <div className="flex items-center gap-0.5">
          <span className="capitalize">End:</span>
          <span className="text-xs font-semibold">Apr.10,2024</span>
        </div>
      </div>
      <div className="w-full text-pretty p-2 text-xl font-semibold">
        Write a research article on “ What are
      </div>
      <div className="flex items-center gap-2 text-sm font-normal text-white group-hover:text-gray-50">
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.point className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span>1000</span>
            <span className="capitalize">Point</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.ren className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span>{ren.toLocaleString()}</span>
            <span className="uppercase">$REN</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-2 font-normal">
        <span>9 Participants</span>
      </div>
    </div>
  );
}

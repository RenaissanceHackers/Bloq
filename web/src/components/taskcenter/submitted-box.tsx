import { Icons } from "../icons";
import { Separator } from "../ui/separator";

export function TaskCenterSubmittedBox() {
  const ren = 20000;
  return (
    <div className="space-y-4 rounded-xl border bg-background p-2 pt-3 shadow">
      <div className="flex items-center justify-between">
        <div className="rounded-full border px-4 py-1.5 font-normal">Edit</div>
        <div className="flex items-center gap-0.5">
          <span className="capitalize">End:</span>
          <span className="text-xs font-semibold">Apr.10,2024</span>
        </div>
      </div>
      <div className="w-full text-pretty p-2 text-xl font-semibold">
        Write a research article on “ What are Token Extensions? ”
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5 text-white">
          <Icons.point className="h-4 w-4" />
          <div className="flex items-center gap-1 text-sm font-normal">
            <span>1000</span>
            <span className="capitalize">Point</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5 text-white">
          <Icons.ren className="h-4 w-4" />
          <div className="flex items-center gap-1 text-sm font-normal">
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

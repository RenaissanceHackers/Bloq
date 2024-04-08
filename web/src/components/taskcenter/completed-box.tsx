import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function TaskCenterCompletedBox() {
  return (
    <div className="space-y-4 rounded-xl border bg-background p-2 pt-3 shadow">
      <div className="flex items-center gap-0.5 text-xs font-normal">
        <span className="capitalize">Completed: </span>
        <span className="">Apr.10,2024</span>
      </div>
      <div className="w-full text-pretty p-2 text-xl font-semibold">
        Write a research article on “ What are Token Extensions? ”
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-normal">You have won a reward.</span>
        <Button className="w-fit rounded-full bg-[#17C964] font-normal hover:bg-[#17C964]/80">
          Claim reward
        </Button>
      </div>
      <Separator />
      <div className="p-2 font-normal">
        <span>9 Participants</span>
      </div>
    </div>
  );
}

import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

import { type TaskProps } from "~/types";
import { OwnerDialogBox } from "./owner-dialog";

export function OwnerBox(props: TaskProps) {
  const ren = 20000;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          asChild
          variant="ghost"
          className="block h-auto w-full p-0 text-base"
        >
          <div className="space-y-4 rounded-xl border bg-background px-0 py-2 pt-3 shadow">
            <div className="flex items-center justify-between">
              <div className="rounded-full border px-4 py-1.5 font-normal">
                Edit
              </div>
              <div className="flex items-center gap-0.5">
                <span className="capitalize">End:</span>
                <span className="text-xs font-semibold">Apr.10,2024</span>
              </div>
            </div>
            <div className="w-full text-pretty p-2 text-xl font-semibold">
              {props.title}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5 text-white">
                <Icons.point className="h-4 w-4" />
                <div className="flex items-center gap-1 text-sm font-normal">
                  <span>{props.contribution}</span>
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
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="pb-2">
          <div className="flex items-center justify-between pr-6">
            <DialogTitle className="text-xl font-bold">
              Renzo Protocol
            </DialogTitle>
            <Button variant="ghost">
              <TwitterLogoIcon className="h-5 w-5" />
            </Button>
          </div>
          <DialogDescription className="pb-4">
            Renzo is a Liquid Restaking Token (LRT) and Strategy Manager for
            EigenLayer. Renzo serves as the interface to the EigenLayer
            ecosystem by securing Actively Validated Services (AVSs) and
            offering a higher yield than ETH staking.
          </DialogDescription>
          <OwnerDialogBox {...props} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

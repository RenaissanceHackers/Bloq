import { TaskCenterAcceptedBox } from "~/components/taskcenter/accepted-box";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { Icons } from "~/components/icons";
import { CreateTaskForm } from "~/components/owner/create-task-form";
import { api } from "~/trpc/server";

export async function OwnerDraft() {
  const list = await api.task.get_draft();
  return (
    <div className="col-span-1 space-y-4">
      <div className="flex items-center space-x-1">
        <span className="font-normal capitalize">Draft</span>
        <span className="rounded-full bg-white px-2 font-normal">1</span>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            asChild
            variant="outline"
            className="h-10 w-full rounded-md bg-background shadow"
          >
            <div className="my-2">
              <Icons.add className="h-4 w-4" />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="pb-2">
            <DialogTitle>Create a new task</DialogTitle>
          </DialogHeader>
          <CreateTaskForm />
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 gap-4">
        {list.map((item) => (
          <TaskCenterAcceptedBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

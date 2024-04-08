"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Icons } from "../icons";
import { CreateTaskForm } from "./create-task-form";

export function TaskCreate() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          asChild
          variant="outline"
          className="h-10 w-full rounded-md bg-background shadow"
        >
          <div className="my-2">
            <Icons.add className="h-4 w-4 text-foreground" />
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
  );
}

"use client";

import Image from "next/image";

import { Icons } from "../icons";
import { Separator } from "../ui/separator";

import { Button, buttonVariants } from "../ui/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { cn } from "~/lib/utils";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import type { TaskProps } from "~/context/atom";
import { HardViewDialogBox } from "./hard-view-dialog";

export function HardViewBox(props: TaskProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          asChild
          variant="ghost"
          className="block h-auto w-auto p-0 text-base transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="group cursor-pointer space-y-4 rounded-xl border bg-background p-2 pt-3 shadow hover:bg-background/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="relative h-8 w-8">
                  <Image
                    className="rounded-full"
                    alt="avatar"
                    src={props.path}
                    fill
                  />
                </div>
                <div className="font-semibold">{props.title}</div>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="capitalize">End:</span>
                <span className="text-sm font-semibold">Apr.10,2024</span>
              </div>
            </div>
            <div className="w-full text-pretty p-2 text-xl font-semibold">
              {props.description}
            </div>
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
                  <span className="">
                    {props.pointAmount?.toLocaleString()}
                  </span>
                  <span className="uppercase">${props.tokenName}</span>
                </div>
              </div>
            </div>
            <Separator />
            <div className="p-2 font-normal">
              <span>{props.participants} Participants</span>
            </div>
          </div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader className="pb-2">
          <div className="flex items-center justify-between pr-6">
            <AlertDialogTitle className="text-xl font-bold">
              {props.title}
            </AlertDialogTitle>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "ghost" }))}
              target="_blank"
            >
              <TwitterLogoIcon className="h-5 w-5" />
            </Link>
          </div>
          <AlertDialogDescription className="pb-4">
            {props.description}
          </AlertDialogDescription>
          <HardViewDialogBox {...props} />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

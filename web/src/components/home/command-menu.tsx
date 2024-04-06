"use client";

import { Filter } from "lucide-react";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import React from "react";
import { Icons } from "../icons";

export function CommandMenu() {
  const [position, setPosition] = React.useState("explore");
  return (
    <div className="flex justify-center">
      <div className="flex w-full items-center justify-between py-4 pl-1 md:max-w-2xl xl:max-w-none">
        <div className="text-2xl font-bold">Explore</div>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:border-foreground/80 focus-within:ring-foreground/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <div className="order-first text-zinc-500 [&>*]:h-5 [&>*]:peer-focus:text-gray-500">
              <Icons.search />
            </div>
            <Input
              className="border-none bg-transparent shadow-none outline-none focus-visible:outline-none focus-visible:ring-0"
              type="text"
              placeholder="Search..."
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center justify-center p-0 outline-none hover:bg-none hover:outline-none"
              >
                <Filter className="h-9 w-9 stroke-1 p-1.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-1">
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="explore" className="capitalize">
                  Explore
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="following" className="capitalize">
                  Following
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

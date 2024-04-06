"use client";

import React from "react";

import { routes } from "~/config/route";
import { MainNav } from "./main-nav";
import ThemeToggle from "~/components/theme-toggle";
import { Bell } from "lucide-react";
import { Separator } from "../ui/separator";
import { WalletButton } from "../wallet/wallet-button";
import { MobileNav } from "./mobile-nav";
import { cn } from "~/lib/utils";

export function SiteHeader() {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/95"
    >
      <div
        className={cn(
          "container relative flex h-14 max-w-screen-2xl items-center py-4 sm:h-16",
        )}
      >
        <MainNav routes={routes} />
        <MobileNav />
        <div className="flex h-full flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex w-full flex-1 items-center gap-2 md:w-auto md:flex-none">
            <div className="rounded-md p-2 duration-200 ease-in-out hover:border hover:border-border">
              <Bell className="h-5 w-5" />
            </div>
            <ThemeToggle />
          </div>
          <Separator orientation="vertical" />
          <WalletButton />
        </div>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { useSelectedLayoutSegment } from "next/navigation";

import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import type { MobileNavItem } from "~/types";

interface MobileNavProps {
  mainNavItems?: MobileNavItem[];
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = React.useMemo(() => {
    const items = mainNavItems ?? [];

    return items;
  }, [mainNavItems]);

  return (
    <div className="flex flex-1 items-center justify-between lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <ViewVerticalIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pl-1 pr-0">
          <ScrollArea className="h-[calc(100vh-8rem)] py-0 pl-6">
            <div className="flex flex-col gap-4 pl-1 pr-7">
              <MobileLink
                href={String("subItem.href")}
                segment={String(segment)}
                setIsOpen={setIsOpen}
              >
                <span>1</span>
              </MobileLink>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60",
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}

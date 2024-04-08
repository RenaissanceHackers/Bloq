"use client";

import React from "react";
import Link from "next/link";

import { Icons } from "~/components/icons";

import { siteConfig } from "~/config/site";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

interface Route {
  readonly label: string;
  readonly path: string;
}

interface MainNavProps {
  readonly routes: Readonly<Route[]>;
}

export const MainNav = React.memo(({ routes }: MainNavProps) => {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold uppercase sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="gap-2 flex lg:gap-4 items-center text-sm">
        {routes.map((route, index) => (
          <Link
            href={route.path}
            key={index}
            className={cn(
              "cursor-pointer rounded-lg px-2 py-1 text-left text-sm font-bold tracking-wide text-primary hover:text-primary md:px-3",
              pathname === route.path ||
                pathname === route.path ||
                (pathname !== "/" &&
                  route.path === "/" &&
                  pathname.startsWith(route.path + "/"))
                ? "bg-muted font-medium"
                : "text-primary/80",
            )}
          >
            <span className="text-sm font-bold capitalize">{route.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
});

MainNav.displayName = "MainNav";

"use client";

import React from "react";

import { List } from "~/components/home/list";
import { Separator } from "~/components/ui/separator";
import { CommandMenu } from "~/components/home/command-menu";
import { CarouselList } from "~/components/home/carousel-list";
import { CarouselProgressBar } from "~/components/home/carousel-progress-bar";

import { useAtom } from "jotai";
import { userAtom } from "~/context/atom";
import { useWallet } from "@jup-ag/wallet-adapter";

export default function HomePage() {
  const wallet = useWallet();
  const [user, setUser] = useAtom(userAtom);

  React.useEffect(() => {
    const address = wallet.publicKey?.toString();

    if (address) {
      const index = user.findIndex((name) => name.name === address);

      if (index === -1) {
        setUser([...user, { name: address }]);
      }
    }
  }, [setUser, user, wallet.publicKey]);

  return (
    <section className="flex h-full flex-col items-center space-y-6 bg-background py-4 transition-all duration-300 lg:py-10">
      <div className="container max-w-6xl px-4 md:px-16 lg:px-10">
        <CarouselProgressBar />
        <CarouselList />
      </div>
      <Separator />
      <div className="container flex max-w-6xl flex-col bg-background px-4">
        <CommandMenu />
        <div className="flex max-w-6xl flex-1 transform justify-center transition-all duration-300 ease-in-out xl:justify-between">
          <List />
          <div className="hidden h-fit w-full max-w-96 py-2 xl:block">
            <div className="flex w-full rounded-md border p-6 shadow">test</div>
          </div>
        </div>
      </div>
    </section>
  );
}

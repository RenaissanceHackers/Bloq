"use client";

import React from "react";

import { AcceptedList } from "~/components/taskcenter/accepted-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { HardBox } from "~/components/taskcenter/hard-box";
import { useAtom } from "jotai";
import { exploreTaskAtom } from "~/context/atom";

export default function TaskCenterPage() {
  const [exploreTask] = useAtom(exploreTaskAtom);
  return (
    <section className="flex-1 bg-background">
      <div className="container max-w-7xl flex-1 space-y-3 py-12">
        <div className="text-2xl font-semibold">Tasks center</div>
        <Tabs defaultValue="explore" className="">
          <TabsList className="grid w-fit grid-cols-2 bg-transparent">
            <TabsTrigger value="explore" className="rounded-full py-1.5">
              Explore
            </TabsTrigger>
            <TabsTrigger value="accepted" className="rounded-full py-1.5">
              Accepted
            </TabsTrigger>
          </TabsList>
          <TabsContent value="explore">
            <React.Suspense>
              <div className="grid flex-1 flex-grow gap-4 pt-4 transition-all duration-300  md:grid-cols-2 lg:grid-cols-3">
                {exploreTask.map((item, index) => (
                  <HardBox key={index} {...item} />
                ))}
              </div>
            </React.Suspense>
          </TabsContent>
          <TabsContent value="accepted">
            <AcceptedList />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

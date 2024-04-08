import React from "react";

import { api } from "~/trpc/server";
import { TaskCenterBox } from "~/components/taskcenter/box";
import { AcceptedList } from "~/components/taskcenter/accepted-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default async function TaskCenterPage() {
  const all_task = await api.task.get();

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
              {all_task ? (
                <div className="grid flex-1 flex-grow gap-4 pt-4 transition-all duration-300  md:grid-cols-2 lg:grid-cols-3">
                  {all_task.map((item) => (
                    <TaskCenterBox key={item.id} {...item} />
                  ))}
                </div>
              ) : (
                <div>loading</div>
              )}
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

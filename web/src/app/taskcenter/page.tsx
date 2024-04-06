import { TaskCenterAcceptedBox } from "~/components/taskcenter/accepted-box";
import { TaskCenterBox } from "~/components/taskcenter/box";
import { TaskCenterCompletedBox } from "~/components/taskcenter/completed-box";
import { TaskCenterSubmittedBox } from "~/components/taskcenter/submitted-box";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function TaskCenterPage() {
  return (
    <section className="flex-1">
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
            <div className="grid flex-1 flex-grow grid-cols-3 gap-4 pt-4">
              {Array.from({ length: 10 }, (_, index) => (
                <TaskCenterBox key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="accepted" className="">
            <div className="grid flex-1 grid-cols-3 gap-4 pt-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <span className="font-normal capitalize">Draft</span>
                  <span className="rounded-full bg-white px-2 font-normal">
                    1
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <TaskCenterAcceptedBox key={index} />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <span className="font-normal capitalize">Submitted</span>
                  <span className="rounded-full bg-white px-2 font-normal">
                    1
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <TaskCenterSubmittedBox key={index} />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <span className="font-normal capitalize">Completed</span>
                  <span className="rounded-full bg-white px-2 font-normal">
                    1
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <TaskCenterCompletedBox key={index} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

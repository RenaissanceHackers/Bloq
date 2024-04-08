import { TaskCenterAcceptedBox } from "~/components/taskcenter/accepted-box";

import { api } from "~/trpc/server";
import { TaskCreate } from "./create";

export async function OwnerDraft() {
  const list = await api.task.get_draft();
  return (
    <div className="col-span-1 w-full space-y-4">
      <div className="flex items-center space-x-1">
        <span className="font-normal capitalize">Draft</span>
        <span className="rounded-full bg-white px-2 font-normal dark:bg-[#111113]">1</span>
      </div>
      <TaskCreate />
      <div className="grid grid-cols-1 gap-4">
        {list.map((item) => (
          <TaskCenterAcceptedBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

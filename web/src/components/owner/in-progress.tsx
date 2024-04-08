import { api } from "~/trpc/server";

import { OwnerBox } from "./owner-box";

export async function InProgress() {
  const list = await api.task.get_progress();
  return (
    <div className="col-span-2 space-y-4">
      <div className="flex items-center space-x-1">
        <span className="font-normal capitalize">In Progress</span>
        <span className="rounded-full bg-white px-2 font-normal">1</span>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {list.map((item) => (
          <OwnerBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

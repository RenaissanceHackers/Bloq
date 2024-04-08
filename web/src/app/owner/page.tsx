import { CardList } from "~/components/owner/card-list";
import { OwnerDraft } from "~/components/owner/draft";
import { InProgress } from "~/components/owner/in-progress";

import { ProjectDetail } from "~/components/owner/project-detail";

export default async function OwnerPage() {
  return (
    <section className="flex-1">
      <div className="container flex max-w-7xl flex-1 flex-col space-y-3 px-4 py-12">
        <div className="flex flex-col gap-4 transition-all duration-300 lg:flex-row lg:gap-0">
          <ProjectDetail />
          <CardList />
        </div>
        <div className="flex w-full flex-col">
          <div className="text-2xl font-semibold">Recent Tasks</div>
          <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
            <OwnerDraft />
            <InProgress />
          </div>
        </div>
      </div>
    </section>
  );
}

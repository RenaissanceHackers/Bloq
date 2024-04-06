import { useWallet } from "@jup-ag/wallet-adapter";
import React from "react";
import { OwnerDraft } from "~/components/owner/draft";
import { InProgress } from "~/components/owner/in-progress";
import { ProjectCard } from "~/components/owner/project-card";
import { ProjectDetail } from "~/components/owner/project-detail";
import { Total } from "~/components/owner/total";
import { api } from "~/trpc/server";

export default function OwnerPage() {
  const cardList = [
    {
      title: "Total Tasks",
      time: "12h",
      num: "12",
      color: "#17C964",
      toFixed: false,
      iconName: "assignment",
    },
    {
      title: "New Participants",
      time: "12h",
      num: "123",
      color: "#F31260",
      toFixed: false,
      iconName: "savings",
    },
    {
      title: "Total Reward Pool",
      time: "12h",
      num: "12345",
      color: "#F5A524",
      toFixed: true,
      iconName: "book",
    },
  ];

  return (
    <section className="flex-1">
      <div className="container flex max-w-7xl flex-1 flex-col space-y-3 py-12">
        <div className="flex items-center space-x-12">
          <ProjectDetail />
          <div className="grid h-36 w-full grid-cols-3 gap-6 py-1 pr-4">
            <Total
              iconName="assignment"
              title="Total Tasks"
              color="17C964"
              toFixed={false}
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="text-2xl font-semibold">Recent Tasks</div>
          <div className="grid grid-cols-3 gap-6 py-6">
            <OwnerDraft />
            <InProgress />
          </div>
        </div>
      </div>
    </section>
  );
}

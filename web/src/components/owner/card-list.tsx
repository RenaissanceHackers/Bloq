"use client";
import React from "react";
import { NewParticipants } from "./new-participants";
import { Total } from "./total";
import { Participants } from "./participants";

export function CardList() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    setInit(true);
  }, []);

  return (
    <>
      {init ? (
        <React.Suspense>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Total title="Total Tasks" />
            <Participants title="Total Tasks" />
            <NewParticipants title="Total Reward Pool" />
          </div>
        </React.Suspense>
      ) : null}
    </>
  );
}

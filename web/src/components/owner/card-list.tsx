"use client";
import React from "react";
import { NewParticipants } from "./new-participants";
import { Total } from "./total";

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
            <Total
              iconName="assignment"
              title="Total Tasks"
              color="17C964"
              toFixed={false}
            />
            <NewParticipants
              iconName="assignment"
              title="Total Tasks"
              color="17C964"
              toFixed={false}
            />
            <NewParticipants
              iconName="assignment"
              title="Total Tasks"
              color="17C964"
              toFixed={false}
            />
          </div>
        </React.Suspense>
      ) : null}
    </>
  );
}

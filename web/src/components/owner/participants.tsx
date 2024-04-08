/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
"use client";

import React from "react";

import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

import CountUp from "react-countup";

import { cn } from "~/lib/utils";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

import { motion } from "framer-motion";

interface TotalProps {
  iconName: string;
  title: string;
  color: string;
  toFixed: boolean;
}

export function Participants({ title, color, iconName }: TotalProps) {
  const { publicKey } = useWallet();

  const [userTotal, setUserTotal] = React.useState("0");

  const { data } = api.task.get_total.useQuery(
    {
      address: publicKey ? publicKey.toString() : "",
    },
    {
      enabled: !!publicKey,
    },
  );

  const update = api.task.get_last_submitted_task.useQuery(
    {
      address: publicKey ? publicKey.toString() : "",
    },
    {
      enabled: !!publicKey,
    },
  );

  const icon = require(`../../../public/icons/${iconName}.json`);
  const iconRef = React.useRef<LottieRefCurrentProps | null>(null);

  React.useEffect(() => {
    if (data) {
      setUserTotal(data.toString());
    }
  }, [data]);

  return (
    <motion.div
      className=""
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Card className="relative h-fit pb-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className={cn("text-sm font-medium", `text-[${color}]`)}>
            {title}
          </CardTitle>
          <div className="hidden xl:block">
            <div className="hidden dark:block">
              <Lottie
                lottieRef={iconRef}
                animationData={icon}
                loop={false}
                autoplay={false}
                className="h-5 w-5 stroke-black"
              />
            </div>
            <div className="block dark:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>
        </CardHeader>
        <div className="px-6">
          <div className="text-2xl font-bold">
            +
            <CountUp end={Number(userTotal)} start={0} duration={3} />
          </div>
        </div>
        <CardFooter className="flex max-w-lg flex-1 items-center text-balance py-0 text-sm leading-relaxed text-muted-foreground">
          <p className="w-full whitespace-normal">
            Last update:
            <span>1 hour ago</span>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

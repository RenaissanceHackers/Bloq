/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
"use client";

import React from "react";

import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

import CountUp from "react-countup";

import { type LottieRefCurrentProps } from "lottie-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { motion } from "framer-motion";

interface TotalProps {
  iconName: string;
  title: string;
  color: string;
  toFixed: boolean;
}

export function Total({ title, color, iconName }: TotalProps) {
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

  const iconRef = React.useRef<LottieRefCurrentProps | null>(null);

  React.useEffect(() => {
    if (data) {
      setUserTotal(data.toString());
    }
  }, [data]);

  return (
    <motion.div
      className="col-span-2 grid md:col-span-1"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Card className="" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription className="flex max-w-lg flex-col space-y-1.5 text-balance px-6 leading-relaxed">
          <div className="text-2xl font-bold">
            <CountUp end={Number(0)} start={0} duration={3} />
          </div>
        </CardDescription>
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

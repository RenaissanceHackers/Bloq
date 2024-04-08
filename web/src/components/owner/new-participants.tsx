"use client";

import React from "react";

import { api } from "~/trpc/react";

import CountUp from "react-countup";

import { cn } from "~/lib/utils";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface TotalProps {
  iconName: string;
  title: string;
  color: string;
  toFixed: boolean;
}

export function NewParticipants({ title, color, iconName }: TotalProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  const icon = require(`../../../public/icons/${iconName}.json`);
  const iconRef = React.useRef<LottieRefCurrentProps | null>(null);

  return (
    <motion.div
      className=""
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

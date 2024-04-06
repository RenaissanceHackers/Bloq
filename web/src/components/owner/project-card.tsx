"use client";

import CountUp from "react-countup";

import { cn } from "~/lib/utils";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  iconName: string;
  title: string;
  num: string;
  time: string;
  color: string;
  toFixed: boolean;
}

export function ProjectCard({
  time,
  title,
  num,
  color,
  iconName,
}: ProjectCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
  const icon = require(`../../../public/icons/${iconName}.json`);
  const iconRef = React.useRef<LottieRefCurrentProps | null>(null);
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
            <CountUp end={Number(num)} start={0} duration={3} />
          </div>
        </div>
        <CardFooter className="flex h-10 items-center py-0">
          <p className="text-sm text-muted-foreground">Last update: {time}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

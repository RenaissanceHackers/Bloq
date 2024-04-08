"use client";

import React from "react";

import CountUp from "react-countup";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { motion } from "framer-motion";

interface TotalProps {
  title: string;
}

export function Total({ title }: TotalProps) {
  return (
    <motion.div className="col-span-2 grid md:col-span-1">
      <Card className="" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription className="flex max-w-lg flex-col space-y-1.5 text-balance px-6 leading-relaxed">
          <div className="text-2xl font-bold">
            <CountUp end={Number(1)} start={0} duration={1} />
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

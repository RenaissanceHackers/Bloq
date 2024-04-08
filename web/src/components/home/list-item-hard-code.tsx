"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Icons } from "~/components/icons";

import Link from "next/link";
import { Badge } from "../ui/badge";

interface ListItemHardCodeProps {
  path: string;
  title: React.ReactNode;
  des: string;
  like: number;
  comment: number;
  img: string;
}

export function ListItemHardCode(props: ListItemHardCodeProps) {
  return (
    <Link href={props.path}>
      <motion.div
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group w-full max-w-2xl rounded-lg border bg-background p-4 pb-2 shadow-md hover:bg-accent-foreground/5"
      >
        <div className="flex items-center gap-4 pb-2">
          <div className="relative h-32 w-32">
            <Image
              fill
              alt="article"
              style={{ width: "100%" }}
              src={props.img}
              className="aspect-[2/1] w-full animate-reveal rounded-xl border object-cover transition-colors"
            />
          </div>
          <div className="flex h-32 flex-1 flex-col justify-between">
            <div className="line-clamp-1 cursor-pointer text-base font-semibold group-hover:text-blue-700">
              {props.title}
            </div>
            <p className="line-clamp-3 text-sm text-[#71717A]">{props.des}</p>
            <div className="flex h-5 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Icons.heart className="h-4 w-4" />
                  <span className="text-sm font-normal">{props.like}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icons.message className="h-4 w-4" />
                  <span className="text-sm font-normal">{props.comment}</span>
                </div>
              </div>
              <Badge>SOLANAFLOOR</Badge>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

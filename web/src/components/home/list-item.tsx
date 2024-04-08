"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Icons } from "~/components/icons";
import { api } from "~/trpc/react";
import Link from "next/link";

export function ListItem() {
  const list = api.article.get_all_posts.useQuery().data;
  return (
    <React.Suspense fallback={<div>loading</div>}>
      {list?.map((item, index) => (
        <Link key={index} href={`/article/${item.id.toString()}`}>
          <motion.div
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index, ease: "easeOut" }}
            className="group w-full max-w-2xl rounded bg-background p-4 pb-2 shadow"
          >
            <div className="flex items-center gap-4 pb-2">
              <div className="relative h-28 w-28">
                <Image
                  fill
                  alt="test"
                  src="/test.jpg"
                  className="aspect-[2/1] animate-reveal w-full rounded-xl border object-cover transition-colors"
                />
              </div>
              <div className="flex h-28 flex-1 flex-col justify-between">
                <div className="line-clamp-1 cursor-pointer text-base font-semibold group-hover:text-blue-700">
                  {item.title}
                </div>
                <p className="line-clamp-3 text-xs text-[#71717A]">
                  {item.task?.description}
                </p>
                <div className="flex h-5 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Icons.heart className="h-4 w-4" />
                      <span className="text-sm font-normal">328</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icons.message className="h-4 w-4" />
                      <span className="text-sm font-normal">212</span>
                    </div>
                  </div>
                  <div className="text-sm font-normal uppercase tracking-wide text-[#71717A]">
                    SOLANAFLOOR
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </React.Suspense>
  );
}

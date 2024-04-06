"use client";

import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

import type { MotionProps, Variants } from "framer-motion";
import type { ForwardRefComponent, HTMLMotionProps } from "framer-motion";

export const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.1, ease: "backOut" },
  },
};

type BaseMotionProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & MotionProps;

export function Motion({
  children,
  className,
  asChild,
  initial,
  animate,
  exit,
  variants,
  ...props
}: BaseMotionProps) {
  const Comp = asChild
    ? (motion(Slot) as ForwardRefComponent<
        HTMLDivElement,
        HTMLMotionProps<"div">
      >)
    : motion.div;

  const defaultProps: Partial<BaseMotionProps> = {
    initial: initial ?? "hidden",
    animate: animate ?? "visible",
    exit: exit ?? "hidden",
    variants: variants ?? defaultVariants,
  };
  return (
    <Comp
      {...defaultProps}
      className={cn(
        "text-2xl font-medium leading-relaxed dark:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

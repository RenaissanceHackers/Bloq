"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { calculateContributionPoints, cn } from "~/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { durationList } from "~/config/constants";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormDescription,
} from "../ui/form";
import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

type TReward = "token" | "point";

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  duration: z.string(),
  tokenRewardName: z.string().optional(),
  tokenRewardAmount: z.string().optional(),
  pointRewardAmount: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const defaultValues: Partial<FormValues> = {
  duration: "3600",
};

export function CreateTaskForm() {
  const { publicKey } = useWallet();
  const [reward, setReward] = React.useState<TReward>("token");

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { mutate } = api.task.create.useMutation();

  function onSubmit(data: FormValues) {
    console.log(data);
    if (publicKey) {
      const now = Date.now();
      const expiryDate = new Date(now + parseInt(data.duration, 10) * 1000);

      mutate({
        title: data.title,
        description: data.description,
        expiryDate: expiryDate.toISOString(),
        address: publicKey?.toString(),
        status: "draft",
        token: data.tokenRewardName ? true : false,
        contribution: calculateContributionPoints(
          data.tokenRewardAmount ? data.tokenRewardAmount : "0",
        ),
        tokenName: data.tokenRewardName,
        pointAmount: data.tokenRewardAmount,
        tokenAmount: data.tokenRewardAmount,
      });
    }
  }

  const inputAmount = form.watch("tokenRewardAmount");

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <span className="font-semibold leading-none tracking-tight">
          1. Task Information
        </span>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title">
            <span className="pl-0.5">Set the task title</span>
          </Label>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title of your task." {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="content">
            <span className="pl-0.5">Describe the task content</span>
          </Label>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your content here." {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <span className="font-semibold leading-none tracking-tight">
          2. Duration
        </span>
        <div className="my-0.5 flex flex-col space-y-1.5 pl-0.5">
          <Label htmlFor="content">
            <span className="">
              Set a deadline, after which the task will be deleted and any
              unused tokens will be returned to the original account.
            </span>
          </Label>
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <Select {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Duration" defaultValue="3600" />
                  </SelectTrigger>
                  <SelectContent>
                    {durationList.map((item, index) => (
                      <SelectItem value={item.value} key={index}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <span className="font-semibold leading-none tracking-tight">
          3. Set up a reward
        </span>
        <div className="flex items-center gap-4">
          <div
            onClick={() => setReward("token")}
            className={cn(
              "inline-flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              reward === "token" ? "bg-accent" : "",
            )}
          >
            Token
          </div>
          <div
            onClick={() => setReward("point")}
            className={cn(
              "inline-flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              reward === "point" ? "bg-accent" : "",
            )}
          >
            Point
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="tokenRewardAmount"
            render={({ field }) => (
              <FormItem className={cn(reward === "token" ? "" : "hidden")}>
                <Input {...field} placeholder="Amount" type="number" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenRewardName"
            render={({ field }) => (
              <FormItem className={cn(reward === "token" ? "" : "hidden")}>
                <Input {...field} placeholder="Token name" type="text" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenRewardAmount"
            render={({ field }) => (
              <FormItem className={cn(reward === "point" ? "" : "hidden")}>
                <Input {...field} placeholder="Amount" type="number" />
              </FormItem>
            )}
          />

          {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Token" defaultValue="solana" />
          </SelectTrigger>
          <SelectContent>
            {tokenList.map((item, index) => (
              <SelectItem value={item.value} key={index}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
        </div>
        <span className="font-semibold leading-none tracking-tight">
          4. Requirements
        </span>
        <div className="my-0.5 flex flex-col space-y-1.5 pl-0.5">
          <Label htmlFor="content">
            <span className="">
              To be eligible for rewards, the content created must meet a
              comprehensive score. Based on the value of the reward, about the
              calculation method.
            </span>
          </Label>
        </div>
        <div className="my-0.5 flex items-center space-x-2 pl-0.5">
          <span className="text-xl font-bold">
            {calculateContributionPoints(
              inputAmount ? inputAmount : "0",
            ).toLocaleString()}
          </span>
          <span>Contribution points</span>
        </div>
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg">
          publish
        </Button>
      </form>
    </Form>
  );
}

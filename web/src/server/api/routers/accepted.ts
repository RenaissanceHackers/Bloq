import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const acceptedRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });
      return await ctx.db.acceptedTask.findMany({
        where: {
          userId: user?.id,
        },
        include: {
          task: true,
        },
      });
    }),

  accept: publicProcedure
    .input(z.object({ address: z.string(), taskId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const task = await ctx.db.task.findUnique({
        where: { id: input.taskId },
      });

      if (!task) {
        throw new Error("Task not found");
      }

      if (task.expiryDate < new Date()) {
        throw new Error("Task is expired");
      }

      const existingAcceptedTask = await ctx.db.acceptedTask.findFirst({
        where: {
          userId: user.id,
          taskId: task.id,
        },
      });
      if (existingAcceptedTask) {
        throw new Error("Task already accepted");
      }

      await ctx.db.task.update({
        where: {
          id: task.id,
        },
        data: {
          status: "submitted",
        },
      });

      return await ctx.db.acceptedTask.create({
        data: {
          userId: user.id,
          taskId: task.id,
        },
      });
    }),

  draft: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return await ctx.db.acceptedTask.findMany({
        where: {
          userId: user.id,
          task: {
            status: "draft",
          },
        },
        include: {
          task: true,
        },
      });
    }),

  submitted: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return await ctx.db.acceptedTask.findMany({
        where: {
          userId: user.id,
          task: {
            status: "submitted",
          },
        },
        include: {
          task: true,
        },
      });
    }),
  completed: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return await ctx.db.acceptedTask.findMany({
        where: {
          userId: user.id,
          task: {
            status: "completed",
          },
        },
        include: {
          task: true,
        },
      });
    }),
});

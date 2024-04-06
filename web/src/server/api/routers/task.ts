import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({ title: z.string(), address: z.string(), expiryDate: z.string(), status: z.string(), contribution: z.string(), tokenName: z.string().optional(), tokenAmount: z.string().optional(), ponintAmount: z.string().optional(), token: z.boolean() }),
        )
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.db.user.findUnique({
                where: { address: input.address },
            });

            if (!user) {
                throw new Error("User not found");
            }

            return ctx.db.task.create({
                data: {
                    title: input.title,
                    expiryDate: input.expiryDate,
                    userId: user.id,
                    status: input.status,
                    token: input.token,
                    contribution: input.contribution,
                    tokenName: input.tokenName,
                    ponintAmount: input.ponintAmount,
                    tokenAmount: input.tokenAmount,
                },
            });
        }),

    get_draft: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.task.findMany({
            where: {
                status: "draft"
            }
        });
    }),

    get_progress: publicProcedure.query(async ({ ctx }) => {
        return ctx.db.task.findMany({
            where: {
                status: "progress"
            }
        });
    }),

    get_total: publicProcedure.input(z.object({ address: z.string() })).query(async ({ ctx, input }) => {
        const user = await ctx.db.user.findUnique({
            where: { address: input.address },
        });
        if (!user) {
            throw new Error("User not found");
        }
        return await ctx.db.task.count({
            where: { userId: user.id },
        });
    }),

    get_last_submitted_task: publicProcedure.input(z.object({ address: z.string() })).query(async ({ ctx, input }) => {
        const user = await ctx.db.user.findUnique({
            where: { address: input.address },
        });

        if (!user) {
            throw new Error("User not found");
        }

        return await ctx.db.task.findFirst({
            where: {
                userId: user.id
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
    }),
});

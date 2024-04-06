import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({ address: z.string() }),
        )
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.db.user.findUnique({
                where: { address: input.address },
            });

            if (user) {
                return null
            }

            return ctx.db.user.create({
                data: {
                    username: input.address,
                    address: input.address
                },
            });
        }),

    id: publicProcedure
        .input(
            z.object({ address: z.string() }),
        )
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.db.user.findUnique({
                where: { address: input.address },
            });

            if (!user) {
                return null
            }

            return user.id
        }),
});

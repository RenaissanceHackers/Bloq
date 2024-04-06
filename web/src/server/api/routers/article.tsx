import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const articleRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({ title: z.string(), address: z.string(), content: z.string() }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { address: input.address },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          userId: user.id,
        },
      });
    }),
  get_all_posts: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
});

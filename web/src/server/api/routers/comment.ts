import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const commentRouter = createTRPCRouter({
  readCommentsForPost: publicProcedure
    .input(
      z.object({
        postId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const comments = await ctx.db.comment.findMany({
        where: { postId: input.postId },
        include: {
          user: true,
        },
      });

      return comments;
    }),

  create: publicProcedure
    .input(
      z.object({
        content: z.string(),
        userId: z.number(),
        postId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const postExists = await ctx.db.post.findUnique({
        where: { id: input.postId },
      });

      if (!postExists) {
        throw new Error("Post not found");
      }

      return ctx.db.comment.create({
        data: {
          content: input.content,
          userId: input.userId,
          postId: input.postId,
        },
      });
    }),
});

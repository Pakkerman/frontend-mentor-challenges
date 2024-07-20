import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { comments, users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const commentRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ userId: z.number(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(comments).values({
        authorId: input.userId,
        content: input.content,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.db.query.comments.findMany();
    } catch (err) {
      console.log("something wrong with comment.getAll: ", err);
    }
  }),

  getAllWithUsername: publicProcedure.query(async ({ ctx }) => {
    try {
      const data = await ctx.db
        .select()
        .from(comments)
        .leftJoin(users, eq(comments.authorId, users.id));

      return data.map((item) => ({ ...item.user, ...item.comment }));
    } catch (err) {
      console.log("something wrong with comment.getAll: ", err);
    }
  }),
});

// export type InsertUser = typeof usersTable.$inferInsert;
export type GetAllWithUsername = typeof comments.$inferSelect;

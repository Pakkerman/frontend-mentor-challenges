// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";
import { url } from "inspector";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `new_${name}`);

export const comments = createTable("comment", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("content", { length: 256 }),
  score: int("score"),
  authorId: int("author_id"),
  replyIds: text("reply_ids", { mode: "json" })
    .$type<number[]>()
    .default(sql`(json_array())`),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export const replies = createTable("reply", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("content", { length: 256 }),
  score: int("score"),
  authorId: int("author_id"),
  replyingTo: int("replying_to"),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export const users = createTable("user", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text("username", { length: 256 }),
  avatar: text("avatar", { length: 256 }),
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectComment = typeof comments.$inferSelect;
export type InsertComment = typeof comments.$inferInsert;
export type SelectReply = typeof replies.$inferSelect;
export type InsertReply = typeof replies.$inferInsert;

export type Comment = SelectUser & SelectComment;

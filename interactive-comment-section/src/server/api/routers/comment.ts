import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { comments } from "~/server/db/schema";

export const commentRouter = createTRPCRouter({});

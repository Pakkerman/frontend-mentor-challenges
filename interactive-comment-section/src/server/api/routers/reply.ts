import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { replies } from "~/server/db/schema";

export const replyRouter = createTRPCRouter({});

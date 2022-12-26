import { router } from "../trpc";
import { exampleRouter } from "./example";
import { apiRouter } from "./api";
import { prismaRouter } from "./prisma";

export const appRouter = router({
  example: exampleRouter,
  api: apiRouter,
  prisma: prismaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

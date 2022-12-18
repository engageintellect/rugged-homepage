import { router } from "../trpc";
import { exampleRouter } from "./example";
import { apiRouter } from "./api";

export const appRouter = router({
  example: exampleRouter,
  api: apiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

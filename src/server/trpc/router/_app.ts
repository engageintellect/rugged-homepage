import { router } from "../trpc";
import { exampleRouter } from "./example";
import { apiRouter } from "./api";
import { usersRouter } from "./users";
import { peopleRouter } from "./people";
import { testimonialsRouter } from "./testimonials";

export const appRouter = router({
  example: exampleRouter,
  api: apiRouter,
  users: usersRouter,
  people: peopleRouter,
  testimonials: testimonialsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

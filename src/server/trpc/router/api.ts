import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const apiRouter = router({
  alert: publicProcedure
    .input(
      z
        .object({
          title: z.string().nullish(),
          msg: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ input }) => {
      return {
        title: `${input?.title ?? "hello"}`,
        msg: `${input?.msg ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  hi: publicProcedure.query(() => {
    return {
      greeting: `Hello from tRPC.`,
    };
  }),
});

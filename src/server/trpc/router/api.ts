import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const apiRouter = router({
  alert: publicProcedure
    .input(
      z
        .object({
          title: z.string().nullish(),
          msg: z.string().nullish(),
          url: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ input }) => {
      return {
        title: `${input?.title ?? "hello"}`,
        msg: `${input?.msg ?? "world"}`,
        url: `${input?.url ?? "#form"}`,
      };
    }),
  
  getUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany();
  }),


  createUser: publicProcedure
    .input(
      z
        .object({
          userName: z.string().nullish(),
          password: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.users.create({
        data: {
          userName: `${input?.userName ?? "jim"}`,
          password: `${input?.password ?? "morrison"}`,
        }
      });
    })

});
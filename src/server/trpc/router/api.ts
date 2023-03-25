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
        },
      });
    }),

  submitForm: publicProcedure
    .input(
      z
        .object({
          properties: z
            .object({
              firstname: z.string().nullish(),
              lastname: z.string().nullish(),
              email: z.string().nullish(),
              phone: z.string().nullish(),
              company: z.string().nullish(),
            })
            .nullish(),
        })
        .nullish()
    )

    .query(async ({ ctx, input }) => {
      const response = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          },

          body: JSON.stringify({
            properties: {
              firstname: `${input?.properties?.firstname ?? "jim"}`,
              lastname: `${input?.properties?.lastname ?? "morrison"}`,
              email: `${input?.properties?.email ?? "name@email.com"}`,
              phone: `${input?.properties?.phone ?? "1234567890"}`,
              company: `${input?.properties?.company ?? "jim morrison"}`,
            },
          }),
        }
      );

      var responseObj = await response.json();

      if (response.status >= 400) {
        return {
          error: "There was a 400 Error",
          data: responseObj,
        };
      }

      return {
        status: "ok",
        data: responseObj,
      };
    }),
});

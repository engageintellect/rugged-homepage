import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const usersRouter = router({
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
          userName: input?.userName,
          password: input?.password,
        }
      });
    }),

	deleteUser: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.users.delete({
				where: {
					id: input?.id,
				}
			});
		}),

	updateUser: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
					userName: z.string().nullish(),
					password: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.users.update({
				where: {
					id: input?.id,
				},
				data: {
					userName: input?.userName,
					password: input?.password,
				}
			});
		}),

});
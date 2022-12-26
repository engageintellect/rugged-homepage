import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const peopleRouter = router({
  getPeople: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.people.findMany();
  }),


  createPerson: publicProcedure
    .input(
      z
        .object({
          firstName: z.string().nullish(),
          lastName: z.string().nullish(),
					company: z.string().nullish(),
					email: z.string().nullish(),
					phone: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.people.create({
        data: {
					firstName: input?.firstName,
					lastName: input?.lastName,
					company: input?.company,
					email: input?.email,
					phone: input?.phone,
        }
      });
    }),

	deletePerson: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.people.delete({
				where: {
					id: input?.id,
				}
			});
		}),

	updatePerson: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
					firstName: z.string().nullish(),
					lastName: z.string().nullish(),
					company: z.string().nullish(),
					email: z.string().nullish(),
					phone: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.people.update({
				where: {
					id: input?.id,
				},
				data: {
					firstName: input?.firstName,
					lastName: input?.lastName,
					company: input?.company,
					email: input?.email,
					phone: input?.phone,
				}
			});
		}),

});
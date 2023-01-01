import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const testimonialsRouter = router({
  getTestimonials: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.testimonials.findMany();
  }),


  createTestimonial: publicProcedure
    .input(
      z
        .object({
          name: z.string().nullish(),
          position: z.string().nullish(),
					company: z.string().nullish(),
					testimonial: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.testimonials.create({
        data: {
					name: input?.name,
					position: input?.position,
					company: input?.company,
					testimonial: input?.testimonial,
        }
      });
    }),

	deleteTestimonial: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.testimonials.delete({
				where: {
					id: input?.id,
				}
			});
		}),

	updateTestimonial: publicProcedure
		.input(
			z
				.object({
					id: z.string().nullish(),
					name: z.string().nullish(),
					position: z.string().nullish(),
					company: z.string().nullish(),
					testimonial: z.string().nullish(),
				})
				.nullish()
		)
		.query(({ ctx, input }) => {
			return ctx.prisma.testimonials.update({
				where: {
					id: input?.id,
				},
				data: {
					name: input?.name,
					position: input?.position,
					company: input?.company,
					testimonial: input?.testimonial,
				}
			});
		}),

});
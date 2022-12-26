import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const newUser = await prisma.people.create({
    data: {
			firstName: "jon",
      lastName: "morrison",
      company: "morrison",
      email: "morrison",
      phone: "morrison",
    }
  });
  res.status(200).json(newUser);
};

export default examples;


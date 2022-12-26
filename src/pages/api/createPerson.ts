import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const newUser = await prisma.people.create({
    data: {
			firstName: "Steve",
      lastName: "Jobs",
      company: "Apple",
      email: "steve@apple.com",
      phone: "222-222-2222",
    }
  });
  res.status(200).json(newUser);
};

export default examples;


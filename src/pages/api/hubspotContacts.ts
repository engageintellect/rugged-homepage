import { type NextApiRequest, type NextApiResponse } from "next";

// import { prisma } from "../../server/db/client";

const hubspotContacts = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
		},

	});
	const data = await response.json();
	res.status(200).json(data);

	
	
};

export default hubspotContacts;



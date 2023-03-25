import { NextApiRequest, NextApiResponse } from "next";

export default async function SubmitForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers);

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },

        body: JSON.stringify(req.body),
      }
    );

    var responseObj = await response.json();

    if (response.status >= 400) {
      return res
        .status(400)
        .json({ error: "There was a 400 Error", data: responseObj });
    }

    return res.status(200).json({ status: "ok", data: responseObj });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "There was a 500 error", data: error });
  }
}

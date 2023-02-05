// send get request to the api with headers

import { NextApiRequest, NextApiResponse } from "next";

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log('this is the request body');
  // console.log(req.body);

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer pat-na1-73e49bfb-d6a2-42ae-8663-a5a1b21af776`,
        },

        body: JSON.stringify(req.body),
      }
    );

    var responseObj = await response.json();
    // console.log(responseObj);

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

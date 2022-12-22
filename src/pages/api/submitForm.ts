// send get request to the api with headers

import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData(req: NextApiRequest, res: NextApiResponse) {


      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
					'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`
        },
        body: `
        {
          "properties": {
            "firstname": "2te3sting",
            "lastname": "smith",
            "email": "jdsdh@d3333hskdjh.com",
            "phone": "1234567890"
          }
        }`

  
      });
      const data = await response.json();
      // console.log(data);
      console.log('hello')
			console.log(res.status(200).json({ message: data })	)
		}

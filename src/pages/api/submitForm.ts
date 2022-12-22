// send get request to the api with headers

import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData(req: NextApiRequest, res: NextApiResponse) {
  console.log('this is the request body')
  console.log(req.body)


      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'text',
					'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`
        },

        body: req.body

        // body: `
        // {
        //   "properties": {
        //     "firstname": "heera999n4",
        //     "lastname": "smith",
        //     "email": "hearn2@d3433993h777skdlllljh.com",
        //     "phone": "1234567890"
        //   }
        // }`

  
      });
      const data = await response.json();
      // console.log(data);
      console.log('hello')
			console.log(data)
      res.status(200).json(data)
		}

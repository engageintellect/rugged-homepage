







export default function Hey(){

	const data = {
		properties: {
			firstname: 'cool',
			lastname: 'smith',
			email: 'myemail@cool.com',
			phone: '555-555-5555'
		}
	}

	const submitForm = async () => {
		const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
			},
			body: `
			{
				"properties": {
					"firstname": "cool",
					"lastname": "smith",
					"email": "coolbro@email.com",
					"phone": "555-555-5555"
				}

			}`
	})
		const res = await response.json()
		console.log(res)
	}

return (
	<>
	<div>
		hello there world
	</div>

	<button onClick={submitForm}>
		click me
	</button>
	</>
)

}
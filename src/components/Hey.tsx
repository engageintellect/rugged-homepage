// Hey Page

export default function Hey() {

	const data = {
		properties: {
			firstname: 'Josharooo3',
			lastname: 'Patel',
			email: 'josharoo4@gmail.com',
			phone: '555-555-5555'
		}
	}

	const submitForm = async () => {
		const response = await fetch('/api/submitForm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
			},
			body: JSON.stringify(data)
	})
		const res = await response.json();
		console.log(res);
	}

return (
	<>
	<div>
		Testing POST request to internal API
	</div>

	<button onClick={submitForm}>
		click me
	</button>
	</>
)

}
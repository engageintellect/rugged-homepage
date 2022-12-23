import { useState } from "react";

export default function Form() {

  // Interface for form data
  interface FormData {
    firstname: string;
    lastname: string;
    company: string
    email: string;
    phone: string;
  }

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    company: "",
    lastname: "",
    email: "",
    phone: "",
  });

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<any>) => {

    //! TODO: Add form validation

    e.preventDefault();
    console.log(`Form Data: ${JSON.stringify(formData)}}`);

	  const data = {
		  properties: {
			  firstname: formData.firstname,
			  lastname: formData.lastname,
        company: formData.company,
			  email: formData.email,
			  phone: formData.phone,
		  }
	  }

		const response = await fetch('/api/submitForm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
			body: JSON.stringify(data)
    })
    const res = await response.json();
    console.log('Form Response')
    console.log(res)

  };



  return (
    <div className="flex items-center justify-center">
      <form className="grid w-full grid-cols-1 gap-3 md:max-w-xl">
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="text"
          placeholder="Company"
          name="hs_email_domain"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="textarea"
          placeholder="Phone Number"
          name="phone"
          onChange={(e) => handleChange(e)}
        />

        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg transition-transform duration-200 hover:bg-blue-700 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

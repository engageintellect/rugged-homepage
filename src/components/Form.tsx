import { useState } from "react";

export default function Form() {
  interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //! TODO: This could be cleaner...

  const handleSubmit = (e: React.FormEvent<any>) => {
    // e.preventDefault();
    // console.log(formData);
    postData();
  };



  const postData = async () => {
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
    };

    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {"Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},
      body: `
      properties: {
        'firstname': ${data.firstname},
        'lastname': ${data.lastname},
        'email': ${data.email},
        'phone': ${data.phone},
      }`,
    });
    console.log('hello world')
    const res = response.json();
    console.log(res)
  };





  //!------------------------------------------

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
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="textarea"
          placeholder="Phone"
          name="phone"
          onChange={(e) => handleChange(e)}
        />

        {/* // Testing Form */}
        {/* {JSON.stringify(formData)} */}

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

import { useState } from "react";

export default function Form () {
  interface FormData {
    name: string;
    email: string;
    businessUnit: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessUnit: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //! TODO: This could be cleaner...

  const handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    console.log(formData);
  };

  //!------------------------------------------

  return (
    <div className="flex items-center justify-center">
      <form className="grid w-full grid-cols-1 gap-3 md:max-w-xl">
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="text"
          placeholder="Name"
          name="name"
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
          type="text"
          placeholder="Business Unit"
          name="businessUnit"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
          type="textarea"
          placeholder="Message"
          name="message"
          onChange={(e) => handleChange(e)}
        />

        {/* // Testing Form */}
        {/* {JSON.stringify(formData)} */}

        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


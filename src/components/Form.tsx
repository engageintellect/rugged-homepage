import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formResponse, setFormResponse] = useState({
    status: "",
    message: "",
  });

  const displayResponse = (status: string, message: string) => {
    setFormResponse({
      status: status,
      message: message,
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          company: Yup.string(),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, "Must be exactly 10 digits")
            .max(10, "Must be exactly 10 digits")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // Submit the form
          setSubmitting(false);
          setFormSubmitted(true);
          console.log(values);
          resetForm();

          const data = {
            properties: {
              firstname: values.firstName,
              lastname: values.lastName,
              company: values.company,
              email: values.email,
              phone: values.phone,
            },
          };

          const response = await fetch("/api/submitForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify(data),
          });
          const res = await response.json();
          console.log("Form Response");
          console.log(res);
          displayResponse(
            res.data.status || "success",
            res.data.message ||
              "Thanks for reaching out, we'll be in touch soon!"
          );
          console.log("formResponse");
          console.log(formResponse);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <div className="flex items-center justify-center">
            <Form className="grid w-full grid-cols-1 gap-4 md:max-w-xl">
              <div className="">
                {(touched.firstName && errors.firstName && (
                  <div className="text-red-500">{errors.firstName}</div>
                )) || <label>First Name*</label>}
                <Field
                  type="text"
                  name="firstName"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                />
              </div>

              <div className="">
                {(touched.lastName && errors.lastName && (
                  <div className="text-red-500">{errors.lastName}</div>
                )) || <label>Last Name*</label>}
                <Field
                  type="text"
                  name="lastName"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                />
              </div>

              <div className="">
                {(touched.company && errors.company && (
                  <div className="text-red-500">{errors.company}</div>
                )) || <label>Company</label>}
                <Field
                  type="text"
                  name="company"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                />
              </div>

              <div className="">
                {(touched.email && errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )) || <label>E-Mail*</label>}
                <Field
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                />
              </div>

              <div className="">
                {(touched.phone && errors.phone && (
                  <div className="text-red-500">{errors.phone}</div>
                )) || <label>Phone*</label>}
                <Field
                  type="text"
                  name="phone"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                />
              </div>

              <div className="my-4">
                {/* MAKE FORM FEEDBACK RED IF ERROR, ELSE, MAKE GREEN */}
                <div className="pb-3">
                  {(formResponse.status == "error" && (
                    <div className="rounded-md bg-red-600 p-2 text-center">
                      <div className="font-bold uppercase">
                        {formResponse.status}
                      </div>
                      <div>
                        <div>{formResponse.message}</div>
                      </div>
                    </div>
                  )) ||
                    (formResponse.status == "success" && (
                      <div className="rounded-md bg-green-600 p-2 text-center">
                        <div className="font-bold uppercase text-green-500">
                          {formResponse.status}
                        </div>
                        <div>
                          <div>{formResponse.message}</div>
                        </div>
                      </div>
                    ))}
                </div>

                <a>
                  <button
                    onClick={() => displayResponse}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-800 p-4 text-white shadow-lg transition-transform duration-200 hover:bg-blue-700 active:scale-95"
                  >
                    Submit
                  </button>
                </a>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

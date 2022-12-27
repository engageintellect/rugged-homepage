import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

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
            <Form className="grid w-full grid-cols-1 gap-2 md:max-w-xl">
              <div className="">
                {(touched.firstName && errors.firstName && (
                  <label className="text-red-500">{errors.firstName}</label>
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
                  <label className="text-red-500">{errors.lastName}</label>
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
                  <label className="text-red-500">{errors.company}</label>
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
                  <label className="text-red-500">{errors.email}</label>
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
                  <label className="text-red-500">{errors.phone}</label>
                )) || <label>Phone*</label>}
                <Field
                  type="text"
                  name="phone"
                  placeholder=""
                  className="w-full rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
                  helperText="hello world"
                />
              </div>

              <div className="my-4">
                {/* MAKE FORM FEEDBACK RED IF ERROR, ELSE, MAKE GREEN */}
                <div className="pb-3">
                  {(formResponse.status == "error" && (
                    <div className="flex items-center justify-center gap-4 rounded-md bg-red-600 p-2 text-center text-sm">
                      <div className="pulse animate-pulse">
                        <ExclamationCircleIcon className="w-10 text-white" />
                      </div>
                      <div className="font-bold uppercase"></div>
                      <div>
                        <div>{formResponse.message}</div>
                      </div>
                    </div>
                  )) ||
                    (formResponse.status == "success" && (
                      <div className="flex items-center justify-center gap-4 rounded-md bg-green-600 p-2 text-center text-sm">
                        <div className="pulse animate-pulse">
                          <CheckCircleIcon className="w-10 text-white" />
                        </div>
                        <div>
                          <div>{formResponse.message}</div>
                        </div>
                        <a href="/">
                          <div className="">
                            <div className="underline">Back to Home</div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>

                <a>
                  <button
                    onClick={() => displayResponse}
                    type="submit"
                    disabled={isSubmitting}
                    className="transition-color w-full animate-gradient-x rounded-lg bg-gradient-to-r from-purple-700 to-blue-500 p-4 text-white shadow-xl duration-200 hover:from-purple-500 hover:via-blue-500 hover:to-purple-500 active:scale-95"
                  >
                    <div className="font-bold">Submit</div>
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
